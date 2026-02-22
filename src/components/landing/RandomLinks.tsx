const links = [
  { text: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
  { text: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
  { text: "Rodent Control Corvallis Oregon", url: "https://rodentcontrolcorvallisoregon.vercel.app/" },
  { text: "Spider Control La Grange", url: "https://brownreclusespidercontrollagrange.vercel.app" },
  { text: "Termite Inspection Burbank", url: "https://termiteinspectionburbank.vercel.app/" }
];

const RandomLinks = () => {
  // Take 4 links as requested
  const selectedLinks = links.slice(0, 4);

  return (
    <div className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-widest text-center">
            Regional Wildlife Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {selectedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest text-center hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomLinks;
