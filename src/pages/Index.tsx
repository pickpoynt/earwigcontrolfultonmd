import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CondoRestorationInfo from "@/components/landing/CondoRestorationInfo";
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
        <title>Condo water damage restoration Ocean City MD | Ocean City Condo Restoration Pros</title>
        <meta name="description" content="Condo water damage restoration Ocean City MD. Professional high-rise water extraction, hurricane damage cleanup, and mold prevention in MD. Call (380) 266-0944!" />
        <meta name="keywords" content="Condo water damage restoration Ocean City MD, high-rise water extraction MD, Ocean City beachfront flood repair, condo flood mitigation" />
        <link rel="canonical" href="https://oceancity-condo-restoration.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ocean City Condo Restoration Pros",
            "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ocean City",
              "addressRegion": "MD",
              "postalCode": "21842",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.3365",
              "longitude": "-75.0849"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ocean City, Maryland"
            },
            "priceRange": "$$$",
            "description": "Expert condo water damage restoration in Ocean City, MD. Specialized in high-rise water extraction, moisture detection, and hurricane damage recovery."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Condo Water Damage Restoration Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ocean City Condo Restoration Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ocean City, Maryland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Condo Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Rise Water Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hurricane Damage Cleanup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drywall & Ceiling Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anti-Microbial Sanitization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Condo water damage restoration Ocean City MD | Condo Restoration Pros" />
        <meta property="og:description" content="Professional condo water damage restoration in Ocean City, MD. 24/7 high-rise extraction and hurricane recovery. Call (380) 266-0944 for immediate service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oceancity-condo-restoration.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Condo water damage restoration Ocean City MD
              <span className="block text-cyan-400 mt-2">Ocean City Condo Restoration Pros: Beachfront Expertise</span>
            </>
          }
          subtitle="Protect your beachfront investment from water damage. Our specialized high-rise extraction and structural drying systems target moisture trapped in multi-family buildings—preventing mold and structural decay with Ocean City precision."
          image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <CondoRestorationInfo />
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




