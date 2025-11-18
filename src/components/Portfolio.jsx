import { motion } from 'framer-motion'

const projects = [
  { title: 'Kairo Brand System', tag: 'Branding', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1740&auto=format&fit=crop', url: '#' },
  { title: 'Flux UI Kit', tag: 'UI/UX', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1740&auto=format&fit=crop', url: '#' },
  { title: 'Pulse Motion Pack', tag: 'Motion', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1740&auto=format&fit=crop', url: '#' },
  { title: 'Lumen Website', tag: 'Digital', image: 'https://images.unsplash.com/photo-1695717242241-023cdbf2af9f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYWlybyUyMEJyYW5kJTIwU3lzdGVtfGVufDB8MHx8fDE3NjM0NjAyMTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', url: '#' },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-blue-400 hover:text-blue-300">See all projects →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur">{p.tag}</span>
                <h3 className="mt-2 text-white text-lg font-semibold">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-600/20 to-fuchsia-600/20" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
