import './App.css'
import Header from './components/common/Header'
import Hero from './feature/Hero/Hero'
import ProjectsSection from './feature/Projects/ProjectsSection'

function App() {

  return (
    <div className=" bg-terminal-grid font-sans text-white">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App
