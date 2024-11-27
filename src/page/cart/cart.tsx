import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Support from "../../components/Support";

const CartPage = () => {
  return (
    <div>
      <div className="w-[1280px] mx-auto flex mt-12 mb-16 space-x-8">
        {/* phần 1 */}
        <div className="w-3/4">
          <table className="w-full text-[#262626] text-base font-medium">
            <thead className="bg-[#F9F1E7] text-center block p-4 mb-4">
              <tr className="flex justify-between">
                <th className="w-2/5 text-center font-medium">Product</th>
                <th className="w-1/5 text-center font-medium">Price</th>
                <th className="w-1/5 text-center font-medium">Quantity</th>
                <th className="w-1/5 text-center font-medium">Subtotal</th>
                <th className="w-1/5 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-base font-medium text-[#A3A3A3]">
              <tr className="flex items-center text-center justify-between p-4">
                <td className="w-2/6 flex items-center">
                  <img src="/public/img/Group 146.png" alt="" />
                  <span className="ml-4">Asgaard sofa</span>
                </td>
                <td className="w-1/6 text-center">25.000.000đ</td>
                <td className="w-1/6 text-center">
                  <input
                    type="text"
                    className="w-[32px] h-[32px] rounded-[5px] border border-[#9F9F9F] text-center text-black"
                    defaultValue="1"
                  />
                </td>
                <td className="w-1/6 text-center text-black">25.000.000đ</td>
                <td className="w-1/6 text-center flex items-center justify-end">
                  <AiFillDelete className="text-2xl text-[#B88E2F]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* phần 2 */}
        <div className="w-[393px] h-[390px] px-[75px] p-8 bg-[#F9F1E7]">
          <h3 className="text-[32px] font-semibold text-center font-poppins">
            Cart Totals
          </h3>
          <div className="pt-4 mt-[40px] text-base space-y-4 font-medium">
            <div className="flex justify-between">
              <h4>Subtotal</h4>
              <span className="text-[#9F9F9F]">25.000.000đ</span>
            </div>
            <div className="flex justify-between">
              <h4>Total</h4>
              <span className="text-[#B88E2F] font-medium text-xl">
                25.000.000đ
              </span>
            </div>
          </div>
          <Link to="checkout">
            <button className="w-[220px] h-[58.95px] mt-[50px] mb-[80.05px] border border-[#000000] text-[#000000] py-2 px-6 text-base font-medium opacity-70 rounded-[15px]">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <Support />
    </div>
  );
};

export default CartPage;
