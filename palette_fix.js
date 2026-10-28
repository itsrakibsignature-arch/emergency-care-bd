const fs = require('fs');

const file = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/index.html';
const previewFile = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/emergency-care-bd-preview.html';

let content = fs.readFileSync(file, 'utf8');

// Exact Furryghor palette adapted to Emergency Care BD Logo:
// Furryghor's secret: Warm Oyster Canvas (#FDFBF7), Pure White Cards (#FFFFFF), Deep Sapphire Navy (#0F2942), Logo Crimson Red (#E61E2A), Muted Warm Slate (#64748B)

// 1. Replace background colors
content = content.replace(/bg-\[#F8FAFC\]/g, 'bg-[#FAF8F5]');
content = content.replace(/bg-\[#F4F7FC\]/g, 'bg-[#FAF8F5]');
content = content.replace(/from-\[#F0F5FF\] via-white to-\[#F8FAFC\]/g, 'from-[#F5F1EA] via-[#FAF8F5] to-white');
content = content.replace(/from-\[#F0F5FF\] via-slate-50 to-\[#FFF5F5\]/g, 'from-[#FAF8F5] via-white to-[#FDF4F4]');

// 2. Enhance Primary Navy & Red accents
content = content.replace(/#0A3D91/g, '#0D3268');
content = content.replace(/#E02424/g, '#D9222A');

// 3. Make borders softer warm gray instead of harsh blue/slate
content = content.replace(/border-slate-200/g, 'border-[#EAE5DC]');
content = content.replace(/border-blue-200/g, 'border-[#D9E2EC]');
content = content.replace(/border-red-200/g, 'border-[#F8D7D9]');
content = content.replace(/bg-blue-50/g, 'bg-[#EDF2F7]');
content = content.replace(/bg-red-50/g, 'bg-[#FDF2F2]');

fs.writeFileSync(file, content, 'utf8');
fs.writeFileSync(previewFile, content, 'utf8');
console.log('FURRYGHOR_COLOR_HARMONY_APPLIED');
