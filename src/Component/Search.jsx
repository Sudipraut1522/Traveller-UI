import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { searchSchema } from "../Validation/SearchSchema";

const Search = ({ width }) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
    mode: "onBlur",
    defaultValues: {
      location: "",
      checkInDate: "",
      checkOutDate: "",
      guestCount: "",
    },
  });

  const handleSearch = (data) => {
    reset();
  };

  return (
    <div className="mt-4 " style={{ width }}>
      <form
        className="px-6 rounded-md flex flex-col py-6 lg:flex-row w-full max-w-[1200px] mx-auto gap-4 items-center bg-white shadow-lg"
        onSubmit={handleSubmit(handleSearch)}
      >
        <div className="w-full lg:w-[300px]">
          <input
            required
            {...register("location")}
            type="text"
            id="location"
            className="w-full px-4 text-xs  py-3 border rounded-md focus:outline-none focus:ring-2 "
            placeholder="Where are You going?"
            aria-describedby="locationError"
          />
          {errors?.location && (
            <span id="locationError" className="text-red-600 text-sm">
              {errors.location.message}
            </span>
          )}
        </div>

        <div className="w-full lg:w-[170px]">
          <input
            required
            {...register("checkInDate")}
            type="date"
            id="checkInDate"
            className="w-full px-4 py-3 text-xs border rounded-md focus:outline-none focus:ring-2 "
            aria-label="Select check-in date"
            aria-describedby="checkInDateError"
          />
          {errors?.checkInDate && (
            <span id="checkInDateError" className="text-red-600 text-sm">
              {errors.checkInDate.message}
            </span>
          )}
        </div>

        <div className="w-full lg:w-[170px]">
          <input
            required
            {...register("checkOutDate")}
            type="date"
            id="checkOutDate"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2  text-xs"
            aria-label="Select check-out date"
            aria-describedby="checkOutDateError"
          />
          {errors?.checkOutDate && (
            <span id="checkOutDateError" className="text-red-600 text-sm">
              {errors.checkOutDate.message}
            </span>
          )}
        </div>

        <div className="w-full lg:w-[210px]">
          <input
            required
            {...register("guestCount")}
            type="number"
            id="guestCount"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 text-xs "
            min="1"
            step="1"
            placeholder="Number of Guests"
            aria-label="Number of guests"
            aria-describedby="guestCountError"
          />
          {errors?.guestCount && (
            <span id="guestCountError" className="text-red-600 text-sm">
              {errors.guestCount.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full lg:w-[190px]  bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
