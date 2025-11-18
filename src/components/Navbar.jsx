import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-fuchsia-600 grid place-items-center shadow-[0_0_30px_rgba(99,102,241,0.4)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition">Uben Studios</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition-shadow">Get in touch</a>
        </nav>

        <button className="md:hidden text-slate-200" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white text-sm font-medium text-center">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
