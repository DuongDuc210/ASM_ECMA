const Banner = () => {
  return (
    <div className="relative mb-16 w-full">
      {/* Hình ảnh banner, sử dụng object-cover để ảnh luôn đầy đủ màn hình */}
      <img
        src="/public/img/banner.png"
        alt="Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-black text-4xl md:text-5xl font-medium">
          Trang chủ
        </h1>
        <p className="text-black text-2xl md:text-3xl mt-20">Home</p>
      </div>
    </div>
  );
};

export default Banner;
