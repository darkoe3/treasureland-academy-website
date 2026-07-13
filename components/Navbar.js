"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import { academicsMenuItems, navLinks, school } from "@/lib/schoolData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const academicsRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (academicsRef.current && !academicsRef.current.contains(event.target)) {
        setAcademicsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setAcademicsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-purple-brand/10 bg-white/95 backdrop-blur">
      <div className="container-pad flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Treasureland Academy home">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-purple-brand/10 bg-white">
            <Image
              src={school.logoSrc}
              alt={`${school.name} logo`}
              width={56}
              height={56}
              priority
              className="h-full w-full object-contain p-1"
            />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black leading-tight text-purple-brand md:text-lg">{school.name}</span>
            <span className="block truncate text-xs font-semibold text-slate-500">{school.motto}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            if (link.label === "Academics") {
              return (
                <div
                  key={link.href}
                  ref={academicsRef}
                  className="relative"
                  onMouseEnter={() => setAcademicsOpen(true)}
                  onMouseLeave={() => setAcademicsOpen(false)}
                  onFocus={() => setAcademicsOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setAcademicsOpen(false);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-brand/5 hover:text-purple-brand"
                    aria-haspopup="true"
                    aria-expanded={academicsOpen}
                  >
                    {link.label}
                    <ChevronDown size={15} aria-hidden="true" className={academicsOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                  </Link>
                  {academicsOpen ? (
                    <div className="absolute left-0 top-full z-50 mt-3 w-[320px] rounded-md border border-purple-brand/10 bg-white p-3 shadow-soft">
                      <div className="grid gap-1">
                        {academicsMenuItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setAcademicsOpen(false)}
                            className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-purple-brand focus-visible:bg-mist focus-visible:text-purple-brand"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-slate-700 hover:bg-purple-brand/5 hover:text-purple-brand"
              >
                {link.label}
              </Link>
            );
          })}
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
