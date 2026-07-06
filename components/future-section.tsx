import { Smartphone, Radio } from "lucide-react"

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-friendly ARC submissions",
    body: "Homeowners can submit requests, upload plans, and respond to feedback from any device—no desktop required.",
  },
  {
    icon: Radio,
    title: "Real-time notifications & status",
    body: "Instant updates keep homeowners informed the moment their review advances, so no one is left guessing.",
  },
]

export function FutureSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Future ready</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for Today&apos;s ARC Process. Ready for Tomorrow.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              HOA ARC Tracker continues to evolve with features that make the ARC
              experience faster, more convenient, and more connected for everyone
              involved.
            </p>
          </div>

          <div className="space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
