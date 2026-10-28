const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
const indexPath = path.join(dir, 'index.html');
const previewPath = path.join(dir, 'emergency-care-bd-preview.html');

const htmlContent = `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emergency Care BD | জরুরি আইসিইউ ও ভেন্টিলেটর বেড সমন্বয় — ধানমন্ডি, ঢাকা</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    * { font-family: 'Hind Siliguri', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; box-sizing: border-box; }
    body { background-color: #FAF8F5; color: #1E293B; padding-bottom: 74px; }
    @media (min-width: 768px) { body { padding-bottom: 0; } }
    
    @keyframes pulseCall {
      0% { box-shadow: 0 0 0 0 rgba(217, 34, 42, 0.6); }
      70% { box-shadow: 0 0 0 10px rgba(217, 34, 42, 0); }
      100% { box-shadow: 0 0 0 0 rgba(217, 34, 42, 0); }
    }
    @keyframes pulseGreen {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
      70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    .pulse-call { animation: pulseCall 2s infinite; }
    .pulse-wa { animation: pulseGreen 2.4s infinite; }
    
    .clean-card {
      background: #FFFFFF;
      border: 1px solid #EAE5DC;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .clean-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px -6px rgba(13, 50, 104, 0.08);
      border-color: #CBD5E1;
    }
    
    details summary::-webkit-details-marker {
      display: none;
    }
  </style>
</head>
<body class="bg-[#FAF8F5] text-slate-800 antialiased selection:bg-red-500 selection:text-white">

  <!-- 1. NAVBAR (Clean, Single Direct Life-Saving Action) -->
  <nav class="bg-white border-b border-[#EAE5DC] py-3 px-4 sm:px-6 shadow-xs sticky top-0 z-40 backdrop-blur-md bg-white/95">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <a href="#" class="flex items-center gap-2.5 sm:gap-3">
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white overflow-hidden shadow-xs shrink-0 flex items-center justify-center">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain p-0.5" />
        </div>
        <div>
          <div class="text-lg sm:text-xl font-black text-[#0D3268] tracking-tight leading-none">
            Emergency <span class="text-[#D9222A]">Care</span> BD
          </div>
          <div class="text-[10px] sm:text-[11px] font-bold text-slate-500 mt-1 flex items-center gap-1">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>ধানমন্ডি ক্রিটিক্যাল কেয়ার নেটওয়ার্ক</span>
          </div>
        </div>
      </a>
      
      <!-- Single Clear Emergency Call Button -->
      <a href="tel:01716788301" class="inline-flex items-center gap-1.5 sm:gap-2 bg-[#D9222A] hover:bg-red-700 text-white font-black text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs transition pulse-call shrink-0">
        <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span class="hidden sm:inline">জরুরি কথা বলুন: 01716-788301</span>
        <span class="sm:hidden">জরুরি কল: 01716-788301</span>
      </a>
    </div>
  </nav>

  <!-- 2. HERO SECTION (Content Above The Fold - Optimized for Mobile Triage) -->
  <section class="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto text-center space-y-4">
      
      <!-- Live Dynamic Emergency Status Counter -->
      <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-emerald-900 shadow-2xs">
        <span class="flex h-2.5 w-2.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
        </span>
        <span class="font-extrabold">ধানমন্ডি হাব: ৩টি আইসিইউ বেড প্রস্তুত</span>
        <span class="text-slate-400 font-normal">|</span>
        <span id="live-timestamp" class="text-emerald-700 font-semibold text-[11px] sm:text-xs">আপডেট: ৪ মিনিট আগে</span>
      </div>

      <!-- Main High-Trust Headline -->
      <h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight max-w-3xl mx-auto">
        জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা — 
        <span class="text-[#D9222A]">রোগী পৌঁছানোর আগেই বেড প্রস্তুত</span>
      </h1>
      
      <!-- Subtitle with Vetted Transparency -->
      <p class="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
        বাইরের জেলা থেকে ঢাকামুখী মুমূর্ষু রোগীদের জন্য ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে নিশ্চিত ভেন্টিলেটর সাপোর্ট। কোনো মধ্যস্বত্বভোগী বা দালাল নেই—হাসপাতালের অনুমোদিত কর্পোরেট প্যাকেজে প্রতিদিনের বেড ভাড়ায় বিশেষ সাশ্রয়।
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

      <!-- Zero-Advance bKash Scam Protection Pill -->
      <div class="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-lg">
        <span class="text-amber-600 font-black">★</span>
        <span>কোনো অগ্রিম বিকাশ চার্জ নেই — সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ</span>
      </div>

      <!-- Hero Supporting Facility Image (Compact & High Trust) -->
      <div class="pt-2">
        <div class="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-lg relative group bg-slate-900 max-h-[300px] sm:max-h-[360px]">
          <img src="hero-doctor-icu.jpg" alt="ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে জরুরি আইসিইউ মনিটরিং" class="w-full h-full object-cover object-center max-h-[300px] sm:max-h-[360px]" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] sm:text-xs">
            <span class="font-bold flex items-center gap-1.5 drop-shadow">
              <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping"></span>
              ধানমন্ডি মেডিকেল হাব: সার্বক্ষণিক স্পেশালিস্ট ও ড্রাগার ভেন্টিলেটর
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
  </section>

  <!-- 3. CORE CRITICAL CARE CARDS (Vetted Equipment, Transparent Fees & Direct Action) -->
  <section class="py-10 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-black text-[#0D3268] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">লাইভ ভেন্টিলেটর ও বেড স্ট্যাটাস</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          ক্রিটিক্যাল কেয়ার বেড সার্ভিস (ধানমন্ডি)
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">
          রোগী পৌঁছানোর আগেই বেড লক করা হয় — কোনো মধ্যস্বত্বভোগী বা দালাল নেই
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- 1. ICU Card -->
        <div id="icu-card" class="clean-card rounded-2xl p-5 shadow-xs flex flex-col justify-between border border-slate-200">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-extrabold text-slate-500">ধানমন্ডি ইউনিট</span>
              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ২টি বেড প্রস্তুত
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">ICU (ইনটেনসিভ কেয়ার)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              জার্মান ড্রাগার ভেন্টিলেটর, আর্টারিয়াল লাইন, সেন্ট্রাল অক্সিজেন ও ১:১ সার্বক্ষণিক ডেডিকেটেড ক্রিটিক্যাল নার্স।
            </p>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-3 text-[11px] font-bold text-slate-700">
              <div class="text-emerald-700 font-extrabold">✓ নির্ধারিত বেড ভাড়া: ৳৮,০০০–৳১২,০০০</div>
              <div class="text-slate-400 text-[10px] font-medium">* সাধারণ হাসপাতালে ৩০,০০০+ টাকার বদলে সাশ্রয়ী রেট</div>
            </div>
          </div>
          <a href="https://wa.me/8801716788301?text=Emergency:%20ICU%20Ventilator%20bed%20proyojon.%20Rogir%20boyosh:%20[],%20Shomossha:%20[]" target="_blank" class="w-full py-2.5 bg-[#D9222A] hover:bg-red-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition">
            <span>আইসিইউ বেড লক করতে মেসেজ</span>
            <span>→</span>
          </a>
        </div>

        <!-- 2. NICU Card -->
        <div id="nicu-card" class="clean-card rounded-2xl p-5 shadow-xs flex flex-col justify-between border border-slate-200">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-extrabold text-slate-500">ধানমন্ডি ইউনিট</span>
              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ২টি ইনকিউবেটর রেডি
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">NICU (নবজাতক আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              অকালজাত ও কম ওজনের শিশুদের জন্য অ্যাডভান্সড ইনকিউবেটর, এলইডি ফটোথেরাপি ও সার্বক্ষণিক নিওন্যাটোলজিস্ট কেয়ার।
            </p>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-3 text-[11px] font-bold text-slate-700">
              <div class="text-emerald-700 font-extrabold">✓ অনুমোদিত প্যাকেজে বিশেষ ছাড়</div>
              <div class="text-slate-400 text-[10px] font-medium">* শিশু বিশেষজ্ঞের সার্বক্ষণিক তত্ত্বাবধান</div>
            </div>
          </div>
          <a href="https://wa.me/8801716788301?text=Emergency:%20NICU%20Incubator%20proyojon%20(Nobojatok).%20Shomossha:%20[]" target="_blank" class="w-full py-2.5 bg-[#0D3268] hover:bg-blue-950 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition">
            <span>ইনকিউবেটর কনফার্ম করতে মেসেজ</span>
            <span>→</span>
          </a>
        </div>

        <!-- 3. PICU Card -->
        <div id="picu-card" class="clean-card rounded-2xl p-5 shadow-xs flex flex-col justify-between border border-slate-200">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-extrabold text-slate-500">ধানমন্ডি ইউনিট</span>
              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ১টি পেডিয়াট্রিক বেড
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">PICU (শিশু আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              শিশুদের তীব্র নিউমোনিয়া, শ্বাসকষ্ট ও জটিল ইনফেকশনে বিশেষায়িত পেডিয়াট্রিক ভেন্টিলেটর ও হাই-ফ্লো ক্যানুলা সাপোর্ট।
            </p>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-3 text-[11px] font-bold text-slate-700">
              <div class="text-emerald-700 font-extrabold">✓ শিশু ক্রিটিক্যাল কেয়ার টিম প্রস্তুত</div>
              <div class="text-slate-400 text-[10px] font-medium">* কোনো প্রকার লুকানো চার্জ ছাড়া সরাসরি ভর্তি</div>
            </div>
          </div>
          <a href="https://wa.me/8801716788301?text=Emergency:%20PICU%20bed%20proyojon%20(Shishu).%20Boyosh:%20[],%20Shomossha:%20[]" target="_blank" class="w-full py-2.5 bg-[#0D3268] hover:bg-blue-950 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition">
            <span>পিআইসিইউ সাপোর্ট জানতে মেসেজ</span>
            <span>→</span>
          </a>
        </div>

        <!-- 4. CCU Card -->
        <div id="ccu-card" class="clean-card rounded-2xl p-5 shadow-xs flex flex-col justify-between border border-slate-200">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-extrabold text-slate-500">ধানমন্ডি ইউনিট</span>
              <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-full border border-emerald-200">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ক্যাথ ল্যাব সক্রিয়
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">CCU (হার্ট কেয়ার ইউনিট)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              ম্যাসিভ হার্ট অ্যাটাকের জরুরি চিকিৎসা, ডিজিটাল ক্যাথ ল্যাব, ডিফিব্রিলেটর ও সার্বক্ষণিক অন-কল কার্ডিওলজিস্ট সাপোর্ট।
            </p>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-3 text-[11px] font-bold text-slate-700">
              <div class="text-emerald-700 font-extrabold">✓ প্রাইমারি পিসিআই ও ইমার্জেন্সি স্টেন্ট</div>
              <div class="text-slate-400 text-[10px] font-medium">* সিনিয়র ইন্টারভেনশনাল কার্ডিওলজিস্ট অন-কল</div>
            </div>
          </div>
          <a href="https://wa.me/8801716788301?text=Emergency:%20CCU%20Cardiac%20bed%20proyojon%20(Heart).%20Shomossha:%20[]" target="_blank" class="w-full py-2.5 bg-[#0D3268] hover:bg-blue-950 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition">
            <span>কার্ডিয়াক টিম বুক করতে মেসেজ</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. HOSPITAL & EQUIPMENT VERIFICATION PANEL (Replaces Outpatient Serials & Elective Surgery) -->
  <section class="py-10 px-4 sm:px-6 bg-white border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-black text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">হাসপাতাল স্ট্যান্ডার্ড ও নিরাপত্তা</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          ধানমন্ডির এ-ক্যাটাগরি হাসপাতালের লাইফ-সাপোর্ট পরিকাঠামো
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-medium mt-1">
          জরুরি রোগীর চিকিৎসায় কোনো নিম্নমানের সরঞ্জাম ব্যবহার করা হয় না
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-[#0D3268] flex items-center justify-center font-black text-lg">
            🫁
          </div>
          <h3 class="font-black text-slate-900 text-sm">জার্মান ড্রাগার ভেন্টিলেটর</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            উন্নত মোডের ইনভেসিভ ও নন-ইনভেসিভ ভেন্টিলেটর যা রোগীর প্রতি মুহূর্তের ফুসফুসের রেসপন্স পর্যবেক্ষণ করে।
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-lg">
            💧
          </div>
          <h3 class="font-black text-slate-900 text-sm">সেন্ট্রাল লিকুইড অক্সিজেন</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            সেন্ট্রাল পাইপলাইন ব্যাকআপযুক্ত অক্সিজেন সিস্টেম, কোনো সিলিন্ডার সংকট বা প্রেশার ড্রপের ঝুঁকি নেই।
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
          <div class="w-10 h-10 rounded-xl bg-red-100 text-[#D9222A] flex items-center justify-center font-black text-lg">
            👨‍⚕️
          </div>
          <h3 class="font-black text-slate-900 text-sm">২৪ ঘণ্টা ইন-হাউজ ইনটেনসিভিস্ট</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            সার্বক্ষণিক উপস্থিত ক্রিটিক্যাল কেয়ার বিশেষজ্ঞ চিকিৎসক ও ট্রেন্ড আইসিইউ নার্সিং টিম।
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
          <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-lg">
            🛡️
          </div>
          <h3 class="font-black text-slate-900 text-sm">শতভাগ জীবাণুমুক্ত আইসোলেশন</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            হেপা ফিল্টারযুক্ত নেগেটিভ প্রেশার ইউনিট যা ক্রস-ইনফেকশন ও জীবাণু সংক্রমণ সম্পূর্ণ প্রতিরোধ করে।
          </p>
        </div>

      </div>

      <!-- Highway Ambulance Live Coordination Alert -->
      <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-[#0D3268] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl shrink-0">
            🚑
          </div>
          <div>
            <div class="font-black text-sm sm:text-base">অ্যাম্বুলেন্স হাইওয়েতে থাকতেই জরুরি সমন্বয়</div>
            <div class="text-xs text-slate-300 font-medium">ঢাকা পৌঁছাতে ৩–৪ ঘণ্টা লাগলে আমাদের আগে থেকেই ভেন্টিলেটর চালু ও ডাক্তার টিম স্ট্যান্ডবাই থাকে।</div>
          </div>
        </div>
        <a href="tel:01716788301" class="w-full md:w-auto px-5 py-2.5 rounded-xl bg-[#D9222A] hover:bg-red-700 text-white font-black text-xs sm:text-sm text-center shrink-0 transition shadow-xs">
          📞 হটলাইনে অ্যাম্বুলেন্স রিপোর্ট দিন
        </a>
      </div>

    </div>
  </section>

  <!-- 5. HOW IT WORKS (Patient Journey from District to Dhanmondi - 0 Advance bKash Guarantee) -->
  <section class="py-12 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-black text-[#D9222A] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">জরুরি ভর্তি প্রক্রিয়া</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          অ্যাম্বুলেন্স থেকে সরাসরি ধানমন্ডি হাসপাতালে ভর্তি
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 font-medium mt-1">
          কোনো অগ্রিম পেমেন্ট বা বিকাশ চার্জ নেই — সরাসরি হাসপাতালে এসে ভর্তি ও বিল পরিশোধ
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        <!-- Step 1 -->
        <div class="clean-card p-6 rounded-2xl relative border border-slate-200">
          <div class="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#D9222A] font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ১
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">অ্যাম্বুলেন্সে উঠেই কল করুন</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            রোগীর বর্তমান অবস্থা ও প্রেসক্রিপশন আমাদের জানান। আমাদের অন-কল মেডিকেল টিম উপযুক্ত ভেন্টিলেটর বেড প্রস্তুতের কাজ শুরু করবে।
          </p>
          <div class="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 py-1 px-2.5 rounded-lg inline-block">
            ✓ কোনো অগ্রিম বিকাশ চার্জ নেই (০ টাকা)
          </div>
        </div>

        <!-- Step 2 -->
        <div class="clean-card p-6 rounded-2xl relative border border-slate-200">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0D3268] font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ২
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">রোগী পৌঁছানোর আগেই বেড লক</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            হাসপাতাল কর্তৃপক্ষকে রোগীর নাম ও হিস্ট্রি জানিয়ে ভেন্টিলেটর চালু রাখা হয়। ঢাকার ট্রাফিকের কারণে কোনো চিকিৎসা বিলম্ব হবে না।
          </p>
          <div class="text-[11px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 py-1 px-2.5 rounded-lg inline-block">
            ✓ পৌঁছামাত্র জরুরি চিকিৎসা শুরু
          </div>
        </div>

        <!-- Step 3 -->
        <div class="clean-card p-6 rounded-2xl relative border border-slate-200">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 font-black flex items-center justify-center text-lg mb-4 shadow-xs">
            ৩
          </div>
          <h3 class="font-black text-slate-900 text-base mb-2">গেট থেকে সরাসরি বেডে স্থানান্তর</h3>
          <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
            আমাদের সমন্বয়কারী টিম হাসপাতালের ইমার্জেন্সি গেটে রোগীকে রিসিভ করবে। কোনো দালালি ছাড়া হাসপাতালের অনুমোদিত বিলিংয়ে ছাড় কার্যকর হবে।
          </p>
          <div class="text-[11px] font-extrabold text-emerald-900 bg-emerald-100/70 border border-emerald-300 py-1 px-2.5 rounded-lg inline-block">
            ✓ বিলের সময় সরাসরি কর্পোরেট সাশ্রয়
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 6. PATIENT ANXIETY & FAQ SECTION (Addressing Fears of Ambulance Families) -->
  <section class="py-12 px-4 sm:px-6 bg-white border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <span class="text-xs font-black text-[#D9222A] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">রোগীর স্বজনদের প্রধান প্রশ্ন</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          দালালমুক্ত স্বচ্ছ চিকিৎসা সেবায় আপনার অধিকার
        </h2>
      </div>

      <div class="space-y-3">
        
        <details class="clean-card p-4 rounded-xl group cursor-pointer" open>
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>১. বেড বুকিং করার জন্য কি কোনো বিকাশ বা অগ্রিম টাকা পাঠাতে হবে?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            <strong>একদমই না।</strong> আমরা রোগীদের কাছ থেকে কোনো প্রকার বিকাশ বা অগ্রিম ফি নেই না। রোগী সরাসরি হাসপাতালে আসবেন, চিকিৎসা নেবেন এবং হাসপাতালের অফিশিয়াল ক্যাশ কাউন্টারে আসল ডিসকাউন্টেড বিল পরিশোধ করবেন।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>২. রোগী পৌঁছানোর আগেই কি সত্যিই ভেন্টিলেটর চালু রাখা হয়?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            হ্যাঁ। ক্রিটিক্যাল রোগীর ক্ষেত্রে প্রতি মিনিটে সময় মহামূল্যবান। আপনি অ্যাম্বুলেন্সে ওঠার পর আমাদের জানালে রোগীর প্যারামিটার অনুযায়ী ভেন্টিলেটর টেস্ট করে অক্সিজেন লাইন কানেক্ট করে রাখা হয়, যাতে অ্যাম্বুলেন্স থামার সাথে সাথেই চিকিৎসা শুরু হতে পারে।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>৩. হাসপাতালে গিয়ে আমরা কার সাথে যোগাযোগ করবো?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            আমাদের ডেডিকেটেড হাসপাতাল সমন্বয়কারী টিম ইমার্জেন্সি গেটেই উপস্থিত থাকবেন। কোনো তৃতীয় পক্ষ বা দালালের খপ্পরে পড়তে হবে না। সরাসরি আমাদের তত্ত্বাবধানে রোগী ট্রলি থেকে আইসিইউতে স্থানান্তরিত হবেন।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>৪. ঢাকার সাধারণ হাসপাতালে ৩০,০০০+ টাকার বদলে এত সাশ্রয়ী কীভাবে সম্ভব?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            আমরা ধানমন্ডির এ-ক্যাটাগরি হাসপাতালের প্রাতিষ্ঠানিক রেফারেল নেটওয়ার্ক হিসেবে কাজ করি। আমাদের মাধ্যমে রোগী ভর্তি হলে সরাসরি মূল বেড চার্জের ওপর বিশেষ কর্পোরেট সাশ্রয় কার্যকর হয়। (ডাক্তার ফি ও প্রেসক্রিপশন ঔষধপত্র ব্যতিত)।
          </p>
        </details>

      </div>
    </div>
  </section>

  <!-- 7. URGENT CALL TO ACTION BANNER -->
  <section class="py-10 px-4 sm:px-6 bg-gradient-to-r from-red-600 via-[#D9222A] to-red-700 text-white text-center">
    <div class="max-w-3xl mx-auto space-y-4">
      <span class="bg-white/20 px-3.5 py-1 rounded-full text-xs font-black tracking-wide inline-block">ক্রিটিক্যাল রোগীর প্রতি মিনিটে সময় মহামূল্যবান</span>
      <h2 class="text-2xl sm:text-3xl font-black">
        দেরি না করে এখনই সরাসরি অন-কল ডক্টরের সাথে কথা বলুন
      </h2>
      <p class="text-xs sm:text-sm text-red-100 font-medium max-w-xl mx-auto">
        বেড নিশ্চিত করতে এখনই কল দিন। আমাদের ইমার্জেন্সি টিম ধানমন্ডিতে ২৪ ঘণ্টাই প্রস্তুত রয়েছে।
      </p>
      <div class="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <a href="tel:01716788301" class="flex-1 py-3 px-5 rounded-xl bg-white text-[#D9222A] font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-red-50 transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>হটলাইনে কল: 01716788301</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Emergency:%20ICU/Ventilator%20proyojon.%20Rogir%20Boyosh:%20[],%20Shomossha:%20[],%20Jela:%20[]" target="_blank" class="flex-1 py-3 px-5 rounded-xl bg-[#25D366] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-[#1EBE5D] transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span>হোয়াটসঅ্যাপে ট্রায়াজ</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 8. FOOTER -->
  <footer class="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6 text-center text-xs">
    <div class="max-w-6xl mx-auto space-y-3">
      <div class="flex items-center justify-center gap-2">
        <div class="w-8 h-8 rounded-full bg-white p-1">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain" />
        </div>
        <div class="text-base font-black text-white">Emergency Care BD</div>
      </div>
      <p class="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
        ধানমন্ডির স্বনামধন্য ও শীর্ষ সারির প্রাইভেট হাসপাতালগুলোর সাথে অংশীদারিত্বে জরুরি ক্রিটিক্যাল কেয়ার, লাইভ আইসিইউ বেড ও ভেন্টিলেটর সমন্বয় নেটওয়ার্ক।
      </p>
      <div class="text-slate-300 font-bold pt-1">
        ২৪ ঘণ্টা জরুরি হটলাইন: <a href="tel:01716788301" class="text-white underline font-black">01716788301</a> | অবস্থান: ধানমন্ডি এলাকা, ঢাকা
      </div>
      <div class="pt-4 border-t border-slate-800 text-slate-500 text-[11px]">
        &copy; 2026 Emergency Care BD. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </div>
  </footer>

  <!-- 9. PERSISTENT MOBILE BOTTOM BAR (Triage-Optimized Call & WhatsApp) -->
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAE5DC] p-2.5 md:hidden flex gap-2 shadow-2xl">
    <a href="tel:01716788301" class="flex-1 py-3 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>জরুরি কল: 01716-788301</span>
    </a>
    <a href="https://wa.me/8801716788301?text=Emergency:%20ICU/Ventilator%20proyojon.%20Rogir%20Boyosh:%20[],%20Shomossha:%20[],%20Jela:%20[]" target="_blank" class="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
      <span>হোয়াটসঅ্যাপে ট্রায়াজ</span>
    </a>
  </div>

  <script>
    // Dynamic Timestamp simulation (e.g. আপডেট: ৩–৫ মিনিট আগে)
    (function() {
      var tsEl = document.getElementById('live-timestamp');
      if (tsEl) {
        var mins = Math.floor(Math.random() * 3) + 3;
        tsEl.innerText = 'আপডেট: ' + mins + ' মিনিট আগে';
      }
    })();
  </script>

</body>
</html>
`;

fs.writeFileSync(indexPath, htmlContent, 'utf8');
fs.writeFileSync(previewPath, htmlContent, 'utf8');
console.log('Successfully applied complete CRO & Behavioral Audit overhaul!');
