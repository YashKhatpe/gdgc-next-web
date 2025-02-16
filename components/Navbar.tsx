"use client";

import Link from "next/link";
import Seperator from "./seperator";

export default function Navbar() {
  return (
    <div className="border-b">
      <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <Link href="/">
        <div className="flex items-center gap-2">
          <img src="/gdg-logo.webp" alt="GDG Logo" className="h-8" />
          <span className="font-medium hidden  sm:inline">
            Google Developers Group on Campus
          </span>
          <span className="font-medium sm:hidden">GDGC</span>
        </div>
          </Link>
        <div className="flex gap-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-gray-900">
            Events
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900">
            Team
          </Link>
        </div>
      </nav>
      {/* <Seperator/> */}
    </div>
  );
}
