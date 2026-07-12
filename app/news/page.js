import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import SafeImage from "@/components/SafeImage";

export const metadata = {
  title: "News and Events",
  description: "Read sample news and event updates for Treasureland Academy. Replace sample articles with official school news before launch.",
  openGraph: {
    title: "News and Events | Treasureland Academy",
    description: "School announcements, events and learner highlights from Treasureland Academy."
  }
};

const posts = [
  ["Admission Enquiries Open", "2026-01-12", "Admissions", "Families can contact the school to learn more about available classes and school visits.", "gallery-12.jpg"],
  ["STEM Learning Week", "2026-02-05", "STEM and ICT", "Learners explore practical science, coding, mathematics and creative problem-solving.", "gallery-6.jpg"],
  ["Reading Culture Day", "2026-03-18", "Literacy", "A school-wide celebration encourages learners to enjoy books and confident communication.", "gallery-2.jpg"],
  ["Environmental Care Project", "2026-04-22", "Sustainability", "Learners practise responsible resource use, cleanliness and environmental stewardship.", "gallery-8.jpg"],
  ["Sports and Recreation Day", "2026-05-09", "Sports", "Physical education activities promote teamwork, confidence and healthy habits.", "gallery-13.jpg"],
  ["Community Service Activity", "2026-06-14", "Service", "Learners are encouraged to contribute positively to school and community life.", "gallery-1.jpg"]
];

export default function NewsPage() {
  return (
    <>
      <PageIntro eyebrow="News and Events" title="Updates from Treasureland Academy" text="A modern space for school announcements, learner highlights, events and community stories." />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading eyebrow="Latest Posts" title="School news and event highlights" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Sample articles. Replace all six posts with official school news before launch. */}
            {posts.map(([title, date, category, description, image]) => (
              <article key={title} className="card overflow-hidden">
                <div className="relative min-h-[200px]">
                  <SafeImage src={`/images/web/${image}`} alt={`${title} image`} className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.12em] text-gold-brand">
                    <span>{category}</span>
                    <time dateTime={date}>{date}</time>
                  </div>
                  <h2 className="mt-3 text-xl font-black text-purple-brand">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                  <a href="#" className="mt-5 inline-flex font-black text-purple-brand hover:text-gold-brand">Read more</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
