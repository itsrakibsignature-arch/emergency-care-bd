const fs = require('fs');
const file = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/index.html';
const previewFile = 'C:/Users/itsra/.gemini/antigravity/scratch/emergency-care-bd/emergency-care-bd-preview.html';

let content = fs.readFileSync(file, 'utf8');

// 1. Remove Maijdee mentions
content = content.replace(/নোয়াখালী-মাইজদী টু ঢাকা/g, 'নোয়াখালী টু ঢাকা');
content = content.replace(/মাইজদী থেকে রওনা দেওয়ার আগেই/g, 'নোয়াখালী থেকে রওনা দেওয়ার আগেই');
content = content.replace(/নোয়াখালী \/ মাইজদী/g, 'নোয়াখালী');
content = content.replace(/Noakhali%20Maijdee/g, 'Noakhali');

// 2. Add realistic curved highway CSS
const curvedRoadCss = `
    /* Realistic Curved Road Animation */
    @keyframes moveOnCurve {
      0% {
        offset-distance: 0%;
        transform: scale(0.9);
      }
      45% {
        offset-distance: 45%;
        transform: scale(1.05);
      }
      85%, 100% {
        offset-distance: 100%;
        transform: scale(1.1);
      }
    }
    .curved-ambulance {
      offset-path: path('M 30 140 C 120 40, 180 200, 280 120 C 350 50, 420 170, 500 85');
      animation: moveOnCurve 8.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    }
    .pulse-hospital {
      animation: pulseHospital 2s infinite ease-in-out;
    }
    @keyframes pulseHospital {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(224, 36, 36, 0.4)); }
      50% { transform: scale(1.06); filter: drop-shadow(0 0 14px rgba(224, 36, 36, 0.7)); }
    }
`;

content = content.replace('.moving-ambulance { animation: ambulanceRun 7s cubic-bezier(0.4, 0, 0.6, 1) infinite; }', curvedRoadCss);

// 3. Replace straight road with realistic curved highway with 'Noakhali theke' and 'Dhanmondhi Hospital'
const startToken = '<!-- NOAKHALI TO DHAKA PROCESS ANIMATION BOX -->';
const endToken = '<!-- 4. CORE CRITICAL CARE SERVICES';

const pStart = content.indexOf(startToken);
const pEnd = content.indexOf(endToken);

if (pStart !== -1 && pEnd !== -1) {
  const newRoad = `<!-- NOAKHALI TO DHAKA REALISTIC CURVED HIGHWAY ANIMATION -->
      <div class="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border-2 border-red-500/20 relative overflow-hidden">
        
        <div class="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
          <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="radar-circle absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#E02424]"></span>
            </span>
            <span class="text-xs font-black text-[#0A3D91] tracking-wider uppercase">লাইভ হাইওয়ে রুট ট্র্যাকিং</span>
          </div>
          <span class="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
            বেড বুকিং কনফার্মেশন: ২ মিনিট
          </span>
        </div>

        <!-- Realistic Curved Highway Canvas -->
        <div class="relative bg-gradient-to-b from-[#F0F5FF] via-slate-50 to-[#FFF5F5] rounded-2xl p-3 sm:p-4 border border-slate-200 overflow-hidden min-h-[260px] sm:min-h-[290px]">
          
          <!-- Curved Road SVG -->
          <svg viewBox="0 0 540 220" class="w-full h-52 sm:h-60" preserveAspectRatio="none">
            <!-- Road Outer Border -->
            <path d="M 30 140 C 120 40, 180 200, 280 120 C 350 50, 420 170, 500 85" fill="none" stroke="#94A3B8" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Asphalt Road -->
            <path d="M 30 140 C 120 40, 180 200, 280 120 C 350 50, 420 170, 500 85" fill="none" stroke="#334155" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Center Yellow Dashed Line -->
            <path d="M 30 140 C 120 40, 180 200, 280 120 C 350 50, 420 170, 500 85" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-dasharray="10 10" stroke-linecap="round"/>
            
            <!-- Roadside Trees & scenery -->
            <circle cx="110" cy="155" r="8" fill="#86EFAC" opacity="0.6"/>
            <circle cx="180" cy="55" r="10" fill="#86EFAC" opacity="0.6"/>
            <circle cx="360" cy="180" r="9" fill="#86EFAC" opacity="0.6"/>
            <circle cx="410" cy="45" r="11" fill="#86EFAC" opacity="0.6"/>
          </svg>

          <!-- Starting Point: Noakhali theke -->
          <div class="absolute top-4 left-3 sm:left-5 z-20 bg-white p-2 sm:p-2.5 rounded-xl border-2 border-blue-500 shadow-md flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-blue-600 animate-ping shrink-0"></div>
            <div>
              <div class="text-xs sm:text-sm font-black text-[#0A3D91]">Noakhali theke</div>
              <div class="text-[10px] sm:text-[11px] font-bold text-slate-500">রওনা দেওয়ার সাথে সাথে কল দিন</div>
            </div>
          </div>

          <!-- Destination Point: Dhanmondhi Hospital -->
          <div class="absolute bottom-4 right-3 sm:right-5 z-20 bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-red-600 shadow-xl flex items-center gap-2.5 pulse-hospital">
            <div class="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-xl shrink-0">
              🏥
            </div>
            <div>
              <div class="text-xs sm:text-sm font-black text-[#E02424]">Dhanmondhi Hospital</div>
              <div class="text-[10px] sm:text-[11px] font-black text-emerald-700">ICU বেড ও ডাক্তার প্রস্তুত! (৫০% ছাড়ে)</div>
            </div>
          </div>

          <!-- Animated Moving Ambulance following curved highway path -->
          <div class="curved-ambulance absolute top-0 left-0 z-30 pointer-events-none flex flex-col items-center">
            <div class="bg-[#E02424] text-white text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-md whitespace-nowrap mb-1">
              🚑 Noakhali theke আসছে
            </div>
            <div class="w-11 h-6 sm:w-12 sm:h-7 bg-white border-2 border-[#E02424] rounded-lg shadow-xl flex items-center justify-center relative">
              <span class="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping absolute -top-1"></span>
              <span class="text-xs">🚑</span>
            </div>
          </div>

        </div>

        <!-- 3-Step Simple Guide -->
        <div class="bg-slate-50 rounded-xl p-2.5 border border-slate-200 mt-3">
          <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div>
              <div class="font-black text-slate-800">১. Noakhali theke কল</div>
              <div class="text-slate-500 text-[10px]">রোগীর অবস্থা জানান</div>
            </div>
            <div class="border-x border-slate-200">
              <div class="font-black text-[#0A3D91]">২. হাইওয়েতে বেড বুকিং</div>
              <div class="text-slate-500 text-[10px]">পৌঁছানোর আগেই রেডি</div>
            </div>
            <div>
              <div class="font-black text-[#E02424]">৩. Dhanmondhi Hospital</div>
              <div class="text-slate-500 text-[10px]">সরাসরি ৫০% ছাড়ে ভর্তি</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  `;

  content = content.substring(0, pStart) + newRoad + content.substring(pEnd);
}

fs.writeFileSync(file, content, 'utf8');
fs.writeFileSync(previewFile, content, 'utf8');
console.log('SUCCESS_CURVED_ROAD_APPLIED');
