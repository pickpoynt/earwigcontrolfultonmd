import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Attic Exclusion",
    description: "Our Squirrel pest control in Fulton MD experts identify structural gaps and install heavyweight steel mesh to seal your attic for good."
  },
  {
    icon: Search,
    title: "Entry Point Analysis",
    description: "Detailed drone and manual inspections of rooflines, soffits, and vents to locate every possible squirrel access point."
  },
  {
    icon: ShieldCheck,
    title: "Property Hardening",
    description: "Reinforcing vulnerable areas of your home's exterior with chewing-resistant materials to prevent future squirrel invasions."
  },
  {
    icon: Activity,
    title: "Humane Mitigation",
    description: "Safe, rapid-response squirrel removal using one-way exclusion doors and professional trapping protocols in Fulton."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Squirrel pest control in Fulton MD</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive wildlife management solutions designed for Fulton's unique residential landscape. We protect your home's infrastructure from the roof down.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
