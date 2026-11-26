import { ScheduleTable } from "@/components/schedule-table";
import { days, stages } from "@/lib/schedule";

export const metadata = { title: "Schedule — NEXUS Festival" };

export default function SchedulePage() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Festival Schedule</h1>
          <p className="text-gray-400">Three days of non-stop music</p>
        </div>

        <ScheduleTable />
      </div>
    </div>
  );
}
