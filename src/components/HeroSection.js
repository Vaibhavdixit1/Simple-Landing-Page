"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, triggerOnce: false });
  const controls = useAnimation();

  // Animate when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <section
      className="relative w-full h-[50vh] md:h-screen overflow-hidden"
      ref={ref}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center text-white">
        <div className="max-w-3xl">
          <motion.h1
            className="text-sm md:text-2xl mb-2"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Driven by performance
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          >
            Soft trims and{" "}
            <span className="text-cyan-400">NVH solutions</span>
            <br /> for seamless rides
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
