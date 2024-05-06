// Example usage in another component
import React from "react";
import Reviews from "./Reviews";

const CareerReview = () => {
  const careerReviews = [
    {
      name: "Sarah Thompson",
      rating: 5,
      comment:
        "Joining Endurance Healthcare Services has been a rewarding and fulfilling experience for me. Working here goes beyond just a job; it's about making a positive impact in the lives of others. The team at Endurance is committed to providing excellent care, not only to our clients but also to our dedicated caregivers.",
    },
    {
      name: "Michael Rodriguez",
      rating: 4,
      comment:
        "I appreciate the professional and compassionate work environment at Endurance Healthcare Services. The emphasis on quality care and the support from the team make it a great place to grow as a caregiver. I'm proud to be part of a team that values both its employees and clients.",
    },
    {
      name: "Emily Chang",
      rating: 5,
      comment:
        "Endurance Healthcare Services has exceeded my expectations in terms of workplace satisfaction. The flexibility in scheduling, competitive compensation, and the sense of purpose in our work make it an ideal place to build a career. The leadership team's dedication to both employees and clients is truly commendable.",
    },
    {
      name: "Alex Turner",
      rating: 4,
      comment:
        "As a caregiver at Endurance Healthcare Services, I've found the work to be both challenging and rewarding. The emphasis on continuous learning and professional development has allowed me to enhance my skills. The positive and supportive atmosphere makes it a great place to contribute to the well-being of others.",
    },
  ];

  return (
    <div>
      {/* Other content on the screen */}
      <Reviews
        reviews={careerReviews}
        heading="What other employees are saying!"
      />
      {/* More content if needed */}
    </div>
  );
};

export default CareerReview;
