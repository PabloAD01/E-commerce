import React from "react";

const Header = () => {
  return (
    <header className=" w-full  bg-white">
      <div className=" bg-DarkGreen text-white flex text-sm justify-around py-1 ">
        <div className=" w-1/3 flex items-center justify-center ">
          <ion-icon name="phone-portrait-sharp"></ion-icon>
          <p>+56987654321</p>
        </div>
        <div className="w-1/3 flex justify-around">
          <p className="w-full text-center">Get 50% Off on Selected Items</p>
          <p className="w-full text-center flex items-center justify-center">
            Shop Now
          </p>
        </div>
        <div className="w-1/3 flex justify-center gap-5">
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
  );
};

export default Header;
