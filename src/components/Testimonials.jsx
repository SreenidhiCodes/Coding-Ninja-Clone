import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The GenAI program pushed my understanding from the basics all the way to real, applied confidence. It felt less like a course and more like a mentorship.',
    name: 'Vaibhav Dubey',
    role: 'SMTS at Salesforce',
  },
  {
    quote:
      'What stood out was the pace of doubt resolution — I never stayed stuck on a concept for more than a day thanks to the teaching assistants.',
    name: 'Shivani',
    role: 'Software Engineer',
  },
  {
    quote:
      'The mock interviews and resume feedback made the difference. I walked into my first tech interview already knowing what to expect.',
    name: 'Simran',
    role: 'Data Analyst',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--flame-2)]">Success stories</p>
        <h2 className="mt-2 max-w-xl text-3xl font-bold sm:text-4xl">Built by learners who went on to do the work</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <Quote size={22} className="text-[var(--flame-2)]" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--line)] pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-[var(--muted)]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
