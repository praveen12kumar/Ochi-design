
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full min-h-full bg-[#F1F1F1]  pt-1 -mb-3 md:mb-0 "> 
        <div className="textstructure  mt-28 md:mt-40 px-4 md:px-10 ">
            <div className="masker">
                <h1 className="w-full uppercase text-[12vw] sm:text-[9vw]  md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[11vw] md:leading-[6vw] tracking-tighter">We Create</h1>    
            </div>
            <div className="masker flex items-center gap-1 ">
                <motion.div 
                    initial={{width:0}}
                    animate={{width:"14vw", md:"8vw"}}
                    transition={{ease:[0.45, 0, 0.55, 1], duration:1}}
                    className="w-[20vw] md:w-[8vw] h-[8vw] md:h-[5vw] bg-red-500 ml-[0.6vw] top-[.1vw] md:top-[.4vw] relative rounded">
                </motion.div>
                <h1 className="uppercase text-[12vw] sm:text-[9vw]  md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[11vw] md:leading-[6vw] tracking-tighter">Eye-Opening</h1>    
            </div>  
            <div className="masker">
                <h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[11vw] md:leading-[6vw] tracking-tighter">Presentations</h1>    
            </div>    
           
        </div> 
        <div className="w-full mt-32 py-5 md:py-3 px-4 md:px-10 border-t border-zinc-400 flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-0 font-['Neue_Montreal']">  
        {
            ["For public and private companies", "From the first pitch to IPO "].map((item, index) => {
                return (
                    <p className={`text-[4vw] md:text-[2vw] lg:text-[1.2vw] ${index === 1 && "lg:pl-44"   } font-normal font-['Neue_Montreal'] tracking-tight leading-none`} key={index}>{item}</p>
                )
            })
        }
        <div className="start flex items-center gap-2">
            <div className=" text-[4vw] md:text-[2vw] lg:text-[1.1vw] px-4 py-1 border border-zinc-600 rounded-full uppercase font-['Neue_Montreal'] ">Start the project</div>
            <div className="hidden w-9 h-9 border border-zinc-600 rounded-full md:flex items-center justify-center">
                <span className="rotate-[125deg]"><FaArrowLeftLong /></span>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default LandingPage