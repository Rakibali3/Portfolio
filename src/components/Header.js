import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showMenu = () => {
    setMenu(menu ? false : true);
  };

  const toggleTheme = () => {
    setTheme(theme ? false : true);
    document.body.classList.toggle("dark");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    }else{
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-7 sticky top-0 md:justify-around lg:justify-around ">
        <div className="flex items-center">
          <Link to={"/"} className="text-white text-2xl dark:text-black">
            Rakib Ali
          </Link>
        </div>
        <div className="hidden sm:flex lg:gap-8 md:gap-5 sm:gap-4 text-lg text-white dark:text-black">
          <Link to={"/"} className="hover:text-indigo-600 hover:font-bold">
            Home
          </Link>
          <Link to={"/About"} className="hover:text-indigo-600 hover:font-bold">
            About Me
          </Link>
          <Link
            to={"/Projects"}
            className="hover:text-indigo-600 hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to={"/Education"}
            className="hover:text-indigo-600 hover:font-bold"
          >
            Education
          </Link>
          <Link
            to={"/Contact"}
            className="hover:text-indigo-600 hover:font-bold"
          >
            Contact
          </Link>
          
        </div>

        <div className="text-white flex gap-5 items-center ">
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
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex sm:hidden ">
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
        <div className="flex flex-col gap-2 text-white text-lg m-4 p-3 dark:text-black ">
          <Link to={"/"} className="border-b-2 border-b-gray-400 text-left p-2">
            Home
          </Link>
          <Link
            to={"/About"}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            About
          </Link>
          <Link
            to={"/Projects"}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            Projects
          </Link>
          <Link
            to={"/Education"}
            className="border-b-2 border-b-gray-400 text-left p-2"
          >
            Education
          </Link>
          <Link to={"/Contact"} className=" text-left p-2">
            Contact
          </Link>
          <button className="bg-indigo-600 px-4 h-11 w-28  rounded-xl font-bold  items-center dark:text-white" onClick={toggleModal}>
            Hire Me
          </button>
        </div>
      )}
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
};
export default Header;
