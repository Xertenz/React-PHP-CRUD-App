import React from "react";
import "./top.scss";

function Top() {
  return (
    <div className="top">
      <div className="container">
        <div className="flex">
          <div className="contact">
            <span>
              <i className="fa-regular fa-envelope"></i>
              ahmed@gmail.com
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              15/A, Nest Tower, NYC
            </span>
          </div>
          <div className="media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <button>Add Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
