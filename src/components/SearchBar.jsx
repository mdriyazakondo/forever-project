import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, shoSearch, setShoSearch } =
    useContext(ShopContext);
  const [visiable, setVisiable] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisiable(true);
    } else {
      setVisiable(false);
    }
  }, [location]);

  return shoSearch && visiable ? (
    <div className="border-t border-b text-center bg-gray-50 ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShoSearch(false)}
        src={assets.cross_icon}
        className="inline cursor-pointer w-3"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
