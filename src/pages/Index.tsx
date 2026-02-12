import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MustyOdorRemovalInfo from "@/components/landing/MustyOdorRemovalInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Attic mold remediation Haddon Heights</title>
        <meta name="description" content="Attic mold remediation Haddon Heights. Professional attic mold removal and insulation restoration in Haddon Heights, NJ. IICRC certified experts. Call (380) 266-0944!" />
        <meta name="keywords" content="Attic mold remediation Haddon Heights, attic mold removal Haddon Heights NJ, Camden County mold remediation, roof leak mold cleanup" />
        <link rel="canonical" href="https://haddon-heights-attic-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Haddon Heights Attic Mold Pros",
            "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Haddon Heights",
              "addressRegion": "NJ",
              "postalCode": "08035",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.8804",
              "longitude": "-75.0660"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Haddon Heights, Camden County, NJ"
            },
            "priceRange": "$$",
            "description": "Specialized attic mold remediation in Haddon Heights, NJ. We eliminate toxic attic mold, restore insulation, and address roof-level moisture issues using advanced HEPA filtration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Attic Mold Remediation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Haddon Heights Attic Mold Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Haddon Heights, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Attic Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mold Spore HEPA Vacuuming"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Attic Insulation Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biological Air Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Antimicrobial Deck Treatment"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Attic mold remediation Haddon Heights" />
        <meta property="og:description" content="Professional attic mold removal in Haddon Heights, NJ. Permanent remediation for roof leak and ventilation issues." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haddon-heights-attic-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Attic mold remediation Haddon Heights
              <span className="block text-indigo-400 mt-2">HADDON HEIGHTS ATTIC MOLD PROS: STRUCTURAL CARE</span>
            </>
          }
          subtitle="Structural roof mold can compromise your home's value and air health. We specialize in deep-extraction attic remediation, insulation resets, and ventilation audits for Haddon Heights residences."
          image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <MustyOdorRemovalInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
