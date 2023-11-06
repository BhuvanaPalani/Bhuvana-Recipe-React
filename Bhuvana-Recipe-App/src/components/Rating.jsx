import Rating from "react-rating-stars-component";
import PropTypes from "prop-types";
import "./Rating.css";
function MyRating({ value, onRatingChange }) {
  return (
    <div className="rating-container">
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

MyRating.propTypes = {
  value: PropTypes.number,
  onRatingChange: PropTypes.func.isRequired,
};

export default MyRating;
