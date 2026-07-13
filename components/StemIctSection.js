import SectionHeading from "./SectionHeading";
import { stemCards } from "@/lib/schoolData";

export default function StemIctSection({ id }) {
  return (
    <section id={id} className="section-pad scroll-mt-24 bg-white">
      <div className="container-pad">
        <SectionHeading
          eyebrow="STEM and ICT"
          title="Preparing Learners for the Future"
          text="We integrate Science, Technology, Engineering, Mathematics and ICT into teaching and learning to develop creativity, problem-solving, digital literacy and innovation."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stemCards.map(([title, Icon]) => (
            <div key={title} className="card p-6">
              <Icon className="mb-5 text-gold-brand" aria-hidden="true" />
              <h3 className="text-lg font-black text-purple-brand">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
