import React, { useState } from 'react'
import Avatar from 'react-avatar'

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
  RetweetsCount,
} from './Elements'
import { useTweets, useCreateTweet, useRetweet } from './hooks'

const Actions = ({ tweet }) => {
  const { retweet, loading: retweeting } = useRetweet()
  const targetRetweet = tweet.type === 'RETWEET' ? tweet.source : tweet
  return (
    <ActionContainer>
      <Action onClick={() => retweet(targetRetweet, USER)}>retweet </Action>
      {tweet.retweetsCount && tweet.retweetsCount > 0 ? (
        <RetweetsCount>({tweet.retweetsCount})</RetweetsCount>
      ) : null}
    </ActionContainer>
  )
}

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
      {!inRetweet && <Actions tweet={tweet} />}
    </ContentContainer>
  </TweetContainer>
)
const Retweet = ({ tweet, cb }) => (
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
      <Actions tweet={tweet} />
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
            user: USER,
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
          tweet.type === 'RETWEET' ? (
            <Retweet tweet={tweet} />
          ) : (
            <Tweet tweet={tweet} />
          ),
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

const USER = {
  username: 'pondpiu',
  displayName: 'Pond',
}
