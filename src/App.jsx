import './App.css'
import Header from './components/common/Header'
import Hero from './feature/Hero/Hero'

function App() {

  return (
    <div className="h-screen bg-terminal-grid font-sans text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App
