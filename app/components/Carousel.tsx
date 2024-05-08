"use client";
import { useState } from "react";
import IconArrow from "./IconArrow";
import angleLeftIcon from "./../../public/images/icon-angle-left.svg";
import angleRightIcon from "./../../public/images/icon-angle-right.svg";
import Image from "next/image";

interface srcSet {
    desktop: string;
    mobile: string
}
export default function Carousel({
  slides,
  slideContent,
}: {
  slides: srcSet[];
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
      <div className="flex flex-col lg:flex-row lg:max-h-[66.66vh] relative">
        <div className="overflow-hidden relative min-h-max">
          <div
            className={`flex transition ease-out duration-40`}
            style={{
              transform: `translateX(-${100 * current}%)`,
            }}
          >
            {slides.map((slide: srcSet, index) => {
              return (
                <>
                  <img
                    key={index}
                    src={slide.mobile}
                    alt=""
                    className="min-w-full md:hidden"
                  />
                  <img
                    key={index}
                    src={slide.desktop}
                    alt=""
                    className="min-w-full hidden md:block aspect-[3/2]"
                  />
                </>
              );
            })}
          </div>
          {/* Slider buttons */}
          <div className="absolute bottom-0 right-0 flex lg:hidden">
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handlePrevious}
            >
              <Image src={angleLeftIcon} alt="" />
            </button>
            <button
              className="bg-black w-14 h-14 flex items-center justify-center"
              onClick={handleNext}
            >
              <Image src={angleRightIcon} alt="" />
            </button>
          </div>
        </div>

        {/* Slide content */}
        <section className="bg-white p-8 relative lg:px-8 xl:pt-28 lg:w-[41.66%] shrink-0 xl:px-[100px]">
          <h1 className="text-4xl font-[500] text-black">
            {slideContent[current].heading}
          </h1>
          <p className="text-dark-gray mt-5 text-base tracking-tight">
            {slideContent[current].content}
          </p>
          <button className="tracking-[.85rem] py-6 inline-block text-black">
            SHOP NOW
            <IconArrow />
          </button>
          {/* Desktop buttons */}
          <div className="absolute bottom-0 left-0 hidden lg:flex">
            <button
              className="bg-black size-14 flex items-center justify-center"
              onClick={handlePrevious}
            >
              <Image src={angleLeftIcon} alt="" />
            </button>
            <button
              className="bg-black size-14 flex items-center justify-center"
              onClick={handleNext}
            >
              <Image src={angleRightIcon} alt="" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
