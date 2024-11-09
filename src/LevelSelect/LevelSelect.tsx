import React from 'react';
import ImageCarousel from './ImageCarousel';
import RetroButton from '../RetroButton/RetroButton';
import './LevelSelect.css'

function LevelSelect({globalState, setGlobalState}: any) {
  return (
    <div>
        <h1 className='level-select-title'>UMass Showdown</h1>
        <ImageCarousel/>
        <RetroButton>LOAD</RetroButton>
        <br/>
        <RetroButton>SAVE</RetroButton>
    </div>
  );
}

export default LevelSelect;
