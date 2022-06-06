
import styled from 'styled-components'

export const Wrapper = styled.section`
width: 100%;
`
export const ServiceBoxRow = styled.div`
@media (max-width: 860px) {
  flex-direction: column;
}
`
export const ServiceBoxWrapper = styled.div`
width: 20%;
margin-right: 5%;
padding: 80px 0;
@media (max-width: 860px) {
  width: 100%;
  text-align: center;
  padding: 40px 0;
}
`
export const HeaderInfo = styled.div`
@media (max-width: 860px) {
  text-align: center;
}
`
export const Advertising = styled.div`
margin: 80px 0;
padding: 100px 0;
position: relative;
@media (max-width: 1160px) {
  padding: 100px 0 40px 0;
}
@media (max-width: 860px) {
  flex-direction: column;
  padding: 0 0 30px 0;
  margin: 80px 0 0px 0;
}
`
export const AddLeft = styled.div`
width: 50%;
p {
  max-width: 475px;
}
@media (max-width: 860px) {
  width: 80%;
  order: 2;
  text-align: center;
  h2 {
    line-height: 3rem;
    margin: 15px 0;
  }
  p {
    margin: 0 auto;
  }
}
`
export const AddRight = styled.div`
width: 50%;
position: absolute;
top: -70px;
right: 0;
@media (max-width: 860px) {
  width: 80%;
  position: relative;
  order: 1;
  top: -40px;
}
`
export const AddRightInner = styled.div`
width: 100%;
`
export const AddImgWrapp1 = styled.div`
width: 48%;
margin: 0 6% 10px 6%;
img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`
export const AddImgWrapp2 = styled.div`
width: 30%;
margin: 0 5% 10px 5%;
img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`
