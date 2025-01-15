import React from "react";
import Button from "./Button";

const Rooms = () => {
  return (
    <div className=" flex flex-col gap-2 drop-shadow-lg shadow-gray-100 w-full h-auto sm:h-[400px] sm:w-[355px]  bg-white">
      <div className="flex flex-col gap-2">
        <img src="/Rectangle 71.jpg" alt="" className="rounded-t-md" />

        <div className="flex flex-col p-4 gap-4">
          <h1>Standard twin ben, Multiple beds</h1>
          <div className="list-none text-gray-500 text-[14px]">
            <li>300 sq feet</li>
            <li>300 sq feet</li>

            <li>300 sq feet</li>
          </div>

          <Button
            label="Reserve Suite"
            className="w-full bg-[#2F80ED] text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
