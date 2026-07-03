import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/siteConfig";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

interface ChatOption {
  label: string;
  value: string;
  response: string;
}

const CHAT_OPTIONS: ChatOption[] = [
  {
    label: "Who is Ujwal Singh?",
    value: "who_is_ujwal",
    response: "Hi there! 👋 Ujwal Singh is a passionate software developer, creator, and AI enthusiast from India. He loves building modern, scalable web applications, experimenting with artificial intelligence tools, and crafting gorgeous user interfaces! 💻✨"
  },
  {
    label: "What is his tech stack?",
    value: "tech_stack",
    response: "Ujwal works with a modern and versatile stack! 🛠️\n\n• Frontend: React, TypeScript, Next.js, Tailwind CSS, Figma\n• Backend & Database: Node.js, Python, Supabase, PostgreSQL\n• Key Interests: AI/ML integrations, UI/UX design, building scalable web platforms."
  },
  {
    label: "Tell me about his top projects",
    value: "top_projects",
    response: "Here are some of Ujwal's favorite creations: 🌟\n\n1. 🧭 Wanderlust Adventures: A travel platform dedicated to exploring India's heritage & landscapes.\n2. 📝 CuteList: A delightful, cute task management app to manage daily chores.\n3. 🧠 MediSoul: An AI-powered medical companion providing instant health insights.\n4. 🕹️ LoopPlay: A lightweight game arcade with 23 addictive mini-games!"
  },
  {
    label: "How can I contact him?",
    value: "contact_info",
    response: `You can reach out to Ujwal easily! 📬\n\n• Email: ${CONTACT_EMAIL}\n• Head to the Contact page on this site and send a message directly.\n• Find him on LinkedIn: linkedin.com/in/ujwalsingh23/\n• Or check his GitHub activity: github.com/ujwalx23\n\nHe is always open to collaborative opportunities, interesting project discussions, or talking about AI!`
  },
  {
    label: "Share a fun fact!",
    value: "fun_fact",
    response: "Here's a developer fun fact about Ujwal: ☔🎧\n\nHe writes his best code when it's raining outside, accompanied by lo-fi music or soft vibes. He believes coding is as much about finding the right peaceful space as it is about syntax!"
  }
];

export function AIHelperBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I'm Ujwal's AI Assistant. Ask me anything about his projects, skills, or background! ✨",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (option: ChatOption) => {
    // Add user question
    const userMsg: Message = {
      sender: "user",
      text: option.label,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);

    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        sender: "bot",
        text: option.response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: inputText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = inputText.toLowerCase();
    setInputText("");

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Basic rule matching for custom questions
      let botResponse = `That's an interesting question! I am Ujwal's offline helper assistant, so my responses are simple. Feel free to click one of my quick questions, check out the About Me page, or email him directly at ${CONTACT_EMAIL}.`;
      
      if (currentInput.includes("who") || currentInput.includes("about") || currentInput.includes("name")) {
        botResponse = CHAT_OPTIONS.find(o => o.value === "who_is_ujwal")?.response || botResponse;
      } else if (currentInput.includes("project") || currentInput.includes("work") || currentInput.includes("website")) {
        botResponse = CHAT_OPTIONS.find(o => o.value === "top_projects")?.response || botResponse;
      } else if (currentInput.includes("tech") || currentInput.includes("stack") || currentInput.includes("language") || currentInput.includes("skill")) {
        botResponse = CHAT_OPTIONS.find(o => o.value === "tech_stack")?.response || botResponse;
      } else if (currentInput.includes("contact") || currentInput.includes("reach") || currentInput.includes("email") || currentInput.includes("linkedin")) {
        botResponse = CHAT_OPTIONS.find(o => o.value === "contact_info")?.response || botResponse;
      } else if (currentInput.includes("fact") || currentInput.includes("fun") || currentInput.includes("rain")) {
        botResponse = CHAT_OPTIONS.find(o => o.value === "fun_fact")?.response || botResponse;
      }

      const botMsg: Message = {
        sender: "bot",
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border border-primary/30 hover:scale-110 transition-transform duration-300 animate-pulse-glow hover:rotate-12 group cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent border border-white"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 left-0 sm:absolute sm:bottom-0 sm:right-0 sm:left-auto w-full sm:w-[380px] h-[50vh] sm:h-[520px] rounded-t-2xl sm:rounded-2xl bg-card/85 backdrop-blur-xl border border-primary/20 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 z-50">
          
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                  Portfolio Assistant
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </h3>
                <p className="text-[11px] text-muted-foreground">Always active • Offline AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Panel */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-2.5 max-w-[85%] text-sm",
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "p-3 rounded-2xl whitespace-pre-wrap leading-relaxed shadow-sm",
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted/80 text-foreground border border-border/40 rounded-tl-none"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2.5 mr-auto max-w-[85%] text-sm">
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-primary animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-muted/80 text-muted-foreground border border-border/40 rounded-tl-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Options Carousel */}
          <div className="px-4 py-2 border-t border-border/30 bg-muted/20">
            <p className="text-[10px] font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-primary" /> Suggestions
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-transparent">
              {CHAT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="shrink-0 text-xs px-2.5 py-1.5 rounded-full bg-background border border-border/80 hover:border-primary/40 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary font-medium cursor-pointer"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-border/50 bg-background flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-muted/50 border border-border/80 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary/50 focus:bg-background transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer shrink-0"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
