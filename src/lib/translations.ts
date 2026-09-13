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
      reflections: "Reflections",
      contact: "Contact"
    },
    home: {
      title: "Ujwal Singh",
      available: "Available for Collaborative Work",
      builds: "I build",
      roles: [
        "scalable full-stack web applications.",
        "enterprise SAP analytics & dashboards.",
        "intelligent AI-powered solutions.",
        "cloud-native database architectures."
      ],
      connectTitle: "Connect With Me",
      connectDesc: "Let's build something creative together.",
      viewAll: "View All Profiles",
      projectsTitle: "Featured Projects",
      projectsDesc: "Selection of client-side web platforms and interactive tools.",
      exploreAll: "Explore All"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Full-Stack Developer • Creator • SAP Certified (SAC)",
      bioText: "I specialize in building fast, responsive, and gorgeous web experiences. From crafting pixel-perfect frontend layouts in React and TypeScript to integrating client-side AI helper utilities and enterprise data models, I focus on delivering scalable, premium digital products. Computer Engineering student and SAP Certified – Data Analyst (SAC).",
      resumePdf: "Resume PDF",
      gitTitle: "GitHub Activity",
      gitDesc: "My open-source contributions and coding activity",
      skillsTitle: "Skills & Proficiency",
      skillsDesc: "Click to inspect skill categories and view animated levels",
      timelineTitle: "My Timeline",
      timelineDesc: "Milestones across software engineering, internships, and certifications",
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
          title: "Software Development Intern",
          period: "Jul 2025 – Aug 2025",
          summary: "Compozant · Remote",
          details: "Developed and enhanced responsive web application features using React.js and JavaScript while following modern UI development practices. Contributed to UI improvements, debugging, SEO discoverability, and accessibility."
        },
        {
          title: "Namami Vindhyavasini Temple Website",
          period: "2024 – 2025",
          summary: "Client Project · React, TypeScript, PostgreSQL, Supabase",
          details: "Developed and deployed a production-ready website end-to-end for a real client. Built dynamic blogs, event management, custom administrative dashboard, and designed PostgreSQL schemas with REST APIs."
        },
        {
          title: "SAP Certified - Data Analyst (SAC)",
          period: "2026",
          summary: "Certified in SAP Analytics Cloud (C_SAC_2601) — SAP",
          details: "Completed SAP Learning Journey: Story Design, Data Visualization, Data Modelling, Planning, Allocations, and Smart Predict."
        },
        {
          title: "B.E. in Computer Engineering",
          period: "2023 – 2027",
          summary: "Shree L. R. Tiwari College of Engineering, Mumbai University",
          details: "Pursuing Bachelor of Engineering in Computer Engineering. Maintaining strong academic performance with a CGPA of 8.13 / 10."
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
      infoDesc: "I'd love to hear from you! Whether you have a question, want to collaborate on a full-stack project, or just want to say hi, feel free to reach out.",
      responseTitle: "Quick Response",
      responseDesc: "I typically respond within 24-48 hours. For urgent matters, connect with me on LinkedIn or via email.",
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
      reflections: "Réflexions",
      contact: "Contact"
    },
    home: {
      title: "Ujwal Singh",
      available: "Disponible pour le travail collaboratif",
      builds: "Je conçois des",
      roles: [
        "applications web full-stack évolutives.",
        "tableaux de bord et analyses SAP d'entreprise.",
        "solutions intelligentes basées sur l'IA.",
        "architectures de bases de données cloud."
      ],
      connectTitle: "Se connecter avec moi",
      connectDesc: "Créons quelque chose de créatif ensemble.",
      viewAll: "Voir tous les profils",
      projectsTitle: "Projets en vedette",
      projectsDesc: "Sélection de plateformes web côté client et d'outils interactifs.",
      exploreAll: "Tout explorer"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Développeur Full-Stack • Créateur • Certifié SAP (SAC)",
      bioText: "Je me spécialise dans la création d'expériences web rapides, réactives et magnifiques. De la conception de mises en page frontend pixel-précises avec React et TypeScript à l'intégration d'outils IA et de modèles de données d'entreprise. Étudiant en génie informatique et certifié SAP (SAC).",
      resumePdf: "Recruter PDF",
      gitTitle: "Activité GitHub",
      gitDesc: "Mes contributions open-source et mon activité de codage",
      skillsTitle: "Compétences et aptitudes",
      skillsDesc: "Cliquez pour inspecter les catégories de compétences et voir les niveaux animés",
      timelineTitle: "Mon parcours",
      timelineDesc: "Jalons clés en ingénierie logicielle, stages et certifications",
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
          title: "Stagiaire Développeur Logiciel",
          period: "Juil 2025 – Août 2025",
          summary: "Compozant · À distance",
          details: "Développement d'interfaces responsives avec React.js et JavaScript. Optimisations SEO, accessibilité et travail en équipe agile."
        },
        {
          title: "Site Web Temple Namami Vindhyavasini",
          period: "2024 – 2025",
          summary: "Projet Client · React, TypeScript, PostgreSQL, Supabase",
          details: "Déploiement complet en production d'une plateforme avec blog dynamique, gestion d'événements, panneau d'administration et API REST."
        },
        {
          title: "Certifié SAP - Data Analyst (SAC)",
          period: "2026",
          summary: "Certifié SAP Analytics Cloud (C_SAC_2601) — SAP",
          details: "Validation du parcours SAP: modélisation de données, Story Design, visualisation, planification et Smart Predict."
        },
        {
          title: "Diplôme d'Ingénieur en Informatique",
          period: "2023 – 2027",
          summary: "Shree L. R. Tiwari College of Engineering, Université de Mumbai",
          details: "Formation d'ingénieur en informatique. Moyenne académique actuelle (CGPA) : 8.13 / 10."
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
      reflections: "Reflexiones",
      contact: "Contacto"
    },
    home: {
      title: "Ujwal Singh",
      available: "Disponible para trabajo colaborativo",
      builds: "Desarrollo",
      roles: [
        "aplicaciones web full-stack escalables.",
        "paneles y análisis de datos empresariales en SAP.",
        "soluciones inteligentes impulsadas por IA.",
        "arquitecturas de bases de datos en la nube."
      ],
      connectTitle: "Conéctate Conmigo",
      connectDesc: "Creemos algo creativo juntos.",
      viewAll: "Ver Todos los Perfiles",
      projectsTitle: "Proyectos Destacados",
      projectsDesc: "Selección de plataformas web e interactivas.",
      exploreAll: "Explorar Todos"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "Desarrollador Full-Stack • Creador • Certificado SAP (SAC)",
      bioText: "Me especializo en crear experiencias web rápidas, responsivas y visualmente atractivas. Desde maquetación frontend en React y TypeScript hasta integración de utilidades de IA y modelos de datos empresariales. Estudiante de ingeniería en computación y certificado SAP (SAC).",
      resumePdf: "Currículum PDF",
      gitTitle: "Actividad en GitHub",
      gitDesc: "Mis contribuciones open-source y actividad de código",
      skillsTitle: "Habilidades y Competencias",
      skillsDesc: "Haz clic para inspeccionar categorías de habilidades y ver niveles animados",
      timelineTitle: "Mi Trayectoria",
      timelineDesc: "Hitos en desarrollo de software, pasantías y certificaciones",
      philosophyTitle: "Filosofía de Ingeniería",
      philosophyDesc: "Valores fundamentales que guían mi proceso de código y diseño UI",
      philosophyCleanTitle: "Arquitectura Limpia",
      philosophyCleanDesc: "Escribir código estructurado y estrictamente tipado que escala limpiamente.",
      philosophyUXTitle: "Usuario Primero",
      philosophyUXDesc: "Crear interfaces premium con animaciones fluidas y diseño responsivo.",
      philosophyAITitle: "Integraciones de IA",
      philosophyAIDesc: "Implementación de procesamiento de lenguaje natural y automatización en el cliente.",
      factsTitle: "Intereses y Ambiente",
      factsDesc: "Pequeños detalles que definen mi espacio de trabajo",
      timelineItems: [
        {
          title: "Pasantía en Desarrollo de Software",
          period: "Jul 2025 – Ago 2025",
          summary: "Compozant · Remoto",
          details: "Desarrollo de características web con React.js y JavaScript, mejoras en accesibilidad, SEO y trabajo bajo metodologías ágiles."
        },
        {
          title: "Sitio Web Templo Namami Vindhyavasini",
          period: "2024 – 2025",
          summary: "Proyecto para Cliente · React, TypeScript, PostgreSQL, Supabase",
          details: "Desarrollo y despliegue integral de una plataforma web con gestión de eventos, blog dinámico, panel de administración y APIs REST."
        },
        {
          title: "Certificado SAP - Data Analyst (SAC)",
          period: "2026",
          summary: "Certificado SAP Analytics Cloud (C_SAC_2601) — SAP",
          details: "Completada la ruta oficial de SAP: modelado de datos, diseño de Stories, visualización, planificación y Smart Predict."
        },
        {
          title: "Grado en Ingeniería en Computación",
          period: "2023 – 2027",
          summary: "Shree L. R. Tiwari College of Engineering, Universidad de Mumbai",
          details: "Cursando Ingeniería en Computación. Promedio académico actual (CGPA): 8.13 / 10."
        }
      ]
    },
    websites: {
      title: "Mis Proyectos",
      subtitle: "Aplicaciones del lado del cliente, plataformas de IA y juegos.",
      searchPlaceholder: "Buscar proyectos o tecnologías...",
      all: "Todos",
      webApps: "Apps Web",
      aiTools: "Herramientas IA",
      games: "Juegos",
      overview: "Resumen",
      highlights: "Puntos Destacados",
      techStack: "Tecnologías",
      visitLive: "Ver en Vivo",
      close: "Cerrar",
      noProjects: "No se encontraron proyectos que coincidan con la búsqueda."
    },
    thoughts: {
      title: "Muro de Reflexiones",
      subtitle: "Libro de visitas local y pensamientos breves.",
      formTitle: "Escribir una Nota",
      formDesc: "¡Comparte una reflexión o saludo! Se almacena localmente.",
      formMsg: "Mensaje *",
      formMsgPlaceholder: "Escribe tu reflexión o mensaje...",
      formName: "Nombre",
      formNamePlaceholder: "Invitado",
      formTheme: "Tema de Color",
      postButton: "Publicar en el Muro",
      notesBoard: "Notas Activas",
      notesCount: "Notas",
      guestLabel: "Invitado"
    },
    contact: {
      title: "Contáctame",
      subtitle: "Envíame un mensaje y me pondré en contacto contigo.",
      nameLabel: "Tu Nombre",
      emailLabel: "Tu Correo Electrónico",
      msgLabel: "Tu Mensaje",
      submitButton: "Enviar Mensaje",
      submittingButton: "Enviando...",
      successMsg: "¡Mensaje enviado con éxito!",
      errorMsg: "Algo salió mal. Por favor, intenta de nuevo.",
      infoTitle: "Ponte en Contacto",
      infoDesc: "¡Me encantaría saber de ti! Ya sea para colaborar, hacer una pregunta o simplemente saludar.",
      responseTitle: "Respuesta Rápida",
      responseDesc: "Suelo responder en 24-48 horas. Para consultas urgentes, contáctame en LinkedIn.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",
      reasonLabel: "Descríbete",
      reasonPlaceholder: "Selecciona una opción",
      reasonOptions: [
        "Solo explorando",
        "Buscando ayuda",
        "Trabajando y aprendiendo",
        "Creador / Desarrollador",
        "Conectar profesionalmente",
        "Solo saludar"
      ],
      msgPlaceholder: "Escribe tu mensaje...",
      successTitle: "¡Mensaje Enviado!",
      successDesc: "Gracias por ponerte en contacto. ¡Te responderé muy pronto!"
    }
  },
  zh: {
    nav: {
      overview: "概览",
      bio: "简介",
      works: "作品",
      reflections: "感悟",
      contact: "联系"
    },
    home: {
      title: "Ujwal Singh",
      available: "随时可进行技术合作",
      builds: "我专注于研发",
      roles: [
        "高可用高扩展的全栈 Web 应用程序。",
        "企业级 SAP 分析仪表板与数据模型。",
        "深度集成大模型的智能 AI 解决方案。",
        "高性能云原生数据库系统与架构。"
      ],
      connectTitle: "与我联系",
      connectDesc: "让我们携手打造兼具美感与性能的数字化产品。",
      viewAll: "查看全部社交主页",
      projectsTitle: "精选项目",
      projectsDesc: "精选前端 Web 应用、AI 辅助工具与交互系统。",
      exploreAll: "探索全部"
    },
    about: {
      title: "Ujwal Singh",
      subtitle: "全栈开发工程师 • 创作者 • SAP 认证 (SAC)",
      bioText: "我专注于打造极速、响应式且视觉惊艳的现代 Web 体验。从利用 React 和 TypeScript 构建高精度前端界面，到集成轻量级 AI 工具及企业级数据模型，我始终致力于交付可扩展的高品质数字产品。计算机工程专业学生，已获得 SAP Analytics Cloud (SAC) 官方认证。",
      resumePdf: "下载个人简历 PDF",
      gitTitle: "GitHub 动态",
      gitDesc: "开源项目贡献与代码仓库活动",
      skillsTitle: "技术专长与熟练度",
      skillsDesc: "点击检查技术分类并查看动画熟练度",
      timelineTitle: "成长足迹",
      timelineDesc: "工程开发、企业实习与专业认证历程",
      philosophyTitle: "工程理念",
      philosophyDesc: "指引我进行代码架构与用户界面设计的核心准则",
      philosophyCleanTitle: "整洁架构",
      philosophyCleanDesc: "编写结构良好、类型严谨的代码，确保系统高扩展性与易维护性。",
      philosophyUXTitle: "用户至上设计",
      philosophyUXDesc: "精心雕琢高保真视觉质感，打造流畅动画与极致响应。",
      philosophyAITitle: "智能赋能",
      philosophyAIDesc: "集成客户端自然语言处理与智能自动化，解决实际场景问题。",
      factsTitle: "工作偏好与氛围",
      factsDesc: "让我的开发工作更具专注度的几件小事",
      timelineItems: [
        {
          title: "软件开发实习生",
          period: "2025年7月 – 2025年8月",
          summary: "Compozant · 远程",
          details: "基于 React.js 和 JavaScript 开发与优化响应式页面，落实 SEO 优化实践与无障碍访问规范，在敏捷冲刺周期内与资深研发协同交付。"
        },
        {
          title: "Namami Vindhyavasini 寺庙商业门户",
          period: "2024 – 2025",
          summary: "客户委托商业项目 · React, TypeScript, PostgreSQL, Supabase",
          details: "全流程端到端交付上线。开发动态文章发布、活动管理、内容管理后台，并设计 PostgreSQL 数据模型与 REST API。"
        },
        {
          title: "SAP 认证数据分析师 (SAC)",
          period: "2026",
          summary: "SAP 官方认证：SAP Analytics Cloud (C_SAC_2601)",
          details: "完成官方学习进阶：Story 设计、数据可视化、SAC 数据建模、计划功能与 Smart Predict 预测分析。"
        },
        {
          title: "计算机工程学士在读",
          period: "2023 – 2027",
          summary: "孟买大学 Shree L. R. Tiwari 工程学院",
          details: "主修计算机工程，学术成绩优良，当前累计绩点 (CGPA)：8.13 / 10。"
        }
      ]
    },
    websites: {
      title: "我的项目",
      subtitle: "客户端应用、AI 平台与互动游戏。",
      searchPlaceholder: "搜索项目或技术栈...",
      all: "全部",
      webApps: "网页应用",
      aiTools: "AI 工具",
      games: "互动娱乐",
      overview: "项目概览",
      highlights: "核心亮点",
      techStack: "技术架构",
      visitLive: "访问在线应用",
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
      infoDesc: "我很想收到您的来信！无论您有全栈项目合作、技术交流还是只想打个招呼，欢迎随时联络。",
      responseTitle: "快速回复",
      responseDesc: "我通常在24-48小时内回复。如遇紧急事项，欢迎通过社交平台联系。",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "your@email.com",
      reasonLabel: "关于您",
      reasonPlaceholder: "选择一个选项",
      reasonOptions: [
        "随便看看",
        "寻求帮助",
        "工作与学习",
        "创作者 / 开发者",
        "结识交流",
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
      reflections: "विचार",
      contact: "संपर्क"
    },
    home: {
      title: "उज्जवल सिंह",
      available: "सहयोगात्मक कार्य के लिए उपलब्ध",
      builds: "मैं निर्माण करता हूँ",
      roles: [
        "स्केलेबल फुल-स्टैक वेब एप्लिकेशन।",
        "एंटरप्राइज एसएपी (SAP) एनालिटिक्स और डैशबोर्ड।",
        "बुद्धिमान एआई-संचालित समाधान।",
        "क्लाउड-नेटिव डेटाबेस आर्किटेक्चर।"
      ],
      connectTitle: "मुझसे जुड़ें",
      connectDesc: "आइए मिलकर कुछ रचनात्मक बनाएं।",
      viewAll: "सभी प्रोफाइल देखें",
      projectsTitle: "विशेष परियोजनाएं",
      projectsDesc: "क्लाइंट-साइड वेब प्लेटफॉर्म और इंटरैक्टिव टूल्स का चयन।",
      exploreAll: "सभी देखें"
    },
    about: {
      title: "उज्जवल सिंह",
      subtitle: "फुल-स्टैक डेवलपर • निर्माता • एसएपी प्रमाणित (SAC)",
      bioText: "मैं तेज, रिस्पॉन्सिव और खूबसूरत वेब अनुभव बनाने में माहिर हूं। React और TypeScript में पिक्सेल-परफेक्ट फ्रंटएंड लेआउट तैयार करने से लेकर क्लाइंट-साइड एआई टूल्स और एंटरप्राइज डेटा मॉडल को एकीकृत करने तक, मेरा ध्यान प्रीमियम डिजिटल उत्पाद देने पर रहता है। कंप्यूटर इंजीनियरिंग के छात्र और एसएपी प्रमाणित – डेटा विश्लेषक (SAC)।",
      resumePdf: "बायोडाटा पीडीएफ",
      gitTitle: "गिटहब गतिविधि",
      gitDesc: "मेरा ओपन-सोर्स योगदान और कोडिंग गतिविधियां",
      skillsTitle: "कौशल और दक्षता",
      skillsDesc: "कौशल श्रेणियों का निरीक्षण करने और एनिमेटेड स्तरों को देखने के लिए क्लिक करें",
      timelineTitle: "मेरी समयरेखा",
      timelineDesc: "सॉफ्टवेयर इंजीनियरिंग, इंटर्नशिप और प्रमाणपत्रों के मील के पत्थर",
      philosophyTitle: "इंजीनियरिंग दर्शन",
      philosophyDesc: "मुख्य सिद्धांत जो मेरी कोडिंग और डिजाइन प्रक्रिया का मार्गदर्शन करते हैं",
      philosophyCleanTitle: "स्वच्छ वास्तुकla",
      philosophyCleanDesc: "व्यवस्थित, स्पष्ट रूप से टाइप किया गया कोड लिखना जो आसानी से स्केल हो और जिसका रख-रखाव आसान हो।",
      philosophyUXTitle: "यूजर फर्स्ट डिजाइन",
      philosophyUXDesc: "सुंदर एनिमेशन और रिस्पॉन्सिव लेआउट के साथ देखने में प्रीमियम इंटरफेस बनाना।",
      philosophyAITitle: "एआई एकीकरण",
      philosophyAIDesc: "दैनिक कार्यों को हल करने के लिए क्लाइंट-साइड पर बुद्धिमान एआई और स्वचालन लागू करना।",
      factsTitle: "रुचियां और मूड",
      factsDesc: "कुछ सरल चीजें जो मेरे कार्यक्षेत्र के अनुकूल हैं",
      timelineItems: [
        {
          title: "सॉफ्टवेयर डेवलपमेंट इंटर्न",
          period: "जुलाई 2025 – अगस्त 2025",
          summary: "कंपोज़ेंट (Compozant) · रिमोट",
          details: "React.js और JavaScript का उपयोग करके रिस्पॉन्सिव वेब फीचर्स विकसित किए। एसईओ और एक्सेसिबिलिटी पर काम करते हुए स्प्रिंट समयसीमा के भीतर योगदान दिया।"
        },
        {
          title: "नमामि विंध्यवासिनी मंदिर वेबसाइट",
          period: "2024 – 2025",
          summary: "क्लाइंट प्रोजेक्ट · React, TypeScript, PostgreSQL, Supabase",
          details: "वास्तविक क्लाइंट के लिए संपूर्ण उत्पादन वेबसाइट विकसित और तैनात की। डायनामिक ब्लॉग, इवेंट प्रबंधन, व्यवस्थापक डैशबोर्ड और पोस्टग्रेएसक्यूएल स्कीमा डिजाइन किया।"
        },
        {
          title: "एसएपी प्रमाणित - डेटा एनालिस्ट (SAC)",
          period: "2026",
          summary: "एसएपी एनालिटिक्स क्लाउड (C_SAC_2601) प्रमाणित — एसएपी",
          details: "एसएपी लर्निंग जर्नी पूर्ण की: स्टोरी डिजाइन, डेटा विज़ुअलाइज़ेशन, डेटा मॉडलिंग, प्लानिंग और स्मार्ट प्रिडिक्ट।"
        },
        {
          title: "कंप्यूटर इंजीनियरिंग में बी.ई.",
          period: "2023 – 2027",
          summary: "श्री एल. आर. तिवारी कॉलेज ऑफ इंजीनियरिंग, मुंबई विश्वविद्यालय",
          details: "कंप्यूटर इंजीनियरिंग में बैचलर की पढ़ाई। वर्तमान सीजीपीए (CGPA): 8.13 / 10।"
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
      responseDesc: "मैं आम तौर पर 24-48 घंटों के भीतर जवाब देता हूं। तत्काल मामलों के लिए सोशल मीडिया पर मुझसे जुड़ें।",
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
