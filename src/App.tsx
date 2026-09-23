import NavBar from './components/NavBar/NavBar';
import Dock from './components/Dock/Dock';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { sections } from './data/sections';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  // One scrollspy for both navigations: it also keeps the URL hash in sync.
  const activeSection = useScrollSpy(sections);

  return (
    <>
      <NavBar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Dock activeSection={activeSection} />
    </>
  );
}

export default App;
