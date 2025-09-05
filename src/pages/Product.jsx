import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import ReletedProduct from "../components/ReletedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addTocart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2  pt-10 transition-opacity ease-in-out duration-500 opacity-100">
      {/* --------product data ----------- */}
      <div className="flex flex-col gap-12  sm:gap-12 sm:flex-row">
        {/* ---------- product image -----------*/}
        <div className="flex  flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%]  w-full">
            {productData?.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* --------------- product info ----------------- */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl mt-5 font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-500 sm:w-3/4 mt-5">
            {productData.description}
          </p>
          <div className="flex flex-col my-8 gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`cursor-pointer py-2 px-4 border border-gray-300  bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addTocart(productData._id, size)}
            className="bg-black py-3 px-8 text-white text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="text-gray-300 mt-8 sm:w-3/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original Product</p>
            <p>Cash On Delivery is available on this porduct.</p>
            <p>Easy retuen and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*------ decription & reviews solution -------- */}
      <div className="mt-20">
        <div className="flex gap-1">
          <b className="border border-gray-400 py-3 px-5 text-sm">
            Description
          </b>
          <p className="border border-gray-400 py-3 px-5 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that enables the buying
            and selling of products or services over the internet. It acts as a
            virtual marketplace where businesses and individuals can showcase
            their offerings, interact with customers, and complete transactions
            without requiring a physical presence. These websites have become
            increasingly popular due to their convenience, accessibility, and
            the wide range of products and services they provide.
          </p>
          <p>
            E-commerce websites typically present products or services with
            detailed descriptions, images, prices, and available variations such
            as size, color, or style. Each product usually has its own dedicated
            page containing all the relevant information to help customers make
            informed purchasing decisions.
          </p>
        </div>
      </div>
      {/* display releted product */}
      <ReletedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
