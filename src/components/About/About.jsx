import { useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../Button/Button";
const About = () => {
    const [showArrow, setShowArrow] = useState(false);
  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full py-14 md:py-20 flex flex-col -mt-5 md:mt-0 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
        <h1 className="w-full md:w-[93%]  pb-16 text-[8vw] md:text-[3.5vw] px-4 md:px-14 leading-8 md:leading-none font-['Neue_Montreal'] tracking-tight md:tracking-tight"> Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className="underline">raise funds</span>, <span className="underline">sell products</span>, <span className="underline">explain complex ideas</span>, and <span className="underline">hire great people
            </span> .
        </h1>
        <div className="w-full px-4 md:px-16 pt-4 pb-20 md:pb-32 border border-y-zinc-600 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
            <h1 className="w-2/3 md:w-1/2 text-[3.5vw] md:text-[1.1vw] font-['Neue_Montreal']">What you can expect:</h1>
            <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center justify-between relative">
                <div className="w-[80%] md:w-1/2 flex flex-col gap-5 md:gap-8">
                <p className="text-[3.8vw] md:text-[1.1vw] font-['Neue_Montreal']"> We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p className="text-[3.8vw] md:text-[1.1vw] font-['Neue_Montreal']">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>

                </div>
                <div className="w-1/2 h-full flex flex-col md:items-center pt-8 md:pt-24 " >
                {
                    ["S:", "Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => {
                        return(
                            <p  className={`${index === 0 && "pb-5 no-underline"} text-[4vw] md:text-[1.1vw] text-left font-['Neue_Montreal'] underline underline-offset-2`} key={index}>{item}</p>
                            )
                    })
                }
            </div>
            
            </div>
        </div>

        <div className="w-full py-5 px-4 md:px-10 flex flex-col md:flex-row justify-between">
            <div className="">
                <h1 className="text-[8vw]  md:text-[3.5vw] font-['Neue_Montreal'] tracking-tight md:tracking-tighter  leading-none">Our approach:</h1>
                <Button  
                classes={"w-[50vw] text-[3.5vw] md:text-[2vw] lg:text-[1.1vw] md:w-[12vw] py-4 md:py-3 "}
                text={"Read more"} 
                icon={<FaArrowLeftLong className="rotate-[175deg]" />}
                iconClasses={"w-11 h-11 px-4 bg-white rounded-full  flex items-center justify-center"}
                showArrow={showArrow} setShowArrow = {setShowArrow}
                />
            </div>
            <div className="">
                <div className={`${showArrow && "scale-95"} transition-transform  duration-500 ease-in ` }>
                    <img className={`rounded-3xl`} src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About