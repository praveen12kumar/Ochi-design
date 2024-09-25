import { useState } from "react"


const Button = ({text,classes, icon, iconClasses, setShowArrow, showArrow}) => {
    
  return (
    <>
            <div className={`${classes} my-6 px-4  rounded-full bg-black flex flex-row gap-4 items-center justify-evenly`} onMouseEnter={()=>setShowArrow(true)} onMouseLeave={()=>setShowArrow(false)}>
                    <p className="text-white uppercase font-['Neue Montreal']">{text}</p>
                    <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
                        {showArrow && <div className={`${iconClasses} hidden md:flex items-center justify-center`}>
                            <span className="-rotate-[45deg]" >{icon}</span>
                            </div>}
                    </div>
                </div>
    </>
  )
}

export default Button