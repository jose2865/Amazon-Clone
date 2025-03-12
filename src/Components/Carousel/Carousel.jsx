import React from "react";
import { Carousel } from "react-responsive-carousel";//go to npm.com and search for react-responsive-carousel
import { imageList } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true} //auto play the images
        infiniteLoop={true} //non stop loop
        showIndicators={false}
        showThumbs={false}
        showStatus={false} //hide indicators 1 of 3, 2 of 3 etc
      >
        {imageList.map((image, i) => { 
          return <img src={image} alt="" key={i} />;//we have to return after we map, we can also use normal bracket ()instead of return.
        })} 
      </Carousel>

      <div className="carousel__effect::before"></div>
    </div>
  );
}

export default CarouselEffect;
