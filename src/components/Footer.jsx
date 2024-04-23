import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-start space-x-60 items-start text-txColor w-[1040px] m-auto py-10">
      <div className="space-y-2">
        <p className="text-white">Your Account</p>
        <p>Sign up</p>
        <p>Log in</p>
        <p>Help</p>
      </div>
      <div>
        <p className="text-white">Discover</p>
        <p>Topics</p>
        <p>Online Events</p>
      </div>
      <div>
        <p className="text-white">Workshop</p>
        <p>About</p>
        <p>Blog</p>
        <p>Careers</p>
      </div>
    </div>
  );
};

export default Footer;
