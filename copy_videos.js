const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const targetDir = path.join(rootDir, 'public', 'videos');

// Clear existing files in targetDir
if (fs.existsSync(targetDir)) {
  fs.readdirSync(targetDir).forEach(f => {
    fs.unlinkSync(path.join(targetDir, f));
  });
} else {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Unique list of video files (excluding duplicate HH.mp4)
const uniqueVideoFiles = [
  '1video nivi palar.mp4',
  'WhatsApp Video 2026-09-23 at 5.54.28 PM.mp4',
  'WhatsApp Video 2026-09-23 at 5.54.39 PM.mp4',
  'WhatsApp Video 2026-09-23 at 5.54.43 PM.mp4',
  'WhatsApp Video 2026-09-23 at 5.54.47 PM.mp4',
  'WhatsApp Video 2026-09-23 at 5.54.52 PM.mp4',
  'WhatsApp Video 2026-09-23 at 5.55.00 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.28 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.33 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.40 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.47 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.51 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.54 PM.mp4',
  'WhatsApp Video 2026-09-23 at 6.03.59 PM.mp4'
];

console.log(`Copying ${uniqueVideoFiles.length} unique video files...`);

uniqueVideoFiles.forEach((file, index) => {
  const destName = `reel_${index + 1}.mp4`;
  const srcPath = path.join(rootDir, file);
  const destPath = path.join(targetDir, destName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: [${index + 1}] "${file}" -> "${destName}"`);
  } else {
    console.warn(`File not found: ${file}`);
  }
});

console.log('Successfully copied all unique videos!');
