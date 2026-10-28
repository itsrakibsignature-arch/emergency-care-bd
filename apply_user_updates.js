const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

let content = fs.readFileSync(indexPath, 'utf8');

// 1. Title without em dash
content = content.replace(
  /<title>Emergency Care BD \| জরুরি আইসিইউ ও ভেন্টিলেটর বেড সমন্বয় — ধানমন্ডি, ঢাকা<\/title>/g,
  '<title>Emergency Care BD | ঢাকায় জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা</title>'
);

// 2. Remove first image section (Live Dynamic Emergency Status Counter)
content = content.replace(
  /\s*<!-- Live Dynamic Emergency Status Counter -->\s*<div class="inline-flex items-center gap-2 bg-emerald-50[\s\S]*?<\/div>\s*<\/div>/,
  ''
);

// 3. New Headline without em dash
content = content.replace(
  /<h1 class="text-2xl sm:text-4xl lg:text-\[40px\] font-black text-slate-900 leading-tight max-w-3xl mx-auto">\s*জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা —\s*<span class="text-\[#D9222A\]">রোগী পৌঁছানোর আগেই বেড প্রস্তুত<\/span>\s*<\/h1>/,
  `<h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight max-w-3xl mx-auto">
        ঢাকায় জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা <br class="hidden sm:inline" />
        <span class="text-[#D9222A]">হাসপাতালে রোগী পৌঁছানোর আগেই বেড বুকিং করুন</span>
      </h1>`
);

// 4. Edit Subheadline
content = content.replace(
  /<p class="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">\s*বাইরের জেলা থেকে ঢাকামুখী মুমূর্ষু রোগীদের জন্য ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে নিশ্চিত ভেন্টিলেটর সাপোর্ট। কোনো মধ্যস্বত্বভোগী বা দালাল নেই—হাসপাতালের অনুমোদিত কর্পোরেট প্যাকেজে প্রতিদিনের বেড ভাড়ায় বিশেষ সাশ্রয়।\s*<\/p>/,
  `<p class="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
        বাইরের জেলা থেকে ঢাকামুখী মুমূর্ষু রোগীদের জন্য ধানমন্ডির উন্নতমানের হাসপাতালে নিশ্চিত ভেন্টিলেটর সাপোর্ট। আমাদের মাধ্যমে ভেন্টিলেটর বেড বুকিং করুন অন্যান্য প্রাইভেট হাসপাতাল থেকে ৪০-৫০% কম খরচে।
      </p>`
);

// 5. Remove em dash from Zero-Advance bKash Scam Protection Pill
content = content.replace(
  /কোনো অগ্রিম বিকাশ চার্জ নেই — সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ/g,
  'কোনো অগ্রিম বিকাশ চার্জ নেই, সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ'
);

// 6. 2nd image text edit: "Dhaka, Dhanmondhite জরুরি ভেন্টিলেটর Sohoyatay amra aci apnar pashe"
content = content.replace(
  /ধানমন্ডি মেডিকেল হাব: সার্বক্ষণিক স্পেশালিস্ট ও ড্রাগার ভেন্টিলেটর/g,
  'ঢাকা, ধানমন্ডিতে জরুরি ভেন্টিলেটর সহায়তায় আমরা আছি আপনার পাশে'
);

// 7. Section 3 subtitle replace:
// "রোগী পৌঁছানোর আগেই বেড লক করা হয় — কোনো মধ্যস্বত্বভোগী বা দালাল নেই" -> "Rogi Dhakay powchanur agei bed booking korun amader maddome"
content = content.replace(
  /রোগী পৌঁছানোর আগেই বেড লক করা হয় — কোনো মধ্যস্বত্বভোগী বা দালাল নেই/g,
  'রোগী ঢাকায় পৌঁছানোর আগেই বেড বুকিং করুন আমাদের মাধ্যমে'
);

// 8. "২টি বেড প্রস্তুত replace all by ''Bed khali Ace''"
// In all 4 cards:
content = content.replace(/২টি বেড প্রস্তুত/g, 'বেড খালি আছে');
content = content.replace(/২টি ইনকিউবেটর রেডি/g, 'বেড খালি আছে');
content = content.replace(/১টি পেডিয়াট্রিক বেড/g, 'বেড খালি আছে');
content = content.replace(/ক্যাথ ল্যাব সক্রিয়/g, 'বেড খালি আছে');

// 9. Remove em dash from Section 4 ambulance banner
content = content.replace(
  /অ্যাম্বুলেন্স হাইওয়েতে থাকতেই জরুরি সমন্বয় — ঢাকা প্রবেশের আগেই বেড লক/g,
  'অ্যাম্বুলেন্স হাইওয়েতে থাকতেই জরুরি সমন্বয়: ঢাকা প্রবেশের আগেই বেড লক'
);

// 10. Remove em dash from Section 5 (How it works subtitle)
content = content.replace(
  /কোনো অগ্রিম পেমেন্ট বা বিকাশ চার্জ নেই — সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ/g,
  'কোনো অগ্রিম পেমেন্ট বা বিকাশ চার্জ নেই, সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ'
);

// Global sanity check: replace any remaining em dash '—' with a comma or colon
content = content.replace(/ — /g, ', ');
content = content.replace(/—/g, ', ');

fs.writeFileSync(indexPath, content, 'utf8');
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully applied all user updates and removed all em dashes!');
