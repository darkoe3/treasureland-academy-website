import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import { school } from "@/lib/schoolData";

export default function ContactSection() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading eyebrow="Contact" title="Speak with Treasureland Academy" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-7">
            <h3 className="text-2xl font-black text-purple-brand">{school.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">{school.location}</p>
            <p className="mt-2">
              <a href={school.phoneHref} className="font-black text-purple-brand hover:text-gold-brand">
                {school.phone}
              </a>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={school.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-purple-brand px-5 py-3 font-bold text-white">
                <Phone size={18} aria-hidden="true" /> Click to Call
              </a>
              <a href={school.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-bold text-white">
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp
              </a>
            </div>
            <div className="mt-6 flex min-h-[220px] items-center justify-center rounded-md border border-dashed border-purple-brand/30 bg-white p-6 text-center font-semibold text-slate-500">
              Google Maps placeholder for Kasoa-Brigade, Ga South, Ghana
            </div>
            <Link href="/contact" className="mt-6 inline-flex font-black text-purple-brand hover:text-gold-brand">
              Visit the full contact page
            </Link>
          </div>
          <ContactForm compact />
        </div>
      </div>
    </section>
  );
}
