
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  const educationData = [
    {
      degree: "Bachelor's Degree",
      university: 'Vishnu Institute of Technology',
      year: '2021 - 2025',
      description:
        'I am pursuing my Bachelor of Science in Computer Science at Vishnu Institute of Technology. During my studies, I have gained a solid foundation in programming, algorithms, and software development.',
    },
    {
      degree: "Intermediate Degree",
      university: 'Sri Chaitanya JR College',
      year: '2019 - 2021',
      description:
        'I completed my intermediate education at Sri Chaitanya JR College. Here, I focused mainly on mathematics, physics, and chemistry, which laid the groundwork for my technical understanding.',
    },
    {
      degree: 'High School Degree',
      university: 'Wonder Kids E.M High School',
      year: '2018 - 2019',
      description:
        'My high school education at Wonder Kids E.M High School provided a strong academic base. I explored various subjects and developed essential skills for further studies.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-600">Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-black h-full"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="mb-8 flex justify-between items-center ">
              <div  data-aos="fade-right"  className="hidden sm:block sm:w-1/2 sm:pr-8">
                <div className="text-right">
                  <p className="text-green-600 font-semibold">{edu.year}</p>
                  <h3 className="text-2xl font-bold text-white dark:text-black">{edu.degree}</h3>
                  <p className="text-[#A09CBE]">{edu.university}</p>
                </div>
              </div>
              <div data-aos="fade-up" className="relative w-full sm:w-1/2">
                <div className="absolute left-1/2 z-40 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
                </div>
                <div className=" bg-[#100D25] dark:bg-slate-100 shadow-2xl p-8 rounded-lg transition-transform transform hover:scale-105 ">
                  <div className="sm:hidden  mb-4 ">
                    <p className="text-green-600 font-semibold">{edu.year}</p>
                    <h3 className="text-2xl font-bold text-white dark:text-black">{edu.degree}</h3>
                    <p className="text-[#A09CBE]">{edu.university}</p>
                  </div>
                  <p className="text-white dark:text-black">{edu.description}</p>
                </div>
              </div>
              <div data-aos="fade-left" className="hidden sm:block sm:w-1/2 sm:pl-8">
                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
