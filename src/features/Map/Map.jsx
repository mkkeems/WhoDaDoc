import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_KEY_MAP_TOKEN;

const Map = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    const locations = [
      { lng: 127.04287, lat: 37.850872, name: 'H Plus Yangji Hospital', description: 'Specialized with 스케일링충치사랑니' },
      { lng: 126.960883, lat: 37.50691525, name: 'Chung-Ang University Hospital', description: 'abc' },
      { lng: 126.945701, lat: 37.559271, name: 'Ewha Womans University Mokdong Hospital', description: 'abc' },
      
    ];
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [127.04287, 37.850872], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    mapRef.current = map;
    locations.forEach((location) => {
    const marker = new mapboxgl.Marker().setLngLat([location.lng, location.lat]).addTo(map);
    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h3>${location.name}</h3><p>${location.description}</p>`);
    marker.setPopup(popup);
  });
    return () => map.remove();
  }, []); 

return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default Map;

