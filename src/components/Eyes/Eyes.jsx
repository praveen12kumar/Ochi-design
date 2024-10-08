import { useEffect, useState } from "react"


const Eyes = () => {
    let [rotate, setRotate] = useState(0)
    useEffect(() => {
        
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            setRotate(angle-180);
        })
        
      }, []);

      
  return (
    <div className="eyes w-full h-[60vh] md:h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-0.4" className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="absolute flex gap-8 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="w-[40vw] md:w-[15vw] h-[40vw] md:h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
                    <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
                        <p className="text-sm md:text-md text-white uppercase font-['Neue Montreal'] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Play</p>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className={`line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                            <div className="w-3 md:w-4 h-3 md:h-4 ml-1 rounded-full bg-zinc-200"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[40vw] md:w-[15vw] h-[40vw] md:h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
                    <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full relative">
                    <p className="text-sm md:text-md text-white uppercase font-['Neue Montreal'] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Play</p>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}  className={`line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  `}>
                            <div className="w-3 md:w-4 h-3 md:h-4 ml-1 rounded-full bg-zinc-200"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Eyes