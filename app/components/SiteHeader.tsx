"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Personal Portfolio Website
// Shared navigation header (rendered at the top of every active page)
// Eliot Pearson Jr

// `match` lists the route prefixes that count as being "on" that tab,
// so project pages (/project_pages/...) keep PROJECTS highlighted
const navTabs = [
  { label: "PROJECTS", href: "/work", match: ["/work", "/project_pages"] },
  { label: "ABOUT", href: "/about", match: ["/about"] },
  { label: "CONTACT", href: "/contact", match: ["/contact"] },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    // sticky: stays pinned to the top of the screen while the page scrolls under it
    <header className="sticky top-0 z-50 w-full bg-white border-b border-stone-200">
      <nav
        aria-label="Main navigation"
        // h-15 (60px) is fixed so the bar keeps its size however large the text is
        className="mx-auto flex h-15 max-w-screen-2xl items-center gap-x-4 sm:gap-x-12 px-4 sm:px-8"
      >
        {/* name, top left; clicking it always goes back to the home page */}
        <Link
          href="/"
          className="text-xl sm:text-3xl font-extrabold tracking-tight text-stone-900 whitespace-nowrap"
        >
          Eliot Pearson Jr
        </Link>

        {/* tabs; the current page's tab is dark with a bar under it, others show the bar on hover/focus */}
        <ul className="flex items-stretch gap-x-3 sm:gap-x-9 self-stretch">
          {navTabs.map((tab) => {
            const isActive = tab.match.some(
              (prefix) => pathname === prefix || pathname?.startsWith(prefix + "/")
            );
            return (
              <li key={tab.href} className="flex">
                <Link
                  href={tab.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group relative flex items-center text-sm sm:text-lg font-semibold tracking-wider sm:tracking-widest transition-colors hover:text-stone-900 focus-visible:text-stone-900",
                    isActive ? "text-stone-900" : "text-stone-500",
                  ].join(" ")}
                >
                  {tab.label}
                  <span
                    className={[
                      "absolute inset-x-0 bottom-0 h-[3px] bg-rose-300 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
