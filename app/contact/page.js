import { MapPin, MessageCircle, Phone } from "lucide-react";
import { QuickContactCards, WhatsAppContactCard } from "@/components/ContactCards";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { school } from "@/lib/schoolData";

export const metadata = {
  title: "Contact",
  description: "Contact Treasureland Academy in Kasoa-Brigade, Ga South, Ghana by phone, WhatsApp or email.",
  openGraph: {
    title: "Contact Treasureland Academy",
    description: "Phone numbers, WhatsApp, email, location and directions for Treasureland Academy."
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="We would be glad to hear from you" text="Reach Treasureland Academy for admission enquiries, school visits, directions and general information." />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading align="left" eyebrow="School Details" title={school.name} />
          <QuickContactCards />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <WhatsAppContactCard />
            <div className="card p-7">
              <h2 className="text-2xl font-black text-purple-brand">Direct Contact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Call any of our school lines or chat with the admissions team on WhatsApp for admissions, fees, classes or school visits.
              </p>
              <div className="mt-6 grid gap-3">
                {school.phoneNumbers.map((phone) => (
                  <a key={phone.href} href={phone.href} className="inline-flex items-center gap-2 font-black text-purple-brand hover:text-gold-brand">
                    <Phone size={18} aria-hidden="true" />
                    {phone.label}
                  </a>
                ))}
                <a
                  href={school.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-black text-green-700 hover:text-green-800"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp {school.whatsappNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <div className="card flex min-h-[280px] items-center justify-center p-6 text-center font-semibold text-slate-500">
            <span className="grid justify-items-center gap-2">
              <MapPin className="text-gold-brand" aria-hidden="true" />
              Google Maps placeholder for Kasoa-Brigade, Ga South, Ghana
            </span>
          </div>
          <div className="card p-7">
            <h2 className="text-2xl font-black text-purple-brand">Directions</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Treasureland Academy is located at Kasoa-Brigade, Ga South, Ghana. Families can call or send a WhatsApp message for directions before visiting the school.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={school.phoneHref} className="rounded-md bg-purple-brand px-5 py-3 text-center font-black text-white">Call for Directions</a>
              <a href={school.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-md bg-green-600 px-5 py-3 text-center font-black text-white">WhatsApp the School</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
