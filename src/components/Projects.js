import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 p-3 justify-center">
      <div className="lg:w-[700px] md:w-auto sm:w-auto flex flex-col gap-3 text-left p-4 lg:my-24 lg:mx-44 md:mx-0 sm:mx-0">
        <p className="text-[#AAA6C3] text-lg dark:text-black dark:font-bold">
          MY WORK
        </p>
        <p className="text-white font-bold text-5xl dark:text-black">
          Projects.
        </p>
        <p className="text-[#AAA6C3] text-lg dark:text-black">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories . It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </p>
      </div>
      {/* cards */}
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {/* card1 */}
        <div
          data-aos="fade-right"
          className="w-[360px] p-1 text-white border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md rounded-2xl ease-in duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/Screenshot%202024-06-15%20195844.png?v=1718461938909"
              alt=""
              className="rounded-3xl w-[97%] h-[250px] m-auto p-3"
            />
            <a
              href="https://github.com/Rakibali3/Event-Management-System"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E3851] p-2 md:p-3 rounded-full text-white absolute bottom-44 right-6 border-2 tex shadow-[#8A4CA8] shadow-md"
            >
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
          </div>
          <div className="text-left py-2 px-5 flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold dark:text-black">
              Event Management System
            </h2>
            <p className="text-[#AAA6C3] text-left dark:text-black">
              An Event Management website allows users to sign up, log in, and
              share event details, offering secure authentication and easy event
              registration for managing and attending events smoothly.
            </p>
            <p className="text-sm flex gap-2">
              <span className="text-[#3994EE]">#html</span>
              <span className="text-[#209872]"> #css</span>
              <span className="text-[#CA296D]"> #javascript</span>
              <span className="text-[#eea939]"> #node js</span>
              <span className="text-[#df39ee]"> #postgres sql</span>
            </p>
          </div>
        </div>
        {/* card2 */}
        <div
          data-aos="fade-left"
          className="w-[360px] p-1 text-white border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md rounded-2xl ease-in duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/Screenshot%202024-06-16%20101509.png?v=1718513136321"
              alt=""
              className="rounded-3xl w-[97%] h-[250px] m-auto p-3"
            />
            <a
              href="https://github.com/Rakibali3/service-prism"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E3851] p-2 md:p-3 rounded-full text-white absolute bottom-44 right-6 border-2 tex shadow-[#8A4CA8] shadow-md"
            >
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
          </div>
          <div className="text-left py-1 px-5 flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold dark:text-black">Service Prism</h2>
            <p className="text-[#AAA6C3] text-left dark:text-black">
              Service Prism is an easy-to-use app for finding local services
              like restaurants, hospitals, gyms, and parlours. Its simple design
              help you find the best options, with personalized tips and
              detailed info.
            </p>
            <p className="text-sm flex gap-2">
              <span className="text-[#3994EE]">#html</span>
              <span className="text-[#209872]"> #css</span>
              <span className="text-[#CA296D]"> #javascript</span>
              <span className="text-[#eea939]"> #node js</span>
              <span className="text-[#df39ee]"> #fire base</span>
            </p>
          </div>
        </div>
        {/* card3 */}
        <div
          data-aos="fade-right"
          className="w-[360px] p-1 text-white border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md rounded-2xl ease-in duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/Screenshot%202024-06-16%20102316.png?v=1718513735435"
              alt=""
              className="rounded-3xl w-[97%] h-[250px] m-auto p-3"
            />
            <a
              href="https://github.com/Rakibali3/React"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E3851] p-2 md:p-3 rounded-full text-white absolute bottom-44 right-6 border-2 tex shadow-[#8A4CA8] shadow-md"
            >
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
          </div>
          <div className="text-left py-1 px-5 flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold dark:text-black">
              Food Ordering Website
            </h2>
            <p className="text-[#AAA6C3] text-left dark:text-black">
              Built a React web app that fetches and shows data from the Swiggy
              Live API, using Redux Toolkit for state management and Axios for
              data fetching. Created an Express and MongoDB backend for
              authentication.
            </p>
            <p className="text-sm flex gap-2">
              <span className="text-[#3994EE]">#react</span>
              <span className="text-[#209872]"> #tailwind</span>
              <span className="text-[#CA296D]"> #redux</span>
              <span className="text-[#eea939]"> #mongo db</span>
              <span className="text-[#df39ee]"> #jest</span>
            </p>
          </div>
        </div>
        {/* card4 */}
        <div
          data-aos="fade-left"
          className="w-[360px] p-1 text-white border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md rounded-2xl ease-in duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/WhatsApp%20Image%202024-06-16%20at%2010.35.41_78b9b3df.jpg?v=1718514370769"
              alt=""
              className="rounded-3xl w-[97%] h-[250px] m-auto p-3"
            />
            <a
              href="https://github.com/Rakibali3"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E3851] p-2 md:p-3 rounded-full text-white absolute bottom-44 right-6 border-2 tex shadow-[#8A4CA8] shadow-md"
            >
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
          </div>
          <div className="text-left py-1 px-5 flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold dark:text-black">QA Crafter</h2>
            <p className="text-[#AAA6C3] text-left dark:text-black">
              Developed a web application that takes user input (text or PDF) to
              create summaries and then generates questions and answers from
              those summaries.
            </p>
            <p className="text-sm flex gap-2">
              <span className="text-[#3994EE]">#react</span>
              <span className="text-[#209872]"> #tailwind</span>
              <span className="text-[#CA296D]"> #python</span>
              <span className="text-[#eea939]"> #flask</span>
              <span className="text-[#df39ee]"> #mongo db</span>
            </p>
          </div>
        </div>
        {/* card5 */}
        <div
          data-aos="fade-right"
          className="w-[360px] p-1 text-white border-[#8A4CA8] border-2 tex shadow-[#8A4CA8] shadow-md rounded-2xl ease-in duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/Screenshot%202024-06-18%20124003.png?v=1718694645152"
              alt=""
              className="rounded-3xl w-[97%] h-[250px] m-auto p-3"
            />
            <a
              href="https://github.com/Rakibali3/Amazon-Clone.git"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1E3851] p-2 md:p-3 rounded-full text-white absolute bottom-44 right-6 border-2 tex shadow-[#8A4CA8] shadow-md"
            >
              <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
            </a>
          </div>
          <div className="text-left py-1 px-5 flex flex-col gap-2 w-full">
            <h2 className="text-2xl font-bold dark:text-black">Amazon Clone</h2>
            <p className="text-[#AAA6C3] text-left dark:text-black">
              Designed and developed Amazon clone using HTML
              and CSS. Implemented key elements such as product showcases,
              search bar, and navigation menu etc.
            </p>
            <p className="text-sm flex gap-2">
              <span className="text-[#3994EE]">#html</span>
              <span className="text-[#209872]"> #css</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
