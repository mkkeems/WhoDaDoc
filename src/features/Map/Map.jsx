import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_KEY_MAP_TOKEN;

const Map = ({ data }) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: [127.029407, 37.496203], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    mapRef.current = map;

    if (data) {
      data.forEach((location) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([location.long, location.lat])
          .addTo(map);
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${location.name}</h3><p>${location.description}</p>`,
        );
        marker.setPopup(popup);
      });
    }
    return () => map.remove();
  }, [data]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default Map;
