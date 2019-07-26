import styled from '@emotion/styled'
import { css } from 'emotion'
import React from 'react'
import Avatar from 'react-avatar'

const Header = () => <div>Home</div>

const Action = styled.div`
  margin-right: 20px;
`

const Tweet = () => (
  <div
    className={css`
      display: flex;
      margin-top: 10px;
    `}
  >
    <div
      className={css`
        margin-right: 10px;
      `}
    >
      <Avatar name="pondpiu" size="40" round />
    </div>
    <div>
      <div
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            margin-right: 10px;
            font-weight: bold;
          `}
        >
          displayName
        </div>
        <div>@username</div>
      </div>
      <div>Message</div>
      <div
        className={css`
          display: flex;
        `}
      >
        <Action>reply </Action>
        <Action>retweet </Action>
        <Action>like </Action>
      </div>
    </div>
  </div>
)
const Timeline = () => (
  <div>
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
)

const Home = () => {
  return (
    <div>
      <Header />
      <Timeline />
    </div>
  )
}

export default Home
