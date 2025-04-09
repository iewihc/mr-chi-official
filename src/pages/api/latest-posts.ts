import type { APIRoute } from 'astro';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

export const GET: APIRoute = async () => {
  try {
    // 獲取所有文章文件
    const postsDir = path.join(process.cwd(), 'src/pages/posts');
    const files = await fs.readdir(postsDir);
    
    // 只處理 .md 文件
    const mdFiles = files.filter(file => file.endsWith('.md') && file !== 'index.md');
    
    // 獲取每個文件的元數據
    const posts = await Promise.all(
      mdFiles.map(async (fileName) => {
        const filePath = path.join(postsDir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(fileContent);
        
        // 轉換日期格式
        let dateField = data.date || data.pubDate;
        if (!dateField) {
          dateField = new Date().toISOString();
        }
        
        // 構建文章 URL
        const url = `/posts/${fileName.replace('.md', '')}`;
        
        return {
          title: data.title,
          description: data.description,
          date: dateField,
          url,
          category: data.category || data.tags?.[0],
        };
      })
    );
    
    // 根據日期對文章進行排序（從最新到最舊）
    posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // 只返回前 3 篇文章
    const latestPosts = posts.slice(0, 3);
    
    return new Response(JSON.stringify(latestPosts), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch latest posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 