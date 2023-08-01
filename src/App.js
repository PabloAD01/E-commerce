import "./App.css";
import React, { useState } from "react";
import LikeButton from "./buttons/LikeButton";
import CategoriesCard from "./components/cards/CategoriesCard";
import ProductCard from "./components/cards/ProductCard";

function App() {
  return (
    <div className="h-screen flex justify-center bg-white border-red-600 border-2 text-black overflow-y-scroll ">
      <div className=" w-10/12 h-max border border-black">
        <header className=" w-full  bg-white">
          <div className=" bg-DarkGreen text-white h-max flex justify-around border border-red-600">
            <div className=" w-1/3 flex items-center justify-center border border-yellow-300">
              <ion-icon name="phone-portrait-sharp"></ion-icon>
              <p>+56987654321</p>
            </div>
            <div className="w-1/3 flex justify-around border border-yellow-300">
              <p className="w-full text-center border border-yellow-300">
                Get 50% Off on Selected Items
              </p>
              <p className="w-full text-center  border border-yellow-300">
                Shop Now
              </p>
            </div>
            <div className="w-1/3 flex justify-center gap-5 border border-yellow-300">
              <div className="flex items-center">
                <p>Eng</p>
                <ion-icon name="chevron-down-sharp"></ion-icon>
              </div>
              <div className="flex items-center">
                <p>Location</p>
                <ion-icon name="chevron-down-sharp"></ion-icon>
              </div>
            </div>
          </div>
          <navbar className="flex justify-between px-5 py-5 w-full">
            <div className="flex gap-5">
              <button className="flex items-center">
                <ion-icon name="search-sharp"></ion-icon>
                ShopCart
              </button>
              <button>Categories</button>
              <button>Deals</button>
              <button>What's New</button>
              <button>Delivery</button>

              <LikeButton />
            </div>
            <div className="w-1/3">
              <input
                placeholder="Search Products"
                type="text"
                className="w-full text-center bg-gray-100 border border-black"
              />
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <ion-icon name="person"></ion-icon>
                <p>Account</p>
              </div>
              <div className="flex items-center gap-2">
                <ion-icon name="cart"></ion-icon>
                <p>Cart</p>
              </div>
            </div>
          </navbar>
        </header>
        <div className="flex flex-col gap-3 w-full justify-center items-center flex-1 border border-black ">
          <div className="w-full">
            <img
              className="flex w-full"
              src={require("./assets/images/hero_section.png")}
            />
          </div>
          <div className="w-full px-5 flex flex-col gap-5">
            <h1 className=" text-2xl font-bold text-black">
              Shop Out Top Categories
            </h1>
            <div className="flex w-full justify-between border gap-3 border-red-500">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <CategoriesCard />
              ))}
            </div>
            <div className="flex justify-between gap-5">
              {[1, 2, 3, 4].map((item) => (
                <ProductCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
