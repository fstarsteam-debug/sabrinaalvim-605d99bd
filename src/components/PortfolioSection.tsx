import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { image: portfolio1, category: "Identidade Visual" },
  { image: portfolio2, category: "Social Media" },
  { image: portfolio3, category: "Branding" },
  { image: portfolio4, category: "Carrosséis" },
  { image: portfolio5, category: "Impressos" },
  { image: portfolio6, category: "Embalagens" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja como transformo ideias em marcas inesquecíveis
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium px-3 py-1 bg-primary/90 rounded-full">
                  {item.category}
                </span>
              </div>
              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
