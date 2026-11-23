import React, { useState } from "react";
import { ExternalLink, Search, Code, Globe, Sparkles, Database, ShieldCheck, CheckCircle2, ArrowRight, Info } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { useLanguage } from "@/hooks/useLanguage";
import { PERSON_ID, SITE_URL } from "@/lib/schemaGraph";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  img: string;
  url: string;
  category: "web" | "game" | "ai";
  tech: string[];
  role?: string;
  architecture?: string;
  // Translatable content
  translations: Record<string, {
    description: string;
    longDescription: string;
    categoryLabel: string;
    features: string[];
  }>;
}

const Websites = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const websites: Project[] = [
    {
      name: "Namami Vindhyavasini",
      img: `${import.meta.env.BASE_URL}images/namami.png`,
      url: "https://namamivindhyavasini.in",
      category: "web",
      tech: ["React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Client Project",
          description: "Production temple portal end-to-end with dynamic blogs, event management, and administrative dashboard.",
          longDescription: "Developed and deployed a production-ready website end-to-end for a real-world client using React and TypeScript with Supabase and PostgreSQL. Built data-driven features from scratch including dynamic blogs, event management, spiritual content, and an admin dashboard for content management. Designed the database schema and integrated REST APIs.",
          features: [
            "Production client deployment with Supabase & PostgreSQL",
            "Dynamic blogs & spiritual event management CMS",
            "Custom administrative dashboard for content updates",
            "RESTful API integration for real-time workflows"
          ]
        },
        fr: {
          categoryLabel: "Projet Client",
          description: "Portail de temple spirituel complet en production avec blog dynamique, gestion d'événements et tableau de bord admin.",
          longDescription: "Développement et déploiement complet en production d'un site web pour un client réel avec React, TypeScript, Supabase et PostgreSQL. Conception du schéma de base de données et intégration des API REST pour les contenus dynamiques.",
          features: [
            "Déploiement en production avec Supabase et PostgreSQL",
            "Gestion des événements et blogs dynamiques",
            "Tableau de bord d'administration sur mesure",
            "Intégration d'API REST pour les flux en temps réel"
          ]
        },
        es: {
          categoryLabel: "Proyecto Cliente",
          description: "Portal de templo espiritual en producción con blogs dinámicos, gestión de eventos y panel de administración.",
          longDescription: "Desarrollo y despliegue de un sitio web de producción para un cliente real utilizando React, TypeScript, Supabase y PostgreSQL. Diseño de esquemas de bases de datos y creación de panel de control administrativo.",
          features: [
            "Despliegue de producción con Supabase y PostgreSQL",
            "Gestión de eventos y publicación de blogs",
            "Panel de administración para gestión de contenidos",
            "Integración de APIs REST en tiempo real"
          ]
        },
        zh: {
          categoryLabel: "商业客户项目",
          description: "基于 React、TypeScript、Supabase 与 PostgreSQL 开发的生产级客户商业门户，配备动态内容与管理后台。",
          longDescription: "为真实客户独立交付端到端的生产级商业网站。基于 React 与 TypeScript，依托 Supabase 与 PostgreSQL 构建动态文章、法会活动安排及内容管理后台。负责数据表结构设计与 RESTful API 集成。",
          features: [
            "基于 Supabase 与 PostgreSQL 的生产环境全流程交付",
            "动态博客发布与法会活动日程 CMS",
            "高效的内容管理专用管理控制看板",
            "支持实时业务流的 RESTful API 架构"
          ]
        },
        hi: {
          categoryLabel: "क्लाइंट प्रोजेक्ट",
          description: "डायनामिक ब्लॉग, इवेंट प्रबंधन और एडमिन डैशबोर्ड के साथ संपूर्ण प्रोडक्शन मंदिर पोर्टल।",
          longDescription: "React, TypeScript, Supabase और PostgreSQL का उपयोग करके वास्तविक क्लाइंट के लिए संपूर्ण उत्पादन वेबसाइट विकसित और तैनात की। स्क्रैच से गतिशील ब्लॉग, इवेंट प्रबंधन और प्रशासनिक डैशबोर्ड का निर्माण किया।",
          features: [
            "Supabase और PostgreSQL के साथ प्रोडक्शन डिप्लॉयमेंट",
            "डायनामिक ब्लॉग और इवेंट शेड्यूलिंग सीएमएस",
            "सामग्री प्रबंधन के लिए कस्टम एडमिन डैशबोर्ड",
            "रीयल-टाइम वर्कफ़्लो के लिए REST API एकीकरण"
          ]
        }
      }
    },
    {
      name: "SecureCloud",
      img: `${import.meta.env.BASE_URL}images/securecloud.png`,
      url: "https://securexcloud.vercel.app/",
      category: "web",
      tech: ["React", "TypeScript", "AES-256-GCM", "RSA-2048 PKI", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Cloud Security",
          description: "Zero-knowledge encrypted cloud storage command center with AES-256-GCM, RSA-2048 PKI key distribution, and audit telemetry.",
          longDescription: "A production-ready zero-knowledge cryptographic cloud platform designed for ultra-secure document storage and sharing. Built with per-file AES-256-GCM hardware encryption, RSA-2048 asymmetric key distribution, SHA-256 integrity streams, and real-time audit telemetry ensuring total data privacy without server-side decryption.",
          features: [
            "AES-256-GCM client-side authenticated encryption",
            "RSA-2048 asymmetric key wrapping & PKI distribution",
            "Zero-knowledge cryptographic isolation & SHA-256 digests",
            "Real-time encrypted storage metrics & audit telemetry"
          ]
        },
        fr: {
          categoryLabel: "Sécurité Cloud",
          description: "Centre de commande de stockage cloud chiffré zero-knowledge avec AES-256-GCM et distribution de clés RSA-2048.",
          longDescription: "Plateforme cloud cryptographique zero-knowledge conçue pour le stockage et le partage hautement sécurisés de documents avec chiffrement matériel AES-256-GCM et gestion PKI RSA-2048.",
          features: [
            "Chiffrement authentifié client AES-256-GCM",
            "Distribution et encapsulation de clés RSA-2048",
            "Isolation cryptographique sans connaissance serveur",
            "Télémétrie d'audit et métriques de stockage chiffrées"
          ]
        },
        es: {
          categoryLabel: "Seguridad Cloud",
          description: "Centro de almacenamiento en la nube cifrado zero-knowledge con AES-256-GCM y distribución de claves RSA-2048.",
          longDescription: "Plataforma en la nube criptográfica de conocimiento cero para almacenamiento y transferencia ultrasegura de documentos, impulsada por cifrado AES-256-GCM y envoltura de claves asimétricas RSA-2048.",
          features: [
            "Cifrado autenticado del lado del cliente AES-256-GCM",
            "Distribución de claves asimétricas RSA-2048",
            "Aislamiento criptográfico zero-knowledge",
            "Telemetría de auditoría y métricas en tiempo real"
          ]
        },
        zh: {
          categoryLabel: "云端安全",
          description: "基于零知识证明架构的高安全加密云存储中心，支持 AES-256-GCM 与 RSA-2048 密钥分发。",
          longDescription: "具备生产级零知识加密能力的云存储平台。采用单文件硬件级 AES-256-GCM 载荷加密与 RSA-2048 非对称公钥密钥包装体系，杜绝服务端明文泄露，并提供实时审计遥测看板。",
          features: [
            "客户端硬件级 AES-256-GCM 认证加密",
            "RSA-2048 非对称密钥包装与 PKI 信任链",
            "零知识加密隔离与 SHA-256 数据流校验",
            "实时加密存储遥测与合规审计日志"
          ]
        },
        hi: {
          categoryLabel: "क्लाउड सुरक्षा",
          description: "AES-256-GCM और RSA-2048 कुंजी वितरण के साथ ज़ीरो-नॉलेज एन्क्रिप्टेड क्लाउड स्टोरेज कमांड सेंटर।",
          longDescription: "अति-सुरक्षित दस्तावेज़ भंडारण और साझाकरण के लिए डिज़ाइन किया गया एक उत्पादन-तैयार ज़ीरो-नॉलेज क्रिप्टोग्राफ़िक क्लाउड प्लेटफ़ॉर्म। AES-256-GCM हार्डवेयर एन्क्रिप्शन और RSA-2048 असममित कुंजी वितरण के साथ निर्मित।",
          features: [
            "क्लाइंट-साइड AES-256-GCM प्रमाणित एन्क्रिप्शन",
            "RSA-2048 असममित कुंजी रैपिंग और वितरण",
            "ज़ीरो-नॉलेज क्रिप्टोग्राफ़िक अलगाव और SHA-256 सत्यापन",
            "रीयल-टाइम एन्क्रिप्टेड स्टोरेज मेट्रिक्स और ऑडिट टेलीमेट्री"
          ]
        }
      }
    },
    {
      name: "Wanderlust Adventures",
      img: `${import.meta.env.BASE_URL}images/wanderlust.png`,
      url: "https://wanderlustadventures23.vercel.app/",
      category: "web",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Travel portal highlighting India's heritage landmarks.",
          longDescription: "An immersive travel guide platform designed to showcase heritage landscapes across India. Built completely client-side for fast response.",
          features: ["Curated itineraries", "Interactive guides", "Responsive maps"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Portail de voyage pour explorer le patrimoine de l'Inde.",
          longDescription: "Une plateforme de voyage immersive conçue pour présenter les paysages patrimoniaux de l'Inde. Construite côté client.",
          features: ["Itinéraires organisés", "Guides interactifs", "Cartographie réactive"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Plataforma de viajes para explorar el patrimonio de la India.",
          longDescription: "Una plataforma de guía de viajes inmersiva diseñada para mostrar paisajes patrimoniales en la India. Construida en el cliente.",
          features: ["Itinerarios seleccionados", "Guías interactivas", "Mapas responsivos"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "用于探索印度文化遗产的旅游分享平台。",
          longDescription: "一个旨在展示印度各地 cultural 遗产和自然风光的旅游指南平台。采用客户端渲染实现极速响应。",
          features: ["策划旅行路线", "交互式景点导览", "响应式地图缩放"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "भारत की सांस्कृतिक विरासत की खोज के लिए एक यात्रा मंच।",
          longDescription: "भारत भर में सांस्कृतिक और प्राकृतिक स्थलों को प्रदर्शित करने के लिए डिज़ाइन किया गया एक यात्रा गाइड मंच।",
          features: ["विशेष यात्रा कार्यक्रम", "इंटरैक्टिव गाइड", "रिस्पॉन्सिव मानचित्र"]
        }
      }
    },
    {
      name: "CuteList",
      img: `${import.meta.env.BASE_URL}images/cutelist.png`,
      url: "https://cute23.vercel.app/",
      category: "web",
      tech: ["React", "LocalStorage", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Delightful task manager app with custom themes.",
          longDescription: "A gamified task board featuring custom pastel layouts, positive audio feedback triggers, and smooth list transition cards.",
          features: ["Audio feedback system", "Pastel layout selector", "Persistence state"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Gestionnaire de tâches avec des thèmes pastels.",
          longDescription: "Un tableau de tâches ludique comprenant des mises en page pastel personnalisées et des animations fluides.",
          features: ["Retour audio positif", "Sélecteur de thèmes pastels", "Sauvegarde locale"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Gestor de tareas con temas de colores pastel.",
          longDescription: "Un tablero de tareas gamificado con temas pastel personalizados y retroalimentación de audio al completar tareas.",
          features: ["Sistema de sonidos positivos", "Selector de temas pastel", "Persistencia local"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "带有柔和马卡龙色调的趣味任务管理板。",
          longDescription: "一个将任务管理趣味化的待办事项清单。配有粉嫩的配色主题、微交互动画和清脆的任务完成音效。",
          features: ["任务完成音效反馈", "粉粉的主题切换", "本地 data 持久化"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "पेस्टल थीम के साथ डिज़ाइन किया गया प्यारा कार्य प्रबंधक बोर्ड।",
          longDescription: "एक मजेदार कार्य बोर्ड जिसमें कस्टम पेस्टल लेआउट, सकारात्मक ऑडियो प्रतिक्रिया, और चिकने चेकलिस्ट कार्ड शामिल हैं।",
          features: ["ऑडियो प्रतिक्रिया प्रणाली", "पेस्टल थीम चयनकर्ता", "स्थानीय डेटा भंडारण"]
        }
      }
    },
    {
      name: "Wine Quality Predictor",
      img: `${import.meta.env.BASE_URL}images/wine-quality.png`,
      url: "https://winetestmodel.vercel.app/predict",
      category: "ai",
      tech: ["Machine Learning", "Python", "Logistic Regression", "React", "FastAPI"],
      translations: {
        en: {
          categoryLabel: "Machine Learning",
          description: "Interactive machine learning predictor estimating wine quality based on physicochemical laboratory properties.",
          longDescription: "An interactive Machine Learning web application featuring a trained Logistic Regression model on real-world physicochemical wine attributes (acidity, residual sugar, sulfur dioxide, density, pH, alcohol) to predict quality in real time with dynamic sliders.",
          features: [
            "Trained Logistic Regression predictive ML model",
            "Real-time interactive physicochemical attribute sliders",
            "Instant quality probability estimation",
            "Model interpretation & benchmark presets"
          ]
        },
        fr: {
          categoryLabel: "Machine Learning",
          description: "Prédicteur interactif de machine learning évaluant la qualité du vin à partir de paramètres physico-chimiques.",
          longDescription: "Application web interactive de machine learning utilisant un modèle de régression logistique entraîné sur des données physico-chimiques réelles pour prédire la qualité du vin en temps réel.",
          features: [
            "Modèle prédictif entraîné par régression logistique",
            "Curseurs interactifs de paramètres en temps réel",
            "Estimation instantanée des probabilités",
            "Préréglages d'exemples de test"
          ]
        },
        es: {
          categoryLabel: "Machine Learning",
          description: "Predictor interactivo de machine learning que estima la calidad del vino según variables fisicoquímicas.",
          longDescription: "Aplicación web interactiva de aprendizaje automático con un modelo de regresión logística entrenado para predecir la calidad del vino en función de parámetros de laboratorio en tiempo real.",
          features: [
            "Modelo predictivo de regresión logística entrenado",
            "Controles deslizantes de parámetros en tiempo real",
            "Cálculo instantáneo de probabilidad de calidad",
            "Ejemplos predefinidos para pruebas rápidas"
          ]
        },
        zh: {
          categoryLabel: "机器学习 ML",
          description: "基于理化指标的交互式葡萄酒品质机器学习预测平台。",
          longDescription: "基于真实实验室理化数据训练的逻辑回归机器学习 Web 应用。用户可通过实时交互式滑块调节酸度、糖分、密度与酒精度，即时计算并预测酒品优良概率。",
          features: [
            "基于真实数据训练的逻辑回归机器学习模型",
            "实时多维理化指标交互滑块",
            "即时输出品质评级与置信度概率",
            "内置典型优质与低分样本预设"
          ]
        },
        hi: {
          categoryLabel: "मशीन लर्निंग",
          description: "भौतिक-रासायनिक प्रयोगशाला गुणों के आधार पर शराब की गुणवत्ता का अनुमान लगाने वाला मशीन लर्निंग प्रिडिक्टर।",
          longDescription: "वास्तविक प्रयोगशाला विशेषताओं के आधार पर प्रशिक्षित लॉजिस्टिक रिग्रेशन मॉडल का उपयोग करके वास्तविक समय में गुणवत्ता की भविष्यवाणी करने वाला एमएल एप्लिकेशन।",
          features: [
            "प्रशिक्षित लॉजिस्टिक रिग्रेशन प्रेडिक्टिव मॉडल",
            "वास्तविक समय में विशेषता स्लाइडर्स",
            "त्वरित गुणवत्ता संभावना अनुमान",
            "त्वरित परीक्षण के लिए पूर्व-निर्धारित नमूने"
          ]
        }
      }
    },
    {
      name: "MediSoul",
      img: `${import.meta.env.BASE_URL}images/medisoul.png`,
      url: "https://cure23.vercel.app/",
      category: "ai",
      tech: ["AIML", "TypeScript", "AI Chatbot", "React", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "AI Healthcare",
          description: "AI medical companion with symptom analysis, health tracking & fine-tuned client chatbot. Grounded in published TechRxiv research (DOI: 10.36227/techrxiv.177006061.17458864/v1).",
          longDescription: "Developed an AI-powered medical companion providing symptom analysis, personalized health insights, and health history tracking through an interactive web application. Serves as the real-world software implementation of Ujwal Singh's research published on TechRxiv ('Exploring the Role of Artificial Intelligence in Convenient and Accessible Healthcare Support Systems', DOI: 10.36227/techrxiv.177006061.17458864/v1). Built client-side conversational AI fine-tuned on curated clinical symptom datasets with strict triage boundaries.",
          features: [
            "Practical implementation of published TechRxiv AI research",
            "Symptom analysis & personalized non-clinical triage insights",
            "Fine-tuned client-side AI chatbot with curated clinical datasets",
            "Longitudinal health history & confidential record tracking"
          ]
        },
        fr: {
          categoryLabel: "Santé IA",
          description: "Compagnon médical IA avec analyse des symptômes, suivi de santé et chatbot IA affiné sur jeux de données.",
          longDescription: "Compagnon médical propulsé par l'IA fournissant une analyse instantanée des symptômes, des conseils de santé personnalisés et un suivi d'historique médical. Chatbot IA client entraîné sur des données cliniques sélectionnées pour une précision accrue.",
          features: [
            "Analyse des symptômes et insights personnalisés",
            "Chatbot IA client affiné sur données médicales",
            "Module de prise de rendez-vous rapide",
            "Suivi de l'historique et des dossiers de santé"
          ]
        },
        es: {
          categoryLabel: "Salud IA",
          description: "Compañero médico con IA para análisis de síntomas, historial de salud y chatbot afinado con datos médicos.",
          longDescription: "Compañero médico inteligente impulsado por IA que proporciona análisis de síntomas, información de salud personalizada y seguimiento de antecedentes médicos. Chatbot entrenado con conjuntos de datos clínicos para mayor precisión diagnóstica.",
          features: [
            "Análisis inteligente de síntomas en tiempo real",
            "Chatbot de IA ajustado con datos de salud seleccionados",
            "Módulo de citas médicas rápidas",
            "Seguimiento y control de historial clínico"
          ]
        },
        zh: {
          categoryLabel: "智能医疗 AI",
          description: "AI 智能医疗助手，提供症状分析、个性化健康洞察与基于专属健康数据集微调的客户端对话模型。",
          longDescription: "基于 Web 技术构建的 AI 医疗辅助平台。通过在客户端结合精选医疗与症状数据集对 AI 聊天机器人进行专项微调，显著提升健康咨询的准确度与相关性。内置快速预约挂号与完整的个人病历健康历史追踪功能。",
          features: [
            "基于精准数据集微调的客户端健康对话模型",
            "多维症状智能评估与个性化健康建议",
            "整合式快速就医预约挂号流程",
            "长期健康档案与病史数字化追踪"
          ]
        },
        hi: {
          categoryLabel: "एआई स्वास्थ्य",
          description: "लक्षण विश्लेषण, स्वास्थ्य इतिहास और विशेष फाइन-ट्यून एआई चैटबॉट के साथ चिकित्सा साथी।",
          longDescription: "लक्षण विश्लेषण, व्यक्तिगत स्वास्थ्य अंतर्दृष्टि और स्वास्थ्य इतिहास ट्रैकिंग प्रदान करने वाला एआई-संचालित चिकित्सा साथी। स्वास्थ्य विश्लेषण की सटीकता में सुधार के लिए क्यूरेटेड डेटासेट का उपयोग करके क्लाइंट-साइड एआई चैटबॉट को प्रशिक्षित किया।",
          features: [
            "एआई लक्षण विश्लेषण और स्वास्थ्य अंतर्दृष्टि",
            "क्यूरेटेड डेटासेट के साथ फाइन-ट्यून किया गया चैटबॉट",
            "त्वरित अपॉइंटमेंट बुकिंग सुविधा",
            "सुरक्षित स्वास्थ्य इतिहास और रिकॉर्ड ट्रैकिंग"
          ]
        }
      }
    },
    {
      name: "CognitiveMind",
      img: `${import.meta.env.BASE_URL}images/cognitivemind.png`,
      url: "https://cognitivemind.vercel.app",
      category: "ai",
      tech: ["React", "TypeScript", "AI Healthcare", "Cognitive Assessment", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "AI Healthcare",
          description: "AI-powered cognitive assessment platform analyzing memory, attention, and reaction patterns to detect early cognitive decline.",
          longDescription: "An AI-powered cognitive health screening and assessment platform designed to analyze memory, attention, and reaction patterns in under 3 minutes. Focuses on privacy-first early detection, pattern recognition, and non-invasive cognitive health monitoring.",
          features: [
            "AI-powered cognitive assessment under 3 minutes",
            "Memory analysis & pattern recognition",
            "Reaction time & attention metrics",
            "Privacy-first non-invasive health evaluation"
          ]
        },
        fr: {
          categoryLabel: "Santé IA",
          description: "Plateforme d'évaluation cognitive propulsée par l'IA analysant la mémoire et l'attention pour détecter le déclin cognitif précoce.",
          longDescription: "Plateforme d'évaluation de la santé cognitive utilisant l'intelligence artificielle pour évaluer la mémoire, l'attention et les temps de réaction en moins de 3 minutes.",
          features: [
            "Évaluation cognitive par IA en moins de 3 minutes",
            "Analyse de la mémoire et reconnaissance de motifs",
            "Mesures du temps de réaction et de l'attention",
            "Évaluation respectueuse de la vie privée"
          ]
        },
        es: {
          categoryLabel: "Salud IA",
          description: "Plataforma de evaluación cognitiva con IA para analizar memoria y atención para la detección temprana del deterioro cognitivo.",
          longDescription: "Plataforma de evaluación de la salud cognitiva con inteligencia artificial para analizar memoria, patrones de atención y velocidad de reacción en menos de 3 minutes.",
          features: [
            "Evaluación cognitiva con IA en menos de 3 minutos",
            "Análisis de memoria y reconocimiento de patrones",
            "Métricas de tiempo de reacción y atención",
            "Evaluación segura enfocada en la privacidad"
          ]
        },
        zh: {
          categoryLabel: "认知健康 AI",
          description: "基于 AI 的认知健康早期筛查平台，通过记忆、注意力及反应模式分析早期认知变化。",
          longDescription: "基于人工智能的认知健康筛查工具，在 3 分钟内综合测试用户的记忆力、注意力和反应模式，以隐私优先的方式提供非侵入式早期筛查支持。",
          features: [
            "3 分钟快速 AI 认知能力评估",
            "记忆分析与模式识别算法",
            "注意力与反应时间精准度量",
            "隐私优先的非侵入式健康监测"
          ]
        },
        hi: {
          categoryLabel: "एआई स्वास्थ्य",
          description: "स्मृति, ध्यान और प्रतिक्रिया पैटर्न का विश्लेषण करके प्रारंभिक संज्ञानात्मक गिरावट का पता लगाने वाला एआई प्लेटफॉर्म।",
          longDescription: "3 मिनट से कम समय में स्मृति, ध्यान और प्रतिक्रिया पैटर्न का विश्लेषण करने के लिए डिज़ाइन किया गया एक एआई-संचालित संज्ञानात्मक स्वास्थ्य मूल्यांकन मंच।",
          features: [
            "3 मिनट में एआई-संचालित संज्ञानात्मक मूल्यांकन",
            "स्मृति विश्लेषण और पैटर्न पहचान",
            "प्रतिक्रिया समय और ध्यान मेट्रिक्स",
            "गोपनीयता-केंद्रित गैर-आक्रामक स्वास्थ्य मूल्यांकन"
          ]
        }
      }
    },
    {
      name: "Climora",
      img: `${import.meta.env.BASE_URL}images/climora.png`,
      url: "https://climorainfo.vercel.app/",
      category: "web",
      tech: ["React", "Weather API", "Activity Engine", "Tailwind CSS", "TypeScript"],
      translations: {
        en: {
          categoryLabel: "Weather & Lifestyle",
          description: "Live real-time weather intelligence platform with personalized activity suggestions tailored to atmospheric conditions.",
          longDescription: "A modern, responsive weather forecasting and lifestyle recommendation platform. Delivers live temperature, humidity, UV index, and golden hour tracking coupled with an intelligent activity recommender based on current weather conditions.",
          features: [
            "Real-time live weather & atmospheric telemetry",
            "Contextual activity suggestions based on weather",
            "UV index, wind speed, visibility & humidity analytics",
            "Sunrise, sunset & golden hour tracking"
          ]
        },
        fr: {
          categoryLabel: "Météo & Style de Vie",
          description: "Plateforme météo en direct avec suggestions d'activités personnalisées selon les conditions climatiques.",
          longDescription: "Plateforme moderne de prévisions météorologiques offrant la température en temps réel, l'indice UV et des recommandations d'activités adaptées aux conditions météo.",
          features: [
            "Données météo en direct et en temps réel",
            "Suggestions d'activités adaptées au climat",
            "Indice UV, vent, humidité et heure dorée",
            "Interface moderne et intuitive"
          ]
        },
        es: {
          categoryLabel: "Clima y Actividades",
          description: "Plataforma meteorológica en vivo con sugerencias de actividades adaptadas a las condiciones climáticas.",
          longDescription: "Plataforma moderna de pronóstico del tiempo que proporciona métricas en vivo (temperatura, índice UV, humedad) y sugerencias inteligentes de actividades según el clima.",
          features: [
            "Datos meteorológicos en vivo y en tiempo real",
            "Sugerencias de actividades según el clima",
            "Índice UV, viento, visibilidad y hora dorada",
            "Diseño elegante y adaptable"
          ]
        },
        zh: {
          categoryLabel: "天气与生活推荐",
          description: "实时天气情报与根据气象条件定制的智能户外及日常活动建议平台。",
          longDescription: "现代化的实时天气预报与生活方式建议应用。提供高精度实时温度、体感分析、紫外线指数、黄金时刻追踪，并根据天气状况动态推荐适宜活动。",
          features: [
            "全天候实时气象与环境数据追踪",
            "根据天气自动生成的智能活动建议",
            "紫外线指数、风速、能见度与湿度分析",
            "日出日落与黄金时刻监测"
          ]
        },
        hi: {
          categoryLabel: "मौसम और गतिविधियाँ",
          description: "मौसम की स्थिति के अनुसार व्यक्तिगत गतिविधि सुझावों के साथ लाइव मौसम प्लेटफॉर्म।",
          longDescription: "एक आधुनिक मौसम पूर्वानुमान और जीवन शैली मंच जो तापमान, आर्द्रता, यूवी सूचकांक और मौसम के अनुसार बुद्धिमान गतिविधि सुझाव प्रदान करता है।",
          features: [
            "रीयल-टाइम लाइव मौसम डेटा और विश्लेषण",
            "मौसम के आधार पर प्रासंगिक गतिविधि सुझाव",
            "यूवी इंडेक्स, हवा की गति और आर्द्रता ट्रैकिंग",
            "सूर्योदय, सूर्यास्त और गोल्डन ऑवर विवरण"
          ]
        }
      }
    },
    {
      name: "Delve Together",
      img: `${import.meta.env.BASE_URL}images/delve.png`,
      url: "https://delvetogether.vercel.app",
      category: "web",
      tech: ["Next.js", "Socket.io", "Supabase"],
      translations: {
        en: {
          categoryLabel: "Web App",
          description: "Collaborative rooms and panels for quiet world discussions.",
          longDescription: "A focused discussion alternative space built to escape the noise of mainstream feeds. Provides live chat rooms and document boards.",
          features: ["Live discussion rooms", "Shared notes dashboard", "Filtered categories"]
        },
        fr: {
          categoryLabel: "App Web",
          description: "Salons collaboratifs pour des discussions mondiales calmes.",
          longDescription: "Un espace alternatif de discussion conçu pour échapper au bruit des réseaux sociaux. Offre des salons de chat en direct.",
          features: ["Salons de discussion en direct", "Tableau de notes partagé", "Filtrage par catégories"]
        },
        es: {
          categoryLabel: "App Web",
          description: "Salas colaborativas para debates tranquilos del mundo.",
          longDescription: "Un espacio alternativo para debates estructurados lejos del ruido de las redes sociales. Proporciona salas de chat en vivo.",
          features: ["Salas de discusión en vivo", "Tablero de notas compartido", "Filtros por categorías"]
        },
        zh: {
          categoryLabel: "网页应用",
          description: "用于对全球性事务进行理性探讨的协作室与论坛。",
          longDescription: "一个旨在过滤社交媒体噪音的深度讨论平台。提供实时的文字交流讨论房间和协作看板。",
          features: ["实时协作讨论室", "共享看板仪表盘", "按兴趣过滤板块"]
        },
        hi: {
          categoryLabel: "वेब ऐप",
          description: "शांत चर्चाओं के लिए सहयोगी कमरे और पैनल।",
          longDescription: "सोशल मीडिया के शोर से दूर, सार्थक चर्चाओं के लिए बनाया गया एक मंच। यह लाइव चैट रूम और दस्तावेज़ बोर्ड प्रदान करता है।",
          features: ["लाइव चर्चा कक्ष", "साझा नोट्स डैशबोर्ड", "वर्गीकृत फ़िल्टर"]
        }
      }
    },
    {
      name: "LoopPlay",
      img: `${import.meta.env.BASE_URL}images/loopplay.png`,
      url: "https://loopplay23.vercel.app/",
      category: "game",
      tech: ["React", "TypeScript", "HTML5 Canvas", "Web Audio API", "Tailwind CSS"],
      translations: {
        en: {
          categoryLabel: "Arcade Games",
          description: "Personal online arcade of 23 lightweight, addictive mini-games designed for quick bursts of fun and high replayability.",
          longDescription: "An interactive web arcade offering 23 lightweight, responsive mini-games spanning memory, reflex, skill, math, and party categories. Engineered entirely client-side with smooth HTML5 Canvas animations, audio synthesizers, and daily challenge modes.",
          features: [
            "23 addictive client-side mini-games across 6 categories",
            "Memory, reflex, skill, fun, math & party game modes",
            "Game of the Day daily challenges & randomized play",
            "Lightweight, instant-loading responsive arcade engine"
          ]
        },
        fr: {
          categoryLabel: "Jeux d'Arcade",
          description: "Arcade en ligne de 23 mini-jeux légers et captivants conçus pour des sessions de jeu rapides.",
          longDescription: "Une salle d'arcade interactive proposant 23 mini-jeux fluides et réactifs dans les catégories mémoire, réflexe, habileté et mathématiques.",
          features: [
            "23 mini-jeux légers répartis en 6 catégories",
            "Modes de jeu mémoire, réflexe, habileté et party",
            "Défis quotidiens 'Jeu du jour'",
            "Moteur de jeu rapide et ultra-réactif"
          ]
        },
        es: {
          categoryLabel: "Juegos Arcade",
          description: "Salón arcade personal con 23 minijuegos ligeros y adictivos para partidas rápidas y diversión sin fin.",
          longDescription: "Plataforma interactiva de juegos arcade que ofrece 23 minijuegos receptivos en categorías de memoria, reflejos, habilidad y matemáticas.",
          features: [
            "23 minijuegos rápidos en 6 categorías temáticas",
            "Modos de memoria, reflejos, agilidad mental y retos",
            "Desafíos diarios del 'Juego del día'",
            "Animaciones fluidas y carga instantánea"
          ]
        },
        zh: {
          categoryLabel: "街机娱乐",
          description: "集成 23 款轻量级趣味迷你小游戏的个人专属网页街机厅，主打快速解压与高复玩性。",
          longDescription: "基于 React 与 Canvas 构建的轻量级网页游戏互动中心。精选 23 款涵盖记忆力、反应速度、微操技能、趣味益智与聚会派对主题的游戏模块，配有每日挑战与即时音频反馈。",
          features: [
            "覆盖 6 大分类的 23 款高流畅度小游戏",
            "记忆、反应、微操、数学与聚会挑战模式",
            "每日精选游戏与随机推荐系统",
            "轻量架构即开即玩零延迟"
          ]
        },
        hi: {
          categoryLabel: "आर्केड गेम्स",
          description: "त्वरित मनोरंजन और अंतहीन खेल के लिए डिज़ाइन किए गए 23 लत लगाने वाले मिनी-गेम का व्यक्तिगत आर्केड।",
          longDescription: "मेमोरी, रिफ्लेक्स, कौशल, गणित और पार्टी श्रेणियों में 23 रिस्पॉन्सिव मिनी-गेम पेश करने वाला एक इंटरैक्टिव वेब आर्केड प्लेटफ़ॉर्म।",
          features: [
            "6 श्रेणियों में 23 मजेदार मिनी-गेम्स",
            "मेमोरी, रिफ्लेक्स और कौशल चुनौतियाँ",
            "गेम ऑफ द डे दैनिक चुनौतियाँ",
            "त्वरित लोडिंग और सहज गेमप्ले अनुभव"
          ]
        }
      }
    }
  ];

  const filteredWebsites = websites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const projectSchemas = websites.map(site => ({
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/projects#${site.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: site.name,
    description: site.translations.en.description,
    applicationCategory: site.category === "ai" ? "HealthApplication" : "WebApplication",
    operatingSystem: "All (Web Browser)",
    url: site.url,
    author: {
      "@id": PERSON_ID
    }
  }));

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 px-1 sm:px-0 animate-in fade-in duration-300">
      <PageSEO
        title="Software Projects & Web Applications | Ujwal Singh"
        description="Explore production web applications, client solutions, and AI platforms built by Ujwal Singh, including Namami Vindhyavasini, SecureCloud, CognitiveMind, Wine Quality Predictor, Climora, Wanderlust Adventures, MediSoul, CuteList, Delve Together, and LoopPlay."
        path="/projects"
        keywords="Ujwal Singh projects, Namami Vindhyavasini, SecureCloud, CognitiveMind, Wine Quality Predictor, Climora, Wanderlust Adventures, MediSoul, CuteList, Delve Together, LoopPlay, full stack applications"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" }
        ]}
        extraNodes={projectSchemas}
      />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-primary/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              Portfolio & Works
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
            {t("websites.title")}
          </h1>
          <p className="text-muted-foreground text-xs mt-0.5">
            Production client applications, zero-knowledge cloud architectures, and interactive web tools.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("websites.searchPlaceholder")}
            className="w-full bg-background/50 border border-primary/10 rounded-xl pl-8 pr-4 py-2 text-xs focus:outline-none focus:border-primary/40 transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredWebsites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredWebsites.map((site, index) => {
            const detail = site.translations[language] || site.translations["en"];
            return (
              <div
                key={site.name}
                onClick={() => setSelectedProject(site)}
                className="hover-lift glass-card overflow-hidden group cursor-pointer flex flex-col h-full hover:border-primary/25 border border-primary/10"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-full h-40 bg-muted overflow-hidden relative border-b border-primary/5">
                  <img
                    src={site.img}
                    alt={site.name}
                    className="w-full h-full object-cover object-top bg-muted/20 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80`;
                    }}
                  />
                  <Badge className="absolute top-2.5 right-2.5 bg-background/85 text-foreground border border-primary/15 backdrop-blur-md text-[9px] hover:bg-background/95 px-2 py-0.5 shadow-sm">
                    {detail.categoryLabel}
                  </Badge>
                  {/* Subtle hover prompt */}
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-[11px] font-semibold bg-card/95 text-foreground border border-primary/25 px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-primary" /> View Details
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm sm:text-base flex items-center justify-between group-hover:text-primary transition-colors">
                      <span>{site.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(site);
                        }}
                        className="p-1 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        title="View project overview & specs"
                        aria-label={`View info for ${site.name}`}
                      >
                        <Info className="w-3.5 h-3.5 text-primary" />
                      </button>
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {detail.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-primary/5">
                    <div className="flex flex-wrap gap-1">
                      {site.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold bg-primary/5 border border-primary/10 text-primary px-1.5 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons: Visit Live and Project Info */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground font-semibold px-3 py-2 rounded-xl text-xs hover:bg-primary/90 transition-all shadow-sm group/btn"
                      >
                        <span>{t("websites.visitLive") || "Visit Live"}</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(site);
                        }}
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all cursor-pointer"
                        title="View project overview and specs"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Info</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 glass-card">
          <p className="text-xs text-muted-foreground font-medium">{t("websites.noProjects")}</p>
        </div>
      )}

      {/* Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-md md:max-w-3xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl p-5 md:p-6 rounded-2xl animate-in fade-in duration-300">
          {selectedProject && (() => {
            const detail = selectedProject.translations[language] || selectedProject.translations["en"];
            return (
              <div className="flex flex-col md:flex-row gap-5 md:gap-6 text-left">
                {/* Left Side: Image on Desktop, Top on Mobile */}
                <div className="w-full md:w-5/12 flex flex-col justify-start">
                  <div className="w-full h-44 md:h-64 rounded-xl overflow-hidden bg-muted border border-primary/10 shadow-sm">
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover object-top bg-muted/20"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80`;
                      }}
                    />
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <DialogHeader className="mb-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge className="bg-primary/20 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                          {detail.categoryLabel}
                        </Badge>
                      </div>
                      <DialogTitle className="text-xl font-bold flex items-center justify-between">
                        {selectedProject.name}
                      </DialogTitle>
                      <DialogDescription className="text-xs text-muted-foreground">
                        Production specifications & engineering architecture.
                      </DialogDescription>
                    </DialogHeader>

                    <div>
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                        <Globe className="w-3 h-3 text-primary" /> {t("websites.overview")}
                      </h4>
                      <p className="text-xs text-foreground/90 leading-relaxed">
                        {detail.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" /> {t("websites.highlights")}
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-foreground/80 pl-1">
                        {detail.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                        <Code className="w-3 h-3 text-primary" /> {t("websites.techStack")}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-md border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-between border-t border-primary/10">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs hover:bg-primary/90 transition-all shadow-sm group/live"
                    >
                      <span>Visit Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/live:translate-x-0.5 transition-transform" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all cursor-pointer"
                    >
                      {t("websites.close") || "Close"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Websites;
