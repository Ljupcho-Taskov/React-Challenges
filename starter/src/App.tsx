import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {
  interface Product {
    name: string;
    price: number;
    gender: string;
    brand: string;
    image: string;
    id: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [filterGender, setFilterGender] = useState<string>("");
  const [filterBrand, setFilterBrand] = useState<string>("");

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => {
        return res.json();
      })
      .then((fetchedData) => {
        const data = fetchedData;

        const productsWithKeys = data.products.map(
          (product: Product, index: number) => ({
            ...product,
            id: index + 1,
          })
        );

        setProducts(productsWithKeys);
      });
  }, []);

  const handleFilterGender = (gender: string) => {
    setFilterGender(gender);
    setFilterBrand("");
  };

  const handleFilterBrand = (brand: string) => {
    setFilterBrand(brand);
    setFilterGender("");
  };

  const filteredProducts =
    filterGender || filterBrand
      ? products.filter(
          (product) =>
            (product.gender === filterGender &&
              (!filterBrand || product.brand === filterBrand)) ||
            (product.brand === filterBrand &&
              (!filterGender || product.gender === filterGender))
        )
      : products;

  return (
    <>
      <div className="container bg-light">
        <Header />
        <hr />
        <h1>Bikes</h1>
        <hr />
        <div className="row bg-white">
          <Filters
            filterBrand={filterBrand}
            filterGender={filterGender}
            onBrand={handleFilterBrand}
            onGender={handleFilterGender}
            products={products}
          />

          <Products products={filteredProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
