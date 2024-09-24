
import { motion } from "framer-motion";


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
        <div className="text border-t-2 border-b-2 border-zinc-500 flex items-center whitespace-nowrap  overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className="text-[28vw]  md:text-[17vw] pr-20 text-white leading-none font-['Founders Grotesk'] uppercase font-bold ">We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 10}} className="text-[28vw]  md:text-[17vw] pr-20 text-white leading-none font-['Founders Grotesk'] uppercase font-bold ">We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee