"use client";

import { useMemo, useState } from "react";
import SafeImage from "@/components/SafeImage";

const categories = ["All", "Classroom", "STEM and ICT", "Events", "Sports", "Graduation", "Trips", "Montessori", "Environment"];

const images = [
  ["gallery-2.jpg", "Learners seated in a Treasureland Academy classroom", "Classroom"],
  ["gallery-6.jpg", "Teacher leading a lesson in a Treasureland Academy classroom", "Classroom"],
  ["gallery-9.jpg", "Montessori learning area at Treasureland Academy", "Montessori"],
  ["gallery-1.jpg", "Treasureland Academy learners performing with drums", "Events"],
  ["gallery-11.jpg", "School band performance at Treasureland Academy", "Events"],
  ["gallery-13.jpg", "Learner enjoying a supervised horse ride", "Trips"],
  ["gallery-14.jpg", "Learner taking part in a school voting activity", "Events"],
  ["gallery-5.jpg", "School election activity at Treasureland Academy", "Events"],
  ["gallery-15.jpg", "Learner dressed for a cultural day celebration", "Events"],
  ["gallery-17.jpg", "Learner in cultural attire at Treasureland Academy", "Events"],
  ["gallery-19.jpg", "Learners dressed for a cultural day celebration", "Events"],
  ["img-3634.jpg", "Treasureland Academy cultural day group portrait", "Events"],
  ["gallery-20.jpg", "Treasureland Academy learners in school uniform", "Graduation"],
  ["gallery-7.jpg", "Treasureland Academy school transport in the courtyard", "Trips"],
  ["gallery-12.jpg", "Treasureland Academy campus and courtyard", "Environment"],
  ["gallery-3.jpg", "Treasureland Academy building and open courtyard", "Environment"],
  ["gallery-4.jpg", "Flags displayed at Treasureland Academy", "Environment"],
  ["gallery-8.jpg", "Treasureland Academy classroom block and garden", "Environment"],
  ["gallery-9-2.jpg", "Treasureland Academy shaded walkway", "Environment"]
].map(([file, alt, category]) => ({
  src: `/images/web/${file}`,
  alt,
  category
}));

export default function GalleryFilter() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => (active === "All" ? images : images.filter((image) => image.category === active)), [active]);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-md px-4 py-2 text-sm font-black ${active === category ? "bg-purple-brand text-white" : "bg-mist text-purple-brand hover:bg-purple-brand/10"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <article key={`${image.category}-${index}`} className="overflow-hidden rounded-md">
            <div className="relative min-h-[245px]">
              <SafeImage src={image.src} alt={image.alt} className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
            </div>
            <div className="bg-mist p-4 text-sm font-bold text-purple-brand">{image.category}</div>
          </article>
        ))}
      </div>
    </>
  );
}
