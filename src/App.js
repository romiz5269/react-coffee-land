import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/admins/Auth/Login";
import Dashboard from "./components/admins/dashboard";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admins/login" element={<AdminLogin />} />
          <Route path="/admins/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
