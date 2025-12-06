import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>
      
      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Gostou? Vamos <span className="text-gradient">conversar!</span>
          </h2>
          <Button variant="hero" size="xl" asChild>
            <a href="http://wa.me/31994216833" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default PageLayout;
