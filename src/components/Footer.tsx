const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 text-sm font-poppins shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-4 py-10 min-h-[300px] px-6">
        <div className="flex flex-col pr-4">
          <div className="mb-4">
            <img src="/logo_2.svg" alt="Logo" className="h-12" />
          </div>
          <p className="text-sm text-gray-600">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-lg font-semibold text-gray-900">Links</p>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Home
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Shop
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              About
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-lg font-semibold text-gray-900">Help</p>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Payment Options
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Returns
            </li>
            <li className="text-gray-600 hover:text-gray-800 transition-colors">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col">
          <p className="mb-2 text-lg font-semibold text-gray-900">Subscribe</p>

          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto border-t border-gray-200">
        <p className="text-center py-8 text-gray-500">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
