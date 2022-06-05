import React from 'react'
import ReactDOM from 'react-dom'
import { Map as MapMaplibre } from 'maplibre-gl'
import { Button } from 'antd'
import { DeleteOutlined, EditOutlined, UndoOutlined } from '@ant-design/icons'

interface ButtonProps {
    handleClear: () => void
    handleUndo: () => void
    handleDraw: () => void
}
function Buttons (props: ButtonProps) {
  const { handleClear, handleUndo, handleDraw } = props
  return (
        <div className='mapboxgl-ctrl'>
            <Button style={{ margin: 5, width: 50, height: 50 }} type="primary" shape="circle" onClick={handleDraw} icon={<EditOutlined style={{ fontSize: 35 }}/>} />
            <Button style={{ margin: 5, width: 50, height: 50 }} type="primary" shape="circle" onClick={handleUndo} danger icon={<UndoOutlined style={{ fontSize: 35 }}/>} />
            <Button style={{ margin: 5, width: 50, height: 50 }} type="primary" shape="circle" onClick={handleClear} danger icon={<DeleteOutlined style={{ fontSize: 35 }}/>} />
        </div>)
}

export default class MapControls {
  map: MapMaplibre | undefined
  container: HTMLDivElement | undefined
  functions: ButtonProps
  constructor (functions: ButtonProps) {
    this.functions = functions
  }

  onAdd (map: MapMaplibre) {
    this.map = map
    this.container = document.createElement('div')
    ReactDOM.render(<Buttons handleClear={this.functions.handleClear} handleDraw={this.functions.handleDraw} handleUndo={this.functions.handleUndo} />, this.container)
    return this.container
  }

  onRemove () {
    this.container?.parentNode?.removeChild(this.container)
    this.map = undefined
  }
}
