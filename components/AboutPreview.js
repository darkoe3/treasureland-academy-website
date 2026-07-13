import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { academicLevelLabel, school } from "@/lib/schoolData";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-md bg-purple-brand p-8 text-white shadow-soft">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-brand">Founded {school.founded}</p>
          <h2 className="mt-4 text-3xl font-black">A warm, ambitious school community in Kasoa-Brigade.</h2>
          <p className="mt-5 leading-8 text-white/82">
            {academicLevelLabel} learners grow in a safe, supportive environment where
            curiosity, discipline, creativity and service are part of everyday school life.
          </p>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="About Treasureland" title="Welcome to Treasureland Academy" />
          <div className="space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Treasureland Academy is an innovative educational institution committed to providing high-quality and
              inclusive education in a safe, stimulating and supportive environment.
            </p>
            <p>
              Since its establishment in 2011, the academy has nurtured confident, responsible and creative learners
              through the Montessori philosophy, strong academic instruction, STEM education, ICT, character development
              and environmental responsibility.
            </p>
            <p>
              We provide education at the {academicLevelLabel} levels, preparing every
              learner with the knowledge, skills, values and confidence required to thrive in a changing global society.
            </p>
          </div>
          <Link href="/about" className="mt-7 inline-flex rounded-md bg-purple-brand px-6 py-3 font-bold text-white hover:bg-purple-brand/90">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
