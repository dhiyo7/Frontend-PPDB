import React, { useState, useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
import Map, { Marker, useControl } from "react-map-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

const TOKEN = "pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw"


const geocoder = (GeoCoderProps) => {


    const mapContainer = useRef(null);

    console.log(mapContainer.current, "mapcontainer");
    const initialViewState = {
        latitude: -3.0285603291926435,
        longitude: 117.06949693115286,
        zoom: 4.5
    };

    const [latLong, setLatLong] = useState()
    const [map, setMap] = useState(null);

    // console.log(GeoCoderProps);
    // GeoCoderProps.handleLatLong(latLong)

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/satellite-v9",
            center: [0, 0],
            zoom: 5,
        })

        map.on("load", () => {
            setMap(map);
            map.resize();
        });

        map.on("click", (e) => { });

        map.addControl(
            new MapboxGeocoder({
                accessToken: TOKEN,
                mapboxgl: mapboxgl,
            })
        );

        return () => map.remove();

    }, []);


    //     useControl(() => new MapboxGeocoder({
    //         ...GeoCoderProps,
    //         accessToken: GeoCoderProps.accessToken,
    //         reverseGeocode: false,
    //         marker: {
    //             draggable: true,
    //             color: 'orange'
    //         },
    //         mapboxgl: mapboxgl,
    //         getItemValue: ((result) => {
    //             const marker = new mapboxgl.Marker({
    //                 draggable: true
    //             }).setLngLat(result.center)
    //             console.log(result);
    //             setLatLong(result.center)
    //             return result.place_name
    //         })








    //     })
    //     );

    return (
        <div ref={mapContainer} className={map}>

        </div>
    )
}

export default geocoder