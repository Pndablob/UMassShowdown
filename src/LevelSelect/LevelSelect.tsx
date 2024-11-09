import React from 'react';
import ImageCarousel from './ImageCarousel';
import RetroButton from '../RetroButton/RetroButton';

function LevelSelect({globalState, setGlobalState}: any) {
  return (
    <div>
        <h1>UMass Showdown</h1>
        <ImageCarousel/>
        <RetroButton message='load'/>
        <RetroButton message='save'/>
    </div>
  );
}

export default LevelSelect;
