import styled from 'styled-components'

export const Wrapper = styled.section`
padding-top: 80px;
width: 100%;
min-height: 840px;
@media (max-width: 960px) {
  flex-direction: column;
}
`
export const LeftSide = styled.div`
width: 50%;
height: 100%;
@media (max-width: 960px) {
  width: 100%;
  order: 2;
  margin: 50px 0;
  text-align: center;
}
@media (max-width: 560px) {
  margin: 80px 0 50px 0;
}
`
export const RightSide = styled.div`
width: 50%;
height: 100%;
@media (max-width: 960px) {
  width: 100%;
  order: 1;
  margin-top: 30px;
}
`
export const HeaderP = styled.div`
max-width: 470px;
padding: 15px 0 50px 0;
line-height: 1.5rem;
@media (max-width: 960px) {
  padding: 15px 0 50px 0;
  text-align: center;
  max-width: 100%;
}
`
export const BtnWrapper = styled.div`
max-width: 250px;
@media (max-width: 960px) {
  margin: 0 auto;
}
`
export const GreyDiv = styled.div`
width: 30%;
height: 700px;
position: absolute;
top: 0;
right: 0;
z-index: 0;
@media (max-width: 960px) {
  display: none;
}
`
export const ImageWrapper = styled.div`
display: flex;
justify-content: flex-end;
position: relative;
z-index: 9;
@media (max-width: 960px) {
  width: 100%;
  justify-content: center;
}
`
export const Img = styled.img`
@media (max-width: 560px) {
  width: 80%;
  height: auto;
}
`
export const DotsWrapper = styled.div`
position: absolute;
right: -100px;
bottom: 100px;
z-index: 2;
@media (max-width: 960px) {
  right: 100px;
}
@media (max-width: 560px) {
  display: none;
}
`
