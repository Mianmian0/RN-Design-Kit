const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// A function to replace class combinations
function replaceClasses(regex, newClass) {
  content = content.replace(regex, newClass);
}

// Safely replace text-sm, text-xs, text-base when they are standalone (not text-sm-something)
// and not followed by font-bold or font-semibold (we already handled those or decided to keep them)
// Actually, let's just replace them if they are followed by a space or quote.
// But we need to be careful not to replace them if they are part of a larger class name.

content = content.replace(/\btext-base\b(?!\s+(font-bold|font-semibold|font-black))/g, 'text-body-lg');
content = content.replace(/\btext-sm\b(?!\s+(font-bold|font-semibold|font-black))/g, 'text-body-base');
content = content.replace(/\btext-xs\b(?!\s+(font-bold|font-semibold|font-black))/g, 'text-body-sm');
content = content.replace(/\btext-tiny\b(?!\s+(font-bold|font-semibold|font-black))/g, 'text-body-xs');

fs.writeFileSync('src/App.tsx', content);
console.log('Generic text replacements done.');
