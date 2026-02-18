import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FortCollinsSewerRepairInfo from "@/components/landing/FortCollinsSewerRepairInfo";
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
        <title>sewer line repair fort collins | Fort Collins Sewer Repair Pros</title>
        <meta name="description" content="sewer line repair fort collins - Professional sewer line repair and trenchless pipe lining in Fort Collins, CO. Expert main line diagnostics and localized sewer solutions. Call (877) 792-1410." />
        <meta name="keywords" content="sewer line repair fort collins, Fort Collins CO sewer replacement, trenchless sewer repair, main line diagnostics, Larimer County sewer repair" />
        <link rel="canonical" href="https://sewer-line-repair-fort-collins.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fort Collins Sewer Repair Pros",
            "image": "https://images.unsplash.com/photo-1541604193435-2258789965d8?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 LaPorte Ave",
              "addressLocality": "Fort Collins",
              "addressRegion": "CO",
              "postalCode": "80521",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.5853",
              "longitude": "-105.0844"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Fort Collins, Colorado"
            },
            "priceRange": "$$$",
            "description": "Expert sewer line repair and trenchless pipe lining services in Fort Collins, CO. Specialized in residential sewer diagnostics and main line restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sewer Line Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Fort Collins Sewer Repair Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Fort Collins, CO"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fort Collins Sewer Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trenchless Pipe Lining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Camera Inspection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Excavation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="sewer line repair fort collins - Fort Collins Sewer Repair Pros" />
        <meta property="og:description" content="Professional sewer line repair and trenchless restoration in Fort Collins, CO. Protect your property with advanced diagnostics and master-grade plumbing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sewer-line-repair-fort-collins.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541604193435-2258789965d8?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              sewer line repair fort collins
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Fort Collins Sewer Repair Pros</span>
            </>
          }
          subtitle="Fort Collins' premier experts in master-grade sewer line repair and trenchless restoration. We design high-performance main line solutions tailored for Colorado's complex soil conditions, ensuring long-term structural integrity. Engineering excellence for Larimer County."
          image="https://images.unsplash.com/photo-1541604193435-2258789965d8?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1621905235277-28564a938c35?auto=format&fit=crop&q=80"
          badge="FORT COLLINS SEWER RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <FortCollinsSewerRepairInfo />
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



