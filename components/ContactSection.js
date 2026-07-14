import Link from "next/link";
import { MapPin } from "lucide-react";
import { QuickContactCards, WhatsAppContactCard } from "./ContactCards";
import SectionHeading from "./SectionHeading";
import { school } from "@/lib/schoolData";

export default function ContactSection() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading eyebrow="Contact" title="Speak with Treasureland Academy" />
        <QuickContactCards />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-7">
            <h3 className="text-2xl font-black text-purple-brand">{school.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">{school.location}</p>
            <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-md border border-dashed border-purple-brand/30 bg-white p-6 text-center font-semibold text-slate-500">
              <span className="grid justify-items-center gap-2">
                <MapPin className="text-gold-brand" aria-hidden="true" />
                Google Maps placeholder for Kasoa-Brigade, Ga South, Ghana
              </span>
            </div>
            <Link href="/contact" className="mt-6 inline-flex font-black text-purple-brand hover:text-gold-brand">
              Visit the full contact page
            </Link>
          </div>
          <WhatsAppContactCard compact />
        </div>
      </div>
    </section>
  );
}
