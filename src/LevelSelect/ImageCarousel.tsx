import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import NameComponent from './NameComponent';
import './ImageCarousel.css';
import map from '../Game/Courses'
import RetroButton from '../RetroButton/RetroLink';

function ImageCarousel({globalState, setGlobalState}: any) {
  const [index, setIndex] = useState(0);
  const levels = globalState.levelsUnlocked;

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} className='custom-carousel' style={{
      backgroundColor: levels.includes(Array.from(map.keys())[index]) ? 'white' : 'gray',
    }}>
      {Array.from(map.keys()).map((key) => (
        <Carousel.Item key={key}>
          <NameComponent className='curr-class' name={`CS ${key}`}/>
          <RetroButton to='/teamSelect' state={{opponent: Array.from(map.keys())[index]}} disabled={levels.includes(Array.from(map.keys())[index]) ? false : true}>
            {levels.includes(Array.from(map.keys())[index]) ? 'Start' : 'Not Unlocked'}
          </RetroButton>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
