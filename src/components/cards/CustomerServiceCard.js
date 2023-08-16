import React from "react";

const CustomerServiceCard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center p-8 gap-4 bg-gray-100 h-2/5">
        <h1 className=" text-3xl font-semibold">Online Payment Proces</h1>
        <p className="font-semibold">Updates on safe Shopping in our Stores</p>
      </div>

      <img
        className="h-3/5"
        src={require("../../assets/images/customer-service.png")}
      />
    </div>
  );
};

export default CustomerServiceCard;
