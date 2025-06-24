"use client";

import FeatureCard from "./FeatureCard";
import Tag from "./Tag";
import avatar1 from "../assets/avatar-ashwin-santiago.jpg";
import avatar2 from "../assets/avatar-florence-shaw.jpg";
import avatar3 from "../assets/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "./Avatar";
import { Users, BarChart3, MessageCircle } from "lucide-react";

import { motion } from "framer-motion";

const features = [
  "Realistic AI Customers",
  "Objection Handling",
  "Performance Analytics",
  "Instant Feedback",
  "Conversation Practice",
  "Sales Coaching",
  "Team Training",
  "Quick Setup",
];

const parentVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section className="py-24 ">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Why Choose Our Platform</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto text-gray-900">
          Where AI meets{" "}
          <span style={{ color: "#335edd" }}>sales training</span>
        </h2>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <FeatureCard
                title="50K+ Training Sessions"
                description="Our AI customers have conducted thousands of realistic sales conversations"
                className="md:col-span-2 lg:col-span-1"
              >
                <div className="aspect-video flex items-center justify-center">
                  <Avatar className="z-40">
                    <Image
                      src={avatar1}
                      alt="Sales Rep 1"
                      className="rounded-full"
                    />
                  </Avatar>
                  <Avatar
                    className="-ml-6 z-30"
                    style={{ borderColor: "#335edd" }}
                  >
                    <Image
                      src={avatar2}
                      alt="Sales Rep 2"
                      className="rounded-full"
                    />
                  </Avatar>
                  <Avatar
                    className="-ml-6 z-20"
                    style={{ borderColor: "#d8caff" }}
                  >
                    <Image
                      src={avatar3}
                      alt="Sales Rep 3"
                      className="rounded-full"
                    />
                  </Avatar>
                  <Avatar className="-ml-6 border-transparent z-10">
                    <div
                      className="rounded-full flex justify-center items-center size-full text-white"
                      style={{
                        background: "linear-gradient(135deg, #2f2da2, #335edd)",
                      }}
                    >
                      <Users size={30} />
                    </div>
                  </Avatar>
                </div>
              </FeatureCard>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <FeatureCard
                title="Detailed Performance Reports"
                description="Get actionable insights on every conversation with AI-powered feedback"
                className="md:col-span-2 lg:col-span-1 group transition duration-500"
              >
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3
                      size={48}
                      className="mx-auto mb-2 text-gray-400 group-hover:text-gray-600 transition duration-500"
                    />
                    <p className="group-hover:text-gray-600 transition duration-500 text-xl font-bold text-gray-400">
                      Instant{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(to right, #2f2da2, #335edd)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        feedback
                      </span>{" "}
                      reports
                    </p>
                  </div>
                </div>
              </FeatureCard>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <FeatureCard
                title="Proven Sales Results"
                description="Teams see 35% improvement in sales performance within 30 days"
                className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
              >
                <div className="aspect-video flex justify-center items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="text-5xl font-bold group-hover:scale-110 transition-all duration-500"
                      style={{ color: "#335edd" }}
                    >
                      35%
                    </div>
                    <div className="text-sm text-gray-500">Performance</div>
                  </div>
                  <div className="h-16 w-px bg-gray-200 group-hover:h-20 transition-all duration-500"></div>
                  <div className="flex flex-col items-center">
                    <div
                      className="text-5xl font-bold group-hover:scale-110 transition-all duration-500"
                      style={{ color: "#335edd" }}
                    >
                      30
                    </div>
                    <div className="text-sm text-gray-500">Days</div>
                  </div>
                </div>
              </FeatureCard>
            </motion.div>
          </div>
        </motion.div>

        <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-5xl m-auto">
          {features.map((feature) => (
            <div
              className="bg-white border border-gray-200 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group shadow-sm hover:shadow-md"
              key={feature}
            >
              <span
                className="text-white size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500"
                style={{
                  background: "linear-gradient(135deg, #2f2da2, #335edd)",
                }}
              >
                &#10038;
              </span>
              <span className="font-medium md:text-lg text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
