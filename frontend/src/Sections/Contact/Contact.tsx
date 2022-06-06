import React from 'react'

import {
  Wrapper,
  HeaderInfo,
  Form,
  ButtonInput,
  SumbitWrapper
} from './styled'

export function Contact () {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Entre em contato!</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: '30px' }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nome:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Assunto:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <textarea rows={4} cols={50} id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Enviar Mensagem" className="pointer animate radius8" style={{ maxWidth: '220px' }} />
              </SumbitWrapper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
