import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_KEY_MAP_TOKEN;

const Map = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    mapRef.current = map;
    const marker = new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<h3>Hello world!</h3><p>This is a popup description.</p>');
    marker.setPopup(popup);
    return () => map.remove();
  }, []); 

return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;

