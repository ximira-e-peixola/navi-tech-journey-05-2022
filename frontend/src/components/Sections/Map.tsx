import { DeleteOutlined, EditOutlined, UndoOutlined, CalculatorOutlined } from '@ant-design/icons'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { Button, Select } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import maplibregl, { IControl, Map as MapMaplibre, StyleSpecification } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import opencage from 'opencage-api-client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import mapStyle from '../../assets/map/style.json'

const draw = new MapboxDraw({
  displayControlsDefault: false
})
export function Map () {
  const [disableCalculate, setDisableCalculate] = useState(true)
  const mapContainer = useRef(null) as unknown as React.MutableRefObject<HTMLInputElement>
  const map = useRef<MapMaplibre>()

  const [searchTerm, setSearchTerm] = useState('')
  const [addressOptions, setAddressOptions] = useState<DefaultOptionType[]>()

  const handleDisableCalculate = useCallback(() => {
    setDisableCalculate(draw?.getAll()?.features?.length === 0)
  }, [])

  const searchEndereco = useCallback((value: string) => {
    if (value && value !== '') {
      opencage.geocode({ q: value, key: 'ce175b41591444349a3e290766290ba8' }).then(res => {
        const opts = res.results.map((r: any) => ({
          value: r.formatted,
          label: r.formatted,
          geometry: r.geometry
        }))
        setAddressOptions(opts)
      }).catch(err => {
        console.log(err)
      })
    } else {
      console.log('MEEE')
      setAddressOptions(undefined)
    }
  }, [])

  const handleChange = useCallback((value: string) => {
    if (addressOptions) {
      map.current?.easeTo({ center: addressOptions.find(a => a.value === value)?.geometry })
    }
  }, [addressOptions])

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value)
  }, [])

  const handleCalculate = useCallback(() => {
    console.log(draw.getAll())
  }, [])

  const handleDraw = useCallback(() => {
    draw.changeMode('draw_polygon')
  }, [])

  const handleUndo = useCallback(() => {
    const allFeatures = draw?.getAll().features
    if (allFeatures.length > 0) {
      const feat = allFeatures[allFeatures.length - 1]
      draw?.delete(`${feat.id}`)
      handleDisableCalculate()
    }
  }, [])

  const handleClear = useCallback(() => {
    draw?.deleteAll()
  }, [])

  useEffect(() => {
    if (map.current) return // stops map from intializing more than once
    map.current = new MapMaplibre({
      container: mapContainer.current,
      style: mapStyle as StyleSpecification
    })

    map.current.addControl(new maplibregl.NavigationControl({}))
    map.current.addControl(draw as unknown as IControl)
    map.current.on('draw.create', handleDisableCalculate)
    return () => {
      map?.current?.removeControl(draw as unknown as IControl)
      map?.current?.off('draw.create', handleDisableCalculate)
      map?.current?.remove()
    }
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchEndereco(searchTerm)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <div className="map-wrap" style={{ width: '100%', height: 600 }}>
      <div>
        <Select
          style={{ margin: 10, width: 'calc(100vw - 40px)', maxWidth: 1000 }}
          showSearch={true}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          notFoundContent={null}
          placeholder='Digite seu endereço'
          options={addressOptions}
        />
        <Button.Group>
          <Button onClick={handleCalculate} icon={<CalculatorOutlined />} type="primary" disabled={disableCalculate}>Calcular</Button>
          <Button onClick={handleDraw} icon={<EditOutlined />} type="default">Desenhar</Button>
          <Button onClick={handleUndo} danger icon={<UndoOutlined />}> Desfazer </Button>
          <Button onClick={handleClear} danger icon={<DeleteOutlined />}>Limpar</Button>
        </Button.Group>
      </div>
      <div ref={mapContainer} className="map" style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }} />
    </div>
  )
}
