const Intro = () => {
    return (
        <div className="flex gap-5 p-5 justify-evenly items-center  text-white text-xl flex-col md:flex-row dark:text-black">
            <div className="flex flex-col gap-12 lg:w-3/5 md:w-4/5 sm:w-full  ">
                <h1 className="font-semibold text-2xl lg:text-5xl md:text-4xl  ">LET ME <span className="text-[#8A4CA8]">INTRODUCE</span> MYSELF</h1>
                <div className="flex flex-col gap-4 p-2 text-left md:gap-8 sm:gap-8">
                    <h1>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h1>
                    <h1>I am fluent in classics like <span className="text-[#8A4CA8] font-bold"> Java, Javascript and C. </span></h1>
                    <h1>My field of Interest's are building new <span className="text-[#8A4CA8] font-bold"> Web Technologies and Products </span> and also in areas related to <span className="text-[#8A4CA8] font-bold"> Blockchain. </span> </h1>
                    <h1>Whenever possible, I also apply my passion for developing products with <span className="text-[#8A4CA8] font-bold"> Node.js </span>  and <span className="text-[#8A4CA8] font-bold"> Modern Javascript Library and Frameworks </span>   like <span className="text-[#8A4CA8] font-bold"> React.js and Next.js. </span> </h1>
                </div>
            </div>
            <div className="">
                <img alt="" src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg" />
            </div>
        </div>
    )
}
export default Intro;