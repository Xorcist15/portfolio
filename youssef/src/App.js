
import './App.css';
import { Element } from 'react-scroll';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main id="container" className="flex-1 overflow-y-auto scroll-smooth">
        <Element name="about">
          <section>
            <About />
          </section>
        </Element>
        <Element name="projects">
          <section>
            <Projects />
          </section>
        </Element>
        <Element name="contact">
          <section>
            <Contact />
          </section>
        </Element>
      </main>
    </div>
  );
}
