const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the image bottom overlay and text section
const oldHeroRegex = /<!-- 3\. HERO SECTION[\s\S]*?<!-- 4\. HOW IT WORKS/;

const newHeroSection = `<!-- 3. HERO SECTION (Image on Top with Badge, Followed Directly By Headline & CTAs) -->
  <section class="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto">
      
      <!-- Top Image: Doctor with ICU Patient -->
      <div class="rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-xl relative group mb-8 bg-slate-900">
        <img src="hero-doctor-icu.jpg" alt="ধানমন্ডির সেরা হাসপাতালে ICU বেডে ভর্তি ও সেবা" class="w-full h-auto max-h-[440px] object-cover object-center transform group-hover:scale-101 transition duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        
        <!-- Bottom Down of the Image: Replaced with 2nd Image Pill Badge with 'বিশেষ সুবিধা' -->
        <div class="absolute bottom-3.5 sm:bottom-5 left-0 right-0 flex justify-center px-3">
          <div class="inline-flex items-center gap-2 bg-emerald-50/95 backdrop-blur-md border border-emerald-300 px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-emerald-900 shadow-lg">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>নোয়াখালী ও বাইরের জেলা থেকে আগত রোগীদের জন্য বিশেষ সুবিধা</span>
          </div>
        </div>
      </div>

      <!-- Text Section (Directly After the Image) -->
      <div class="text-center space-y-4">

        <!-- Main Headline -->
        <h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight">
          ধানমন্ডির সেরা হাসপাতালে <span class="text-[#D9222A]">ICU-তে ভর্তি করান ৫০% ছাড়ে</span> আমাদের মাধ্যমে!
        </h1>
        
        <!-- Subtitle -->
        <p class="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          সাধারণ হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার অতিরিক্ত খরচে না গিয়ে—আমাদের অনুমোদিত রেফারেন্সে ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে পান প্রায় অর্ধেক খরচে নিশ্চিত বেড। কোনো দালালি নেই, রোগী পৌঁছানোর আগেই বেড প্রস্তুত থাকে।
        </p>

        <!-- Primary Dual CTAs -->
        <div class="pt-3 flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
          <a href="tel:01716788301" class="flex-1 py-3.5 px-5 rounded-xl bg-[#D9222A] hover:bg-red-700 text-white font-black text-base flex items-center justify-center gap-2.5 shadow-md pulse-call transition">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>কল দিন: 01716788301</span>
          </a>
          <a href="https://wa.me/8801716788301?text=Ami%20Dhanmondir%20hospital-e%20ICU%20bed%20borti%20korate%20chai.%2050%20percent%20chare%20amader%20sahajjo%20proyojon." target="_blank" class="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-base flex items-center justify-center gap-2.5 shadow-md pulse-wa transition">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
            <span>হোয়াটসঅ্যাপে বেড বুকিং</span>
          </a>
        </div>

        <!-- 4 Instant Trust Pillars -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#EAE5DC] text-xs text-slate-700 font-bold max-w-2xl mx-auto">
          <div class="flex items-center justify-center gap-1.5">
            <span class="text-emerald-600 font-black">✓</span> <span>০% কোনো দালাল নেই</span>
          </div>
          <div class="flex items-center justify-center gap-1.5">
            <span class="text-emerald-600 font-black">✓</span> <span>৫০% আইসিইউ ছাড়</span>
          </div>
          <div class="flex items-center justify-center gap-1.5">
            <span class="text-emerald-600 font-black">✓</span> <span>লাইভ বেড রেডি</span>
          </div>
          <div class="flex items-center justify-center gap-1.5">
            <span class="text-emerald-600 font-black">✓</span> <span>ধানমন্ডির এ-ক্যাটাগরি</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 4. HOW IT WORKS`;

content = content.replace(oldHeroRegex, newHeroSection);
fs.writeFileSync(filePath, content, 'utf8');

const previewPath = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd\\emergency-care-bd-preview.html';
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully applied user changes: removed 1st image text, placed 2nd image badge with বিশেষ সুবিধা at bottom of image.');
