
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Phone, VideoIcon, MoreVertical } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToWebhook = async (message: string) => {
    const webhookUrl = "https://webhook.example.com/n8n"; // This should be configured
    
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          source: "landing_page_chat"
        }),
      });

      console.log("Message sent to n8n webhook:", message);
    } catch (error) {
      console.error("Error sending to webhook:", error);
    }
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("preço") || lowerMessage.includes("valor") || lowerMessage.includes("custo")) {
      return "💰 Nossos planos começam em R$ 97/mês. Mas temos 7 dias grátis para você testar! Quer que eu configure para você agora?";
    }
    
    if (lowerMessage.includes("como funciona") || lowerMessage.includes("explicar")) {
      return "✨ É simples! Conectamos seu WhatsApp à nossa IA que responde seus clientes 24h, agenda horários e qualifica leads. Tudo automaticamente! Posso mostrar na prática?";
    }
    
    if (lowerMessage.includes("agendar") || lowerMessage.includes("horário") || lowerMessage.includes("consulta")) {
      return "📅 Perfeito! Nossa IA agenda automaticamente e sincroniza com sua agenda. Qual seu WhatsApp para eu configurar isso para você?";
    }
    
    if (lowerMessage.includes("whatsapp") || lowerMessage.includes("número") || lowerMessage.includes("telefone")) {
      return "📱 Ótimo! Vou passar você para nosso time comercial que vai configurar tudo em 5 minutos. Qual seu nome e WhatsApp?";
    }
    
    return "Entendi! 🤔 Nossa IA pode resolver isso automaticamente. Quer que eu mostre como funciona na prática? É só me dar seu WhatsApp que configuro tudo para você!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Send to webhook (n8n)
    await sendToWebhook(inputValue);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div id="whatsapp-chat" className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto whatsapp-shadow">
      {/* Header */}
      <div className="bg-whatsapp-green p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">IA Atendesse</h3>
            <p className="text-green-100 text-sm">Online</p>
          </div>
        </div>
        <div className="flex space-x-4 text-white">
          <VideoIcon className="h-5 w-5 cursor-pointer" />
          <Phone className="h-5 w-5 cursor-pointer" />
          <MoreVertical className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={message.isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString('pt-BR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="chat-bubble-bot">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-full border-gray-300"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-whatsapp-green hover:bg-whatsapp-green-dark text-white rounded-full p-3"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChat;
