import { ArrowRight, CheckCircle2 } from "lucide-react"
import { DemoButton } from "@/components/demo-button"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
      />
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-16 text-center md:pb-28 md:pt-24">
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="size-1.5 rounded-full bg-primary" />
            Centralized ARC governance for modern HOAs
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Professionalize Your ARC Governance
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A centralized platform that structures, tracks, and preserves the
            complete ARC decision lifecycle across one or many communities.
          </p>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Whether you manage one neighborhood or dozens, HOA ARC Tracker
            provides one centralized portal where homeowners, ARC committees,
            HOA boards, and management companies collaborate through a
            transparent, consistent review process.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DemoButton className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-md">
              Request a Demo
              <ArrowRight className="size-4" />
            </DemoButton>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              Works with your existing HOA software
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              Legally defensible records
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
