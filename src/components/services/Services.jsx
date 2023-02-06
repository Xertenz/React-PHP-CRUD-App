import React from "react";
import "./services.scss";
import { serviceData } from "../../data/Data";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="text">
          <span>Our Services</span>
          <h1>Our Main Focus</h1>
        </div>
        <div className="flex">
          {serviceData.map((item, idx) => (
            <div key={idx} className="card">
              <img className="card-img" src={item.img} alt="" />
              <h4 className="card-title">{item.name}</h4>
              <p className="card-description">{item.description}</p>
              <a className="card-link" href="#">
                Find A Home
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
