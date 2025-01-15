import React, { useState } from "react";

const PopularsFilter = ({ setFilteredHotels }) => {
  const [selectPopularActivity, setSelectPopularActivity] = useState("");

  const popularActivity = [
    {
      label: "Free cancellation",
      value: "Free cancellation",
      count: 200,
    },
    {
      label: "Spa",
      value: "Spa",
      count: 100,
    },
    {
      label: "Hot tub/ jacuzzi",
      value: "Hot tub/ jacuzzi",
      count: 15,
    },
    {
      label: "Book without credit card",
      value: "Book without credit card",
      count: 12,
    },
    {
      label: "No prepayment",
      value: "No prepayment",
      count: 230,
    },
  ];

  const handlePopularActivity = (value) => {
    setFilteredHotels(value);
    setSelectPopularActivity(value);
  };
  return (
    <div className="hidden md:block">
      <div className="h-[295px]  rounded-[6px] text-gray-600  border border-gray-200 bg-white">
        <div className="bg-[#F2F2F2] rounded-[4px] ">
          <h2 className="h-[55px]  p-4 text-[16px]">Popular Filter</h2>
        </div>

        <form action="">
          <div className="flex flex-col gap-3 p-4">
            {popularActivity?.map((activity, index) => (
              <div key={index} className="flex w-full gap-2">
                <input
                  type="radio"
                  id={activity.value}
                  name="activity"
                  value={activity.value}
                  checked={selectPopularActivity === activity?.value}
                  onChange={() => handlePopularActivity(activity.value)}
                />

                <div className="flex justify-between text-[14px] w-[223px]">
                  <label htmlFor={activity?.label}>{activity?.label}</label>
                  <label htmlFor={activity?.count}>{activity?.count}</label>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopularsFilter;
