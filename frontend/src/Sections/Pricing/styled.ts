import styled from 'styled-components'

export const Wrapper = styled.section`
width: 100%;
padding: 50px 0; 
`
export const HeaderInfo = styled.div`
margin-bottom: 50px;
@media (max-width: 860px) {
  text-align: center;
}
`
export const TablesWrapper = styled.div`
flex:auto;
justify-content: space-around;
@media (max-width: 860px) {
  flex-direction: column;

}
`
export const TableBox = styled.div`
width: 31%;
@media (max-width: 860px) {
  width: 100%;
  max-width: 370px;
  margin: 0 auto
}
`
