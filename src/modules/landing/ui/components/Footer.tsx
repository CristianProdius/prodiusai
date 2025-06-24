import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and Company Info */}
          <div className="text-center">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              alt="AI Sales Training Platform Logo"
              className="h-9 w-auto md:h-12 mx-auto mb-3"
            />
            <p className="text-gray-600 text-sm max-w-md">
              Empowering sales teams with AI-powered virtual customers. Practice
              real conversations, get instant feedback, close more deals.
            </p>
          </div>

          {/* Footer Links */}
          <div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-100 w-full">
            <p className="text-gray-400 text-xs">
              © 2025 AI Sales Training Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
