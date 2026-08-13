import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ImageIcon, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CornerAccent from "@/components/CornerAccent";

const FEATURED_SLOTS = 4;
const GRID_SLOTS = 12;
const CATEGORY_SLOTS = 5;

function PlaceholderCard({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "w-[280px]" : ""}>
      <div className="relative aspect-square bg-cream rounded-lg mb-4 border border-dashed border-dark/15 flex items-center justify-center">
        <div className="text-center px-4">
          <ImageIcon className="w-6 h-6 text-accent/25 mx-auto mb-2" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Item Photo</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2.5 w-3/4 bg-dark/10 rounded-full" />
        <div className="h-2.5 w-1/2 bg-dark/10 rounded-full" />
        <div className="h-3 w-1/4 bg-accent/20 rounded-full" />
      </div>
    </div>
  );
}

export default function BoutiquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <Image src="/images/interior-living.webp" alt="Boutique" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <AnimatedSection>
            <p className="text-[11px] tracking-[0.5em] uppercase mb-5 text-white/85">The Boutique</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-normal mb-5">ANEW Collection</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg mx-auto">
              Curated wellness essentials, spa comforts, and thoughtful boutique pieces inspired by the ANEW
              retreat experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-4 h-4 text-accent" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-accent">Curated Favorites</p>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark font-normal">Featured Collection</h2>
          </AnimatedSection>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 px-2 min-w-max">
              {Array.from({ length: FEATURED_SLOTS }, (_, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <PlaceholderCard large />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="divider mx-auto" />
      </div>

      {/* Full Collection */}
      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-[11px] tracking-[0.4em] uppercase text-accent mb-3">Shop</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark font-normal">Full Collection</h2>
          </AnimatedSection>

          {/* Category filter placeholders */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-14">
            <span className="text-[11px] tracking-[0.2em] uppercase text-dark border-b border-dark pb-1">All</span>
            {Array.from({ length: CATEGORY_SLOTS }, (_, i) => (
              <span key={i} className="h-3 w-20 bg-dark/10 rounded-full self-center" />
            ))}
          </div>

          {/* Product grid placeholders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: GRID_SLOTS }, (_, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <PlaceholderCard />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Info */}
      <section className="py-24 bg-cream px-6 relative overflow-hidden">
        <CornerAccent position="top-right" />
        <CornerAccent position="bottom-left" />
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <ShoppingBag className="w-8 h-8 text-accent/40 mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-dark font-normal mb-4">Visit Our Boutique</h2>
            <p className="text-muted text-sm leading-relaxed mb-3 max-w-lg mx-auto">
              All boutique items are available on-site during your stay or event at ANEW. Select items can be
              shipped upon request.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              For purchases or inquiries, contact us directly or ask your event coordinator.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="text-[11px] tracking-[0.3em] uppercase bg-dark text-white px-8 py-3.5 hover:bg-accent transition-colors duration-500"
              >
                Book Your Stay
              </Link>
              <a
                href="mailto:Admin@anewretreatandspa.com"
                className="text-[11px] tracking-[0.3em] uppercase text-dark border-b border-dark pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Inquire About Items
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
