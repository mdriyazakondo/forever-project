import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="w-full md:w-1/2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, et
            quibusdam voluptas maiores odit cupiditate id commodi nam? Quibusdam
            repudiandae architecto adipisci fugit ea beatae necessitatibus quis
            ratione corrupti et.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Ablut</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8801611188018</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ forever.com - All Right Reseverd.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
