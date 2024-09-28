import React from 'react'
import Carousel from 'react-material-ui-carousel';

function Carousels() {
  return (
    <div className="carousal-box">
<Carousel className="carousal-intro"
         autoPlay={true}
         duration="1000"
         animation="slide"
         indicators={false}
         navButtonsAlwaysVisible={true}
         >
        <img src="carousel/image1.jpg" alt="" />
        <img src="carousel/image3.jpg" alt="" />
        <img src="carousel/image4.jpg" alt="" />
      </Carousel>
    </div>




  )
}

export default Carousels
