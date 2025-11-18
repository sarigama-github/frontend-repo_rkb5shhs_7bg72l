import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[13px] text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 animate-pulse" />
            Future-forward design studio
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl leading-[1.05] font-extrabold tracking-tight text-white">
            Design that moves you
          </h1>

          <p className="mt-5 max-w-xl text-slate-300 text-lg">
            Uben Studios crafts brand identities, digital products, and motion that feel alive. We blend strategy, aesthetics, and interaction for memorable experiences.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-fuchsia-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 font-medium">View our work</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
