import { join } from 'path';
import { readdir, mkdir } from 'fs/promises';
import sharp from 'sharp';

// 主要圖片目錄
const PUBLIC_DIR = join(process.cwd(), 'public');
const IMAGES_DIR = join(PUBLIC_DIR, 'images');

// 創建必要的目錄
async function createDirs() {
  try {
    await mkdir(join(PUBLIC_DIR, 'optimized'), { recursive: true });
  } catch (error) {
    console.error('建立優化目錄時出錯:', error);
  }
}

// 處理單張圖片
async function processImage(imagePath, outputDir) {
  const filename = imagePath.split('/').pop();
  const name = filename.substring(0, filename.lastIndexOf('.')) || filename;
  
  try {
    // 為各種尺寸創建 WebP 格式
    await sharp(imagePath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside' 
      })
      .webp({ quality: 80 })
      .toFile(join(outputDir, `${name}-1920.webp`));
      
    await sharp(imagePath)
      .resize(1280, null, { 
        withoutEnlargement: true,
        fit: 'inside' 
      })
      .webp({ quality: 80 })
      .toFile(join(outputDir, `${name}-1280.webp`));
      
    await sharp(imagePath)
      .resize(640, null, { 
        withoutEnlargement: true,
        fit: 'inside' 
      })
      .webp({ quality: 75 })
      .toFile(join(outputDir, `${name}-640.webp`));
      
    // 為手機設備優化的較小尺寸
    await sharp(imagePath)
      .resize(320, null, { 
        withoutEnlargement: true,
        fit: 'inside' 
      })
      .webp({ quality: 70 })
      .toFile(join(outputDir, `${name}-320.webp`));
      
    console.log(`優化完成: ${filename}`);
  } catch (error) {
    console.error(`處理圖片 ${filename} 時出錯:`, error);
  }
}

// 處理整個目錄
async function processDirectory(directory, outputDir) {
  try {
    const files = await readdir(directory, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = join(directory, file.name);
      
      if (file.isDirectory()) {
        // 遞歸處理子目錄
        const nestedOutputDir = join(outputDir, file.name);
        await mkdir(nestedOutputDir, { recursive: true });
        await processDirectory(filePath, nestedOutputDir);
      } else if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        // 處理圖片文件
        await processImage(filePath, outputDir);
      }
    }
  } catch (error) {
    console.error(`處理目錄 ${directory} 時出錯:`, error);
  }
}

// 主函數
async function main() {
  try {
    await createDirs();
    await processDirectory(IMAGES_DIR, join(PUBLIC_DIR, 'optimized'));
    console.log('所有圖片優化完成！');
  } catch (error) {
    console.error('圖片優化過程中出錯:', error);
  }
}

main(); 