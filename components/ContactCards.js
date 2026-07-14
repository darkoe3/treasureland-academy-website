import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { school } from "@/lib/schoolData";

export function WhatsAppContactCard({ compact = false }) {
  return (
    <div className="card grid gap-5 p-6 sm:p-7">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-700">
        <MessageCircle size={36} aria-hidden="true" />
      </div>
      <div>
        <h2 className={`${compact ? "text-2xl" : "text-3xl"} font-black text-purple-brand`}>
          Chat With Our Admissions Team
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Have questions about admissions, fees, classes or school visits?
        </p>
        <p className="mt-2 leading-7 text-slate-600">
          Our admissions team is ready to assist you on WhatsApp.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={school.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 font-black text-white hover:bg-green-700"
        >
          <MessageCircle size={19} aria-hidden="true" />
          Chat on WhatsApp
        </a>
        <a
          href={school.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-purple-brand/25 px-5 py-3 font-black text-purple-brand hover:border-purple-brand hover:bg-purple-brand hover:text-white"
        >
          <Phone size={19} aria-hidden="true" />
          Call {school.phone}
        </a>
      </div>
    </div>
  );
}

export function QuickContactCards() {
  const cards = [
    {
      label: "Phone",
      icon: Phone,
      content: (
        <div className="grid gap-2">
          {school.phoneNumbers.map((phone) => (
            <a key={phone.href} href={phone.href} className="font-semibold text-slate-600 hover:text-purple-brand">
              {phone.label}
            </a>
          ))}
        </div>
      )
    },
    {
      label: "Email",
      icon: Mail,
      content: (
        <a href={school.emailHref} className="break-words font-semibold text-slate-600 hover:text-purple-brand">
          {school.email}
        </a>
      )
    },
    {
      label: "Location",
      icon: MapPin,
      content: (
        <p className="font-semibold leading-7 text-slate-600">
          Kasoa-Brigade,
          <br />
          Ga South,
          <br />
          Ghana
        </p>
      )
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map(({ label, icon: Icon, content }) => (
        <div key={label} className="card p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-purple-brand/10 text-gold-brand">
              <Icon size={22} aria-hidden="true" />
            </span>
            <h2 className="font-black uppercase tracking-[0.12em] text-purple-brand">{label}</h2>
          </div>
          <div className="mt-4">{content}</div>
        </div>
      ))}
    </div>
  );
}
