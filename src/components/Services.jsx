import { motion } from 'framer-motion'
import { Palette, PenTool, MonitorSmartphone, Film } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Branding', text: 'Strategy, naming, identity systems and brand guidelines.' },
  { icon: MonitorSmartphone, title: 'UI/UX', text: 'Web and product design with a focus on interaction and clarity.' },
  { icon: Film, title: 'Motion', text: 'Explainers, product animations, and logo animations.' },
  { icon: PenTool, title: 'Art Direction', text: 'Visual concepts, creative direction and design leadership.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">We partner with teams to ship distinctive brands and digital products. Our capabilities flex to your needs.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-blue-600 to-fuchsia-600 grid place-items-center text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.text}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-600/10 to-fuchsia-600/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
