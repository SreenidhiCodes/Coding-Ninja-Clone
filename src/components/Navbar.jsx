import { useState } from 'react'
import { Flame, Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'For Professionals', hasMenu: true },
  { label: 'For College Students', hasMenu: true },
  { label: 'Job Bootcamp', hasMenu: false },
  { label: 'Code Arena', hasMenu: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--ink)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--flame)] to-[var(--flame-2)]">
            <Flame size={18} className="text-[var(--ink)]" strokeWidth={2.5} />
          </span>
          <span className="font-[Sora] text-lg font-bold tracking-tight">
            Coding<span className="flame-text">Ninjas</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <li key={item.label} className="flex cursor-pointer items-center gap-1 transition hover:text-white">
              {item.label}
              {item.hasMenu && <ChevronDown size={14} />}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium text-[var(--muted)] transition hover:text-white">
            Login
          </button>
          <button className="rounded-full bg-gradient-to-r from-[var(--flame)] to-[var(--flame-2)] px-5 py-2 text-sm font-semibold text-[var(--ink)] transition hover:opacity-90">
            Explore courses
          </button>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-[var(--muted)]">
            {navItems.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
            <li className="pt-2">
              <button className="w-full rounded-full bg-gradient-to-r from-[var(--flame)] to-[var(--flame-2)] px-5 py-2 text-sm font-semibold text-[var(--ink)]">
                Explore courses
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
