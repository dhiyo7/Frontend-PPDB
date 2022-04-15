import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import Map, { Marker, useControl } from "react-map-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

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






const location = (props) => {

    const [latlong, setLatlong] = useState(null)
    props.handleLatLong(latlong)



    const initialViewState = {
        latitude: -3.0285603291926435,
        longitude: 117.06949693115286,
        zoom: 4.5
    };



    const mapContainer = useRef(null);



    // const [latLong, setLatLong] = useState()
    const [map, setMap] = useState(null);


    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [117.06949693115286, -3.0285603291926435],
            zoom: 4,

        })

        map.on("load", () => {
            setMap(map);
            map.resize();
        });

        map.on("click", (e) => { });


        const geocoder = new MapboxGeocoder({
            accessToken: TOKEN,
            mapboxgl: mapboxgl,
            marker: false,
            getItemValue: ((result) => {

                setLatlong({
                    lng: result.center[0],
                    lat: result.center[1]
                })
                return result.place_name
            })

        })

        geocoder.on('result', e => {
            const marker = new mapboxgl.Marker({
                draggable: true,
                color: "orange"
            })
                .setLngLat(e.result.center)
                .addTo(map)
            marker.on('dragend', function (e) {
                let lngLat = e.target.getLngLat();
                setLatlong(lngLat)
                // console.log(lngLat['lat'])
                // console.log(lngLat['lng'])
            })
        })
        map.addControl(geocoder)

        return () => map.remove();

    }, []);

    // useEffect(() => {
    //     const getLocation = () => {
    //         const options = {
    //             enableHighAccuracy: true,
    //             timeout: 5000,
    //             maximumAge: 0
    //         };
    //         if (navigator.geolocation) {
    //             navigator.geolocation.getCurrentPosition(value => {
    //                 setMarker({
    //                     longitude: value.coords.longitude,
    //                     latitude: value.coords.latitude
    //                 });

    //             }, errorHandling, options);
    //         } else {
    //             console.log("Geo Location not supported by browser");
    //         }
    //     }

    //     getLocation()
    // }, [])


    // const errorHandling = (error) => {
    //     if (error) {
    //         switch (error.code) {
    //             case error.PERMISSION_DENIED:
    //                 console.log("User denied the request for Geolocation.");
    //                 break;
    //             case error.POSITION_UNAVAILABLE:
    //                 console.log("Location information is unavailable.");
    //                 break;
    //             case error.TIMEOUT:
    //                 console.log("The request to get user location timed out.");
    //                 break;
    //             case error.UNKNOWN_ERROR:
    //                 console.log("An unknown error occurred.");
    //                 break;
    //             default:
    //                 console.warn('ERROR(' + error.code + '): ' + error.message);
    //                 break;
    //         }
    //     }
    // }

    // useEffect(() => {
    //     axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/109.041144,-6.891602.json?type=place_name&access_token=pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw")
    //         .then((data) => {
    //             setPlaceName(data.data.features[0])
    //         })
    // }, [])
    // console.log(placeName.place_name, "data reverse");


    return (

        <div ref={mapContainer} className='mapboxgl-map' style={{ width: "100%", height: 400 }}>

        </div>











    )
}

export default location