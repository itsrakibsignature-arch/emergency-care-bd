const fs = require('fs');
const path = require('path');

const dir = 'C:\\\\Users\\\\itsra\\\\.gemini\\\\antigravity\\\\scratch\\\\emergency-care-bd';

['index.html', 'emergency-care-bd-preview.html', 'doctors.html', 'articles.html'].forEach(fn => {
  const fp = path.join(dir, fn);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf8');

  // Remove the subtext under the logo in header:
  // <div class="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1 flex items-center gap-1">...</div>
  const subtextRegex = /<div class="text-\[10px\] sm:text-\[11px\] font-bold text-slate-500 mt-1 flex items-center gap-1">[\s\S]*?<\/div>/g;
  if (subtextRegex.test(content)) {
    content = content.replace(subtextRegex, '');
    console.log(`[${fn}] Removed logo subtext`);
  }

  fs.writeFileSync(fp, content, 'utf8');
});
