import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import ContactSection from "./components/sections/Contact"
import HeroSection from "./components/sections/Hero"
import Project from "./components/sections/Project"
import Skills from "./components/sections/Skills"
import WhatsAppButton from "./components/common/WhatsAppButton"
import About from "./components/sections/About"


function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
