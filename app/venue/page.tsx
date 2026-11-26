export const metadata = { title: "Venue — NEXUS Festival" };

export default function VenuePage() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">The Venue</h1>
          <p className="text-gray-400">A world-class location for an unforgettable experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p className="text-gray-400">
              Downtown Los Angeles, California. Easy access from all major airports and public transportation.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Capacity</h2>
            <p className="text-gray-400">
              Up to 50,000 attendees across four stages and multiple experience zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
