import { TierCards } from "@/components/tier-cards";

export const metadata = { title: "Tickets — NEXUS Festival" };

export default function TicketsPage() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Get Your Tickets</h1>
          <p className="text-gray-400">Choose your perfect festival experience</p>
        </div>

        <TierCards />
      </div>
    </div>
  );
}
