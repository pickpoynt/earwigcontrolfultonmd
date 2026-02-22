import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">cricket extermination Metropolis Illinois</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Metropolis property owners trust our specialized team for precision cricket removal, property exclusion, and proactive fabric protection. We eliminate infestations at their source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Nesting Detection",
              description: "Clinical-grade diagnostic inspection of your Metropolis property — identifying house, field, and cave cricket nesting sites in damp, dark areas.",
            },
            {
              icon: ShieldCheck,
              title: "Perimeter Barriers",
              description: "Installation of specialized liquid or granular barriers around your foundation to prevent crickets from migrating from the outdoors into your living space.",
            },
            {
              icon: Bug,
              title: "Metabolic Treatment",
              description: "Targeted interior treatments using eco-targeted growth regulators that disrupt the cricket life cycle, ensuring a cricket-free environment.",
            },
            {
              icon: Home,
              title: "Exclusion Service",
              description: "Professional sealing of gaps, cracks, and moisture points in your Metropolis home to lock out future cricket generations permanently.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="tel:3238801224">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Call Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
