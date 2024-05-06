// Example usage in another component
import React from "react";
import Reviews from "./Reviews";

const HomeReview = () => {
  const reviewsData = [
    {
      name: "Janet, Home Owner",
      rating: 4,
      comment:
        "Holax's Tech Aluminium provided exceptional service and quality products for my home renovation. The aluminium windows they installed looks fantastic. Highly recommended!",
    },
    {
      name: "Adebayo, Architect",
      rating: 5,
      comment:
        "Impressed with Holax's Tech Aluminium's precision and professionalism. Their custom aluminium solutions elevated our commercial projects to the next level. Highly recommend their services!",
    },
    {
      name: "Mr Ajayi, Hotel Owner",
      rating: 5,
      comment:
        "Holax's Tech Aluminium exceeded my expectations with their stylish and durable shower cubicles. Excellent customer service and top-notch products. Will definitely be a returning customer!",
    },
    // Add more reviews as needed
  ];

  return (
    <div>
      {/* Other content on the screen */}
      <Reviews reviews={reviewsData} heading="Reviews" />
      {/* More content if needed */}
    </div>
  );
};

export default HomeReview;
