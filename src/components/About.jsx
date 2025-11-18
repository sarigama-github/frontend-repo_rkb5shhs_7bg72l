import { motion } from 'framer-motion'

const timeline = [
  { year: '2019', text: 'Uben Studios was founded with a mission to fuse strategy, aesthetics, and motion.' },
  { year: '2021', text: 'Expanded capabilities across branding, UI/UX, and animation.' },
  { year: '2023', text: 'Partnered with startups and global brands on award-winning work.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(236,72,153,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-slate-300">
              We are a team of designers, animators, and technologists crafting brands and interfaces that move. We design for emotion and impact.
            </p>
            <p className="mt-3 text-slate-400">Our approach blends research, storytelling, and expressive visuals to create distinct identities and digital experiences.</p>
          </motion.div>

          <div className="relative">
            <div className="border-l border-white/10 pl-6">
              {timeline.map((item, idx) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="relative pb-8">
                  <div className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600" />
                  <h3 className="text-white font-semibold">{item.year}</h3>
                  <p className="text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
