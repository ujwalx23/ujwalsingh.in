export type Language = "en" | "fr" | "es" | "zh" | "hi";

export interface TranslationDict {
  nav: {
    overview: string;
    bio: string;
    works: string;
    reflections: string;
    contact: string;
  };
  home: {
    title: string;
    available: string;
    builds: string;
    roles: string[];
    connectTitle: string;
    connectDesc: string;
    viewAll: string;
    projectsTitle: string;
    projectsDesc: string;
    exploreAll: string;
  };
  about: {
    title: string;
    subtitle: string;
    bioText: string;
    resumePdf: string;
    gitTitle: string;
    gitDesc: string;
    skillsTitle: string;
    skillsDesc: string;
    timelineTitle: string;
    timelineDesc: string;
    philosophyTitle: string;
    philosophyDesc: string;
    philosophyCleanTitle: string;
    philosophyCleanDesc: string;
    philosophyUXTitle: string;
    philosophyUXDesc: string;
    philosophyAITitle: string;
    philosophyAIDesc: string;
    factsTitle: string;
    factsDesc: string;
    timelineItems: {
      title: string;
      period: string;
      summary: string;
      details: string;
    }[];
  };
  websites: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    webApps: string;
    aiTools: string;
    games: string;
    overview: string;
    highlights: string;
    techStack: string;
    visitLive: string;
    close: string;
    noProjects: string;
  };
  thoughts: {
    title: string;
    subtitle: string;
    formTitle: string;
    formDesc: string;
    formMsg: string;
    formMsgPlaceholder: string;
    formName: string;
    formNamePlaceholder: string;
    formTheme: string;
    postButton: string;
    notesBoard: string;
    notesCount: string;
    guestLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    msgLabel: string;
    submitButton: string;
    submittingButton: string;
    successMsg: string;
    errorMsg: string;
    infoTitle: string;
    infoDesc: string;
    responseTitle: string;
    responseDesc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    reasonLabel: string;
    reasonPlaceholder: string;
    reasonOptions: string[];
    msgPlaceholder: string;
    successTitle: string;
    successDesc: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      overview: "Overview",
      bio: "Bio",
      works: "Works",
      reflections: "Guestbook",
      contact: "Contact"
    },
    home: {
      title: "Ujwal Singh",
      available: "Available for Collaborative Work",
      builds: "I build",
      roles: ["web apps.", "AI-powered tools.", "fluid user interfaces.", "engaging games."],
      connectTitle: "Connect With Me",
      connectDesc: "Let's build something creative together.",
      viewAll: "View All Profiles",
      projectsTitle: "Featured Projects",
      projectsDesc: "Selection of client-side web platforms and interactive tools.",
      exploreAll: "Explore All"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Developer • Creator • AI Enthusiast",
      bioText: "I specialize in building fast, responsive, and gorgeous web experiences. From crafting pixel-perfect frontend layouts to integrating client-side AI helper utilities, I focus on delivering scalable, premium digital products.",
      resumePdf: "Resume PDF",
      gitTitle: "GitHub Activity",
      gitDesc: "My open-source contributions and coding activity",
      skillsTitle: "Skills & Proficiency",
      skillsDesc: "Click to inspect skill categories and view animated levels",
      timelineTitle: "My Timeline",
      timelineDesc: "Click on timeline events to expand project details",
      philosophyTitle: "Engineering Philosophy",
      philosophyDesc: "Core values that guide my coding and UI designing process",
      philosophyCleanTitle: "Clean Architecture",
      philosophyCleanDesc: "Writing structured, strictly-typed code that scales cleanly and is easy to maintain.",
      philosophyUXTitle: "User First Design",
      philosophyUXDesc: "Crafting visually premium interfaces with fluid animations and responsive viewports.",
      philosophyAITitle: "AI Integrations",
      philosophyAIDesc: "Implementing intelligent, client-side NLP and automation to solve daily tasks.",
      factsTitle: "Interests & Moods",
      factsDesc: "A few simple things that match my workspace vibes",
      timelineItems: [
        {
          title: "Started Coding Journey",
          period: "Early Days",
          summary: "Learned web fundamentals: HTML5, CSS3, and JavaScript.",
          details: "Built interactive web pages, simple calculating scripts, and mastered visual layouts. Discovered a deep passion for digital creation."
        },
        {
          title: "Full-Stack Development",
          period: "Growth Phase",
          summary: "Adopted React, TypeScript, and modern frameworks.",
          details: "Transitioned to building structured single-page apps, handling complex states, integrating node backends, and learning server deployments."
        },
        {
          title: "Building Real Products",
          period: "Current",
          summary: "Creating live client apps and AI-powered platforms.",
          details: "Currently developing fully offline-capable PWAs, integrating LLM completions, and optimizing database schema pipelines in Supabase."
        }
      ]
    },
    websites: {
      title: "My Projects",
      subtitle: "Client-side apps, AI platforms, and canvas games.",
      searchPlaceholder: "Search projects or tools...",
      all: "All",
      webApps: "Web Apps",
      aiTools: "AI Tools",
      games: "Games",
      overview: "Overview",
      highlights: "Highlights",
      techStack: "Tech Stack",
      visitLive: "Visit Live",
      close: "Close",
      noProjects: "No projects found matching your query."
    },
    thoughts: {
      title: "Thoughts Board",
      subtitle: "Local guestbook and short reflections.",
      formTitle: "Write a Note",
      formDesc: "Share a reflection or greeting on the board! It persists locally.",
      formMsg: "Message *",
      formMsgPlaceholder: "Share a reflection or greeting...",
      formName: "Name",
      formNamePlaceholder: "Guest",
      formTheme: "Theme",
      postButton: "Post to Wall",
      notesBoard: "Active Notes",
      notesCount: "Notes",
      guestLabel: "Guest"
    },
    contact: {
      title: "Contact Me",
      subtitle: "Send a message and I'll get back to you.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      msgLabel: "Your Message",
      submitButton: "Send Message",
      submittingButton: "Sending...",
      successMsg: "Message sent successfully!",
      errorMsg: "Something went wrong. Please try again.",
      infoTitle: "Get in Touch",
      infoDesc: "I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.",
      responseTitle: "Quick Response",
      responseDesc: "I typically respond within 24-48 hours. For urgent matters, connect with me on social media for a faster response.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      reasonLabel: "Describe Yourself",
      reasonPlaceholder: "Select an option",
      reasonOptions: [
        "Just Exploring",
        "Looking for Help",
        "Working & Learning",
        "Creator / Developer",
        "Here to Connect",
        "Just Saying Hi"
      ],
      msgPlaceholder: "Your message...",
      successTitle: "Message Sent!",
      successDesc: "Thanks for reaching out. I'll get back to you soon!"
    }
  },
  fr: {
    nav: {
      overview: "Aperçu",
      bio: "Bio",
      works: "Projets",
      reflections: "Livre d'or",
      contact: "Contact"
    },
    home: {
      title: "Ujwal Singh",
      available: "Disponible pour le travail collaboratif",
      builds: "Je construis des",
      roles: ["applications web.", "outils basés sur l'IA.", "interfaces fluides.", "jeux interactifs."],
      connectTitle: "Se connecter avec moi",
      connectDesc: "Créons quelque chose de créatif ensemble.",
      viewAll: "Voir tous les profils",
      projectsTitle: "Projets en vedette",
      projectsDesc: "Sélection de plateformes web côté client et d'outils interactifs.",
      exploreAll: "Tout explorer"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Développeur • Créateur • Passionné d'IA",
      bioText: "Je me spécialise dans la création d'expériences web rapides, réactives et magnifiques. De la conception de mises en page frontend pixel-précises à l'intégration d'utilitaires d'aide à l'IA côté client.",
      resumePdf: "Recruter PDF",
      gitTitle: "Activité GitHub",
      gitDesc: "Mes contributions open-source et mon activité de codage",
      skillsTitle: "Compétences et aptitudes",
      skillsDesc: "Cliquez pour inspecter les catégories de compétences et voir les niveaux animés",
      timelineTitle: "Mon parcours",
      timelineDesc: "Cliquez sur les événements pour développer les détails du projet",
      philosophyTitle: "Philosophie d'ingénierie",
      philosophyDesc: "Valeurs fondamentales qui guident mon processus de codage et de conception UI",
      philosophyCleanTitle: "Architecture propre",
      philosophyCleanDesc: "Écrire un code structuré et strictement typé qui évolue proprement et est facile à maintenir.",
      philosophyUXTitle: "L'utilisateur d'abord",
      philosophyUXDesc: "Concevoir des interfaces visuellement haut de gamme avec des animations fluides.",
      philosophyAITitle: "Intégrations IA",
      philosophyAIDesc: "Mettre en œuvre un traitement du langage naturel intelligent côté client pour résoudre les tâches quotidiennes.",
      factsTitle: "Intérêts et humeurs",
      factsDesc: "Quelques choses simples qui correspondent à l'ambiance de mon espace de travail",
      timelineItems: [
        {
          title: "Début du voyage de codage",
          period: "Premiers jours",
          summary: "Apprentissage des bases du web: HTML5, CSS3 et JavaScript.",
          details: "Création de pages web interactives, scripts de calcul simples et maîtrise des mises en page visuelles."
        },
        {
          title: "Développement Full-Stack",
          period: "Phase de croissance",
          summary: "Adoption de React, TypeScript et des frameworks modernes.",
          details: "Transition vers la construction d'applications monopages structurées, la gestion d'états complexes et l'intégration de bases de données."
        },
        {
          title: "Création de produits réels",
          period: "Actuel",
          summary: "Création d'applications clients en direct et de plateformes basées sur l'IA.",
          details: "Développement de PWA entièrement autonomes hors ligne et optimisation des pipelines de schémas de base de données."
        }
      ]
    },
    websites: {
      title: "Mes Projets",
      subtitle: "Applications côté client, plateformes d'IA et jeux canvas.",
      searchPlaceholder: "Rechercher des projets...",
      all: "Tout",
      webApps: "Applications Web",
      aiTools: "Outils d'IA",
      games: "Jeux",
      overview: "Aperçu",
      highlights: "Points forts",
      techStack: "Technologies",
      visitLive: "Visiter le site",
      close: "Fermer",
      noProjects: "Aucun projet ne correspond à votre recherche."
    },
    thoughts: {
      title: "Tableau de pensées",
      subtitle: "Livre d'or local et courtes réflexions.",
      formTitle: "Écrire une note",
      formDesc: "Partagez une réflexion ou un salut sur le tableau! Persiste localement.",
      formMsg: "Message *",
      formMsgPlaceholder: "Partagez une réflexion...",
      formName: "Nom",
      formNamePlaceholder: "Invité",
      formTheme: "Thème",
      postButton: "Publier sur le mur",
      notesBoard: "Notes actives",
      notesCount: "Notes",
      guestLabel: "Invité"
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Envoyez un message et je vous répondrai.",
      nameLabel: "Votre Nom",
      emailLabel: "Votre E-mail",
      msgLabel: "Votre Message",
      submitButton: "Envoyer le message",
      submittingButton: "Envoi en cours...",
      successMsg: "Message envoyé avec succès !",
      errorMsg: "Un problème est survenu. Veuillez réessayer.",
      infoTitle: "Entrer en contact",
      infoDesc: "J'aimerais avoir de vos nouvelles ! Que vous ayez une question, que vous vouliez collaborer ou simplement dire bonjour, n'hésitez pas à me contacter.",
      responseTitle: "Réponse rapide",
      responseDesc: "Je réponds généralement dans les 24 à 48 heures. Pour les questions urgentes, connectez-vous avec moi sur les réseaux sociaux pour une réponse plus rapide.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      reasonLabel: "Décrivez-vous",
      reasonPlaceholder: "Sélectionnez une option",
      reasonOptions: [
        "Juste pour explorer",
        "Besoin d'aide",
        "Travail et apprentissage",
        "Créateur / Développeur",
        "Pour se connecter",
        "Juste pour dire bonjour"
      ],
      msgPlaceholder: "Votre message...",
      successTitle: "Message envoyé !",
      successDesc: "Merci de m'avoir contacté. Je vous répondrai bientôt !"
    }
  },
  es: {
    nav: {
      overview: "Inicio",
      bio: "Biografía",
      works: "Proyectos",
      reflections: "Libro de visitas",
      contact: "Contacto"
    },
    home: {
      title: "Ujwal Singh",
      available: "Disponible para trabajo colaborativo",
      builds: "Yo construyo",
      roles: ["aplicaciones web.", "herramientas de IA.", "interfaces fluidas.", "juegos interactivos."],
      connectTitle: "Conéctate conmigo",
      connectDesc: "Construyamos algo creativo juntos.",
      viewAll: "Ver todos los perfiles",
      projectsTitle: "Proyectos destacados",
      projectsDesc: "Selección de plataformas web del lado del cliente y herramientas interactivas.",
      exploreAll: "Explorar todo"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Desarrollador • Creador • Entusiasta de la IA",
      bioText: "Me especializo en crear experiencias web rápidas, responsivas y hermosas. Desde el diseño de interfaces frontend con píxeles perfectos hasta la integración de asistentes de IA del lado del cliente.",
      resumePdf: "Currículum PDF",
      gitTitle: "Actividad en GitHub",
      gitDesc: "Mis contribuciones de código abierto y actividad de desarrollo",
      skillsTitle: "Habilidades y experiencia",
      skillsDesc: "Haz clic para inspeccionar las categorías de habilidades y ver los niveles animados",
      timelineTitle: "Mi trayectoria",
      timelineDesc: "Haz clic en los hitos para ver detalles adicionales",
      philosophyTitle: "Filosofía de desarrollo",
      philosophyDesc: "Valores fundamentales que guían mi proceso de programación y diseño de interfaces",
      philosophyCleanTitle: "Arquitectura limpia",
      philosophyCleanDesc: "Escribir código estructurado y estrictamente tipado que escale limpiamente y sea fácil de mantener.",
      philosophyUXTitle: "Usuario primero",
      philosophyUXDesc: "Diseñar interfaces visualmente premium con animaciones fluidas y diseños responsivos.",
      philosophyAITitle: "Integraciones de IA",
      philosophyAIDesc: "Implementar automatización y procesamiento de lenguaje natural inteligente del lado del cliente.",
      factsTitle: "Intereses y pasatiempos",
      factsDesc: "Algunas cosas simples que encajan con mi espacio de trabajo",
      timelineItems: [
        {
          title: "Inicio del viaje de programación",
          period: "Primeros días",
          summary: "Aprendí las bases de la web: HTML5, CSS3 y JavaScript.",
          details: "Creé páginas web interactivas, scripts de cálculo sencillos y dominé el diseño visual."
        },
        {
          title: "Desarrollo Full-Stack",
          period: "Fase de crecimiento",
          summary: "Adopté React, TypeScript y frameworks modernos.",
          details: "Transición a la construcción de aplicaciones estructuradas de una sola página y gestión de estados complejos."
        },
        {
          title: "Creación de productos reales",
          period: "Actual",
          summary: "Creación de aplicaciones de clientes y plataformas de IA.",
          details: "Desarrollo de PWA completamente funcionales sin conexión y optimización de bases de datos."
        }
      ]
    },
    websites: {
      title: "Mis Proyectos",
      subtitle: "Aplicaciones del lado del cliente, plataformas de IA y juegos interactivos.",
      searchPlaceholder: "Buscar proyectos...",
      all: "Todos",
      webApps: "Aplicaciones",
      aiTools: "Herramientas de IA",
      games: "Juegos",
      overview: "Resumen",
      highlights: "Aspectos destacados",
      techStack: "Tecnologías",
      visitLive: "Ver en vivo",
      close: "Cerrar",
      noProjects: "No se encontraron proyectos que coincidan con tu búsqueda."
    },
    thoughts: {
      title: "Muro de pensamientos",
      subtitle: "Libro de visitas local y reflexiones cortas.",
      formTitle: "Escribir una nota",
      formDesc: "¡Comparte una reflexión o saludo en el muro! Se guarda localmente.",
      formMsg: "Mensaje *",
      formMsgPlaceholder: "Escribe tu pensamiento...",
      formName: "Nombre",
      formNamePlaceholder: "Invitado",
      formTheme: "Color",
      postButton: "Publicar en el muro",
      notesBoard: "Notas activas",
      notesCount: "Notas",
      guestLabel: "Invitado"
    },
    contact: {
      title: "Contáctame",
      subtitle: "Envía un mensaje y me pondré en contacto contigo.",
      nameLabel: "Tu Nombre",
      emailLabel: "Tu Correo electrónico",
      msgLabel: "Tu Mensaje",
      submitButton: "Enviar mensaje",
      submittingButton: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito!",
      errorMsg: "Algo salió mal. Por favor, inténtalo de nuevo.",
      infoTitle: "Ponte en contacto",
      infoDesc: "¡Me encantaría saber de ti! Ya sea que tengas una pregunta, quieras colaborar o simplemente decir hola, no dudes en comunicarte.",
      responseTitle: "Respuesta rápida",
      responseDesc: "Normalmente respondo dentro de 24-48 horas. Para asuntos urgentes, conéctate conmigo en las redes sociales para una respuesta más rápida.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      reasonLabel: "Descríbete",
      reasonPlaceholder: "Selecciona una opción",
      reasonOptions: [
        "Solo explorando",
        "Buscando ayuda",
        "Trabajando y aprendiendo",
        "Creador / Desarrollador",
        "Para conectar",
        "Solo para decir hola"
      ],
      msgPlaceholder: "Tu mensaje...",
      successTitle: "¡Mensaje enviado!",
      successDesc: "Gracias por comunicarte. ¡Me pondré en contacto contigo pronto!"
    }
  },
  zh: {
    nav: {
      overview: "主页",
      bio: "简介",
      works: "作品",
      reflections: "留言板",
      contact: "联系"
    },
    home: {
      title: "Ujwal Singh",
      available: "开放合作项目",
      builds: "我构建",
      roles: ["网页应用。", "AI驱动工具。", "流畅用户界面。", "趣味交互游戏。"],
      connectTitle: "与我联系",
      connectDesc: "让我们一起创造一些有趣的东西。",
      viewAll: "查看所有个人主页",
      projectsTitle: "精选项目",
      projectsDesc: "精选客户端网页平台和交互式工具。",
      exploreAll: "探索全部"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "开发者 • 创造者 • AI爱好者",
      bioText: "我专注于构建快速、响应迅速且美观的网页体验。从像素级精确的前端设计到集成客户端的智能AI辅助工具。",
      resumePdf: "下载简历 PDF",
      gitTitle: "GitHub 动态",
      gitDesc: "我的开源贡献和编码活动",
      skillsTitle: "专业技能",
      skillsDesc: "点击以检查技能类别并查看动态进度",
      timelineTitle: "我的历程",
      timelineDesc: "点击时间线事件以查看项目详细信息",
      philosophyTitle: "工程哲学",
      philosophyDesc: "指引我编码和用户界面设计过程的核心价值观",
      philosophyCleanTitle: "整洁架构",
      philosophyCleanDesc: "编写结构化、强类型的代码，以实现整洁的扩展和易于维护的系统。",
      philosophyUXTitle: "用户至上",
      philosophyUXDesc: "通过流畅的动画和自适应视口设计视觉效果出众的界面。",
      philosophyAITitle: "人工智能集成",
      philosophyAIDesc: "在客户端实施智能自然语言处理和自动化，以解决日常任务。",
      factsTitle: "兴趣与心境",
      factsDesc: "一些适合我工作空间氛围的简单事物",
      timelineItems: [
        {
          title: "开始编码之旅",
          period: "早期阶段",
          summary: "学习了网页基础知识：HTML5、CSS3 和 JavaScript。",
          details: "构建了交互式网页、简单的计算脚本，并掌握了视觉布局的技巧。"
        },
        {
          title: "全栈开发学习",
          period: "成长阶段",
          summary: "开始采用 React、TypeScript 和现代开发框架。",
          details: "转向构建结构化的单页应用、处理复杂状态并集成后端服务。"
        },
        {
          title: "开发真实产品",
          period: "当前阶段",
          summary: "构建线上客户端应用和人工智能辅助平台。",
          details: "目前正在开发完全支持离线的渐进式网页应用(PWA)并优化数据库系统。"
        }
      ]
    },
    websites: {
      title: "我的项目",
      subtitle: "客户端应用、人工智能平台和画布游戏。",
      searchPlaceholder: "搜索项目或工具...",
      all: "全部",
      webApps: "网页应用",
      aiTools: "AI 工具",
      games: "小游戏",
      overview: "项目概述",
      highlights: "核心亮点",
      techStack: "技术栈",
      visitLive: "访问网站",
      close: "关闭",
      noProjects: "没有找到符合搜索条件的项。"
    },
    thoughts: {
      title: "留言墙",
      subtitle: "本地留言簿与简短的思考心得。",
      formTitle: "写下留言",
      formDesc: "在墙上分享想法或问候！将保存在本地浏览器中。",
      formMsg: "留言内容 *",
      formMsgPlaceholder: "分享一个想法或问候...",
      formName: "您的名字",
      formNamePlaceholder: "访客",
      formTheme: "卡片主题",
      postButton: "发布留言",
      notesBoard: "当前留言",
      notesCount: "留言数",
      guestLabel: "访客"
    },
    contact: {
      title: "联系我",
      subtitle: "发送消息，我会尽快给您回复。",
      nameLabel: "您的姓名",
      emailLabel: "您的电子邮箱",
      msgLabel: "您的消息",
      submitButton: "发送消息",
      submittingButton: "正在发送...",
      successMsg: "消息发送成功！",
      errorMsg: "发生了一些错误，请重试。",
      infoTitle: "取得联系",
      infoDesc: "我很想收到您的来信！无论您有任何问题、想合作还是只想打个招呼，请随时与我联系。",
      responseTitle: "快速回复",
      responseDesc: "我通常在24-48小时内回复。如有紧急情况，请在社交媒体上与我联系以获得更快回复。",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "your@email.com",
      reasonLabel: "描述您自己",
      reasonPlaceholder: "选择一个选项",
      reasonOptions: [
        "只是随便看看",
        "寻求帮助",
        "工作与学习",
        "创作者 / 开发者",
        "来结识朋友",
        "只是打个招呼"
      ],
      msgPlaceholder: "您的消息...",
      successTitle: "消息已发送！",
      successDesc: "感谢您的联系。我很快就会回复您！"
    }
  },
  hi: {
    nav: {
      overview: "अवलोकन",
      bio: "बायो",
      works: "कार्य",
      reflections: "गेस्टबुक",
      contact: "संपर्क"
    },
    home: {
      title: "उज्जवल सिंह",
      available: "सहयोगात्मक कार्य के लिए उपलब्ध",
      builds: "मैं बनाता हूँ",
      roles: ["वेब ऐप्स।", "एआई-संचालित उपकरण।", "सहज यूजर इंटरफेस।", "मजेदार गेम्स।"],
      connectTitle: "मुझसे जुड़ें",
      connectDesc: "आइए मिलकर कुछ रचनात्मक बनाएं।",
      viewAll: "सभी प्रोफाइल देखें",
      projectsTitle: "विशेष परियोजनाएं",
      projectsDesc: "क्लाइंट-साइड वेब प्लेटफॉर्म और इंटरैक्टिव टूल्स का चयन।",
      exploreAll: "सभी देखें"
    },
    about: {
      title: "उज्जवल सिंह",
      subtitle: "डेवलपर • निर्माता • एआई उत्साही",
      bioText: "मैं तेज, रिस्पॉन्सिव और खूबसूरत वेब अनुभव बनाने में माहिर हूं। पिक्सेल-परफेक्ट फ्रंटएंड लेआउट तैयार करने से लेकर क्लाइंट-साइड एआई टूल्स को एकीकृत करने तक, मैं प्रीमियम डिजिटल उत्पाद प्रदान करने पर ध्यान केंद्रित करता हूं।",
      resumePdf: "बायोडाटा पीडीएफ",
      gitTitle: "गिटहब गतिविधि",
      gitDesc: "मेरा ओपन-सोर्स योगदान और कोडिंग गतिविधियां",
      skillsTitle: "कौशल और दक्षता",
      skillsDesc: "कौशल श्रेणियों का निरीक्षण करने और एनिमेटेड स्तरों को देखने के लिए क्लिक करें",
      timelineTitle: "मेरी समयरेखा",
      timelineDesc: "परियोजना विवरण का विस्तार करने के लिए घटनाओं पर क्लिक करें",
      philosophyTitle: "इंजीनियरिंग दर्शन",
      philosophyDesc: "मुख्य सिद्धांत जो मेरी कोडिंग और डिजाइन प्रक्रिया का मार्गदर्शन करते हैं",
      philosophyCleanTitle: "स्वच्छ वास्तुकला",
      philosophyCleanDesc: "व्यवस्थित, स्पष्ट रूप से टाइप किया गया कोड लिखना जो आसानी से स्केल हो और जिसका रख-रखाव आसान हो।",
      philosophyUXTitle: "यूजर फर्स्ट डिजाइन",
      philosophyUXDesc: "सुंदर एनिमेशन और रिस्पॉन्सिव लेआउट के साथ देखने में प्रीमियम इंटरफेस बनाना।",
      philosophyAITitle: "एआई एकीकरण",
      philosophyAIDesc: "दैनिक कार्यों को हल करने के लिए क्लाइंट-साइड पर बुद्धिमान एआई और स्वचालन लागू करना।",
      factsTitle: "रुचियां और मूड",
      factsDesc: "कुछ सरल चीजें जो मेरे कार्यक्षेत्र के अनुकूल हैं",
      timelineItems: [
        {
          title: "कोडिंग यात्रा शुरू की",
          period: "शुरुआती दिन",
          summary: "वेब के बुनियादी सिद्धांत सीखे: HTML5, CSS3, और JavaScript।",
          details: "इंटरैक्टिव वेब पेज, सरल गणना स्क्रिप्ट बनाए और दृश्य लेआउट पर महारत हासिल की।"
        },
        {
          title: "फुल-स्टैक डेवलपमेंट",
          period: "विकास चरण",
          summary: "React, TypeScript और आधुनिक फ्रेमवर्क को अपनाया।",
          details: "व्यवस्थित सिंगल-पेज ऐप्स बनाने, जटिल स्टेट को प्रबंधित करने और नोड बैकएंड को एकीकृत करना सीखा।"
        },
        {
          title: "वास्तविक उत्पाद बनाना",
          period: "वर्तमान",
          summary: "लाइव क्लाइंट ऐप्स और एआई-संचालित प्लेटफॉर्म विकसित करना।",
          details: "पूरी तरह से ऑफ़लाइन काम करने में सक्षम PWAs विकसित करना और डेटाबेस को ऑप्टिमाइज़ करना।"
        }
      ]
    },
    websites: {
      title: "मेरे प्रोजेक्ट्स",
      subtitle: "क्लाइंट-साइड ऐप्स, एआई प्लेटफॉर्म और कैनवास गेम्स।",
      searchPlaceholder: "प्रोजेक्ट या टूल्स खोजें...",
      all: "सभी",
      webApps: "वेब ऐप्स",
      aiTools: "एआई टूल्स",
      games: "गेम्स",
      overview: "अवलोकन",
      highlights: "मुख्य विशेषताएं",
      techStack: "तकनीक",
      visitLive: "लाइव देखें",
      close: "बंद करें",
      noProjects: "आपकी खोज से मेल खाने वाला कोई प्रोजेक्ट नहीं मिला।"
    },
    thoughts: {
      title: "विचार बोर्ड",
      subtitle: "स्थानीय गेस्टबुक और संक्षिप्त विचार।",
      formTitle: "एक संदेश लिखें",
      formDesc: "बोर्ड पर एक विचार या शुभकामना साझा करें! यह स्थानीय रूप से सुरक्षित रहता है।",
      formMsg: "संदेश *",
      formMsgPlaceholder: "एक विचार साझा करें...",
      formName: "नाम",
      formNamePlaceholder: "अतिथि",
      formTheme: "रंग थीम",
      postButton: "वॉल पर पोस्ट करें",
      notesBoard: "सक्रिय नोट्स",
      notesCount: "नोट्स",
      guestLabel: "अतिथि"
    },
    contact: {
      title: "मुझसे संपर्क करें",
      subtitle: "एक संदेश भेजें और मैं आपसे जल्द ही संपर्क करूंगा।",
      nameLabel: "आपका नाम",
      emailLabel: "आपका ईमेल",
      msgLabel: "आपका संदेश",
      submitButton: "संदेश भेजें",
      submittingButton: "भेजा जा रहा है...",
      successMsg: "संदेश सफलतापूर्वक भेजा गया!",
      errorMsg: "कुछ गलत हो गया। कृपया पुन: प्रयास करें।",
      infoTitle: "संपर्क में रहें",
      infoDesc: "मुझे आपकी बात सुनना अच्छा लगेगा! चाहे आपका कोई सवाल हो, सहयोग करना चाहते हों, या सिर्फ नमस्ते कहना चाहते हों, बेझिझक संपर्क करें।",
      responseTitle: "त्वरित प्रतिक्रिया",
      responseDesc: "मैं आम तौर पर 24-48 घंटों के भीतर जवाब देता हूं। तत्काल मामलों के लिए, तेज़ प्रतिक्रिया के लिए सोशल मीडिया पर मुझसे जुड़ें।",
      namePlaceholder: "आपका नाम",
      emailPlaceholder: "आपका@ईमेल.कॉम",
      reasonLabel: "अपने बारे में बताएं",
      reasonPlaceholder: "एक विकल्प चुनें",
      reasonOptions: [
        "बस तलाश कर रहे हैं",
        "मदद की तलाश में",
        "काम और सीख रहे हैं",
        "निर्माता / डेवलपर",
        "जुड़ने के लिए यहाँ हैं",
        "बस नमस्ते कहने के लिए"
      ],
      msgPlaceholder: "आपका संदेश...",
      successTitle: "संदेश भेजा गया!",
      successDesc: "संपर्क करने के लिए धन्यवाद। मैं जल्द ही आपसे संपर्क करूंगा!"
    }
  }
};
