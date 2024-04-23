import React from "react";
import { eventDetails } from "../utils/data";

const Body = () => {
  return (
    <div className="min-h-svh w-[1040px] mx-auto my-10">
      <h2 className="text-3xl">Events in Bangalore</h2>
      {eventDetails.map((item) => {
        return (
          <div className="flex">
            <div className=" text-white my-4 flex-1">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3 className="text-2xl">{item.event}</h3>
                <p>Hosted by {item.host}</p>
                <p>{item.date}</p>
                <p>Price From or Free {item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
