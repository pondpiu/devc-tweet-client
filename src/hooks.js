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
    add: tw => {
      setLoading(true)
      addTweet({
        ...tw,
        type: 'TWEET',
      })
    },
    loading,
  }
}

export const useRetweet = () => {
  const [loading, setLoading] = useState(false)
  return {
    retweet: (source, user) => {
      setLoading(true)
      addTweet({
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
    like: (tweet, user) => {
      setLoading(true)
      // likeTweet()
      setLoading(false)
    },
    loading,
  }
}
