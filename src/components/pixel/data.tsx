import { 
  FiDatabase, FiShoppingCart, FiMonitor, FiSettings, 
  FiServer, FiCloud, FiBarChart
} from 'react-icons/fi';
import type { ServiceItem, CaseItem, Feedback, DevOpsStep } from './types';

// 服務數據
export const services: ServiceItem[] = [
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
    title: "創意LOGO設計",
    englishTitle: "Creative Logo Design",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-paint-brush"></i>
  },
  {
    title: "DevOps服務",
    englishTitle: "DevOps Services",
    description: "建立獨特品牌識別，讓您在市場中脫穎而出。",
    englishDescription: "Establish a unique brand identity that makes you stand out in the market.",
    icon: <i className="fas fa-sync-alt"></i>
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
    title: "廢棄物物理處理ERP",
    englishTitle: "ERP for Physical Waste Treatment",
    description: "為廢棄物中間處理場打造自動化進出場與報表後台系統，整合資料輸入與統計儀表板，將每日6小時人工作業壓縮至5分鐘，有效提升效率與準確度。",
    englishDescription: "Developed an automated reporting system for a physical waste treatment center specializing in industrial waste classification and recycling, reducing daily Excel-based statistical work from 3 hours to just 5 minutes, achieving zero manual error.",
    frontendTech: "Vue",
    backendTech: "Python",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "智能車牌辨識系統",
    englishTitle: "Intelligent License Plate Recognition System",
    description: "協助警察局於違停熱區部署智能車牌辨識系統，透過YOLO演算法即時辨識車牌、自動記錄違規資訊，並串接開單系統實現自動舉發，有效減少人力巡查與漏報情形。",
    englishDescription: "Deployed an intelligent license plate recognition system in illegal parking zones to assist the police. Using YOLO for real-time detection, the system automatically logs violations and integrates with the ticketing system for automated penalty issuance, reducing manual patrol and missed reports.",
    frontendTech: "Vue",
    backendTech: "Python",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=900&auto=format&fit=crop"
  },  
  {
    title: "圖書館繪本資料庫系統",
    englishTitle: "Dream Picture Book Platform",
    description: "由國立公共資訊圖書館推動的繪本創作平台，鼓勵學生發表原創作品並展示於線上資料庫，系統以.NET建構，支援作品上傳、瀏覽與後台審核功能。",
    englishDescription: "A picture book creation platform initiated by the National Library of Public Information, designed to promote student originality and showcase creative works. Built with ASP.NET, the system supports submission, browsing, and backend review of picture book entries.",
    frontendTech: "React",
    backendTech: ".NET",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=900&auto=format&fit=crop"
  }
];

// 客戶反饋數據
export const feedbacks: Feedback[] = [
  {
    name: "東元國際",
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