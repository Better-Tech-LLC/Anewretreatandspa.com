"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const packages = [
  {
    name: "The Celebration",
    price: "From $8,000",
    tagline: "Wedding day venue rental",
    duration: "Wedding day",
    includes: [
      "Private use of designated ceremony and reception spaces",
      "Access to indoor and outdoor celebration areas",
      "Use of the estate for your wedding-day timeline",
      "Getting-ready space",
      "Flexibility to bring in approved outside vendors",
      "On-site venue contact for property access and logistics",
    ],
    best: "Couples who want the ANEW setting while arranging their own accommodations, catering, and vendor team",
    details:
      "Celebrate in one beautiful place with flexible indoor and outdoor spaces and the full estate as the backdrop for your wedding-day timeline.",
  },
  {
    name: "The Estate Weekend",
    price: "From $21,000",
    tagline: "Wedding celebration + two-night stay",
    duration: "Two nights",
    includes: [
      "Everything included in The Celebration",
      "Two-night private estate stay",
      "Extended access for rehearsal, setup, wedding day, and post-wedding time",
      "A relaxed home-base experience for the couple and overnight guests",
      "More time to enjoy the property beyond the wedding itself",
      "Ideal for destination-style and full-weekend celebrations",
    ],
    best: "Couples who want the wedding and overnight experience together without choosing a fully inclusive package",
    details:
      "Build a wedding weekend around your vision — arrive early for rehearsal and setup, celebrate, and stay on to unwind with your closest guests.",
  },
  {
    name: "The ANEW Signature Weekend",
    price: "From $45,000",
    tagline: "Elevated all-inclusive wedding weekend",
    duration: "Two nights",
    featured: true,
    includes: [
      "Two-night private estate stay",
      "Wedding ceremony and reception venue rental",
      "Customized food experience with the resident chef",
      "Tables, chairs, and event rentals based on selected design",
      "Wedding-day coordination and timeline support",
      "Setup and cleanup support",
      "Customized planning around guest count, menu, bar, and event flow",
    ],
    best: "Couples who want one streamlined experience with accommodations, celebration space, food, and event support coordinated together",
    details:
      "Our most elevated experience. Accommodations, celebration spaces, resident-chef dining, and event support — coordinated together as one seamless weekend.",
  },
];

const enhancements = [
  "Additional overnight accommodations / extra nights",
  "Resident-chef catering and custom menus",
  "Bar service",
  "Wedding planning or expanded coordination",
  "Tables, chairs, linens, and specialty event rentals",
  "Setup and cleanup",
  "Rehearsal dinner, welcome gathering, or farewell brunch",
  "Shuttle / transportation coordination",
];

const pricingFaqs = [
  {
    q: "How do I reserve my date?",
    a: "Packages are customized based on event date, guest count, spaces used, accommodations, food and beverage, and selected services. A signed agreement and retainer are required to reserve your date.",
  },
  {
    q: "Can packages be customized?",
    a: "Every package is a starting point. We're happy to adjust spaces, accommodations, and services to match your vision.",
  },
  {
    q: "Can I bring my own vendors?",
    a: "Yes — The Celebration and The Estate Weekend offer the flexibility to bring in approved outside vendors for catering, photography, florals, and entertainment.",
  },
  {
    q: "What enhancements are available?",
    a: "Extra nights, resident-chef catering, bar service, wedding planning and coordination, event rentals, setup and cleanup, rehearsal dinners, welcome gatherings, farewell brunches, and shuttle coordination.",
  },
];

export default function PackagesPage() {
  // Auto-expand The ANEW Signature Weekend (index 2) by default
  const [expandedPkg, setExpandedPkg] = useState<number | null>(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image src="/images/courtyard-lounge.webp" alt="Packages" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.5em] uppercase mb-5 text-white/70">Weddings &amp; Celebrations</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-normal">Packages</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Packages */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="divider mx-auto mb-8" />
            <p className="text-muted text-base leading-relaxed max-w-lg mx-auto">
              A private estate experience in Kenmore, Washington. Celebrate in one beautiful place with flexible
              indoor and outdoor spaces, overnight accommodations, and the option to build a wedding weekend
              around your vision.
            </p>
          </AnimatedSection>

          <div className="space-y-0">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.05}>
                <div className={`border-b border-border ${pkg.featured ? "bg-cream -mx-6 px-6 py-2 rounded-sm" : ""}`}>
                  {/* Header row */}
                  <button
                    onClick={() => setExpandedPkg(expandedPkg === i ? null : i)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <h3 className="font-heading text-2xl text-dark group-hover:text-accent transition-colors">{pkg.name}</h3>
                      {pkg.featured && (
                        <span className="text-[9px] tracking-[0.2em] uppercase bg-accent text-white px-2.5 py-1">Popular</span>
                      )}
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-heading text-2xl text-dark">{pkg.price}</span>
                      <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${expandedPkg === i ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedPkg === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8">
                          <div className="flex flex-wrap gap-4 text-[11px] tracking-[0.2em] uppercase text-muted mb-6">
                            <span>{pkg.tagline}</span>
                            <span>&middot;</span>
                            <span>{pkg.duration}</span>
                          </div>
                          <p className="text-muted text-sm leading-relaxed mb-3">{pkg.details}</p>
                          <p className="text-muted text-sm leading-relaxed mb-6">
                            <span className="text-dark">Best for:</span> {pkg.best}.
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2 mb-6">
                            {pkg.includes.map((item) => (
                              <div key={item} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                                <span className="text-sm text-muted">{item}</span>
                              </div>
                            ))}
                          </div>
                          <Link
                            href="/inquire"
                            className="text-[11px] tracking-[0.3em] uppercase text-dark border-b border-dark pb-1 hover:text-accent hover:border-accent transition-colors"
                          >
                            Inquire About This Package
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-28 sm:py-36 bg-cream px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-4">Customize Your Experience</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark font-normal">Available Enhancements</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {enhancements.map((enhancement, i) => (
              <AnimatedSection key={enhancement} delay={i * 0.03}>
                <div className="flex items-start gap-3 py-4 border-b border-border">
                  <Check className="w-3.5 h-3.5 text-accent mt-1 shrink-0" />
                  <span className="text-[15px] text-dark">{enhancement}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-4">Pricing</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark font-normal">Questions</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-dark text-[15px] pr-4 group-hover:text-accent transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted leading-relaxed pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image src="/images/forest-approach.webp" alt="Forest" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <AnimatedSection>
            <h2 className="font-heading text-4xl sm:text-5xl font-normal mb-6">Reserve Your Date</h2>
            <Link href="/inquire" className="text-[11px] tracking-[0.3em] uppercase border border-white text-white px-8 py-3.5 hover:bg-white hover:text-dark transition-all duration-500">
              Start Your Inquiry
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
