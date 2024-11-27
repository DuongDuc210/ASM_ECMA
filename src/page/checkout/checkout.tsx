import Support from "../../components/Support";

const CheckoutPage = () => {
  return (
    <>
      <div className="w-[1280px] mx-auto mt-16">
        <h3 className="text-40px font-semibold">Billing details</h3>
        <div className="flex mt-8 mb-16 gap-[0px]">
          {/* box 1 */}
          <div className="w-1/2 grid grid-cols-1 gap-[22px]">
            <div className="flex space-x-[31px]">
              <div>
                <label htmlFor="" className="block text-gray-700">
                  First Name
                </label>
                <input
                  className="mt-2 w-[211px] h-[75px] bg-white border border-[#A3A3A3] outline-none rounded-[10px] p-2"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  className="mt-2 w-[211px] h-[75px] bg-white border border-[#A3A3A3] outline-none rounded-[10px] p-2"
                  type="text"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Company Name (Optional)
              </label>
              <input
                className="mt-2 w-[453px] h-[75px] bg-white border border-[#A3A3A3] outline-none rounded-[10px] p-2"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Country / Region
              </label>
              <select className="block p-2 mt-2 w-[453px] h-[75px] cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]">
                <option value="" disabled selected>
                  Select a country
                </option>
                <option value="LK" selected>
                  Sri Lanka
                </option>
                <option value="VN">Viet Nam</option>
                <option value="AD">An Do</option>
                <option value="HCM">TP Ho Chi Minh</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Street address
              </label>
              <input
                className="block p-2 mt-2 w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Town / City
              </label>
              <input
                className="block p-2 mt-2 w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Province
              </label>
              <select className="block p-2 mt-2 w-[453px] h-[75px] cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]">
                <option value="" disabled selected>
                  Select a province
                </option>
                <option value="" selected>
                  Western Province
                </option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                ZIP code
              </label>
              <input
                className="block p-2 mt-2 w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Phone
              </label>
              <input
                className="block p-2 mt-2 w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="" className="block text-gray-700">
                Email address
              </label>
              <input
                className="block p-2 mt-2 w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <input
                className="block p-2 mt-[48px] w-[453px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none rounded-[10px]"
                type="text"
                placeholder="Additional information"
              />
            </div>
          </div>
          {/* box 2 */}
          <div className="w-1/2">
            <div className="grid grid-cols-2 mb-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Product</h2>
                <div className="space-x-3 mb-4">
                  <span className="text-[#A3A3A3]">Asgaard sofa</span>
                  <span>X 1</span>
                </div>
                <p className="mb-4">Subtotal</p>
                <p>Total</p>
              </div>
              <div className="text-end">
                <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
                <p className="mb-4 font-light">25.000.000đ</p>
                <p className="mb-4 font-light">25.000.000đ</p>
                <p className="text-[#B88E2F] text-xl font-bold">250.00.000đ</p>
              </div>
            </div>
            <div className="border-t border-[#a3a3a3] flex flex-col items-center">
              <div>
                <h3 className="mt-8 font-medium text-base flex items-center">
                  <p className="bg-black rounded-full p-2 mr-2"></p>
                  Direct Bank Transfer
                </h3>
                <p className="mt-3 text-[#a3a3a3] text-base">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <ul className="mt-4 text-[#a3a3a3]">
                  <li>
                    <input type="radio" name="payment" id="bank" />
                    <label className="ml-2" htmlFor="bank">
                      Direct Bank Transfer
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="payment" id="cash" />
                    <label className="ml-2" htmlFor="cash">
                      Cash On Delivery
                    </label>
                  </li>
                </ul>
                <p className="my-8 text-[#262626] text-base">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>
              </div>
              <button className="border border-[#000000] text-[#000000] py-4 px-6 w-[318px] h-[64px] rounded-[15px] hover:bg-[#000000] hover:text-white transition">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
};

export default CheckoutPage;
