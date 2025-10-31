import React from "react";
import { motion } from "framer-motion";

const Ribbon = () => {
  return (
    <section className="bg-[#f2f1da] text-black text-center py-16 px-6 overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        className="text-5xl font-bold mb-6 tracking-wide section-heading section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} // 👈 replays every time it’s visible
      >
        Femina
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }} // 👈 replays when scrolled into view again
      >
        With an illustrious legacy of over <span className="font-semibold">60 years</span>, 
        <strong> Femina Miss India </strong> has been the crown jewel of India’s pageant 
        heritage — a symbol of <em>beauty, intellect,</em> and <em>empowerment</em>. 
        <br /><br />
        <strong>Bright Stage</strong> takes immense pride in being the official licensee for 
        <strong> Femina Miss India – Madhya Pradesh,</strong> curating an experience where 
        <span className="italic"> luxury meets legacy </span> and every participant shines with 
        <span className="font-semibold"> confidence, elegance, and purpose.</span>
      </motion.p>
    </section>
  );
};

export default Ribbon;
