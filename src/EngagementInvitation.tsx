export default function EngagementInvitation() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">
      <div
        className="bg-white/80 rounded-2xl shadow-xl p-6 w-full max-w-md text-center backdrop-blur-sm"
        style={{
          backgroundImage: "url(/engagement-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl font-bold mb-2 text-rose-700">
          You're Invited! this is dev with workflow
        </h1>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Raju &amp; [Partner]
        </h2>
        <p className="mb-4 text-gray-700">
          Join us to celebrate our engagement
        </p>
        <div className="mb-4">
          <div className="mb-2">
            <span className="block text-xs uppercase text-gray-500">When</span>
            <span className="block font-medium text-gray-800">
              Saturday, 12th Oct 2025
            </span>
            <span className="block text-sm text-gray-600">6:00 PM onwards</span>
          </div>
          <div>
            <span className="block text-xs uppercase text-gray-500">Where</span>
            <span className="block font-medium text-gray-800">
              Sunrise Banquet Hall
            </span>
            <span className="block text-sm text-gray-600">
              Koramangala, Bangalore
            </span>
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-xs uppercase text-gray-500">
            Sub events
          </span>
          <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside text-left">
            <li>Haldi &amp; Mehendi - 3:00 PM</li>
            <li>Engagement Ceremony - 6:00 PM</li>
            <li>Reception Dinner - 8:00 PM</li>
          </ul>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <a
            href="mailto:invite@example.com?subject=RSVP%20for%20Engagement"
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-md font-semibold text-white"
          >
            RSVP via Email
          </a>
          <a
            href="tel:+911234567890"
            className="px-4 py-2 border rounded-md text-rose-700 font-semibold"
          >
            Call Organizer
          </a>
        </div>
        <div className="mb-2 text-sm text-gray-700">
          <p>Contact: +91 12345 67890 (Raju)</p>
          <p className="mt-1">Dress code: Festive Indian Attire</p>
        </div>
        <footer className="mt-4 text-xs text-gray-500">
          Made with ❤️ — Please RSVP by 1st Oct 2025
        </footer>
      </div>
    </div>
  );
}
