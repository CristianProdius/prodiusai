"use client";

import CallToAction from "../components/CallToAction";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Integrations from "../components/Integrations";
import Introduction from "../components/Introduction";
import Navbar from "../components/navbar";

export const LandingView = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </div>
  );
};
