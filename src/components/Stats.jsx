const stats = [
  { value: '9+', label: 'Years transforming careers' },
  { value: '5000+', label: 'Students placed in MAANG companies' },
  { value: '1,100+', label: 'Hiring partner companies' },
  { value: '400+', label: 'Live jobs added monthly' },
]

export default function Stats() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--panel)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="flame-text text-4xl font-extrabold">{s.value}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
