const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = {
  'text-text-100': 'text-text-primary',
  'text-text-75': 'text-text-secondary',
  'text-text-50': 'text-text-secondary',
  'text-text-25': 'text-text-disabled',
  'bg-bg-elevated-1': 'bg-bg-surface-1',
  'bg-bg-elevated-2': 'bg-bg-surface-2',
  'bg-bg-elevated-3': 'bg-bg-surface-3',
  'bg-success-soft': 'bg-bg-feedback-success',
  'bg-warning-soft': 'bg-bg-feedback-warning',
  'bg-danger-soft': 'bg-bg-feedback-error',
  'text-success': 'text-action-success',
  'text-warning': 'text-action-warning',
  'text-danger': 'text-action-error',
  'bg-\\[image:var\\(--color-button-primary\\)\\]': 'bg-[image:var(--color-button-brand-primary)]',
  'text-primary': 'text-text-brand',
  'bg-primary': 'bg-action-primary',
  'border-primary': 'border-action-primary',
  'shadow-primary': 'shadow-action-primary',
  'from-primary': 'from-action-primary',
  'to-primary-active': 'to-action-primary-active',
  'bg-primary-soft': 'bg-[#3D1A10]',
  'border-success': 'border-action-success',
  'border-warning': 'border-action-warning',
  'border-danger': 'border-action-error',
  'text-error': 'text-action-error',
  'border-error': 'border-action-error',
  'bg-error-soft': 'bg-bg-feedback-error',
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

// Also update the documentation text inside App.tsx
content = content.replace(/Inter/g, 'Montserrat');
content = content.replace(/#0E0E0E/g, '#141414');
content = content.replace(/#1C1C1C/g, '#262626');
content = content.replace(/#262626/g, '#373737');
content = content.replace(/#333333/g, '#474747');
content = content.replace(/#22C55E/g, '#52B82A');
content = content.replace(/#F59E0B/g, '#FC9620');
content = content.replace(/#EF4444/g, '#D92D20');

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements done.');
