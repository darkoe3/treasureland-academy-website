import Link from "next/link";
import SectionHeading from "./SectionHeading";
import SafeImage from "./SafeImage";

export const galleryImages = [
  ["gallery-2.jpg", "Learners seated in a Treasureland Academy classroom"],
  ["gallery-1.jpg", "Treasureland Academy learners performing with drums"],
  ["gallery-12.jpg", "Treasureland Academy campus and courtyard"],
  ["gallery-6.jpg", "Teacher leading a classroom lesson"],
  ["gallery-19.jpg", "Learners dressed for a cultural day celebration"],
  ["gallery-7.jpg", "Treasureland Academy school transport in the courtyard"]
].map(([file, alt]) => ({
  src: `/images/web/${file}`,
  alt
}));

export default function GalleryPreview() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-pad">
        <SectionHeading eyebrow="Gallery" title="Moments from school life" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="relative min-h-[230px] overflow-hidden rounded-md">
              <SafeImage src={image.src} alt={image.alt} className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="inline-flex rounded-md bg-purple-brand px-6 py-3 font-bold text-white hover:bg-purple-brand/90">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
