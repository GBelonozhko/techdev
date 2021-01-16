import React from "react";
import Slider from "react-slick";
import img1 from "../assets/img/pexels-negative-space-97077.jpg"

const HomeCarousel = () => {
     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
     };
  return (
   <div>
        
        <Slider {...settings}>
          <div>
            <img src={img1} className='carouselImage' />
          </div>
          <div>
           <img src={img1} />
          </div>
          <div>
           <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
           <img src={img1} />
          </div>
          <div>
           <img src={img1} />
          </div>
        </Slider>
      </div>
  );
};

export default HomeCarousel;
