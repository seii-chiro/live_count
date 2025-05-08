import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countryData from './2023/geojson/country/lowres/country.0.001.json'; 

const PhilippinesMap: React.FC = () => {
    const onEachRegion = (feature: any, layer: any) => {
        layer.setStyle({
            fillColor: '#E9BC49',
            weight: 2,
            color: 'black',
            fillOpacity: 1,
        });
    };

    return (
        <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: "100vh", width: "100%", backgroundColor: "white" }}>
            <GeoJSON data={countryData} onEachFeature={onEachRegion} />
        </MapContainer>
    );
};

export default PhilippinesMap;