import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Map from '../location'
import './geosearch.css';




const AlamatMap = () => {



    const [placeName, setPlaceName] = useState(null)

    const [latLong, setLatLong] = useState(null)

    const handleLatLong = (latlong) => {
        setLatLong(latlong)
    }
    useEffect(() => {
        if (latLong !== null) {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${latLong.lng},${latLong.lat}.json?type=place_name&access_token=pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw`)
                .then((data) => {
                    setPlaceName(data.data.features[0])
                })
        } else {
            return
        }
    }, [latLong])

    return (
        <div className=''>
            <Map handleLatLong={handleLatLong} />

            {/* 
            <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '400px', width: 'auto' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                <GeoSearchControlElement
                    provider={prov}
                    showMarker={true}
                    showPopup={false}
                    popupFormat={({ query, result }) => result.label}
                    maxMarkers={3}
                    retainZoomLevel={false}
                    animateZoom={true}
                    autoClose={false}

                    searchLabel={"Enter address, please"}
                    keepResult={true}
                />

            </MapContainer>
            */}
            <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Alamat Calon Peserta Didik dari Map
                    </label>
                    {placeName !== null ? (
                        <input
                            type="text"
                            disabled
                            value={placeName.place_name}
                            className="shadow-sm  bg-gray-100 cursor-not-allowed border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        />
                    ) : <input
                        type="text"
                        disabled

                        className="shadow-sm  bg-gray-100 cursor-not-allowed border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />}

                </div>
            </form>
        </div>
    )
}

export default AlamatMap