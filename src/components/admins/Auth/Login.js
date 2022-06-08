import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [admins, setAdmins] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/admins")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();

    const loginInfo = { username, password };
    const data = () => {
      return admins.filter(
        (pr) =>
          pr.username === loginInfo.username &&
          pr.password === loginInfo.password
      );
    };
    const info = data()[0];
    console.log(info);
    if (info) {
      localStorage.setItem("UserInfo", info.userid);
      navigate("/admins/dashboard");
    } else {
      navigate("/admins/login");
    }
  };
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-body">
          <div className="login-img"></div>
          <div className="login-form">
            <h2>Login Panel</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="نام کاربری"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
              <input
                type="text"
                placeholder="کلمه عبور"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
