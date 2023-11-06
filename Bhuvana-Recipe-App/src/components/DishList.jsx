import { useState } from "react";
import Recipe from "./Recipe";
import MyRating from "./Rating";
import "./Dishlist.css";
import dishes from "./DishLists.json";

function DishList() {
  const [selectedDishId, setSelectedDishId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewingRecipe, setViewingRecipe] = useState(false);
  const [dishRatings, setDishRatings] = useState({});

  function handleRatingChange(dishId, newRating) {
    setDishRatings((prevRatings) => ({
      ...prevRatings,
      [dishId]: {
        ...prevRatings[dishId],
        userRatings: [...(prevRatings[dishId]?.userRatings || []), newRating],
      },
    }));
  }

  function getUserRating(dishId) {
    return (dishRatings[dishId] && dishRatings[dishId].userRating) || 0;
  }

  function handleDishClick(dishId) {
    setSelectedDishId(dishId);
    setViewingRecipe(true);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleGoBack() {
    setViewingRecipe(false);
  }

  const filteredDishes = dishes.filter((dish) => {
    return dish.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <input
        className="bar"
        type="text"
        placeholder="Search for a dish..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {viewingRecipe ? (
        <>
          <Recipe dishId={selectedDishId} />
          <button onClick={handleGoBack}>Go Back</button>
        </>
      ) : (
        <div className="dish-list">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="dish-item">
              <img src={dish.image} alt={dish.name} />
              <h3>{dish.name}</h3>
              <MyRating
                value={getUserRating(dish.id)}
                onRatingChange={(newRating) =>
                  handleRatingChange(dish.id, newRating)
                }
              />

              <button onClick={() => handleDishClick(dish.id)}>
                View Recipe
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DishList;
