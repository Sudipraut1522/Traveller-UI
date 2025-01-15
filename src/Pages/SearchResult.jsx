import React, { useEffect, useState } from "react";
import HotelRoom from "../Component/HotelRoom";
import FilterByBudget from "../Component/FilterByBudget";
import PopularsFilter from "../Component/PopularsFilter";
import FilterByActivities from "../Component/FilterByActivities";
import { hotel as hotelData } from "../data/dreamvacation";
import Button from "../Component/Button";
import { rating } from "../data/dreamvacation";
import { buttonLabels } from "../data/button";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";

const SearchResult = () => {
  const [searchHotel, setSearchHotel] = useState("");
  const [filteredHotels, setFilteredHotels] = useState(hotelData);
  const [loadMore, setLoadMore] = useState(5);
  const [dropDown, setDropDown] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    selectedRating: null,
    selectByBudget: null,
    selectByActivity: null,
    selectByPopularActivity: null,
    selectedType: null,
  });

  const handleSearchChange = (e) => {
    setSearchHotel(e.target.value);
  };

  const handleDropDown = () => setDropDown(!dropDown);
  const handleMoreRoom = () => setLoadMore(loadMore + 2);
  const room = filteredHotels.slice(0, loadMore);

  useEffect(() => {
    let filtered = hotelData;

    if (searchHotel) {
      filtered = filtered.filter((hotel) =>
        hotel?.name?.toLowerCase().includes(searchHotel.toLowerCase())
      );
    }

    if (
      appliedFilters?.selectedRating ||
      appliedFilters?.selectByBudget ||
      appliedFilters?.selectByActivity ||
      appliedFilters?.selectByPopularActivity ||
      appliedFilters?.selectedType
    ) {
      filtered = filtered.filter((el) => {
        const matchesRating = appliedFilters?.selectedRating
          ? el.rating >= appliedFilters?.selectedRating
          : true;
        const matchesBudget = appliedFilters?.selectByBudget
          ? el.price >= appliedFilters?.selectByBudget
          : true;

        const matchActivity = appliedFilters?.selectByActivity
          ? el.activities?.includes(appliedFilters?.selectByActivity)
          : true;

        const matchPopularActivity = appliedFilters?.selectByPopularActivity
          ? el.popularActivity?.includes(
              appliedFilters?.selectByPopularActivity
            )
          : true;

        const matchHotelType = appliedFilters?.selectedType
          ? el.type
              ?.toLowerCase()
              .includes(appliedFilters?.selectedType.toLowerCase())
          : true;

        return (
          matchesRating &&
          matchesBudget &&
          matchActivity &&
          matchPopularActivity &&
          matchHotelType
        );
      });
    }

    return setFilteredHotels(filtered);
  }, [appliedFilters, searchHotel]);

  return (
    <div className="mt-8">
      <div className="md:max-w-[1600px] mx-auto w-full">
        <div className="flex justify-between gap-10">
          {/* Sidebar Filters */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-8">
              <div className="bg-[#F2F2F2] p-4 flex flex-col gap-4 w-[295px] h-[119px] rounded-[6px]">
                <h1 className="text-gray-800 text-[16px]">
                  Search by property name
                </h1>
                <input
                  value={searchHotel}
                  onChange={handleSearchChange}
                  type="search"
                  placeholder="eg: BeachWestPalm"
                  className="rounded-[4px] h-[44px] px-2 text-xs"
                />
              </div>

              <h2 className="text-[18px] text-gray-800 mx-4">Filter by</h2>

              {/* Filter Components */}
              <div className="h-auto rounded-[6px] text-gray-600 border border-gray-200 bg-white">
                <div className="bg-[#F2F2F2] rounded-[4px]">
                  <h2 className="h-[55px] p-4 text-[16px]">
                    Your Budget Per Day
                  </h2>
                </div>
                <FilterByBudget
                  setFilteredHotels={(data) =>
                    setAppliedFilters((prev) => ({
                      ...prev,
                      selectByBudget: data,
                    }))
                  }
                />
              </div>

              {/* Rating Filter */}
              <div className="h-[170px] bg-white flex flex-col gap-4 border border-gray-200 rounded-sm">
                <div className="bg-[#F2F2F2] h-[55px]">
                  <h4 className="p-4">Rating</h4>
                </div>
                <div className="p-4 text-gray-600">
                  <p className="text-[14px]">Show only ratings more than</p>
                  <div className="border border-gray-200 h-[46px]">
                    <div className="flex items-center justify-between">
                      {rating.map((ratingItem, index) => (
                        <div
                          onClick={() =>
                            setAppliedFilters((prev) => ({
                              ...prev,
                              selectedRating: ratingItem.rating,
                            }))
                          }
                          key={index}
                          className="flex justify-center items-center cursor-pointer w-[50px] h-[46px] border border-gray-200"
                        >
                          <p>{ratingItem.rating}</p>
                          <img src={ratingItem.image} alt="rating" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <PopularsFilter
                setFilteredHotels={(data) =>
                  setAppliedFilters((prev) => ({
                    ...prev,
                    selectByPopularActivity: data,
                  }))
                }
              />
              <FilterByActivities
                setFilteredHotels={(data) =>
                  setAppliedFilters((prev) => ({
                    ...prev,
                    selectByActivity: data,
                  }))
                }
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header and Filters */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[24px] font-semibold w-full px-4 md:px-0">
                Melbourne: {filteredHotels.length} search results found
              </h1>
              <div className="flex w-full items-center justify-between">
                {/* Filter Buttons */}
                <div className="md:pt-14 px-4 pt-0 w-full rounded-md flex-wrap text-gray-400 overflow-hidden flex h-auto ">
                  {buttonLabels?.map((item, index) => (
                    <Button
                      key={index}
                      onClick={() =>
                        setAppliedFilters((prev) => ({
                          ...prev,
                          selectedType: item?.labels,
                        }))
                      }
                      className="flex-grow md:flex-initial px-4 py-2 text-sm text-center bg-white hover:bg-blue-100 transition rounded-md"
                      label={item.labels}
                    />
                  ))}
                </div>

                {/* Sort Dropdown */}
                <div
                  className="relative mt-12 hidden md:block"
                  onClick={handleDropDown}
                  aria-expanded={dropDown}
                  aria-label="Sort by options"
                >
                  <div className="flex items-center justify-between h-12 w-48 border border-gray-300 rounded-lg px-4 cursor-pointer">
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-500">Sort by</p>
                      <span className="text-sm text-gray-800">Recommended</span>
                    </div>
                    <img
                      src="/arrow-down 1.jpg"
                      alt="Sort"
                      className={`transform transition-transform ${
                        dropDown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 transition-all ${
                      dropDown ? "block" : "hidden"
                    }`}
                  >
                    <ul className="flex flex-col py-2">
                      {[
                        "Recommended",
                        "Price: Low to High",
                        "Price: High to Low",
                      ].map((option, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Filter Button */}
              <div className="block md:hidden px-4 flex justify-between w-full items-center h-[80px]">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                >
                  <FiFilter className="text-lg" />
                  <span>Filter</span>
                </button>
                <div
                  className="relative  md:block"
                  onClick={handleDropDown}
                  aria-expanded={dropDown}
                  aria-label="Sort by options"
                >
                  <div className="flex items-center justify-between h-auto w-auto border border-gray-300 rounded-lg px-4 cursor-pointer">
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-500">Sort by</p>
                      <span className="text-sm text-gray-800">Recommended</span>
                    </div>
                    <img
                      src="/arrow-down 1.jpg"
                      alt="Sort"
                      className={`transform transition-transform ${
                        dropDown ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 transition-all ${
                      dropDown ? "block" : "hidden"
                    }`}
                  >
                    <ul className="flex flex-col py-2">
                      {[
                        "Recommended",
                        "Price: Low to High",
                        "Price: High to Low",
                      ].map((option, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel List */}
            <div className="mt-6 gap-4">
              {filteredHotels.length > 0 ? (
                room.map((hotel, index) => (
                  <Link key={index} to={`/productdetails/${hotel.id}`}>
                    <HotelRoom hotel={hotel} />
                  </Link>
                ))
              ) : (
                <p>No hotels found.</p>
              )}
            </div>

            {/* Load More Button */}
            {filteredHotels.length > 5 && (
              <div className="flex justify-center mt-4 ">
                <Button
                  label="Load more results"
                  onClick={handleMoreRoom}
                  className="bg-[#2F80ED] text-white p-2 rounded-lg shadow-lg hover:shadow-blue-600"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-scroll"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-auto bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="mb-4 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              <div className="">
                <div className="flex flex-col gap-8">
                  <div className="bg-[#F2F2F2] p-4 flex flex-col gap-4 w-full h-auto rounded-[6px]">
                    <h1 className="text-gray-800 text-[16px]">
                      Search by property name
                    </h1>
                    <input
                      value={searchHotel}
                      onChange={handleSearchChange}
                      type="search"
                      placeholder="eg: BeachWestPalm"
                      className="rounded-[4px] h-[44px] px-2 text-xs"
                    />
                  </div>

                  <h2 className="text-[18px] text-gray-800 mx-4">Filter by</h2>

                  {/* Filter Components */}
                  <div className="h-auto rounded-[6px] text-gray-600 border border-gray-200 bg-white">
                    <div className="bg-[#F2F2F2] rounded-[4px]">
                      <h2 className="h-[55px] p-4 text-[14px]">
                        Your Budget Per Day
                      </h2>
                    </div>
                    <FilterByBudget
                      setFilteredHotels={(data) =>
                        setAppliedFilters((prev) => ({
                          ...prev,
                          selectByBudget: data,
                        }))
                      }
                    />
                  </div>

                  {/* Rating Filter */}
                  <div className="h-auto bg-white flex flex-col gap-4 border border-gray-200 rounded-sm">
                    <div className="bg-[#F2F2F2] h-[55px]">
                      <h4 className="p-2">Rating</h4>
                    </div>
                    <div className="p-4 text-gray-600">
                      <p className="text-[14px]">Show only ratings more than</p>
                      <div className="border border-gray-200 h-[46px]">
                        <div className="flex items-center justify-between">
                          {rating.map((ratingItem, index) => (
                            <div
                              onClick={() =>
                                setAppliedFilters((prev) => ({
                                  ...prev,
                                  selectedRating: ratingItem.rating,
                                }))
                              }
                              key={index}
                              className="flex justify-center items-center cursor-pointer w-[50px] h-[46px] border border-gray-200"
                            >
                              <p>{ratingItem.rating}</p>
                              <img src={ratingItem.image} alt="rating" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <PopularsFilter
                    setFilteredHotels={(data) =>
                      setAppliedFilters((prev) => ({
                        ...prev,
                        selectByPopularActivity: data,
                      }))
                    }
                  />
                  <FilterByActivities
                    setFilteredHotels={(data) =>
                      setAppliedFilters((prev) => ({
                        ...prev,
                        selectByActivity: data,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
