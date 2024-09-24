

const Heading = ({text,classes}) => {
  return (
    <>
        <h1 className={`${classes}  uppercase  font-['Founders_Grotesk '] tracking-tighter leading-none font-semibold` }>{text}</h1>
    </>
  )
}

export default Heading