import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/content.css";
import Cont from "./cont";
import UpdateForm from "./UpdateForm";
import EventForm from "./EventForm";

const Content = ({ searchResults, onDelete, onEventCreated, onUpdate }) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [upcom, setUpcom] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseUpcoming = await axios.get('http://localhost:5000/api/events');
        setUpcom(responseUpcoming.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateEventClick = () => {
    setShowEventForm(true);
  };

  const handleCloseEventForm = () => {
    setShowEventForm(false);
  };

  const handleUpdateClick = (event) => {
    setCurrentEvent(event);
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setCurrentEvent(null);
  };

  const handleEventCreated = (newEvent) => {
    setUpcom([...upcom, newEvent]);
    setShowEventForm(false);
  };

  const handleDelete = (eventId) => {
    setUpcom(upcom.filter(event => event.EventID !== eventId));
    onDelete(eventId);
  };

  const handleUpdate = () => {
    const fetchEvents = async () => {
      try {
        const responseUpcoming = await axios.get('http://localhost:5000/api/events');
        setUpcom(responseUpcoming.data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
    setShowUpdateForm(false);
  };

  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          <h2 className="mt-5 mb-3 section create">
            All Events <button type="button" className="btn btn-success CreateEvent-btn" onClick={handleCreateEventClick}>Create Event</button>
          </h2>
          {showEventForm ? (
            <EventForm onClose={handleCloseEventForm} onEventCreated={handleEventCreated} />
          ) : (
            <>
              {searchResults && searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <Cont upcom={result} onDelete={handleDelete} onUpdateClick={handleUpdateClick} />
                  </div>
                ))
              ) : searchResults && searchResults.length === 0 ? (
                <p className="mt-5 mb-3">Not Found</p>
              ) : (
                <div className="row">
                  {upcom.map((prop) => (
                    <div className="col-12 col-md-6 col-lg-3" key={prop.EventID}>
                      <Cont upcom={prop} onDelete={handleDelete} onUpdateClick={handleUpdateClick} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {showUpdateForm && <UpdateForm event={currentEvent} onClose={closeUpdateForm} onUpdate={handleUpdate} />}
    </div>
  );
};

export default Content;
