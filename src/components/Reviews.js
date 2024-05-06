// Reviews.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Review = ({ name, date, rating, comment }) => (
  <div className="review">
    <div className="review-header">
      <span className="review-name">{name}</span>
      <span className="review-date">{date}</span>
    </div>
    <div className="review-rating">{renderStars(rating)}</div>
    <p className="review-comment">{comment}</p>
  </div>
);

Review.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

const Reviews = ({ reviews, heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="reviews-container container"
      style={{ marginTop: "18px", marginBottom: "100px" }}
    >
      <h2 style={{ color: "black" }}>{heading}</h2>
      {reviews.length > 0 ? (
        <>
          <div className="reviews-carousel">
            <button className="arrow-button" onClick={handlePrevClick}>
              &#8592; {/* Left arrow */}
            </button>
            <div
              className="reviews-list"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review-item"
                  style={{ fontSize: "18px" }}
                >
                  <Review {...review} />
                </div>
              ))}
            </div>
            <button className="arrow-button" onClick={handleNextClick}>
              &#8594; {/* Right arrow */}
            </button>
          </div>
        </>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
};

const renderStars = (rating) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="star">
      ★
    </span>
  ));
  return stars;
};

export default Reviews;
