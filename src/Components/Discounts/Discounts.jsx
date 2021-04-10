import React from "react";
import Card from "./Card";
import "./Discounts.css";
import info from "./cardsInfo";

function Discounts() {
  console.log(info);
  return (
    <div className="discounts__container">
      <div className="discounts">
        <div className="discounts__info">
          <h2>Best Discounts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            nibh vitae mauris vulputate euismod quis fringilla lorem. Donec vel
            tincidunt quam. Sed consectetur molestie mattis.
          </p>
        </div>

        <div className="discounts__cards">
          {info.map((card) => (
            <Card
              price={card.price}
              img={card.img}
              description={card.description}
              country={card.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discounts;
