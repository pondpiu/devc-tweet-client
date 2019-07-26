import { useState } from 'react'

import { getTweets, addTweet } from './mockdata'

export const useTweets = () => {
  const [loading, setLoading] = useState(false)
  return {
    tweets: getTweets(),
    loading,
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
    retweet: async (source, user) => {
      setLoading(true)
      // await retweet()
      setLoading(false)
    },
    loading,
  }
}
