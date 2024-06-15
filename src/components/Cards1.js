import React from "react";
import {ReactTyped} from "react-typed";
import {downloadLink} from "../utils/resumeLink"
const Cards1 = () => {
    
    return (
        <div className="flex justify-center items-center p-3 w-full flex-col md:flex-row">
            <div className="text-white dark:text-black w-full sm:p-12 md:p-12 lg:p-32 lg:mt-0 md:w-[50%] flex flex-col gap-6 text-center md:text-left sm:m-auto md:items-start lg:items-start">
                <h1 className="text-[2.3em] md:text-[2.5em]">Hi There! 👋🏻</h1>
                <h1 className="text-[2.3em] md:text-[3em]">I'M Rakib Ali</h1>
                <h1 className="text-white text-[1.7em] sm:text-[2em] md:text-[1.5em] lg:text-[2em] dark:text-black">
                    I'm a{" "}
                    <ReactTyped
                        strings={["Software Developer", "Mern Stack Developer", "Designer"]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        className="text-indigo-600 font-bold"
                    />
                </h1>
                <div className="flex justify-center md:justify-start">
                    <a href={downloadLink} download="Rakib_Ali_CV.pdf">
                        <button className="bg-white dark:bg-black dark:text-white p-3 dark:hover:bg-indigo-600 rounded-xl text-black w-36 font-semibold text-center hover:bg-indigo-600 hover:text-white">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full md:w-[50%]">
                <img
                    alt=""
                    src="https://react-tailwindcss-portfolio.netlify.app/static/media/developer-dark.3f07bd13.svg"
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default Cards1;
