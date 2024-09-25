
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const StartProject = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full min-h-screen pt-20 md:py-40 bg-[#CDEA68] flex flex-col items-center">
        <div  className=" w-full h-full flex flex-col gap-0 md:gap-0 items-center">
            <Heading text={"READY"} classes={"text-[14vw] "} />
            <Heading text={"TO START"} classes={"text-[14vw]"}/>
            <Heading text={"The PROJECT?"} classes={"text-[14vw]"}/>
        </div>
        <div className="w-full flex items-center justify-center pt-32 md:pt-0 ">
            <Button 
                classes={"w-[60vw] md:w-[28vw] lg:w-[16vw] py-3"}
                text={"Start the project"} 
                icon={<FaArrowLeftLong />}
                iconClasses={"w-10 h-10 px-4 bg-white rounded-full  flex items-center justify-center"}
                />
        </div>
    </div>
  )
}

export default StartProject;