import PropTypes from "prop-types";
import "./Recipe.css";
import recipes from "./Recipes.json";
// Functional component for displaying a recipe
function Recipe({ dishId }) {
  // Retrieve the selected dish from the recipes data based on dishId
  const selectedDish = recipes[dishId];

  // If the selected dish is not found, return null (no recipe to display)
  if (!selectedDish) {
    return null;
  }

  // JSX for rendering the recipe details
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

// PropTypes for type-checking the dishId prop
Recipe.propTypes = {
  dishId: PropTypes.number.isRequired,
};

// Exporting the Recipe component as the default export
export default Recipe;
