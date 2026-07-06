import { MailWarning, FolderX, FileSearch, Repeat, MessagesSquare, KeyRound } from "lucide-react"

const painPoints = [
  {
    icon: MailWarning,
    title: "Endless email chains",
    body: "Review conversations become impossible to follow across dozens of scattered threads.",
  },
  {
    icon: FolderX,
    title: "Scattered documents",
    body: "Plans and approvals live in inboxes and shared drives no one can reliably find.",
  },
  {
    icon: FileSearch,
    title: "Impossible to audit",
    body: "Decisions become difficult to reconstruct or defend years after they were made.",
  },
  {
    icon: Repeat,
    title: "Lost in transitions",
    body: "Records disappear when management companies change and history walks out the door.",
  },
  {
    icon: MessagesSquare,
    title: "Inconsistent communication",
    body: "Homeowners get different answers depending on who they happen to reach.",
  },
  {
    icon: KeyRound,
    title: "Too many logins",
    body: "Separate portals and multiple accounts create unnecessary friction for everyone.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">The problem</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The ARC Process Is Broken
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Most architectural review still runs on email, spreadsheets, and
            memory. The result is friction, risk, and lost institutional knowledge.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
