import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoMdPaperPlane } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { MdContacts } from "react-icons/md";
import { PiShareNetwork } from "react-icons/pi";
import { Link } from "react-router-dom";
import Banner from "../../../components/Banner";

const ContactPage = () => {
  return (
    <div className="font-poppins">
      {/* banner */}
      <Banner />
      <div className=" flex flex-col">
        <section className="w-[1280px] flex items-center  mx-auto mb-18px">
          <div className="flex mr-8">
            <div className="border-2 h-2/3  border-[#CA8A04] text-[#CA8A04] p-3 mr-6">
              <FiMapPin className=" w-[40px] h-[40px]" />
            </div>
            <div className="mt-18px w-[317px]">
              <h3 className="uppercase font-bold text-2xl">address</h3>
              <p className="text-[#71717A] mt-5">
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </p>
            </div>
          </div>
          <div className="flex mr-8">
            <div className="border-2 h-2/3 border-[#CA8A04] text-[#CA8A04] p-3 mr-6">
              <MdContacts className=" w-[40px] h-[40px]" />
            </div>
            <div className="mt-18px w-[317px]">
              <h3 className="uppercase font-bold text-2xl">contact details</h3>
              <div className=" mt-5">
                <p className="text-[#71717A] text-lg">info@furniro.com</p>
                <p className="text-[#71717A] font-bold text-2xl">02056278686</p>
              </div>
            </div>
          </div>
          <div className="flex  mr-8">
            <div className="border-2 h-2/3 border-[#CA8A04] text-[#CA8A04] p-3 mr-6">
              <PiShareNetwork className=" w-[40px] h-[40px]" />
            </div>
            <div className="mt-18px w-[317px] flex flex-col justify-center">
              <h3 className="uppercase font-bold text-2xl">social networks</h3>
              <div className="flex mt-5 justify-between w-[280px] text-[#71717A]">
                <FaFacebookSquare className="w-10 h-10" />
                <LuInstagram className="w-10 h-10" />
                <AiFillTikTok className="w-10 h-10" />
                <FaTwitterSquare className="w-10 h-10" />
                <FaYoutubeSquare className="w-10 h-10" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full h-[500px] mt-16 items-center bg-[#f1f1f1]">
          {/* image */}
          <div className=" w-1/2 h-[518px]">
            <img
              src="./contact.svg"
              alt=""
              className="h-full w-auto object-contain"
            />
          </div>
          {/* info */}
          <div className=" w-1/2 h-full flex flex-col flex-1 pl-8 py-73px font-inter">
            <p className="uppercase text-xl font-semibold mb-4">contact</p>
            <h2 className="uppercase text-40px font-bold">
              connect with us now
            </h2>
            {/* input */}
            <div className="mr-20 grid grid-cols-2 my-8 ">
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 mr-8 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-[#CA8A04] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-[#CA8A04] outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-b-2 mr-8 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-[#CA8A04] outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-[#CA8A04] outline-none"
              />
              <input
                type="text"
                placeholder="Message"
                className="border-b-2 col-span-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-[#CA8A04] outline-none"
              />
            </div>

            <Link to="/contact">
              <button className="flex items-center py-3 px-6 bg-[#CA8A04] text-white hover:bg-[#BF7C04] transition duration-300">
                <IoMdPaperPlane />
                <span className="ml-2">Send Information</span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
