import { Button } from "@material-ui/core";
import React from "react";
import "./Presentation.css";
import luxury from "../../images/luxury.jpg";

function Presentation() {
  return (
    <div className="presentation__container">
      <div className="presentation">
        <div className="presentation__img">
          <img src={luxury} alt="" />
        </div>
        <div className="presentation__text">
          <h2>Welcome to FlyBizClass</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            nibh vitae mauris vulputate euismod quis fringilla lorem. Donec vel
            tincidunt quam. Sed consectetur molestie mattis.
          </p>
          <Button variant="contained" color="secondary">
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
