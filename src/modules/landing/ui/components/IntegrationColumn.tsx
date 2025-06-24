"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import { type IntegrationsType } from "./Integrations";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const IntegrationColumn = (props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) => {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) =>
            integration ? (
              <div
                key={integration.name}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center items-center h-24">
                  <div className="relative w-auto h-16 flex items-center justify-center">
                    <Image
                      src={integration.icon}
                      alt={`${integration.name}-icon`}
                      className="object-contain max-h-full"
                      width={80}
                      height={64}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-center mt-6 text-gray-900">
                  {integration.name}
                </h3>
                <p className="text-center text-gray-600 mt-2 text-sm">
                  {integration.description}
                </p>
              </div>
            ) : null
          )}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default IntegrationColumn;
