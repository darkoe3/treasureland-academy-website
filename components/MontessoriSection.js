import { CheckCircle2, Compass, Hand } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function MontessoriSection({ id }) {
  const points = ["Hands-on discovery", "Independence and confidence", "Respectful classroom community"];

  return (
    <section id={id} className="section-pad scroll-mt-24 bg-purple-brand text-white">
      <div className="container-pad grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            inverse
            eyebrow="Montessori Education"
            title="Learning Through the Montessori Philosophy"
            text="At Treasureland Academy, learners are encouraged to explore, discover and develop independence in a carefully prepared environment. Our Montessori approach supports hands-on learning, self-confidence, responsibility, concentration and respect for others."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {points.map((point, index) => {
            const icons = [Hand, Compass, CheckCircle2];
            const Icon = icons[index];
            return (
              <div key={point} className="rounded-md border border-white/15 bg-white/10 p-5">
                <Icon className="mb-4 text-yellow-brand" aria-hidden="true" />
                <p className="font-black">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
