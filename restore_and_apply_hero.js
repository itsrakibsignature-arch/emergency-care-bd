const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

let content = fs.readFileSync(indexPath, 'utf8');

const heroSectionComplete = `  <!-- 2. HERO SECTION (Content Above The Fold - Optimized for Mobile Triage) -->
  <section class="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto text-center space-y-4">

      <!-- Main High-Trust Headline (No em dash) -->
      <h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight max-w-3xl mx-auto">
        ঢাকায় জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা <br class="hidden sm:inline" />
        <span class="text-[#D9222A]">হাসপাতালে রোগী পৌঁছানোর আগেই বেড বুকিং করুন</span>
      </h1>
      
      <!-- Subtitle with Vetted Transparency (No em dash) -->
      <p class="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
        বাইরের জেলা থেকে ঢাকামুখী মুমূর্ষু রোগীদের জন্য ধানমন্ডির উন্নতমানের হাসপাতালে নিশ্চিত ভেন্টিলেটর সাপোর্ট। আমাদের মাধ্যমে ভেন্টিলেটর বেড বুকিং করুন অন্যান্য প্রাইভেট হাসপাতাল থেকে ৪০-৫০% কম খরচে।
      </p>

      <!-- Primary Emergency CTAs Above The Fold -->
      <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <a href="tel:01716788301" class="flex-1 py-3.5 px-5 rounded-xl bg-[#D9222A] hover:bg-red-700 text-white font-black text-base flex items-center justify-center gap-2 shadow-md pulse-call transition">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>কল দিন: 01716788301</span>
        </a>
        <a href="https://wa.me/8801716788301?text=জরুরি%20আইসিইউ/ভেন্টিলেটর%20প্রয়োজন।%20রোগীর%20বয়স:%20[],%20সমস্যা:%20[],%20জেলা:%20[]" target="_blank" class="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-base flex items-center justify-center gap-2 shadow-md pulse-wa transition">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span>হোয়াটসঅ্যাপে বেড বুকিং</span>
        </a>
      </div>

      <!-- Zero-Advance bKash Scam Protection Pill (No em dash) -->
      <div class="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-lg">
        <span class="text-amber-600 font-black">★</span>
        <span>কোনো অগ্রিম বিকাশ চার্জ নেই, সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ</span>
      </div>

      <!-- Hero Supporting Facility Image (With 2nd image updated text) -->
      <div class="pt-2">
        <div class="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-lg relative group bg-slate-900 max-h-[300px] sm:max-h-[360px]">
          <img src="hero-doctor-icu.jpg" alt="ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে জরুরি আইসিইউ মনিটরিং" class="w-full h-full object-cover object-center max-h-[300px] sm:max-h-[360px]" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] sm:text-xs">
            <span class="font-bold flex items-center gap-1.5 drop-shadow">
              <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
              ঢাকা, ধানমন্ডিতে জরুরি ভেন্টিলেটর সহায়তায় আমরা আছি আপনার পাশে
            </span>
            <span class="bg-[#D9222A] text-white px-2.5 py-0.5 rounded-full font-black text-[10px] hidden sm:inline-block">
              ২৪/৭ লাইভ
            </span>
          </div>
        </div>
      </div>

      <!-- Quick Service Anchor Tags -->
      <div class="pt-4 border-t border-[#EAE5DC] max-w-2xl mx-auto">
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span class="font-bold text-slate-700">আমাদের জরুরি সেবা সমূহ:</span>
          <a href="#icu-card" class="font-black bg-red-50 text-[#D9222A] border border-red-200 px-3 py-1 rounded-xl shadow-2xs hover:bg-red-100 transition">ICU</a>
          <a href="#nicu-card" class="font-black bg-blue-50 text-[#0D3268] border border-blue-200 px-3 py-1 rounded-xl shadow-2xs hover:bg-blue-100 transition">NICU</a>
          <a href="#picu-card" class="font-black bg-blue-50 text-[#0D3268] border border-blue-200 px-3 py-1 rounded-xl shadow-2xs hover:bg-blue-100 transition">PICU</a>
          <a href="#ccu-card" class="font-black bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-xl shadow-2xs hover:bg-amber-100 transition">CCU</a>
        </div>
      </div>

    </div>
  </section>`;

// Replace from `<!-- 2. HERO SECTION` to `<!-- 3. CORE CRITICAL CARE CARDS`
const heroRegex = /<!-- 2\. HERO SECTION[\s\S]*?<!-- 3\. CORE CRITICAL CARE CARDS/;
content = content.replace(heroRegex, heroSectionComplete + '\n\n  <!-- 3. CORE CRITICAL CARE CARDS');

fs.writeFileSync(indexPath, content, 'utf8');
fs.writeFileSync(previewPath, content, 'utf8');

console.log('Successfully restored and updated hero section perfectly.');
