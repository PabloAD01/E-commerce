import React from "react";
import AddCartButton from "../../buttons/AddCartButton";
import LikeButton from "../../buttons/LikeButton";

const ProductCard = () => {
  return (
    <div className="flex flex-col border w-full">
      <div className="flex relative">
        <img
          className="border w-full"
          src={require("../../assets/images/product.png")}
        />
        <div className="flex absolute right-5">
          <LikeButton />
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-between">
          <h1>Product Name</h1>
          <h1>Price</h1>
        </div>
        <p>Description</p>
        <p>Rating</p>
        <AddCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
