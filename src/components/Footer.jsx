import { Flame, Phone, Mail, MapPin } from 'lucide-react'

const socials = ['Instagram', 'LinkedIn', 'X', 'YouTube']

const columns = [
  {
    title: 'Products',
    links: ['Job Bootcamp', 'Code Arena', 'Professional Certifications', 'Student Certifications'],
  },
  {
    title: 'Company',
    links: ['Careers', 'Press release', 'Bug bounty', 'Reviews'],
  },
  {
    title: 'Community',
    links: ['10X Club', 'Student Chapters', 'Hire from us'],
  },
  {
    title: 'Legal',
    links: ['Privacy policy', 'Terms & conditions', 'Pricing & refund policy'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--flame)] to-[var(--flame-2)]">
                <Flame size={16} className="text-[var(--ink)]" strokeWidth={2.5} />
              </span>
              <span className="font-[Sora] text-base font-bold">
                Coding<span className="flame-text">Ninjas</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-[var(--muted)]">
              Outcome-focused, practice-based upskilling courses taught by industry faculty,
              with fast 1-on-1 doubt resolution.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)]">
              <li className="flex items-center gap-2"><Phone size={15} /> 1800-123-3598</li>
              <li className="flex items-center gap-2"><Mail size={15} /> contact@codingninjas.com</li>
              <li className="flex items-center gap-2"><MapPin size={15} /> Gurugram, Haryana</li>
            </ul>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <span
                  key={s}
                  className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-[var(--line)] text-[10px] font-semibold text-[var(--muted)] transition hover:border-[var(--flame)] hover:text-white"
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {col.links.map((link) => (
                  <li key={link} className="cursor-pointer transition hover:text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © Sunrise Mentors Pvt. Ltd. (clone for practice purposes)</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
