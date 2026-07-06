import {
  Users,
  BellRing,
  GitPullRequestArrow,
  Archive,
  ShieldCheck,
  Building2,
  UserCheck,
  Network,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Role-based review stages",
    body: "Route every submission through clear, structured stages for homeowners, ARC committees, and boards.",
  },
  {
    icon: BellRing,
    title: "Status tracking & notifications",
    body: "Automated updates keep every stakeholder informed at each step—no manual follow-up required.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Revision & appeal lifecycle",
    body: "Handle resubmissions and appeals in a single, connected thread instead of new email chains.",
  },
  {
    icon: Archive,
    title: "Permanent searchable history",
    body: "Every request, comment, and decision is preserved and instantly searchable for years to come.",
  },
  {
    icon: ShieldCheck,
    title: "Legally defensible audit trail",
    body: "A complete, timestamped record of who decided what, when, and why—ready when you need it.",
  },
  {
    icon: Building2,
    title: "One portal, many communities",
    body: "Manage multiple neighborhoods and properties from a single centralized portal.",
  },
  {
    icon: UserCheck,
    title: "One homeowner account",
    body: "Homeowners with properties in multiple participating neighborhoods use a single login.",
  },
  {
    icon: Network,
    title: "Unified for management companies",
    body: "Oversee many neighborhoods from one portal—no separate URLs or neighborhood-specific systems.",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">The solution</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Bring Structure to Your ARC Workflow
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Everything the architectural review process needs—organized into one
            consistent, transparent, and durable system.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
