import React from "react";
import axios from "axios";
import {format} from "date-fns";
import "./css/cont.css";

const Cont = ({ upcom, onDelete, onUpdateClick }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${upcom.EventID}`);
      onDelete(upcom.EventID); // Remove the event from the state
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMMM do, yyyy');
  };

  return (
    <>
      <div id="upcom-div">
        <h3 className="pt-3 ps-2">{upcom.Name}</h3>
        <p className="ps-2">{formatDate(upcom.Date)}</p>
        <p className="ps-2">{upcom.Place}</p>
        <button type="button" className="btn btn-danger delete-btn" onClick={handleDelete}>Delete</button>
        <button type="button" className="btn btn-success update-btn" onClick={() => onUpdateClick(upcom)}>Update</button>
      </div>
    </>
  );
};

export default Cont;







