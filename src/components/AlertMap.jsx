import * as React from 'react';
import { Map, Marker } from "pigeon-maps"

function AlertMap({ lat, lon }) {
  return (
    <Map height={1080} center={[lat, lon]} defaultZoom={11}>
      <Marker width={40} anchor={[lat, lon]} />
      <Marker width={40} anchor={[lat+0.5, lon+0.5]} />
    </Map>
  )
}

export default AlertMap