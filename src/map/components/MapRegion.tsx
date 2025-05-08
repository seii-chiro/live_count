import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countryData from '../2023/geojson/country/lowres/country.0.001.json';
import RegionI from '../2023/geojson/regions/lowres/region01.json';
import RegionII from '../2023/geojson/regions/lowres/region02.json';

const regionNameMapping: { [key: number]: string } = {
    100000000: "Region I (Ilocos)", 
    200000000: "Region II (Cagayan Valley)"
};

const PhilippinesMap: React.FC = () => {
    const onEachCountry = (feature: any, layer: any) => {
        const countryColor = 'white';
        layer.setStyle({
            fillColor: countryColor,
            weight: 2,
            color: 'black',
            fillOpacity: 1,
        });
    };

    const onEachRegion = (feature: any, layer: any) => {
        const regionColor = '#333';
        const regionId = feature.properties.adm1_psgc;  
        const regionName = regionNameMapping[regionId] || 'Unknown Region';  

        layer.setStyle({
            fillColor: regionColor,
            weight: 2,
            color: 'black',
            fillOpacity: 1,  
        });

        // Bind a popup with the region name
        layer.bindPopup(`<strong>Region:</strong> ${regionName}`);
    };

    return (
        <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: "100vh", width: "100%", backgroundColor: "white" }}>
            <GeoJSON data={countryData} onEachFeature={onEachCountry} />
            <GeoJSON data={RegionI} onEachFeature={onEachRegion} />
            <GeoJSON data={RegionII} onEachFeature={onEachRegion} />
        </MapContainer>
    );
};

export default PhilippinesMap;
