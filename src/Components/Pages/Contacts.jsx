import React from "react";
import Swiper from "react-id-swiper";

const params = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

function Contacts() {
  return (
    <div>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    </div>
  );
}

export default Contacts;
