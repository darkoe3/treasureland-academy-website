"use client";

import Link from "next/link";
import { Menu, Phone, School } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { navLinks, school } from "@/lib/schoolData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-purple-brand/10 bg-white/95 backdrop-blur">
      <div className="container-pad flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Treasureland Academy home">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-purple-brand/10 bg-purple-brand text-yellow-brand">
            <School size={27} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black leading-tight text-purple-brand md:text-lg">{school.name}</span>
            <span className="block truncate text-xs font-semibold text-slate-500">{school.motto}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-brand/5 hover:text-purple-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={school.phoneHref}
          className="hidden items-center gap-2 rounded-md bg-purple-brand px-4 py-2 text-sm font-bold text-white hover:bg-purple-brand/90 xl:inline-flex"
        >
          <Phone size={17} aria-hidden="true" />
          Call Us
        </a>
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-purple-brand hover:bg-purple-brand/10 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
