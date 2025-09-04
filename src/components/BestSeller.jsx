import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestSellers = products.filter((item) => item.bestseller);
    setBestSellers(bestSellers.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          ratione accusamus itaque, sint distinctio iste ea vero doloremque?
          Ducimus omnis aperiam vero dignissimos nesciunt placeat, eveniet neque
          perferendis hic quibusdam.
        </p>
      </div>
    </div>
  );
};

export default BestSeller;
