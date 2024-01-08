import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <div className="product_navbar">
        <div className="title">Products API using useEffect</div>
      </div>

      <div className="products">
        {products.map((product) => {
          return (
            <>
              <div className="products_card" key={product.id}>
                <img className="image" src={product.image} alt="product_img" />
                <h4 className="product_title"><span className="sample">Product Name: </span>{product.title}</h4>
                <p className="product_price"><span className="sample">Price($): </span>{product.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
