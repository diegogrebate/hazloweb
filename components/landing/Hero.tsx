"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "../ui/Buttons";
import Link from "next/link";

export function Hero() {
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(60px 40px at ${xPercentage}% ${yPercentage}%, #0E0E0E, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background text-white py-[72px] sm:py-24 relative overflow-clip">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="border border-white/30 flex py-1 px-2 items-center rounded-lg relative">
            <motion.div
              ref={tabRef}
              style={{ maskImage }}
              className="absolute inset-0 -m-px border border-purple rounded-lg "
            />
            <p className="flex items-center gap-2">
              Introducing the
              <span className="bg-[linear-gradient(to_right,#0EA8F5,#692EF8)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                Hazlo
              </span>
              app
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              Connect, <br /> Play, Inspire.
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Join a vibrant sports community where you can share your journey,
            create events, and connect with players and coaches who inspire you
            to live healthier.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Button>
            <Link href={"/"}>Join the waitlist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
