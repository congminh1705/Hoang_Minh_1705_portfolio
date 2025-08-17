import { useEffect, useState } from "react"
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillsSection/SkillsMain'
import ProjectsMain from "./components/projectsSection/ProjectsMain"
import ContactMeMain from "./components/contactMeSection/ContactMeMain"
import FooterMain from "./components/footer/FooterMain"

import Intro from "./components/Intro"
function App() {

  const [showIntro, setShowIntro] = useState(true);

  // khóa scroll khi intro hiển thị
  useEffect(() => {
    const el = document.documentElement;
    if (showIntro) el.classList.add("overflow-hidden");
    else el.classList.remove("overflow-hidden");
    return () => el.classList.remove("overflow-hidden");
  }, [showIntro]);

  return (
    <main className='font-body'>
      {showIntro ? (

        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        
        <>
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
        <AboutMeMain/>
        <SkillsMain/>
        <ProjectsMain/>
        <ContactMeMain/>
        <FooterMain/>
        </>
      )}
    </main>
  )
}

export default App
