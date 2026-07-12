import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { sustainabilityGoals } from "@/lib/schoolData";

export default function SustainabilitySection({ showLink = true }) {
  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Sustainability"
          title="Education for a Sustainable Future"
          text="Treasureland Academy integrates sustainability principles into its curriculum, school culture and daily activities. Learners are encouraged to care for the environment, use resources responsibly and contribute positively to society."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {sustainabilityGoals.map(([title, Icon]) => (
            <div key={title} className="card p-6">
              <Icon className="mb-4 text-gold-brand" aria-hidden="true" />
              <h3 className="font-black text-purple-brand">{title}</h3>
            </div>
          ))}
        </div>
        {showLink ? (
          <div className="mt-8 text-center">
            <Link href="/sustainability" className="font-black text-purple-brand hover:text-gold-brand">
              Explore Our Sustainability Commitment
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
