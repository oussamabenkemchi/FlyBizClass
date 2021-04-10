import React from "react";
import { useState } from "react";

import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import "./HomeSlider.css";

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import paris from "../../images/paris2.jpg";

const params = {
  parallax: true,

  containerClass: "swiper-container mySlide",
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 0,
  effect: "slide",

  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

function HomeSlider() {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <Swiper {...params} getSwiper={setParallaxSwiper}>
      <div className="mySlide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img className="imageSlider" src={paris} alt="image1"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Paris</h1>
          <p className="mb-5 large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="mySlide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white ">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          <p className="mb-5 large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="mySlide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image3} alt="image3"></img>
        </div>
        <div className="col-md-6 offset-md-3 my-auto text-center text-white">
          <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
          <p className="mb-5 large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
    </Swiper>
  );
}

export default HomeSlider;
