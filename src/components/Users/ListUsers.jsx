import axios from "axios";
import "./ListUsers.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    axios
      .get("http://127.0.0.1/react-crud/index.php")
      .then((response) => setAllUsers(response.data));
  }

  function deleteClickHandler(e) {
    e.preventDefault();
    let userID = e.target.dataset.userId;
    let options = {
      url: "http://127.0.0.1/react-crud/index.php",
      method: "DELETE",
      data: { id: userID },
      headers: { "content-type": "application/x-www-form-urlencoded" },
    };
    let response = axios(options);
    response.then((res) => getAllUsers());
  }

  return (
    <div className="list-users-wrapper">
      <h1 className="list-users-title">All Users Here</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((singleUserInfo) => (
            <tr key={singleUserInfo.id}>
              <td>{singleUserInfo.username}</td>
              <td>{singleUserInfo.email}</td>
              <td>
                <Link to={`${singleUserInfo.id}/edit`}>
                  <button className="btn btn-edit-user">Edit</button>
                </Link>
                <button
                  data-user-id={singleUserInfo.id}
                  className="btn btn-delete-user"
                  onClick={deleteClickHandler}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
