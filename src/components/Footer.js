import React from "react";
import { BiBriefcase } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex border-b border-t p-4 gap-2">
        <div className="flex flex-col w-1/3 gap-2">
          <img width={150} src={require("../assets/images/logo.png")} />
          <p>[Descripción]</p>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Accepted Payments</h1>
            <div className="grid grid-cols-4 w-max gap-4">
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
              <p>Tarjeta</p>
            </div>
          </div>
        </div>
        <div className="flex w-2/3 justify-between text-sm">
          <div className="grid">
            <h1 className="text-base">Department</h1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
          </div>
          <div className="grid">
            <h1 className="text-base">Department</h1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
          </div>
          <div className="grid">
            <h1 className="text-base">Department</h1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
          </div>
          <div className="grid">
            <h1 className="text-base">Department</h1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
            <p1>Fashion</p1>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <BiBriefcase />
            <p>Become Seller</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiBriefcase />
            <p>Become Seller</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiBriefcase />
            <p>Become Seller</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button>Terms of Use</button>
          <button>Privacy Policy</button>
        </div>
        <p>All Rights reserved by</p>
      </div>
    </div>
  );
};

export default Footer;
