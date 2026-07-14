"use client";

import Link from "next/link";
import { ArrowRight, Cpu, HandHeart, School } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { label: "Montessori Learning", icon: School },
  { label: "STEM & ICT Education", icon: Cpu },
  { label: "Safe & Caring Environment", icon: HandHeart }
];

export default function AcademyVideoSection() {
  return (
    <section className="relative overflow-hidden bg-mist py-20">
      <div className="absolute left-0 top-10 h-28 w-28 -translate-x-12 rotate-12 rounded-md border border-purple-brand/10 bg-white/70" aria-hidden="true" />
      <div className="absolute bottom-12 right-0 h-24 w-24 translate-x-10 -rotate-12 rounded-md bg-yellow-brand/30" aria-hidden="true" />
      <div className="absolute right-[12%] top-12 h-1 w-24 rounded-full bg-gold-brand/45" aria-hidden="true" />

      <div className="container-pad relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-gold-brand">School Life in Motion</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-purple-brand md:text-5xl">
            Experience Treasureland Academy
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Take a glimpse into our vibrant learning environment, caring teachers, engaging classrooms and the exciting
            experiences that make Treasureland Academy a wonderful place for every child.
          </p>

          <div className="mt-7 grid gap-3">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-purple-brand text-yellow-brand">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="font-black text-slate-800">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/admissions"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-purple-brand px-6 py-3 font-black text-white shadow-soft hover:bg-purple-brand/90"
          >
            Apply for Admission
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-md border border-purple-brand/10 bg-white p-3 shadow-soft"
        >
          <div className="aspect-video overflow-hidden rounded-md bg-purple-brand/10">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/2gVGF2H9a9s"
              title="Experience Treasureland Academy official YouTube video"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
