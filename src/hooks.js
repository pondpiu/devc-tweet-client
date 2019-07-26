import { useState, useEffect } from 'react'

import { getTweets, addTweet } from './mockdata'

export const useTweets = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
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
      setTimeout(() => {
        addTweet({
          ...tw,
          type: 'TWEET',
        })
        setLoading(false)
      }, 500)
    },
    loading,
  }
}

export const useRetweet = () => {
  const [loading, setLoading] = useState(false)
  return {
    retweet: (source, user) => {
      setLoading(true)
      setTimeout(() => {
        addTweet({
          user,
          source,
          type: 'RETWEET',
        })
        setLoading(false)
      }, 500)
    },
    loading,
  }
}

export const useLike = () => {
  const [loading, setLoading] = useState(false)
  return {
    like: (tweet, user) => {
      setLoading(true)
      setTimeout(() => {
        // likeTweet()
        setLoading(false)
      }, 500)
    },
    loading,
  }
}
