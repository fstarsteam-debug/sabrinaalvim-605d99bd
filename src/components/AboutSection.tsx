import { Palette, Target, Sparkles, TrendingUp, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Award, text: "Mais de 17 anos criando identidade visual", color: "from-purple-500 to-pink-500" },
    { icon: Target, text: "Especialista em redes sociais para pequenas empresas", color: "from-blue-500 to-cyan-500" },
    { icon: Sparkles, text: "Foco em estética moderna, limpa e profissional", color: "from-amber-500 to-orange-500" },
    { icon: Palette, text: "Capacidade de transformar ideias em marcas fortes", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, text: "Domínio de design estratégico orientado a vendas", color: "from-red-500 to-rose-500" },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-16">
            <span className="text-gradient">Criatividade</span> que conecta.
            <br />
            <span className="text-gradient">Estratégia</span> que converte.
          </h2>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(162,89,255,0.3)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} p-[2px] group-hover:shadow-lg transition-shadow duration-300`}>
                  <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Text */}
                <p className="text-foreground font-medium relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">+300</p>
              <p className="text-muted-foreground mt-2">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">17+</p>
              <p className="text-muted-foreground mt-2">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-heading font-bold text-gradient">100%</p>
              <p className="text-muted-foreground mt-2">Comprometimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;