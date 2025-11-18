import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something remarkable</h2>
            <p className="mt-3 text-slate-300 max-w-xl">Tell us about your project and we’ll reach out to schedule a call. We typically respond within one business day.</p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-medium">hello@uben.studio</a>
              <div className="text-slate-400">or</div>
              <a href="#" className="px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:bg-white/5">@uben.studio</a>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} onSubmit={(e)=>{e.preventDefault(); e.currentTarget.reset();}} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Project Details</label>
                <textarea rows="5" className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-600" />
              </div>
            </div>
            <button className="mt-4 inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-white font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition-shadow">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
