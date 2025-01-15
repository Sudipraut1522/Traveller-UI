import React, { useState } from "react";
import { dreamVacation, popularHotal } from "../data/dreamvacation";
import Footer from "../Component/Footer";
import Search from "../Component/Search";

import Slideshow from "../Component/SlideShow";

const Home = () => {
  const sliderImages = [
    { src: "/main.jpeg", alt: "Traveler Image 1" },
    { src: "/main.jpeg", alt: "Traveler Image 2" },
    { src: "/main.jpeg", alt: "Traveler Image 3" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className=" w-full sm:max-w-[1600px] mx-auto p-4">
        <div className="relative h-full sm:h-[500px] sm:mt-0 rounded-lg">
          <Slideshow slideImages={sliderImages} />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-bold">
              Enjoy Your Dream Vacation
            </h1>
            <p className="text-white mt-4 text-sm sm:text-base lg:text-lg md:max-w-[600px]">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information, and inspiration from us.
            </p>
          </div>

          <div className=" hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:max-w-[1200px] h-[64px] text-black z-10 py-2 px-4">
            <Search />
          </div>
        </div>

        <div className="sm:pt-20 pt-10">
          <h2 className="text-xl sm:text-2xl font-semibold ">
            Enjoy Your Dream Vacation
          </h2>
          <p className=" mt-4 text-sm sm:text-base  sm:mx-auto">
            Plan and book our perfect trip with expert advice, travel tips,
            destination information, and inspiration from us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {dreamVacation?.map((data, index) => (
              <div key={index} className="relative overflow-hidden rounded-md">
                <img
                  src={data.image}
                  alt={data.countryName}
                  className="w-full h-[200px] sm:h-[300px] object-cover rounded-md hover:opacity-70"
                />
                <div className="mt-4">
                  <p className="text-base font-medium">{data?.countryName}</p>
                  <p className="text-sm text-gray-500">
                    {data?.proporties} <span>properties</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl font-semibold ">
            Get Inspiration For Your Next Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[16, 17, 8].map((num, index) => (
              <div key={index} className="relative overflow-hidden rounded-md">
                <img
                  src={`/Rectangle ${num}.jpg`}
                  alt=""
                  className="w-full h-[200px] sm:h-[280px] object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-4">
                  <h3 className="text-white text-sm sm:text-base font-semibold">
                    Sydney’s 10 most fashionable 5-star hotels
                  </h3>
                  <p className="text-white text-xs sm:text-sm mt-2">
                    Browse the fastest-growing tourism sector in the heart of
                    Australia’s tourism capital ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Hotels Section */}
        <div className="mt-14">
          <h2 className="text-xl sm:text-2xl font-semibold ">Popular Hotels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {popularHotal?.map((data, index) => (
              <div key={index} className="relative overflow-hidden rounded-md">
                <img
                  src={data.image}
                  alt={data.countryName}
                  className="w-full h-[200px] sm:h-[300px] object-cover rounded-md hover:opacity-70"
                />
                <div className="mt-4">
                  <p className="text-base font-medium">{data?.countryName}</p>
                  <p className="text-sm text-gray-500">
                    {data?.proporties} <span>properties</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
