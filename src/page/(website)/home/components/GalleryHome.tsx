import React from "react";
import { Link } from "react-router-dom";

const GalleryHome = () => {
  return (
    <section>
      {/* Top */}
      <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
        <h2 className="text-40px text-[#262626] font-semibold">Gallery</h2>
        <a>
          <Link
            to="/contact"
            className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
          >
            View all gallery
          </Link>
        </a>
      </div>
      {/* Gallery product */}
      <div className="max-w-[1280px] grid grid-cols-3 gap-4 mx-auto mb-16">
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="./gallery.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
