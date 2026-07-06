import Image from "next/image"
import { Mail } from "lucide-react"
import { DemoButton } from "@/components/demo-button"

const productLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Why Centralization", href: "#centralization" },
  { label: "Integrations", href: "#complement" },
]

const companyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="HOA ARC Tracker logo"
                width={36}
                height={36}
                className="size-9 object-contain"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                HOA ARC Tracker
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The centralized Architectural Review Committee governance platform
              that helps HOAs organize, track, and preserve the complete ARC
              review lifecycle—alongside your existing HOA software.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <DemoButton className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Request a Demo
                </DemoButton>
              </li>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:contact@hoaarctracker.com"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" />
                  contact@hoaarctracker.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} HOA ARC Tracker. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
