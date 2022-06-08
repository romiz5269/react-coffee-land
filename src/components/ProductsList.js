import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductsList() {
  const [products, setProducts] = useState(null);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    if (cat === "All") {
      fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch(`http://localhost:8000/products?category=${cat}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [cat]);
  return (
    <>
      <div className="content-menu-search">
        <form>
          <h2>جستجو بر اساس نوع غذا</h2>
          <select
            onChange={(e) => setCat(e.target.value)}
            id="search-cat"
            className="menu-search-cat"
          >
            <option value="All">همه محصولات</option>
            <option value="hot-drink">نوشیدنی گرم</option>
            <option value="cold-drink">نوشیدنی سرد</option>
          </select>
        </form>
      </div>
      <div className="cards">
        {products && <SingleProduct products={products}/>}
      </div>
    </>
  );
}

export default ProductsList;
