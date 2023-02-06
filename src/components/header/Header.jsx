import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { Nav } from "../../data/Data";

function Header() {
  const [Mobile, setMobile] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <nav>
          <ul className={Mobile ? "nav-mobile" : "flex"}>
            {Nav.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="media">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <button className="mobile" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
