import PageIntro from "@/components/PageIntro";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import MontessoriSection from "@/components/MontessoriSection";
import SustainabilitySection from "@/components/SustainabilitySection";

export const metadata = {
  title: "About",
  description: "Learn about Treasureland Academy, its history, Montessori philosophy, vision, mission, core values and sustainability commitment.",
  openGraph: {
    title: "About Treasureland Academy",
    description: "A forward-thinking Montessori, STEM and ICT school in Kasoa-Brigade, Ga South, Ghana."
  }
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="A forward-thinking school for confident, compassionate learners"
        text="Treasureland Academy is dedicated to high-quality, inclusive and sustainable education for Nursery, Kindergarten, Primary and Junior High learners."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-3">
          {[
            ["School Overview", "Treasureland Academy is a forward-thinking educational institution dedicated to providing high-quality, inclusive and sustainable education."],
            ["History", "Founded in 2011, the academy combines the Montessori philosophy with modern approaches to teaching and learning."],
            ["Learning for Life", "We believe education must prepare learners not only for examinations, but also for life as independent thinkers, compassionate leaders, responsible citizens and lifelong learners."]
          ].map(([title, text]) => (
            <article key={title} className="card p-6">
              <h2 className="text-xl font-black text-purple-brand">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="container-pad mt-8">
          <div className="card p-7">
            <h2 className="text-2xl font-black text-purple-brand">Sustainability Commitment</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The academy integrates sustainability principles into its curriculum and daily operations. Our programmes support the United Nations Sustainable Development Goals, particularly Quality Education, Gender Equality, Responsible Consumption and Production, and Climate Action.
            </p>
          </div>
        </div>
      </section>
      <VisionMission />
      <CoreValues />
      <MontessoriSection />
      <SustainabilitySection />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-6 md:grid-cols-2">
          {/* Replace with actual school leadership profiles and photographs before launch. */}
          <div className="card p-7">
            <h2 className="text-2xl font-black text-purple-brand">School Leadership</h2>
            <p className="mt-4 leading-8 text-slate-600">Leadership profile placeholder for the proprietor, head of school or administrative team.</p>
          </div>
          {/* Replace with the approved Head of School message before launch. */}
          <div className="card p-7">
            <h2 className="text-2xl font-black text-purple-brand">Head of School Message</h2>
            <p className="mt-4 leading-8 text-slate-600">A welcoming message from the Head of School can be added here before launch.</p>
          </div>
        </div>
      </section>
    </>
  );
}
