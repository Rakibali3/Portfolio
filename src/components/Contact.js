import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])

  return (
    <div className="flex flex-col-reverse lg:flex-row p-3 justify-center lg:mt-28 md:m-10 sm:m-0 md:flex-col-reverse sm:flex-col-reverse md:justify-center gap-8 ">
      <div  data-aos="fade-right" className="w-full lg:w-auto flex md:justify-center sm:justify-center  ">
      <form
          action="https://formspree.io/f/mzzppewr"
          method="POST"
          className="bg-[#100D25] dark:bg-white dark:text-black flex flex-col gap-8 text-white p-8 rounded-2xl w-full lg:w-[520px] md:w-[520px] sm:w-[90%] dark:border-2 dark:border-black "
        >
          <div className="flex flex-col gap-3">
            <p className="text-[#AAA6C3] text-lg text-left dark:font-bold">
              GET IN TOUCH
            </p>
            <p className="text-white font-bold text-6xl text-left dark:text-black">
              Contact.
            </p>
          </div>
          <div className="text-left font-bold flex flex-col gap-3">
            <label htmlFor="name" className="text-lg">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Whats your good name?"
              required
              className="bg-[#151030]  p-4 rounded-lg focus:outline-none focus:border-none dark:bg-slate-100"
            />
          </div>
          <div className="text-left font-bold flex flex-col gap-3">
            <label htmlFor="email" className="text-lg">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Whats your email address?"
              required
              className="bg-[#151030]  p-4 rounded-lg focus:outline-none focus:border-none dark:bg-slate-100"
            />
          </div>
          <div className="text-left font-bold flex flex-col gap-3">
            <label htmlFor="message" className="text-lg">
              Your Message
            </label>
            <textarea
              id="message"
              rows={7}
              name="message"
              placeholder="What you want to say?"
              required
              className="bg-[#151030]  p-4 rounded-lg focus:outline-none focus:border-none dark:bg-slate-100"
            />
          </div>
          <button
            type="submit"
            className="bg-[#151030] dark:bg-black text-white dark:text-white font-bold text-lg p-3 w-28 rounded-xl shadow-sm shadow-slate-400"
          >
            Send
          </button>
        </form>
      </div>
      <div  data-aos="zoom-in" className="flex flex-col gap-8 p-5 text-left text-white w-full lg:w-auto lg:items-start md:items-center sm:items-center dark:text-black">
        <h1 className=" font-bold text-2xl">Contact Details</h1>
        <div className="flex flex-col gap-5 text-xl">
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-location-dot fa-xl text-[#9CA3AF] dark:text-black"></i>
            Bhimavaram, Andhra Pradesh, India
          </div>
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-envelope fa-xl text-[#9CA3AF] dark:text-black"></i>
            rakibalibvrm13@gmail.com
          </div>
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-phone fa-xl text-[#9CA3AF] dark:text-black"></i>
            7842663649
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
