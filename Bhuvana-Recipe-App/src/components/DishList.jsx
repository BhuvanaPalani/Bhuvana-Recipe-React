import { useState } from "react";
import Recipe from "./Recipe";
import MyRating from "./Rating";
import "./Dishlist.css";
import dishes from "./DishLists.json";

function DishList() {
  // State for the selected dish ID
  const [selectedDishId, setSelectedDishId] = useState(null);
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");
  // State for tracking whether a recipe is being viewed
  const [viewingRecipe, setViewingRecipe] = useState(false);
  // State for storing dish ratings
  const [dishRatings, setDishRatings] = useState({});

  // Function to handle changes in dish ratings
  function handleRatingChange(dishId, newRating) {
    setDishRatings((prevRatings) => ({
      ...prevRatings,
      [dishId]: {
        ...prevRatings[dishId],
        userRatings: [...(prevRatings[dishId]?.userRatings || []), newRating],
      },
    }));
  }

  // Function to get the user's rating for a dish
  function getUserRating(dishId) {
    return (dishRatings[dishId] && dishRatings[dishId].userRating) || 0;
  }

  // Function to handle clicking on a dish item
  function handleDishClick(dishId) {
    setSelectedDishId(dishId);
    setViewingRecipe(true);
  }
 
  // Function to handle changes in the search input
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Function to handle going back from viewing a recipe
  function handleGoBack() {
    setViewingRecipe(false);
  }

  // Filtering dishes based on the search term
  const filteredDishes = dishes.filter((dish) => {
    return dish.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // JSX for rendering the DishList component
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
