import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { Button, Layout, Select, Row, Col, Card } from 'antd'
import { DefaultOptionType } from 'antd/lib/select'
import maplibregl, { IControl, Map as MapMaplibre, StyleSpecification } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import opencage from 'opencage-api-client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import mapStyle from '../../assets/map/style.json'
import MapControls from '../../components/MapControls'
import CardTitle from './CardTitle'
import { CardResult } from './CardResult'
import { SelectUses } from './SelectUses'

const { Sider, Content } = Layout

const draw = new MapboxDraw({
  displayControlsDefault: false
})

export type IResult = {
  out: number
  area: number
  estimated_output: number
  estimated_real: number
  n_solar_panel: number
  }

export function Map () {
  const [disableCalculate, setDisableCalculate] = useState(true)
  const mapContainer = useRef(null) as unknown as React.MutableRefObject<HTMLInputElement>
  const map = useRef<MapMaplibre>()
  const [consumer, setConsumer] = useState<string>()
  const [location, setLocation] = useState<DefaultOptionType>()
  const [searchTerm, setSearchTerm] = useState('')
  const [addressOptions, setAddressOptions] = useState<DefaultOptionType[]>()
  const [result, setResult] = useState<IResult>()

  const handleDisableCalculate = useCallback(() => {
    setDisableCalculate(draw?.getAll()?.features?.length === 0)
  }, [])

  const searchEndereco = useCallback((value: string) => {
    if (value && value !== '') {
      opencage.geocode({ q: value, key: process.env.OPENCAGE_API_KEY ?? '' }).then(res => {
        const opts = res.results.map((r: any) => ({
          value: r.formatted,
          label: r.formatted,
          geometry: r.geometry,
          state: r.components.state,
          state_code: r.components.state_code
        }))
        setAddressOptions(opts)
      }).catch(err => {
        console.log(err)
      })
    } else {
      setAddressOptions(undefined)
    }
  }, [])

  const handleChange = useCallback((value: string) => {
    if (addressOptions) {
      const loc = addressOptions.find(o => o.value === value)
      setLocation(loc)
      map.current?.easeTo({ center: loc?.geometry })
    }
  }, [addressOptions])

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value)
  }, [])

  const handleCalculate = useCallback(() => {
    console.log(draw.getAll())
    fetch('/api/calculate',
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ draw: draw.getAll(), location, consumer })
      })
      .then(resp => resp.json()
        .then(json => {
          console.log(json)
          setResult(json)
        }))
  }, [location, consumer])

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
    handleDisableCalculate()
  }, [])

  useEffect(() => {
    if (map.current) return // stops map from intializing more than once
    map.current = new MapMaplibre({
      container: mapContainer.current,
      style: mapStyle as StyleSpecification
    })
    map.current.addControl(
      new MapControls({ handleClear, handleDraw, handleUndo }),
      'top-right'
    )
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
    <div style={{ paddingTop: 80 }}>
      <Layout>
        <Content>
          <div ref={mapContainer} className="map" style={{
            width: '100%',
            height: 'calc(100vh - 200px)'
          }} />
        </Content>
        <Sider width={500} collapsedWidth={250} style={{ backgroundColor: '#ffb80023' }}>
          <Row style={{ width: '100%' }}>
            <Col span={24}>
              <Card style={{ backgroundColor: 'rgba(255, 204, 77, 0.6)', margin: 10, borderRadius: 20 }} bordered={false}>
                <CardTitle />
                Busque pelo seu endere??o aqui:
                <Select
                  style={{ margin: '15px 5px', width: '98%' }}
                  showSearch={true}
                  size={'large'}
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  filterOption={false}
                  onSearch={handleSearch}
                  onChange={handleChange}
                  notFoundContent={null}
                  placeholder='Digite seu endere??o'
                  options={addressOptions}
                />
                Selecione o seu perfil de consumidor:
                <SelectUses setConsumer={setConsumer}/>
                <Row justify='center'>
                  <Button size='large' type="primary" shape="round" onClick={handleCalculate} disabled={disableCalculate}>Calcular</Button>
                </Row>
              </Card>
              {result && (
                <CardResult result={result}/>
              )}
            </Col>
          </Row>
        </Sider>
      </Layout>
    </div>
  )
}
