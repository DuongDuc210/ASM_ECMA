import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsHome = () => {
  return (
    <section>
      {/* Top */}
      <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
        <h2 className="text-40px text-[#262626] font-semibold">News</h2>
        <a>
          <Link
            to="/contact"
            className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
          >
            View all news
          </Link>
        </a>
      </div>
      {/* News product */}
      <div className="w-[1280px] flex justify-between mx-auto mb-16">
        <div className="ml-1 max-h-[340px] max-w-[300px]">
          {/* image */}
          <div className="overflow-hidden cursor-pointer">
            <img
              className="h-[200px] w-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "
              src="./image 2.svg"
              alt=""
            />
          </div>
          {/* news-info */}
          <div>
            <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
              <MdOutlineCalendarMonth />
              <span className="text-12px pl-1">March 23, 2022</span>
            </div>
            <h3 className="font-semibold text-xl pt-1 pb-3">
              A bedroom must have something like this
            </h3>
            <div className="flex items-center font-semibold text-base text-[#EF4444]">
              <Link to="/">Xem chi tiết</Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
        <div className="ml-1 max-h-[340px] max-w-[300px]">
          {/* image */}
          <div className="overflow-hidden cursor-pointer">
            <img
              className="h-[200px] w-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "
              src="./image 2.svg"
              alt=""
            />
          </div>
          {/* news-info */}
          <div>
            <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
              <MdOutlineCalendarMonth />
              <span className="text-12px pl-1">March 23, 2022</span>
            </div>
            <h3 className="font-semibold text-xl pt-1 pb-3">
              A bedroom must have something like this
            </h3>
            <div className="flex items-center font-semibold text-base text-[#EF4444]">
              <Link to="/">Xem chi tiết</Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
        <div className="ml-1 max-h-[340px] max-w-[300px]">
          {/* image */}
          <div className="overflow-hidden cursor-pointer">
            <img
              className="h-[200px] w-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "
              src="./image 2.svg"
              alt=""
            />
          </div>
          {/* news-info */}
          <div>
            <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
              <MdOutlineCalendarMonth />
              <span className="text-12px pl-1">March 23, 2022</span>
            </div>
            <h3 className="font-semibold text-xl pt-1 pb-3">
              A bedroom must have something like this
            </h3>
            <div className="flex items-center font-semibold text-base text-[#EF4444]">
              <Link to="/">Xem chi tiết</Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
        <div className="ml-1 max-h-[340px] max-w-[300px]">
          {/* image */}
          <div className="overflow-hidden cursor-pointer">
            <img
              className="h-[200px] w-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "
              src="./image 2.svg"
              alt=""
            />
          </div>
          {/* news-info */}
          <div>
            <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
              <MdOutlineCalendarMonth />
              <span className="text-12px pl-1">March 23, 2022</span>
            </div>
            <h3 className="font-semibold text-xl pt-1 pb-3">
              A bedroom must have something like this
            </h3>
            <div className="flex items-center font-semibold text-base text-[#EF4444]">
              <Link to="/">Xem chi tiết</Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
