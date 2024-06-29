import * as React from 'react';
import { Map, Marker, Overlay } from "pigeon-maps"
import danger from '../assets/images/danger.png'

function AlertMap({ lat, lon, showOverlay }) {
  return (
    <Map height={1080} center={[lat, lon]} defaultZoom={11}>
      <Marker width={40} anchor={[lat, lon]} />

      {showOverlay && (
          <Overlay anchor={[lat, lon]} offset={[120, 79]}>
            <img src={danger} width={100} height={100} alt='' />
          </Overlay>
      )}

    </Map>
  )
}

export default AlertMap