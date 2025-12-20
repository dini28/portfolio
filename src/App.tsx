import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Project from "./components/sections/Project"
import Skills from "./components/sections/Skills"
import WhatsAppButton from "./components/common/WhatsAppButton"
import About from "./components/sections/About"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
