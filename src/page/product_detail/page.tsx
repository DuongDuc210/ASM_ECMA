import TopProductDetail from "./components/TopProductDetail";
import MidleProductDetail from "./components/MidleProductDetail";
import RelatedProductDetail from "./components/RelatedProductDetail";

const Product_Detail = () => {
  return (
    <div className="w-[1280px] mx-auto font-poppins ">
      {/* Phần top */}
      <TopProductDetail />
      {/* Phần Middle */}
      <MidleProductDetail />
      {/* Phần End */}
      {/* Related Products */}
      <RelatedProductDetail />
    </div>
  );
};

export default Product_Detail;
