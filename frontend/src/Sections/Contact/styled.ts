import styled from 'styled-components'

export const Wrapper = styled.section`
width: 100%;
`
export const HeaderInfo = styled.div`
padding: 70px 0 30px 0;
@media (max-width: 860px) {
  text-align: center;
}
`
export const Form = styled.form`
padding: 70px 0 30px 0;
input,
textarea {
  width: 100%;
  background-color: transparent;
  border: 0px;
  outline: none;
  box-shadow: none;
  border-bottom: 1px solid #707070;
  height: 30px;
  margin-bottom: 30px;
}
textarea {
  min-height: 100px;
}
@media (max-width: 860px) {
  padding: 30px 0;
}
`
export const ButtonInput = styled.input`
border: 1px solid #FFB800;
background-color: #FFB800;
width: 100%;
padding: 15px;
outline: none;
color: #fff;
:hover {
  background-color: #580cd2;
  border: 1px solid #FFB800;
  color: #fff;
}
@media (max-width: 991px) {
  margin: 0 auto;
}
`
export const SumbitWrapper = styled.div`
@media (max-width: 991px) {
  width: 100%;
  margin-bottom: 50px;
}
`
