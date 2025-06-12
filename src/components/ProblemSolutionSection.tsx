
import { AlertTriangle, CheckCircle, Clock, Users, Smartphone } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Problem */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span className="text-red-700 font-medium">O Problema</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você <span className="text-red-500">não consegue</span> responder todo mundo no WhatsApp enquanto faz o seu trabalho?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perde clientes porque estava atendendo, demora para responder mensagens e não consegue organizar os agendamentos.
          </p>
        </div>

        {/* Solution */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-green-700 font-medium">A Solução</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-brand-green">Deixa com a gente.</span><br />
            Nossa IA responde pra você, marca horário e organiza tudo.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Resposta Instantânea</h3>
            <p className="text-gray-600">
              Sua IA responde em segundos, 24 horas por dia, 7 dias por semana. Nunca mais perca um cliente.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda Automatizada</h3>
            <p className="text-gray-600">
              A IA agenda horários, confirma consultas e organiza sua agenda automaticamente.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-8 w-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Integração Total</h3>
            <p className="text-gray-600">
              Funciona direto no seu WhatsApp atual. Sem aplicativo novo ou mudança de número.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
