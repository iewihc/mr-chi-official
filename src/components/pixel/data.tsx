import React from 'react';
import { 
  FiDatabase, FiShoppingCart, FiMonitor, FiSettings, 
  FiServer, FiCloud, FiSmartphone, FiShield, FiBarChart,
  FiCode, FiGitPullRequest, FiPackage, FiCheck, FiUploadCloud, FiActivity, FiPenTool, FiImage, FiLayers, FiTarget, FiEye, FiAward 
} from 'react-icons/fi';
import type { ServiceItem, CaseItem, Feedback, DevOpsStep } from './types';

// 服務數據
export const services: ServiceItem[] = [
  {
    title: "創意LOGO設計",
    englishTitle: "Creative Logo Design",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-paint-brush"></i>
  },
  {
    title: "全端網站開發",
    englishTitle: "Full-Stack Web Development",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-laptop-code"></i>
  },
  {
    title: "ERP系統整合",
    englishTitle: "ERP System Integration",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-network-wired"></i>
  },
  {
    title: "DevOps服務",
    englishTitle: "DevOps Services",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-sync-alt"></i>
  },
  {
    title: "UI/UX設計",
    englishTitle: "UI/UX Design",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-pencil-ruler"></i>
  },
  {
    title: "技術顧問",
    englishTitle: "Technical Consulting",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-comments"></i>
  },
];

// 案例數據
export const cases: CaseItem[] = [
  {
    title: "製造業自動化報表",
    englishTitle: "Manufacturing Automated Reports",
    description: "為製造商打造自動化報表系統，將每天3小時的Excel統計工作縮短至5分鐘，錯誤率歸零。",
    englishDescription: "Created an automated reporting system for manufacturers, reducing daily Excel statistics work from 3 hours to 5 minutes with zero error rate.",
    frontendTech: "React",
    backendTech: "Node.js"
  },
  {
    title: "教育機構線上報名系統",
    englishTitle: "Educational Institution Online Registration System",
    description: "為教育機構開發線上報名與後台管理系統，節省70%行政時間，提升用戶體驗。",
    englishDescription: "Developed an online registration and backend management system for educational institutions, saving 70% of administrative time and improving user experience.",
    frontendTech: "Vue",
    backendTech: "Python"
  },
  {
    title: "醫療設備管理平台",
    englishTitle: "Medical Equipment Management Platform",
    description: "為醫療單位建立設備管理系統，實現庫存追蹤與維護排程，提高運營效率。",
    englishDescription: "Established an equipment management system for medical units to achieve inventory tracking and maintenance scheduling, improving operational efficiency.",
    frontendTech: "Angular",
    backendTech: ".NET"
  }
];

// 客戶反饋數據
export const feedbacks: Feedback[] = [
  {
    name: "貿易公司業主",
    englishName: "Trading Company Owner",
    company: "台灣貿易企業",
    englishCompany: "Taiwan Trading Enterprise",
    content: "本來只是抱著試試看的心態找季先生科技，沒想到開發過程中問題解得比我們內部還快，連流程都幫我們一起優化了。",
    englishContent: "I originally approached Mr. Chi Tech with a trial mentality, but didn't expect that they would solve problems faster than our internal team during the development process, and even helped us optimize our workflows.",
    avatar: "/avatar1.jpg",
    rating: 5
  },
  {
    name: "課程平台創辦人",
    englishName: "Course Platform Founder",
    company: "教育科技公司",
    englishCompany: "Educational Technology Company",
    content: "很少有工程師願意聽我們這種非技術背景講話，而且還能聽懂。我們遇到的每個難題，他們都用實際方式解決。",
    englishContent: "Few engineers are willing to listen to non-technical backgrounds like us, and still understand. They solved every challenge we encountered in a practical way.",
    avatar: "/avatar2.jpg",
    rating: 4
  },
  {
    name: "醫療儀器設備商負責人",
    englishName: "Medical Equipment Supplier Manager",
    company: "醫療設備供應商",
    englishCompany: "Medical Equipment Supplier",
    content: "合作起來最放心的一點是他們的回覆速度跟改版彈性，真的有把我們的專案當一回事。",
    englishContent: "The most reassuring aspect of working with them is their response speed and flexibility for revisions. They truly treated our project as a priority.",
    avatar: "/avatar3.jpg",
    rating: 5
  }
];

// DevOps步驟的資料
export const devopsSteps: DevOpsStep[] = [
  { 
    title: "計劃 (Plan)", 
    englishTitle: "Plan", 
    description: "收集需求、制定開發與部署策略", 
    englishDescription: "Gather requirements, formulate development and deployment strategies",
    icon: <FiDatabase size={24} /> 
  },
  { 
    title: "開發 (Develop)", 
    englishTitle: "Develop", 
    description: "撰寫程式碼、版本控制", 
    englishDescription: "Write code, version control",
    icon: <FiMonitor size={24} /> 
  },
  { 
    title: "建置 (Build)", 
    englishTitle: "Build", 
    description: "將原始碼編譯為可執行應用", 
    englishDescription: "Compile source code into executable applications",
    icon: <FiSettings size={24} /> 
  },
  { 
    title: "整合 (Test)", 
    englishTitle: "Test", 
    description: "自動化測試，確保品質", 
    englishDescription: "Automated testing, quality assurance",
    icon: <FiServer size={24} /> 
  },
  { 
    title: "交付 (Release)", 
    englishTitle: "Release", 
    description: "將通過測試的程式部署至環境", 
    englishDescription: "Deploy tested code to environment",
    icon: <FiShoppingCart size={24} /> 
  },
  { 
    title: "部署 (Deploy)", 
    englishTitle: "Deploy", 
    description: "自動部署至實際環境", 
    englishDescription: "Automated deployment to production environment",
    icon: <FiCloud size={24} /> 
  },
  { 
    title: "監控 (Monitor)", 
    englishTitle: "Monitor", 
    description: "即時監控應用與基礎架構", 
    englishDescription: "Real-time monitoring of applications and infrastructure",
    icon: <FiBarChart size={24} /> 
  }
]; 