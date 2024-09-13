import React, { useState, useEffect } from "react";
import './css/review.css';

const Review = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]); // Save reviews to localStorage whenever they change

  return (
    <>
      <div className="container review-container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h1>What People Say</h1>
            <label htmlFor="review" className="form-label">
              Write a Review
            </label>
            <textarea
              id="review"
              className="form-control"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="mt-4">
          <h2>All Reviews</h2>
          <ul className="list-group">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {review}
                <button
                  className="btn rev-delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Review;
