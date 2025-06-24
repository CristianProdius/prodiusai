"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function CallToAction() {
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

  const [slowDownAnimation, setSlowDownAnimation] = useState(false);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (slowDownAnimation) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [slowDownAnimation]);

  return (
    <section className="py-24 bg-white overflow-x-clip">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium text-gray-900"
          onMouseEnter={() => setSlowDownAnimation(true)}
          onMouseLeave={() => setSlowDownAnimation(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-7xl" style={{ color: "#335edd" }}>
                &#10038;
              </span>
              <Link
                href="/trial"
                className={twMerge(
                  "transition-colors duration-300",
                  slowDownAnimation && "hover:opacity-75"
                )}
                style={{
                  color: slowDownAnimation ? "#2f2da2" : "inherit",
                }}
              >
                Try it now
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
