import React from "react";

const Header = () => {
  return (
    <div className="flex min-h-16 justify-between items-center px-4 py-4 text-txColor ">
      <h1 className="text-3xl cursor-pointer">AKM</h1>
      <div className="space-x-4">
        <button className="border-borderColor border-2 px-4 py-1 rounded-lg cursor-pointer">
          Log in
        </button>
        <button className="border-borderColor border-2 px-4 py-1 rounded-lg cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
