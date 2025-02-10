// pages/geojson-page.tsx
import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import leafletKnn from 'leaflet-knn';
import { getGeoJSON } from '../utils/db';

interface Props {
  geojson: any;
}

const GeoJSONPage: React.FC<Props> = ({ geojson }) => {
  useEffect(() => {
    if (geojson) {
      // Create a Leaflet GeoJSON layer from the fetched GeoJSON data
      const gjLayer = L.geoJson(geojson);
      // For example, find the 5 nearest features to a given location (latitude: 38, longitude: -78)
      const nearest = leafletKnn(gjLayer).nearest(L.latLng(38, -78), 5);
      console.log('Nearest features:', nearest);

      // If you have a map instance, you can add the layer to your map:
      // const map = L.map('map').setView([38, -78], 10);
      // gjLayer.addTo(map);
    }
  }, [geojson]);

  return (
    <div>
      <h1>GeoJSON Data</h1>
      {geojson ? (
        <>
          <pre>{JSON.stringify(geojson, null, 2)}</pre>
          <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </>
      ) : (
        <p>Loading GeoJSON data...</p>
      )}
    </div>
  );
};

// This function runs on the server before rendering the page
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const geojson = await getGeoJSON();
    return { props: { geojson } };
  } catch (error) {
    console.error('Error fetching GeoJSON:', error);
    return { props: { geojson: null } };
  }
};

export default GeoJSONPage;
