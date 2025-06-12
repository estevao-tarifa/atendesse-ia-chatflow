
const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5547999990056?text=Tenho uma dúvida sobre a Atendesse.ia', '_blank');
  };

  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Atendesse.ia</h3>
            <p className="text-muted-foreground">
              Automatize seu WhatsApp e nunca mais perca um cliente.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>Como funciona</li>
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>Preços</li>
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>Suporte</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>WhatsApp</li>
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>Suporte</li>
              <li className="cursor-pointer hover:text-primary" onClick={openWhatsApp}>Dúvidas</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Atendesse.ia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
