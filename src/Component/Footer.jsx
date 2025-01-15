import React from "react";

const Footer = ({ className }) => {
  return (
    <div className={`${className} bg-gray-100`}>
      <div
        className={`w-full sm:max-w-[1600px] mx-auto mt-20 px-4 sm:px-8 ${className}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-500 text-xs py-10">
          {/* Logo and Tagline */}
          <div>
            <img
              src="/Frame 15.jpg"
              alt="Frame"
              className="h-8 hidden sm:block mb-4"
            />
            <p className="text-xs text-gray-400">
              Your next goto companion for travel
            </p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black py-2">Company</h2>
            <div>About</div>
            <div>Jobs</div>
            <div>News</div>
            <div>Advertisement</div>
            <div>Contact Us</div>
          </div>

          {/* Explore Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black py-2">Explore</h2>
            <div>Destinations</div>
            <div>Guides</div>
            <div>Travel Tips</div>
            <div>Blogs</div>
            <div>Gallery</div>
          </div>

          {/* Terms and Policy Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black py-2">Terms and Policy</h2>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Cookies</div>
            <div>Security</div>
            <div>FAQs</div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm text-black py-2">Help</h2>
            <div>Support</div>
            <div>Contact</div>
            <div>Feedback</div>
            <div>Live Chat</div>
            <div>Help Center</div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-200 w-full h-[40px] flex justify-center sm:justify-end px-4 sm:px-20">
        <footer className="text-gray-400 text-xs flex items-center">
          © My Dream Place 2025
        </footer>
      </div>
    </div>
  );
};

export default Footer;
