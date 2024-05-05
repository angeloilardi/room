"use client";
import { useState } from "react";
import IconArrow from "./IconArrow";

// const slideContent = [
//   {
//     heading: "Discover innovative ways to decorate",

//     content: `We provide unmatched quality, comfort, and style for property owners across the country. 
//   Our experts combine form and function in bringing your vision to life. Create a room in your 
//   own style with our collection and make your property a reflection of you and what you love.`,
//   },
//   {
//     heading: "We are available all across the globe",

//     content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
//   Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
//   store locator. Any questions? Don't hesitate to contact us today.`,
//   },
//   {
//     heading: "Manufactured with the best materials",

//     content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
//   to ensure that every product is made as perfect and as consistent as possible. With three decades of 
//   experience in this industry, we understand what customers want for their home and office.`,
//   },
// ];

export default function Carousel({
  slides,
  slideContent,
}: {
  slides: string[];
  slideContent: { heading: string; content: string }[];
}) {
  const [current, setCurrent] = useState(0);
  const handlePrevious = () => {
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
  };

  const handleNext = () => {
    current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:max-h-[540px]">
        <div className="overflow-hidden relative">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${100 * current}%)`,
            }}
          >
            {slides.map((slide: string) => {
              return (
                <img key={slide} src={slide} alt="" className="min-w-full " />
              );
            })}
          </div>
          {/* Slider buttons */}
          <div className="absolute bottom-0 right-0 flex lg:hidden">
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handlePrevious}
            >
              <img src="./images/icon-angle-left.svg" alt="" />
            </button>
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handleNext}
            >
              <img src="./images/icon-angle-right.svg" alt="" />
            </button>
          </div>
        </div>

        {/* Slide content */}
        <section className="bg-white p-8 lg:w-[600px] shrink-0 relative lg:px-24 lg:pt-28">
          <h1 className="text-4xl font-[500] text-black">
            {slideContent[current].heading}
          </h1>
          <p className="text-dark-gray font-[500] mt-5">
            {slideContent[current].content}
          </p>
          <button className="tracking-[.85rem] py-6 inline-block text-black">
            SHOP NOW
            <IconArrow />
          </button>
          {/* Desktop buttons */}
          <div className="absolute bottom-0 left-0 hidde lg:flex">
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handlePrevious}
            >
              <img src="./images/icon-angle-left.svg" alt="" />
            </button>
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handleNext}
            >
              <img src="./images/icon-angle-right.svg" alt="" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
