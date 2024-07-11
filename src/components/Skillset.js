import React, { useEffect } from "react";
import IconContainer from "./IconContainer";
import {
  JavaIcon,
  ReactIcon,
  NodeJs,
  Js,
  C,
  Python,
  MongoDB,
  FireBase,
  Postgres,
  Git,
  Redux,
  VSCode,
  Tailwind,
} from "../utils/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const Skillset = () => {
  const isLargerThanLg = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-white font-bold text-4xl dark:text-black">
        Professional <span className="text-[#8A4CA8]">Skillset</span>
      </h1>
      <div className="flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6">
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="0"
        >
          <IconContainer SVG={<JavaIcon />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <IconContainer SVG={<ReactIcon />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <IconContainer SVG={<Tailwind />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <IconContainer SVG={<Js />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <IconContainer SVG={<C />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <IconContainer SVG={<Python />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="600"
        >
          <IconContainer SVG={<MongoDB />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
        >
          <IconContainer SVG={<FireBase />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="800"
        >
          <IconContainer SVG={<Postgres />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="900"
        >
          <IconContainer SVG={<Git />} />
        </div>
      </div>
      <h1 className="text-white font-bold text-4xl dark:text-black">
        <span className="text-[#8A4CA8]">Tools</span> I Use
      </h1>
      <div className="flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6">
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="0"
        >
          <IconContainer SVG={<VSCode />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-left" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <IconContainer SVG={<Redux />} />
        </div>
        <div
          data-aos={isLargerThanLg ? "fade-right" : "zoom-in"}
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <IconContainer SVG={<NodeJs />} />
        </div>
      </div>
    </div>
  );
};

export default Skillset;