import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { school } from "@/lib/schoolData";

export const metadata = {
  title: "Contact",
  description: "Contact Treasureland Academy in Kasoa-Brigade, Ga South, Ghana by phone, WhatsApp or enquiry form.",
  openGraph: {
    title: "Contact Treasureland Academy",
    description: "Phone, WhatsApp, location, directions and enquiry form for Treasureland Academy."
  }
};

export default function ContactPage() {
  const details = [
    [MapPin, "Location", school.location],
    [Phone, "Phone", school.phone],
    [MessageCircle, "WhatsApp", "https://wa.me/233240219372"],
    [Mail, "Email", `${school.email} (placeholder until the official school email is provided)`],
    [Clock, "School Hours", "School hours placeholder"]
  ];

  return (
    <>
      <PageIntro eyebrow="Contact" title="We would be glad to hear from you" text="Reach Treasureland Academy for admission enquiries, school visits, directions and general information." />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading align="left" eyebrow="School Details" title={school.name} />
            <div className="grid gap-4">
              {details.map(([Icon, label, value]) => (
                <div key={label} className="card flex gap-4 p-5">
                  <Icon className="shrink-0 text-gold-brand" aria-hidden="true" />
                  <div>
                    <h2 className="font-black text-purple-brand">{label}</h2>
                    {label === "Phone" ? (
                      <a href={school.phoneHref} className="text-slate-600 hover:text-purple-brand">{value}</a>
                    ) : label === "WhatsApp" ? (
                      <a href={school.whatsapp} className="text-slate-600 hover:text-purple-brand">{value}</a>
                    ) : (
                      <p className="text-slate-600">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Enquiry" title="Send a message" />
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <div className="card flex min-h-[280px] items-center justify-center p-6 text-center font-semibold text-slate-500">
            Google Maps placeholder for Kasoa-Brigade, Ga South, Ghana
          </div>
          <div className="card p-7">
            <h2 className="text-2xl font-black text-purple-brand">Directions</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Treasureland Academy is located at Kasoa-Brigade, Ga South, Ghana. Families can call or send a WhatsApp message for directions before visiting the school.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={school.phoneHref} className="rounded-md bg-purple-brand px-5 py-3 text-center font-black text-white">Call for Directions</a>
              <a href={school.whatsapp} className="rounded-md bg-green-600 px-5 py-3 text-center font-black text-white">WhatsApp the School</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
