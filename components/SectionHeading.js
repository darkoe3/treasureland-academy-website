"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, align = "center", inverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className={`mb-10 ${align === "left" ? "text-left" : "mx-auto max-w-3xl text-center"}`}
    >
      {eyebrow ? (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${inverse ? "text-yellow-brand" : "text-gold-brand"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-black md:text-4xl ${inverse ? "text-white" : "text-purple-brand"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${inverse ? "text-white/82" : "text-slate-600"}`}>{text}</p> : null}
    </motion.div>
  );
}
