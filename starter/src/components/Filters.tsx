import React, { useEffect, useState } from "react";

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

interface FilterProps {
  filterGender: string;
  filterBrand: string;
  onGender: (gender: string) => void;
  onBrand: (brand: string) => void;
  products: Product[];
}

const Filters = ({
  filterGender,
  filterBrand,
  onGender,
  onBrand,
  products,
}: FilterProps) => {
  const [brandCounts, setBrandCounts] = useState<{ [key: string]: number }>({});
  const [maleCounts, setMaleCounts] = useState<number>(0);
  const [femaleCounts, setFemaleCounts] = useState<number>(0);

  useEffect(() => {
    const initialBrandCounts: { [key: string]: number } = {};
    let initialMaleCount = 0;
    let initialFemaleCount = 0;

    products.forEach((product) => {
      const { brand, gender } = product;

      initialBrandCounts[brand] = (initialBrandCounts[brand] || 0) + 1;

      if (gender === "MALE") {
        initialMaleCount++;
      } else if (gender === "FEMALE") {
        initialFemaleCount++;
      }
    });

    setBrandCounts(initialBrandCounts);
    setMaleCounts(initialMaleCount);
    setFemaleCounts(initialFemaleCount);
  }, [products]);

  const brandMaleCounts = filterBrand
    ? products.filter(
        (product) => product.brand === filterBrand && product.gender === "MALE"
      ).length
    : products.filter((product) => product.gender === "MALE").length;

  const brandFemaleCounts = filterBrand
    ? products.filter(
        (product) =>
          product.brand === filterBrand && product.gender === "FEMALE"
      ).length
    : products.filter((product) => product.gender === "FEMALE").length;

  return (
    <div className="col-md-3 filters">
      <h3>Filter by:</h3>
      <p
        onClick={() => {
          onGender("");
        }}
        className={!filterGender && !filterBrand ? "active" : ""}
      >
        Show all
        <span className="badge rounded-pill">
          {filterGender === ""
            ? maleCounts + femaleCounts
            : brandMaleCounts + brandFemaleCounts}
        </span>
      </p>
      <hr />
      <p
        onClick={() => {
          onGender("MALE");
        }}
        className={filterGender === "MALE" ? "active" : ""}
      >
        Male
        <span className="badge rounded-pill">
          {filterGender === "MALE" ? maleCounts : brandMaleCounts}
        </span>
      </p>
      <p
        onClick={() => {
          onGender("FEMALE");
        }}
        className={filterGender === "FEMALE" ? "active" : ""}
      >
        Female
        <span className="badge rounded-pill">
          {filterGender === "FEMALE" ? femaleCounts : brandFemaleCounts}
        </span>
      </p>

      <hr />
      <h5>Brand</h5>
      {Object.keys(brandCounts).map((brand) => (
        <p
          key={brand}
          onClick={() => onBrand(brand)}
          className={
            filterBrand === brand && filterGender === "" ? "active" : ""
          }
        >
          {brand}
          <span className="badge rounded-pill">
            {filterBrand === brand ? brandCounts[brand] : brandCounts[brand]}
          </span>
        </p>
      ))}
    </div>
  );
};

export default Filters;
