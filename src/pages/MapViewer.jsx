import React, { useState } from 'react'
import AlertMap from '../components/AlertMap'
import { getDistance } from 'geolib';

function MapViewer() {
    const [latitude, setLatitude] = useState(50.879);
    const [longitude, setLongitude] = useState(4.6997);
    const [showOverlay, setShowOverlay] = useState(false)

    const radius = 50000; // 50km

    const markers = [
        { lat: 50.879, lon: 4.6997 },
        { lat: 50.884, lon: 4.7097 },
        { lat: 50.869, lon: 4.6897 },
        { lat: 50.889, lon: 4.7197 },
        { lat: 50.881, lon: 4.703 },
      ];

    const changeLocation = (lat, lon) => {
        setLatitude(lat)
        setLongitude(lon)
        checkMarkersWithinRadius(lat, lon)
    }

    const checkMarkersWithinRadius = (lat, lon) => {
        let count = 0;
        markers.forEach(marker => {
          const distance = getDistance(
            { latitude: lat, longitude: lon },
            { latitude: marker.lat, longitude: marker.lon }
          );
          if (distance <= radius) {
            count += 1;
          }
        });
        setShowOverlay(count > 3)
    };

    return (
        <div className='h-screen w-screen flex flex-row items-center overflow-hidden'>
            <div className='h-full w-3/4 bg-white'>
                <AlertMap lat={latitude} lon={longitude} showOverlay={showOverlay} />
            </div>
            <div className='h-full w-1/4 bg-red-500'>
                <div className='flex flex-col items-start justify-start px-2 py-3'>
                    <div className="w-full"><p className='text-center text-xl'>Locations</p></div>``

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(23.0225, 72.5714)}>Ahmedabad</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(22.3072, 73.1812)}>Vadodara</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(21.1702, 72.8311)}>Surat</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(50.881, 4.703)}>Test</button>
                </div>
            </div>
        </div>
    )
}

export default MapViewer