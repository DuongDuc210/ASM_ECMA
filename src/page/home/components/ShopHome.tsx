const GalleryHome = () => {
  return (
    <section>
      {/* Top */}
      <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
        <h2 className="text-4xl text-[#262626] font-semibold py-5">SHOP</h2>
      </div>
      {/* Gallery product */}
      <div className="max-w-[1280px] grid grid-cols-2 gap-2 mx-auto mb-16">
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full object-cover"
            src="/img/Rectangle 63.png"
            alt="Image 1"
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full object-cover"
            src="/img/Rectangle 64.png"
            alt="Image 2"
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full object-cover"
            src="/img/Rectangle 65.png"
            alt="Image 3"
          />
        </div>
        <div className="overflow-hidden cursor-pointer">
          <img
            className="transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-full object-cover"
            src="/img/Rectangle 66.png"
            alt="Image 4"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
