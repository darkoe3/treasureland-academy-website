import AcademicLevels from "@/components/AcademicLevels";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import StemIctSection from "@/components/StemIctSection";
import MontessoriSection from "@/components/MontessoriSection";

export const metadata = {
  title: "Academics",
  description: "Explore Treasureland Academy's Nursery, Kindergarten, Primary and Junior High programmes with Montessori education, STEM, ICT, creative arts and learner support.",
  openGraph: {
    title: "Academics at Treasureland Academy",
    description: "Montessori, STEM and ICT enriched education from Nursery through Junior High School."
  }
};

const areas = [
  ["ICT Education", "Learners build digital literacy, confidence and responsible technology habits."],
  ["Creative Arts", "Music, art, performance and creative expression help children discover and develop their gifts."],
  ["Character Development", "Leadership, discipline, service and respect are woven into daily school life."],
  ["Assessment and Learner Support", "Teachers use regular feedback and learner support to help every child make steady progress."]
];

export default function AcademicsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Academics"
        title="Strong foundations with modern learning skills"
        text="Our academic programme combines Montessori principles, STEM, ICT, creativity, character formation and careful learner support."
      />
      <AcademicLevels detailed />
      <MontessoriSection />
      <StemIctSection />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading eyebrow="Whole Child Learning" title="Beyond the core subjects" />
          <div className="grid gap-5 md:grid-cols-2">
            {areas.map(([title, text]) => (
              <article key={title} className="card p-6">
                <h2 className="text-xl font-black text-purple-brand">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
