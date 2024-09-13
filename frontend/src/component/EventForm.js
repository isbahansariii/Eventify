import React, { useState } from 'react';
import axios from 'axios';
import './css/EventForm.css';

const EventForm = ({ onClose, onEventCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    place: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/events', {
        Name: formData.name,
        Date: formData.date,
        Place: formData.place,
      });
      window.location.reload(); // Reload the page after event creation
      console.log('Event Created:', response.data);
      onEventCreated(response.data); // Call the onEventCreated function to update the UI with the newly created event
      onClose(); // Close the form after submission
      // window.location.reload(); // Reload the page after event creation
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create An Event</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EventForm;
