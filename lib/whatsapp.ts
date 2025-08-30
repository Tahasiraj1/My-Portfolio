interface WhatsAppOptions {
    message?: string;
    phoneNumber?: string;
  }
  
  export const openWhatsApp = (options: WhatsAppOptions = {}) => {
    const {
      message = "Hi! I'd like to discuss a project with you.",
      phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    } = options;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };
  
  // Predefined messages for different contexts
  export const whatsAppMessages = {
    general: "Hi! I'd like to discuss a project with you.",
    services: (serviceName: string) => `Hi! I'm interested in your ${serviceName} services. Can you tell me more about your process and pricing?`,
    websiteDevelopment: "Hi! I need a modern, responsive website built. Can you help me with the development process and timeline?",
    aiAgents: "Hi! I'm looking for AI-powered solutions to automate tasks and enhance productivity. Can you discuss your AI agent services?",
    automation: "Hi! I want to streamline my workflows with custom automation solutions. Can you help me identify opportunities and implement them?",
    portfolios: "Hi! I need a stunning portfolio website to showcase my work and skills. Can you help me create a professional portfolio?",
    getStarted: "Hi! I'd like to start a project with you. Can you help me understand your process and get started?",
    pricing: "Hi! I'd like to know more about your pricing for different services and which options would work best for my budget.",
    consultation: "Hi! I'd like to schedule a consultation to discuss my project requirements and see how we can work together."
  }; 