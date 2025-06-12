
import { Button } from "@/components/ui/button";
import WhatsAppChat from "@/components/WhatsAppChat";
import { MessageCircle, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5547999990056?text=Oi! Vi o site da Atendesse.ia e quero automatizar meu WhatsApp', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start mb-6">
                <img 
                  src="/lovable-uploads/4f7b3dd1-eb63-46ea-987a-8a7c61ea6e94.png" 
                  alt="Atendesse.ia Logo" 
                  className="h-12 w-auto opacity-90"
                />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Você no <span className="text-primary">serviço</span>,<br />
                a gente no <span className="text-primary">zap</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Chega de perder cliente porque você estava ocupado.
              </p>
              
              <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  <span className="text-primary font-semibold">Automatizado com IA</span> – atendimento instantâneo no WhatsApp
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                🤖 Crie seu atendente virtual agora
              </Button>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Setup em 5 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Suporte incluído</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <WhatsAppChat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
