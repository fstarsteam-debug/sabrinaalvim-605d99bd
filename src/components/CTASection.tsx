import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[120px]" />
      
      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-20 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-12" />
          <div className="absolute top-1/2 -left-20 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-6" />
          <div className="absolute top-3/4 -left-20 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-3" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Pronta para <span className="text-gradient">transformar</span>
            <br />
            a sua marca?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos criar algo incrível juntos. Entre em contato e dê o primeiro passo para uma marca de sucesso.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            className="group"
            asChild
          >
            <a href="http://wa.me/31994216833" target="_blank" rel="noopener noreferrer">
              Fale com Sabrina Agora
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
