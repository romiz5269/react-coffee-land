import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div className="container">
      <Header />
      <section>
        <div className="content-body">
          <ProductsList />
        </div>
      </section>
    </div>
  );
}

export default Home;
