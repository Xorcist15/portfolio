
import './App.css';
import { Element } from 'react-scroll';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main id="container" className="overflow-x-hidden scroll-smooth w-full">

        <Element id="home" name="home" className="section">
          <section> <Home /> </section>
        </Element>

        <Element id="about" name="about" className="section">
          <section> <About /> </section>
        </Element>

        <Element id="projects" name="projects" className="section">
          <section> <Projects /> </section>
        </Element>
        
        <Element id="contact" name="contact" className="section">
          <section> <Contact /> </section>
        </Element>

      </main>
    </div>
  );
}
