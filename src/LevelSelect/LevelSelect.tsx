import React, { useRef, useState } from 'react';
import ImageCarousel from './ImageCarousel';
import RetroButtonJSON from '../RetroButton/RetroButtonJSON';
import './LevelSelect.css'
import GlobalState, { getSerializedFromState, getStateFromSerialized } from '../GlobalState/GlobalState';

function LevelSelect({globalState, setGlobalState}: any) {
  // const [global, set] = useState<GlobalState>(globalState)
  const handleSaveJSON = () => {
    const data = getSerializedFromState(globalState);
    const blob = new Blob([JSON.stringify(data, null  , 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'save.json');
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      
      // Read and parse JSON file
      const fileContent = await selectedFile.text();
      try {
        const parsedData = JSON.parse(fileContent);

        // Set global state using parsed data
        setGlobalState(getStateFromSerialized(parsedData));
        // console.log('Loaded data:', getStateFromSerialized(parsedData));
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
        <h1 className='level-select-title'>UMass Showdown</h1>
        <ImageCarousel globalState={globalState} setGlobalState={setGlobalState}/>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <RetroButtonJSON onClick={handleButtonClick}>LOAD</RetroButtonJSON>
        <br/>
        <RetroButtonJSON onClick={() => handleSaveJSON()}>SAVE</RetroButtonJSON>
    </div>
  );
}

export default LevelSelect;
