import moment from 'moment'
import _ from 'lodash'

let data = {
  tweets: [
    {
      id: 1,
      createdAt: '2019-07-26T05:29:47.878Z',
      type: 'TWEET',
      user: {
        displayName: 'Aik',
        username: 'blutarche',
      },
      message: 'Hello, world!',
    },
    {
      id: 2,
      createdAt: '2019-07-26T05:40:47.878Z',
      type: 'TWEET',
      user: {
        displayName: 'Kohpai',
        username: 'bamboo',
      },
      message: 'Hello, brothers!',
    },
    {
      id: 101,
      type: 'RETWEET',
      user: {
        displayName: 'Kohpai',
        username: 'bamboo',
      },
      createdAt: '2019-07-26T05:51:59.878Z',
      source: {
        id: 1,
        createdAt: '2019-07-26T05:29:47.878Z',
        type: 'TWEET',
        user: {
          displayName: 'Aik',
          username: 'blutarche',
        },
        message: 'Hello, world!',
      },
    },
  ],
}

export const getTweets = () =>
  _.sortBy(data.tweets, tw => -moment(tw.createdAt).valueOf())
export const addTweet = tweet => {
  data.tweets = [
    ...data.tweets,
    {
      ...tweet,
      id: data.tweets.length,
      createdAt: moment()
        .clone()
        .toISOString(),
    },
  ]
}
