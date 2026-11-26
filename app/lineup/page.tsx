import { LineupGrid } from "@/components/lineup-grid";
import { genres } from "@/lib/lineup";

export const metadata = { title: "Lineup — NEXUS Festival" };

export default function LineupPage() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">The Lineup</h1>
          <p className="text-gray-400">World-class artists from around the globe</p>
        </div>

        <LineupGrid />
      </div>
    </div>
  );
}
