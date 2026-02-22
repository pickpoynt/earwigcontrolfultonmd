import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind, Home, Shield, Volume2 } from "lucide-react";

const MetropolisCricketInfo = () => {
    return (
        <section id="cricket-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Metropolis Illinois Pest Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">cricket extermination Metropolis Illinois</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Don't let the constant chirping and damage to fabrics disrupt your peace. Our Metropolis-based specialists deploy clinical-grade extermination methods to eliminate field crickets, house crickets, and cave crickets from your property once and for all.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Volume2 className="w-7 h-7 text-rose-500" />
                                    The Nuisance of Crickets in Metropolis
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Stealthy Invaders</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Crickets in Illinois are more than just a noisy nuisance. They often seek shelter indoors when the temperatures drop, nesting in basements, crawl spaces, and behind appliances. Our cricket extermination Metropolis Illinois team identifies these nesting sites using high-sensitivity detection tools.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Fabric & Property Protection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                House crickets are known to chew through everything from silk and wool to paper and cardboard. We apply specialized perimeter barriers and targeted interior treatments that are lethal to crickets but safe for your family and pets.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Home className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Long-Term Exclusion</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Eliminating the current population is only half the battle. We specialize in sealing entry points and moisture management to ensure that crickets don't return to your Metropolis home next season.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Metropolis & Massac County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Fast response for cricket extermination Metropolis Illinois in:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Metropolis",
                                        "Brookport",
                                        "Joppa",
                                        "Massac",
                                        "Unionville",
                                        "Round Knob",
                                        "Midway",
                                        "Hillerman"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <img src="/3.jpeg" alt="Cricket Control Prevention" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Superman City Standard</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Metropolis, we take pride in our "Super" level of service. Our cricket extermination Metropolis Illinois experts are trained to handle the specific ecological challenges of the Ohio River valley, where humid conditions often lead to explosive cricket populations. We don't just spray; we solve.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            When to Call for <span className="text-indigo-600">cricket extermination Metropolis Illinois</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Volume2, title: "Loud Chirping", desc: "If the sound of male crickets becomes a constant background noise inside your walls or basement, you likely have a significant infestation." },
                                { icon: Sparkles, title: "Damaged Fabric", desc: "Discovery of irregular holes in clothing, curtains, or upholstery, often accompanied by small black fecal pellets, is a sign of house cricket activity." },
                                { icon: AlertTriangle, title: "Large Sightings", desc: "Seeing multiple crickets indoors daily, especially during damp periods, indicates they have established a nesting site within your foundation." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Stop the Noise Today
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't let crickets damage your garments and disrupt your sleep. Our Metropolis cricket extermination team provides rapid, same-day response to restore your home's peace and quiet.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Licensed Exterminators</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Eco-Targeted Tech</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">cricket extermination Metropolis Illinois</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    cricket extermination Metropolis Illinois
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetropolisCricketInfo;
