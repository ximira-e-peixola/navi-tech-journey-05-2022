import React from 'react'
import styled from 'styled-components'
import CheckMark from '../../assets/svg/Checkmark'

type PricingTableProps = {
   title:any
   text:any
   offers:any }

export default function PricingTable ({ title, text, offers }:PricingTableProps) {
  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div style={{ margin: '30px 0' }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item:any, index:any) => (
              <div className="flexNullCenter" style={{ margin: '15px 0' }} key={index}>
                <div style={{ position: 'relative', top: '-1px', marginRight: '15px' }}>
                  {item.cheked
                    ? (
                    <div style={{ minWidth: '20px' }}>
                      <CheckMark />
                    </div>
                      )
                    : (
                    <div style={{ minWidth: '20px' }}></div>
                      )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
          ))
          : null}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`
