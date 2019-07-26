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
        addTweet(tw)
        setLoading(false)
      }, 500)
    },
    loading,
  }
}
