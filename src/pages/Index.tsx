import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MetropolisCricketInfo from "@/components/landing/MetropolisCricketInfo";
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
        <title>cricket extermination Metropolis Illinois - Metropolis Cricket Control Pros</title>
        <meta name="description" content="cricket extermination Metropolis Illinois - Professional cricket extermination in Metropolis, IL. Licensed specialists providing rapid removal of crickets and long-term protection." />
        <meta name="keywords" content="cricket extermination Metropolis Illinois, cricket removal Metropolis IL, house cricket control Metropolis, field cricket exterminator Metropolis IL, pest control Metropolis IL" />
        <link rel="canonical" href="https://cricketexterminationmetropolisillinois.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Metropolis Cricket Control Pros",
            "image": "/1.jpeg",
            "@id": "https://cricketexterminationmetropolisillinois.com/",
            "url": "https://cricketexterminationmetropolisillinois.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "100 Ferry St",
              "addressLocality": "Metropolis",
              "addressRegion": "IL",
              "postalCode": "62960",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.1512",
              "longitude": "-88.7320"
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
            "serviceType": "Cricket Extermination & Protection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metropolis Cricket Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Metropolis, IL"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cricket Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Cricket Extermination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perimeter Cricket Barriers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fabric Protection Treatments" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="cricket extermination Metropolis Illinois - Metropolis Cricket Control Pros" />
        <meta property="og:description" content="cricket extermination Metropolis Illinois - Expert cricket removal and protection services in Metropolis, IL." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cricketexterminationmetropolisillinois.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              cricket extermination <br />
              <span className="text-white drop-shadow-sm uppercase">Metropolis Illinois</span>
            </>
          }
          subtitle="Metropolis's specialized experts in rapid cricket extermination and long-term property protection. We eliminate noisey house crickets and destructive field crickets to safeguard your home's peace and your valuable fabrics. Licensed and ready 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="METROPOLIS CRICKET ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <MetropolisCricketInfo />
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
