import Navbar from './components/Navbar/Navbar'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Eyes from './components/Eyes/Eyes'
import FeaturedP from './components/FeaturedP/FeaturedP'
import Card from './components/Cards/Card'
import StartProject from './components/StartProject/StartProject'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className="w-full h-screen ">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedP/>
      <Card/>
      <StartProject/>
      <Footer/>
    </div>
    </>
  )
}

export default App
