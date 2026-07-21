import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import AcademyVideoSection from "@/components/AcademyVideoSection";
import AboutPreview from "@/components/AboutPreview";
import AcademicLevels from "@/components/AcademicLevels";
import WhyChooseUs from "@/components/WhyChooseUs";
import MontessoriSection from "@/components/MontessoriSection";
import StemIctSection from "@/components/StemIctSection";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import SchoolResourcesSection from "@/components/SchoolResourcesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { academicLevelNames, school } from "@/lib/schoolData";

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
    telephone: school.phoneNumbers.map((phone) => phone.label),
    email: school.email,
    url: "https://treasurelandacademy.com",
    educationalLevel: academicLevelNames
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AcademyVideoSection />
      <AboutPreview />
      <AcademicLevels />
      <WhyChooseUs />
      <MontessoriSection />
      <StemIctSection />
      <VisionMission />
      <CoreValues />
      <SchoolResourcesSection />
      <SustainabilitySection />
      <FacilitiesSection />
      <GalleryPreview />
      <Testimonials />
      <section className="relative overflow-hidden bg-purple-brand py-16 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,242,0,0.16),transparent_32%),linear-gradient(90deg,rgba(31,41,55,0.18),transparent)]" aria-hidden="true" />
        <div className="container-pad relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-yellow-brand">Admissions Open</p>
            <h2 className="text-balance text-3xl font-black md:text-4xl">Give Your Child a Strong Foundation for the Future</h2>
            <p className="mt-4 text-lg leading-8 text-white/84">
              Join a learning community committed to academic excellence, creativity, character, innovation and responsible citizenship from Creche through Junior High School.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-brand px-6 py-3 text-center font-black text-purple-brand hover:bg-white">
              Start Admission Enquiry <ArrowRight size={18} aria-hidden="true" />
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
