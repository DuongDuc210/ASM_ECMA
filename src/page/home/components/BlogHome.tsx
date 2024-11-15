import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsHome = () => {
  return (
    <section>
      {/* Top Section */}
      <div className="max-w-[1280px] h-auto flex justify-between items-center px-4 mb-8 mx-auto">
        <h1 className="text-4xl text-[#262626] font-semibold">BLOG</h1>
      </div>

      {/* News Products Section */}
      <div className="w-full max-w-[1280px] grid grid-cols-1 gap-6 mx-auto mb-16">
        {/* Product 1 */}
        <div className="flex flex-col sm:flex-row items-center max-w-full h-auto bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="w-full sm:w-[50%]">
            <div className="overflow-hidden cursor-pointer w-full h-[250px]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                src="../img/Rectangle 67.png"
                alt="News Image 1"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:w-[50%] justify-between p-6 w-full bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
            <p className="text-2xl font-extrabold text-[#262626] mt-2 mb-4 leading-tight">
              WHY IS A TV CONSOLE A MUST IN EVERY HOUSE
            </p>
            <span className="text-lg text-gray-700 leading-relaxed mb-6">
              People do a lot of research to make sure they purchase the ideal
              television. And like the rest of us, you want to keep that
              gorgeous flat-screen in your living or bedroom on a table or
              stand.
            </span>
            <div className="flex items-center justify-end font-semibold text-[#000000] hover:text-[#000000] transition-colors duration-300">
              <Link to="/" className="text-lg hover:underline">
                About
              </Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col sm:flex-row items-center max-w-full h-auto bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="w-full sm:w-[50%]">
            <div className="overflow-hidden cursor-pointer w-full h-[250px]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                src="../img/Rectangle 68.png"
                alt="News Image 2"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:w-[50%] justify-between p-6 w-full bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
            <p className="text-2xl font-extrabold text-[#262626] mt-2 mb-4 leading-tight">
              A BEDROOM MUST HAVE SOME THING LIKE THIS
            </p>
            <span className="text-lg text-gray-700 leading-relaxed mb-6">
              Your level of comfort when getting into and out of bed can be
              greatly influenced by the bed frame you choose. It may
              significantly affect how you want your bedroom to feel and look.
            </span>
            <div className="flex items-center justify-end font-semibold text-[#000000] hover:text-[#000000] transition-colors duration-300">
              <Link to="/" className="text-lg hover:underline">
                About
              </Link>
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col sm:flex-row items-center max-w-full h-auto bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
          <div className="w-full sm:w-[50%]">
            <div className="overflow-hidden cursor-pointer w-full h-[250px]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                src="../img/Rectangle 69.png"
                alt="News Image 3"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col sm:w-[50%] justify-between p-6 w-full bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
            <p className="text-2xl font-extrabold text-[#262626] mt-2 mb-4 leading-tight">
              WHY IS A TV CONSOLE A MUST IN EVERY HOUSE
            </p>
            <span className="text-lg text-gray-700 leading-relaxed mb-6">
              People do a lot of research to make sure they purchase the ideal
              television. And like the rest of us, you want to keep that
              gorgeous flat-screen in your living or bedroom on a table or
              stand.
            </span>
            <div className="flex items-center justify-end font-semibold text-[#000000] hover:text-[#000000] transition-colors duration-300">
              <Link to="/" className="text-lg hover:underline">
                About
              </Link>
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
