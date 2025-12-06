import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Play, Pause } from "lucide-react";

const videos = [
  { 
    id: 1, 
    title: "Reel Promocional 1",
    embedUrl: "https://drive.google.com/file/d/1c60lcWuBNdmyzV5ETbXRJMO3wrT2ySeJ/preview"
  },
  { 
    id: 2, 
    title: "Reel Promocional 2",
    embedUrl: "https://drive.google.com/file/d/16rC24a3MJmpqny4Grau20qHBgm6SPunK/preview"
  },
  { 
    id: 3, 
    title: "Reel Promocional 3",
    embedUrl: "https://drive.google.com/file/d/1skOgTYdQzgtB1xL18BBuePwIzzJgn4lY/preview"
  },
  { 
    id: 4, 
    title: "Reel Promocional 4",
    embedUrl: "https://drive.google.com/file/d/1FzR2o-O4U_OovHdfJpNAfnvOdq4s56vJ/preview"
  },
  { 
    id: 5, 
    title: "Reel Promocional 5",
    embedUrl: "https://drive.google.com/file/d/1_su6uIq9nBzfK7QT-Ukg9tZmvNwNThq7/preview"
  },
  { 
    id: 6, 
    title: "Reel Promocional 6",
    embedUrl: "https://drive.google.com/file/d/1lksc1JH9DSLaClt1PctbleiVmO_1T9DE/preview"
  },
];

const Reels = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <PageLayout
      title="Edições para Reels"
      subtitle="Edições profissionais que engajam, entretêm e convertem seu público."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+500</p>
          <p className="text-muted-foreground">Reels Editados</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">5M+</p>
          <p className="text-muted-foreground">Visualizações</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">48h</p>
          <p className="text-muted-foreground">Entrega Média</p>
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">O que está incluso</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Cortes dinâmicos e transições",
            "Sincronização com áudio/música",
            "Legendas animadas",
            "Correção de cor e filtros",
            "Efeitos visuais e motion graphics",
            "Otimização para algoritmo"
          ].map((service, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
              <p className="text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-8">Alguns Trabalhos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="aspect-[9/16] rounded-xl overflow-hidden neon-border bg-card relative group"
            >
              <iframe
                src={video.embedUrl}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Reels;
