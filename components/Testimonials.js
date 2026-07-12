import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Parent of Primary Learner",
    text: "Treasureland Academy has helped my child become more confident, disciplined and excited about learning."
  },
  {
    name: "Junior High Parent",
    text: "The teachers are caring, and the school combines strong academics with character formation."
  },
  {
    name: "Kindergarten Parent",
    text: "We appreciate the warm environment and the way children are encouraged to learn through discovery."
  }
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading eyebrow="Testimonials" title="What families appreciate" />
        <div className="grid gap-5 md:grid-cols-3">
          {/* Sample testimonials. Replace with approved parent or learner testimonials before launch. */}
          {testimonials.map((item) => (
            <article key={item.name} className="card p-6">
              <p className="text-lg leading-8 text-slate-600">"{item.text}"</p>
              <p className="mt-5 font-black text-purple-brand">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
