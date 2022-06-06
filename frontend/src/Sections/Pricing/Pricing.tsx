import React from 'react'
// Components
import PricingTable from '../../components/Elements/PricingTable'
import {
  Wrapper,
  HeaderInfo,
  TablesWrapper,
  TableBox
} from './styled'

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
