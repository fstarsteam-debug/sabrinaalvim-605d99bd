import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carla A.",
    text: "Meu Instagram virou outro depois do trabalho da Sabrina.",
    rating: 5
  },
  {
    name: "João L.",
    text: "Design impecável, atendimento perfeito e resultado acima do esperado.",
    rating: 5
  },
  {
    name: "Mariana P.",
    text: "Minha marca ficou profissional de verdade. Recomendo demais!",
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            O que dizem os <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedbacks reais de quem já transformou sua marca
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-primary/30 neon-border hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center neon-glow">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground text-lg mb-6 font-light italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-muted-foreground font-medium">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
