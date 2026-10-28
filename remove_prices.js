const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

let content = fs.readFileSync(indexPath, 'utf8');

// 1. Remove the price box from ICU Card
content = content.replace(
  /<div class="bg-slate-50 p-2\.5 rounded-xl border border-slate-200 mb-3 text-\[11px\] font-bold text-slate-700">\s*<div class="text-emerald-700 font-extrabold">✓ নির্ধারিত বেড ভাড়া: ৳৮,০০০–৳১২,০০০<\/div>\s*<div class="text-slate-400 text-\[10px\] font-medium">\* সাধারণ হাসপাতালে ৩০,০০০\+ টাকার বদলে সাশ্রয়ী রেট<\/div>\s*<\/div>/g,
  ''
);

// 2. Remove the inner gray box from NICU Card
content = content.replace(
  /<div class="bg-slate-50 p-2\.5 rounded-xl border border-slate-200 mb-3 text-\[11px\] font-bold text-slate-700">\s*<div class="text-emerald-700 font-extrabold">✓ অনুমোদিত প্যাকেজে বিশেষ ছাড়<\/div>\s*<div class="text-slate-400 text-\[10px\] font-medium">\* শিশু বিশেষজ্ঞের সার্বক্ষণিক তত্ত্বাবধান<\/div>\s*<\/div>/g,
  ''
);

// 3. Remove the inner gray box from PICU Card
content = content.replace(
  /<div class="bg-slate-50 p-2\.5 rounded-xl border border-slate-200 mb-3 text-\[11px\] font-bold text-slate-700">\s*<div class="text-emerald-700 font-extrabold">✓ শিশু ক্রিটিক্যাল কেয়ার টিম প্রস্তুত<\/div>\s*<div class="text-slate-400 text-\[10px\] font-medium">\* কোনো প্রকার লুকানো চার্জ ছাড়া সরাসরি ভর্তি<\/div>\s*<\/div>/g,
  ''
);

// 4. Remove the inner gray box from CCU Card
content = content.replace(
  /<div class="bg-slate-50 p-2\.5 rounded-xl border border-slate-200 mb-3 text-\[11px\] font-bold text-slate-700">\s*<div class="text-emerald-700 font-extrabold">✓ প্রাইমারি পিসিআই ও ইমার্জেন্সি স্টেন্ট<\/div>\s*<div class="text-slate-400 text-\[10px\] font-medium">\* সিনিয়র ইন্টারভেনশনাল কার্ডিওলজিস্ট অন-কল<\/div>\s*<\/div>/g,
  ''
);

// 5. Update FAQ #4 question & answer to avoid mentioning 30,000+ taka price
content = content.replace(
  /৪\. ঢাকার সাধারণ হাসপাতালে ৩০,০০০\+ টাকার বদলে এত সাশ্রয়ী কীভাবে সম্ভব\?/g,
  '৪. হাসপাতালের বেড ভাড়া ও অন্যান্য বিষয়ে বিস্তারিত কীভাবে জানতে পারবো?'
);
content = content.replace(
  /আমরা ধানমন্ডির এ-ক্যাটাগরি হাসপাতালের প্রাতিষ্ঠানিক রেফারেল নেটওয়ার্ক হিসেবে কাজ করি। আমাদের মাধ্যমে রোগী ভর্তি হলে সরাসরি মূল বেড চার্জের ওপর বিশেষ কর্পোরেট সাশ্রয় কার্যকর হয়। \(ডাক্তার ফি ও প্রেসক্রিপশন ঔষধপত্র ব্যতিত\)।/g,
  'আমাদের হটলাইনে (01716788301) কল দিলে বা হোয়াটসঅ্যাপে রোগীর প্রেসক্রিপশন পাঠালে আমাদের অন-কল টিম রোগীর প্রয়োজন অনুযায়ী বেড ও খরচের সম্পূর্ণ বিবরণ তাৎক্ষণিক জানিয়ে দেবে।'
);

// 6. Ensure card description has mb-4 for clean spacing
content = content.replace(/mb-3">\s*জার্মান ড্রাগার/g, 'mb-4">\n              জার্মান ড্রাগার');
content = content.replace(/mb-3">\s*অকালজাত ও কম ওজনের/g, 'mb-4">\n              অকালজাত ও কম ওজনের');
content = content.replace(/mb-3">\s*শিশুদের তীব্র নিউমোনিয়া/g, 'mb-4">\n              শিশুদের তীব্র নিউমোনিয়া');
content = content.replace(/mb-3">\s*ম্যাসিভ হার্ট অ্যাটাকের/g, 'mb-4">\n              ম্যাসিভ হার্ট অ্যাটাকের');

fs.writeFileSync(indexPath, content, 'utf8');
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully removed all price mentions and pricing boxes from the website.');
