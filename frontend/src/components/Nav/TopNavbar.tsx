import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
// Components
import Sidebar from './Sidebar'
import Backdrop from '../Elements/Backdrop'
// Assets
import BurgerIcon from '../../assets/svg/BurgerIcon'
import Logo from '../../assets/svg/LogoSolarent'

interface TopNavbarProps {
  home?: boolean
}
export default function TopNavbar (props: TopNavbarProps) {
  const { home } = props
  const [y, setY] = useState<number>(window.scrollY)
  const [sidebarOpen, toggleSidebar] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setY(window.scrollY))
    }
  }, [y])

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: '60px' } : { height: '80px' }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <Logo height={30} width={130}></Logo>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {home
              ? (
                <li className="semiBold font15 pointer">
                  <Link activeClass="active" style={{ padding: '10px 15px' }} to="home" spy={true} smooth={true} offset={-80}>
                    Home
                  </Link>
                </li>
                )
              : (
                <li className="semiBold font15 pointer">
                  <RouterLink style={{ padding: '10px 15px' }} to="/">
                    Home
                  </RouterLink>
                </li>
                )}
            <li className="semiBold font15 pointer">
              <RouterLink style={{ padding: '10px 15px' }} to="calculate" >
                Calculate
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: '10px 15px' }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: '10px 15px' }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: '10px 15px' }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: '10px 15px' }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: '10px 15px' }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: '10px 30px 10px 0' }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: '10px 15px' }}>
                Get Started
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`
