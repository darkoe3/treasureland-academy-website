import Link from "next/link";
import Image from "next/image";
import { Globe, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";
import { academicLevelLabel, academicLevelNames, navLinks, school } from "@/lib/schoolData";

export default function Footer() {
  return (
    <footer className="bg-purple-brand text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-soft">
              <Image
                src={school.logoSrc}
                alt={`${school.name} logo`}
                width={64}
                height={64}
                className="h-full w-full object-contain p-1"
              />
            </span>
            <div>
              <p className="text-lg font-black">{school.name}</p>
              <p className="text-sm text-yellow-brand">{school.motto}</p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-white/75">
            A Montessori, STEM and ICT enriched school serving {academicLevelLabel} learners in Kasoa-Brigade.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, Send].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social media placeholder"
                className="rounded-md bg-white/10 p-2 text-white hover:bg-yellow-brand hover:text-purple-brand"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-yellow-brand">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.href} href={link.href} className="text-white/78 hover:text-yellow-brand">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-yellow-brand">Academic Levels</h3>
          <div className="mt-4 grid gap-2">
            {academicLevelNames.map((item) => (
              <Link key={item} href="/academics" className="text-white/78 hover:text-yellow-brand">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-yellow-brand">Contact Details</h3>
          <p className="mt-4 flex items-start gap-2 text-white/78">
            <MapPin size={17} className="mt-1 shrink-0 text-yellow-brand" aria-hidden="true" />
            {school.location}
          </p>
          <a href={school.phoneHref} className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-yellow-brand">
            <Phone size={17} aria-hidden="true" /> {school.phone}
          </a>
          <a href={school.whatsapp} className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-yellow-brand">
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp the School
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/68">
        Copyright {new Date().getFullYear()} {school.name}. All rights reserved.
      </div>
    </footer>
  );
}
