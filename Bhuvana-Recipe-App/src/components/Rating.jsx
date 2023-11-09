import Rating from "react-rating-stars-component";
import PropTypes from "prop-types";
import "./Rating.css";
// Functional component for a custom rating component using react-rating-stars-component
function MyRating({ value, onRatingChange }) {
  // JSX for rendering the rating container
  return (
    <div className="rating-container">
      {/* Using the Rating component from react-rating-stars-component */}
      <Rating
        value={value}
        edit={true}
        onChange={onRatingChange}
        isHalf={false}
        activeColor="blueviolet"
        emptyIcon={<i className="rating-empty-star"></i>}
        filledIcon={<i className="rating-filled-star"></i>}
        classNames="rating-star"
      />
    </div>
  );
}

// PropTypes for type-checking the props
MyRating.propTypes = {
  value: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

// Exporting the MyRating component as the default export
export default MyRating;
