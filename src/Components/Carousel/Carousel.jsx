import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imageList } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {imageList.map((image, i) => {
          return <img src={image} alt="" key={i} />;
        })}
      </Carousel>

      <div className="carousel__effect::before">

      </div>
    </div>
  );
}

export default CarouselEffect;
