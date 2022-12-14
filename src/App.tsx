import React, { useState } from 'react';
import './App.css';
import DynamicMap from './Map/DynamicMap';
import KakaoMapScriptLoader from './Map/KakaoMapScriptLoader';
import MapMarkerController from './Map/MapMarkerController';
import { PlaceType } from './Map/mapTypes';
import SearchLocation from './Map/SearchLocation';

function App() {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState('');

  console.log(places)
  return (
    <KakaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController places={places} selectedPlaceId={selectedPlaceId}/>
        <SearchLocation onUpdatePlaces={(places) => {
          setPlaces(places);
        }} onSelect={(placeId) => {
          setSelectedPlaceId(placeId)
        }}/>
      </DynamicMap>
    </KakaoMapScriptLoader>
  );
}

export default App;
