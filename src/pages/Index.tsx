import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FayettevilleLeakDetectionInfo from "@/components/landing/FayettevilleLeakDetectionInfo";
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
        <title>water leak detection fayetteville ar</title>
        <meta name="description" content="water leak detection fayetteville ar - Specialized non-invasive water leak detection, acoustic diagnostics & thermal imaging in Fayetteville, AR. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="water leak detection fayetteville ar, Fayetteville leak repair, pipe leak detection Fayetteville, acoustic water detection Washington County, non-invasive plumbing Arkansas" />
        <link rel="canonical" href="https://fayetteville-leak-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fayetteville Leak Detection Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fayetteville",
              "addressRegion": "AR",
              "postalCode": "72701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.0626",
              "longitude": "-94.1574"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Fayetteville, AR"
            },
            "priceRange": "$$",
            "description": "Professional non-invasive water leak detection services in Fayetteville, Arkansas. Specialized in acoustic mapping, pipe diagnostics, and structural protection for Northwest Arkansas property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Water Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Fayetteville Leak Detection Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Fayetteville, Arkansas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fayetteville Leak Diagnostics Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acoustic Pipe Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Non-Invasive Moisture Identification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Washington County Infrastructure Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="water leak detection fayetteville ar Location - Fayetteville Leak Detection Pros" />
        <meta property="og:description" content="Expert non-invasive water leak detection in Fayetteville, Arkansas. Protecting Northwest Arkansas homes with advanced acoustic and thermal diagnostics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fayetteville-leak-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              water leak detection fayetteville ar
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Fayetteville Leak Detection Pros</span>
            </>
          }
          subtitle="Fayetteville's premier authority for non-invasive water leak diagnostics. We utilize advanced acoustic mapping to pinpoint hidden leaks without destructive excavation. Supporting Northwest Arkansas structural integrity."
          image="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&q=80&w=2000"
          badge="FAYETTEVILLE AUTHORIZED SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <FayettevilleLeakDetectionInfo />
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
