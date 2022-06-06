import React from 'react'
import { Select } from 'antd'

const consumerOptions = [
  { value: 'Comercial e Serviços e Outras' },
  { value: 'Comercial, Serviços e Outras' },
  { value: 'Consumo Próprio' },
  { value: 'Iluminaçăo Pública' },
  { value: 'Industrial' },
  { value: 'Poder Público' },
  { value: 'Residencia' },
  { value: 'Residencial' },
  { value: 'Rural' },
  { value: 'Rural Aquicultor' },
  { value: 'Rural Irrigante' },
  { value: 'Serviço Público' },
  { value: 'Serviço Público (água e esgoto e saneamento)' },
  { value: 'Serviço Público (água, esgoto e saneamento)' },
  { value: 'Serviço Público (traçăo elétrica)' },
  { value: 'Totais por Regiăo' },
  { value: 'Total por Regiăo' },
  { value: 'Comercial e  Serviços e Outras' },
  { value: 'Serviço Público (água e  esgoto e saneamento)' }
]

type SelectUsesProps = {
  setConsumer: Function
}

export function SelectUses ({ setConsumer }: SelectUsesProps) {
  return (<Select style={{ margin: '15px 5px', width: '98%' }}
    size={'large'}
    onChange={(val) => setConsumer(val.value)}
    options={consumerOptions}
    labelInValue
  />)
}
