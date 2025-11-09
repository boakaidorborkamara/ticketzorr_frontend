import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: "🎫",
    title: "Ticket Fraud Everywhere",
    description:
      "Fake tickets and revenue loss hurt organizers and attendees. No more WhatsApp chaos or counterfeit entries.",
  },
  {
    icon: "🔍",
    title: "Can&apos;t Find Events",
    description:
      "Miss out on amazing events happening around you because there&apos;s no central place to discover them.",
  },
  {
    icon: "🤝",
    title: "Unreliable Vendors",
    description:
      "Waste hours searching for caterers, DJs, and venues with no reviews or verification system.",
  },
  {
    icon: "📱",
    title: "No Internet Access",
    description:
      "Can&apos;t buy tickets or book services without internet and payment options that actually work in Africa.",
  },
  {
    icon: "📊",
    title: "Zero Data Insights",
    description:
      "Organizers have no idea who&apos;s attending or how sales are performing. Manual tracking is exhausting.",
  },
  {
    icon: "💰",
    title: "Payment Headaches",
    description:
      "Limited payment options and manual cash handling make transactions risky and inconvenient.",
  },
]

export function PainPoints() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            We Know Event Planning is Hard
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From fake tickets to unreliable vendors, we&apos;re solving the biggest
            problems in African event management
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-0 p-8 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className="text-5xl mb-6">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
