import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              NEXUS
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              An immersive electronic music festival experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Lineup", "Schedule", "Tickets", "Experience", "Venue", "FAQ"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/${label.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/${label.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; 2024 NEXUS Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
