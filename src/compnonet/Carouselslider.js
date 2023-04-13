import React from 'react'
import './comstyle/carouselslider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function CarouselSlider() {
  return (
    <>
        <Carousel className='carouselsection'autoPlay
      infiniteLoop
      showArrows={false}
      >
          
              <div className='carousel-image'>
                <img src="https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg"  className='img-fluid' />
              </div>
            
           
              <div className='carousel-image'>
              <img src="https://thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg" className='img-fluid'/>
                      
              </div>
           
            
              <div className='carousel-image'>
              <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg" className='img-fluid' />
              </div>
            
            </Carousel>
    </>
  )
}
