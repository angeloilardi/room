"use client";
import { useState } from "react";

export default function Carousel( {slides}:{slides:string[]} ) {
  const [current, setCurrent] = useState(0);
    const handlePrevious = () => {
      current === 0 ? setCurrent(slides.length - 1) :
    setCurrent(current - 1);
  };

    const handleNext = () => {
      current === slides.length - 1 ? setCurrent(0) :
    setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
              className={`flex transition ease-out duration-40`}
              style={{
                  transform:`translateX(-${100 * current}%)`
              }}
      >
        {slides.map((slide:string) => {
          return <img key={slide} src={slide} alt="" className="min-w-full" />;
        })}
      </div>
      <div className="absolute bottom-0 right-0 flex items-center justify-center">
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
  );
}
