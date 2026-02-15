import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import NorthRidgevillePlumbingInfo from "@/components/landing/NorthRidgevillePlumbingInfo";
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
        <title>plumber north ridgeville ohio North Ridgeville OH</title>
        <meta name="description" content="plumber north ridgeville ohio North Ridgeville OH - Precision plumbing repair, leak detection & infrastructure maintenance. 24/7 technical response for North Ridgeville and Lorain County. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber north ridgeville ohio, North Ridgeville plumber, plumbing repair North Ridgeville, emergency plumber North Ridgeville, Lorain County plumbing, North Ridgeville leak detection" />
        <link rel="canonical" href="https://north-ridgeville-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "North Ridgeville Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1517646281602-7b9265436d40?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Ridgeville",
              "addressRegion": "OH",
              "postalCode": "44039",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.3895",
              "longitude": "-82.0190"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "North Ridgeville, OH"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in North Ridgeville, Ohio. We specialize in maintenance, technical diagnostics, and high-performance plumbing care for Lorain County homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "North Ridgeville Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "North Ridgeville, Ohio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "North Ridgeville Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hydro-Jetting Infrastructure Support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Quality Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber north ridgeville ohio North Ridgeville OH - North Ridgeville Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in North Ridgeville, Ohio. Precision diagnostics and infrastructure restoration for Lorain County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://north-ridgeville-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-8846383242 payment-placeholder?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber north ridgeville ohio North Ridgeville OH
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">North Ridgeville Plumbing Pros</span>
            </>
          }
          subtitle="North Ridgeville's trusted authority for high-performance home infrastructure. We provide precision diagnostics, technical repair, and elite support for Lorain County property owners. Suburban Engineering Excellence."
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1542013936693-8846383242?auto=format&fit=crop&q=80&w=2000"
          badge="NORTH RIDGEVILLE MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <NorthRidgevillePlumbingInfo />
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
