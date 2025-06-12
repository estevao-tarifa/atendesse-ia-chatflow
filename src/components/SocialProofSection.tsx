
import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 border border-brand-green/20 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-brand-green" />
            <span className="text-brand-green font-medium">Comprovado</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mais de <span className="text-brand-green">100 prestadores</span> já testaram
          </h2>
          <p className="text-xl text-gray-600">
            Atendimento sem complicação.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
            <div className="text-gray-600">Prestadores ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">24/7</div>
            <div className="text-gray-600">Atendimento online</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">95%</div>
            <div className="text-gray-600">Satisfação dos clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-green mb-2">5min</div>
            <div className="text-gray-600">Setup completo</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <Quote className="h-8 w-8 text-brand-green mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.profession}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
