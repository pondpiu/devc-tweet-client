import { useState } from 'react'

import { getTweets } from './mockdata'

export const useTweets = () => {
  const tweets = getTweets()
  return {
    tweets,
    // loading,
  }
}

export const useCreateTweet = () => {
  const [loading, setLoading] = useState(false)
  return {
    add: async message => {
      setLoading(true)
      // await createTweet()
      setLoading(false)
    },
    loading,
  }
}

export const useRetweet = () => {
  const [loading, setLoading] = useState(false)
  return {
    retweet: async tweetId => {
      setLoading(true)
      // await retweet()
      setLoading(false)
    },
    loading,
  }
}
