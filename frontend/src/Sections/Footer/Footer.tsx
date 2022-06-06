import React from 'react'
import { Link } from 'react-scroll'
// Assets
import LogoImg from '../../assets/svg/LogoSolarent'
// Components
import {
  Wrapper,
  InnerWrapper,
  StyleP
} from './styled'

interface FooterProps {
  home?: boolean
}
export function Footer ({ home }:FooterProps) {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper>
      <div className="orangeBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: '30px 0' }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg invert height={40} width={170} />
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Solarent</span> All Right Reserved
            </StyleP>
            {home && (
              <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                Back to top
              </Link>
            )}
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  )
}
