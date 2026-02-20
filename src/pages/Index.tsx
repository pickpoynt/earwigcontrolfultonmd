import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import KlamathFallsDrainCleaningInfo from "@/components/landing/KlamathFallsDrainCleaningInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>drain cleaning klamath falls - Klamath Falls Drain Cleaning Pros</title>
        <meta name="description" content="drain cleaning klamath falls - Professional high-tech drain cleaning klamath falls. Expert plumbers clearing blockages in Klamath Falls, OR. Call 877-792-1410 for 24/7 service." />
        <meta name="keywords" content="drain cleaning klamath falls, Klamath Falls plumber, drain clearing Klamath County, sewer service OR, root removal Klamath Falls" />
        <link rel="canonical" href="https://klamathfallsdraincleaningpros.com/" />

        {/* Structured Data Schemas */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Klamath Falls Drain Cleaning Pros",
            "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
            "@id": "https://klamathfallsdraincleaningpros.com/",
            "url": "https://klamathfallsdraincleaningpros.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "500 Main St",
              "addressLocality": "Klamath Falls",
              "addressRegion": "OR",
              "postalCode": "97601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.2249",
              "longitude": "-121.7817"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": []
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Drain Cleaning Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Klamath Falls Drain Cleaning Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Klamath Falls, OR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Drain Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Main Line Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Kitchen Sink Unclogging"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Root Removal Service"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="drain cleaning klamath falls - Klamath Falls Drain Cleaning Pros" />
        <meta property="og:description" content="drain cleaning klamath falls - Expert professional drain cleaning klamath falls. High-tech solutions for local homeowners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klamathfallsdraincleaningpros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              drain cleaning <br />
              <span className="text-white drop-shadow-sm">klamath falls</span>
            </>
          }
          subtitle="Southern Oregon's mountain-grade drainage specialists. We deploy precision high-torque cleaning technology to restore drain flow and eliminate root intrusion throughout the Klamath Basin's unique environments."
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80"
          badge="KLAMATH BASIN DRAINAGE SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <KlamathFallsDrainCleaningInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
