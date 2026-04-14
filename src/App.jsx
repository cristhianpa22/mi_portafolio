import './App.css'
import Header from './components/common/Header'
import Hero from './feature/Hero/Hero'
import ProjectsSection from './feature/Projects/ProjectsSection'
import StackSection from './feature/stack/StackSecion'
import AboutSection from './feature/about/AboutSection'

function App() {

  return (
    <div className=" bg-terminal-grid font-sans text-white">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <StackSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App
