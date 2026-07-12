import { Eye, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

export const vision =
  "To be a leading centre of excellence in Nursery, Kindergarten, Primary and Junior High education, nurturing confident, innovative and compassionate lifelong learners through the Montessori philosophy, while equipping every child with strong STEM and ICT competencies, critical-thinking skills, creativity and ethical values to thrive in an ever-changing global society.";

export const mission =
  "To provide a safe, inclusive and stimulating learning environment where every child is inspired to reach their full potential through the Montessori approach. We are committed to delivering high-quality education that integrates STEM and ICT, promotes creativity, critical thinking, problem-solving, leadership and character development, and strengthens partnerships among learners, staff, parents and the wider community.";

export default function VisionMission() {
  const cards = [
    ["Our Vision", vision, Eye],
    ["Our Mission", mission, Target]
  ];

  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading eyebrow="Vision and Mission" title="Purpose that shapes every classroom" />
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map(([title, text, Icon]) => (
            <article key={title} className="card p-7">
              <Icon className="mb-5 text-gold-brand" aria-hidden="true" />
              <h3 className="text-2xl font-black text-purple-brand">{title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
