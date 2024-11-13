import React from "react";
import { Link } from "react-router-dom";

const AsideShop = () => {
  return (
    <aside className="w-1/4">
      <h3 className="text-xl font-semibold text-[#262626] mb-4">Categories</h3>
      <ul className="font-medium">
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
          <Link to="">Cafe Chair</Link>
        </li>
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
          <Link to="">Sofa</Link>
        </li>
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
          <Link to="">Lamp</Link>
        </li>
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] hover:text-[#CA8A04] cursor-pointer">
          <Link to="">Carpet</Link>
        </li>
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] cursor-pointer">
          <Link to="">Cabinet</Link>
        </li>
        <li className="mb-2 text-base text-[#737373] active:text-[#CA8A04] cursor-pointer">
          <Link to="">Tea table</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideShop;
