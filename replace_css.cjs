const fs = require('fs');

let content = fs.readFileSync('src/index.css', 'utf8');

const newCss = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Montserrat", ui-sans-serif, system-ui, sans-serif;

  /* Semantic Colors - Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #FFFFFF80;
  --color-text-disabled: #FFFFFF40;
  --color-text-brand: #FF6C44;

  /* Semantic Colors - Background */
  --color-bg-canvas: #141414;
  --color-bg-nav: #0C0C0C;
  --color-bg-tab: #202020;
  --color-bg-surface-1: #262626;
  --color-bg-surface-2: #373737;
  --color-bg-surface-3: #474747;
  --color-bg-feedback-success: #1A3010;
  --color-bg-feedback-warning: #3D2408;
  --color-bg-feedback-error: #3D100C;

  /* Semantic Colors - Action */
  --color-action-primary: #FF6C44;
  --color-action-primary-active: #EA3D0F;
  --color-action-success: #52B82A;
  --color-action-success-active: #419421;
  --color-action-warning: #FC9620;
  --color-action-warning-active: #E3871D;
  --color-action-error: #D92D20;
  --color-action-error-active: #B42318;

  /* Borders & Overlays */
  --color-border-subtle: #FFFFFF26;
  --color-border-strong: #FFFFFF4D;
  --color-overlay-scrim: #000000CC;

  /* Primitives (for specific uses like gradient) */
  --color-button-brand-primary: linear-gradient(to bottom, #FF7A56 0%, #EA3D0F 100%);
}

@utility text-headings-2xl {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
}

@utility text-headings-lg {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}

@utility text-headings-base {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

@utility text-headings-tiny {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
}

@utility text-login-page-heading-xl {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}

@utility text-body-lg {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

@utility text-body-base {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

@utility text-body-sm {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}

@utility text-body-xs {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
}

@utility text-button-l {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

@utility text-button-m {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
}

@utility text-button-s {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}

@utility text-button-xs {
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
}

body {
  background-color: var(--color-bg-canvas);
  color: var(--color-text-primary);
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

fs.writeFileSync('src/index.css', newCss);
console.log('index.css updated.');
