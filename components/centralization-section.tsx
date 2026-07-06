import { Landmark, ArrowLeftRight, Gauge, Sparkles, Infinity as InfinityIcon, UsersRound } from "lucide-react"

const points = [
  {
    icon: Landmark,
    title: "Community-owned records",
    body: "Historical ARC decisions belong to the community—not to whichever vendor happens to hold them today.",
  },
  {
    icon: ArrowLeftRight,
    title: "Smooth transitions",
    body: "Change management companies without losing a single decision, document, or precedent.",
  },
  {
    icon: Gauge,
    title: "Reduced operational friction",
    body: "One system replaces the patchwork of inboxes, drives, and spreadsheets slowing your team down.",
  },
  {
    icon: Sparkles,
    title: "Consistent experience",
    body: "Every homeowner moves through the same clear, predictable review process.",
  },
  {
    icon: InfinityIcon,
    title: "Governance continuity",
    body: "Institutional knowledge persists across board terms, volunteers, and vendor changes.",
  },
  {
    icon: UsersRound,
    title: "Everyone on one platform",
    body: "Boards, ARC committees, homeowners, and management companies share the same secure source of truth.",
  },
]

export function CentralizationSection() {
  return (
    <section id="centralization" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary/80"
      />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Why centralization matters
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            One Platform. Long-Term Community Knowledge.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            Centralization is not just convenient—it is what turns scattered
            activity into durable, defensible governance that outlasts any single
            board or vendor.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{point.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 sm:grid-cols-2">
          <p className="text-sm leading-relaxed text-primary-foreground/90">
            <span className="font-semibold text-primary-foreground">Homeowners with multiple properties</span>{" "}
            access everything through one account—no juggling logins across neighborhoods.
          </p>
          <p className="text-sm leading-relaxed text-primary-foreground/90">
            <span className="font-semibold text-primary-foreground">Management companies</span> eliminate
            neighborhood-specific portals while maintaining secure, role-based access.
          </p>
        </div>
      </div>
    </section>
  )
}
