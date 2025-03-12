import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Product/ProductCard";
import classes from "./Product.module.css"
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]); // Initializing with an empty array
const [isloading, setisLoading] = useState(false); // Initializing with false
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }, []);

  return (
    <>
      {isloading ? ( //if is loading it true, we will find loader component if not 
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
