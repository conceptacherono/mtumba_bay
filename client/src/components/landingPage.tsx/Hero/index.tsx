import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-4 items-center w-full">
      <h1 className="text-[56px] font-semibold">
        Better clothing for the planet
      </h1>
      <p className="text-gray-600 font-normal">
        Create screens directly in Method or add your images from Sketch or
        Figma. You can even sync designs from your cloud storage!
      </p>

      <button className="group relative mt-16 px-12 py-4  overflow-hidden bg-white text-lg border border-black">
        <div className="absolute inset-0 w-1 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">
          Shop All
        </span>
      </button>
    </section>
  );
};

export default Hero;
