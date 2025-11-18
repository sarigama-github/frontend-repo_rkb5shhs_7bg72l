import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Uben Studios. All rights reserved.</p>
          <div className="text-sm text-slate-400">Crafted with care and motion.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
