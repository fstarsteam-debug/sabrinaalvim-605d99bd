import PageLayout from "@/components/PageLayout";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const works = [
  { id: 1, image: portfolio5, title: "Folder Institucional" },
  { id: 2, image: portfolio3, title: "Cartões de Visita" },
  { id: 3, image: portfolio5, title: "Banner Promocional" },
  { id: 4, image: portfolio3, title: "Flyers e Panfletos" },
  { id: 5, image: portfolio5, title: "Catálogo de Produtos" },
  { id: 6, image: portfolio3, title: "Papelaria Completa" },
];

const Impressos = () => {
  return (
    <PageLayout
      title="Design para Impressos"
      subtitle="Materiais gráficos profissionais que transmitem credibilidade."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+500</p>
          <p className="text-muted-foreground">Materiais Criados</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100+</p>
          <p className="text-muted-foreground">Empresas Atendidas</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">CMYK</p>
          <p className="text-muted-foreground">Print Ready</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Tipos de Materiais</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Cartões de Visita",
            "Folders e Flyers",
            "Banners e Faixas",
            "Catálogos",
            "Cardápios",
            "Papelaria Completa",
            "Convites",
            "Etiquetas e Tags"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors text-center">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-8">Meus Trabalhos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div 
              key={work.id}
              className="group relative rounded-xl overflow-hidden neon-border"
            >
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 bg-primary/90 rounded-full text-sm">{work.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Impressos;
