import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     console.log(data);
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    // console.log(product);
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
