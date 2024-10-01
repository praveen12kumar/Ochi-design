import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const FeaturedP = () => {
   const [isHovered, setIsHovered] = useState(false);
  
   const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  
  const handleHover = (index)=>{
    
    cards[index].start({y:"0"})
  }

  const handleHoverEnd = (index)=>{
    console.log("index", index)
    cards[index].start({y:"100%"})
  }
  
  
  return (
    <div  className="w-full min-h-screen py-3 md:py-10 bg-[#F1F1F1]">
      <div className="w-full px-4 md:px-14 py-8 border-b border-zinc-700">
        <h1 className=" text-[8vw] md:text-[3vw] font-['Neue_Montreal'] tracking-normal">
          Featured projects
        </h1>
      </div>

      <div className="cards w-full flex flex-col justify-between md:flex-row md:flex-wrap px-4 pt-8 md:pt-16 md:px-14">
        {/* -----------------------------------1st card---------------------------------------------------- */}
        <div 
          
        className="cardcontainer relative w-full md:w-[49%] mb-10 flex flex-col gap-3 "
        >
          <h1 className="text-[6vw] font-bold overflow-hidden text-[#CDEA68] uppercase z-30 font-['Neue Montreal'] whitespace-nowrap tracking-tighter leading-none absolute left-1/2  md:left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
            {
              "Cardborad spaceship".split("").map((item, index)=>{
                return(
                  <motion.span
                    initial={{y:"100%"}}
                    animate={cards[0]}
                    transition={{ease:[0.45, 0, 0.55, 1],  delay:index*.04}}
                    className="inline-block "
                    style={{pointerEvents:"none"}}
                  key={index}>{item}</motion.span>
                )
              })
            }
          </h1>
          <div className="w-full flex items-center gap-2">
            <p className="w-2 h-2 rounded-full bg-zinc-900"></p>
            <h1 className="uppercase text-[3.5vw] md:text-[1.2vw] md:font-light leading-none: font-['Neue_Montreal'] tracking-normal">
              Cardboard spaceship
            </h1>
          </div>
          <motion.div 
            
            onHoverStart={()=> handleHover(0)}
            onHoverEnd={()=> handleHoverEnd(0)}
            className="card w-full  rounded-lg ">
            <img
              className="w-full h-full md:h-[37vw]  rounded-lg"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </motion.div>

          <div className="w-full py-2  flex flex-wrap items-center gap-2 md:gap-5">
            {["Branded Template", "sales Deck", "Social media templates"].map(
              (it, index) => {
                return (
                  <div
                    className="border text-[3vw] md:text-[0.9vw] font-['Neue_Montreal'] font-normal  text-zinc-800 px-2 py-1 border-zinc-600 rounded-full uppercase"
                    key={index}
                  >
                    {" "}
                    {it}{" "}
                  </div>
                );
              }
            )}
          </div>
         </div>
         {/*   --------------------------------2nd card--------------------------- */}
        <div className="cardcontainer  relative w-full md:w-[49%] mb-10 flex flex-col gap-3 "
        >
          <h1 className="text-[6vw] font-bold overflow-hidden text-[#CDEA68] uppercase z-30 font-['Neue Montreal'] whitespace-nowrap tracking-tighter leading-none absolute left-0 top-1/2 -translate-x-1/2  -translate-y-1/2">
            {
              "Ah2 & matt horn".split("").map((item, index)=>{
                return(
                  <motion.span
                    initial={{y:"100%"}}
                    animate={cards[1]}
                    transition={{ease:[0.45, 0, 0.55, 1],  delay:index*.04}}
                    className="inline-block"
                    
                  key={index}>{item}</motion.span>
                )
              })
            }
          </h1>
          <div className="w-full flex items-center gap-2">
          <p className="w-2 h-2 rounded-full bg-zinc-900"></p>
          <h1 className="uppercase text-[3.5vw] md:text-[1.2vw] md:font-light leading-none: font-['Neue_Montreal'] tracking-normal">
            Ah2 & matt horn
            </h1>
          </div>
          <motion.div 
            
            onHoverStart={()=> handleHover(1)}
            onHoverEnd={()=> handleHoverEnd(1)}
          className="card w-full  rounded-lg ">
            <img
              className="w-full h-full md:h-[37vw]  rounded-lg"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </motion.div>
          <div className="w-full py-2  flex flex-wrap items-center gap-2 md:gap-5">
            {["Pitch Deck"].map(
              (it, index) => {
                return (
                  <div
                    className="border text-[3vw] md:text-[0.9vw] font-['Neue_Montreal'] font-normal  text-zinc-800 px-2 py-1 border-zinc-600 rounded-full uppercase"
                    key={index}
                  >
                    {" "}
                    {it}{" "}
                  </div>
                );
              }
            )}
          </div>
        </div>

        
      </div>


      <div className="cards w-full flex flex-col justify-between md:flex-row md:flex-wrap px-4 pt-8 md:pt-16 md:px-14">
        {/* ---------------------3rd card-------------------- */}
        <motion.div
          onHoverStart={()=> handleHover(2)}
          onHoverEnd={()=> handleHoverEnd(2)}
        className="cardcontainer relative w-full md:w-1/2 mb-10 flex flex-col gap-3">
          <h1 className="text-[6vw] font-bold overflow-hidden text-[#CDEA68] uppercase z-30 font-['Neue Montreal'] whitespace-nowrap tracking-tighter leading-none absolute left:1/2 md:left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
          {
                "Trawa".split("").map((item, index) => {
                  return(
                    <motion.span
                    initial={{y:"100%"}}
                    animate={cards[2]}
                    transition={{ease:[0.45, 0, 0.55, 1],  delay:index*.04}}
                    className="inline-block"
                  key={index}>{item}</motion.span>
                  )
                })
              }
          </h1>
          <div className="w-full flex items-center gap-2">
          <p className="w-2 h-2 rounded-full bg-zinc-900"></p>
          <h1 className="uppercase text-[3.5vw] md:text-[1.2vw] md:font-light leading-none: font-['Neue_Montreal'] tracking-normal">
              Trawa
            </h1>
          </div>
          <div className="card w-full  rounded-lg ">
            <img
              className="w-full h-full md:h-[37vw]  rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
          <div className="w-full py-2  flex flex-wrap items-center gap-2 md:gap-5">
            {["Brank Identity", "Design Research", "Investor Deck"].map(
              (it, index) => {
                return (
                  <div
                    className="border text-[3vw] md:text-[0.9vw] font-['Neue_Montreal'] font-normal  text-zinc-800 px-2 py-1 border-zinc-600 rounded-full uppercase"
                    key={index}
                  >
                    {" "}
                    {it}{" "}
                  </div>
                );
              }
            )}
          </div>
        </motion.div>

{/* ------------------------- 4th card--------------- */}

        <motion.div
          onHoverStart={()=> handleHover(3)}
          onHoverEnd={()=> handleHoverEnd(3)}
        className="cardcontainer relative w-full md:w-[49%] mb-10 flex flex-col gap-3">
        <h1 className="text-[6vw] font-bold overflow-hidden text-[#CDEA68] uppercase z-30 font-['Neue Montreal'] whitespace-nowrap tracking-tighter leading-none absolute left-0 top-1/2 -translate-x-1/2  -translate-y-1/2">

        {
              "Premium Blend".split("").map((item, index) => {
                return(
                  <motion.span
                    initial={{y:"100%"}}
                    animate={cards[3]}
                    transition={{ease:[0.45, 0, 0.55, 1],  delay:index*.04}}
                    className="inline-block"
                  key={index}>{item}</motion.span>
                )
              })
            }
          </h1>
          <div className="w-full flex items-center gap-2">
          <p className="w-2 h-2 rounded-full bg-zinc-900"></p>
          <h1 className="uppercase text-[3.5vw] md:text-[1.2vw] md:font-light leading-none: font-['Neue_Montreal'] tracking-normal">
              Premium Blend
            </h1>
          </div>
          <div className="card w-full  rounded-lg ">
            <img
              className="w-full h-full md:h-[37vw] rounded-lg"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </div>
          <div className="w-full py-2  flex flex-wrap items-center gap-2 md:gap-5">
            {["Branded Template"].map(
              (it, index) => {
                return (
                  <div
                    className="border text-[3vw] md:text-[0.9vw] font-['Neue_Montreal'] font-normal  text-zinc-800 px-2 py-1 border-zinc-600 rounded-full uppercase"
                    key={index}
                  >
                    {" "}
                    {it}{" "}
                  </div>
                );
              }
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedP;
