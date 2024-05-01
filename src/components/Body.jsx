import React from "react";
import { eventDetails } from "../utils/data";

const Body = () => {
  return (
    <div className="min-h-svh max-w-[1040px]  mx-auto my-10 px-4">
      <h2 className="text-3xl">Events in Bangalore</h2>
      <div className="flex flex-col md:flex-row my-3 gap-8">
        {eventDetails.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row md:flex-col gap-4 my-3"
            >
              <div className="overflow-hidden pb-2 hover:opacity-90">
                <img src={item.img} alt="" className="rounded-2xl" />
              </div>
              <div>
                <h3 className="text-2xl">{item.event}</h3>
                <p>Hosted by {item.host}</p>
                <p>{item.date}</p>
                <p>Price From or Free {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
