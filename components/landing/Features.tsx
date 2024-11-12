"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, GraduationCap, Heart, User } from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    id: 0,
    icon: User,
    title: "Connect with Players",
    description:
      "Discover and connect with people who share your passion for sports, whether they're nearby or part of a global community.",
  },
  {
    id: 1,
    icon: Calendar,
    title: "Create and Join Events",
    description:
      "Organize sports events with friends or join public events to meet new players and get active together.",
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Find and Book Coaches",
    description:
      "Improve your skills by booking sessions with rated and reviewed coaches, making it easier to find the right fit for you.",
  },
  {
    id: 3,
    icon: Heart,
    title: "Share Your Journey",
    description:
      "Post photos, videos, and updates to inspire others and celebrate a healthier lifestyle with the HAZLO community.",
  },
];

export default function Features() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background text-white py-[72px] sm:py-24">
      <h2 className="text-center font-bold text-2xl sm:text-6xl tracking-tight max-w-4xl mx-auto">
        Discover the Power of Connection Through Sports
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
          HAZLO brings people together to play, learn, and inspire each other.
          Explore our features designed to make sports more social, accessible,
          and fun.
        </p>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div
          className="grid md:grid-cols-7 auto-rows-[200px] gap-4 mt-10 mx-auto"
          ref={ref}
        >
          {features.map((item, i) => {
            const isBigItem = i === 0 || i === 3;
            const isSmallItem = i === 1 || i === 2;
            const animationDirection = isBigItem ? "left" : "right";

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: animationDirection === "left" ? -100 : 100,
                }}
                animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`flex flex-col text-center rounded-lg p-[2px] ${
                  isBigItem
                    ? "col-span-4 bg-[linear-gradient(to_right,rgba(14,168,245,0.6),rgba(105,46,248,0.6))]"
                    : ""
                } ${isSmallItem ? "col-span-3 bg-white/30" : ""}`}
              >
                <div className="flex flex-col bg-background rounded-lg p-4 justify-center items-center gap-5 h-full w-full">
                  <item.icon size={24} color="white" />
                  <h4 className="font-semibold text-2xl">{item.title}</h4>
                  <p className="text-gray-500 text-md">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
