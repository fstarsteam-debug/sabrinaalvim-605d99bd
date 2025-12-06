import { Palette, Target, Sparkles, TrendingUp, Award } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Award, text: "Mais de 17 anos criando identidade visual" },
    { icon: Target, text: "Especialista em redes sociais para pequenas empresas" },
    { icon: Sparkles, text: "Foco em estética moderna, limpa e profissional" },
    { icon: Palette, text: "Capacidade de transformar ideias em marcas fortes" },
    { icon: TrendingUp, text: "Domínio de design estratégico orientado a vendas" },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden neon-border">
              <img 
                src={portfolio1} 
                alt="Trabalhos de design gráfico" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl neon-border">
              <p className="text-4xl font-heading font-bold text-gradient">+300</p>
              <p className="text-sm text-muted-foreground">Projetos Entregues</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                <span className="text-gradient">Criatividade</span> que conecta.
                <br />
                <span className="text-gradient">Estratégia</span> que converte.
              </h2>
            </div>
            
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
