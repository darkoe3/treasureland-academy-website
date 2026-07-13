"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import SafeImage from "./SafeImage";
import { school } from "@/lib/schoolData";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-purple-brand text-white md:min-h-[760px]">
      <SafeImage
        src="/images/web/hero-school.jpg"
        alt="Treasureland Academy campus building and courtyard"
        priority
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-pad relative z-10 flex min-h-[720px] items-center py-20 md:min-h-[760px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-yellow-brand/40 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-yellow-brand">
            Welcome to Treasureland Academy
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">
            Building Confident Learners for a Changing World
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 md:text-xl">
            Treasureland Academy provides high-quality Montessori-based education from Creche through Junior High
            School, enriched with STEM, ICT, creativity, character development and sustainability.
          </p>
          <div className="mt-6 inline-flex rounded-md bg-yellow-brand px-4 py-2 text-sm font-black text-purple-brand">
            {school.motto}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/admissions" className="inline-flex items-center justify-center gap-2 rounded-md bg-yellow-brand px-6 py-3 font-black text-purple-brand hover:bg-white">
              Apply for Admission <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 font-black text-white hover:bg-white hover:text-purple-brand">
              Explore Our School
            </Link>
            <a href={school.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white/12 px-6 py-3 font-black text-white hover:bg-white hover:text-purple-brand">
              <Phone size={18} aria-hidden="true" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
