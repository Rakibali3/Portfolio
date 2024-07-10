import { useState, useEffect } from "react";
import Modal from "./Modal";

const Header = ({ scrollToSection, refs }) => {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    document.body.classList.toggle("dark");
  };

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4 py-6 md:justify-around lg:justify-around">
        <div className="flex items-center">
          <button onClick={() => scrollToSection(refs.homeRef)} className="text-white text-2xl dark:text-black">
            Rakib Ali
          </button>
        </div>
        <div className="hidden sm:flex lg:gap-8 md:gap-5 sm:gap-4 text-lg text-white dark:text-black">
          <button onClick={() => scrollToSection(refs.homeRef)} className="hover:text-indigo-600 hover:font-semibold">
            Home
          </button>
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-indigo-600 hover:font-semibold">
            About Me
          </button>
          <button onClick={() => scrollToSection(refs.projectsRef)} className="hover:text-indigo-600 hover:font-semibold">
            Projects
          </button>
          <button onClick={() => scrollToSection(refs.educationRef)} className="hover:text-indigo-600 hover:font-semibold">
            Education
          </button>
          <button onClick={() => scrollToSection(refs.contactRef)} className="hover:text-indigo-600 hover:font-semibold">
            Contact
          </button>
        </div>

        <div className="text-white flex gap-5 items-center">
          <button
            className="hidden md:flex items-center bg-indigo-500 hover:bg-indigo-600 px-4 h-11 rounded-xl font-bold"
            onClick={toggleModal}
          >
            Hire Me
          </button>
          <button className="bg-[#1E3851] p-3 rounded-xl" onClick={toggleTheme}>
            {theme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
        <div className="flex sm:hidden">
          {menu ? (
            <button onClick={showMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                className="fill-current text-white dark:text-black"
              >
                <path d="m251.33-189.59-61.74-61.74L418.26-480 189.59-708.67l61.74-61.74L480-541.74l228.67-228.67 61.74 61.74L541.74-480l228.67 228.67-61.74 61.74L480-418.26 251.33-189.59Z" />
              </svg>
            </button>
          ) : (
            <button onClick={showMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                className="fill-current text-white dark:text-black"
              >
                <path d="M100.78-100.78v-100.35h758.44v100.35H100.78Zm0-329.05v-100.34h758.44v100.34H100.78Zm0-329.04v-100.35h758.44v100.35H100.78Z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {menu && (
        <div className="flex flex-col gap-2 text-white text-lg m-4 p-3 dark:text-black">
          <button
            onClick={() => { showMenu(); scrollToSection(refs.homeRef); }}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            Home
          </button>
          <button
            onClick={() => { showMenu(); scrollToSection(refs.aboutRef); }}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            About
          </button>
          <button
            onClick={() => { showMenu(); scrollToSection(refs.projectsRef); }}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            Projects
          </button>
          <button
            onClick={() => { showMenu(); scrollToSection(refs.educationRef); }}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            Education
          </button>
          <button
            onClick={() => { showMenu(); scrollToSection(refs.contactRef); }}
            className="text-left p-2"
          >
            Contact
          </button>
          <button
            className="bg-indigo-600 px-4 h-11 w-28 rounded-xl font-bold items-center dark:text-white"
            onClick={toggleModal}
          >
            Hire Me
          </button>
        </div>
      )}
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </header>
  );
};

export default Header;
