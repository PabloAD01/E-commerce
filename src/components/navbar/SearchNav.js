import React from "react";

const SearchNav = () => {
  return (
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
  );
};

export default SearchNav;
