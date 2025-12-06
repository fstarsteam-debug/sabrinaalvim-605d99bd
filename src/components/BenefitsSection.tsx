import { 
  Zap, 
  MessageCircle, 
  Target, 
  FolderOpen, 
  Crown, 
  TrendingUp 
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Entrega rápida e profissional",
    description: "Cumprimento de prazos com qualidade excepcional"
  },
  {
    icon: MessageCircle,
    title: "Comunicação clara e humanizada",
    description: "Atendimento próximo e personalizado"
  },
  {
    icon: Target,
    title: "Design estratégico focado em performance",
    description: "Criações que geram resultados reais"
  },
  {
    icon: FolderOpen,
    title: "Portfólio moderno e atualizado",
    description: "Sempre alinhado às tendências do mercado"
  },
  {
    icon: Crown,
    title: "Padrão premium em todos os detalhes",
    description: "Excelência em cada pixel"
  },
  {
    icon: TrendingUp,
    title: "Resultados reais para empresas locais",
    description: "Cases de sucesso comprovados"
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Por que escolher <span className="text-gradient">Sabrina?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu projeto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-neon flex items-center justify-center mb-6 neon-glow group-hover:animate-pulse-glow">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
