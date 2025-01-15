import React from "react";
import Danger from "../Component/Danger";
import Button from "../Component/Button";

const CheckOut = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-0">
        <h1 className="pt-10 text-[24px] md:text-[32px] text-center md:text-left">
          Secure your reservation
        </h1>
        <div className="pt-8 md:pt-14 py-4">
          <Danger />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 py-8">
          {/* Left Section */}
          <div className="flex flex-col flex-1 gap-4">
            {/* Guest Details */}
            <div className="h-auto bg-white rounded-lg md:max-w-[1100px]">
              <h1 className="h-[60px] bg-blue-500 flex items-center p-4 text-white rounded-t-md text-[16px]">
                2 adults, 1 double bed and 1 twin bed, Non-smoking
              </h1>
              <div className="p-4 md:p-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row w-full md:max-w-[600px] gap-4">
                  <div className="flex flex-col w-full">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      id="first-name"
                      type="text"
                      className="h-[44px] w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      id="last-name"
                      type="text"
                      className="h-[44px] w-full border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:max-w-[600px]">
                  <label htmlFor="mobile-number">Mobile Number</label>
                  <input
                    id="mobile-number"
                    type="text"
                    className="h-[44px] w-full border-gray-300 border rounded-md"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input id="alerts" type="checkbox" />
                  <label htmlFor="alerts">
                    Receive text alerts about this trip.
                  </label>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="h-auto w-full bg-white rounded-lg md:max-w-[1100px]">
              <h1 className="h-[60px] bg-blue-500 text-[24px] text-white p-4 rounded-t-md">
                Payment options
              </h1>
              <div className="p-4 flex border border-gray-200">
                <ul className="flex flex-wrap gap-6">
                  <li>Debit/Credit Card</li>
                  <li>Paypal</li>
                  <li>Bank transfer</li>
                </ul>
              </div>
              <div className="p-4 flex flex-col gap-6 md:max-w-[600px]">
                <div className="flex flex-wrap gap-4 items-center">
                  <img src="/image 8.jpg" alt="Visa" />
                  <img src="/image 7 (1).jpg" alt="MasterCard" />
                  <img src="/image 10.jpg" alt="American Express" />
                  <img src="/image 6.jpg" alt="Discover" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="card-name">Name on the card</label>
                  <input
                    id="card-name"
                    type="text"
                    className="h-[44px] w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="card-number">Card Number</label>
                  <input
                    id="card-number"
                    type="text"
                    className="h-[44px] w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="expiry-date">Expiry Date</label>
                  <input
                    id="expiry-date"
                    type="text"
                    className="h-[44px] w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="h-auto flex flex-col bg-white rounded-lg pb-4 gap-4 max-w-[1100px]">
              <h1 className="h-[60px] bg-[#F2C94C] flex items-center px-6 rounded-t-md">
                Important information about your booking
              </h1>
              <div className="p-4 text-[15px]">
                <ol className="list-decimal pl-4 text-black gap-2">
                  <li>
                    This rate is non-refundable. If you change or cancel your
                    booking you will not get a refund or credit to use for a
                    future stay.
                  </li>
                  <li>Stay extensions will require a new reservation.</li>
                  <li>Front desk staff will greet guests on arrival.</li>
                  <li>
                    No refunds will be issued for late check-in or early
                    check-out.
                  </li>
                </ol>
                <p className="pt-6 text-[14px]">
                  By clicking the button below, I acknowledge that I have
                  reviewed the Privacy Statement and accept the Rules,
                  Restrictions, and Terms of Use.
                </p>
                <div className="pt-4">
                  <Button
                    label="Complete Booking"
                    className="md:p-2 p-1 bg-blue-500 text-white rounded-lg w-full md:max-w-[200px]"
                  />
                </div>
                <p className="pt-4 flex items-center gap-2">
                  <img
                    src="/lock-circle 1.jpg"
                    alt="Secure lock icon"
                    className="w-6 h-6"
                  />
                  We use secure transmission and encrypted storage to protect
                  your personal information.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="max-w-full md:max-w-[450px] flex flex-1 flex-col gap-8">
            {/* Hotel Details */}
            <div className="h-auto bg-white rounded-md flex flex-col gap-4">
              <img
                src="/Rectangle 8.jpg"
                alt="Hotel"
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="px-4 flex flex-col gap-4">
                <p>Hotel Name</p>
                <p>Rating</p>
                <div className="text-[14px]">
                  <p className="text-[#EB5757]">Non refundable</p>
                  <p>Check-in: Sunday, March 18, 2022</p>
                  <p>Check-out: Tuesday, March 20, 2022</p>
                  <p>2-night stay</p>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="h-auto bg-white rounded-md">
              <h1 className="h-[55px] bg-[#85E0AB] text-[16px] flex items-center px-4">
                Price Details
              </h1>
              <div className="p-4 flex flex-col gap-2 text-gray-600 text-sm">
                <div className="flex justify-between">
                  <p>1 room X 2 nights</p>
                  <p>$120.32</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax and service fees</p>
                  <p>$8.32</p>
                </div>
                <hr className="mt-4" />
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>$130</p>
                </div>
                <p className="mt-4 text-[#2F80ED]">
                  Use a coupon, credit, or promotional code
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="flex-1 bg-gray-500 text-white p-2 rounded-md text-center">
                    200-Voucher
                  </p>
                  <Button
                    label="Apply Coupon"
                    className="bg-[#333333] text-white p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
