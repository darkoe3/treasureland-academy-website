import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { facilities } from "@/lib/schoolData";

export default function FacilitiesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Facilities"
          title="Spaces that support learning, play and discovery"
          text="The school environment is designed to be safe, purposeful and engaging for every learner."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Replace these sample facility items with actual facility descriptions and photos before launch. */}
          {facilities.map((facility) => (
            <article key={facility} className="card p-6">
              <CheckCircle2 className="mb-4 text-gold-brand" aria-hidden="true" />
              <h3 className="text-lg font-black text-purple-brand">{facility}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A thoughtfully prepared school space that can be updated with real photos and detailed descriptions.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
