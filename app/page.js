import Link from "next/link";
import { Phone } from "lucide-react";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import AcademicLevels from "@/components/AcademicLevels";
import WhyChooseUs from "@/components/WhyChooseUs";
import MontessoriSection from "@/components/MontessoriSection";
import StemIctSection from "@/components/StemIctSection";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import SustainabilitySection from "@/components/SustainabilitySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { school } from "@/lib/schoolData";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: school.name,
    slogan: school.motto,
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kasoa-Brigade",
      addressRegion: "Ga South",
      addressCountry: "GH"
    },
    telephone: school.phone,
    url: "https://treasurelandacademy.com",
    educationalLevel: ["Nursery", "Kindergarten", "Primary", "Junior High School"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AboutPreview />
      <AcademicLevels />
      <WhyChooseUs />
      <MontessoriSection />
      <StemIctSection />
      <VisionMission />
      <CoreValues />
      <SustainabilitySection />
      <FacilitiesSection />
      <GalleryPreview />
      <Testimonials />
      <section className="bg-purple-brand py-16 text-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Give Your Child a Strong Foundation for the Future</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/82">
              Join a learning community committed to academic excellence, character, creativity, innovation and responsible citizenship.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/admissions" className="rounded-md bg-yellow-brand px-6 py-3 text-center font-black text-purple-brand hover:bg-white">
              Start Admission Enquiry
            </Link>
            <a href={school.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 font-black text-white hover:bg-white hover:text-purple-brand">
              <Phone size={18} aria-hidden="true" /> Call the School
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
