import { SetStateAction, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import NameComponent from './NameComponent';
import './ImageCarousel.css';
import map from '../Game/Courses'
import RetroButtonJSON from '../RetroButton/RetroButtonJSON';

function ImageCarousel({globalState, setGlobalState}: any) {
  const [index, setIndex] = useState(0);
  const levels = globalState.levelsUnlocked;

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/teamSelect', {state: {globalState, setGlobalState}});
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} className='custom-carousel' style={{
      backgroundColor: levels.includes(Array.from(map.keys())[index]) ? 'white' : 'gray',
    }}>
      {Array.from(map.keys()).map((key) => (
        <Carousel.Item key={key}>
          <NameComponent className='curr-class' name={`CS ${key}`}/>
        </Carousel.Item>
      ))}
      {levels.includes(Array.from(map.keys())[index]) && (
          <div className="start-btn">
            <RetroButtonJSON onClick={handleClick}>start</RetroButtonJSON>
          </div>
        )}
    </Carousel>
  );
}

export default ImageCarousel;