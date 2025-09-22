export default function EngagementInvitation() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-2 py-6 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50"
      style={{
        backgroundImage: "url(/engagement-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/90 rounded-3xl shadow-2xl p-6 w-full max-w-lg text-center backdrop-blur-md border border-rose-200">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-rose-700 mb-2 tracking-wide">
            Engagement Invitation
          </h1>
          <div className="flex flex-col items-center justify-center mb-2">
            <span className="text-2xl font-bold text-gray-800">
              Dr. Gnanateja
            </span>
            <span className="text-lg font-semibold text-rose-500">&amp;</span>
            <span className="text-2xl font-bold text-gray-800">Dr. Swathi</span>
          </div>
          <p className="text-base text-gray-700 mb-2">
            Warmly invite you to join us in celebrating this joyous moment.
          </p>
          <p className="text-base text-gray-700 mb-2">
            Your gracious presence and blessings will make our special day even
            more memorable.
          </p>
        </div>
        <div className="mb-6 bg-rose-50 rounded-xl p-4 shadow">
          <h2 className="text-xl font-bold text-rose-600 mb-2">
            Engagement 💍
          </h2>
          <p className="text-base text-gray-800">
            On <span className="font-semibold">Friday, 3rd Oct 2025</span>
          </p>
          <p className="text-base text-gray-800">9 AM onwards …</p>
          <p className="text-base text-gray-800 mb-2">Followed by lunch</p>
        </div>
        <div className="mb-6 bg-amber-50 rounded-xl p-4 shadow">
          <h2 className="text-lg font-bold text-amber-700 mb-2">Venue 📍</h2>
          <p className="text-base text-gray-800 font-semibold">
            Vijayshree Resort, Hampi
          </p>
          <p className="text-sm text-gray-600">
            Hampi Road, V R Bhurat Nagari, Malpangudi, Hampi, Karnataka 583201
          </p>
          <a
            href="https://maps.app.goo.gl/tJv4BNQ541n18ztH7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            View on Google Maps
          </a>
        </div>
        <footer className="mt-6 text-xs text-gray-500">
          Made with ❤️ — Dr. Gnanateja &amp; Dr. Swathi
        </footer>
      </div>
    </div>
  );
}
