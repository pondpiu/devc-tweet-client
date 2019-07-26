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
    add: async tw => {
      setLoading(true)
      await addTweet({
        ...tw,
        type: 'TWEET',
      })
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
      await addTweet({
        user,
        source,
        type: 'RETWEET',
      })
      setLoading(false)
    },
    loading,
  }
}

export const useLike = () => {
  const [loading, setLoading] = useState(false)
  return {
    like: async (tweet, user) => {
      setLoading(true)
      // await likeTweet({ tweet, user })
      setLoading(false)
    },
    loading,
  }
}
