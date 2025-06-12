
import { Button } from "@/components/ui/button";
import WhatsAppChat from "@/components/WhatsAppChat";
import { MessageCircle, Zap, Clock } from "lucide-react";

const HeroSection = () => {
  const scrollToChat = () => {
    const chatElement = document.getElementById('whatsapp-chat');
    chatElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Impact Message */}
          <div className="space-y-8 lg:pr-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Você no <span className="text-brand-green">serviço</span>,<br />
                a gente no <span className="text-brand-green">zap</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Chega de perder cliente porque você estava ocupado.
              </p>
              
              <div className="flex items-center space-x-3 p-4 bg-brand-green/10 rounded-xl border border-brand-green/20">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-brand-green" />
                </div>
                <p className="text-gray-800 font-medium">
                  <span className="text-brand-green font-semibold">Automatizado com IA</span> – atendimento instantâneo no WhatsApp
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={scrollToChat}
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Comece agora – fale com a IA
              </Button>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Setup em 5 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sem mensalidade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - WhatsApp Chat */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
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
