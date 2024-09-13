import React, { useState } from "react";
import "./css/searchbar.css";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  
  const Reload = ()=>{
    window.location.reload();
  }

  return (
    <div className="d-flex justify-content-center search">
      <button className="btn btn-success mt-4 me-2 backbtn" onClick={Reload}> ↩ </button>
      <form className="d-flex mt-4" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2 inputBtn"
          type="search"
          style={{ width: "50vw", height: "4vw" }}
          placeholder="Search for an event"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn searchBtn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fafafa"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
