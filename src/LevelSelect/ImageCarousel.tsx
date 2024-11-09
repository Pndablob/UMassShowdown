import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import davila from './assets/davila.jpg'
import barrington from './assets/barrington.jpeg'

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} indicators={true}>
      <Carousel.Item>
        <img
            src={davila}
        />
        <Carousel.Caption>
            CICS 160
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={barrington}/>
        <Carousel.Caption>
            CS 250
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;