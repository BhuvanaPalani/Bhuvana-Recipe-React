import PropTypes from "prop-types";
import "./Recipe.css";
import recipes from "./Recipes.json";
function Recipe({ dishId }) {
  const selectedDish = recipes[dishId];

  if (!selectedDish) {
    return null;
  }

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Recipe for {selectedDish.name}</h2>
      <p className="recipe-details">Time taken: {selectedDish.timeTaken}</p>
      <h4 className="recipe-ingredients">Ingredients</h4>
      <ul>
        {selectedDish.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4 className="recipe-steps">Steps</h4>
      <ol>
        {selectedDish.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div>
        <iframe
          title="Cooking Video"
          src={selectedDish.video}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  dishId: PropTypes.number.isRequired,
};

export default Recipe;
