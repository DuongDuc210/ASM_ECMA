import React from "react";
import Support from "../../../components/Support";
import Banner from "../../../components/Banner";
import AsideShop from "./components/AsideShop";
import ContentProductShop from "./components/ContentProductShop";

const ShopPage = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Main */}
      <div className="flex w-4/5 mx-auto *:font-poppins">
        {/* aside */}
        <AsideShop />
        {/* Content */}
        <section className="w-3/4 mt-7">
          <ContentProductShop />
          {/* chuyển trang */}
          <div className="flex justify-start font-medium">
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px bg-[#CA8A04] active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl">
              1
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              2
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              3
            </div>{" "}
            <div className="py-4 bg-[#A3A3A3] px-7 rounded-10px active:bg-[#CA8A04] text-white cursor-pointer hover:bg-[#CA8A04] text-xl ml-4">
              Next
            </div>
          </div>
        </section>
      </div>
      {/* Support */}
      <Support />
    </>
  );
};

export default ShopPage;
