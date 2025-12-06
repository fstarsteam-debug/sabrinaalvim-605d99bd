import { Link } from "react-router-dom";
import { Instagram, MessageCircle, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/sabrinaalvimdesign", label: "Instagram" },
    { icon: MessageCircle, href: "http://wa.me/31994216833", label: "WhatsApp" },
    { icon: ExternalLink, href: "https://behance.net/sabrinaalvim", label: "Behance" },
  ];

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "http://wa.me/31994216833" },
  ];

  return (
    <footer className="py-16 bg-card/50 border-t border-border/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-96 h-32 bg-primary/10 rounded-full blur-[80px] -translate-x-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-gradient">
              Sabrina Alvim
            </h3>
            <p className="text-muted-foreground text-sm">
              Designer Gráfica & Especialista em Mídias Sociais
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Links Úteis
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Contato
            </h4>
            <div className="space-y-2">
              <a 
                href="mailto:sealdesignn@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                sealdesignn@gmail.com
              </a>
              <a 
                href="mailto:sabrinaalvimdesign@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                sabrinaalvimdesign@gmail.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:neon-glow transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sabrina Alvim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
