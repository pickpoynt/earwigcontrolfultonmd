import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CentipedeRepellentHawaiiInfo from "@/components/landing/CentipedeRepellentHawaiiInfo";
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
        <title>centipede repellent hawaii - Hawaii Centipede Repellent Pros</title>
        <meta name="description" content="centipede repellent hawaii - Professional centipede repellent hawaii. Licensed pest specialists deploy proven centipede repellent treatments, perimeter barriers, and full home protection across Hawaii. Call (323) 880-1224 for 24/7 same-day service." />
        <meta name="keywords" content="centipede repellent hawaii, hawaii centipede control, centipede treatment hawaii, pest control hawaii centipede" />
        <link rel="canonical" href="https://centipederepellenthawaii.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hawaii Centipede Repellent Pros",
            "image": "/1.jpeg",
            "@id": "https://centipederepellenthawaii.com/",
            "url": "https://centipederepellenthawaii.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1000 Bishop St",
              "addressLocality": "Honolulu",
              "addressRegion": "HI",
              "postalCode": "96813",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.3069",
              "longitude": "-157.8583"
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
            "serviceType": "Centipede Repellent Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hawaii Centipede Repellent Pros"
            },
            "areaServed": {
              "@type": "State",
              "name": "Hawaii"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Centipede Repellent Hawaii Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Centipede Inspection & Identification" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perimeter Repellent Barrier Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Centipede Elimination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="centipede repellent hawaii - Hawaii Centipede Repellent Pros" />
        <meta property="og:description" content="centipede repellent hawaii - Licensed Hawaii pest specialists. Same-day centipede repellent treatments, perimeter barriers, and full home protection across Hawaii." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centipederepellenthawaii.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              centipede repellent <br />
              <span className="text-white drop-shadow-sm uppercase">hawaii</span>
            </>
          }
          subtitle="Hawaii's most trusted centipede repellent specialists. We deploy targeted perimeter barrier treatments, deep-crack exclusion applications, and moisture-zone management to protect your Hawaii home from dangerous centipede invasions — fast."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="HAWAII CENTIPEDE CONTROL ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <CentipedeRepellentHawaiiInfo />
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
