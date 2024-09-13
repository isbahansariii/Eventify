import React, { useState } from 'react';
import axios from 'axios';
import './css/UpdateForm.css'; 

const UpdateForm = ({ event, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    Name: event.Name,
    Date: event.Date,
    Place: event.Place,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/events/${event.EventID}`, formData);
      onUpdate(); // Callback to update the state in the parent component
      onClose(); // Close the form after submission
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="overlay">
      <div className="update-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              id="place"
              name="Place"
              value={formData.Place}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update The Event</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
