import axios from "axios";
import "./CreateUser.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      url: "http://127.0.0.1/react-crud/index.php",
      method: "POST",
      data: userInfo,
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    let response = axios(options);
    response.then((res) => navigate("/users"));
  };

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div className="create-form-wrapper">
      <h1 className="form-action">Create User</h1>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-create-user">Create New User</button>
        </div>
      </form>
    </div>
  );
}
