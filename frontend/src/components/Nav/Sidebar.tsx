import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
// Assets
import CloseIcon from '../../assets/svg/CloseIcon'

type SidebarProps = {
   sidebarOpen: any
   toggleSidebar: any
   }

export default function Sidebar ({ sidebarOpen, toggleSidebar }:SidebarProps) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <h1 className="whiteColor font20" style={{ marginLeft: '15px' }}>
            solarent
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Serviços
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Modalidades
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: '10px 15px' }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contato
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <RouterLink style={{ padding: '10px 15px' }} to="calculate" >
          <a className="radius8 lightBg" style={{ padding: '10px 15px' }}>
            Calcular
          </a>
        </RouterLink>
      </UlStyle>
    </Wrapper>
  )
}

type WrapperProps = {sidebarOpen: any}
const Wrapper = styled.nav<WrapperProps>`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? '0px' : '-400px')};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`
const SidebarHeader = styled.div`
  padding: 20px 0;
`
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`
