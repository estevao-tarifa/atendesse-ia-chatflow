
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToChat = () => {
    const chatElement = document.getElementById('whatsapp-chat');
    chatElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Teste agora e descubra como seu WhatsApp pode trabalhar por você
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Setup em 5 minutos. Sem mensalidade. Sem compromisso. Comece grátis hoje mesmo.
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={scrollToChat}
            className="bg-white text-brand-green hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Começar teste grátis agora
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-green-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>7 dias grátis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Cancelamento fácil</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Suporte incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
