import { Rocket, CheckCircle2, Sparkles } from "lucide-react"
import { FoundingApplicationForm } from "@/components/founding-application-form"

export function FoundingCommunitiesBanner() {
  const benefits = [
    "12 months of complimentary access",
    "Priority onboarding",
    "Provide feedback that shapes future releases",
  ]

  return (
    <section aria-labelledby="founding-communities-heading" className="px-6 pb-4">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-accent/70 p-6 shadow-sm md:p-8">
          {/* Limited Time badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              <Sparkles className="size-3.5" />
              Limited Time
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-medium text-accent-foreground">
              Limited to the first 3 neighborhoods
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2
                id="founding-communities-heading"
                className="flex items-center gap-2 text-balance text-xl font-bold tracking-tight text-foreground md:text-2xl"
              >
                <Rocket className="size-5 text-primary" />
                Founding Communities Program
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                We&apos;re inviting the first 3 neighborhoods to join HOA ARC
                Tracker as Founding Communities. Selected communities receive:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="inline-flex items-start gap-2 text-sm font-medium text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0">
              <FoundingApplicationForm className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-md">
                Apply as a Founding Community
              </FoundingApplicationForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
