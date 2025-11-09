"use client"

import Link from "next/link"

export function Footer() {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("waitlist")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-2xl font-extrabold text-orange-500">
            TicketZorr
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="hover:text-orange-500 transition-colors"
            >
              Join Waitlist
            </a>
            <a
              href="mailto:hello@ticketzorr.com"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
            <Link
              href="/privacy"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-orange-500 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center opacity-70">
          <p>&copy; 2025 TicketZorr. All rights reserved. Built with ❤️ for Liberia.</p>
        </div>
      </div>
    </footer>
  )
}
