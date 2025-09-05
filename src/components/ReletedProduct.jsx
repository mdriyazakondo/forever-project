import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const ReletedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [releted, setReleted] = useState([]);

  useEffect(() => {
    let productscopy = products.slice();
    if (products.length > 0) {
      productscopy = productscopy.filter((item) => category === item.category);
      productscopy = productscopy.filter(
        (item) => subCategory === item.subCategory
      );
      setReleted(productscopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-6">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELETED"} text2={"PRODUCT"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {releted.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ReletedProduct;
