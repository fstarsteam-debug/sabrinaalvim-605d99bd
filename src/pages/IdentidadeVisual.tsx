import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioWorks = [
  { id: 1, image: portfolio1, title: "Identidade Visual - Marca Premium" },
  { id: 2, image: portfolio3, title: "Branding Completo - Startup" },
];

const aplicacoes = [
  "Banner", "Cartão de Visitas", "Rede Social", "Adesivos", "Marca d'água", "Carimbos", "Receituários"
];

const atributos = [
  "Tradicional", "Moderna", "Séria", "Divertida", "Acessível", "Exclusiva", 
  "Feminina", "Masculina", "Jovem", "Madura", "Discreta", "Ousada", 
  "Técnica", "Intuitiva", "Rebelde", "Luxuosa", "Delicada", "Popular", 
  "Artesanal", "Corporativa"
];

const IdentidadeVisual = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    telefone: "",
    instagram: "",
    tipoServico: "design",
    email: "",
    segmento: "",
    historia: "",
    marcasAdmira: "",
    concorrentes: "",
    aplicacoes: [] as string[],
    cores: "",
    atributos: [] as string[],
  });

  const handleAplicacaoChange = (aplicacao: string) => {
    setFormData(prev => ({
      ...prev,
      aplicacoes: prev.aplicacoes.includes(aplicacao)
        ? prev.aplicacoes.filter(a => a !== aplicacao)
        : [...prev.aplicacoes, aplicacao]
    }));
  };

  const handleAtributoChange = (atributo: string) => {
    setFormData(prev => ({
      ...prev,
      atributos: prev.atributos.includes(atributo)
        ? prev.atributos.filter(a => a !== atributo)
        : [...prev.atributos, atributo]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Briefing Identidade Visual*%0A%0A` +
      `*Empresa:* ${formData.nomeEmpresa}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Instagram:* ${formData.instagram}%0A` +
      `*Tipo:* ${formData.tipoServico}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Segmento:* ${formData.segmento}%0A` +
      `*História:* ${formData.historia}%0A` +
      `*Marcas que admira:* ${formData.marcasAdmira}%0A` +
      `*Concorrentes:* ${formData.concorrentes}%0A` +
      `*Aplicações:* ${formData.aplicacoes.join(", ")}%0A` +
      `*Cores:* ${formData.cores}%0A` +
      `*Atributos:* ${formData.atributos.join(", ")}`;
    
    window.open(`https://wa.me/31994216833?text=${message}`, "_blank");
    toast({ title: "Formulário enviado!", description: "Você será redirecionado para o WhatsApp." });
  };

  return (
    <PageLayout
      title="Identidade Visual Completa"
      subtitle="Transformamos sua visão em uma marca memorável e profissional."
    >
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">+300</p>
          <p className="text-muted-foreground">Marcas Criadas</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">17+</p>
          <p className="text-muted-foreground">Anos de Experiência</p>
        </div>
        <div className="text-center p-6 bg-card rounded-xl neon-border">
          <p className="text-4xl font-heading font-bold text-gradient">100%</p>
          <p className="text-muted-foreground">Satisfação</p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Alguns Trabalhos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioWorks.map((work) => (
            <div key={work.id} className="group relative rounded-xl overflow-hidden">
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

      {/* Briefing Form */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading font-bold mb-8 text-center">
          Preencha o <span className="text-gradient">Briefing</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl neon-border">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Nome da Empresa *</Label>
              <Input 
                required
                value={formData.nomeEmpresa}
                onChange={(e) => setFormData({...formData, nomeEmpresa: e.target.value})}
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label>Telefone de Contato *</Label>
              <Input 
                required
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Instagram da Empresa</Label>
              <Input 
                value={formData.instagram}
                onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                className="bg-background border-border/50 focus:border-primary"
                placeholder="@suaempresa"
              />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Tipo de Serviço *</Label>
            <RadioGroup 
              value={formData.tipoServico} 
              onValueChange={(value) => setFormData({...formData, tipoServico: value})}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="design" id="design" />
                <Label htmlFor="design" className="cursor-pointer">Design (Marca Nova)</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="redesign" id="redesign" />
                <Label htmlFor="redesign" className="cursor-pointer">Redesign (Reformulação)</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>O que a empresa trabalha? *</Label>
            <Textarea 
              required
              value={formData.segmento}
              onChange={(e) => setFormData({...formData, segmento: e.target.value})}
              className="bg-background border-border/50 focus:border-primary min-h-[80px]"
              placeholder="Descreva o segmento e serviços da empresa..."
            />
          </div>

          <div className="space-y-2">
            <Label>Tem alguma história por trás da empresa?</Label>
            <Textarea 
              value={formData.historia}
              onChange={(e) => setFormData({...formData, historia: e.target.value})}
              className="bg-background border-border/50 focus:border-primary min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label>O que você mais gosta nas marcas que admira?</Label>
            <Textarea 
              value={formData.marcasAdmira}
              onChange={(e) => setFormData({...formData, marcasAdmira: e.target.value})}
              className="bg-background border-border/50 focus:border-primary min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Quem são seus concorrentes?</Label>
            <Textarea 
              value={formData.concorrentes}
              onChange={(e) => setFormData({...formData, concorrentes: e.target.value})}
              className="bg-background border-border/50 focus:border-primary min-h-[80px]"
            />
          </div>

          <div className="space-y-3">
            <Label>Quais aplicações você vai fazer na sua marca?</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {aplicacoes.map((aplicacao) => (
                <div key={aplicacao} className="flex items-center gap-2">
                  <Checkbox 
                    id={aplicacao}
                    checked={formData.aplicacoes.includes(aplicacao)}
                    onCheckedChange={() => handleAplicacaoChange(aplicacao)}
                  />
                  <Label htmlFor={aplicacao} className="cursor-pointer text-sm">{aplicacao}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Quais as cores que você imagina sua marca?</Label>
            <Input 
              value={formData.cores}
              onChange={(e) => setFormData({...formData, cores: e.target.value})}
              className="bg-background border-border/50 focus:border-primary"
              placeholder="Ex: Azul, dourado, tons terrosos..."
            />
          </div>

          <div className="space-y-3">
            <Label>Selecione os atributos que mais se identificam com sua marca</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {atributos.map((atributo) => (
                <div key={atributo} className="flex items-center gap-2">
                  <Checkbox 
                    id={atributo}
                    checked={formData.atributos.includes(atributo)}
                    onCheckedChange={() => handleAtributoChange(atributo)}
                  />
                  <Label htmlFor={atributo} className="cursor-pointer text-sm">{atributo}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" variant="hero" size="xl" className="w-full">
            Enviar Briefing via WhatsApp
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default IdentidadeVisual;
