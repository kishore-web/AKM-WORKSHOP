import React from "react";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" max-w-[1040px] border-4 m-auto py-4 overflow-hidden px-4">
      <div className="flex flex-col  sm:flex-row justify-between gap-4 border-b-2 border-b-borderColor my-2 py-4 ">
        <div className="space-y-1 cursor-pointer">
          <p>Your Account</p>
          <p>Sign up</p>
          <p>Log in</p>
          <p>Help</p>
        </div>
        <div className="space-y-1 cursor-pointer">
          <p>Discover</p>
          <p>Topics</p>
          <p>Online Events</p>
        </div>
        <div className="space-y-1 cursor-pointer">
          <p>Workshop</p>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div>
        <p>Follow us</p>
        <div className="flex gap-4 mt-2 cursor-pointer">
          <FaLinkedin size={24} />
          <FaTwitterSquare size={24} />
        </div>
      </div>
      <div className="text-center text-txGray pt-4">
        <p>Copyright Ⓒ 2024 MoonShot. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
