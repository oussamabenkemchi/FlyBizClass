import React from "react";
import "./Card.css";
import paris from "../../images/paris.jpg";
import { Button } from "@material-ui/core";

function Card(props) {
  return (
    <div className="myCard">
      <h3>{props.price} $</h3>

      <img src={props.img} alt="paris image" />

      <div className="myCard__info">
        <h4 className="place">{props.description}</h4>
        <h2 className="country">{props.country}</h2>
        <Button variant="outlined">More</Button>
      </div>
      <div className="myCard__shadow"></div>
    </div>
  );
}

export default Card;
