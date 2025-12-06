import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const clients = [
  { 
    name: "Premier Atacadista", 
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/premieratacadista"
  },
  { 
    name: "Motoshop Show Service", 
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/motoshopshowservice"
  },
  { 
    name: "V1 Pagamentos", 
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/v1pagamentos"
  },
  { 
    name: "Comercial Falcão", 
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/comercial.falcao.centro"
  },
  { 
    name: "Dra. Thamara Gomes", 
    logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/dra.thamaragomes"
  },
  { 
    name: "Pizzaria do Baiano", 
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/pizzaria_do_baiano1"
  },
];

const SocialMedia = () => {
  return (
    <PageLayout
      title="Gestão de Mídias Sociais"
      subtitle="Estratégia, planejamento e gestão completa das suas redes sociais."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+50</p>
          <p className="text-muted-foreground">Clientes Ativos</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">1M+</p>
          <p className="text-muted-foreground">Alcance Mensal</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100%</p>
          <p className="text-muted-foreground">Comprometimento</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">O que está incluso</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Planejamento estratégico mensal",
            "Criação de conteúdo visual",
            "Copywriting persuasivo",
            "Gestão de calendário editorial",
            "Análise de métricas e relatórios",
            "Atendimento via WhatsApp"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-8">Alguns Perfis que Gerencio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 hover:neon-glow transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center font-medium group-hover:text-primary transition-colors">
                {client.name}
              </p>
              <ExternalLink className="w-4 h-4 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SocialMedia;
