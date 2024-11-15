import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="font-poppins ">
        <div className="max-w-[1280px] mx-auto my-4">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div>
              <Link to="/">
                <img src="/logo.svg" alt="" />
              </Link>
            </div>
            <nav>
              <ul className="flex justify-center space-x-[65px] text-xl font-medium">
                <li>
                  <Link to="/" className="hover:text-[#CA8A04]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-[#CA8A04]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#CA8A04]">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#CA8A04]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-end space-x-4 text-2xl">
              <Link to="">
                <img src="/user!.png" alt="User" className="w-6 h-6" />
              </Link>
              <Link to="/search">
                <AiOutlineSearch />
              </Link>
              <Link to="/wishlist">
                <AiOutlineHeart />
              </Link>
              <Link to="/wishlist">
                <IoCartOutline />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
