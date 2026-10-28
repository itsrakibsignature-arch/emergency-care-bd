const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emergency Care BD | ধানমন্ডির সেরা হাসপাতালে ICU-তে ভর্তি করান ৫০% ছাড়ে</title>
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

  <!-- 1. TOP EMERGENCY HOTLINE BAR -->
  <header class="bg-[#D9222A] text-white py-2 px-4 shadow-xs sticky top-0 z-50">
    <div class="max-w-6xl mx-auto flex items-center justify-between text-xs sm:text-sm font-semibold">
      <div class="flex items-center gap-2">
        <span class="flex h-2.5 w-2.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span class="tracking-wide">২৪ ঘণ্টা ইমার্জেন্সি সাপোর্ট | ধানমন্ডির শীর্ষ হাসপাতালে নিশ্চিত বেড</span>
      </div>
      <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-white text-[#D9222A] px-3.5 py-1 rounded-full font-black text-xs sm:text-sm shadow-xs hover:bg-red-50 transition">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span>01716788301</span>
      </a>
    </div>
  </header>

  <!-- 2. NAVBAR -->
  <nav class="bg-white border-b border-[#EAE5DC] py-3.5 px-4 sm:px-6 shadow-xs sticky top-[37px] z-40 backdrop-blur-md bg-white/95">
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
      
      <!-- Right CTA buttons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <a href="https://wa.me/8801716788301?text=Ami%20Dhanmondir%20hospital-e%20ICU%20bed%20borti%20o%20discount%20shomporke%20jante%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs hover:bg-[#1EBE5D] transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span class="hidden xs:inline">হোয়াটসঅ্যাপ</span>
          <span class="xs:hidden">চ্যাট</span>
        </a>
        <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-[#D9222A] text-white font-black text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs hover:bg-red-700 transition pulse-call">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>কল করুন</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- 3. HERO SECTION (Image on Top, Followed Directly By Text & CTAs) -->
  <section class="py-6 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-white via-white to-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto">
      
      <!-- Top Image: Doctor with ICU Patient & Multi-parameter Monitor -->
      <div class="rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-xl relative group mb-8 bg-slate-900">
        <img src="hero-doctor-icu.jpg" alt="ধানমন্ডির সেরা হাসপাতালে ICU বেডে ভর্তি ও সেবা" class="w-full h-auto max-h-[440px] object-cover object-center transform group-hover:scale-101 transition duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        
        <!-- Bottom Floating Overlay on the Image -->
        <div class="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-white">
          <div class="flex items-center gap-2">
            <span class="flex h-2.5 w-2.5 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-xs sm:text-sm font-black tracking-wide drop-shadow">ধানমন্ডির এ-ক্যাটাগরি হাসপাতাল নেটওয়ার্ক</span>
          </div>
          <div class="inline-flex items-center gap-1.5 bg-[#D9222A] text-white text-xs font-black px-3 py-1 rounded-full shadow-md w-fit">
            <span>২৪/৭ ভেন্টিলেটর ও স্পেশালিস্ট টিম প্রস্তুত</span>
          </div>
        </div>
      </div>

      <!-- Text Section (Directly After the Image) -->
      <div class="text-center space-y-4">
        
        <!-- Trust Badge -->
        <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-emerald-800 shadow-2xs">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>নোয়াখালী ও বাইরের জেলা থেকে আগত রোগীদের জন্য বিশেষ সহায়তা</span>
        </div>

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

  <!-- 4. HOW IT WORKS (Patient Journey from District to Dhanmondi) -->
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
  </section>

  <!-- 5. CORE CRITICAL CARE SERVICES (Clean 4 Cards) -->
  <section class="py-12 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span class="text-xs font-black text-[#0D3268] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">জরুরি সেবা ও ডিসকাউন্ট</span>
          <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
            ক্রিটিক্যাল কেয়ার বেড সার্ভিস (ধানমন্ডি)
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
            * সাধারণ হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার বদলে অর্ধেক খরচে চিকিৎসা নিন (ডাক্তার ফি ও ঔষধপত্র ব্যতিত)
          </p>
        </div>
        <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-[#D9222A] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:bg-red-700 transition shrink-0">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>লাইভ বেড জানতে কল করুন</span>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- 1. ICU -->
        <div class="clean-card rounded-2xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#D9222A] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৫০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> বেড খালি
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">ICU (ইনটেনসিভ কেয়ার)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              ভেন্টিলেটর, আর্টারিয়াল লাইন ও সার্বক্ষণিক লাইফ সাপোর্ট। ধানমন্ডির স্বনামধন্য হাসপাতালে অর্ধেক খরচে তাৎক্ষণিক ভর্তি।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20ICU%20bed%20er%20bapre%2050%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 2. NICU -->
        <div class="clean-card rounded-2xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> ইনকিউবেটর রেডি
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">NICU (নবজাতক আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              অসুস্থ ও প্রি-ম্যাচিউর শিশুদের জন্য অত্যাধুনিক ইনকিউবেটর, ফটোথেরাপি ও অভিজ্ঞ নিওন্যাটোলজিস্ট কেয়ার।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20NICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 3. PICU -->
        <div class="clean-card rounded-2xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> পেডিয়াট্রিক রেডি
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">PICU (শিশু আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              শিশুদের তীব্র নিউমোনিয়া, শ্বাসকষ্ট ও জটিল ইনফেকশনে বিশেষায়িত পেডিয়াট্রিক ইনটেনসিভ কেয়ার সাপোর্ট।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20PICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 4. CCU -->
        <div class="clean-card rounded-2xl p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-amber-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                জরুরি কার্ডিয়াক কেয়ার
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> ক্যাথ ল্যাব সক্রিয়
              </span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">CCU (হার্ট কেয়ার ইউনিট)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              ম্যাসিভ হার্ট অ্যাটাক ও হৃদরোগের জরুরি চিকিৎসা। সার্বক্ষণিক অন-কল কার্ডিওলজিস্ট ও প্রাইমারি পিসিআই প্রস্তুতি।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 খরচের তথ্য জানতে কল দিন</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20CCU%20bed%20o%20khoroch%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 6. SURGERY CALLOUT (Clean Corporate Discount Banner) -->
  <section class="py-9 px-4 sm:px-6 bg-[#0D3268] text-white">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <div class="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-amber-300 mb-2">
          <span>★ ধানমন্ডি হাসপাতালের কর্পোরেট পার্টনারশিপ</span>
        </div>
        <h2 class="text-lg sm:text-2xl font-black mb-1">
          জরুরি যেকোনো অপারেশনে নিশ্চিত কর্পোরেট ডিসকাউন্ট
        </h2>
        <p class="text-xs sm:text-sm text-slate-300 font-medium">
          গলব্লাডার, সিজারিয়ান, এপেন্ডিসাইটিস, হার্নিয়া বা অর্থোপেডিক অপারেশন—আমাদের রেফারেন্সে পান বিশেষ ছাড়।
        </p>
      </div>
      <div class="flex gap-3 w-full md:w-auto shrink-0">
        <a href="tel:01716788301" class="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-[#D9222A] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:bg-red-700 transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>অপারেশন তথ্য জানতে কল</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Ami%20Operation%20Package%20o%20Discount%20shomporke%20jante%20chai" target="_blank" class="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-[#25D366] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md hover:bg-[#1EBE5D] transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span>হোয়াটসঅ্যাপ</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 7. 50+ DOCTORS APPOINTMENT -->
  <section class="py-12 px-4 sm:px-6 bg-white border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <span class="text-xs font-black text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">ফ্রি সিরিয়াল সুবিধা</span>
          <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
            ৫০+ বিশেষজ্ঞ ডাক্তারদের ফ্রি অ্যাপয়েন্টমেন্ট
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
            ধানমন্ডির স্বনামধন্য হাসপাতালে সিনিয়র কনসালট্যান্ট ও অধ্যাপকদের ফ্রি সিরিয়াল নিতে যোগাযোগ করুন
          </p>
        </div>
        <a href="https://wa.me/8801716788301?text=Ami%20Doctor%20Appointment%20er%20jonno%20serial%20nitte%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#0D3268] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:bg-blue-950 transition shrink-0">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span>হোয়াটসঅ্যাপে ডাক্তারের তালিকা ও সিরিয়াল</span>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        <div class="clean-card p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-2">হৃদরোগ ও কার্ডিওলজি</span>
            <h3 class="text-base font-black text-slate-900">প্রফেসর ডা. মো. রফিকুল ইসলাম</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, এফসিপিএস, এমডি (কার্ডিওলজি) - সিনিয়র ইন্টারভেনশনাল কার্ডিওলজিস্ট</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Rafiqul%20Islam%20(Cardiology)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition flex items-center justify-center gap-1.5">
            <span>হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন</span>
            <span>→</span>
          </a>
        </div>

        <div class="clean-card p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-2">শিশু বিশেষজ্ঞ ও নিওন্যাটোলজি</span>
            <h3 class="text-base font-black text-slate-900">ডা. নাজমুন নাহার বেগম</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, ডিসিএইচ, এফসিপিএস (শিশু) - নবজাতক ও শিশু ক্রিটিক্যাল কেয়ার স্পেশালিস্ট</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Nazmun%20Nahar%20(Pediatrics)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition flex items-center justify-center gap-1.5">
            <span>হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন</span>
            <span>→</span>
          </a>
        </div>

        <div class="clean-card p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">গাইনি ও প্রসূতি বিশেষজ্ঞ</span>
            <h3 class="text-base font-black text-slate-900">প্রফেসর ডা. শিরীন আক্তার</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, এফসিপিএস (গাইনি ও অবস্) - ল্যাপারোস্কোপিক ও হাই-রিস্ক প্রেগন্যান্সি স্পেশালিস্ট</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Shirin%20Akter%20(Gynae)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition flex items-center justify-center gap-1.5">
            <span>হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </div>
  </section>

  <!-- 8. PATIENT ANXIETY & FAQ SECTION (Clean & Simple) -->
  <section class="py-12 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <span class="text-xs font-black text-[#D9222A] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">সচরাচর জিজ্ঞাসা</span>
        <h2 class="text-xl sm:text-3xl font-black text-slate-900 mt-2">
          রোগীর স্বজনদের সাধারণ কিছু প্রশ্নের উত্তর
        </h2>
      </div>

      <div class="space-y-3">
        
        <details class="clean-card p-4 rounded-xl group cursor-pointer" open>
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>১. ঢাকার সাধারণ হাসপাতালে ৩০,০০০+ টাকা বিলের বিপরীতে আপনারা কীভাবে অর্ধেক খরচে দিচ্ছেন?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            আমরা ধানমন্ডির এ-ক্যাটাগরি হাসপাতালগুলোর সাথে দীর্ঘমেয়াদী কর্পোরেট পার্টনারশিপে কাজ করি। আমাদের রেফারেন্সে রোগী ভর্তি হলে সরাসরি হাসপাতাল বিলের মূল বেড চার্জে ৫০% পর্যন্ত ছাড় প্রদান করা হয়। (মনে রাখবেন, ডাক্তারের আলাদা ভিজিট ফি ও প্রেসক্রিপশন ঔষধপত্র এর আওতাবহির্ভূত)।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>২. নোয়াখালী থেকে রওনা দেওয়ার কতক্ষণ আগে আপনাদের জানানো উচিত?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            অ্যাম্বুলেন্সে রোগী তোলার সাথে সাথেই আমাদের হটলাইনে কল দিন বা হোয়াটসঅ্যাপে প্রেসক্রিপশন দিন। নোয়াখালী থেকে ঢাকায় পৌঁছাতে ৪ থেকে ৫ ঘণ্টা সময় লাগে। এই সময়ের মধ্যেই ধানমন্ডির হাসপাতালে ভেন্টিলেটর ও বেড পুরোপুরি প্রস্তুত করে রাখা সম্ভব হয়।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>৩. হাসপাতালে পৌঁছালে কি কোনো মধ্যস্বত্বভোগী বা দালালের ঝামেলা পোহাতে হবে?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            একদমই না। কোনো দালালি বা লুকানো ফি নেই। আমাদের নিজস্ব হাসপাতাল সমন্বয়কারী টিম রোগী আসার সাথে সাথে সরাসরি রিসিভ করে ইমার্জেন্সি থেকে আইসিইউ বেডে নিয়ে যায় এবং সরাসরি হাসপাতাল কর্তৃপক্ষের বিলিংয়ে ডিসকাউন্ট অ্যাক্টিভ করে দেয়।
          </p>
        </details>

        <details class="clean-card p-4 rounded-xl group cursor-pointer">
          <summary class="font-black text-slate-900 text-sm sm:text-base flex items-center justify-between">
            <span>৪. আপনাদের এই সেবার জন্য রোগীকে আলাদা কোনো চার্জ দিতে হয়?</span>
            <span class="text-[#D9222A] text-lg font-bold transition group-open:rotate-45">+</span>
          </summary>
          <p class="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed border-t border-[#EAE5DC] pt-2">
            না, রোগীর পরিবারের জন্য আমাদের এই সমন্বয় ও রেফারেন্স সুবিধা সম্পূর্ণ বিনামূল্যে। রোগী শুধুমাত্র হাসপাতালকে তাদের আসল ডিসকাউন্টেড বিল পরিশোধ করবেন।
          </p>
        </details>

      </div>
    </div>
  </section>

  <!-- 9. URGENT CALL TO ACTION BANNER -->
  <section class="py-10 px-4 sm:px-6 bg-gradient-to-r from-red-600 via-[#D9222A] to-red-700 text-white text-center">
    <div class="max-w-3xl mx-auto space-y-4">
      <span class="bg-white/20 px-3.5 py-1 rounded-full text-xs font-black tracking-wide inline-block">ক্রিটিক্যাল রোগীর প্রতি মিনিটে সময় মহামূল্যবান</span>
      <h2 class="text-2xl sm:text-3xl font-black">
        দেরি না করে এখনই সরাসরি চিকিৎসকের সাথে কথা বলুন
      </h2>
      <p class="text-xs sm:text-sm text-red-100 font-medium max-w-xl mx-auto">
        বেড খালি থাকা সাপেক্ষে এখনই কল দিন। আমাদের ইমার্জেন্সি টিম ধানমন্ডিতে ২৪ ঘণ্টাই প্রস্তুত রয়েছে।
      </p>
      <div class="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
        <a href="tel:01716788301" class="flex-1 py-3 px-5 rounded-xl bg-white text-[#D9222A] font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-red-50 transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <span>হটলাইনে কল: 01716788301</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Ami%20Emergency%20ICU%20bed%20bapre%20kotha%20bolte%20chai" target="_blank" class="flex-1 py-3 px-5 rounded-xl bg-[#25D366] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-[#1EBE5D] transition">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
          <span>হোয়াটসঅ্যাপ চ্যাট</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 10. FOOTER -->
  <footer class="bg-slate-900 text-slate-400 py-10 px-4 sm:px-6 text-center text-xs">
    <div class="max-w-6xl mx-auto space-y-3">
      <div class="flex items-center justify-center gap-2">
        <div class="w-8 h-8 rounded-full bg-white p-1">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain" />
        </div>
        <div class="text-base font-black text-white">Emergency Care BD</div>
      </div>
      <p class="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
        ধানমন্ডির স্বনামধন্য ও শীর্ষ সারির প্রাইভেট হাসপাতালগুলোর সাথে অংশীদারিত্বে জরুরি ক্রিটিক্যাল কেয়ার, লাইভ আইসিইউ বেড ও ডক্টর রেফারেল নেটওয়ার্ক।
      </p>
      <div class="text-slate-300 font-bold pt-1">
        ২৪ ঘণ্টা জরুরি হটলাইন: <a href="tel:01716788301" class="text-white underline font-black">01716788301</a> | অবস্থান: ধানমন্ডি ও পান্থপথ এলাকা, ঢাকা
      </div>
      <div class="pt-4 border-t border-slate-800 text-slate-500 text-[11px]">
        &copy; 2026 Emergency Care BD. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </div>
  </footer>

  <!-- 11. PERSISTENT MOBILE BOTTOM BAR (Call & WhatsApp) -->
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAE5DC] p-2.5 md:hidden flex gap-2 shadow-2xl">
    <a href="tel:01716788301" class="flex-1 py-3 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <span>সরাসরি কল দিন</span>
    </a>
    <a href="https://wa.me/8801716788301?text=Ami%20Emergency%20bed%20o%20discount%20shomporke%20jante%20chai" target="_blank" class="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69 0 1 .73 1.96.83 2.1.1.13 1.41 2.22 3.48 3.07.49.21.88.33 1.18.43.5.15.95.13 1.31.08.4-.06 1.23-.5 1.4-.99.18-.49.18-.91.13-.99-.06-.09-.2-.14-.42-.25-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.58.71-.71.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.15.04-.28-.02-.39-.06-.11-.5-.1.21-.69-1.65z"/></svg>
      <span>হোয়াটসঅ্যাপে মেসেজ</span>
    </a>
  </div>

</body>
</html>
`;

const dir = 'C:\\Users\\itsra\\.gemini\\antigravity\\scratch\\emergency-care-bd';
fs.writeFileSync(path.join(dir, 'index.html'), htmlContent, 'utf8');
fs.writeFileSync(path.join(dir, 'emergency-care-bd-preview.html'), htmlContent, 'utf8');
console.log('Successfully updated Hero image at top and updated headline text section.');
