import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FultonSquirrelControlInfo from "@/components/landing/FultonSquirrelControlInfo";
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
        <title>Squirrel pest control in Fulton MD - Fulton Squirrel Control Pros</title>
        <meta name="description" content="Squirrel pest control in Fulton MD - Professional squirrel removal and home protection in Fulton. Specialized wildlife experts providing humane exclusion and property securing." />
        <meta name="keywords" content="Squirrel pest control in Fulton MD, squirrel removal Fulton, attic wildlife exclusion Fulton, rodent control Howard County, humane squirrel trapping Fulton MD" />
        <link rel="canonical" href="https://squirrelpestcontrolinfultonmd.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Fulton Squirrel Control Pros",
            "image": "/1.jpeg",
            "@id": "https://squirrelpestcontrolinfultonmd.vercel.app/",
            "url": "https://squirrelpestcontrolinfultonmd.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7600 Old Columbia Rd",
              "addressLocality": "Fulton",
              "addressRegion": "MD",
              "postalCode": "20759",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1554",
              "longitude": "-76.9247"
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
            "serviceType": "Squirrel Pest Control & Attic Exclusion",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Fulton Squirrel Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Fulton, MD"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Squirrel Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attic Wildlife Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Humane Squirrel Trapping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Damage Restoration" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Squirrel pest control in Fulton MD - Fulton Squirrel Control Pros" />
        <meta property="og:description" content="Squirrel pest control in Fulton MD - Expert squirrel removal and attic exclusion services in Fulton, MD." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://squirrelpestcontrolinfultonmd.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Squirrel pest control <br />
              <span className="text-white drop-shadow-sm uppercase">in Fulton MD</span>
            </>
          }
          subtitle="Fulton's specialized experts in professional squirrel pest control and attic asset protection. We provide rapid-response removal, structural exclusion, and property securing to safeguard your home from destructive rodents. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="FULTON SQUIRREL PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <FultonSquirrelControlInfo />
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
