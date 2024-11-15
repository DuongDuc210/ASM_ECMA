import axios from "axios";
import { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { MdShare } from "react-icons/md";
import { RiHeart3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

// Define the Product type
interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string;
  description: string;
}

const RelatedProductDetail = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <section className="font-poppins bg-[#F9F9F9] py-10">
      {/* Top */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 mb-8 border-b border-gray-300">
        <h2 className="text-4xl font-semibold text-[#262626]">
          Related Products
        </h2>
      </div>

      {/* Products */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="group relative rounded-lg shadow-lg bg-white overflow-hidden transition-all transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative">
              <Link to={`/shop/product_detail`}>
                <img
                  className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80"
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Add to Cart button */}
                <Link
                  to="shop/cart"
                  className="bg-[#FFFFFF] text-[#CA8A04] font-medium py-3 px-12 rounded-full shadow-md transition-all duration-300"
                >
                  Add to cart
                </Link>

                {/* Share, Switch, and Like buttons */}
                <div className="mt-6 flex items-center justify-center space-x-4 text-white">
                  <Link
                    to="#"
                    className="flex items-center text-lg hover:text-[#CA8A04] transition-colors duration-300"
                  >
                    <MdShare className="mr-2" /> Share
                  </Link>
                  <GoArrowSwitch className="text-white text-lg" />
                  <Link
                    to="#"
                    className="flex items-center text-lg hover:text-[#CA8A04] transition-colors duration-300"
                  >
                    <RiHeart3Line className="mr-2" /> Like
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="px-4 pb-4 bg-[#F5F5F5] rounded-b-lg">
              <Link to={`/shop/product_detail`}>
                <h3 className="font-semibold text-xl text-gray-800 pb-2">
                  {product.name}
                </h3>
              </Link>
              <h5 className="text-base text-[#898989] pb-2">
                {product.category}
              </h5>
              <p className="text-sm text-[#898989] pb-3">
                {product.description}
              </p>

              {/* Price */}
              <p
                className={`font-medium text-xl ${
                  index === 0
                    ? "line-through text-[#B0B0B0]"
                    : index === 1
                    ? "text-[#3A3A3A]"
                    : index === 2
                    ? "line-through text-[#B0B0B0]"
                    : index === 3
                    ? "text-[#3A3A3A]"
                    : "text-[#EF4444]"
                }`}
              >
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
        <button className="w-[245px] h-[48px]  border-2 border-[#B88E2F] bg-white text-[#B88E2F] font-medium py-2 px-8 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
          Show More
        </button>
      </div>
    </section>
  );
};

export default RelatedProductDetail;
