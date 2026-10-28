const fs = require('fs');
const path = require('path');

const dir = 'C:\\\\Users\\\\itsra\\\\.gemini\\\\antigravity\\\\scratch\\\\emergency-care-bd';

function removeOverwhelmingSections(fileName) {
  const filePath = path.join(dir, fileName);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove Highway Ambulance Live Coordination Alert
  // From <!-- Highway Ambulance Live Coordination Alert --> to </div> before </section> of section 4
  const alertRegex = /<!-- Highway Ambulance Live Coordination Alert -->[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
  if (alertRegex.test(content)) {
    content = content.replace(alertRegex, '</div>\n  </section>');
    console.log(`[${fileName}] Removed Highway Ambulance alert`);
  } else {
    // Alternate fallback regex
    const fallbackRegex = /<div class="mt-6 p-4 sm:p-5 rounded-2xl bg-\[#0D3268\][\s\S]*?📞 হটলাইনে অ্যাম্বুলেন্স রিপোর্ট দিন[\s\S]*?<\/div>/;
    if (fallbackRegex.test(content)) {
      content = content.replace(fallbackRegex, '');
      console.log(`[${fileName}] Removed Highway Ambulance alert via fallback`);
    }
  }

  // 2. Remove Section 5: HOW IT WORKS (অ্যাম্বুলেন্স থেকে সরাসরি ধানমন্ডি হাসপাতালে ভর্তি)
  const howItWorksRegex = /<!-- 5\. HOW IT WORKS[\s\S]*?<\/section>/;
  if (howItWorksRegex.test(content)) {
    content = content.replace(howItWorksRegex, '');
    console.log(`[${fileName}] Removed 5. HOW IT WORKS section`);
  } else {
    // Fallback search by text
    const fallbackSection5 = /<section[^>]*>[\s\S]*?অ্যাম্বুলেন্স থেকে সরাসরি ধানমন্ডি হাসপাতালে ভর্তি[\s\S]*?<\/section>/;
    if (fallbackSection5.test(content)) {
      content = content.replace(fallbackSection5, '');
      console.log(`[${fileName}] Removed Section 5 via fallback`);
    }
  }

  // 3. Remove Section 6: PATIENT ANXIETY & FAQ (দালালমুক্ত স্বচ্ছ চিকিৎসা সেবায় আপনার অধিকার)
  const faqRegex = /<!-- 6\. PATIENT ANXIETY & FAQ SECTION[\s\S]*?<\/section>/;
  if (faqRegex.test(content)) {
    content = content.replace(faqRegex, '');
    console.log(`[${fileName}] Removed 6. PATIENT ANXIETY & FAQ section`);
  } else {
    // Fallback search by text
    const fallbackSection6 = /<section[^>]*>[\s\S]*?দালালমুক্ত স্বচ্ছ চিকিৎসা সেবায় আপনার অধিকার[\s\S]*?<\/section>/;
    if (fallbackSection6.test(content)) {
      content = content.replace(fallbackSection6, '');
      console.log(`[${fileName}] Removed Section 6 via fallback`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${fileName}] File successfully updated!`);
}

removeOverwhelmingSections('index.html');
removeOverwhelmingSections('emergency-care-bd-preview.html');
