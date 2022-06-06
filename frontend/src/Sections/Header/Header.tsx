import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
// Components
import FullButton from '../../components/Buttons/FullButton'
import {
  Wrapper,
  LeftSide,
  RightSide,
  HeaderP,
  BtnWrapper,
  GreyDiv,
  ImageWrapper,
  Img,
  DotsWrapper
} from './styled'

// Assets
import HeaderImage from '../../assets/img/header-img.png'
import Dots from '../../assets/svg/Dots'

export function Header () {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60" >Energia solar a custo de implementação <u style={{ color: 'black' }}>zero</u></h1>
          <HeaderP className="font13 semiBold">
          Sua energia mais barata e por assinatura.
          </HeaderP>
          <BtnWrapper>
            <FullButton>
              <RouterLink style={{ padding: '10px 15px' }} to="calculate" >
                <span style={{ color: '#fff', fontWeight: 'bold' }}>
                  Faça uma Cotação
                </span>
              </RouterLink>
            </FullButton>
           </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  )
}
