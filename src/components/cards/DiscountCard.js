import React from "react";

const DiscountCard = () => {
  return (
    <div className="flex flex-col border">
      <div className="flex flex-col justify-center p-8 gap-2 bg-amber-100/80 h-1/2">
        <h1 className=" text-3xl font-semibold">Save</h1>
        <h1 className=" text-5xl font-semibold text-yellow-600">$100</h1>
        <p className="font-semibold">Updates on safe Shopping in our Stores</p>
      </div>
      <img
        className="h-1/2"
        src={require("../../assets/images/discount.png")}
      />
    </div>
  );
};

export default DiscountCard;
