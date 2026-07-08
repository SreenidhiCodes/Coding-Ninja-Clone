import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-[var(--panel)] to-[var(--panel-2)] px-8 py-14 text-center">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          Ready to transform your career?
        </h2>
        <p className="max-w-lg text-[var(--muted)]">
          Talk to a program advisor and find the course that matches where you are today
          and where you want to be in six months.
        </p>
        <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--flame)] to-[var(--flame-2)] px-7 py-3 font-semibold text-[var(--ink)] transition hover:opacity-90">
          Explore our courses now <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
