const mysql = require('mysql2');

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Event_booking',
});

// Function to get all events from AllEvents
const getAllEvents = (req, res) => {
  const sql = 'SELECT EventID, Name, Date, Place FROM AllEvents';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};


// Function to update an event in AllEvents
const updateEvent = (req, res) => {
  const { id } = req.params;
  const { Name, Date, Place } = req.body;

  const sql = 'UPDATE AllEvents SET Name = ?, Date = ?, Place = ? WHERE EventID = ?';
  db.query(sql, [Name, Date, Place, id], (err, results) => {
    if (err) {
      console.error('Error updating event:', err);
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Event updated successfully' });
  });
};


// Function to create a new event in AllEvents
const createEvent = (req, res) => {
  const { Name, Date, Place } = req.body;

  const sql = 'INSERT INTO AllEvents (Name, Date, Place) VALUES (?, ?, ?)';
  db.query(sql, [Name, Date, Place], (err, results) => {
    if (err) {
      console.error('Error creating event:', err);
      return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
    res.json({ message: 'Event created successfully', eventId: results.insertId });
  });
};

// Function to delete an event from AllEvents
const deleteEvent = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM AllEvents WHERE EventID = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error deleting event:', err);
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Event deleted successfully' });
  });
};



const UserData = (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, results) => {
    if (err) {
      console.error('Error creating user data:', err);
      // alert(`error in creatiing user `);
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'User data created successfully' });
  });
};


// Function to get users from users
const getUsers = (req, res) => {
  const sql = 'SELECT id, username, email, password FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

module.exports = { getAllEvents, createEvent, updateEvent, deleteEvent, UserData , getUsers};



