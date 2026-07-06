import { Check, X, ArrowDown, Layers, ShieldCheck, BookMarked } from "lucide-react"

const isNot = [
  "Accounting software",
  "A replacement for your HOA management system",
  "Property management or HOA ERP",
]

const isFor = [
  "Enhances your operational workflows",
  "Organizes the complete ARC lifecycle",
  "Improves documentation quality",
  "Reduces operational risk",
  "Preserves institutional knowledge",
  "Fits easily into existing HOA operations",
]

const flow = [
  { icon: Layers, label: "Current HOA Software", sub: "Accounting, dues, communications" },
  { icon: ShieldCheck, label: "HOA ARC Tracker", sub: "Structured ARC governance layer" },
  { icon: BookMarked, label: "Better ARC Governance", sub: "Transparent, defensible, durable" },
]

export function ComplementSection() {
  return (
    <section id="complement" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Works alongside</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Designed to Complement Your Existing HOA Software
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            HOA ARC Tracker enhances—it does not replace. It adds a dedicated
            governance layer on top of the systems you already rely on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">What it is not</h3>
            <ul className="mt-5 space-y-3">
              {isNot.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <X className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-accent/50 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">What it does</h3>
            <ul className="mt-5 space-y-3">
              {isFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* visual flow */}
        <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center">
          {flow.map((step, i) => {
            const Icon = step.icon
            const highlight = i === 1
            return (
              <div key={step.label} className="flex flex-col items-center gap-4 md:flex-row">
                <div
                  className={`flex w-full flex-col items-center rounded-2xl border p-6 text-center shadow-sm md:w-56 ${
                    highlight
                      ? "border-primary/30 bg-primary text-primary-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl ${
                      highlight ? "bg-primary-foreground/15 text-primary-foreground" : "bg-accent text-primary"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <p className={`mt-3 text-sm font-semibold ${highlight ? "" : "text-foreground"}`}>
                    {step.label}
                  </p>
                  <p className={`mt-1 text-xs ${highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {step.sub}
                  </p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowDown className="size-5 rotate-0 text-muted-foreground md:-rotate-90" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
