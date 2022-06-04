import React from 'react'
import styled from 'styled-components'

type FullButtonProps ={title:any
   action:any
   border?:string

}
export default function FullButton ({ title, action, border }:FullButtonProps) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={ () => action() }
      border={border}
    >
      {title}
    </Wrapper>
  )
}

type WrapperProps ={
  border?:string
}

const Wrapper = styled.button<WrapperProps>`
  border: 1px solid ${(props) => (props.border ? '#707070' : '#7620ff')};
  background-color: ${(props) => (props.border ? 'transparent' : '#7620ff')};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? '#707070' : '#fff')};
  :hover {
    background-color: ${(props) => (props.border ? 'transparent' : '#580cd2')};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? '#7620ff' : '#fff')};
  }
`
