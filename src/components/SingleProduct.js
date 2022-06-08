import React, { useState } from "react";
function SingleProduct({ products}) {
  const [SpecialProduct, setSpeciaProduct] = useState(null);
  const handleOrder = (e, product) => {
    console.log(product);
    alert("سفارش شما با موفقیت انجام شد و منتظر تایید گارسون می باشد");
    const data = () => {
      return products.filter((pr) => pr.id === product);
    };
    setSpeciaProduct(data()[0]);
    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SpecialProduct),
    }).then(() => {
      console.log("Done");
    });
  };
  return (
    <>
      {products.map((p) => (
        <div className="cards-body" key={p.id}>
          <div className="cards-title">
            <img src={p.src} alt={p.category} />
            {p.name}
          </div>
          <div className="cards-button">
            <button onClick={(e) => handleOrder(e, p.id)}>سفارش</button>
            {/* <Link to={`/products/${p.id}`}>
            سفارش
           </Link> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default SingleProduct;
