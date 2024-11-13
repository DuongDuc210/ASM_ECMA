const Banner = () => {
  return (
    <div className="relative mb-16">
      <img src="banner.png" alt="" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-black text-4xl font-medium">Trang chủ</h1>
        <p className="text-black text-2xl mt-20">Home</p>
      </div>
    </div>
  );
};

export default Banner;
