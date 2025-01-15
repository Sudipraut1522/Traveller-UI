import React, { useEffect, useState } from "react";

const FilterByActivities = ({ setFilteredHotels }) => {
  const [selectActivity, setSelectActivity] = useState("");

  const activities = [
    { label: "Fishing", value: "Fishing", count: 200 },
    { label: "Hiking", value: "Hiking", count: 100 },
    { label: "Beach", value: "Beach", count: 15 },
    { label: "Cycling", value: "Cycling", count: 12 },
    { label: "Sauna", value: "Sauna", count: 230 },
    { label: "Night Lights", value: "NightLights", count: 12 },
  ];
  const handleActivity = (value) => {
    setSelectActivity(value);
    setFilteredHotels(value);
  };

  // useEffect(() => {
  //   if (selectActivity) {
  //     const filteredHotels = hotels.filter((hotel) =>
  //       hotel.activities.toLowerCase().includes(selectActivity.toLowerCase())
  //     );
  //     setFilteredHotels(filteredHotels);
  //   } else {
  //     setFilteredHotels(hotels);
  //   }
  // }, [selectActivity, hotels, setFilteredHotels]);

  return (
    <div className="">
      <div className="h-[293px] rounded-[6px] text-gray-600 border border-gray-200 bg-white">
        <div className="bg-[#F2F2F2] rounded-[4px]">
          <h2 className="h-[55px] p-4 text-[16px]">Activities</h2>
        </div>
        <form>
          <div className="flex flex-col gap-3 p-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex w-full gap-2">
                <input
                  type="radio"
                  id={activity.value}
                  name="activity"
                  value={activity.value}
                  checked={selectActivity === activity.value}
                  onChange={() => handleActivity(activity.value)}
                />
                <div className="flex justify-between text-[14px] w-[223px]">
                  <label htmlFor={activity.value}>{activity.label}</label>
                  <label>{activity.count}</label>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterByActivities;
