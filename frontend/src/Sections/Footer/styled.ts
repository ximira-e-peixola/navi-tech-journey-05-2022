import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
`
export const InnerWrapper = styled.div`
@media (max-width: 550px) {
  flex-direction: column;
}
`
export const StyleP = styled.p`
@media (max-width: 550px) {
  margin: 20px 0;
}
`

export const PlaceHolder = styled.div`
width: 64px;
`
