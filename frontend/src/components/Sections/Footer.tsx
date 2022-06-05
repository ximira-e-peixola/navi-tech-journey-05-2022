import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
// Assets
import LogoImg from '../../assets/svg/LogoSolarent'

const Wrapper = styled.div`
  width: 100%;
`
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`
interface FooterProps {
  home?: boolean
}
export function Footer (props:FooterProps) {
  const { home } = props
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper>
      <div className="darkBg">
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
