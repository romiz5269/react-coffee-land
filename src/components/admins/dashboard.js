import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SingleOrder from "./SingleOrder";

function Dashboard() {
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userinfo = localStorage.getItem("UserInfo");
    if (userinfo) {
      fetch("http://localhost:8000/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    } else {
      navigate("/admins/login");
    }
  }, [navigate]);
  return (
    <div>
      <Navbar />
      <div className="content">{orders && <SingleOrder orders={orders} />}</div>
    </div>
  );
}

export default Dashboard;
