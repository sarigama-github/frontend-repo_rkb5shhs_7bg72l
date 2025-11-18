import { motion } from 'framer-motion'

const posts = [
  { title: 'Designing with Motion: A Primer', date: 'Oct 3, 2024' },
  { title: 'Brand Systems that Scale', date: 'Sep 18, 2024' },
  { title: 'Micro-interactions that Matter', date: 'Aug 30, 2024' },
]

export default function Blog() {
  return (
    <section id="blog" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Latest from the Studio</h2>
          <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Visit the blog →</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-blue-600/30 to-fuchsia-600/30 group-hover:from-blue-600/40 group-hover:to-fuchsia-600/40 transition" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-400">{p.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
