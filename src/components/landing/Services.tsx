import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves, Building2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "High-Rise Extraction",
    description: "Removing water from Ocean City high-rise condos using specialized high-lift pumping systems. We handle multi-floor water migration.",
    link: "#condo-restoration-info"
  },
  {
    icon: Waves,
    title: "Ocean Surge Cleanup",
    description: "Rapid sanitation and drying for Ocean City beachfront properties after coastal storm surges and Atlantic flooding events.",
    link: "#condo-restoration-info"
  },
  {
    icon: Activity,
    title: "Structural Profiling",
    description: "Digital mapping of moisture behind drywall and concrete in Ocean City condos using non-invasive thermal imaging cameras.",
    link: "#condo-restoration-info"
  },
  {
    icon: Filter,
    title: "LGR Dehumidification",
    description: "Removing massive amounts of humidity from MD condo units to prevent persistent beach dampness and secondary mold growth.",
    link: "#condo-restoration-info"
  },
  {
    icon: Wind,
    title: "In-Place Drying",
    description: "Scientific drying techniques to save walls and flooring in Ocean City residences, reducing restoration costs and downtime.",
    link: "#condo-restoration-info"
  },
  {
    icon: AlertTriangle,
    title: "Mold Remediation",
    description: "Full-scale containment and removal of coastal mold colonies that thrive in Ocean City's salt-air and humid condo environments.",
    link: "#condo-restoration-info"
  },
  {
    icon: ShieldCheck,
    title: "Maryland Licensed",
    description: "Professional restoration services fully insured and licensed for work in Maryland condo associations and high-rise HOAs.",
    link: "#condo-restoration-info"
  },
  {
    icon: Zap,
    title: "24/7 Rapid Response",
    description: "Ocean City's fastest emergency crew for condo leaks. We are on the boardwalk ready to respond within 45 minutes.",
    link: "#condo-restoration-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City's Condo Restoration Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Protect your beach investment. Our Ocean City restoration team uses specialized high-rise equipment and coastal drying protocols to save your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


