import { GoArrowSwitch } from "react-icons/go";
import { MdShare } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NewProductHome = () => {
  return (
    <section className="font-poppins">
      {/* Top */}
      <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto border-b border-black">
        <h2 className="text-40px text-[#262626] font-medium pb-2">New</h2>
      </div>
      {/* Products */}
      <div className="w-[1280px] flex justify-between mx-auto mb-16">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="ml-1 h-full relative group">
            {/* Image */}
            <div className="overflow-hidden relative rounded-lg shadow-lg">
              <Link to="shop/product_detail">
                <img
                  className="h-full w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110 rounded-lg"
                  src="./image 2.svg"
                  alt=""
                />
              </Link>
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Add to Cart button */}
                <Link
                  to="shop/cart"
                  className="bg-white text-[#CA8A04] font-medium py-2 px-10 border-2 border-[#CA8A04] hover:bg-[#fdf6e3] hover:border-[#a37802] hover:text-[#a37802] transition-colors duration-300 shadow-md"
                >
                  Add to cart
                </Link>

                {/* Share, Switch, and Like buttons are now horizontally aligned */}
                <div className="mt-4 flex items-center space-x-4">
                  {" "}
                  {/* Sử dụng flex và space-x-4 để căn chỉnh */}
                  <Link
                    to="#"
                    className="flex items-center text-[#FFFFFF] font-medium transition-colors duration-300"
                  >
                    <MdShare className="mr-1" /> Share
                  </Link>
                  <GoArrowSwitch className="text-white" />{" "}
                  {/* Thêm icon Switch */}
                  <Link
                    to="#"
                    className="flex items-center text-[#FFFFFF] font-medium transition-colors duration-300"
                  >
                    <RiHeart3Line className="mr-0" /> Like
                  </Link>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
              <Link to="shop/product_detail">
                <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                Stylish cafe chair
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProductHome;
