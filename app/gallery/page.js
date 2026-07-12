import PageIntro from "@/components/PageIntro";
import GalleryFilter from "@/components/GalleryFilter";

export const metadata = {
  title: "Gallery",
  description: "Browse Treasureland Academy gallery categories including classroom, STEM and ICT, events, sports, graduation, trips, Montessori and environment.",
  openGraph: {
    title: "Gallery | Treasureland Academy",
    description: "A responsive photo gallery for school life at Treasureland Academy."
  }
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro eyebrow="Gallery" title="School moments and memories" text="Browse classroom, STEM, event, sports, graduation, trip, Montessori and environmental activity photos." />
      <section className="section-pad bg-white">
        <div className="container-pad">
          <GalleryFilter />
        </div>
      </section>
    </>
  );
}
