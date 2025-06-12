
import { useState, useEffect, useRef } from "react";
import { Phone, VideoIcon, MoreVertical } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WhatsAppChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou a IA da Atendesse.ia. Como posso ajudar você hoje?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const simulatedConversation = [
    { text: "Oi! Quero automatizar meu WhatsApp", isUser: true },
    { text: "✨ Perfeito! Nossa IA atende seus clientes 24h, agenda horários e qualifica leads automaticamente. Qual seu segmento?", isUser: false },
    { text: "Sou dentista", isUser: true },
    { text: "🦷 Excelente! Para dentistas, nossa IA agenda consultas, confirma horários e responde dúvidas básicas. Quer começar hoje?", isUser: false },
    { text: "Sim! Como funciona?", isUser: true },
    { text: "📱 É simples: conectamos no seu WhatsApp atual, configuramos as respostas para seu negócio e pronto! Seus clientes são atendidos mesmo quando você está ocupado.", isUser: false }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (currentMessageIndex < simulatedConversation.length) {
      const timer = setTimeout(() => {
        const newMessage: Message = {
          id: messages.length + 1,
          text: simulatedConversation[currentMessageIndex].text,
          isUser: simulatedConversation[currentMessageIndex].isUser,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, messages.length]);

  return (
    <div className="bg-card rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto whatsapp-shadow">
      <div className="bg-primary p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          <div>
            <h3 className="text-primary-foreground font-semibold">IA Atendesse</h3>
            <p className="text-primary-foreground/80 text-sm">Online</p>
          </div>
        </div>
        <div className="flex space-x-4 text-primary-foreground">
          <VideoIcon className="h-5 w-5" />
          <Phone className="h-5 w-5" />
          <MoreVertical className="h-5 w-5" />
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={message.isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-card border-t border-border">
        <div className="flex items-center justify-center">
          <div className="text-sm text-muted-foreground text-center">
            💬 Demonstração automática - sem interação
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
