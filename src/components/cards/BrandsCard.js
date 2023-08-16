import React from "react";

const BrandsCard = () => {
  return (
    <div className="flex border p-2 gap-2  bg-red-100/30">
      <div className="h-full w-10 border bg-white"></div>
      <div className="flex flex-col">
        <h1 className=" font-medium">Title</h1>
        <p className=" text-xs">Description</p>
      </div>
    </div>
  );
};

export default BrandsCard;
