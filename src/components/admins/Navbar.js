import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./style.css";
function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("UserInfo");
    navigate("/admins/login");
  };
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to={"/admins/dashboard"}>سفارشات</Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogOut}>خروج از حساب</button>
      </div>
    </div>
  );
}

export default Navbar;
