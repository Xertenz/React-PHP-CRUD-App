import React from "react";
import "./blog.scss";
import { Link } from "react-router-dom";
import { BlogData } from "../../data/Data";

function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="text">
          <span>News & Blogs</span>
          <h1>Leatest News Feeds</h1>
        </div>
        <div className="flex cards">
          {BlogData.map((item, idx) => (
            <div className="card" key={idx}>
              <img src={item.img} className="card-img" alt="" />
              <div className="card-body">
                <div className="info">
                  <div className="info-item">
                    <i className="fa-solid fa-user"></i>
                    <p>By: Admin</p>
                  </div>

                  <div className="info-item">
                    <i className="fa-solid fa-tag"></i>
                    <p>Estate</p>
                  </div>
                </div>
                <h4 className="card-title">{item.name}</h4>
              </div>
              <div className="card-footer">
                <div className="date">
                  <i className="fa-solid fa-calendar-days"></i>
                  <p>Apr 27, 2022</p>
                </div>
                <Link to="/">READ MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
