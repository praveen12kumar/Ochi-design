
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-full bg-[#F1F1F1]  pt-1"> 
        <div className="textstructure mt-28 md:mt-40 px-4 md:px-10 ">
            <div className="masker">
                <h1 className="uppercase text-[10vw] md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[10vw] md:leading-[6vw] tracking-tighter">We Create</h1>    
            </div>
            <div className="masker flex items-center ">
                <motion.div 
                    initial={{width:0}}
                    animate={{width:"8vw"}}
                    transition={{ease:[0.45, 0, 0.55, 1], duration:1}}
                    className="w-[14vw] md:w-[8vw] h-[7vw] md:h-[5vw] bg-red-500 ml-[0.6vw] relative top-[.4vw] rounded"></motion.div>
                <h1 className="uppercase text-[10vw] md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[10vw] md:leading-[6vw] tracking-tighter">Eye Opening</h1>    
            </div>  
            <div className="masker">
                <h1 className="uppercase text-[10vw] md:text-[7vw] font-['Founders_Grotesk '] font-bold leading-[10vw] md:leading-[6vw] tracking-tighter">Presentations</h1>    
            </div>    
           
        </div> 
        <div className="w-full mt-32 py-3 px-4 md:px-10 border-t border-zinc-400 flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-0 font-['Neue Montreal']">  
        {
            ["For public and private companies", "From the first pitch to IPO "].map((item, index) => {
                return (
                    <p className={`text-md md:text-md ${index === 1 && "md:pl-44"   } font-normal font-['Neue_Montreal'] tracking-tight leading-none`} key={index}>{item}</p>
                )
            })
        }
        <div className="start flex items-center gap-2">
            <div className="px-4 py-1 border border-zinc-600 rounded-full uppercase">Start the project</div>
            <div className="hidden w-9 h-9 border border-zinc-600 rounded-full md:flex items-center justify-center">
                <span className="rotate-[125deg]"><FaArrowLeftLong /></span>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default LandingPage