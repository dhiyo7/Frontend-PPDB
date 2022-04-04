import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import Map, { Marker, useControl } from "react-map-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import Pin from './pin';
import "mapbox-gl/dist/mapbox-gl.css";



// eslint-disable-next-line import/no-webpack-loader-syntax

const TOKEN = "pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw"
mapboxgl.accessToken = "pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw"
function DrawControl(DrawControlProps) {
    useControl(() => new MapboxDraw(DrawControlProps), {
        position: DrawControlProps.position
    });

    return null;
}

function Geocoder(GeoCoderProps) {
    useControl(() => new MapboxGeocoder({
        ...GeoCoderProps,
        accessToken: GeoCoderProps.accessToken,
        mapboxgl: mapboxgl

    }));
    return null
}


const location = () => {
    const initialViewState = {
        latitude: -3.0285603291926435,
        longitude: 117.06949693115286,
        zoom: 4
    };

    const [marker, setMarker] = useState({
        latitude: 40,
        longitude: -100
    });



    useEffect(() => {
        const getLocation = () => {
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(value => {
                    setMarker({
                        longitude: value.coords.longitude,
                        latitude: value.coords.latitude
                    });

                }, errorHandling, options);
            } else {
                console.log("Geo Location not supported by browser");
            }
        }

        getLocation()
    }, [])


    const errorHandling = (error) => {
        if (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
                default:
                    console.warn('ERROR(' + error.code + '): ' + error.message);
                    break;
            }
        }
    }

    return (
        <div className='mb-5'>

            <Map
                initialViewState={initialViewState}
                style={{ width: "w-auto", height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >

                {/*

                <DrawControl
                    position="top-left"
                    displayControlsDefault={false}
                    controls={{
                        polygon: true,
                        trash: true
                    }}
                /> */}


                <Geocoder position="top-left" accessToken={TOKEN} marker={true} reverseGeocode={true} />


            </Map>

        </div>
    )
}

export default location