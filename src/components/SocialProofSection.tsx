
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProofSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5547999990056?text=Vi os depoimentos e quero automatizar meu WhatsApp também!', '_blank');
  };

  const testimonials = [
    {
      name: "Carlos Silva",
      profession: "Dentista",
      text: "Antes eu perdia uns 5 clientes por semana porque não conseguia responder rápido. Agora a IA resolve tudo!",
      rating: 5
    },
    {
      name: "Ana Santos",
      profession: "Esteticista",
      text: "Minha agenda ficou organizadíssima. A IA marca, confirma e até lembra o cliente do horário.",
      rating: 5
    },
    {
      name: "João Oliveira",
      profession: "Personal Trainer",
      text: "Trabalho o dia todo e agora meus clientes são atendidos mesmo quando estou ocupado. Top!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Comprovado</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Mais de <span className="text-primary">100 prestadores</span> já automatizaram
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Atendimento sem complicação.
          </p>
          
          <Button 
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
          >
            💬 Quero fazer parte também
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Prestadores ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Atendimento online</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Satisfação dos clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5min</div>
            <div className="text-muted-foreground">Setup completo</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 relative hover:shadow-lg transition-shadow border border-border">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground">{testimonial.profession}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
