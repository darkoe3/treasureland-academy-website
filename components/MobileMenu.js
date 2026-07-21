"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { academicsMenuItems, mobileNavLinks, school } from "@/lib/schoolData";

export default function MobileMenu({ open, onClose }) {
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const pathname = usePathname();

  if (!open) return null;

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const menuItemClass = (active = false) =>
    [
      "flex min-h-12 w-full items-center rounded-md px-4 py-3 text-base font-semibold text-purple-brand",
      "hover:bg-purple-brand/5 focus-visible:bg-purple-brand/5 active:bg-yellow-brand/20",
      active ? "border-l-4 border-gold-brand bg-purple-brand/5 pl-3" : "border-l-4 border-transparent"
    ].join(" ");

  return (
    <div id="mobile-navigation" className="fixed inset-0 z-50 bg-white xl:hidden">
      <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-purple-brand/10 p-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-purple-brand/10 bg-white">
              <Image
                src={school.logoSrc}
                alt={`${school.name} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain p-1"
              />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-purple-brand">{school.name}</p>
              <p className="truncate text-xs font-semibold text-purple-brand/75">{school.motto}</p>
            </div>
          </div>
          <button
            aria-label="Close navigation menu"
            onClick={onClose}
            className="rounded-md p-2 text-purple-brand hover:bg-purple-brand/5 active:bg-yellow-brand/20"
            aria-controls="mobile-navigation"
          >
            <X className="text-purple-brand" />
          </button>
        </div>
        <nav className="grid gap-2 p-4" aria-label="Mobile navigation">
          {mobileNavLinks.map((link) => {
            if (link.label === "Academics") {
              const academicsActive = isActiveLink(link.href);

              return (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setAcademicsOpen((current) => !current)}
                    className={`${menuItemClass(academicsActive)} justify-between text-left`}
                    aria-expanded={academicsOpen}
                  >
                    {link.label}
                    <ChevronDown size={18} aria-hidden="true" className={academicsOpen ? "rotate-180 text-purple-brand transition-transform" : "text-purple-brand transition-transform"} />
                  </button>
                  {academicsOpen ? (
                    <div className="ml-3 mt-2 grid gap-2 border-l border-gold-brand/35 pl-3">
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={menuItemClass(pathname === link.href)}
                      >
                        Academics Overview
                      </Link>
                      {academicsMenuItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={onClose}
                          className={menuItemClass(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={menuItemClass(isActiveLink(link.href))}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto grid gap-3 border-t border-purple-brand/10 p-4">
          <Link
            href="/admissions"
            onClick={onClose}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-purple-brand px-4 py-3 text-center text-base font-bold text-white hover:bg-purple-brand/90"
          >
            Apply Now
          </Link>
          <a
            href={school.schoolAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            aria-label="Launch the Treasureland School App in a new tab"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-gold-brand/60 px-4 py-3 text-center text-base font-bold text-purple-brand hover:bg-yellow-brand/25 active:bg-yellow-brand/35"
          >
            <ExternalLink size={18} className="text-purple-brand" aria-hidden="true" />
            Launch School App
          </a>
          <a href={school.phoneHref} className="text-center text-base font-semibold text-purple-brand hover:text-gold-brand">
            Call {school.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
