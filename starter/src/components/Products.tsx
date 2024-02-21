import React from "react";

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
  id: number;
}

interface ProductProps {
  products: Product[];
}

const Products = ({ products }: ProductProps) => {
  return (
    <div className="col-md-9">
      <div className="row">
        {products.map((product) => (
          <div className="col-6 col-lg-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={`/img/${product.image}.png`}
                className="card-img-top p-2 mw-100"
                alt={product.name}
              />
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ backgroundColor: "orange" }}
              >
                <p className="card-title font-weight-bold">{product.name}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
