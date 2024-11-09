import React from 'react';
import ImageCarousel from './ImageCarousel';
import RetroButtonJSON from '../RetroButton/RetroButtonJSON';
import './LevelSelect.css'

const handleSaveJSON = (data: any, filename: string) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const jsonData = { name: 'John', age: 30 };

function LevelSelect({globalState, setGlobalState}: any) {
  return (
    <div>
        <h1 className='level-select-title'>UMass Showdown</h1>
        <ImageCarousel/>
        <RetroButtonJSON onClick={() => handleSaveJSON(jsonData, 'data.json')}>LOAD</RetroButtonJSON>
        <br/>
        <RetroButtonJSON onClick={() => handleSaveJSON(jsonData, 'data.json')}>SAVE</RetroButtonJSON>
    </div>
  );
}

export default LevelSelect;
