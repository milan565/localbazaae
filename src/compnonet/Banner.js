import React from 'react'
import CarouselSlider from './Carouselslider';
import './comstyle/banner.css';


export default function Banner() {
  return (
    <>
      <div className="container-fluid bannersection">
        <div className="row h-100 bannerrow">
        <CarouselSlider/>
        </div>
      </div>
    </>
  )
}
