import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotel as hotelData } from "../data/dreamvacation";
import { CiLocationOn } from "react-icons/ci";
import Rooms from "../Component/Rooms";
import Footer from "../Component/Footer";
import Danger from "../Component/Danger";

const ProductDetails = () => {
  const { id } = useParams();
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredData = hotelData.filter(
      (hotel) => hotel.id.toString() === id.toString()
    );
    setFilterData(filteredData);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center py-8 text-lg">Loading...</div>;
  }

  if (!filterData.length) {
    return <div className="text-center py-8 text-lg">Hotel not found.</div>;
  }

  const hotel = filterData[0];

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <img
                src={hotel.image[0]}
                alt={hotel.name}
                className="w-full md:h-[500px] rounded-lg object-cover shadow-lg"
              />
            </div>

            <div className="grid grid-rows-2 gap-4 hidden sm:block">
              {hotel.image.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Additional view of ${hotel.name}`}
                  className="w-full h-[240px] object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={hotel.ratingImage}
                alt={`Rating for ${hotel.name}`}
                className="w-[70px] h-[20px]"
              />
              <span className="text-gray-600">{hotel.rating}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <CiLocationOn size={20} />
              <span>{hotel.location}</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-600">{hotel.description}</p>
              <hr className="my-6" />
              <h4 className="font-semibold mb-4">Top Facilities</h4>
              <ul className="list-disc list-inside text-gray-600">
                {hotel.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div>
              <img
                src="/Rectangle 65.jpg"
                alt="Explore the area"
                className="w-full h-[210px] rounded-lg object-cover shadow-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Explore the Area</h2>
            <div>
              <img
                src="/Frame 52.jpg"
                alt="Nearby places"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>

          <div className=" py-8 ">
            <Danger />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  ">
            <div className="bg-blue-600 relative flex items-center justify-center w-full sm:h-[300px] rounded-xl">
              <div className="flex  items-center p-4 ">
                <div className="text-white">
                  <img
                    src="/Frame_15-removebg-preview.png"
                    alt=""
                    className="h-[40px] w-[200px]"
                  />
                  <p className="text-[26px]">20% off Use Promotional Coupon</p>
                </div>

                <img
                  src="/Frame-removebg-preview.png"
                  alt=""
                  className="sm:h-[300px] sm:w-[180px]"
                />
              </div>
            </div>
            <Rooms />
            <Rooms />
            <Rooms />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
