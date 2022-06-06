import React from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
// Assets
import LogoImg from '../../assets/svg/LogoSolarent'
// Components
import {
  Wrapper,
  InnerWrapper,
  StyleP,
  PlaceHolder
} from './styled'

interface FooterProps {
  home?: boolean
}
export function Footer ({ home }: FooterProps) {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper>
      <div className="orangeBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: '30px 0' }}>
            <RouterLink className="flexCenter animate pointer" to="/">
              <LogoImg invert height={40} width={170} />
            </RouterLink>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Solarent</span> All Right Reserved
            </StyleP>
            {home
              ? (
                <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
                  Back to top
                </Link>
                )
              : (
                <PlaceHolder/>
                )}
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  )
}
