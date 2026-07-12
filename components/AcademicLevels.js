import SectionHeading from "./SectionHeading";
import { academicLevels } from "@/lib/schoolData";

export default function AcademicLevels({ detailed = false }) {
  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Academic Pathways"
          title="Learning stages designed for steady growth"
          text="From early years through Junior High School, every level supports strong academics, independence, confidence and character."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {academicLevels.map(({ title, description, icon: Icon }) => (
            <article key={title} className="card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-purple-brand text-yellow-brand">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-purple-brand">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              {detailed ? (
                <p className="mt-4 text-sm font-semibold text-gold-brand">
                  Learner-centred teaching, regular feedback and supportive care.
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
