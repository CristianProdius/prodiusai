"use client";

export default function Hero() {
  return (
    <section
      className="py-24 overflow-x-clip flex flex-col items-center "
      style={{
        cursor: "url(/cursor-you.svg), auto",
      }}
    >
      <div className="container relative">
        {/* Hero Content */}
        <div className="flex justify-center">
          <div
            className="inline-flex py-1 px-3 rounded-full text-white font-semibold text-center"
            style={{
              background: "linear-gradient(to right, #2f2da2, #335edd)",
            }}
          >
            AI Sales Training That Boosts Performance
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-gray-900">
          Train Your Sales Team with AI Customers
        </h1>
        <p className="text-center text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
          Your salespeople practice real conversations with AI customers that
          simulate actual buying scenarios. Get detailed feedback on every
          interaction, build confidence, and close more deals.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold" style={{ color: "#335edd" }}>
              50K+
            </div>
            <div className="text-gray-500 text-sm">Sales Conversations</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold" style={{ color: "#335edd" }}>
              94%
            </div>
            <div className="text-gray-500 text-sm">User Satisfaction</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold" style={{ color: "#335edd" }}>
              35%
            </div>
            <div className="text-gray-500 text-sm">Sales Improvement</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold" style={{ color: "#335edd" }}>
              48hrs
            </div>
            <div className="text-gray-500 text-sm">Quick Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}
