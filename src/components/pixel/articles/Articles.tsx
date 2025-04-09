import React, { useEffect, useState } from 'react';

interface ArticlesProps {
  language: string;
  oddSection: boolean;
}

interface Post {
  title: string;
  description: string;
  date: string;
  url: string;
  category?: string;
}

const Articles: React.FC<ArticlesProps> = ({ language, oddSection }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 從 API 獲取最新文章
    const fetchLatestPosts = async () => {
      try {
        // 呼叫我們的 API 端點獲取最新文章
        const response = await fetch('/api/latest-posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch latest posts:', error);
        // 如果 API 失敗，使用備用數據
        const fallbackPosts: Post[] = [
          {
            title: language === 'zh' ? '大模型、大平台、大焦慮：你準備好了嗎？' : 'Large Models, Large Platforms, Large Anxiety: Are You Ready?',
            description: language === 'zh' 
              ? '介紹 MCP 和 LLM 、RAG名詞，來一點簡單又不失幽默的科普。' 
              : 'Introduction to MCP, LLM, and RAG terminology with a simple yet humorous science popularization.',
            date: '2025-04-06',
            url: '/posts/llm-mcp-rag',
            category: language === 'zh' ? 'AI' : 'AI'
          },
          {
            title: language === 'zh' ? '企業資源規劃系統實施指南' : 'Enterprise Resource Planning System Implementation Guide',
            description: language === 'zh' 
              ? '本文介紹如何順利實施ERP系統，避免常見陷阱並最大化投資回報...' 
              : 'This article introduces how to successfully implement an ERP system, avoid common pitfalls, and maximize return on investment...',
            date: '2023-10-15',
            url: '/posts/erp-guide',
            category: language === 'zh' ? 'ERP' : 'ERP'
          },
          {
            title: language === 'zh' ? '2023年Web開發趨勢展望' : '2023 Web Development Trends Outlook',
            description: language === 'zh' 
              ? '探討當前最熱門的網站開發技術和框架，以及它們如何影響未來的網絡生態...' 
              : 'Discuss the most popular website development technologies and frameworks, and how they affect the future network ecology...',
            date: '2023-09-22',
            url: '/posts/web-trends',
            category: language === 'zh' ? 'Web開發' : 'Web Development'
          }
        ];
        
        setPosts(fallbackPosts);
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, [language]); // 語言變更時重新獲取

  // 格式化日期函數
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'zh' ? 'zh-TW' : 'en-US', {
        year: 'numeric',
        month: language === 'zh' ? 'long' : 'short',
        day: 'numeric'
      });
    } catch (error) {
      return dateString; // 如果格式不正確，直接返回原始字符串
    }
  };

  return (
    <section id="articles" className={`px-4 py-24 ${oddSection ? 'bg-black' : 'bg-neutral-950'}`}>
      <div className="container mx-auto">
        <h2 className="pixel-section-title text-center">
          <span className="text-[#66ff99]">{language === 'zh' ? '最新文章' : 'Latest Articles'}</span>
        </h2>
        <p className="mb-12 text-gray-400 text-center">
          {language === 'zh' ? '探索我們分享的技術知識和行業洞察' : 'Explore our technical knowledge and industry insights'}
        </p>
        
        {loading ? (
          <div className="text-center text-gray-400">
            {language === 'zh' ? '加載中...' : 'Loading...'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <div key={index} className="pixel-service-card">
                {post.category && (
                  <div className="mb-4 flex-none bg-green-900 text-black px-2 py-1 text-xs inline-block">{post.category}</div>
                )}
                <h3 className="pixel-service-title mb-4">{post.title}</h3>
                <p className="pixel-service-desc mb-8">{post.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                  <a href={post.url} className="text-green-400 hover:text-green-300 text-sm px-3 py-1">
                    {language === 'zh' ? '閱讀更多' : 'Read More'} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles; 