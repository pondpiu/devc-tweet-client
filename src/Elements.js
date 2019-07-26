import styled from '@emotion/styled'

export const Action = styled.div`
  margin-right: 20px;
  color: #88aaff;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
export const TimelineContainer = styled.div`
  padding-bottom: 64px;
`
export const TweetContainer = styled.div`
  display: flex;
  padding: 16px 16px 16px;
  border-bottom: ${p => (p.inRetweet ? `` : '1px #ddd solid')};
  background-color: #fff;
`
export const AvatarContainer = styled.div`
  margin-right: 10px;
`
export const ContentContainer = styled.div``
export const TweeterInfo = styled.div`
  display: flex;
`
export const DisplayName = styled.div`
  margin-right: 4px;
  font-weight: bold;
`
export const Username = styled.div``
export const Message = styled.div``
export const ActionContainer = styled.div`
  display: flex;
  margin-top: 4px;
`

export const TweetInRetweetContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px #eee solid;
  ${'' /* padding: 0 16px 8px; */}
  margin-top: 4px;
`
export const RetweetLabel = styled.div`
  margin-left: 8px;
  color: #666;
`

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px #ddd solid;
  height: 64px;
  background-color: #fff;
  padding: 8px 16px;
  display: flex;
  box-sizing: border-box;
`
export const Input = styled.input`
  height: 100%;
  box-sizing: border-box;
  padding: 0 4px;
  flex: 1;
  font-size: 24px;
  &::placeholder {
    color: #bbb;
  }
`
export const Button = styled.div`
  margin-left: 8px;
  background-color: #7788ee;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  ${p =>
    p.disabled
      ? `
    pointer-events: none;
    background-color: #bbb;
  `
      : ``}
  &:hover {
    opacity: 0.8;
  }
`
