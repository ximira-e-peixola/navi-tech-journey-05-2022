import { Card, Col, Row } from 'antd'
import React from 'react'
import { IResult } from './Map'

type CardResultProps = {
  result: IResult
}

export function CardResult ({ result }: CardResultProps) {
  return (
    <Card style={{ backgroundColor: 'rgba(255, 204, 77, 0.2)', margin: 10, borderRadius: 20 }} bordered={false} title="Resultado estimado para a sua instalação:">
      <Row>
        <Col span={12}>
          Número de paineis solares:
        </Col>
        <Col span={12}>
          {result.n_solar_panel}
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Área de instalação:
        </Col>
        <Col span={12}>
          {result.area.toFixed(2)}m²
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Potência gerada estimada:
        </Col>
        <Col span={12}>
          {result.estimated_output.toFixed(2)}kWh
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          Produção mensal estimada:
        </Col>
        <Col span={12}>
          R${result.estimated_real.toFixed(2)}
        </Col>
      </Row>
    </Card>)
}
