import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [email, setEmail] = useState("");

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  useEffect(() => {
    const storeEmail = localStorage.getItem("userEmail");
    if (storeEmail) {
      setEmail(storeEmail);
    }
  }, [email, setEmail]);

  return (
    <div className="flex h-[70px] sm:h-[68px] items-center sticky top-0 z-20 bg-white px-6 sm:px-0 shadow shadow-gray-200 ">
      <div className="flex w-[1600px] mx-auto justify-between items-center">
        <Link to="/">
          <div>
            <img src="/Frame 15.jpg" alt="" />
          </div>
        </Link>
        <div className="flex hidden md:block">
          <ul className="flex gap-[48px] text-[16px]">
            <Link to="/">
              <ol>Home</ol>
            </Link>
            <ol>Discovery</ol>
            <ol>Activity</ol>
            <ol>About</ol>
            <ol>Contact</ol>
          </ul>
        </div>

        {email ? (
          <div className="flex gap-[10px] items-center">
            <img
              src="/notification 1.jpg"
              alt="notification icone"
              className="md:h-[24px] md:w-[24px] h-[24px] w-[18px]"
            />
            <div className="relative z-10" onClick={handleDropDown}>
              <img
                src="/Ellipse 2.jpg"
                alt=""
                className="md:h-[44px] md:w-[44px] w-[30px] h-[30px]"
              />

              <div
                className={`absolute left-0 right-40 mt-2 w-[150px] rounded-lg shadow-lg bg-gray-100 border border-gray-200 transition-all hidden  ${
                  dropDown ? "block" : "hidden"
                }`}
              >
                <ul className=" items-center py-2 flex flex-col">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout{" "}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-[10px] text-[15px]">
            <Link to="/register">
              <button className="rounded-md  border-blue-500 border text-blue-500 p-2">
                Register
              </button>
            </Link>
            <Link to="/signin">
              <button className=" rounded-md border-blue-500 border-1 p-2 bg-blue-500 text-white">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
