// import React from "react";
// import axios from "axios";
// import "./css/cont.css";

// const Today = ({ today, onUnreserve }) => {
//   const handleUnreserve = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/bookedevents/${today.BookedID}`);
//       onUnreserve(today.BookedID);
//     } catch (error) {
//       console.error('Error unreserving event:', error);
//     }
//   };

//   return (
//     <div id="today-div">
//       <h3 className="pt-3 ps-2">{today.Name}</h3>
//       <p className="ps-2">{today.Date}</p>
//       <p className="ps-2">{today.Place}</p>
//       <p className="ps-2">Ticket ID: {today.TicketID}</p>
//       <button type="button" className="btn btn-danger unreserve-btn" onClick={handleUnreserve}>Unreserve</button>
//     </div>
//   );
// };

// export default Today;

