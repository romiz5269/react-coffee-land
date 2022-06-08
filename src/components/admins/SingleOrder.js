import { useEffect, useState } from "react";
function SingleOrder({ orders }) {
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/orders/${orderId}`, {
      method: "DELETE",
    });
  }, [orderId]);
  const handleDelete = (e, or) => {
    setOrderId(or);
  };
  return (
    <>
      {orders.map((order) => (
        <div className="orderlist" key={order.id}>
          <div>{order.id}</div>
          <div>
            <img src={order.src} alt={order.category} />
          </div>
          <div>{order.name}</div>
          <div>{order.price}</div>
          <div>{order.serial}</div>
          <div>
            <button className="confirm">ثبت سفارش</button>
          </div>
          <div>
            <button
              className="delete"
              onClick={(e) => handleDelete(e, order.id)}
            >
              حذف سفارش
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default SingleOrder;
