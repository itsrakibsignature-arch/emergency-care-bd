const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

let content = fs.readFileSync(indexPath, 'utf8');

// 1. Replace "আমাদের সার্ভিসসমূহ:" with "আমাদের জরুরি সেবা সমূহ:"
content = content.replace(/আমাদের সার্ভিসসমূহ:/g, 'আমাদের জরুরি সেবা সমূহ:');

// 2. Extract the services section and how-it-works section
// Currently:
// Hero ends -> Section 4 (HOW IT WORKS) -> Section 5 (CORE CRITICAL CARE SERVICES)
// We need:
// Hero ends -> Section 4 (CORE CRITICAL CARE SERVICES - without CTAs) -> Section 5 (HOW IT WORKS)

const servicesSectionClean = `  <!-- 4. CORE CRITICAL CARE SERVICES (Clean Cards without CTA Clutter) -->
  <section class="py-10 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="mb-8">
        <span class="text-xs font-black text-[#0D3268] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">জরুরি সেবা ও ডিসকাউন্ট</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          ক্রিটিক্যাল কেয়ার বেড সার্ভিস (ধানমন্ডি)
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
          * সাধারণ হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার বদলে অর্ধেক খরচে চিকিৎসা নিন (ডাক্তার ফি ও ঔষধপত্র ব্যতিত)
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- 1. ICU -->
        <div class="clean-card rounded-2xl p-5 shadow-xs">
          <div class="flex items-center justify-between mb-3">
            <span class="bg-[#D9222A] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
              ৫০% পর্যন্ত ছাড়
            </span>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> বেড খালি
            </span>
          </div>
          <h3 class="text-lg font-black text-[#0D3268] mb-1">ICU (ইনটেনসিভ কেয়ার)</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            ভেন্টিলেটর, আর্টারিয়াল লাইন ও সার্বক্ষণিক লাইফ সাপোর্ট। ধানমন্ডির স্বনামধন্য হাসপাতালে অর্ধেক খরচে তাৎক্ষণিক ভর্তি।
          </p>
        </div>

        <!-- 2. NICU -->
        <div class="clean-card rounded-2xl p-5 shadow-xs">
          <div class="flex items-center justify-between mb-3">
            <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
              ৪০% পর্যন্ত ছাড়
            </span>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> ইনকিউবেটর রেডি
            </span>
          </div>
          <h3 class="text-lg font-black text-[#0D3268] mb-1">NICU (নবজাতক আইসিইউ)</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            অসুস্থ ও প্রি-ম্যাচিউর শিশুদের জন্য অত্যাধুনিক ইনকিউবেটর, ফটোথেরাপি ও অভিজ্ঞ নিওন্যাটোলজিস্ট কেয়ার।
          </p>
        </div>

        <!-- 3. PICU -->
        <div class="clean-card rounded-2xl p-5 shadow-xs">
          <div class="flex items-center justify-between mb-3">
            <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
              ৪০% পর্যন্ত ছাড়
            </span>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> পেডিয়াট্রিক রেডি
            </span>
          </div>
          <h3 class="text-lg font-black text-[#0D3268] mb-1">PICU (শিশু আইসিইউ)</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            শিশুদের তীব্র নিউমোনিয়া, শ্বাসকষ্ট ও জটিল ইনফেকশনে বিশেষায়িত পেডিয়াট্রিক ইনটেনসিভ কেয়ার সাপোর্ট।
          </p>
        </div>

        <!-- 4. CCU -->
        <div class="clean-card rounded-2xl p-5 shadow-xs">
          <div class="flex items-center justify-between mb-3">
            <span class="bg-amber-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
              জরুরি কার্ডিয়াক কেয়ার
            </span>
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> ক্যাথ ল্যাব সক্রিয়
            </span>
          </div>
          <h3 class="text-lg font-black text-[#0D3268] mb-1">CCU (হার্ট কেয়ার ইউনিট)</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            ম্যাসিভ হার্ট অ্যাটাক ও হৃদরোগের জরুরি চিকিৎসা। সার্বক্ষণিক অন-কল কার্ডিওলজিস্ট ও প্রাইমারি পিসিআই প্রস্তুতি।
          </p>
        </div>

      </div>
    </div>
  </section>`;

const howItWorksSection = `  <!-- 5. HOW IT WORKS (Patient Journey from District to Dhanmondi) -->
  <section class="py-12 px-4 sm:px-6 bg-white border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-black text-[#D9222A] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">ঝামেলামুক্ত ৩টি সহজ ধাপ</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          নোয়াখালী থেকে আসার সময় যেভাবে বেড নিশ্চিত করবেন
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">
          ঢাকার রাস্তায় অ্যাম্বুলেন্স নিয়ে এক হাসপাতাল থেকে অন্য হাসপাতালে ঘোরার দিন শেষ
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        <!-- Step 1 -->
        <div class="clean-card p-6 rounded-2xl relative">
          <div class="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#D9222A] font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ১
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">রওনা দেওয়ার মুহূর্তেই কল করুন</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            অ্যাম্বুলেন্সে ওঠার সাথে সাথে আমাদের হটলাইনে জানান এবং রোগীর বর্তমান প্রেসক্রিপশন ও ডাক্তারের রেফারেন্স হোয়াটসঅ্যাপে পাঠান।
          </p>
          <div class="text-[11px] font-bold text-emerald-700 bg-emerald-50 py-1 px-2.5 rounded-lg inline-block">
            ✓ তাৎক্ষণিক বিনামূল্যে ট্রায়াজ পরামর্শ
          </div>
        </div>

        <!-- Step 2 -->
        <div class="clean-card p-6 rounded-2xl relative">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0D3268] font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ২
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">ধানমন্ডিতে উপযুক্ত বেড বুকিং</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            আপনার রোগীর অবস্থা অনুযায়ী ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে ভেন্টিলেটর বা বেড লক করে রাখা হয়, যাতে পৌঁছামাত্র চিকিৎসা শুরু হয়।
          </p>
          <div class="text-[11px] font-bold text-blue-700 bg-blue-50 py-1 px-2.5 rounded-lg inline-block">
            ✓ রোগী আসার আগেই বেড রেডি
          </div>
        </div>

        <!-- Step 3 -->
        <div class="clean-card p-6 rounded-2xl relative">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ৩
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">অর্ধেক খরচে সরাসরি ভর্তি</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            কোনো দালাল ছাড়া আমাদের হাসপাতাল প্রতিনিধি আপনাকে সরাসরি রিসিভ করবে এবং স্পেশাল কর্পোরেট রেটে (৫০% পর্যন্ত ছাড়ে) ভর্তি নিশ্চিত করবে।
          </p>
          <div class="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 py-1 px-2.5 rounded-lg inline-block">
            ✓ বিলের সময় সরাসরি ছাড় নিশ্চিত
          </div>
        </div>

      </div>
    </div>
  </section>`;

// Replace from `<!-- 4. HOW IT WORKS` to `<!-- 6. SURGERY CALLOUT`
const middleRegex = /<!-- 4\. HOW IT WORKS[\s\S]*?<!-- 6\. SURGERY CALLOUT/;
const newMiddle = servicesSectionClean + '\n\n' + howItWorksSection + '\n\n  <!-- 6. SURGERY CALLOUT';

content = content.replace(middleRegex, newMiddle);

fs.writeFileSync(indexPath, content, 'utf8');
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully reordered services right after emergency services somuho, and removed all card/header CTAs!');
