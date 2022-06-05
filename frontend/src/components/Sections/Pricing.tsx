import React from 'react'
import styled from 'styled-components'
// Components
import PricingTable from '../Elements/PricingTable'

export function Pricing () {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container" >
          <HeaderInfo>
            <h1 className="font40 extraBold">Modalidades</h1>
            <p className="font13">
              Oferecemos flexibilidade para seu investimento.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                title="Para o Seu Negócio"
                text="Temos soluções especiais para energia solar em ambiente comercial."
                offers={[
                  { name: 'Custo de adesão zero' },
                  { name: 'Offer' },
                  { name: 'Product Offer #2' },
                  { name: 'Product' },
                  { name: 'Product Offer' }
                ]}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                title="Para a sua Casa"
                text="Invista no futuro da sua casa."
                offers={[
                  { name: 'Custo de adesão zero' },
                  { name: 'Diminua sua conta de luz' },
                  { name: 'Energia limpa na sua casa' },
                  { name: 'Tenha mais autonomia' }
                ]}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0; 
`
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`
