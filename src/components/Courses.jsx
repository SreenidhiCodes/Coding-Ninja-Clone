import { useState } from 'react'
import { Clock, Users, ArrowRight } from 'lucide-react'

const tabs = ['For Professionals', 'For College Students']

const courseData = {
  'For Professionals': [
    { tag: 'Job bootcamp', title: 'Software Development with GenAI', partner: 'Coding Ninjas', duration: '6 months', enrolled: '30k+ enrolled' },
    { tag: 'Job bootcamp', title: 'Data Science with GenAI', partner: 'Coding Ninjas', duration: '9 months', enrolled: '10k+ enrolled' },
    { tag: 'IIT Certification', title: 'Data Analytics with GenAI', partner: 'IIT Guwahati', duration: '6 months', enrolled: '20k+ enrolled' },
    { tag: 'Certification', title: 'Advanced GenAI & Multi-Agent Systems', partner: 'Coding Ninjas', duration: '6 months', enrolled: '12k+ enrolled' },
  ],
  'For College Students': [
    { tag: 'IIT Certification', title: 'Advanced Data Analytics with GenAI', partner: 'IIT Mandi', duration: '6 months', enrolled: '10k+ enrolled' },
    { tag: 'IIT Certification', title: 'Software Development with DSA', partner: 'IIT Madras', duration: '9 months', enrolled: '9k+ enrolled' },
    { tag: 'IIT Certification', title: 'Advanced Data Structures & Algorithms', partner: 'IIT Madras', duration: '4 months', enrolled: '8k+ enrolled' },
    { tag: 'Certification', title: 'Data Analytics Internship Program', partner: 'IIT Patna', duration: '6 months', enrolled: 'Enrolling soon' },
  ],
}

export default function Courses() {
  const [active, setActive] = useState(tabs[0])

  return (
    <section id="explore" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--flame-2)]">Explore</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Find the course built for you</h2>
          </div>

          <div className="flex gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === tab
                    ? 'bg-gradient-to-r from-[var(--flame)] to-[var(--flame-2)] text-[var(--ink)]'
                    : 'text-[var(--muted)] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courseData[active].map((course) => (
            <article
              key={course.title}
              className="group flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 transition hover:border-[var(--flame)]/60"
            >
              <span className="w-fit rounded-full bg-[var(--panel-2)] px-3 py-1 text-[11px] font-semibold text-[var(--flame-2)]">
                {course.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug">{course.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{course.partner}</p>

              <div className="mt-5 flex items-center gap-4 text-xs text-[var(--muted)]">
                <span className="flex items-center gap-1"><Clock size={13} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Users size={13} /> {course.enrolled}</span>
              </div>

              <button className="mt-6 flex items-center gap-1 text-sm font-semibold text-white transition group-hover:gap-2">
                View program <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
