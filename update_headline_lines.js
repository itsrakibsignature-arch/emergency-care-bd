const fs = require('fs');
const path = require('path');

const dir = 'C:\\\\Users\\\\itsra\\\\.gemini\\\\antigravity\\\\scratch\\\\emergency-care-bd';

function updateHeadline(fileName) {
  const fp = path.join(dir, fileName);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf8');

  const oldHeadlineRegex = /<h1 class="[^"]*">[\s\S]*?ঢাকায় জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা[\s\S]*?<\/h1>/;

  const newHeadline = `<h1 class="font-black text-slate-900 leading-tight max-w-3xl mx-auto">
        <span class="block text-[clamp(15px,4.3vw,36px)] tracking-tight whitespace-nowrap sm:whitespace-normal font-black">
          ঢাকায় জরুরি আইসিইউ ও ভেন্টিলেটর বেড সহায়তা
        </span>
        <span class="block text-[clamp(18px,5.2vw,36px)] text-[#D9222A] mt-1 sm:mt-2 leading-tight font-black">
          <span>হাসপাতালে রোগী পৌঁছানোর আগেই</span><br />
          <span>বেড বুকিং করুন</span>
        </span>
      </h1>`;

  if (oldHeadlineRegex.test(content)) {
    content = content.replace(oldHeadlineRegex, newHeadline);
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`[${fileName}] Headline successfully updated!`);
  } else {
    console.log(`[${fileName}] Old headline regex not matched`);
  }
}

updateHeadline('index.html');
updateHeadline('emergency-care-bd-preview.html');
