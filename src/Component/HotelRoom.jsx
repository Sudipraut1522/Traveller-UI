import React from "react";

const HotelRoom = ({ hotel }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 flex flex-col md:flex-row gap-4 items-center">
      <img
        src={hotel?.image[0]}
        alt="hotel"
        className="w-full md:flex-1 h-56  md:h-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-500"
      />
      <div className="flex flex-1  justify-between gap-6">
        <div className="flex flex-col gap-3 text-sm text-gray-700">
          <h2 className="text-xl font-semibold text-black">{hotel?.name}</h2>
          <div className="flex items-center gap-2">
            <img src={hotel?.ratingImage} alt="rating" className="w-14 h-6" />
            <span>{hotel?.rating}</span>
          </div>
          <p className="text-gray-600">
            Live a little and celebrate with champagne
          </p>
          <p className="text-gray-600 line-clamp-3">
            {hotel?.shortDescription}
          </p>
          <button className="w-full max-w-[180px] h-12 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
            See availability
          </button>
        </div>

        <div className="flex flex-col items-end gap-6">
          <p className="bg-red-500 text-white text-xs rounded-md px-4 py-1 text-center">
            Book now and receive {hotel?.discount}% off
          </p>
          <div className="text-right text-sm">
            <p className="bg-green-600 text-white rounded-md px-3 py-1 inline-block">
              {hotel?.discount}% off
            </p>
            <p>1 room, 2 days</p>
            <p className="font-bold text-lg">${hotel?.price}</p>
            <p className="text-gray-500">Including tax</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
