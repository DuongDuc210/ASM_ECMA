import Banner from "../../components/Banner";
import Support from "../../components/Support";
import GalleryHome from "./components/ShopHome";
import NewProductHome from "./components/NewProductHome";
import NewsHome from "./components/BlogHome";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* New Products */}
      <NewProductHome />
      {/* Gallery */}
      <GalleryHome />
      {/* News */}
      <NewsHome />
      {/* phần cuối */}
      <Support />
    </div>
  );
};

export default HomePage;
