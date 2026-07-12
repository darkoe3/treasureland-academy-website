"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navLinks, school } from "@/lib/schoolData";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-purple-brand/35 backdrop-blur-sm lg:hidden">
      <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-purple-brand/10 p-4">
          <div>
            <p className="text-sm font-bold text-purple-brand">{school.name}</p>
            <p className="text-xs text-slate-500">{school.motto}</p>
          </div>
          <button
            aria-label="Close navigation menu"
            onClick={onClose}
            className="rounded-full p-2 text-purple-brand hover:bg-purple-brand/10"
          >
            <X />
          </button>
        </div>
        <nav className="grid gap-1 p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-md px-3 py-3 font-semibold text-slate-700 hover:bg-mist hover:text-purple-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <a
            href={school.phoneHref}
            className="block rounded-md bg-purple-brand px-4 py-3 text-center font-bold text-white hover:bg-purple-brand/90"
          >
            Call {school.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
