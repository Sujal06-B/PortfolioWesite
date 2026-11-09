import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
import Hero from '../sections/Hero'
import OpenTo from '../sections/OpenTo'
import About from '../sections/About'
import Services from '../sections/Services'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Testimonials from '../sections/Testimonials'
import Achievements from '../sections/Achievements'
import Certifications from '../sections/Certifications'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function HomePage() {
  return (
    <>
      <div className="bg-field" aria-hidden />
      <div className="grid-noise" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <OpenTo />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </>
  )
}
