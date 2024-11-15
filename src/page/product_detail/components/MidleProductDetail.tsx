const MidleProductDetail = () => {
  return (
    <section className="mb-16 px-6 lg:px-12">
      <div className="mb-8">
        {/* Đường viền */}
        <div className="border-b border-gray-300 mb-6"></div>

        {/* Nội dung các thẻ h3 */}
        <div className="flex justify-center space-x-12 text-lg lg:text-xl font-semibold text-gray-500">
          <h3 className="text-black cursor-pointer hover:text-gray-800 transition-colors">
            Description
          </h3>
          <h3 className="cursor-pointer hover:text-gray-800 transition-colors">
            Additional Information
          </h3>
          <h3 className="cursor-pointer hover:text-gray-800 transition-colors">
            Reviews [5]
          </h3>
        </div>
      </div>
      <div className="text-base lg:text-lg font-medium text-gray-600 mb-12 leading-relaxed">
        <p className="mb-4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-8">
        <img
          className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
          src="../img/Group 106.png"
          alt="Group 106"
        />
        <img
          className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
          src="../img/Group 107.png"
          alt="Group 107"
        />
      </div>
    </section>
  );
};

export default MidleProductDetail;
