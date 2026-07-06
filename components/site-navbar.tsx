import Image from "next/image"
import { DemoButton } from "@/components/demo-button"

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Why Centralization", href: "#centralization" },
  { label: "Integrations", href: "#complement" },
]

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
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
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            Sign in
          </a>
          <DemoButton className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-md">
            Request a Demo
          </DemoButton>
        </div>
      </div>
    </header>
  )
}
