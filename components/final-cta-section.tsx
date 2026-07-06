import { ArrowRight } from "lucide-react"
import { DemoButton } from "@/components/demo-button"

export function FinalCtaSection() {
  return (
    <section id="demo" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-accent/70 to-background px-6 py-16 text-center shadow-sm md:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Bring Clarity to Your Community&apos;s ARC Process
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Give your HOA board, ARC committee, management company, and
              homeowners a centralized platform that makes architectural review
              organized, transparent, and easy to manage—whether you&apos;re serving
              one community or many.
            </p>

            <div className="mt-8 flex justify-center">
              <DemoButton className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-md">
                Schedule a Live Demo
                <ArrowRight className="size-4" />
              </DemoButton>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              See how HOA ARC Tracker can modernize your ARC governance without
              replacing your existing HOA software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
