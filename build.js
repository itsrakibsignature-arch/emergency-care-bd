const fs = require('fs');
const html = `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emergency Care BD | নোয়াখালী টু ঢাকা জরুরি ICU বেড ও ডাক্তার বুকিং</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    * { font-family: 'Hind Siliguri', sans-serif; box-sizing: border-box; }
    body { background-color: #F8FAFC; color: #0F172A; padding-bottom: 78px; }
    @media (min-width: 768px) { body { padding-bottom: 0; } }
    @keyframes pulseRed {
      0% { box-shadow: 0 0 0 0 rgba(224, 36, 36, 0.7); }
      70% { box-shadow: 0 0 0 12px rgba(224, 36, 36, 0); }
      100% { box-shadow: 0 0 0 0 rgba(224, 36, 36, 0); }
    }
    @keyframes ambulanceRun {
      0% { left: 4%; transform: translateY(-50%) scale(0.9); }
      45% { left: 46%; transform: translateY(-56%) scale(1); }
      55% { left: 50%; transform: translateY(-44%) scale(1); }
      90%, 100% { left: 88%; transform: translateY(-50%) scale(1.05); }
    }
    @keyframes radarWave {
      0% { transform: scale(0.6); opacity: 0.9; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    .pulse-call-btn { animation: pulseRed 2s infinite; }
    .moving-ambulance { animation: ambulanceRun 7s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    .radar-circle { animation: radarWave 1.8s infinite ease-out; }
  </style>
</head>
<body class="bg-[#F8FAFC] text-slate-900 antialiased">

  <!-- 1. TOP BAR -->
  <header class="sticky top-0 z-50 bg-[#E02424] text-white py-2 px-4 sm:px-6 shadow-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between gap-2 text-xs sm:text-sm font-bold">
      <div class="flex items-center gap-2">
        <span class="h-2.5 w-2.5 rounded-full bg-white animate-ping shrink-0"></span>
        <span>নোয়াখালী-মাইজদী টু ঢাকা জরুরি ICU বেড ও স্পেশাল ছাড়</span>
      </div>
      <a href="tel:01716788301" class="bg-white text-[#E02424] px-3.5 py-1 rounded-full font-black text-xs sm:text-sm shadow hover:bg-red-50 transition">
        📞 01716788301
      </a>
    </div>
  </header>

  <!-- 2. NAVBAR -->
  <nav class="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 shadow-xs">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full border border-blue-200 bg-white overflow-hidden shadow-xs shrink-0">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain" />
        </div>
        <div>
          <div class="text-xl font-black text-[#0A3D91] leading-none">
            Emergency <span class="text-[#E02424]">Care</span> BD
          </div>
          <div class="text-[11px] font-bold text-slate-500 mt-0.5">
            ২৪/৭ জরুরি ক্রিটিক্যাল কেয়ার নেটওয়ার্ক
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <a href="https://wa.me/8801716788301?text=Ami%20Noakhali%20theke%20ICU/NICU%20bed%20er%20bapre%20jante%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-xs hover:bg-[#1EBE5D] transition">
          <span>💬 হোয়াটসঅ্যাপ</span>
        </a>
        <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-[#E02424] text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs hover:bg-red-700 transition pulse-call-btn">
          <span>📞 কল করুন</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- 3. HERO SECTION WITH NOAKHALI TO DHAKA ANIMATION -->
  <section class="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-[#F0F5FF] via-white to-[#F8FAFC] border-b border-slate-200">
    <div class="max-w-6xl mx-auto">
      
      <div class="inline-flex items-center gap-2 bg-white border border-red-200 px-3.5 py-1.5 rounded-full shadow-xs mb-4">
        <span class="h-2.5 w-2.5 rounded-full bg-red-600 animate-ping"></span>
        <span class="text-xs sm:text-sm font-black text-[#0A3D91]">
          নোয়াখালী ও জেলা রোগীদের জন্য ধানমন্ডি-পান্থপথের সেরা হাসপাতালে স্পেশাল বেড কোটা
        </span>
      </div>

      <!-- Headline #1 -->
      <h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight mb-4">
        নোয়াখালী থেকে রোগী নিয়ে ঢাকায় আসছেন? ধানমন্ডি-পান্থপথের সেরা হাসপাতালে <span class="text-[#E02424]">ICU বেডে পান ৫০% পর্যন্ত ছাড়!</span>
      </h1>

      <p class="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed max-w-3xl mb-6">
        সাধারণ হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার অতিরিক্ত খরচে না গিয়ে—আমাদের রেফারেন্সে পান <span class="bg-red-100 text-[#E02424] font-black px-1.5 py-0.5 rounded">প্রায় অর্ধেক খরচে</span> ভেরিফায়েড বেড। মাইজদী থেকে রওনা দেওয়ার আগেই ফোনে বা হোয়াটসঅ্যাপে নিশ্চিত বেড বুকিং।
      </p>

      <!-- 2 Only Primary Action CTAs -->
      <div class="flex flex-col sm:flex-row gap-3 max-w-xl mb-8">
        <a href="tel:01716788301" class="flex-1 py-3.5 px-5 rounded-2xl bg-[#E02424] hover:bg-red-700 text-white font-black text-base flex items-center justify-center gap-2.5 shadow-lg pulse-call-btn transition">
          <span class="text-xl">📞</span>
          <span>সরাসরি কল দিন: 01716788301</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Ami%20Noakhali%20Maijdee%20theke%20patient%20niye%20Dhaka%20ashchi.%20Emergency%20bed%20o%20discount%20shomporke%20jante%20chai." target="_blank" class="flex-1 py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-base flex items-center justify-center gap-2.5 shadow-lg transition">
          <span class="text-xl">💬</span>
          <span>হোয়াটসঅ্যাপে বেড কনফার্ম করুন</span>
        </a>
      </div>

      <!-- NOAKHALI TO DHAKA PROCESS ANIMATION BOX -->
      <div class="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border-2 border-red-500/20 relative overflow-hidden">
        <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-2.5">
          <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="radar-circle absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E02424]"></span>
            </span>
            <span class="text-xs font-black text-[#0A3D91] tracking-wider uppercase">পেশেন্ট ট্রান্সফার ও লাইভ বুকিং প্রসেস</span>
          </div>
          <span class="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
            গড় বেড কনফার্মেশন: ২ মিনিট
          </span>
        </div>

        <div class="relative bg-gradient-to-r from-blue-50 via-slate-50 to-red-50 rounded-2xl p-4 border border-slate-200 h-56 sm:h-52 flex flex-col justify-between overflow-hidden">
          
          <!-- Route Highway Track -->
          <div class="absolute top-1/2 left-8 right-8 h-2 bg-slate-300 -translate-y-1/2 rounded-full overflow-hidden">
            <div class="h-full w-full bg-gradient-to-r from-blue-500 via-amber-400 to-red-600 opacity-40"></div>
          </div>

          <!-- Moving Animated Ambulance with Label -->
          <div class="moving-ambulance absolute top-1/2 z-20 pointer-events-none flex flex-col items-center">
            <div class="bg-[#E02424] text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md whitespace-nowrap mb-1">
              🚑 দ্রুত ঢাকায় আসছে
            </div>
            <div class="w-11 h-6 bg-white border-2 border-[#E02424] rounded shadow-md flex items-center justify-center relative">
              <span class="h-1 w-1 rounded-full bg-red-600 animate-ping absolute -top-1"></span>
              <span class="text-xs">🚑</span>
            </div>
          </div>

          <!-- Step 1 & Step 2 Nodes -->
          <div class="relative z-10 flex items-center justify-between">
            <div class="bg-white p-2 sm:p-2.5 rounded-xl border border-blue-200 shadow-sm max-w-[160px]">
              <div class="flex items-center gap-1 mb-0.5">
                <span class="h-2 w-2 rounded-full bg-blue-600"></span>
                <span class="text-xs font-black text-slate-800">১. নোয়াখালী / মাইজদী</span>
              </div>
              <div class="text-[11px] font-bold text-blue-700">অ্যাম্বুলেন্সে ওঠার সাথে সাথে কল/হোয়াটসঅ্যাপে জানান</div>
            </div>

            <div class="hidden sm:block text-xs font-black text-slate-400">
              হাইওয়ে দিয়ে রোগী আসছে ➔
            </div>

            <div class="bg-white p-2 sm:p-2.5 rounded-xl border-2 border-red-500 shadow-md max-w-[170px] text-right">
              <div class="flex items-center justify-end gap-1 mb-0.5">
                <span class="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                <span class="text-xs font-black text-[#E02424]">২. ধানমন্ডি / পান্থপথ</span>
              </div>
              <div class="text-[11px] font-black text-emerald-700">ICU বেড ও ডাক্তার রেডি! (৫০% ছাড়ে)</div>
            </div>
          </div>

          <!-- Step by Step Workflow Bar -->
          <div class="relative z-10 bg-white/95 rounded-xl p-2.5 border border-slate-200 shadow-xs mt-auto">
            <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div>
                <div class="font-black text-slate-800">১. ফোনে রিপোর্ট দিন</div>
                <div class="text-slate-500 text-[10px]">কী বেড লাগবে বলুন</div>
              </div>
              <div class="border-x border-slate-200">
                <div class="font-black text-[#0A3D91]">২. বেড কনফার্মেশন</div>
                <div class="text-slate-500 text-[10px]">আসার আগেই বুকিং</div>
              </div>
              <div>
                <div class="font-black text-[#E02424]">৩. ৫০% ছাড়ে ভর্তি</div>
                <div class="text-slate-500 text-[10px]">দালালমুক্ত চিকিৎসা</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 4. CORE CRITICAL CARE SERVICES (Simplified & Cleaned) -->
  <section class="py-10 px-4 sm:px-6 bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto">
      
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-black bg-red-50 text-[#E02424] border border-red-200 mb-1.5">
            ধানমন্ডি ও পান্থপথ এলাকা
          </span>
          <h2 class="text-xl sm:text-3xl font-black text-slate-900">
            জরুরি ক্রিটিক্যাল কেয়ার বেড সার্ভিস
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
            * অন্য হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার বদলে অর্ধেক খরচে চিকিৎসা নিন (ডাক্তার ফি ও ওষুধ ব্যতিত)
          </p>
        </div>
        <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-[#E02424] text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-sm hover:bg-red-700 transition shrink-0">
          <span>📞 লাইভ বেড জানতে কল করুন</span>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- 1. ICU -->
        <div class="bg-[#F8FAFC] rounded-2xl border-2 border-red-200 p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="bg-red-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৫০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">বেড খালি আছে</span>
            </div>
            <h3 class="text-base font-black text-[#0A3D91] mb-1.5">ICU (ইনটেনসিভ কেয়ার)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              ভেন্টিলেটর ও লাইফ সাপোর্ট। ধানমন্ডি ও পান্থপথের স্বনামধন্য হাসপাতালে অর্ধেক খরচে ভর্তি।
            </p>
          </div>
          <div class="space-y-1.5 pt-2 border-t border-slate-200">
            <a href="tel:01716788301" class="w-full py-2 px-3 rounded-xl bg-[#E02424] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20ICU%20bed%20er%20bapre%2050%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-1.5 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 2. NICU -->
        <div class="bg-[#F8FAFC] rounded-2xl border border-blue-200 p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="bg-[#0A3D91] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">ইনকিউবেটর রেডি</span>
            </div>
            <h3 class="text-base font-black text-[#0A3D91] mb-1.5">NICU (নবজাতক আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              অসুস্থ বা প্রি-ম্যাচিউর শিশুদের আধুনিক ইনকিউবেটর ও সার্বক্ষণিক শিশু বিশেষজ্ঞ কেয়ার।
            </p>
          </div>
          <div class="space-y-1.5 pt-2 border-t border-slate-200">
            <a href="tel:01716788301" class="w-full py-2 px-3 rounded-xl bg-[#E02424] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20NICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-1.5 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 3. PICU -->
        <div class="bg-[#F8FAFC] rounded-2xl border border-blue-200 p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="bg-[#0A3D91] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">লাইভ সাপোর্ট</span>
            </div>
            <h3 class="text-base font-black text-[#0A3D91] mb-1.5">PICU (শিশু আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              শিশুদের জটিল নিউমোনিয়া ও শ্বাসকষ্টে বিশেষায়িত পেডিয়াট্রিক ইনটেনসিভ কেয়ার বেড।
            </p>
          </div>
          <div class="space-y-1.5 pt-2 border-t border-slate-200">
            <a href="tel:01716788301" class="w-full py-2 px-3 rounded-xl bg-[#E02424] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 সরাসরি কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20PICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-1.5 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে বিস্তারিত</span>
            </a>
          </div>
        </div>

        <!-- 4. CCU -->
        <div class="bg-[#F8FAFC] rounded-2xl border border-red-300 p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="bg-amber-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                জরুরি কার্ডিয়াক কেয়ার
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">ক্যাথ ল্যাব রেডি</span>
            </div>
            <h3 class="text-base font-black text-[#0A3D91] mb-1.5">CCU (হার্ট কেয়ার ইউনিট)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-3">
              হার্ট অ্যাটাক ও হৃদরোগের জরুরি চিকিৎসা। সার্বক্ষণিক কার্ডিওলজিস্ট ও ক্যাথ ল্যাব সাপোর্ট।
            </p>
          </div>
          <div class="space-y-1.5 pt-2 border-t border-slate-200">
            <a href="tel:01716788301" class="w-full py-2 px-3 rounded-xl bg-[#E02424] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 খরচের তথ্য জানতে কল দিন</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20CCU%20bed%20o%20khoroch%20shomporke%20jante%20chai" target="_blank" class="w-full py-1.5 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপে কথা বলুন</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. SURGERY SECTION (Ultra Simple Banner) -->
  <section class="py-8 px-4 sm:px-6 bg-slate-900 text-white">
    <div class="max-w-6xl mx-auto bg-gradient-to-r from-[#0A3D91] to-slate-900 border border-blue-400/30 rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <span class="bg-red-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          সার্জারিতে বিশেষ ছাড়
        </span>
        <h2 class="text-lg sm:text-2xl font-black mt-1 mb-1">
          ধানমন্ডি ও পান্থপথের হাসপাতালে যেকোনো অপারেশনে নিশ্চিত ডিসকাউন্ট
        </h2>
        <p class="text-xs text-slate-300 font-medium">
          গলব্লাডার, সিজারিয়ান, এপেন্ডিসাইটিস, হার্নিয়া বা অর্থোপেডিক অপারেশন—আমাদের রেফারেন্সে পান বিশেষ ছাড়।
        </p>
      </div>
      <div class="flex gap-2.5 w-full md:w-auto shrink-0">
        <a href="tel:01716788301" class="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-[#E02424] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow hover:bg-red-700 transition">
          <span>📞 কল করুন</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Ami%20Operation%20Package%20o%20Discount%20shomporke%20jante%20chai" target="_blank" class="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow hover:bg-[#1EBE5D] transition">
          <span>হোয়াটসঅ্যাপ</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 6. 50+ DOCTORS APPOINTMENT (Simplified with direct WhatsApp Booking) -->
  <section class="py-10 px-4 sm:px-6 bg-[#F8FAFC] border-b border-slate-200">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-[#0A3D91] border border-blue-200 mb-1.5">
            ৫০+ বিশেষজ্ঞ ডাক্তার
          </span>
          <h2 class="text-xl sm:text-3xl font-black text-slate-900">
            ফ্রি ডক্টর সিরিয়াল ও অ্যাপয়েন্টমেন্ট
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 font-bold mt-1">
            ধানমন্ডি ও পান্থপথের শীর্ষ হাসপাতালের যেকোনো বিশেষজ্ঞ ডাক্তারের ফ্রি সিরিয়াল নিতে যোগাযোগ করুন
          </p>
        </div>
        <a href="https://wa.me/8801716788301?text=Ami%20Doctor%20Appointment%20er%20jonno%20serial%20nitte%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#0A3D91] text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs hover:bg-[#072B69] transition shrink-0">
          <span>💬 হোয়াটসঅ্যাপে সিরিয়াল নিন</span>
        </a>
      </div>

      <!-- Quick Doctor Cards Preview -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="text-xs font-black text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-2">হৃদরোগ (Cardiology)</div>
            <h3 class="text-sm font-black text-slate-900">প্রফেসর ডা. মো. রফিকুল ইসলাম</h3>
            <p class="text-xs text-slate-500 font-medium mb-3">এমবিবিএস, এফসিপিএস, এমডি (কার্ডিওলজি)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Rafiqul%20Islam%20(Cardiology)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2 bg-blue-50 text-[#0A3D91] hover:bg-[#0A3D91] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>

        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-2">শিশু বিশেষজ্ঞ (Pediatrics)</div>
            <h3 class="text-sm font-black text-slate-900">ডা. নাজমুন নাহার বেগম</h3>
            <p class="text-xs text-slate-500 font-medium mb-3">এমবিবিএস, ডিসিএইচ, এফসিপিএস (শিশু)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Nazmun%20Nahar%20(Pediatrics)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2 bg-blue-50 text-[#0A3D91] hover:bg-[#0A3D91] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>

        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div class="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">গাইনি ও প্রসূতি</div>
            <h3 class="text-sm font-black text-slate-900">প্রফেসর ডা. শিরীন আক্তার</h3>
            <p class="text-xs text-slate-500 font-medium mb-3">এমবিবিএস, এফসিপিএস (গাইনি ও অবস্)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Shirin%20Akter%20(Gynae)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2 bg-blue-50 text-[#0A3D91] hover:bg-[#0A3D91] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FOOTER -->
  <footer class="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 text-center text-xs">
    <div class="max-w-6xl mx-auto space-y-3">
      <div class="text-base font-black text-white">Emergency Care BD</div>
      <p class="max-w-md mx-auto text-slate-400 text-xs">
        ধানমন্ডি ও পান্থপথের শীর্ষ প্রাইভেট হাসপাতালগুলোর সাথে অংশীদারিত্বে জরুরি ক্রিটিক্যাল কেয়ার ও বেড নিশ্চিতকরণ সেবা।
      </p>
      <div class="text-slate-300 font-bold">
        ২৪ ঘণ্টা হটলাইন: <a href="tel:01716788301" class="text-white underline font-black">01716788301</a>
      </div>
      <div class="pt-3 border-t border-slate-800 text-slate-400">
        &copy; 2026 Emergency Care BD. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </div>
  </footer>

  <!-- 8. PERSISTENT MOBILE BOTTOM BAR (Call & WhatsApp) -->
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden flex gap-2 shadow-2xl">
    <a href="tel:01716788301" class="flex-1 py-3 px-3 rounded-xl bg-[#E02424] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <span>📞 সরাসরি কল</span>
    </a>
    <a href="https://wa.me/8801716788301?text=Emergency%20bed%20o%20discount%20proyojon" target="_blank" class="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <span>💬 হোয়াটসঅ্যাপ</span>
    </a>
  </div>

</body>
</html>
`;

fs.writeFileSync('C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/index.html', html, 'utf8');
fs.writeFileSync('C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/emergency-care-bd-preview.html', html, 'utf8');
console.log('UTF8_SUCCESS_BUILD');