import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const topics = [
  "Análise completa da sua marca atual",
  "Definição de posicionamento de mercado",
  "Estratégia de comunicação visual",
  "Planejamento de presença digital",
  "Guia de aplicação da marca",
  "Recomendações personalizadas"
];

const Branding = () => {
  return (
    <PageLayout
      title="Consultoria de Branding"
      subtitle="Orientação estratégica para fortalecer sua marca e se destacar no mercado."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">17+</p>
          <p className="text-muted-foreground">Anos de Experiência</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100+</p>
          <p className="text-muted-foreground">Consultorias</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">1:1</p>
          <p className="text-muted-foreground">Atendimento Exclusivo</p>
        </div>
      </div>

      {/* What's Included */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">O que você vai receber</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-foreground">{topic}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Como Funciona</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Análise", desc: "Avaliação da situação atual" },
            { step: "02", title: "Diagnóstico", desc: "Identificação de pontos de melhoria" },
            { step: "03", title: "Estratégia", desc: "Plano de ação personalizado" },
            { step: "04", title: "Implementação", desc: "Acompanhamento das mudanças" },
          ].map((item, index) => (
            <div key={index} className="relative p-6 bg-card rounded-xl neon-border text-center">
              <span className="text-5xl font-heading font-bold text-primary/20">{item.step}</span>
              <h3 className="text-xl font-heading font-semibold mt-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-card p-12 rounded-2xl neon-border">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Pronta para transformar sua <span className="text-gradient">marca</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Agende uma consultoria e descubra como sua marca pode se destacar no mercado.
        </p>
        <Button variant="hero" size="xl" asChild>
          <a href="http://wa.me/31994216833" target="_blank" rel="noopener noreferrer">
            Agendar Consultoria
            <ArrowRight className="ml-2" />
          </a>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Branding;
