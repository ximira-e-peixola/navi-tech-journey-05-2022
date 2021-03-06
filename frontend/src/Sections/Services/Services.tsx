import React from 'react'
// Assets
import AddImage1 from '../../assets/img/add/1.png'
import AddImage2 from '../../assets/img/add/2.png'
// Components
import ServiceBox from '../../components/Elements/ServiceBox'
import {
  Wrapper,
  ServiceBoxRow,
  ServiceBoxWrapper,
  HeaderInfo,
  Advertising,
  AddLeft,
  AddRight,
  AddRightInner,
  AddImgWrapp1,
  AddImgWrapp2
} from './styled'

export function Services () {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: '60px 0' }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Reduza seus custos com energia</h1>
            <p className="font13">
              Através do nosso sistema de energia por assinatura
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">

            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Instalação"
                subtitle="Profissionais capacitados e com experiência na área."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Manutenção"
                subtitle="Serviço de manutenção preventiva a cada 1 ano e suporte durante toda a utilização do serviço."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Sobre nós</h4>
                <h2 className="font40 extraBold">Facilitamos o acesso a energia renovável</h2>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
