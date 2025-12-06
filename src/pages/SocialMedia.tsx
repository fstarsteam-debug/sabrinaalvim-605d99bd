import PageLayout from "@/components/PageLayout";
import { ExternalLink, Instagram } from "lucide-react";

const clients = [
  { 
    name: "Premier Atacadista", 
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/premieratacadista",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Motoshop Show Service", 
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/motoshopshowservice",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "V1 Pagamentos", 
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/v1pagamentos",
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Comercial Falcão", 
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/comercial.falcao.centro",
    color: "from-amber-500 to-yellow-500"
  },
  { 
    name: "Dra. Thamara Gomes", 
    logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/dra.thamaragomes",
    color: "from-pink-500 to-rose-500"
  },
  { 
    name: "Pizzaria do Baiano", 
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop&auto=format",
    instagram: "https://www.instagram.com/pizzaria_do_baiano1",
    color: "from-purple-500 to-violet-500"
  },
];

const SocialMedia = () => {
  return (
    <PageLayout
      title="Gestão de Mídias Sociais"
      subtitle="Estratégia, planejamento e gestão completa das suas redes sociais."
    >
      {/* Hero Stats */}
      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl" />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">+50</p>
            <p className="text-muted-foreground mt-2 text-lg">Clientes Ativos</p>
          </div>
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">1M+</p>
            <p className="text-muted-foreground mt-2 text-lg">Alcance Mensal</p>
          </div>
          <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(162,89,255,0.4)]">
            <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">100%</p>
            <p className="text-muted-foreground mt-2 text-lg">Comprometimento</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          O que está <span className="text-gradient">incluso</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { text: "Planejamento estratégico mensal", icon: "📊" },
            { text: "Criação de conteúdo visual", icon: "🎨" },
            { text: "Copywriting persuasivo", icon: "✍️" },
            { text: "Gestão de calendário editorial", icon: "📅" },
            { text: "Análise de métricas e relatórios", icon: "📈" },
            { text: "Atendimento via WhatsApp", icon: "💬" }
          ].map((service, index) => (
            <div 
              key={index} 
              className="group p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(162,89,255,0.2)]"
            >
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <p className="text-foreground font-medium">{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          Alguns Perfis que <span className="text-gradient">Gerencio</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">Clique para visitar o Instagram</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-8 bg-card/50 rounded-3xl border border-border/50 hover:border-transparent transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-[2px] bg-card rounded-[22px] z-10" />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col items-center">
                {/* Logo Container */}
                <div className={`relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-border group-hover:border-transparent transition-colors duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="absolute inset-[3px] rounded-full overflow-hidden bg-card">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Name */}
                <p className="text-lg font-bold text-center group-hover:text-primary transition-colors duration-300 mb-3">
                  {client.name}
                </p>
                
                {/* Instagram Badge */}
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${client.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  <Instagram className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">Ver Instagram</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default SocialMedia;