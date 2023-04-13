import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './comstyle/carouselslider.css';

export default function Carouseltest() {
  return (
    <>
    <div className="carouselsection">
     <Carousel className='h-100' variant="dark" indicators={false}  controls={false} fade>
      <Carousel.Item className='carousel_item h-100'>
        <img
          className="d-block w-100 img-fluid carousel_image"
          src="https://www.india-tours.com/blog/wp-content/uploads/2021/06/shopping-in-kathmandu-1024x576.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='captiontext'>
          <h3>Grow Together </h3>
          <p>Consume Nepali Local products</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='carousel_item h-100'>
        <img
          className="d-block w-100 img-fluid carousel_image"
          src="https://img.lovepik.com/photo/40013/3360.jpg_wh860.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption className='captiontext'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carousel_item h-100'>
        <img
          className="d-block w-100 img-fluid carousel_image"
          src="https://static3.bigstockphoto.com/3/4/3/large1500/343450705.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption className='captiontext'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}
