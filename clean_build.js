const fs = require('fs');
const file = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/index.html';
const previewFile = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/emergency-care-bd-preview.html';

const html = `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emergency Care BD | ধানমন্ডির সেরা হাসপাতালে জরুরি ICU বেড ও ডক্টর সাপোর্ট</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    * { font-family: 'Hind Siliguri', sans-serif; box-sizing: border-box; }
    body { background-color: #FAF8F5; color: #1E293B; padding-bottom: 78px; }
    @media (min-width: 768px) { body { padding-bottom: 0; } }
    @keyframes pulseCall {
      0% { box-shadow: 0 0 0 0 rgba(217, 34, 42, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(217, 34, 42, 0); }
      100% { box-shadow: 0 0 0 0 rgba(217, 34, 42, 0); }
    }
    .pulse-btn { animation: pulseCall 2s infinite; }
  </style>
</head>
<body class="bg-[#FAF8F5] text-slate-800 antialiased selection:bg-red-500 selection:text-white">

  <!-- 1. TOP ANNOUNCEMENT BAR (Clean & Minimal) -->
  <header class="bg-[#D9222A] text-white py-2 px-4 shadow-xs">
    <div class="max-w-6xl mx-auto flex items-center justify-between text-xs sm:text-sm font-semibold">
      <div class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-white animate-pulse"></span>
        <span>২৪ ঘণ্টা জরুরি ICU, NICU, CCU বেড সহায়তা ও বিশেষ ছাড়</span>
      </div>
      <a href="tel:01716788301" class="bg-white text-[#D9222A] px-3.5 py-0.5 rounded-full font-black text-xs sm:text-sm shadow-xs hover:bg-red-50 transition">
        📞 01716788301
      </a>
    </div>
  </header>

  <!-- 2. NAVBAR (Alliance Hospital Clean Style) -->
  <nav class="bg-white border-b border-[#EAE5DC] py-3 px-4 sm:px-6 shadow-xs sticky top-0 z-40">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white overflow-hidden shadow-xs shrink-0">
          <img src="logo.png" alt="Emergency Care BD" class="w-full h-full object-contain" />
        </div>
        <div>
          <div class="text-xl font-black text-[#0D3268] leading-none">
            Emergency <span class="text-[#D9222A]">Care</span> BD
          </div>
          <div class="text-[11px] font-bold text-slate-400 mt-0.5">
            ক্রিটিক্যাল কেয়ার ও বেড নিশ্চিতকরণ নেটওয়ার্ক
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2.5">
        <a href="https://wa.me/8801716788301?text=Ami%20Emergency%20ICU/NICU%20bed%20er%20bapre%20jante%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-xs hover:bg-[#1EBE5D] transition">
          <span>💬 হোয়াটসঅ্যাপ</span>
        </a>
        <a href="tel:01716788301" class="inline-flex items-center gap-1.5 bg-[#D9222A] text-white font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs hover:bg-red-700 transition pulse-btn">
          <span>📞 কল করুন</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- 3. HERO BANNER (Alliance Hospital Clean & Spacious Layout) -->
  <section class="py-10 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      <!-- Left Content: Crisp, Focused, Zero Clutter -->
      <div class="lg:col-span-7 space-y-4">
        <h1 class="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 leading-tight">
          নোয়াখালী থেকে রোগী নিয়ে ঢাকায় আসছেন? ধানমন্ডির সেরা হাসপাতালে <span class="text-[#D9222A]">ICU বেডে পান ৫০% পর্যন্ত ছাড়!</span>
        </h1>
        <p class="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          অন্যান্য হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার অতিরিক্ত খরচে না গিয়ে—আমাদের রেফারেন্সে পান ধানমন্ডির এ-ক্যাটাগরি হাসপাতালে প্রায় অর্ধেক খরচে নিশ্চিত বেড।
        </p>

        <!-- Only 2 Clean Call-to-Actions -->
        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <a href="tel:01716788301" class="flex-1 py-3.5 px-5 rounded-xl bg-[#D9222A] hover:bg-red-700 text-white font-black text-base flex items-center justify-center gap-2.5 shadow-md pulse-btn transition">
            <span class="text-xl">📞</span>
            <span>কল দিন: 01716788301</span>
          </a>
          <a href="https://wa.me/8801716788301?text=Ami%20Noakhali%20theke%20patient%20niye%20Dhaka%20ashchi.%20Emergency%20bed%20o%20discount%20proyojon." target="_blank" class="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-base flex items-center justify-center gap-2.5 shadow-md transition">
            <span class="text-xl">💬</span>
            <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
          </a>
        </div>
      </div>

      <!-- Right: Clean Hero Image Display (Alliance Style Hero Visual) -->
      <div class="lg:col-span-5">
        <div class="bg-white rounded-3xl p-3 border border-[#EAE5DC] shadow-lg relative overflow-hidden">
          <img src="ambulance-rush.png" alt="Emergency Care Hospital Bed Booking" class="w-full h-auto rounded-2xl object-cover max-h-[290px]" />
          <div class="mt-2.5 px-2 py-1 text-center">
            <span class="text-xs font-black text-[#0D3268]">
              ধানমন্ডির স্বনামধন্য হাসপাতালে ২৪ ঘণ্টা জরুরি বেড নিশ্চিতকরণ
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 4. CORE CRITICAL CARE SERVICES (Clean 4 Cards) -->
  <section class="py-12 px-4 sm:px-6 bg-white border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      
      <div class="mb-8 text-center sm:text-left">
        <h2 class="text-xl sm:text-3xl font-black text-slate-900">
          জরুরি ক্রিটিক্যাল কেয়ার সার্ভিস (ধানমন্ডি)
        </h2>
        <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
          * সাধারণ হাসপাতালে প্রতিদিন ৩০,০০০+ টাকার বদলে অর্ধেক খরচে চিকিৎসা নিন (ডাক্তার ফি ও ওষুধ ব্যতিত)
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- 1. ICU -->
        <div class="bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#D9222A] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৫০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">বেড খালি</span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">ICU (ইনটেনসিভ কেয়ার)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              ভেন্টিলেটর ও লাইফ সাপোর্ট। ধানমন্ডির স্বনামধন্য হাসপাতালে অর্ধেক খরচে তাৎক্ষণিক ভর্তি।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20ICU%20bed%20er%20bapre%2050%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>
        </div>

        <!-- 2. NICU -->
        <div class="bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">ইনকিউবেটর রেডি</span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">NICU (নবজাতক আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              অসুস্থ ও প্রি-ম্যাচিউর শিশুদের জন্য আধুনিক ইনকিউবেটর ও সার্বক্ষণিক শিশু বিশেষজ্ঞ কেয়ার।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20NICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>
        </div>

        <!-- 3. PICU -->
        <div class="bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-[#0D3268] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                ৪০% পর্যন্ত ছাড়
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">লাইভ সাপোর্ট</span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">PICU (শিশু আইসিইউ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              শিশুদের জটিল নিউমোনিয়া ও তীব্র শ্বাসকষ্টে বিশেষায়িত পেডিয়াট্রিক ইনটেনসিভ কেয়ার।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 কল: 01716788301</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20PICU%20bed%20er%20bapre%2040%20percent%20discount%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>
        </div>

        <!-- 4. CCU -->
        <div class="bg-[#FAF8F5] rounded-2xl border border-[#EAE5DC] p-5 flex flex-col justify-between shadow-xs">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="bg-amber-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                জরুরি কার্ডিয়াক কেয়ার
              </span>
              <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">ক্যাথ ল্যাব রেডি</span>
            </div>
            <h3 class="text-lg font-black text-[#0D3268] mb-1">CCU (হার্ট কেয়ার ইউনিট)</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-medium mb-4">
              হার্ট অ্যাটাক ও হৃদরোগের জরুরি চিকিৎসা। সার্বক্ষণিক কার্ডিওলজিস্ট ও ক্যাথ ল্যাব সাপোর্ট।
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-[#EAE5DC]">
            <a href="tel:01716788301" class="w-full py-2.5 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1 hover:bg-red-700 transition">
              <span>📞 খরচের তথ্য জানতে কল দিন</span>
            </a>
            <a href="https://wa.me/8801716788301?text=Ami%20CCU%20bed%20o%20khoroch%20shomporke%20jante%20chai" target="_blank" class="w-full py-2 px-3 rounded-xl bg-white border border-[#25D366] text-[#1EBE5D] font-extrabold text-xs flex items-center justify-center gap-1 hover:bg-green-50 transition">
              <span>হোয়াটসঅ্যাপ</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. SURGERY SECTION (Alliance Style Minimal Callout) -->
  <section class="py-8 px-4 sm:px-6 bg-[#0D3268] text-white">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <h2 class="text-lg sm:text-2xl font-black mb-1">
          ধানমন্ডির হাসপাতালে যেকোনো অপারেশনে নিশ্চিত কর্পোরেট ডিসকাউন্ট
        </h2>
        <p class="text-xs sm:text-sm text-slate-300 font-medium">
          গলব্লাডার, সিজারিয়ান, এপেন্ডিসাইটিস, হার্নিয়া বা অর্থোপেডিক অপারেশন—আমাদের রেফারেন্সে পান বিশেষ ছাড়।
        </p>
      </div>
      <div class="flex gap-2.5 w-full md:w-auto shrink-0">
        <a href="tel:01716788301" class="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-[#D9222A] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow hover:bg-red-700 transition">
          <span>📞 কল করুন</span>
        </a>
        <a href="https://wa.me/8801716788301?text=Ami%20Operation%20Package%20o%20Discount%20shomporke%20jante%20chai" target="_blank" class="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-[#25D366] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow hover:bg-[#1EBE5D] transition">
          <span>হোয়াটসঅ্যাপ</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 6. 50+ DOCTORS APPOINTMENT (Clean & Accessible) -->
  <section class="py-12 px-4 sm:px-6 bg-[#FAF8F5] border-b border-[#EAE5DC]">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <h2 class="text-xl sm:text-3xl font-black text-slate-900">
            ৫০+ বিশেষজ্ঞ ডাক্তারদের ফ্রি অ্যাপয়েন্টমেন্ট
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 font-bold mt-1">
            ধানমন্ডির শীর্ষ হাসপাতালের যেকোনো বিশেষজ্ঞ ডাক্তারের ফ্রি সিরিয়াল নিতে যোগাযোগ করুন
          </p>
        </div>
        <a href="https://wa.me/8801716788301?text=Ami%20Doctor%20Appointment%20er%20jonno%20serial%20nitte%20chai" target="_blank" class="inline-flex items-center gap-1.5 bg-[#0D3268] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:bg-blue-950 transition shrink-0">
          <span>💬 হোয়াটসঅ্যাপে সিরিয়াল নিন</span>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div class="bg-white p-5 rounded-2xl border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-2">হৃদরোগ (Cardiology)</span>
            <h3 class="text-base font-black text-slate-900">প্রফেসর ডা. মো. রফিকুল ইসলাম</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, এফসিপিএস, এমডি (কার্ডিওলজি)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Rafiqul%20Islam%20(Cardiology)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-2">শিশু বিশেষজ্ঞ (Pediatrics)</span>
            <h3 class="text-base font-black text-slate-900">ডা. নাজমুন নাহার বেগম</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, ডিসিএইচ, এফসিপিএস (শিশু)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Nazmun%20Nahar%20(Pediatrics)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>

        <div class="bg-white p-5 rounded-2xl border border-[#EAE5DC] shadow-xs flex flex-col justify-between">
          <div>
            <span class="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-2">গাইনি ও প্রসূতি</span>
            <h3 class="text-base font-black text-slate-900">প্রফেসর ডা. শিরীন আক্তার</h3>
            <p class="text-xs text-slate-500 font-medium mb-4">এমবিবিএস, এফসিপিএস (গাইনি ও অবস্)</p>
          </div>
          <a href="https://wa.me/8801716788301?text=Ami%20Dr.%20Shirin%20Akter%20(Gynae)%20er%20serial%20nitte%20chai" target="_blank" class="w-full py-2.5 bg-[#FAF8F5] border border-[#EAE5DC] text-[#0D3268] hover:bg-[#0D3268] hover:text-white rounded-xl text-xs font-black text-center transition">
            হোয়াটসঅ্যাপে ফ্রি সিরিয়াল নিন →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. FOOTER -->
  <footer class="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 text-center text-xs">
    <div class="max-w-6xl mx-auto space-y-2">
      <div class="text-base font-black text-white">Emergency Care BD</div>
      <p class="text-slate-400 text-xs">
        ধানমন্ডির শীর্ষ প্রাইভেট হাসপাতালগুলোর সাথে অংশীদারিত্বে জরুরি ক্রিটিক্যাল কেয়ার ও বেড নিশ্চিতকরণ সেবা।
      </p>
      <div class="text-slate-300 font-bold pt-1">
        ২৪ ঘণ্টা হটলাইন: <a href="tel:01716788301" class="text-white underline font-black">01716788301</a>
      </div>
      <div class="pt-3 border-t border-slate-800 text-slate-500">
        &copy; 2026 Emergency Care BD. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </div>
  </footer>

  <!-- 8. PERSISTENT MOBILE BOTTOM BAR (Call & WhatsApp) -->
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAE5DC] p-2.5 sm:hidden flex gap-2 shadow-2xl">
    <a href="tel:01716788301" class="flex-1 py-3 px-3 rounded-xl bg-[#D9222A] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <span>📞 কল করুন</span>
    </a>
    <a href="https://wa.me/8801716788301?text=Emergency%20bed%20o%20discount%20proyojon" target="_blank" class="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md">
      <span>💬 হোয়াটসঅ্যাপ</span>
    </a>
  </div>

</body>
</html>
`;

fs.writeFileSync(file, html, 'utf8');
fs.writeFileSync(previewFile, html, 'utf8');
console.log('ALLIANCE_CLEAN_LAYOUT_DONE');
