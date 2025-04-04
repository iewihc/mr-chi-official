// 定義服務項目的介面
export interface ServiceItem {
  title: string;
  englishTitle?: string;
  description: string;
  englishDescription?: string;
  icon: React.ReactNode;
}

// 案例項目介面
export interface CaseItem {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  frontendTech: string;
  backendTech: string;
}

// 客戶反饋介面
export interface Feedback {
  name: string;
  englishName: string;
  company: string;
  englishCompany: string;
  content: string;
  englishContent: string;
  avatar: string;
}

// DevOps步驟介面
export interface DevOpsStep {
  title: string;
  englishTitle?: string;
  description: string;
  englishDescription?: string;
  icon: React.ReactNode;
} 