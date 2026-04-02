const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// A function to replace class combinations
function replaceClasses(regex, newClass) {
  content = content.replace(regex, newClass);
}

// Headings
replaceClasses(/text-2xl\s+font-black\s+leading-\[30px\]/g, 'text-headings-2xl');
replaceClasses(/text-2xl\s+font-black/g, 'text-headings-2xl');
replaceClasses(/text-2xl\s+font-bold/g, 'text-headings-2xl'); // fallback

replaceClasses(/text-lg\s+font-semibold\s+leading-\[22px\]/g, 'text-headings-lg');
replaceClasses(/text-lg\s+font-semibold/g, 'text-headings-lg');
replaceClasses(/text-lg\s+font-bold/g, 'text-headings-lg');

replaceClasses(/text-base\s+font-semibold\s+leading-\[20px\]/g, 'text-headings-base');
replaceClasses(/text-base\s+font-semibold/g, 'text-headings-base');
replaceClasses(/text-base\s+font-bold/g, 'text-headings-base');

replaceClasses(/text-tiny\s+font-semibold\s+leading-\[15px\]/g, 'text-headings-tiny');
replaceClasses(/text-tiny\s+font-semibold/g, 'text-headings-tiny');
replaceClasses(/text-tiny\s+font-bold/g, 'text-headings-tiny');

// Body
replaceClasses(/text-lg\s+font-normal\s+leading-\[22px\]/g, 'text-login-page-heading-xl');
replaceClasses(/text-lg\s+font-normal/g, 'text-login-page-heading-xl');

replaceClasses(/text-base\s+font-normal\s+leading-\[20px\]/g, 'text-body-lg');
replaceClasses(/text-base\s+font-normal/g, 'text-body-lg');
replaceClasses(/text-base\s+leading-\[20px\]/g, 'text-body-lg');

replaceClasses(/text-sm\s+font-normal\s+leading-\[18px\]/g, 'text-body-base');
replaceClasses(/text-sm\s+font-normal/g, 'text-body-base');
replaceClasses(/text-sm\s+leading-\[18px\]/g, 'text-body-base');

replaceClasses(/text-xs\s+font-normal\s+leading-\[16px\]/g, 'text-body-sm');
replaceClasses(/text-xs\s+font-normal/g, 'text-body-sm');
replaceClasses(/text-xs\s+leading-\[16px\]/g, 'text-body-sm');

replaceClasses(/text-tiny\s+font-normal\s+leading-\[15px\]/g, 'text-body-xs');
replaceClasses(/text-tiny\s+font-normal/g, 'text-body-xs');
replaceClasses(/text-tiny\s+leading-\[15px\]/g, 'text-body-xs');

// Buttons
replaceClasses(/text-\[16px\]\s+leading-\[24px\]/g, 'text-button-l');
replaceClasses(/text-\[16px\]\s+leading-\[20px\]/g, 'text-button-l');
replaceClasses(/text-\[14px\]\s+leading-\[20px\]/g, 'text-button-m');
replaceClasses(/text-\[14px\]\s+leading-\[18px\]/g, 'text-button-m');
replaceClasses(/text-\[12px\]\s+leading-\[16px\]/g, 'text-button-s');
replaceClasses(/text-\[11px\]\s+leading-\[14px\]/g, 'text-button-xs');
replaceClasses(/text-\[11px\]\s+leading-\[15px\]/g, 'text-button-xs');

fs.writeFileSync('src/App.tsx', content);
console.log('Typography replacements done.');
