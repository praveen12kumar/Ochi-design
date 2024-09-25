

const Card = () => {
  return (
    <div  className="w-full   min-h-screen px-4 md:px-14 pb-40 md:pb-0 flex items-center justify-center  ">
    <div className="w-full h-full md:h-[90vh] lg:h-[50vh] flex flex-col lg:flex-row items-center gap-5">
            <div className="cardContainer w-full h-[60vw] md:h-full  md:w-full  rounded-lg relative flex items-center justify-center bg-[#004D43]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="text-[#CDEA68] font-['Neue_Montreal'] font-medium absolute bottom-10 left-10 border border-[#CDEA68] rounded-2xl px-2 py-1 cursor-pointer">
                    &copy; 2019-2022
                </button>
            </div>

            <div className="cardcontainer w-full h-full flex flex-col md:flex-row items-center gap-5">
                <div className="card w-full h-[60vw] md:w-1/2 md:h-full rounded-lg bg-[#192826]  relative flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="w-2/3 text-[3vw] md:text-[2vw] lg:text-[1.1vw] text-[#CDEA68] font-['Neue_Montreal'] leading-none font-medium absolute bottom-10 md:bottom-5 left-1/2 -translate-x-1/2 border border-[#CDEA68] rounded-2xl px-2 md:px-0 py-1 cursor-pointer">
                    RATING 5.0 ON CLUTCH
                </button>
               </div>
               <div className="card w-full h-[60vw] md:w-1/2 md:h-full rounded-lg bg-[#192826] relative flex items-center justify-center">
               <img className="w-[16vw] md:w-[6vw] " src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="w-2/3 text-[3vw] md:text-[2vw] lg:text-[1.1vw] text-[#CDEA68] font-['Neue_Montreal'] leading-none font-medium absolute bottom-10 md:bottom-5  left-1/2 -translate-x-1/2 border border-[#CDEA68] rounded-2xl px-2 md:px-0 py-1 cursor-pointer">
                    BUSINESS BOOTCAMP ALUMINI
                </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Card