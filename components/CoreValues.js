import SectionHeading from "./SectionHeading";
import { coreValues } from "@/lib/schoolData";

export default function CoreValues() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading eyebrow="Core Values" title="Values we teach, model and practise" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {coreValues.map(({ title, text, icon: Icon }) => (
            <article key={title} className="card p-5">
              <Icon className="mb-4 text-gold-brand" aria-hidden="true" />
              <h3 className="font-black text-purple-brand">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
