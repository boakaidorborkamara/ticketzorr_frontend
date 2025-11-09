const features = [
  {
    icon: "🎟️",
    title: "Smart Ticketing",
    description:
      "Sell tickets online with QR codes and PIN verification. No more fake tickets. Works offline via USSD for everyone!",
  },
  {
    icon: "🏢",
    title: "Venue Marketplace",
    description:
      "Browse and book verified event halls, parks, and spaces with real photos, pricing, and availability calendars.",
  },
  {
    icon: "🎤",
    title: "Vendor Directory",
    description:
      "Find trusted DJs, caterers, makeup artists, decorators, and more—all with reviews and verified profiles.",
  },
  {
    icon: "📲",
    title: "USSD Access",
    description:
      "Buy tickets using your button phone—no smartphone or internet needed. Just dial our USSD code!",
  },
  {
    icon: "🔐",
    title: "Secure Payments",
    description:
      "Pay with mobile money, bank transfer, or cash. All transactions are secure and tracked.",
  },
  {
    icon: "📈",
    title: "Event Analytics",
    description:
      "Organizers get real-time sales data, attendee insights, and marketing tools to grow their events.",
  },
  {
    icon: "🎉",
    title: "Event Discovery",
    description:
      "Discover concerts, conferences, parties, and more happening near you. Never miss another event!",
  },
  {
    icon: "✅",
    title: "Easy Check-in",
    description:
      "Scan QR codes or enter PINs at the door. Fast, secure entry for all your attendees.",
  },
  {
    icon: "🛍️",
    title: "Merch Store",
    description:
      "Sell event merchandise directly through your event page. Manage inventory and fulfill orders easily.",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Your Complete Event Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to organize, discover, and enjoy events—built
            for Africa
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
