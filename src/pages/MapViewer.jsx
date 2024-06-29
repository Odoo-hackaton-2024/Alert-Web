import React, { useState } from 'react'
import AlertMap from '../components/AlertMap'

function MapViewer() {
    const [latitude, setLatitude] = useState(50.879);
    const [longitude, setLongitude] = useState(4.6997);

    const changeLocation = (lat, lon) => {
        setLatitude(lat)
        setLongitude(lon)
    }

    return (
        <div className='h-screen w-screen flex flex-row items-center overflow-hidden'>
            <div className='h-full w-3/4 bg-white'>
                <AlertMap lat={latitude} lon={longitude} />
            </div>
            <div className='h-full w-1/4 bg-red-500'>
                <div className='flex flex-col items-start justify-start px-2 py-3'>
                    <div className="w-full"><p className='text-center text-xl'>Locations</p></div>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(23.0225, 72.5714)}>Ahmedabad</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(22.3072, 73.1812)}>Vadodara</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => changeLocation(21.1702, 72.8311)}>Surat</button>
                </div>
            </div>
        </div>
    )
}

export default MapViewer