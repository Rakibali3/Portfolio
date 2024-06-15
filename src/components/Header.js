import { useState } from "react";
const Header = () => {
    const [menu, setMenu] = useState(false);
    const showMenu = () => {
        setMenu(menu ? false : true);
    }
    return (
        <div>
            <div className="flex justify-between items-center p-4 sticky top-0 md:justify-around lg:justify-around">
                <div className="flex items-center">
                    <button className="text-white text-2xl">Rakib Ali</button>
                </div>
                <div className="hidden sm:flex gap-8 text-lg text-white">
                    <button className="hover:text-indigo-600 hover:font-bold">Home</button>
                    <button className="hover:text-indigo-600 hover:font-bold">About</button>
                    <button className="hover:text-indigo-600 hover:font-bold">Projects</button>
                    <button className="hover:text-indigo-600 hover:font-bold">Contact</button>
                </div>

                <div className="text-white flex gap-5 items-center">
                    <button className="hidden md:flex items-center bg-indigo-500 hover:bg-indigo-600 px-4 h-11 rounded-xl font-bold">Hire Me</button>
                    <button className="bg-[#1E3851] p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
                    </button>
                </div>
                <div className="flex sm:hidden">
                    {menu ? <button onClick={showMenu}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="m251.33-189.59-61.74-61.74L418.26-480 189.59-708.67l61.74-61.74L480-541.74l228.67-228.67 61.74 61.74L541.74-480l228.67 228.67-61.74 61.74L480-418.26 251.33-189.59Z" /></svg></button> : <button onClick={showMenu}><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M100.78-100.78v-100.35h758.44v100.35H100.78Zm0-329.05v-100.34h758.44v100.34H100.78Zm0-329.04v-100.35h758.44v100.35H100.78Z" /></svg></button>}
                </div>
            </div>
            {menu && <div className="flex flex-col gap-2 text-white text-lg m-4 p-3 ">
                <button className="border-b-2 border-b-gray-400 text-left p-2">Home</button>
                <button className="border-b-2 border-b-gray-400 text-left p-2">About</button>
                <button className="border-b-2 border-b-gray-400 text-left p-2">Projects</button>
                <button className=" text-left p-2">Contact</button>
                <button className="bg-indigo-600 px-4 h-11 w-28  rounded-xl font-bold  items-center">Hire Me</button>
            </div>}
        </div>
    )
}
export default Header;