const Footer = () => {
    return (
        <div className="p-4 flex flex-col gap-14">
            <div>
                <h1 className="text-center text-white text-4xl m-4">Follow me</h1>
                <div className="flex gap-4 md:gap-8 items-center justify-center flex-wrap">
                    <button className="bg-[#1E3851] p-2 md:p-4 rounded-lg text-white hover:text-[#8A4CA8]">
                        <i className="fa-brands fa-linkedin-in fa-xl md:fa-2xl"></i>
                    </button>
                    <button className="bg-[#1E3851] p-2 md:p-4 rounded-lg text-white hover:text-[#8A4CA8]">
                        <i className="fa-brands fa-github fa-xl md:fa-2xl"></i>
                    </button>
                    <button className="bg-[#1E3851] p-2 md:p-4 rounded-lg text-white hover:text-[#8A4CA8]">
                        <i className="fa-brands fa-instagram fa-xl md:fa-2xl"></i>
                    </button>
                    <button className="bg-[#1E3851] p-2 md:p-4 rounded-lg text-white hover:text-[#8A4CA8]">
                        <i className="fa-brands fa-youtube fa-xl md:fa-2xl"></i>
                    </button>
                    <button className="bg-[#1E3851] p-2 md:p-4 rounded-lg text-white hover:text-[#8A4CA8] ">
                        <i className="fa-brands fa-twitter fa-xl md:fa-2xl"></i>
                    </button>
                </div>
            </div>
            <div>
                <h1 className="text-white text-xl">
                    © 2024React & Tailwind CSS Portfolio.Rakib
                </h1>
            </div>
        </div>
    )
}

export default Footer;