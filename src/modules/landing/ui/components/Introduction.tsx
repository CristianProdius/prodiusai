"use client";

import Tag from "./Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Our AI provides realistic conversation training to close more deals.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-4 lg:py-10 bg-white relative">
      <div className="container">
        <div className="sticky top-28 md:top-32">
          <div className="flex justify-center">
            <Tag>AI-Powered Sales Training That Works</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 text-gray-900">
            <span>Sales teams need practice. &nbsp;</span>
            <span className="text-gray-300">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-gray-300",
                    wordIndex < currentWord && "text-gray-900"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block mt-4" style={{ color: "#335edd" }}>
              That&apos;s why we built AI customer training.
            </span>
          </div>
        </div>
        {/* Invisible scroll target that doesn't affect layout */}
        <div
          ref={scrollTarget}
          className="h-[150vh] pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
