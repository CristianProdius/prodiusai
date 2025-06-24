"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About Us", href: "/#about" },
  {
    label: "Contact",
    href: "https://outlook.office.com/bookwithme/user/17505a49dd124eeeb13b8c8b62157c7d@prodiusenterprise.com/meetingtype/qQJ39XuYgkSawd8BIAFm1w2?anonymous&ismsaljsauthenabled&ep=mlink",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full flex items-center justify-center top-0 z-50">
        <div className="container max-w-5xl ">
          <div className="border border-gray-200 rounded-[27px] lg:rounded-full bg-white/95 backdrop-blur shadow-sm">
            <figure className="grid grid-cols-2 lg:grid-cols-3 py-2 lg:px-2 px-4 items-center">
              <div>
                <Image
                  src="/logo.svg"
                  width={0}
                  height={0}
                  alt="AI Sales Training Logo"
                  className="h-9 w-auto md:h-12"
                />
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-4 xl:gap-6 font-medium text-gray-700">
                  {navLinks.map((each) => (
                    <a
                      href={each.href}
                      key={each.href}
                      className="hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                    >
                      {each.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-2 lg:gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden"
                >
                  {!isOpen ? (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="text-gray-700" size={30} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="text-gray-700" size={30} />
                    </motion.div>
                  )}
                </button>

                {/* Show buttons based on session status */}
                {!isPending && (
                  <>
                    {session ? (
                      <Link
                        href="/home"
                        className="hidden lg:block px-3 xl:px-4 py-2 rounded-full font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm xl:text-base whitespace-nowrap"
                        style={{
                          background:
                            "linear-gradient(135deg, #2f2da2, #335edd)",
                        }}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <>
                        <Link
                          href="/sign-in"
                          className="hidden lg:block px-3 xl:px-4 py-2 border border-gray-300 rounded-full font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm xl:text-base whitespace-nowrap"
                        >
                          Log In
                        </Link>
                        <Link
                          href="/sign-up"
                          className="hidden lg:block px-3 xl:px-4 py-2 rounded-full font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm xl:text-base whitespace-nowrap"
                          style={{
                            background:
                              "linear-gradient(135deg, #2f2da2, #335edd)",
                          }}
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </figure>

            <AnimatePresence>
              {isOpen && (
                <motion.figure
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                    {!isPending && (
                      <>
                        {session ? (
                          <Link
                            href="/home"
                            className="w-3/4 block px-4 py-2 rounded-full font-medium text-white transition-all duration-200 text-center"
                            style={{
                              background:
                                "linear-gradient(135deg, #2f2da2, #335edd)",
                            }}
                          >
                            Dashboard
                          </Link>
                        ) : (
                          <>
                            <Link
                              href="/sign-in"
                              className="w-3/4 block px-4 py-2 border border-gray-300 rounded-full font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-center"
                            >
                              Log In
                            </Link>
                            <Link
                              href="/sign-up"
                              className="w-3/4 block px-4 py-2 rounded-full font-medium text-white transition-all duration-200 text-center"
                              style={{
                                background:
                                  "linear-gradient(135deg, #2f2da2, #335edd)",
                              }}
                            >
                              Register
                            </Link>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </motion.figure>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px]"></div>
    </>
  );
}
