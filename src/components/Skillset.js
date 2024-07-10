import React, { useEffect } from 'react';
import IconContainer from './IconContainer';
import { JavaIcon, ReactIcon, NodeJs, Js, C, Python, MongoDB, FireBase, Postgres, Git, Redux, VSCode, Tailwind } from '../utils/icons';
import AOS from "aos";
import "aos/dist/aos.css";

const Skillset = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-white font-bold text-4xl dark:text-black'>
        Professional <span className='text-[#8A4CA8]'>Skillset</span>
      </h1>
      <div className='flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6'>
        <div data-aos="fade-right">
          <IconContainer SVG={<JavaIcon />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<ReactIcon />} />
        </div>
        <div data-aos="fade-right">
          <IconContainer SVG={<Tailwind />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<Js />} />
        </div>
        <div data-aos="fade-right">
          <IconContainer SVG={<C />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<Python />} />
        </div>
        <div data-aos="fade-right">
          <IconContainer SVG={<MongoDB />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<FireBase />} />
        </div>
        <div data-aos="fade-right">
          <IconContainer SVG={<Postgres />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<Git />} />
        </div>
      </div>
      <h1 className='text-white font-bold text-4xl dark:text-black'>
        <span className='text-[#8A4CA8]'>Tools</span> I Use
      </h1>
      <div className='flex justify-center items-center p-3 flex-wrap w-[80%] m-auto gap-6'>
        <div data-aos="fade-right">
          <IconContainer SVG={<VSCode />} />
        </div>
        <div data-aos="fade-left">
          <IconContainer SVG={<Redux />} />
        </div>
        <div data-aos="fade-right">
          <IconContainer SVG={<NodeJs />} />
        </div>
      </div>
    </div>
  );
};

export default Skillset;
