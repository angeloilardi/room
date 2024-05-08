import Carousel from "./components/Carousel";
import Image from "next/image";
import aboutDark from './../public/images/image-about-dark.jpg'
import aboutLight from "./../public/images/image-about-light.jpg";

const slides = [
  {
    desktop: "/images/desktop-image-hero-1.jpg",
    mobile: "/images/mobile-image-hero-1.jpg",
  },
  {
    desktop: "/images/desktop-image-hero-2.jpg",
    mobile: "/images/mobile-image-hero-2.jpg",
  },
  {
    desktop: "/images/desktop-image-hero-3.jpg",
    mobile: "/images/mobile-image-hero-3.jpg",
  },
];

const slideContent = [
  {
    heading: "Discover innovative ways to decorate",

    content: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    heading: "We are available all across the globe",

    content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    heading: "Manufactured with the best materials",

    content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  },
];
export default function Home() {
  return (
    <>
      <Carousel slides={slides} slideContent={slideContent} />
      {/* Slide content*/}
      {/* <section className="bg-white p-8">
        <h1 className="text-4xl font-[500] text-black">
          {sliedContent[current].heading}
        </h1>
        <p className="text-dark-gray font-[500] mt-5">
          {sliedContent[current].content}
        </p>
        <button className="tracking-[.85rem] py-6 inline-block text-black">
          SHOP NOW
          <IconArrow />
        </button>
      </section> */}

      {/* About Section */}
      <section className="flex flex-col lg:flex-row ">
        <Image
       src={aboutDark}
          alt=""
          className="w-full lg:max-w-[28%]"
        />
        <div className="bg-white p-8 lg:px-12 lg:pt-16">
          <h1 className="font-[600] text-lg tracking-[.2rem] text-black">
            ABOUT OUR FURNITURE
          </h1>
          <p className="text-dark-gray mt-5  tracking-tighter">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <Image
          src={aboutLight}
          alt=""
          className="w-full lg:min-w-[calc(41.66%_-112px)]"
          // style={{
          //   width:'calc'
          // }}
        />
      </section>
    </>
  );
}
