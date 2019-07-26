import React, { useState } from 'react'
import Avatar from 'react-avatar'

import { useTweets, useCreateTweet } from './hooks'
import {
  TweetContainer,
  AvatarContainer,
  Action,
  ContentContainer,
  TweeterInfo,
  DisplayName,
  Username,
  Message,
  ActionContainer,
  TweetInRetweetContainer,
  RetweetLabel,
  TimelineContainer,
  InputContainer,
  Input,
  Button,
} from './Elements'

const Tweet = ({ tweet, inRetweet }) => (
  <TweetContainer inRetweet={inRetweet}>
    <AvatarContainer>
      <Avatar name={tweet.user.displayName} size="40" round />
    </AvatarContainer>
    <ContentContainer>
      <TweeterInfo>
        <DisplayName>{tweet.user.displayName}</DisplayName>
        <Username>@{tweet.user.username}</Username>
      </TweeterInfo>
      <Message>{tweet.message}</Message>
      {!inRetweet && (
        <ActionContainer>
          <Action>retweet </Action>
          <Action>like </Action>
        </ActionContainer>
      )}
    </ContentContainer>
  </TweetContainer>
)
const Retweet = ({ tweet }) => (
  <TweetContainer>
    <AvatarContainer>
      <Avatar name={tweet.user.displayName} size="40" round />
    </AvatarContainer>
    <ContentContainer>
      <TweeterInfo>
        <DisplayName>{tweet.user.displayName}</DisplayName>
        <Username>@{tweet.user.username}</Username>
        <RetweetLabel>retweeted</RetweetLabel>
      </TweeterInfo>
      <TweetInRetweetContainer>
        <Tweet tweet={tweet.source} inRetweet />
      </TweetInRetweetContainer>
      <ActionContainer>
        <Action>retweet </Action>
        <Action>like </Action>
      </ActionContainer>
    </ContentContainer>
  </TweetContainer>
)

const TweetInput = ({ add, loading }) => {
  const [inputValue, setInputValue] = useState(null)
  return (
    <InputContainer>
      <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="message"
      />
      <Button
        onClick={() => {
          setInputValue('')
          add({
            message: inputValue,
            user: {
              username: 'pondpiu',
              displayName: 'Pond',
            },
          })
        }}
        disabled={loading || !inputValue || inputValue.length === 0}
      >
        {loading ? 'Tweeting' : 'Tweet'}
      </Button>
    </InputContainer>
  )
}

const Timeline = () => {
  const { tweets, loading } = useTweets()
  const { add, loading: adding } = useCreateTweet()
  return (
    <TimelineContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        tweets.map(tweet =>
          tweet.source ? <Retweet tweet={tweet} /> : <Tweet tweet={tweet} />,
        )
      )}
      <TweetInput add={add} loading={adding} />
    </TimelineContainer>
  )
}

const Home = () => {
  return (
    <div>
      <Timeline />
    </div>
  )
}

export default Home
