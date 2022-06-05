import React, { ReactElement } from 'react'
import styled from 'styled-components'

type FullButtonProps ={title?:any
   action?:Function
   border?:string
   children?: ReactElement

}
export default function FullButton ({ title = '', action, border, children }:FullButtonProps) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : undefined }
      border={border}
    >
      {title}
      {children || null}
    </Wrapper>
  )
}

type WrapperProps ={
  border?:string
}

const Wrapper = styled.button<WrapperProps>`
  border: 1px solid ${(props) => (props.border ? '#FFB800' : '#CC9200')};
  background-color: ${(props) => (props.border ? 'transparent' : '#ffb800ff')};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? '#707070' : '#fff')};
  :hover {
    background-color: ${(props) => (props.border ? 'transparent' : '#FFCC4D')};
    border: 1px solid #FFB800;
    color: ${(props) => (props.border ? '#FFB800' : '#fff')};
  }
`
