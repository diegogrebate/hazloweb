"use client";

import Image from "next/image";
import productImage from "@/public/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProductShowcase() {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="text-white bg-gradient-to-b from-[#0E0E0E] to-[#0EA8F5] py-[72px] sm:py-24">
      <div className="container relative mx-auto">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Experience Sports Like Never Before
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-whiite/70 mt-5">
            See how HAZLO transforms your sports journey—connecting you with
            people, events, and coaches that keep you motivated and active.
          </p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={productImage}
            alt="Product Screenshot"
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
}