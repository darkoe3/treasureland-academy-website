import { Download, ExternalLink, FileText, MonitorSmartphone, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { school } from "@/lib/schoolData";

export default function SchoolResourcesSection() {
  return (
    <section className="section-pad bg-white" id="school-resources">
      <div className="container-pad">
        <SectionHeading
          eyebrow="School Resources"
          title="Guidance and secure access for our community"
          text="Access key Treasureland Academy resources for parents, staff and authorised users."
        />
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="card relative overflow-hidden p-7 sm:p-8">
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-yellow-brand/20" aria-hidden="true" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-gold-brand/30 bg-purple-brand text-yellow-brand shadow-soft">
                <FileText size={34} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-gold-brand/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-gold-brand">
                    PDF Document
                  </span>
                  <span className="rounded-md border border-purple-brand/10 px-3 py-1 text-xs font-bold text-purple-brand">
                    12 pages
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-purple-brand md:text-3xl">School Constitution</h2>
                <div className="mt-4 space-y-4 leading-8 text-slate-600">
                  <p>
                    Treasureland Academy is guided by clear principles that promote professionalism, discipline, child protection, academic excellence, staff accountability and responsible relationships within the school community.
                  </p>
                  <p>
                    The constitution also outlines the Academy&apos;s vision, mission, core values, staff responsibilities, professional conduct, disciplinary procedures and commitment to learner welfare.
                  </p>
                </div>
                <a
                  href={school.constitutionHref}
                  download
                  aria-label="Download the Treasureland Academy School Constitution PDF"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-purple-brand px-5 py-3 text-center font-black text-white shadow-soft hover:-translate-y-0.5 hover:bg-purple-brand/90 focus-visible:bg-purple-brand/90"
                >
                  <Download size={19} aria-hidden="true" />
                  Download School Constitution
                </a>
              </div>
            </div>
          </article>

          <article className="card relative overflow-hidden bg-purple-brand p-7 text-white sm:p-8">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-brand" aria-hidden="true" />
            <div className="flex h-16 w-16 items-center justify-center rounded-md border border-white/15 bg-white/10 text-yellow-brand">
              <MonitorSmartphone size={34} aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-black md:text-3xl">Access the Treasureland School App</h2>
            <p className="mt-4 leading-8 text-white/82">
              Parents, staff and authorised users can securely access the Treasureland Academy school management platform for school-related services and information.
            </p>
            <div className="mt-6 rounded-md border border-white/15 bg-white/10 p-4">
              <div className="flex items-center gap-3 text-sm font-bold text-white/82">
                <ShieldCheck size={18} className="text-yellow-brand" aria-hidden="true" />
                Authorised school community access
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
                <span className="h-2 rounded-full bg-yellow-brand" />
                <span className="h-2 rounded-full bg-white/45" />
                <span className="h-2 rounded-full bg-white/25" />
              </div>
            </div>
            <a
              href={school.schoolAppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch the Treasureland School App in a new tab"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-yellow-brand px-5 py-3 text-center font-black text-purple-brand shadow-soft hover:-translate-y-0.5 hover:bg-white focus-visible:bg-white"
            >
              Launch School App
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
