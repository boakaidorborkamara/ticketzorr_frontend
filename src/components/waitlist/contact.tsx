import { Mail, MessageCircle, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Have Questions?
        </h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Reach out and let&apos;s chat about how
          TicketZorr can help you.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8 text-orange-500" />
            <a
              href="mailto:hello@ticketzorr.com"
              className="text-lg hover:text-orange-500 transition-colors"
            >
              hello@ticketzorr.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircle className="w-8 h-8 text-orange-500" />
            <a
              href="https://wa.me/231770322706"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-orange-500 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-orange-500" />
            <span className="text-lg">Monrovia, Liberia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
