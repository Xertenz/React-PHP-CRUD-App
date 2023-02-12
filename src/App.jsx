import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListUsers from "./components/Users/ListUsers";
import CreateUser from "./components/Users/CreateUser";
import EditUser from "./components/Users/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/users">All Users</Link>
            </li>
            <li>
              <Link to="/users/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
