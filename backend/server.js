const express = require('express');
const cors = require('cors');
const { getAllEvents, createEvent, updateEvent, deleteEvent,UserData, getUsers } = require('./controllers/eventController');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/events', getAllEvents);
app.post('/api/events', createEvent);
app.put('/api/events/:id', updateEvent);
app.delete('/api/events/:id', deleteEvent);
app.post('/api/users' , UserData);
app.get('/api/users', getUsers);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
