import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Student Life",
  description: "Student life at Treasureland Academy includes clubs, sports, trips, culture, leadership, service, environmental activities and moral development.",
  openGraph: {
    title: "Student Life | Treasureland Academy",
    description: "A supportive school life with clubs, sports, trips, leadership and community service."
  }
};

const items = [
  ["Clubs and Societies", "Learners explore interests, teamwork and confidence through age-appropriate clubs."],
  ["Sports and Recreation", "Physical activity supports health, resilience, discipline and friendly competition."],
  ["Educational Trips", "Carefully planned trips connect classroom learning with the wider world."],
  ["Cultural Activities", "Learners celebrate identity, creativity and appreciation for community traditions."],
  ["Leadership Opportunities", "Classroom and school responsibilities help learners practise service and accountability."],
  ["Community Service", "Learners are encouraged to contribute positively to school, community and nation."],
  ["Environmental Activities", "Gardening, cleanliness and resource care build environmental responsibility."],
  ["Faith and Moral Development", "Compassion, honesty, respect for God and respect for humanity are encouraged."]
];

export default function StudentLifePage() {
  return (
    <>
      <PageIntro eyebrow="Student Life" title="A school experience rich with growth and belonging" text="Treasureland Academy supports learners academically, socially, morally, physically and creatively." />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading eyebrow="Beyond the Classroom" title="Balanced opportunities for every learner" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {items.map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-lg font-black text-purple-brand">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
