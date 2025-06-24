"use client";

import Tag from "./Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How do AI customers simulate real sales conversations?",
    answer:
      "Our AI customers are trained on thousands of real buyer interactions and can simulate various customer personas, objections, and buying scenarios. They adapt their responses based on your sales approach, creating realistic practice sessions that mirror actual client meetings.",
  },
  {
    question: "How quickly will my sales team see results?",
    answer:
      "Most teams see noticeable improvement within 2 weeks of regular practice. Our data shows an average 35% improvement in sales performance within 30 days. The key is consistent practice - even 15 minutes per day can significantly boost confidence and closing rates.",
  },
  {
    question: "What kind of feedback reports do sales reps receive?",
    answer:
      "After each conversation, our AI provides detailed feedback on communication style, objection handling, closing techniques, and missed opportunities. Reports include specific recommendations for improvement, conversation highlights, and progress tracking over time.",
  },
  {
    question: "Can the platform integrate with our existing sales tools?",
    answer:
      "Yes! We integrate seamlessly with major CRMs like Salesforce, HubSpot, and Pipedrive, plus communication tools like Slack and Microsoft Teams. Training data syncs with your existing workflow, so managers can track progress alongside actual sales metrics.",
  },
  {
    question: "Is this suitable for different industries and sales types?",
    answer:
      "Absolutely. Our AI customers can be customized for any industry - from SaaS and financial services to real estate and manufacturing. Whether your team does B2B enterprise sales, SMB outreach, or retail interactions, we configure scenarios that match your specific market and customer base.",
  },
  {
    question: "How fast can we get our team started?",
    answer:
      "Setup typically takes 48 hours. We'll configure AI customers for your industry, import your sales scenarios, and train your team on the platform. Most companies have their entire sales team actively practicing within the first week of onboarding.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 ">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Frequently Asked Questions</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto text-gray-900">
          Questions? We&apos;ve got{" "}
          <span style={{ color: "#335edd" }}>answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0 text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                  style={{ color: "#335edd" }}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
