import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/lib/schoolData";

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading eyebrow="Why Choose Us" title="Why choose Treasureland Academy" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map(([title, Icon]) => (
            <div key={title} className="card p-5">
              <Icon className="mb-4 text-gold-brand" aria-hidden="true" />
              <h3 className="font-black text-purple-brand">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
