import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import NameComponent from './NameComponent';
import './ImageCarousel.css';
import map from '../Game/Courses'

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={false} className='custom-carousel'>
      {/* <Carousel.Item>
        <NameComponent name='CICS 110'/>
        <Carousel.Caption>
            CICS 160
        </Carousel.Caption>
      </Carousel.Item> */}
      {Array.from(map.keys()).map((key) => (
        <Carousel.Item key={key}>
          <NameComponent name={`CS ${key}`}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;