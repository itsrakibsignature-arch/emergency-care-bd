const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

let content = fs.readFileSync(indexPath, 'utf8');

// 1. Remove Top Emergency Hotline Bar completely
const topBarRegex = /<!-- 1\. TOP EMERGENCY HOTLINE BAR -->[\s\S]*?<\/header>/;
content = content.replace(topBarRegex, '');

// 2. Clean Navbar: make it sticky top-0, and replace multiple buttons with a single clear hotline button
const oldNavRegex = /<!-- 2\. NAVBAR -->[\s\S]*?<\/nav>/;
const newNav = `<!-- 2. NAVBAR (Clean, Single Direct Action) -->
  <nav class="bg-white border-b border-[#EAE5DC] py-3.5 px-4 sm:px-6 shadow-xs sticky top-0 z-40 backdrop-blur-md bg-white/95">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full border border-slate-200 bg-white overflow-hidden shadow-xs shrink-0 flex items-center justify-center">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain p-0.5" />
        </div>
        <div>
          <div class="text-xl font-black text-[#0D3268] tracking-tight leading-none">
            Emergency <span class="text-[#D9222A]">Care</span> BD
          </div>
          <div class="text-[11px] font-bold text-slate-500 mt-1 flex items-center gap-1">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>ধানমন্ডি ক্রিটিক্যাল কেয়ার নেটওয়ার্ক</span>
          </div>
        </div>
      </a>
      
      <!-- Single Clear Emergency Call Button -->
      <a href="tel:01716788301" class="inline-flex items-center gap-2 bg-[#D9222A] hover:bg-red-700 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition pulse-call">
        <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span class="hidden sm:inline">জরুরি কথা বলুন: 01716-788301</span>
        <span class="sm:hidden">জরুরি কল: 01716-788301</span>
      </a>
    </div>
  </nav>`;

content = content.replace(oldNavRegex, newNav);

// 3. Remove discount tags from cards, and emphasize Live Bed Availability (bolder, larger, reassuring)
const oldServicesRegex = /<!-- 4\. CORE CRITICAL CARE SERVICES[\s\S]*?<!-- 5\. HOW IT WORKS/;
const newServices = `<!-- 4. CORE CRITICAL CARE SERVICES (Focus on Live Bed Availability) -->
  <section class="py-8 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- 1. ICU -->
        <div class="clean-card rounded-2xl p-5.5 shadow-xs flex flex-col justify-between">
          <div>
            <!-- Prominent Bed Status Badge -->
            <div class="mb-3.5">
              <span class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-2xs">
                <span class="flex h-2.5 w-2.5 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>লাইভ আইসিইউ বেড খালি আছে</span>
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-[#0D3268] mb-1.5">ICU (ইনটেনসিভ কেয়ার)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              ভেন্টিলেটর, আর্টারিয়াল লাইন ও সার্বক্ষণিক লাইফ সাপোর্ট। ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে অন-কল স্পেশালিস্ট কেয়ার ও দ্রুত ভর্তি।
            </p>
          </div>
        </div>

        <!-- 2. NICU -->
        <div class="clean-card rounded-2xl p-5.5 shadow-xs flex flex-col justify-between">
          <div>
            <!-- Prominent Bed Status Badge -->
            <div class="mb-3.5">
              <span class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-2xs">
                <span class="flex h-2.5 w-2.5 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>নবজাতক ইনকিউবেটর রেডি</span>
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-[#0D3268] mb-1.5">NICU (নবজাতক আইসিইউ)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              অসুস্থ ও প্রি-ম্যাচিউর শিশুদের জন্য অত্যাধুনিক ইনকিউবেটর, ফটোথেরাপি ও অভিজ্ঞ নিওন্যাটোলজিস্ট কেয়ার।
            </p>
          </div>
        </div>

        <!-- 3. PICU -->
        <div class="clean-card rounded-2xl p-5.5 shadow-xs flex flex-col justify-between">
          <div>
            <!-- Prominent Bed Status Badge -->
            <div class="mb-3.5">
              <span class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-2xs">
                <span class="flex h-2.5 w-2.5 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>পেডিয়াট্রিক কেয়ার সক্রিয়</span>
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-[#0D3268] mb-1.5">PICU (শিশু আইসিইউ)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              শিশুদের তীব্র নিউমোনিয়া, শ্বাসকষ্ট ও জটিল ইনফেকশনে বিশেষায়িত পেডিয়াট্রিক ইনটেনসিভ কেয়ার সাপোর্ট।
            </p>
          </div>
        </div>

        <!-- 4. CCU -->
        <div class="clean-card rounded-2xl p-5.5 shadow-xs flex flex-col justify-between">
          <div>
            <!-- Prominent Bed Status Badge -->
            <div class="mb-3.5">
              <span class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full shadow-2xs">
                <span class="flex h-2.5 w-2.5 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>কার্ডিয়াক ক্যাথ ল্যাব সক্রিয়</span>
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-black text-[#0D3268] mb-1.5">CCU (হার্ট কেয়ার ইউনিট)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              ম্যাসিভ হার্ট অ্যাটাক ও হৃদরোগের জরুরি চিকিৎসা। সার্বক্ষণিক অন-কল কার্ডিওলজিস্ট ও প্রাইমারি পিসিআই প্রস্তুতি।
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. HOW IT WORKS`;

content = content.replace(oldServicesRegex, newServices);

fs.writeFileSync(indexPath, content, 'utf8');
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully applied all psychology-based UX refinements!');
