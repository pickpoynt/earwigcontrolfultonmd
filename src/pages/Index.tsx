import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import McCookCoyoteInfo from "@/components/landing/McCookCoyoteInfo";
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
        <title>coyote control McCook NE - McCook Coyote Control Pros</title>
        <meta name="description" content="coyote control McCook NE - Professional coyote control and livestock protection in McCook. Specialized wildlife experts providing humane removal and property securing." />
        <meta name="keywords" content="coyote control McCook NE, coyote removal McCook, livestock protection McCook, ranch predator control Red Willow County, wildlife management McCook NE" />
        <link rel="canonical" href="https://coyotecontrolmccookne.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "McCook Coyote Control Pros",
            "image": "/1.jpeg",
            "@id": "https://coyotecontrolmccookne.vercel.app/",
            "url": "https://coyotecontrolmccookne.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "302 Norris Ave",
              "addressLocality": "McCook",
              "addressRegion": "NE",
              "postalCode": "69001",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.2019",
              "longitude": "-100.6257"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Coyote Control & Predator Mitigation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "McCook Coyote Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "McCook, NE"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Coyote Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Livestock Predator Defense" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Coyote Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermal Wildlife Monitoring" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="coyote control McCook NE - McCook Coyote Control Pros" />
        <meta property="og:description" content="coyote control McCook NE - Expert coyote removal and livestock protection services in McCook, NE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coyotecontrolmccookne.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              coyote control <br />
              <span className="text-white drop-shadow-sm uppercase">McCook NE</span>
            </>
          }
          subtitle="McCook's specialized experts in professional coyote control and livestock asset protection. We provide rapid-response predator mitigation, thermal tracking, and property securing to safeguard your ranch and family from aggressive coyotes. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="MCCOOK COYOTE PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <McCookCoyoteInfo />
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
