"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/lib/schoolData";

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading
          eyebrow="Why Parents Choose Us"
          title="Why Parents Choose Treasureland Academy"
          text="Families choose a school that balances strong academics with care, confidence, values and modern learning skills."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map(({ title, text, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="card relative overflow-hidden p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-yellow-brand" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-purple-brand text-yellow-brand">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-purple-brand">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
