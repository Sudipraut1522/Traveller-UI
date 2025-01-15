import React from "react";

const Danger = () => {
  return (
    <div>
      <div className="h-[72px] bg-[#FCEFCA] rounded-md flex items-center px-4 gap-2">
        <img src="/danger 1.jpg" alt="danger" className="h-8 w-8" />
        <p className="text-sm text-gray-700">
          Check the latest COVID-19 restrictions before you travel.
          <a href="#" className="text-blue-700">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Danger;
