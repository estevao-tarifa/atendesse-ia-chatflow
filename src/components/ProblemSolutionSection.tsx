
import { AlertTriangle, CheckCircle, Clock, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSolutionSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5547999990056?text=Quero saber mais sobre a automatização do WhatsApp', '_blank');
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <span className="text-destructive font-medium">O Problema</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Você <span className="text-destructive">não consegue</span> responder todo mundo no WhatsApp enquanto faz o seu trabalho?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perde clientes porque estava atendendo, demora para responder mensagens e não consegue organizar os agendamentos.
          </p>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">A Solução</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Deixa com a gente.</span><br />
            Nossa IA responde pra você, marca horário e organiza tudo.
          </h2>
          
          <Button 
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl mt-6"
          >
            Quero automatizar meu WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Resposta Instantânea</h3>
            <p className="text-muted-foreground">
              Sua IA responde em segundos, 24 horas por dia, 7 dias por semana. Nunca mais perca um cliente.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Agenda Automatizada</h3>
            <p className="text-muted-foreground">
              A IA agenda horários, confirma consultas e organiza sua agenda automaticamente.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Integração Total</h3>
            <p className="text-muted-foreground">
              Funciona direto no seu WhatsApp atual. Sem aplicativo novo ou mudança de número.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
