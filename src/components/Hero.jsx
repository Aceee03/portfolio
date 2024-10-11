import React from "react";
import WadieImage from "../assets/wadie-no-bg.png";
import patternRings from "../assets/pattern-rings.svg";

const Hero = () => {
  return (
    <>
      <main className="flex justify-center p-5 primary mb-5 lg:mx-52">
        <img
          src={patternRings}
          className="h-28 lg:h-36 absolute -left-64 lg:-left-32 lg:top-48"
        />
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <div className="bg-gradient-to-t from-[#242424] lg:w-96 w-48 place-self-center">
            <img src={WadieImage} alt="wadie" className="" />
          </div>
          <div className="flex flex-col lg: items-center text-center lg:my-32 lg:basis-1/2">
            <h1 className="text-3xl lg:text-7xl text-white font-semibold lg:place-self-start">
              Hello!
            </h1>
            <h1 className="whitespace-nowrap text-3xl lg:text-7xl mt-1 text-white font-semibold lg:place-self-start">
              I'm{" "}
              <span className="underline underline-offset-4 decoration-4 decoration-[#3cd092]">
                Wadie Boumediene
              </span>
              .
            </h1>
            <p className="lg:text-xl mt-4 lg:text-start">
              I build fully functioning websites and web apps using a variety of
              technologies. Currently navigating the world of Data Science as an
              engineering student at ESTIN in Bejaia, Algeria.
            </p>
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              className="lg:place-self-start"
              download="Wadie_Boumediene_CV.pdf"
            >
              <button className="mt-8 hover:text-[#242424] hover:bg-green hover:duration-200 duration-200 text-white px-6 py-2 border border-[#3cd092]">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
