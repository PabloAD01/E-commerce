import "./App.css";
import React, { useState } from "react";
import CategoriesCard from "./components/cards/CategoriesCard";
import ProductCard from "./components/cards/ProductCard";
import Header from "./components/navbar/Header";
import DiscountCard from "./components/cards/DiscountCard";

function App() {
  return (
    <div className="h-screen flex justify-center bg-white text-black overflow-y-scroll ">
      <div className=" w-10/12 h-max">
        <div className="flex flex-col gap-3 w-full justify-center items-center flex-1 ">
          <div className="w-full">
            <Header />
            <img
              className="flex w-full"
              src={require("./assets/images/hero_section.png")}
            />
          </div>
          <div className="w-full px-5 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold text-black">
                Shop Out Top Categories
              </h1>
              <div className="flex w-full justify-between gap-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <CategoriesCard />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold text-black">
                Today's Best Deals For You!
              </h1>
              <div className="flex justify-between gap-10">
                {[1, 2, 3, 4].map((item) => (
                  <ProductCard />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold text-black">
                Get Up To 70% Off
              </h1>
              <div className="flex justify-between gap-5">
                {[1, 2, 3, 4].map((item) => (
                  <DiscountCard />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
