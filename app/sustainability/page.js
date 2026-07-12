import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import SustainabilitySection from "@/components/SustainabilitySection";

export const metadata = {
  title: "Sustainability",
  description: "Treasureland Academy integrates quality education, gender equality, responsible consumption, climate action and environmental stewardship into school life.",
  openGraph: {
    title: "Sustainability | Treasureland Academy",
    description: "Education for responsible citizens and environmental stewardship in Kasoa-Brigade."
  }
};

const topics = [
  ["Quality Education", "Inclusive learning and high expectations help each learner build knowledge, skills and confidence."],
  ["Gender Equality", "Girls and boys are encouraged to participate fully, lead responsibly and pursue excellence."],
  ["Responsible Consumption", "Learners are taught to reduce waste and use resources with care."],
  ["Climate Action", "Environmental awareness helps learners understand their role in protecting the future."],
  ["Environmental Stewardship", "Care for school spaces and nature is built into classroom culture."],
  ["Recycling", "Practical recycling habits can be developed through school projects and daily routines."],
  ["School Gardening", "Gardening activities connect learners to food, nature, science and responsibility."],
  ["Energy and Water Conservation", "Learners practise simple conservation habits at school and at home."],
  ["Community Service", "Service projects help learners contribute meaningfully to the wider community."],
  ["Sustainable Learner Projects", "Project work can connect STEM, creativity and sustainability challenges."]
];

export default function SustainabilityPage() {
  return (
    <>
      <PageIntro eyebrow="Sustainability" title="Preparing learners to care for people and planet" text="Sustainability at Treasureland Academy is part of curriculum, culture and everyday responsibility." />
      <SustainabilitySection showLink={false} />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading eyebrow="Our Commitment" title="Sustainability in action" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {topics.map(([title, text]) => (
              <article key={title} className="card p-5">
                <h2 className="font-black text-purple-brand">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
