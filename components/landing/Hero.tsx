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

interface HeroProps {
  ctaRef: React.RefObject<HTMLDivElement>;
}

export function Hero({ ctaRef }: HeroProps) {
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

  const handleScrollToCTA = () => {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-44 bg-[radial-gradient(ellipse_100%_50%_at_bottom_left,#364CE7,#0E0E0E_66%)] px-8 lg:px-24">
      <div className="relative overflow-clip">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="border border-white/30 flex py-1 px-2 items-center rounded-lg relative">
              <motion.div
                ref={tabRef}
                style={{ maskImage }}
                className="absolute inset-0 -m-px border border-[#364CE7] rounded-lg "
              />
              <p className="flex items-center gap-2 text-slate-400">
                ✨ Introducing the
                <span className="bg-[linear-gradient(to_right,#0EA8F5,#692EF8)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                  Hazlo
                </span>
                app
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex">
              <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex text-white">
                Connect, <br /> Play, Inspire.
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-md lg:text-xl mt-8 max-w-md text-slate-300">
              Join a vibrant community where everyone can connect, get inspired,
              and pursue a healthier lifestyle. Whether you’re a seasoned
              athlete or just starting out, share your progress, create events,
              and connect with supportive players and coaches.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button onClick={handleScrollToCTA}>
              <Link href={"/"}>Join the waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
