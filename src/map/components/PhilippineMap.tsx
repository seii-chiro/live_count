import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countryData from '../2023/geojson/country/lowres/country.0.001.json';
import RegionI from '../2023/geojson/regions/lowres/provdists-region-100000000.0.001.json';
import RegionII from '../2023/geojson/regions/lowres/provdists-region-200000000.0.001.json';
import RegionIII from '../2023/geojson/regions/lowres/provdists-region-300000000.0.001.json';
import RegionIV from '../2023/geojson/regions/lowres/provdists-region-400000000.0.001.json';
import RegionIVB from '../2023/geojson/regions/lowres/provdists-region-1700000000.0.001.json';
import RegionV from '../2023/geojson/regions/lowres/provdists-region-500000000.0.001.json';
import RegionVI from '../2023/geojson/regions/lowres/provdists-region-600000000.0.001.json';
import RegionVII from '../2023/geojson/regions/lowres/provdists-region-700000000.0.001.json';
import RegionVIII from '../2023/geojson/regions/lowres/provdists-region-800000000.0.001.json';
import RegionIX from '../2023/geojson/regions/lowres/provdists-region-900000000.0.001.json';
import RegionX from '../2023/geojson/regions/lowres/provdists-region-1000000000.0.001.json';
import RegionXI from '../2023/geojson/regions/lowres/provdists-region-1100000000.0.001.json';
import RegionXII from '../2023/geojson/regions/lowres/provdists-region-1200000000.0.001.json';
import RegionXIII from '../2023/geojson/regions/lowres/provdists-region-1600000000.0.001.json';
import RegionBARMM from '../2023/geojson/regions/lowres/provdists-region-1900000000.0.001.json';
import RegionCAR from '../2023/geojson/regions/lowres/provdists-region-1400000000.0.001.json';
import NCR from '../2023/geojson/regions/lowres/provdists-region-1300000000.0.001.json'


const provinceColors: { [key: string]: string } = {
  // Region I (Ilocos)
  '102800000': '#E74C3C',  // Ilocos Norte
  '102900000': '#E74C3C',  // Ilocos Sur
  '103300000': '#E9BC49',  // La Union
  '105500000': '#1ABC9C',  // Pangasinan

  // Region II (Cagayan Valley)
  '200900000': '#E67E22',  // Batanes
  '201500000': '#E67E22',  // Cagayan
  '203100000': '#E67E22',  // Isabela
  '205000000': '#9B59B6',  // Nueva Vizcaya
  '205700000': '#8D6E63',  // Quirino

  // Region III (Central Luzon) - using correspondence codes (7-digit)
  '300800000': '#E9BC49',  // Bataan
  '301400000': '#E74C3C',  // Bulacan
  '304900000': '#2ECC71',  // Nueva Ecija
  '305400000': '#E67E22',  // Pampanga
  '306900000': '#E74C3C',  // Tarlac
  '307100000': '#E9BC49',  // Zambales
  '307700000': '#E67E22',   // Aurora

  // Region IV-A (CALABARZON)
  '401000000': '#1ABC9C',  // Batangas
  '402100000': '#E9BC49',  // Cavite
  '403400000': '#E9BC49',  // Laguna
  '405600000': '#E74C3C',  // Quezon
  '405800000': '#1ABC9C',   // Rizal

  // Region IV-B (MIMAROPA)
  '1704000000': '#1ABC9C',  // Marinduque
  '1705100000': '#E74C3C',  // Occidental Mindoro
  '1705200000': '#E67E22',  // Oriental Mindoro
  '1705300000': '#E74C3C',  // Palawan (excluding Puerto Princesa)
  '1705900000': '#8D6E63',  // Romblon

  // Region V (Bicol Region)
  '500500000': '#E67E22',  // Albay
  '501600000': '#E67E22',  // Camarines Norte
  '501700000': '#E74C3C',  // Camarines Sur
  '502000000': '#E9BC49',  // Catanduanes
  '504100000': '#E74C3C',  // Masbate
  '506200000': '#8D6E63',  // Sorsogon

  // Region VI (Western Visayas)
  '600400000': '#1ABC9C',  // Aklan
  '600600000': '#E9BC49',  // Antique
  '601900000': '#E9BC49',  // Capiz
  '603000000': '#E74C3C',  // Iloilo (excluding Iloilo City)
  '607900000': '#E9BC49',  // Guimaras
  '604500000': '#E67E22',  // Negros

  // Region VII
  '701200000': '#E9BC49',  //Bohol
  '702200000': '#1ABC9C', //Cebu
  '704600000': '#E74C3C', //Negros Oriental
  '706100000': '#E9BC49',//Siquijor

  // Region VIII (Eastern Visayas)
  '802600000': '#E74C3C',  // Eastern Samar
  '803700000': '#E74C3C',  // Leyte (excluding Tacloban City)
  '804800000': '#1ABC9C',  // Northern Samar
  '806000000': '#E67E22',  // Samar
  '806400000': '#8D6E63',  // Southern Leyte
  '807800000': '#F1C40F',  // Biliran

  // Region IX (Zamboanga Peninsula)
  '907200000': '#E74C3C',  // Zamboanga del Norte (1,047,455)
  '907300000': '#8D6E63',  // Zamboanga del Sur (1,050,668)
  '908300000': '#E9BC49',  // Zamboanga Sibugay (669,840)
  '990100000': '#E9BC49',  // city of Isabela

  // Region X (Northern Mindanao)
  '1001300000': '#E74C3C',  // Bukidnon (1,541,308)
  '1001800000': '#E9BC49',  // Camiguin (92,808)
  '1003500000': '#E9BC49',  // Lanao del Norte (722,902)
  '1004200000': '#E9BC49',  // Misamis Occidental (617,333)
  '1004300000': '#E9BC49',  // Misamis Oriental (956,900)

  // Region XI (Davao Region)
  '1102300000': '#E9BC49',  // Davao del Norte (1,125,057)
  '1102400000': '#E74C3C',  // Davao del Sur (680,481)
  '1102500000': '#E74C3C',  // Davao Oriental (576,343)
  '1108200000': '#1ABC9C',  // Davao de Oro (767,547)
  '1108600000': '#E74C3C',  // Davao Occidental (317,159)

  // Region XII (SOCCSKSARGEN)
  '1204700000': '#1ABC9C',  // Cotabato (1,275,185)
  '1206300000': '#E9BC49',  // South Cotabato (975,476)
  '1206500000': '#E74C3C',  // Sultan Kudarat (854,052)
  '1208000000': '#E9BC49',  // Sarangani (558,946)

  // Region XIII (Caraga)
  '1600200000': '#1ABC9C',  // Agusan del Norte (387,503)
  '1600300000': '#E67E22',  // Agusan del Sur (739,367)
  '1606700000': '#E9BC49',  // Surigao del Norte (534,636)
  '1606800000': '#E74C3C',  // Surigao del Sur (642,255)
  '1608500000': '#8D6E63',  // Dinagat Islands (128,117)

  // BARMM (Bangsamoro Autonomous Region in Muslim Mindanao)
  '1900700000': '#E9BC49',  // Basilan (426,207)
  '1903600000': '#8D6E63',  // Lanao del Sur (1,195,518)
  '1906600000': '#E9BC49',  // Sulu (1,000,108)
  '1907000000': '#E9BC49',  // Tawi-Tawi (440,276)
  '1908700000': '#E9BC49', // Maguindanao del Norte (618,421)
  '1908800000': '#E9BC49', // Maguindanao del Sur (723,758)
  '1909900000': '#1ABC9C', 

    // CAR (Cordillera Administrative Region)
    '1400100000': '#E67E22',  // Abra (250,985)
    '1401100000': '#E9BC49',  // Benguet (460,683) (excluding Baguio City)
    '1402700000': '#E74C3C',  // Ifugao (207,498)
    '1403200000': '#1ABC9C',  // Kalinga (229,570)
    '1404400000': '#E9BC49',  // Mountain Province (158,200)
    '1408100000': '#E9BC49',  // Apayao (124,366)

    //NCR
    '1303900000': '#E9BC49',
    '1307400000': '#E9BC49',
    '1307500000': '#E9BC49',
    '1307600000': '#E9BC49',
};

const PhilippinesMap: React.FC = () => {

    const onEachCountry = (feature: any, layer: any) => {
        layer.setStyle({
            fillColor: 'transparent',
            weight: 2,
            color: 'black',
            fillOpacity: 1,
        });
    };

    const onEachRegion = (feature: any, layer: any) => {
        const regionName = feature.properties.adm2_en || 'Unknown Region';
        const provinceId = feature.properties.adm2_psgc;
        const color = provinceColors[provinceId] || '#CCCCCC';

        layer.setStyle({
            fillColor: color,
            weight: 2,
            color: 'black',
            fillOpacity: 1,
        });

        layer.bindPopup(`<strong>Province:</strong> ${regionName}`);
    };

    return (
        <div style={{ display: 'flex' }}>
            <MapContainer
                center={[12.8797, 121.7740]}
                zoom={6}
                zoomControl={false} // Disable zoom controls
                style={{ height: '100vh', width: '100%', background: 'white' }}
            >
                <GeoJSON data={countryData} onEachFeature={onEachCountry} />
                <GeoJSON data={RegionI} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionIII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionIV} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionIVB} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionV} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionVI} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionVII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionVIII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionIX} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionX} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionXI} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionXII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionXIII} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionBARMM} onEachFeature={onEachRegion} />
                <GeoJSON data={RegionCAR} onEachFeature={onEachRegion} />
                <GeoJSON data={NCR} onEachFeature={onEachRegion} />
            </MapContainer>
        </div>
    );
};

export default PhilippinesMap;
