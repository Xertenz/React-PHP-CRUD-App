import axios from "axios";
import "./EditUser.css";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    newpassword: "",
  });

  useEffect(() => {
    let response = axios.get(`http://127.0.0.1/react-crud/index.php?id=${id}`);
    response.then((res) => {
      let oldUserInfo = res.data;
      setUserInfo(() => {
        return { ...oldUserInfo, newpassword: "" };
      });
    });
  }, []);

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
    <div className="edit-form-wrapper">
      <h1 className="form-action">Edit User</h1>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={userInfo.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newpassword">Password</label>
          <input
            type="password"
            id="newpassword"
            name="newpassword"
            onChange={handleChange}
            placeholder="Leave it black if you don't want to change"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={userInfo.email}
          />
        </div>
        <div className="form-group">
          <input type="hidden" name="password" value={userInfo.password} />
          <input type="hidden" name="id" value={userInfo.id} />
        </div>
        <div className="form-group">
          <button className="btn btn-edit-user">Update User</button>
        </div>
      </form>
    </div>
  );
}
