import { Zap, ArrowRight, Users, Award, TrendingUp } from 'lucide-react'

const partners = ['Gemini', 'FastAPI', 'LangChain', 'OpenAI', 'CrewAI', 'Node.js', 'PyTorch', 'AWS']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-10">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--flame), transparent 70%)' }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-1.5 text-xs font-semibold text-[var(--flame-2)]">
            <Zap size={14} /> Ready to 10X your career
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Give your career an <span className="flame-text">unfair advantage</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-[var(--muted)]">
            Structured, practice-based upskilling courses taught by faculty from top tech
            companies, built around the AI tools that are actually reshaping the job market.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--flame)] to-[var(--flame-2)] px-6 py-3 font-semibold text-[var(--ink)] transition hover:opacity-90">
              Explore offerings <ArrowRight size={18} />
            </button>
            <button className="rounded-full border border-[var(--line)] px-6 py-3 font-semibold text-white transition hover:border-[var(--flame)]">
              Book a free webinar
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-[var(--flame-2)]" />
              <span><strong className="text-white">1,50,000+</strong> <span className="text-[var(--muted)]">alumni</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-[var(--flame-2)]" />
              <span><strong className="text-white">4,400+</strong> <span className="text-[var(--muted)]">colleges</span></span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-[var(--flame-2)]" />
              <span><strong className="text-white">95%</strong> <span className="text-[var(--muted)]">placement rate</span></span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <p className="text-sm font-semibold text-[var(--muted)]">Recommended for you</p>
            <span className="rounded-full bg-[var(--flame)]/15 px-3 py-1 text-xs font-semibold text-[var(--flame-2)]">
              Job Bootcamp
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold">Software Development with GenAI</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Job-ready, AI-infused curriculum with 15+ industry projects and live mentorship.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {[
              ['15+', 'Live projects'],
              ['95%', 'Placement rate'],
              ['1:1', 'Doubt support'],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl bg-[var(--panel-2)] p-3">
                <p className="text-lg font-bold text-[var(--flame-2)]">{stat}</p>
                <p className="mt-1 text-[11px] text-[var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-full bg-white py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--paper)]">
            Visit course page
          </button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl overflow-hidden">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
          The right AI tools, built into your curriculum
        </p>
        <div className="flex w-max gap-12 marquee">
          {[...partners, ...partners].map((p, i) => (
            <span key={`${p}-${i}`} className="whitespace-nowrap text-lg font-semibold text-[var(--muted)]/60">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
