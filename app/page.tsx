import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { FoundingCommunitiesBanner } from "@/components/founding-communities-banner"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { CentralizationSection } from "@/components/centralization-section"
import { ComplementSection } from "@/components/complement-section"
import { FutureSection } from "@/components/future-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>
        <HeroSection />
        <FoundingCommunitiesBanner />
        <ProblemSection />
        <SolutionSection />
        <CentralizationSection />
        <ComplementSection />
        <FutureSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
