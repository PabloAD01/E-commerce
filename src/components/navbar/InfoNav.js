import React from "react";

const InfoNav = () => {
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
    </header>
  );
};

export default InfoNav;
