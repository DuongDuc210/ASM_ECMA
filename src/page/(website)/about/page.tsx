import React from "react";
import Banner from "../../../components/Banner";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      {/* phần đầu */}
      <div className="w-[1280px] flex mx-auto mb-16 font-inter space-x-3">
        <div className="w-1/3 h-auto flex flex-col items-center text-center ">
          <div className="w-1/4">
            <img src=".././about.svg" alt="" />
          </div>
          <h2 className="uppercase text-32px mt-5 mb-3">OUR mission</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="w-1/3 h-auto flex flex-col items-center text-center ">
          <div className="w-1/4">
            <img src=".././about.svg" alt="" />
          </div>
          <h2 className="uppercase text-32px mt-5 mb-3">OUR mission</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="w-1/3 h-auto flex flex-col items-center text-center ">
          <div className="w-1/4">
            <img src=".././about.svg" alt="" />
          </div>
          <h2 className="uppercase text-32px mt-5 mb-3">OUR mission</h2>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      {/* phần giữa */}
      <div className="w-[1280px] flex mx-auto mb-16 ">
        <div className="w-1/2">
          <img className="w-full object-cover" src=".././about2.svg" alt="" />
        </div>
        <div className="w-1/2 pl-8 pt-9 font-inter">
          <h2 className="uppercase mb-8 text-32px font-bold">
            about Furniro company
          </h2>
          <p className="text-lg mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      {/* phần cuối */}
      <div>
        {" "}
        <h2 className=" max-w-[844px] mb-8 mx-auto text-center font-bold text-32px">
          WE CREATE NATURAL WOOD FURNITURE AS WELL AS HIGH-QUALITY
        </h2>
      </div>
      <div className="w-[1280px] mx-auto font-inter mb-16 ">
        <div className="flex space-x-8">
          <div className="w-[296px] relative">
            <img
              className="w-full"
              src="https://www.noithatkaya.com/wp-content/uploads/2023/09/FB_IMG_1699962445625.jpg"
              alt="Flooring"
            />
            <h3 className="uppercase absolute bottom-5 left-5 text-base font-semibold text-white">
              flooring
            </h3>
          </div>
          <div className="w-[296px] relative">
            <img
              className="w-full"
              src="https://www.noithatkaya.com/wp-content/uploads/2023/09/FB_IMG_1699962445625.jpg"
              alt="Flooring"
            />
            <h3 className="uppercase absolute bottom-5 left-5 text-base font-semibold text-white">
              flooring
            </h3>
          </div>
          <div className="w-[296px] relative">
            <img
              className="w-full"
              src="https://www.noithatkaya.com/wp-content/uploads/2023/09/FB_IMG_1699962445625.jpg"
              alt="Flooring"
            />
            <h3 className="uppercase absolute bottom-5 left-5 text-base font-semibold text-white">
              flooring
            </h3>
          </div>
          <div className="w-[296px] relative">
            <img
              className="w-full"
              src="https://www.noithatkaya.com/wp-content/uploads/2023/09/FB_IMG_1699962445625.jpg"
              alt="Flooring"
            />
            <h3 className="uppercase absolute bottom-5 left-5 text-base font-semibold text-white">
              flooring
            </h3>
          </div>
        </div>
        <div className="flex w-[1280px]  font-inter"></div>
      </div>
    </div>
  );
};

export default AboutPage;
