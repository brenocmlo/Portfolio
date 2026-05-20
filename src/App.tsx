import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-slate-100 selection:bg-accent-cyan/20 selection:text-accent-cyan overflow-hidden">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Landing Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
