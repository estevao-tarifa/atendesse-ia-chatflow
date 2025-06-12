
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5547999990056?text=Quero automatizar meu WhatsApp e começar hoje mesmo!', '_blank');
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Automatize seu WhatsApp e veja a diferença em 24 horas
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Configuração em 5 minutos. Suporte incluído. Comece hoje mesmo.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={openWhatsApp}
            className="bg-background text-primary hover:bg-background/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Começar agora mesmo
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-primary-foreground/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>Setup em 5 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>Suporte incluído</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-background rounded-full"></div>
              <span>Atendimento 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
