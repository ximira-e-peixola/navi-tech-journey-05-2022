import React, { useEffect, useRef } from 'react'
import maplibregl, { StyleSpecification, Map as MapMaplibre, IControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import mapStyle from '../../assets/map/style.json'
export function Map () {
  const mapContainer = useRef(null) as unknown as React.MutableRefObject<HTMLInputElement>
  const map = useRef<MapMaplibre>()

  useEffect(() => {
    if (map.current) return // stops map from intializing more than once
    map.current = new MapMaplibre({
      container: mapContainer.current,
      style: mapStyle as StyleSpecification
    })

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    }) as unknown as IControl
    map.current.addControl(new maplibregl.NavigationControl({}))
    map.current.addControl(draw)
    new maplibregl.Marker()
      .setLngLat([-48.59458923339844, -27.585817491831815])
      .addTo(map.current)
    map.current.on('draw.create', (val: any) => console.log('UPDATE ', val))
    map.current.on('draw.delete', (val: any) => console.log('UPDATE ', val))
    map.current.on('draw.update', (val: any) => console.log('UPDATE ', val))
  }, [])

  return (
    <div className="map-wrap" style={{ width: 1400, height: 600 }}>
      <div ref={mapContainer} className="map" style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }} />
    </div>
  )
}
