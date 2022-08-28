import {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
    return (
      <ReactMapGl
      mapboxAccessToken={`pk.eyJ1IjoiYWxvc3RhdGg4OSIsImEiOiJjbDYzb3NrYzQyamFlM2pvMWl2dmhxOHg3In0.E0PLRHwkPPsZEz77u45WoQ`}
      initialViewState={{
        longitude: "39.192505",
        latitude: "21.485811",
        zoom:12,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{width:"400px", height:"250px", borderRadius:"5px"}}
      scrollZoom={false}
      dragPan={false}
      >
        <Marker 
        latitude="21.485811" 
        longitude="39.192505"
        draggable
        ></Marker>
      </ReactMapGl>
    );
  }
  export default Map;

  