import React, { useState } from 'react'
import AlertMap from '../components/AlertMap'
import { getDistance } from 'geolib';
import { colors } from '../theme/theme';

function MapViewer() {
    const [latitude, setLatitude] = useState(50.879);
    const [longitude, setLongitude] = useState(4.6997);
    const [showOverlay, setShowOverlay] = useState(false);
    const [viewReport, setViewReport] = useState(false);
    const [report, setReport] = useState({})
    const [cases, setCases] = useState(0)

    const [intensity, setIntensity] = useState("normal")

    const radius = 50000; // 50km

    const markers = [
        { lat: 50.879, lon: 4.6997 },
        { lat: 50.884, lon: 4.7097 },
        { lat: 50.869, lon: 4.6897 },
        { lat: 50.889, lon: 4.7197 },
        { lat: 50.881, lon: 4.703 },
      ];

    const changeLocation = (lat, lon) => {
        if(lat == latitude && lon == lon) setViewReport(!viewReport)
        else setViewReport(true)

        setLatitude(lat)
        setLongitude(lon)
        
        setReport({city: "Ahmdabad"})
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
        setCases(count)
        setIntensity(count >= 5 ? "High" : (count >= 3 ?  "Medium" : "Normal"))
    };

    const reportLabel = label => {
        return (
            <p className='text-left text-lg text-white mt-4' style={{color: colors.lightAlpha(0.60)}}>{label}</p>
        )
    }

    const reportData = data => {
        return (
            <p className='text-left text-xl text-white'>{data}</p>
        )
    }

    const ahmedabad = () => {
        setReport(
            {
                ID: "101",
                SubmittedBy: "Umang Rathod",
                City: "Ahmedabad",
                Description: "I saw a murderer",
                nearestPolice: "New Naroda",
            }
        )
    }

    const vadodara = () => {
        setReport(
            {
                ID: "102",
                SubmittedBy: "Kaushik",
                City: "Vadodara",
                Description: "Accident happened",
                nearestPolice: "Vadodara city",
            }
        )
    }

    const surat = () => {
        setReport(
            {
                ID: "110",
                SubmittedBy: "Aman",
                City: "Surat",
                Description: "Saw a drug dealer",
                nearestPolice: "Surat city",
            }
        )
    }


    return (
        <div className='h-screen w-screen flex flex-row items-center overflow-hidden'>
            <div className='h-full w-3/4 bg-white'>
                <AlertMap lat={latitude} lon={longitude} showOverlay={showOverlay}  />
            </div>
            {
                viewReport ? 
                <div className='h-full bg-black w-1/3 flex flex-col py-4 px-5'>
                    <p className='text-center text-xl text-white'>Report</p>

                    {reportLabel("ID")}
                    {reportData(report.ID)}

                    {reportLabel("Submitted by")}
                    {reportData(report.SubmittedBy)}

                    {reportLabel("City")}
                    {reportData(report.City)}

                    {reportLabel("Description")}
                    {reportData(report.Description)}

                    {reportLabel("Nearest police station")}
                    {reportData(report.nearestPolice)}

                    {
                        showOverlay 
                        ? 
                        <>
                            {reportLabel("Number of cases")}
                            {reportData(cases)}

                            {reportLabel("Intensity")}
                            {reportData(intensity)}
                        </>
                        : 
                        <></>
                    }
                    
                </div>
            : null
            }
            <div className='h-full w-1/4 bg-red-500'>
                <div className='flex flex-col items-start justify-start px-2 py-3'>
                    <div className="w-full"><p className='text-center text-xl'>Locations</p></div>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => {
                            changeLocation(23.0225, 72.5714)
                            ahmedabad()
                            }}>Ahmedabad</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => {
                            changeLocation(22.3072, 73.1812) 
                            vadodara()
                            }}>Vadodara</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => {
                            changeLocation(21.1702, 72.8311)
                            surat()}}>Surat</button>

                    <button 
                        className='w-full rounded-md px-3 py-2 bg-white mt-6'
                        onClick={() => {
                            changeLocation(50.881, 4.703)
                            ahmedabad()
                            }}>Test</button>
                </div>

            
            </div>


        </div>
    )
}

export default MapViewer