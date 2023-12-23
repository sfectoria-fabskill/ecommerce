import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../constants/dummyData";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(data.find((elem) => elem.id == productId));
  }, []);
  return (
    <div>
      <div>
        <img src={product?.image} />
      </div>
      <div>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <h6>{product?.price}</h6>
      </div>
    </div>
  );
}

export default Product;
