import React from "react";

const MidleProductDetail = () => {
  return (
    <section className="mb-16">
      <div className="flex space-x-16 border-b border-[#A3A3A3] pb-4 mb-8 text-xl font-semibold text-[#A3A3A3]">
        <h3 className="text-[#000]">Description</h3>
        <h3>Additional Information</h3>
        <h3>Reviews [5]</h3>
      </div>
      <div className="text-base font-medium text-[#A3A3A3] mb-8">
        <p className="mb-2">
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
      <div className="flex justify-between space-x-8">
        <img className="w-full" src=".././gallery.svg" alt="" />
        <img className="w-full" src=".././gallery.svg" alt="" />
      </div>
    </section>
  );
};

export default MidleProductDetail;
