"use client"

import { useEffect, useState } from "react"
import { X, Loader2, CheckCircle2 } from "lucide-react"

const WEB3FORMS_ACCESS_KEY = "0a20c39f-8209-4e4d-b8f8-2613c666ed0e"

type Status = "idle" | "sending" | "success" | "error"

export function FoundingApplicationForm({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Lock body scroll and enable Escape-to-close while the modal is open
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setStatus("success")
        event.currentTarget.reset()
      } else {
        setStatus("error")
        setErrorMessage(data.message ?? "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  const closeModal = () => {
    setOpen(false)
    // Reset status shortly after close so the form is fresh next time
    setTimeout(() => setStatus("idle"), 200)
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-pointer ${className ?? ""}`}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="founding-form-title"
        >
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close application form"
            onClick={closeModal}
            className="absolute inset-0 cursor-default bg-foreground/40 backdrop-blur-sm"
          />

          {/* modal panel */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex size-8 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center py-8 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-6" />
                </span>
                <h2
                  id="founding-form-title"
                  className="mt-4 text-xl font-bold tracking-tight text-foreground"
                >
                  Application received
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Thanks for your interest in the Founding Communities Program.
                  We&apos;ll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="founding-form-title"
                  className="text-balance text-xl font-bold tracking-tight text-foreground md:text-2xl"
                >
                  Apply as a Founding Community
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Tell us about your community and we&apos;ll follow up about
                  the Founding Communities Program.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <input
                    type="hidden"
                    name="subject"
                    value="New Founding Community Application"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="HOA ARC Tracker Website"
                  />

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="management_company"
                      className="text-sm font-medium text-foreground"
                    >
                      Management Company
                    </label>
                    <input
                      id="management_company"
                      type="text"
                      name="management_company"
                      required
                      placeholder="Management Company"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="neighborhood_name"
                      className="text-sm font-medium text-foreground"
                    >
                      Neighborhood Name{" "}
                      <span className="font-normal text-muted-foreground">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="neighborhood_name"
                      type="text"
                      name="neighborhood_name"
                      placeholder="Neighborhood Name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="number_of_homes"
                      className="text-sm font-medium text-foreground"
                    >
                      Number of Homes{" "}
                      <span className="font-normal text-muted-foreground">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="number_of_homes"
                      type="text"
                      name="number_of_homes"
                      placeholder="Approx. number of homes"
                      className={inputClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Why are you interested?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us why you're interested"
                      className={`${inputClasses} resize-y`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" && (
                      <Loader2 className="size-4 animate-spin" />
                    )}
                    {status === "sending"
                      ? "Sending..."
                      : "Apply as a Founding Community"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
