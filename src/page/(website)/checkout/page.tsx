import React from "react";

const CheckoutPage = () => {
  return (
    <div className="w-[1280px] mx-auto  mt-16">
      <h3 className="text-40px font-semibold">Billing details</h3>
      <div className=" flex mt-8 mb-16">
        {/* box 1 */}
        <div className="w-1/2 grid grid-cols-1 gap-3 mr-8">
          <div className="w-full">
            <label htmlFor=""> First Name</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Company Name (Optional)</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Country / Region</label>
            <select className="p-2 mt-2 w-full cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3]  border outline-none">
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
            <label htmlFor="">Street address</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Town / City</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Province</label>
            <select className="p-2 mt-2 w-full cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3]  border outline-none">
              <option value="" disabled selected>
                Select a province
              </option>
              <option value="" selected>
                Western Province
              </option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="">ZIP code</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Phone</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="">Email address</label>
            <input
              className="p-2 mt-2 w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
        </div>
        {/* box 2 */}
        <div className="w-1/2">
          {/* box top */}
          <div className=" grid grid-cols-2 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Product</h2>
              <div className="space-x-3 mb-4">
                <span className="text-[#A3A3A3]">Asgaard sofa</span>
                <span>X1</span>
              </div>
              <p className="mb-4">Subtotal</p>
              <p>Total</p>
            </div>
            <div className="text-end">
              <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
              <p className="mb-4 font-medium">25.000.000đ</p>
              <p className="mb-4 font-medium">25.000.000đ</p>
              <p className="text-[#B88E2F] text-xl font-bold">25.000.000đ</p>
            </div>
            {/* Middle */}
          </div>
          {/* box end */}
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
                  <input type="checkbox" name="" id="" />
                  <label className="ml-2" htmlFor="">
                    ATM Bank Transfer
                  </label>
                </li>
                <li>
                  <input className="rounded-sm" type="checkbox" name="" id="" />
                  <label className="ml-2" htmlFor="">
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
            <button className=" border border-[#CA8A04] text-[#CA8A04] py-2 px-32 hover:bg-[#CA8A04] hover:text-white opacity-70">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
