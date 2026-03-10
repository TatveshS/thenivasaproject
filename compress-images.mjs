// compress-images.mjs
// Run with: node compress-images.mjs
// Compresses all images in the /public directory in-place using sharp.
// JPG/JPEG -> re-encoded at quality 75
// PNG -> converted to JPEG at quality 80 (removes alpha transparency, saves huge space)

import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "public");

const FOLDERS = ["goa_and_beach", "room", "community", "testimonials"];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function formatSize(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const dir = dirname(filePath);
  const base = basename(filePath, extname(filePath));

  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  const tmpPath = join(dir, `__tmp__${base}.jpg`);

  try {
    if (ext === ".jpg" || ext === ".jpeg") {
      await sharp(filePath)
        .rotate()
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tmpPath);

      const newStat = await stat(tmpPath);
      const saving = originalSize - newStat.size;

      if (saving > 0) {
        await unlink(filePath);
        await rename(tmpPath, filePath);
        console.log(
          `✅ ${basename(filePath)}: ${formatSize(originalSize)} → ${formatSize(newStat.size)} (saved ${formatSize(saving)})`
        );
      } else {
        await unlink(tmpPath);
        console.log(`⏭️  ${basename(filePath)}: already optimal, skipped`);
      }
    } else if (ext === ".png") {
      // Convert PNG to JPEG - saves massive space (PNGs are 6-8MB!)
      const newFileName = join(dir, `${base}.jpg`);
      await sharp(filePath)
        .rotate()
        .flatten({ background: { r: 255, g: 255, b: 255 } }) // handle transparency
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tmpPath);

      const newStat = await stat(tmpPath);
      const saving = originalSize - newStat.size;

      await rename(tmpPath, newFileName);
      // Remove original PNG
      await unlink(filePath);
      console.log(
        `🔄 ${basename(filePath)} → ${base}.jpg: ${formatSize(originalSize)} → ${formatSize(newStat.size)} (saved ${formatSize(saving)})`
      );
    } else {
      console.log(`⏭️  ${basename(filePath)}: not an image, skipped`);
    }
  } catch (err) {
    // Clean up tmp file if it exists
    try {
      await unlink(tmpPath);
    } catch {}
    console.error(`❌ Error processing ${basename(filePath)}:`, err.message);
  }
}

async function main() {
  console.log("🚀 Starting image compression...\n");

  let allFiles = [];
  for (const folder of FOLDERS) {
    const folderPath = join(PUBLIC_DIR, folder);
    try {
      const files = await getFiles(folderPath);
      allFiles.push(...files.filter(f => [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())));
    } catch {
      console.warn(`⚠️  Folder not found or empty: ${folder}`);
    }
  }

  console.log(`Found ${allFiles.length} images to process.\n`);

  for (const file of allFiles) {
    await compressImage(file);
  }

  console.log("\n✨ Compression complete!");
}

main().catch(console.error);
