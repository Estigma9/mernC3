import React from 'react';
import '../styles/StoreCarousel.css';
import Carousel from 'react-bootstrap/Carousel';


function StoreCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="c-img" src="https://picsum.photos/1024/480/?image=52" alt="first" /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="c-img" src="https://picsum.photos/1024/480/?image=54" alt="second" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="c-img" src="https://picsum.photos/1024/480/?image=58" alt="third" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default StoreCarousel;
