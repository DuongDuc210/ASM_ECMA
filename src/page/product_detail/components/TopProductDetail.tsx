import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopProductDetail = () => {
  return (
    <section className=" flex w-full mb-16">
      {/* box ảnh */}
      <div className="flex w-full">
        {/* ảnh bé */}
        <div className="w-1/5">
          <img className="mb-4" src="../img/Group 94.png" alt="" />
          <img className="mb-4" src="../img/Group 96.png" alt="" />
          <img className="mb-4" src="../img/Group 97.png" alt="" />
          <img className="mb-4" src="../img/Group 98.png" alt="" />
        </div>
        {/* ảnh to */}
        <div className="w-4/5">
          <img className="w-[515px] h-auto " src="../img/detail.svg" alt="" />
        </div>
      </div>
      {/* box infor */}
      <div className="w-full ml-33px">
        {/* name */}
        <h3 className="text-xl mb-2 font-medium">Asgaard sofa</h3>
        {/* price */}
        <p className="text-30px font-medium text-[#9F9F9F] mb-2">25.000.000đ</p>
        {/* rating */}
        <div className="flex items-center text-[#9F9F9F ">
          <div className="flex py-5px pr-4 text-[#FFC700] border-[#A3A3A3] border-r-2 ">
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
            <FaStar className="w-[20px]" />
          </div>
          <span className="text-[#9F9F9F] pl-4">5 Customer Review</span>
        </div>
        {/* description */}
        <p className="mt-4 text-base font-medium">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className="mt-4 text-[#A3A3A3] ">
          <div className="mb-1">Size</div>
          <ul className="flex space-x-3 ">
            <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] active:bg-[#CA8A04] cursor-pointer">
              L
            </li>
            <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
              XL
            </li>
            <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
              XS
            </li>
          </ul>
        </div>
        {/* color */}
        <div className="mt-4 text-[#A3A3A3] ">
          <div className="mb-1">Color</div>
          <ul className="flex space-x-4 ">
            <li className="bg-[#816DFA] rounded-full p-4"></li>
            <li className="bg-[#000] rounded-full p-4 "></li>
            <li className="bg-[#B88E2F] rounded-full p-4"></li>
          </ul>
        </div>
        {/* add to cart */}
        <div className="flex space-x-3 mt-8">
          {/* tăng giảm số lượng */}
          <div className="flex items-center border border-[#A3A3A3] px-4 text-base font-medium rounded-5px py-10px">
            <div className="mr-9">
              <button>-</button>
            </div>
            <div className="mr-9">
              <input
                type="text" // Có thể là "text" hoặc "number"
                className="w-10 text-center outline-none"
              />
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

          {/* button */}
          <Link to="/shop/cart">
            <button className="border border-[#A3A3A3] px-60px text-base font-medium rounded-5px py-10px">
              Add to cart
            </button>
          </Link>
          <button className="border border-[#A3A3A3] px-60px text-base font-medium rounded-5px py-10px">
            + Compare
          </button>
        </div>
        {/* thông tin */}
        <div className="mt-8 border-t border-[#A3A3A3] text-[#a3a3a3] text-base">
          <p className="mt-3 text-base font-medium">SKU : SS001</p>
          <p className="mt-3 text-base font-medium">Category: Sofas</p>
          <p className="mt-3 text-base font-medium">
            Tags: Sofa, Chair, Home, Shop
          </p>
          {/* Phần chia sẻ */}
          <div className="mt-3 flex items-center space-x-4">
            <p className="text-base font-medium mb-0">Share:</p>{" "}
            {/* Xóa margin-bottom */}
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 transition-colors"
              >
                <FaInstagram size={16} />
              </a>

              {/* Twitter */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProductDetail;
