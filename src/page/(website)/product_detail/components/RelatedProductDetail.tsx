import React from "react";
import { Link } from "react-router-dom";

const RelatedProductDetail = () => {
  return (
    <section className="font-poppins">
      {/* Top */}
      <div className="max-w-[1280px] h-auto text-center px-1 mb-4 mx-auto">
        <h2 className="text-40px  text-[#262626] font-semibold">
          Related Products
        </h2>
      </div>
      {/* Products */}
      <div className="w-[1280px] flex justify-between mx-auto mb-16">
        <div className="ml-1 h-full ">
          {/* image */}
          <Link to="/shop/product_detail">
            <div className="overflow-hidden">
              <img
                className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                src=".././image 2.svg"
                alt=""
              />
            </div>
          </Link>
          {/* product-info */}
          <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
            <Link to="/shop/product_detail">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
            </Link>
            <h5 className="text-base text-[#898989] pb-2">
              Stylish cafe chair
            </h5>
            <p className="text-[#EF4444] font-semibold text-xl pb-3">
              2.500.000đ
            </p>
            <Link to="/shop/cart">
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-1 h-full ">
          {/* image */}
          <Link to="/shop/product_detail">
            <div className="overflow-hidden">
              <img
                className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                src=".././image 2.svg"
                alt=""
              />
            </div>
          </Link>
          {/* product-info */}
          <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
            <Link to="/shop/product_detail">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
            </Link>
            <h5 className="text-base text-[#898989] pb-2">
              Stylish cafe chair
            </h5>
            <p className="text-[#EF4444] font-semibold text-xl pb-3">
              2.500.000đ
            </p>
            <Link to="/shop/cart">
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-1 h-full ">
          {/* image */}
          <Link to="/shop/product_detail">
            <div className="overflow-hidden">
              <img
                className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                src=".././image 2.svg"
                alt=""
              />
            </div>
          </Link>
          {/* product-info */}
          <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
            <Link to="/shop/product_detail">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
            </Link>
            <h5 className="text-base text-[#898989] pb-2">
              Stylish cafe chair
            </h5>
            <p className="text-[#EF4444] font-semibold text-xl pb-3">
              2.500.000đ
            </p>
            <Link to="/shop/cart">
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <div className="ml-1 h-full ">
          {/* image */}
          <Link to="/shop/product_detail">
            <div className="overflow-hidden">
              <img
                className="h-full w-full transition-transform duration-500 ease-in-out transform hover:scale-110"
                src=".././image 2.svg"
                alt=""
              />
            </div>
          </Link>
          {/* product-info */}
          <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
            <Link to="/shop/product_detail">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
            </Link>
            <h5 className="text-base text-[#898989] pb-2">
              Stylish cafe chair
            </h5>
            <p className="text-[#EF4444] font-semibold text-xl pb-3">
              2.500.000đ
            </p>
            <Link to="/shop/cart">
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProductDetail;
