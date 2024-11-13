
const Footer = () => {
  return (
    <footer className="w-full bg-[#262626] text-white text-sm font-poppins">
      <div className="w-[1280px] mx-auto grid grid-cols-4 py-10 min-h-[300px]">
        <div className="flex flex-col pr-2 ">
          <div className="mb-4">
            <img src="/logo_2.svg" alt="Logo" />
          </div>
          <p className="text-sm">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-lg font-semibold">Sitemap</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <p className="mb-2 text-lg font-semibold">Help</p>
          <ul className="space-y-2 ">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-lg font-semibold">Location</p>
          <ul className="space-y-2">
            <li>support@euphoria.in</li>
            <li>Ahmedabad Main Road</li>
            <li>Udaipur, India - 313002</li>
          </ul>
        </div>
      </div>
      <div className="w-[1280px] mx-auto border-t border-white">
        <p className="text-center py-8">
          Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
