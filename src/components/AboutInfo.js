import React from 'react'

const AboutInfo = () => {
    return (
        <div>
            <div>
                <h1 className="font-semibold text-2xl lg:text-5xl md:text-4xl text-white dark:text-black mt-10">
                    LET ME <span className="text-[#8A4CA8]">INTRODUCE</span> MYSELF
                </h1>
            </div>
            <div className=" flex gap-6 p-3 flex-col items-center justify-center lg:mx-12 lg:my-24  md:mt-0 sm:mt-0  md:flex-row ">
                <div className="">
                    <img
                        src="https://cdn.glitch.global/836ffa95-fbb3-44e9-b37a-6f1f9d594923/avatar.5852f40fbb38aa284829fa3fb7722225.svg?1718442787513"
                        alt="Rakib Ali"
                    />
                </div>
                <div className="text-white w-full lg:w-[70%] md:w-4/5 sm:w-full text-left flex flex-col gap-3 lg:p-4 md:p-0 sm:p-0 dark:text-black">
                    <p className="w-full">
                        Hello! My name is Rakib Ali, and I am a passionate Software Developer
                        with expertise in the MERN stack (MongoDB, Express, React, Node.js). I
                        hold a degree in Computer Science, where I developed a solid
                        foundation in software engineering principles and honed my skills in
                        various programming languages and frameworks. My proficiency spans
                        front-end technologies like HTML, CSS, and JavaScript, as well as
                        back-end development with Node.js and Express. I am also skilled in
                        database management using MongoDB. My education and hands-on
                        experience have equipped me with the ability to create efficient,
                        scalable, and user-friendly web applications.
                    </p>
                    <p>Thank you for visiting my portfolio. I look forward to connecting with you and exploring how we can collaborate to bring innovative ideas to life!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
