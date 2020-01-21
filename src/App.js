import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "meat",
    rating: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbA6RuTaiEYjdeny20Kyu4QW3IaWc6RWyVrq57qz6-No1ypee&s"
  },
  {
    id: 2,
    name: "ramen",
    rating: 1,
    image:
      "https://cookingwithdog.com/wp-content/uploads/2017/11/yakibuta-ramen-00.jpg"
  },
  {
    id: 3,
    name: "beef",
    rating: 3,
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peppercorn-beef-tenderloin-horseradish-cream-sauce-ghk-1543265941.jpg?crop=0.999687597625742xw:1xh;center,top&resize=480:*"
  },
  {
    id: 4,
    name: "chicken",
    rating: 4.5,
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/29/1469132118-ghk-0816-buttermilk-fried-chicken.jpg?crop=0.500xw:1.00xh;0.162xw,0&resize=480:*"
  }
];

function Food({ fav, picture, rating }) {
  return (
    <div>
      <h2>I like {fav}</h2>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={fav + " image"}></img>
    </div>
  );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(food => (
        <Food
          key={food.id}
          fav={food.name}
          picture={food.image}
          rating={food.rating}
        />
      ))}
      ;
    </div>
  );
}

export default App;
