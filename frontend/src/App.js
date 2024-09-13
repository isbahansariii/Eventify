import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import SearchBar from "./component/Searchbar";
import NavBar from "./component/Navbar";
import Content from "./component/Content";
import Review from "./component/Review";
import About from "./component/About";
import Footer from './component/Footer';
// import Signup from './pages/Signup';

const App = () => {
  const [searchResults, setSearchResults] = useState(null);
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

  const handleSearch = (query) => {
    const filteredEvents = upcom.filter(event => 
      (event.Name?.toLowerCase().includes(query.toLowerCase())) ||
      ((event.Place && event.Place.toLowerCase().includes(query.toLowerCase())))
    );
    setSearchResults(filteredEvents);
  };

  const handleDelete = (eventId) => {
    setUpcom(upcom.filter(event => event.EventID !== eventId));
  };

  const handleEventCreated = (newEvent) => {
    setUpcom([...upcom, newEvent]); // Add the new event to the existing events
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
  };

  return (
    <Router>
      <AppContent 
        upcom={upcom} 
        onSearch={handleSearch} 
        searchResults={searchResults} 
        onDelete={handleDelete} 
        onEventCreated={handleEventCreated} 
        onUpdate={handleUpdate} 
      />
    </Router>
  );
};

const AppContent = ({ upcom, onSearch, searchResults, onDelete, onEventCreated, onUpdate }) => {
  const location = useLocation();

  const hideNavAndFooter = location.pathname === "/signup";

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={
          <MainContent
            upcom={upcom}
            onSearch={onSearch}
            searchResults={searchResults}
            onDelete={onDelete}
            onEventCreated={onEventCreated}
            onUpdate={onUpdate}
          />
        } />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

const MainContent = ({ upcom, onSearch, searchResults, onDelete, onEventCreated, onUpdate }) => {
  const location = useLocation();
  const hideSearchBarRoutes = ["/review", "/about"];

  return (
    <>
      {!hideSearchBarRoutes.includes(location.pathname) && <SearchBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={
          <Content 
            upcom={upcom} 
            searchResults={searchResults} 
            onDelete={onDelete} 
            onEventCreated={onEventCreated} 
            onUpdate={onUpdate} 
          />} 
        />
      </Routes>
    </>
  );
};

export default App;





////////////////////////////////////////////





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
// import "./App.css";
// import SearchBar from "./component/Searchbar";
// import NavBar from "./component/Navbar";
// import Content from "./component/Content";
// import Review from "./component/Review";
// import About from "./component/About";
// import Footer from './component/Footer';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

// const App = () => {
//   const [searchResults, setSearchResults] = useState(null);
//   const [upcom, setUpcom] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const responseUpcoming = await axios.get('http://localhost:5000/api/events');
//         setUpcom(responseUpcoming.data);
//       } catch (err) {
//         console.error('Error fetching events:', err);
//       }
//     };

//     const checkAuth = () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         setIsAuthenticated(true);
//       }
//     };

//     fetchEvents();
//     checkAuth();
//   }, []);

//   const handleSearch = (query) => {
//     const filteredEvents = upcom.filter(event => 
//       (event.Name?.toLowerCase().includes(query.toLowerCase())) ||
//       ((event.Place && event.Place.toLowerCase().includes(query.toLowerCase())))
//     );
//     setSearchResults(filteredEvents);
//   };

//   const handleDelete = (eventId) => {
//     setUpcom(upcom.filter(event => event.EventID !== eventId));
//   };

//   const handleEventCreated = (newEvent) => {
//     setUpcom([...upcom, newEvent]); // Add the new event to the existing events
//   };

//   const handleUpdate = () => {
//     const fetchEvents = async () => {
//       try {
//         const responseUpcoming = await axios.get('http://localhost:5000/api/events');
//         setUpcom(responseUpcoming.data);
//       } catch (err) {
//         console.error('Error fetching events:', err);
//       }
//     };
//     fetchEvents();
//   };

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <AppContent 
//         upcom={upcom} 
//         onSearch={handleSearch} 
//         searchResults={searchResults} 
//         onDelete={handleDelete} 
//         onEventCreated={handleEventCreated} 
//         onUpdate={handleUpdate} 
//         isAuthenticated={isAuthenticated}
//         onLogin={handleLogin}
//       />
//     </Router>
//   );
// };

// const AppContent = ({ upcom, onSearch, searchResults, onDelete, onEventCreated, onUpdate, isAuthenticated, onLogin }) => {
//   const location = useLocation();

//   const hideNavAndFooter = location.pathname === "/signup" || location.pathname === "/";

//   return (
//     <>
//       {!hideNavAndFooter && <NavBar />}
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Login onLogin={onLogin} />} />
//         <Route path="/home" element={
//           isAuthenticated ? (
//             <MainContent
//               upcom={upcom}
//               onSearch={onSearch}
//               searchResults={searchResults}
//               onDelete={onDelete}
//               onEventCreated={onEventCreated}
//               onUpdate={onUpdate}
//             />
//           ) : (
//             <Navigate to="/" />
//           )
//         } />
//         <Route path="/review" element={<Review />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       {!hideNavAndFooter && <Footer />}
//     </>
//   );
// };

// const MainContent = ({ upcom, onSearch, searchResults, onDelete, onEventCreated, onUpdate }) => {
//   const location = useLocation();
//   const hideSearchBarRoutes = ["/review", "/about"];

//   return (
//     <>
//       {!hideSearchBarRoutes.includes(location.pathname) && <SearchBar onSearch={onSearch} />}
//       <Routes>
//         <Route path="/" element={
//           <Content 
//             upcom={upcom} 
//             searchResults={searchResults} 
//             onDelete={onDelete} 
//             onEventCreated={onEventCreated} 
//             onUpdate={onUpdate} 
//           />} 
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;
