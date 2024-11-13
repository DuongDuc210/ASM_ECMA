import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="w-[1280px] mx-auto flex mt-12 mb-16">
      {/* phần 1 */}
      <div className="w-3/4">
        <table className="w-full text-[#262626] text-base font-medium">
          <thead className="bg-[#f5f5f5] text-center block p-4 mb-4">
            <tr className="flex justify-between">
              <th className="w-2/6 text-left">Product</th>
              <th className="w-1/6 text-center">Price</th>
              <th className="w-1/6 text-center">Quantity</th>
              <th className="w-1/6 text-center">Subtotal</th>
              <th className="w-1/6"></th>
            </tr>
          </thead>
          <tbody className="text-base font-medium text-[#A3A3A3]">
            <tr className="flex items-center text-center justify-between p-4 border-b">
              <td className="w-2/6 flex items-center">
                <img src=".././product_cart.svg" alt="" />
                <span className="ml-4">Asgaard sofa</span>
              </td>
              <td className="w-1/6 text-center">25.000.000đ</td>
              <td className="w-1/6 text-center">1</td>
              <td className="w-1/6 text-center">25.000.000đ</td>
              <td className="w-1/6 text-center flex items-center justify-end">
                <AiFillDelete className="text-2xl text-[#EF4444]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* phần 2 */}
      <div className="w-2/5 ml-8 p-8 bg-[#F5F5F5]">
        <h3 className="text-2xl font-semibold">Cart Total</h3>
        <div className="pt-4 border-t border-[#a3a3a3] mt-4 text-base space-y-4 font-medium">
          <div className="flex justify-between">
            <h4>Subtotal</h4>
            <span>25.000.000đ</span>
          </div>
          <div className="flex justify-between">
            <h4>Total</h4>
            <span className="text-[#EF4444] font-bold text-xl">
              25.000.000đ
            </span>
          </div>
        </div>
        <Link to="checkout">
          <button className="w-full mt-8 border border-[#CA8A04] text-[#CA8A04] py-2 px-131.5px text-base font-semibold hover:bg-[#CA8A04] hover:text-white opacity-70">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
