const links = [
  { text: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Denver Earwig Control Specialists", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Earwig Removal & Pest Control Denver CO", url: "https://earwigexterminatordenver.vercel.app/" },
  { text: "Professional Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
