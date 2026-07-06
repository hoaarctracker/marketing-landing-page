"use client"

import type React from "react"
import { useCallback } from "react"

const CALENDLY_URL = "https://calendly.com/hoaarctracker/30min"
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css"
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

function ensureCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve()
      return
    }

    // Inject stylesheet once
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = CALENDLY_CSS
      document.head.appendChild(link)
    }

    // Script already loaded
    if (window.Calendly) {
      resolve()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`,
    )
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true })
      return
    }

    const script = document.createElement("script")
    script.src = CALENDLY_JS
    script.async = true
    script.addEventListener("load", () => resolve(), { once: true })
    document.body.appendChild(script)
  })
}

type DemoButtonProps = {
  children: React.ReactNode
  className?: string
}

export function DemoButton({ children, className }: DemoButtonProps) {
  const handleClick = useCallback(async () => {
    await ensureCalendlyAssets()
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }, [])

  return (
    <button type="button" onClick={handleClick} className={`cursor-pointer ${className ?? ""}`}>
      {children}
    </button>
  )
}
