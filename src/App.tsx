import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, ArrowRight, Layers, Type, TypeOutline, Square, Circle, Ruler, MousePointer2, Search, ChevronDown, Home, Gamepad2, User, Menu, Bell, X, Trophy, Layout } from 'lucide-react';

// --- Helper Components for Documentation ---

const SectionTitle = ({ children, description }: { children: React.ReactNode, description?: string }) => (
  <div className="mb-8 border-b border-border-subtle pb-4">
    <h2 className="text-headings-2xl text-text-primary tracking-wide">{children}</h2>
    {description && <p className="mt-2 text-text-secondary font-medium">{description}</p>}
  </div>
);

const ColorSwatch = ({ name, hex, className, textColor = "text-text-primary" }: { name: string, hex: string, className: string, textColor?: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 w-full rounded-xl shadow-elevated-1 flex items-end p-3 ${className}`}>
      <span className={`font-mono text-xs font-semibold tracking-wider ${textColor}`}>{hex}</span>
    </div>
    <div>
      <div className="text-sm font-semibold text-text-primary">{name}</div>
    </div>
  </div>
);

const ElevationCard = ({ level, hex, className, zIndex }: { level: string, hex: string, className: string, zIndex: number }) => (
  <div 
    className={`${className} p-6 rounded-xl shadow-elevated-2  flex flex-col justify-between transition-transform hover:-translate-y-1`}
    style={{ zIndex, position: 'relative', marginTop: zIndex > 0 ? '-2rem' : '0', width: `${100 - (zIndex * 5)}%`, margin: '0 auto' }}
  >
    <span className="text-sm font-bold text-text-secondary">{level}</span>
    <span className="font-mono text-xs text-text-secondary mt-4">{hex}</span>
  </div>
);

const TextOpacityRow = ({ label, opacity, className }: { label: string, opacity: string, className: string }) => (
  <div className="flex items-center justify-between p-4 border-b border-border-subtle last:border-0">
    <div className="flex items-center gap-4">
      <Type size={18} className={className} />
      <span className={`text-headings-lg ${className}`}>{label}</span>
    </div>
    <span className="font-mono text-sm text-text-secondary">{opacity}</span>
  </div>
);

const RadiusCard = ({ size, px, twClass, desc, isCircle = false, isPill = false }: { size: string, px: string, twClass: string, desc: string, isCircle?: boolean, isPill?: boolean }) => (
  <div className="flex items-center gap-6 p-4 border-b border-border-subtle/50 last:border-0 hover:bg-bg-surface-2/50 transition-colors rounded-xl">
    <div className="w-20 h-20 flex items-center justify-center bg-bg-canvas  shrink-0">
      <div className={`border-2 border-action-primary ${twClass} ${isCircle ? 'w-10 h-10' : isPill ? 'w-12 h-6' : 'w-10 h-10'} bg-action-primary-soft`}></div>
    </div>
    <div>
      <div className="flex items-baseline gap-3 mb-1">
        <h4 className="text-headings-lg text-text-primary">{size}</h4>
        <span className="font-mono text-sm text-text-brand">{px}</span>
      </div>
      <p className="text-sm text-text-secondary">{desc}</p>
      <code className="text-xs text-text-secondary bg-bg-canvas px-2 py-1 rounded mt-2 inline-block ">{twClass}</code>
    </div>
  </div>
);

const SpacingRow = ({ name, size, px, rem }: { name: string, size: string, px: string, rem: string }) => (
  <div className="grid grid-cols-[48px_80px_48px_64px_1fr] md:grid-cols-[56px_96px_56px_72px_1fr] gap-2 md:gap-4 items-center p-3 md:p-4 hover:bg-bg-surface-2/50 rounded-xl transition-colors border-b border-border-subtle/30 last:border-0">
    <div className="font-black text-sm md:text-base text-text-brand">{name}</div>
    <div className="font-mono text-sm text-text-primary font-bold">{size}</div>
    <div className="font-mono text-xs md:text-sm text-text-secondary">{px}</div>
    <div className="font-mono text-xs md:text-sm text-text-secondary">{rem}</div>
    <div className="flex items-center">
      <div className="h-4 bg-action-primary-soft rounded-sm border border-border-primary" style={{ width: px }}></div>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeTab10_5, setActiveTab10_5] = useState('High Roller');
  const [activeTab11, setActiveTab11] = useState('Crypto');
  const [activeAmount11, setActiveAmount11] = useState<string | null>('$500');
  const [activeAmount10_3, setActiveAmount10_3] = useState<string | null>('$100');

  return (
    <div className="min-h-screen bg-bg-base p-6 md:p-12 font-sans selection:bg-action-primary/30">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <header className="space-y-4 pt-8">
          <div className="inline-block px-3 py-1 bg-action-primary-soft border border-border-primary rounded-full text-text-brand text-xs font-bold tracking-widest uppercase mb-4">
            iGaming Platform UI Kit
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight uppercase">
            设计系统规范 <br/><span className="text-text-brand">RN DESIGN</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl font-medium leading-relaxed">
            专为线上平台打造的深色模式规范。采用 Montserrat 字体，强化数字与赔率的易读性，并优化了容器层级与文本透明度。
          </p>
        </header>

        {/* 1. Typography (NEW) */}
        <section>
          <SectionTitle description="基于提供的规范优化的字体层级。统一了命名规范（语义化），保留了平台所需的高密度小字号（11px/12px）以及极具视觉冲击力的特大字重（900）。">
            1. 字体排版 (Typography)
          </SectionTitle>
          
          <div className="bg-bg-surface-1 p-8 rounded-2xl shadow-elevated-1 space-y-12">
            
            {/* Line Height Rule Callout */}
            <div className="bg-action-primary-soft border border-border-primary rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-headings-lg text-text-brand flex items-center gap-2">
                  <Ruler size={20} /> 字高计算规则 (Line Height Rule)
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                  为了确保全站垂直律动的严谨性，所有字号的行高均遵循以下数学公式进行计算，确保在不同尺寸下都能保持最佳的阅读舒适度。
                </p>
              </div>
              <div className="bg-bg-canvas p-4 rounded-lg border border-border-subtle flex flex-col items-center justify-center min-w-[240px]">
                <div className="text-xs text-text-secondary uppercase tracking-widest mb-1">Calculation Formula</div>
                <div className="text-headings-2xl text-text-brand tracking-tighter">
                  Y = 2 × Ceil(X / 10) + X
                </div>
                <div className="text-[10px] text-text-disabled mt-2">X = Font Size (px) | Y = Line Height (px)</div>
              </div>
            </div>

            {/* Line Height Examples Table */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { x: 11, y: 15 },
                { x: 12, y: 16 },
                { x: 14, y: 18 },
                { x: 16, y: 20 },
                { x: 18, y: 22 },
                { x: 20, y: 24 },
                { x: 24, y: 30 },
                { x: 30, y: 36 },
                { x: 36, y: 44 },
                { x: 48, y: 58 }
              ].map((item) => (
                <div key={item.x} className="bg-bg-canvas/50 border border-border-subtle/30 rounded-lg p-3 flex flex-col items-center">
                  <div className="text-[10px] text-text-disabled uppercase font-bold mb-1">{item.x}px</div>
                  <div className="text-lg font-black text-text-primary">{item.y}px</div>
                  <div className="text-[9px] text-text-brand/60 mt-1 font-mono">LH: {item.y}</div>
                </div>
              ))}
            </div>

            {/* Headings */}
            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4 border-b border-border-subtle pb-2 flex items-center gap-2">
                <TypeOutline size={16} /> 标题系统 (Headings - 600/900 Weight)
              </h3>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-headings-2xl text-text-primary">文字-标题-特大 ABCd <span className="text-text-brand">24px 900</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-headings-2xl</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-headings-lg text-text-primary">文字-标题-大 ABCd <span className="text-text-brand">18px 600</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-headings-lg</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-headings-base text-text-primary">文字-标题-中 ABCd <span className="text-text-brand">16px 600</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-headings-base</span>
                </div>
                <div className="flex items-baseline justify-between pb-2">
                  <div className="text-headings-tiny text-text-primary">文字-标题-最小 ABCd <span className="text-text-brand">11px 600</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-headings-tiny</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4 border-b border-border-subtle pb-2 flex items-center gap-2">
                <TypeOutline size={16} /> 正文系统 (Body - 400 Weight)
              </h3>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-login-page-heading-xl text-text-primary">文字-大正文/登录标题 ABCd <span className="text-text-brand">18px 400</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-login-page-heading-xl</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-body-lg text-text-primary">文字-正文-一级 ABCd <span className="text-text-brand">16px 400</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-body-lg</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-body-base text-text-primary">文字-正文-二级 ABCd <span className="text-text-brand">14px 400</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-body-base</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-border-subtle/30 pb-4">
                  <div className="text-body-sm text-text-primary">文字-正文-辅助 ABCd <span className="text-text-brand">12px 400</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-body-sm</span>
                </div>
                <div className="flex items-baseline justify-between pb-2">
                  <div className="text-body-xs text-text-primary">文字-正文-最小 ABCd <span className="text-text-brand">11px 400</span></div>
                  <span className="font-mono text-xs text-text-secondary">text-body-xs</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Typography & Text Colors */}
        <section>
          <SectionTitle description="包含品牌强调色以及基于纯白 (#FFFFFF) 的透明度系统。注意：25%透明度仅建议用于禁用状态或装饰性元素，不应用于可读文本。">
            2. 文字与图标色 (Text & Icon Colors)
          </SectionTitle>
          
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div className="bg-bg-surface-1 p-6 rounded-2xl ">
              <h3 className="text-headings-2xl text-text-brand mb-2">Brand Text</h3>
              <div className="font-mono text-sm text-text-secondary mb-4">#FF6C44</div>
              <p className="text-sm text-text-secondary font-medium">用于赔率、余额、链接等需要强调的业务数据。</p>
            </div>
          </div>

          <div className="bg-bg-surface-1 rounded-2xl  overflow-hidden">
            <TextOpacityRow label="一 文字 & 图标 (Primary Text)" opacity="#FFFFFF 100%" className="text-text-primary" />
            <TextOpacityRow label="二 文字 & 图标 (Secondary Text)" opacity="#FFFFFF 50%" className="text-text-secondary" />
            <TextOpacityRow label="三 文字 & 图标 (Disabled/Decorative)" opacity="#FFFFFF 25%" className="text-text-disabled" />
          </div>
        </section>

        {/* 3. Container Elevation */}
        <section>
          <SectionTitle description="深色模式下的空间层级（Elevation）。通过明度的递增来体现层级的抬升，比单纯增加透明度更清晰、性能更好。">
            3. 容器色与层级 (Container Elevation)
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Structural Backgrounds */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-6">基础结构 (Structural)</h3>
              <div className="grid grid-cols-2 gap-4">
                <ColorSwatch name="背景色 (Base)" hex="#0E0E0E" className="bg-bg-base border border-border-strong" />
                <ColorSwatch name="画布色 (Canvas)" hex="#141414" className="bg-bg-canvas" />
                <ColorSwatch name="顶部TAB (Nav)" hex="#0C0C0C" className="bg-bg-nav" />
                <ColorSwatch name="底部标签 (Tab)" hex="#202020" className="bg-bg-tab" />
              </div>
            </div>

            {/* Elevation Stack */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                <Layers size={16} /> 浮层体系 (Elevation Stack)
              </h3>
              <div className="bg-bg-canvas p-8 rounded-2xl  flex flex-col justify-center min-h-[300px]">
                <ElevationCard level="画布上一层 (Level 1)" hex="#262626" className="bg-bg-surface-1 h-24" zIndex={0} />
                <ElevationCard level="画布上二层 (Level 2)" hex="#373737" className="bg-bg-surface-2 h-24" zIndex={1} />
                <ElevationCard level="画布上三层 (Level 3)" hex="#474747" className="bg-bg-surface-3 h-24" zIndex={2} />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Brand & Semantic Colors (Dark Mode Adapted) */}
        <section>
          <SectionTitle description="在深色背景下重新校准的品牌色与功能色。浅色背景变体已调整为深色调，以适应暗黑模式。">
            4. 品牌与功能色 (Brand & Semantic)
          </SectionTitle>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4">品牌色 (Brand)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch name="基准色 (Primary)" hex="#FF6C44" className="bg-action-primary" />
                <ColorSwatch name="点击 (Active)" hex="#EA3D0F" className="bg-action-primary-active" />
                <ColorSwatch name="柔和背景 (Soft Bg)" hex="rgba(255,108,68,0.2)" className="bg-action-primary-soft" textColor="text-text-brand" />
                <div className="flex flex-col gap-2">
                  <div className="h-24 w-full rounded-xl shadow-elevated-1 flex items-end p-3 " style={{ background: 'linear-gradient(to bottom, #FF6C44 0%, #EA3D0F 100%)' }}>
                    <span className="font-mono text-xs font-semibold text-white">Gradient</span>
                  </div>
                  <div className="text-sm font-semibold text-text-primary">主按钮渐变 (CTA)</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4">成功 (Success)</h3>
                <div className="grid grid-cols-3 gap-4">
                  <ColorSwatch name="Base" hex="#52B82A" className="bg-action-success" />
                  <ColorSwatch name="Active" hex="#419421" className="bg-action-success-active" />
                  <ColorSwatch name="Dark Bg" hex="rgba(82,184,42,0.2)" className="bg-bg-feedback-success" textColor="text-action-success" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4">错误 (Error)</h3>
                <div className="grid grid-cols-3 gap-4">
                  <ColorSwatch name="Base" hex="#D92D20" className="bg-action-error" />
                  <ColorSwatch name="Active" hex="#B42318" className="bg-action-error-active" />
                  <ColorSwatch name="Dark Bg" hex="rgba(217,45,32,0.2)" className="bg-bg-feedback-error" textColor="text-action-error" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Border Radius (NEW) */}
        <section>
          <SectionTitle description="扩展后的圆角阶梯。遵循「同心圆法则 (Concentric Circles)」：外层圆角 = 内层圆角 + 间距 (Padding)。丰富的阶梯确保在复杂嵌套中视觉的绝对和谐。">
            5. 圆角系统 (Border Radius)
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Radius Scale */}
            <div className="bg-bg-surface-1 rounded-2xl  p-2">
              <RadiusCard size="极小圆角 (XS)" px="4px" twClass="rounded" desc="标签 (Tags)、提示框 (Tooltips)、复选框" />
              <RadiusCard size="小圆角 (SM)" px="6px" twClass="rounded-md" desc="小按钮、内部嵌套卡片、下拉菜单项" />
              <RadiusCard size="基础圆角 (MD)" px="8px" twClass="rounded-lg" desc="标准按钮、输入框、常规卡片 (原8px规范)" />
              <RadiusCard size="大圆角 (LG)" px="12px" twClass="rounded-xl" desc="中型卡片、列表容器、较大按钮" />
              <RadiusCard size="面板圆角 (XL)" px="16px" twClass="rounded-2xl" desc="标准面板、对话框、浮层 (原16px规范)" />
              <RadiusCard size="特大圆角 (2XL)" px="24px" twClass="rounded-3xl" desc="大型弹窗、底部抽屉 (Bottom Sheet)" />
              <RadiusCard size="胶囊型 (Pill)" px="999px" twClass="rounded-full" desc="状态标签、宽度自适应的文字按钮 (防椭圆变形)" isPill={true} />
              <RadiusCard size="圆形 (Circle)" px="50%" twClass="rounded-full aspect-square" desc="头像、宽高相等的纯图标按钮" isCircle={true} />
            </div>

            {/* Concentric Circles Demo */}
            <div className="space-y-6">
              <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1">
                <h3 className="text-headings-lg text-text-primary mb-4 flex items-center gap-2">
                  <Square size={18} className="text-text-brand" /> 同心圆法则演示
                </h3>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  当一个圆角容器嵌套在另一个圆角容器内时，为了视觉上的和谐，必须满足：<br/>
                  <code className="text-text-brand font-mono bg-action-primary-soft px-2 py-1 rounded mt-2 inline-block">内圆角 = 外圆角 - 间距 (Padding)</code>
                </p>

                {/* Demo 1: 24px outer, 16px padding, 8px inner */}
                <div className="mb-6">
                  <div className="text-xs text-text-secondary mb-2 font-mono">外层 24px (3xl) - 间距 16px (p-4) = 内层 8px (lg)</div>
                  <div className="bg-bg-surface-2 p-4 rounded-3xl ">
                    <div className="bg-action-primary-soft p-6 rounded-lg border border-border-primary flex items-center justify-center">
                      <span className="text-text-brand font-bold text-sm">完美嵌套 (Perfect Nesting)</span>
                    </div>
                  </div>
                </div>

                {/* Demo 2: 16px outer, 8px padding, 8px inner */}
                <div>
                  <div className="text-xs text-text-secondary mb-2 font-mono">外层 16px (2xl) - 间距 8px (p-2) = 内层 8px (lg)</div>
                  <div className="bg-bg-surface-2 p-2 rounded-2xl  w-2/3">
                    <div className="bg-bg-feedback-success p-4 rounded-lg border border-action-success/30 flex items-center justify-center">
                      <span className="text-action-success font-bold text-sm">紧凑嵌套 (Compact)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Spacing System (NEW) */}
        <section>
          <SectionTitle description="基于 4px 栅格的间距系统。保证页面节奏的韵律感和一致性。增加了设计师友好的规格命名，并优化了展示宽度，充分利用空间。">
            6. 间距系统 (Spacing System)
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8">
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1">
              <div className="grid grid-cols-[48px_80px_48px_64px_1fr] md:grid-cols-[56px_96px_56px_72px_1fr] gap-2 md:gap-4 items-center p-3 md:p-4 border-b border-border-subtle mb-2">
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Name</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Class</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pixels</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Rem</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">Visual</div>
              </div>
              
              <SpacingRow name="XXS" size="space-1" px="4px" rem="0.25rem" />
              <SpacingRow name="XS" size="space-2" px="8px" rem="0.5rem" />
              <SpacingRow name="SM" size="space-3" px="12px" rem="0.75rem" />
              <SpacingRow name="MD" size="space-4" px="16px" rem="1rem" />
              <SpacingRow name="LG" size="space-6" px="24px" rem="1.5rem" />
              <SpacingRow name="XL" size="space-8" px="32px" rem="2rem" />
              <SpacingRow name="2XL" size="space-12" px="48px" rem="3rem" />
              <SpacingRow name="3XL" size="space-16" px="64px" rem="4rem" />
            </div>

            {/* Spacing Application Examples */}
            <div className="space-y-6">
              <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-4">应用示例：卡片内部间距 (Card Padding)</h3>
                <div className="bg-bg-surface-2 p-6 rounded-xl  relative">
                  <div className="absolute top-0 left-0 w-full h-6 bg-action-primary-soft border-b border-border-primary flex items-center justify-center text-[10px] text-text-brand font-mono">p-6 (24px)</div>
                  <div className="absolute top-0 left-0 w-6 h-full bg-action-primary-soft border-r border-border-primary flex items-center justify-center text-[10px] text-text-brand font-mono" style={{ writingMode: 'vertical-rl' }}>p-6 (24px)</div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bg-surface-3 rounded-full shrink-0 relative">
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-action-primary-soft"></div>
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-[10px] text-text-brand font-mono bg-bg-canvas px-1 rounded translate-x-1/2 -translate-y-full">gap-4 (16px)</div>
                    </div>
                    <div className="flex-1 space-y-2 relative">
                      <div className="h-4 bg-bg-surface-3 rounded w-3/4"></div>
                      <div className="absolute left-0 top-4 w-full h-2 bg-action-primary-soft border-y border-border-primary flex items-center justify-center text-[10px] text-text-brand font-mono">space-y-2 (8px)</div>
                      <div className="h-3 bg-bg-surface-3 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide mb-4">应用示例：列表项间距 (List Item Gap)</h3>
                <div className="bg-bg-surface-2 p-4 rounded-xl  flex flex-col gap-3 relative">
                  <div className="h-10 bg-bg-surface-3 rounded-lg flex items-center px-3 text-sm text-text-secondary">List Item 1</div>
                  <div className="absolute left-1/2 top-14 -translate-x-1/2 w-10 h-3 bg-action-primary-soft border-y border-border-primary flex items-center justify-center text-[10px] text-text-brand font-mono z-10">gap-3 (12px)</div>
                  <div className="h-10 bg-bg-surface-3 rounded-lg flex items-center px-3 text-sm text-text-secondary">List Item 2</div>
                  <div className="absolute left-1/2 top-[108px] -translate-x-1/2 w-10 h-3 bg-action-primary-soft border-y border-border-primary flex items-center justify-center text-[10px] text-text-brand font-mono z-10">gap-3 (12px)</div>
                  <div className="h-10 bg-bg-surface-3 rounded-lg flex items-center px-3 text-sm text-text-secondary">List Item 3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Responsive Grid & Breakpoints (NEW) */}
        <section>
          <SectionTitle description="多端响应式断点与栅格系统。特别针对游戏卡片 (100x134 -> 118x158) 提供了等比例缩放 (Aspect Ratio) 方案，确保封面不裁切、不变形。">
            7. 响应式与栅格 (Grid & Breakpoints)
          </SectionTitle>

          <div className="space-y-8">
            {/* Breakpoints Table */}
            <div className="bg-bg-surface-1 rounded-2xl  overflow-hidden shadow-elevated-1">
              <div className="grid grid-cols-4 gap-4 p-4 md:p-6 border-b border-border-subtle bg-bg-surface-2/30">
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">设备 (Device)</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">断点 (Breakpoint)</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">列数 (Columns)</div>
                <div className="text-xs font-bold text-text-secondary uppercase tracking-wider">边距/间距 (Margin/Gutter)</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 md:p-6 border-b border-border-subtle/50 hover:bg-bg-surface-2/30 transition-colors">
                <div className="font-bold text-text-primary">Mobile <span className="text-text-secondary font-normal text-sm ml-2 hidden md:inline">(默认)</span></div>
                <div className="font-mono text-sm text-text-brand">&lt; 768px</div>
                <div className="text-sm text-text-primary font-medium">4 列</div>
                <div className="text-sm text-text-secondary">M: 16px / G: 12px</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 md:p-6 border-b border-border-subtle/50 hover:bg-bg-surface-2/30 transition-colors">
                <div className="font-bold text-text-primary">Tablet <span className="text-text-secondary font-normal text-sm ml-2 hidden md:inline">(md)</span></div>
                <div className="font-mono text-sm text-text-brand">≥ 768px</div>
                <div className="text-sm text-text-primary font-medium">8 列</div>
                <div className="text-sm text-text-secondary">M: 24px / G: 16px</div>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 md:p-6 hover:bg-bg-surface-2/30 transition-colors">
                <div className="font-bold text-text-primary">Desktop <span className="text-text-secondary font-normal text-sm ml-2 hidden md:inline">(lg)</span></div>
                <div className="font-mono text-sm text-text-brand">≥ 1024px</div>
                <div className="text-sm text-text-primary font-medium">12 列</div>
                <div className="text-sm text-text-secondary">M: Auto / G: 24px</div>
              </div>
            </div>

            {/* Game Card Aspect Ratio Demo */}
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1">
              <h3 className="text-headings-lg text-text-primary mb-2">游戏卡片等比例缩放 (Aspect Ratio)</h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed max-w-3xl">
                针对游戏封面的特殊尺寸需求，我们使用 <code className="text-text-brand font-mono bg-action-primary-soft px-1.5 py-0.5 rounded border border-border-primary">aspect-[100/134]</code> 锁定比例。
                移动端基准 100x134，桌面端基准 118x158。无论容器在栅格中如何拉伸，封面始终保持 1:1.34 的完美比例，绝不裁切变形。
              </p>
              
              <div className="space-y-10">
                {/* 固定尺寸对比 */}
                <div>
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4 border-b border-border-subtle pb-2">固定尺寸基准 (Fixed Size Reference)</h4>
                  <div className="flex flex-wrap gap-8 items-end">
                    {/* Mobile Size */}
                    <div className="flex flex-col gap-3">
                      <div className="w-[100px] aspect-[100/134] bg-bg-surface-2 rounded-xl  relative overflow-hidden group shadow-elevated-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-action-primary/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-text-primary font-bold text-sm">封面</div>
                      </div>
                      <div className="text-xs font-mono text-text-secondary bg-bg-canvas px-2 py-1 rounded  text-center">100 x 134</div>
                    </div>

                    {/* Desktop Size */}
                    <div className="flex flex-col gap-3">
                      <div className="w-[118px] aspect-[100/134] bg-bg-surface-2 rounded-xl  relative overflow-hidden group shadow-elevated-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-action-primary/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-text-primary font-bold text-base">封面</div>
                      </div>
                      <div className="text-xs font-mono text-text-secondary bg-bg-canvas px-2 py-1 rounded  text-center">118 x 158</div>
                    </div>
                  </div>
                </div>

                {/* 流式栅格对比 */}
                <div>
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-4 border-b border-border-subtle pb-2">流式响应式栅格 (Fluid Grid)</h4>
                  <p className="text-xs text-text-secondary mb-4">缩放浏览器窗口，观察卡片如何在不同断点下自适应宽度，同时保持高度比例完美一致。</p>
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6 p-4 md:p-6 bg-bg-canvas rounded-xl ">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-full aspect-[100/134] bg-bg-surface-2 rounded-xl  relative overflow-hidden group cursor-pointer hover:border-border-primary transition-colors shadow-md hover:shadow-primary-glow hover:-translate-y-1 duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-action-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          <div className="text-tiny md:text-xs font-bold text-white truncate">Game Title {i}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Button System (NEW) */}
        <section>
          <SectionTitle description="建立严格的“固定档位+规则绑定”机制，杜绝随意创造按钮。包含尺寸规范、变体状态矩阵，以及与“同心圆法则”深度绑定的圆角自适应规则。">
            8. 按钮规范系统 (Button System)
          </SectionTitle>

          <div className="space-y-8">
            {/* 8.1 尺寸基准 (Size Scale) */}
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1">
              <h3 className="text-headings-lg text-text-primary mb-2">8.1 绝对尺寸档位 (Size Tiers)</h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                全站按钮高度被严格限制在以下 4 个档位。绝对禁止使用 42px、38px 等非标尺寸。
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border-subtle text-xs text-text-secondary uppercase tracking-wider">
                      <th className="pb-3 font-bold w-24">规格 (Size)</th>
                      <th className="pb-3 font-bold w-32">高度 (Height)</th>
                      <th className="pb-3 font-bold w-48">字号 (Text)</th>
                      <th className="pb-3 font-bold w-32">内边距 (PX)</th>
                      <th className="pb-3 font-bold">使用场景 (Usage)</th>
                      <th className="pb-3 font-bold text-right">示例 (Demo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle/50">
                    <tr>
                      <td className="py-4 font-black text-text-brand">Large (L)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">48px (h-12)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">16px Bold / 24px</td>
                      <td className="py-4 font-mono text-sm text-text-primary">24px (px-6)</td>
                      <td className="py-4 text-sm text-text-secondary">全局主行动点 (Main CTA)、登录注册、底部悬浮操作区。</td>
                      <td className="py-4 text-right">
                        <button className="h-12 px-6 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-xl text-button-l shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">Button L</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-black text-text-brand">Medium (M)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">40px (h-10)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">14px Bold / 20px</td>
                      <td className="py-4 font-mono text-sm text-text-primary">16px (px-4)</td>
                      <td className="py-4 text-sm text-text-secondary">标准按钮。用于大多数表单提交、弹窗确认/取消、卡片主操作。</td>
                      <td className="py-4 text-right">
                        <button className="h-10 px-4 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-lg text-button-m shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">Button M</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-black text-text-brand">Small (S)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">32px (h-8)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">12px Bold / 16px</td>
                      <td className="py-4 font-mono text-sm text-text-primary">12px (px-3)</td>
                      <td className="py-4 text-sm text-text-secondary">局部操作。如列表项跟随按钮、表格内操作、次级筛选器。</td>
                      <td className="py-4 text-right">
                        <button className="h-8 px-3 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-md text-button-s shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">Button S</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-black text-text-brand">X-Small (XS)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">24px (h-6)</td>
                      <td className="py-4 font-mono text-sm text-text-primary">11px Bold / 14px</td>
                      <td className="py-4 font-mono text-sm text-text-primary">8px (px-2)</td>
                      <td className="py-4 text-sm text-text-secondary">极致紧凑场景。如 Tag 标签式按钮、极小卡片内的附加操作。</td>
                      <td className="py-4 text-right">
                        <button className="h-6 px-2 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded text-button-xs shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">Btn XS</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8.2 变体与状态矩阵 (Variants & States) */}
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 overflow-x-auto">
              <h3 className="text-headings-lg text-text-primary mb-2">8.2 变体与状态矩阵 (Variants & States Matrix)</h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                所有按钮必须具备完整的交互状态反馈。禁止出现“悬浮没反应”或“禁用态看不清”的情况。
                <br/><span className="text-action-warning">注意：同组按钮（如弹窗底部的确认和取消）必须保持相同的圆角规则，禁止混用 Pill 和 Rounded。</span>
              </p>

              <div className="min-w-[850px]">
                <div className="grid grid-cols-6 gap-4 mb-4 text-xs font-bold text-text-secondary uppercase tracking-wider border-b border-border-subtle pb-2">
                  <div className="col-span-1">变体 (Variant)</div>
                  <div className="text-center">Default</div>
                  <div className="text-center">Hover</div>
                  <div className="text-center">Active (Pressed)</div>
                  <div className="text-center">Disabled</div>
                  <div className="text-center text-text-brand">交互预览 (Preview)</div>
                </div>

                {/* Primary */}
                <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-border-subtle/50">
                  <div>
                    <div className="font-bold text-text-primary">Primary CTA</div>
                    <div className="text-xs text-text-secondary">渐变强调，全局唯一</div>
                  </div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-[image:var(--color-button-brand-primary)] text-white font-bold rounded-lg text-sm shadow-[0_0_15px_rgba(255,108,68,0.3)]">Primary</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-gradient-to-b from-[#FF8566] to-[#F0552D] text-white font-bold rounded-lg text-sm shadow-[0_0_20px_rgba(255,108,68,0.5)]">Hover</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-gradient-to-b from-[#E65A33] to-[#D13008] text-white font-bold rounded-lg text-sm scale-[0.97] transition-all duration-75 shadow-[0_0_10px_rgba(255,108,68,0.4)]">Active</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-[image:var(--color-button-brand-primary)] text-white font-bold rounded-lg text-sm opacity-50 cursor-not-allowed">Disabled</button></div>
                  <div className="flex justify-center border-l border-border-subtle/50 pl-4"><button className="h-10 px-4 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-lg text-sm shadow-[0_0_15px_rgba(255,108,68,0.3)] hover:shadow-[0_0_20px_rgba(255,108,68,0.5)] active:shadow-[0_0_10px_rgba(255,108,68,0.4)] active:scale-[0.97] transition-all duration-75">Try Me</button></div>
                </div>

                {/* Secondary */}
                <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-border-subtle/50">
                  <div>
                    <div className="font-bold text-text-primary">Secondary</div>
                    <div className="text-xs text-text-secondary">次级操作，深灰填充</div>
                  </div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-bg-surface-2  text-text-primary font-bold rounded-lg text-sm">Secondary</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-bg-surface-3  text-text-primary font-bold rounded-lg text-sm">Hover</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-bg-surface-2 brightness-90  text-text-primary font-bold rounded-lg text-sm scale-[0.97] transition-all duration-75">Active</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-bg-surface-2  text-text-secondary font-bold rounded-lg text-sm opacity-50 cursor-not-allowed">Disabled</button></div>
                  <div className="flex justify-center border-l border-border-subtle/50 pl-4"><button className="h-10 px-4 bg-bg-surface-2 hover:bg-bg-surface-3 active:bg-bg-surface-2 active:brightness-90  text-text-primary font-bold rounded-lg text-sm active:scale-[0.97] transition-all duration-75">Try Me</button></div>
                </div>

                {/* Ghost */}
                <div className="grid grid-cols-6 gap-4 items-center py-4 border-b border-border-subtle/50">
                  <div>
                    <div className="font-bold text-text-primary">Ghost / Outline</div>
                    <div className="text-xs text-text-secondary">幽灵按钮，透明底色</div>
                  </div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-transparent border border-border-strong text-text-primary font-bold rounded-lg text-sm">Ghost</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-white/5 border border-border-strong text-text-primary font-bold rounded-lg text-sm">Hover</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-white/10 border border-border-strong text-text-primary font-bold rounded-lg text-sm scale-[0.97] transition-all duration-75">Active</button></div>
                  <div className="flex justify-center"><button className="h-10 px-4 bg-transparent border border-border-strong text-text-secondary font-bold rounded-lg text-sm opacity-50 cursor-not-allowed">Disabled</button></div>
                  <div className="flex justify-center border-l border-border-subtle/50 pl-4"><button className="h-10 px-4 bg-transparent hover:bg-white/5 active:bg-white/10 border border-border-strong text-text-primary font-bold rounded-lg text-sm active:scale-[0.97] transition-all duration-75">Try Me</button></div>
                </div>
              </div>
            </div>

            {/* 8.3 圆角环境绑定 (Contextual Radius) */}
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1">
              <h3 className="text-headings-lg text-text-primary mb-2">8.3 按钮圆角的环境绑定 (Contextual Radius)</h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed max-w-3xl">
                按钮的圆角<strong className="text-action-error">绝对不允许</strong>脱离环境单独设定。必须严格遵循“同心圆法则”：<br/>
                <code className="text-text-brand font-mono bg-action-primary-soft px-1.5 py-0.5 rounded border border-border-primary">按钮圆角 = 容器圆角 - 容器内边距 (Padding)</code>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 场景 A: 嵌套在卡片中 */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest">场景 A: 嵌套在卡片中</h4>
                  <div className="bg-bg-surface-2 p-4 rounded-2xl ">
                    <div className="h-24 bg-bg-surface-3 rounded-xl mb-4 flex items-center justify-center text-text-secondary text-sm">Content Area</div>
                    <div className="flex gap-3">
                      <button className="flex-1 h-10 bg-bg-surface-2 hover:bg-bg-surface-3 active:bg-bg-surface-2 active:brightness-90 text-text-primary font-bold rounded-xl text-sm active:scale-[0.97] transition-all duration-75">取消</button>
                      <button className="flex-1 h-10 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-xl text-sm shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">确认提交</button>
                    </div>
                  </div>
                  <div className="text-xs text-text-secondary bg-bg-canvas p-3 rounded-lg ">
                    <span className="text-action-success font-bold">正确示范：</span><br/>
                    容器圆角 16px (2xl)，Padding 16px (p-4)。<br/>
                    按钮圆角应为 16 - 16 = 0？不，当计算结果 ≤0 时，取最小值 4px 或 8px。这里为了视觉饱满，容器内部统一使用了 <code className="text-text-brand">12px (xl)</code>，按钮也必须跟随使用 <code className="text-text-brand">12px (xl)</code>。
                  </div>
                </div>

                {/* 场景 B: 胶囊型容器 */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest">场景 B: 胶囊型容器 (如搜索/筛选)</h4>
                  <div className="bg-bg-surface-2 p-1.5 rounded-full  flex items-center mt-4">
                    <div className="flex-1 px-4 text-text-secondary text-sm">输入搜索内容...</div>
                    <button className="h-10 px-6 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-full text-sm shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">搜索</button>
                  </div>
                  <div className="text-xs text-text-secondary bg-bg-canvas p-3 rounded-lg  mt-4">
                    <span className="text-action-success font-bold">正确示范：</span><br/>
                    容器是 Pill (999px) 全圆角。<br/>
                    内部的按钮**必须**也是 Pill (999px) 全圆角，形成完美的嵌套。绝对禁止在胶囊容器里放一个 8px 圆角的按钮。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Montserrataction & Shadows (NEW) */}
        <section>
          <SectionTitle description="阴影在扁平化布局中起到定义'海拔高度'的作用。深色模式下，我们结合背景提亮、微光边框和纯黑大半径阴影来模拟悬浮感。品牌色外发光 (Glow) 仅用于核心转化路径或选中状态。">
            9. 交互与阴影 (Montserrataction & Shadows)
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard Elevation */}
            <div className="bg-bg-surface-1 p-8 rounded-2xl  shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bg-surface-3 flex items-center justify-center mb-2">
                <Layers className="w-5 h-5 text-text-secondary" />
              </div>
              <h4 className="text-headings-base text-text-primary">Standard Elevation</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Used for all game cards and content containers.<br/>
                <span className="text-text-brand/80 mt-1 inline-block">纯黑大半径阴影 + 微弱边框</span>
              </p>
            </div>

            {/* Active / Glow State */}
            <div className="bg-bg-surface-1 p-8 rounded-2xl border border-action-primary shadow-[0_0_24px_rgba(255,108,68,0.15)] flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-action-primary-soft"></div>
              <div className="w-12 h-12 rounded-full bg-action-primary-soft flex items-center justify-center mb-2 relative z-10 shadow-[0_0_16px_rgba(255,108,68,0.4)]">
                <CheckCircle2 className="w-5 h-5 text-text-brand" />
              </div>
              <h4 className="text-headings-base text-text-brand relative z-10">Active / Glow State</h4>
              <p className="text-xs text-text-secondary leading-relaxed relative z-10">
                Used for active selections and primary CTAs.<br/>
                <span className="text-text-brand/80 mt-1 inline-block">品牌色弥散发光 + 内部微光背景</span>
              </p>
            </div>

            {/* Hover Feedback */}
            <div className="bg-bg-surface-1 p-8 rounded-2xl  shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-text-50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.9)] cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-bg-surface-3 flex items-center justify-center mb-2 group-hover:bg-bg-surface-2 transition-colors">
                <MousePointer2 className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
              </div>
              <h4 className="text-headings-base text-text-primary group-hover:text-white transition-colors">Hover Feedback</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Subtle border color change and scale transform.<br/>
                <span className="text-text-brand/80 mt-1 inline-block">(请将鼠标悬浮在此卡片上体验)</span>
              </p>
            </div>
          </div>
        </section>

        {/* 10. Foundation Components (NEW) */}
        <section>
          <SectionTitle description="沉淀大厂最佳实践。不仅定义组件长什么样，更解释“为什么这么做”。涵盖导航、数据录入、浮层等高频基础组件。">
            10. 基础组件规范 (Foundation Components)
          </SectionTitle>

          <div className="space-y-8">
            
            {/* 10.1 Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Nav */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Menu className="w-5 h-5 text-text-brand" /> 顶部导航栏 (Top App Bar)
                </h3>
                
                {/* Demo */}
                <div className="relative h-40 bg-bg-canvas rounded-xl  overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-14 bg-bg-nav/80 backdrop-blur-md border-b border-border-subtle flex items-center justify-between px-4 z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-action-primary to-action-primary-active flex items-center justify-center text-white font-black text-xs">RN</div>
                      <span className="font-bold text-text-primary">首页</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Search className="w-5 h-5 text-text-secondary" />
                      <div className="relative">
                        <Bell className="w-5 h-5 text-text-secondary" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-action-error"></span>
                      </div>
                    </div>
                  </div>
                  {/* Mock content to show blur */}
                  <div className="p-4 pt-20 space-y-3 opacity-30">
                    <div className="h-20 bg-bg-surface-2 rounded-lg"></div>
                    <div className="h-20 bg-bg-surface-2 rounded-lg"></div>
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">毛玻璃效果 (Backdrop Blur)</strong>：深色模式下，纯色导航栏会显得极其沉闷。使用半透明背景加高斯模糊，能在长列表滚动时透出底层内容的色彩轮廓，保持空间层次感（Z-axis），这是 Apple HIG 强烈推荐的做法。<br/>
                    <strong className="text-text-primary">高度规范</strong>：移动端通常固定在 44px-56px，确保触控热区达标。
                  </p>
                </div>
              </div>

              {/* Bottom Tab Bar */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Home className="w-5 h-5 text-text-brand" /> 底部标签栏 (Bottom Tab Bar)
                </h3>
                
                {/* Demo */}
                <div className="relative h-40 bg-bg-canvas rounded-xl  overflow-hidden flex flex-col justify-end">
                  <div className="h-16 bg-bg-tab border-t border-border-subtle flex items-center justify-around px-2 pb-safe">
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <Home className="w-6 h-6 text-text-brand" />
                      <span className="text-[10px] font-bold text-text-brand">大厅</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <Gamepad2 className="w-6 h-6 text-text-secondary" />
                      <span className="text-[10px] font-medium text-text-secondary">游戏</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <User className="w-6 h-6 text-text-secondary" />
                      <span className="text-[10px] font-medium text-text-secondary">我的</span>
                    </div>
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">拇指热区 (Thumb Zone)</strong>：根据人体工学，屏幕底部是单手握持时最容易触达的区域。核心导航必须放在这里。<br/>
                    <strong className="text-text-primary">状态对比</strong>：选中态必须有极强的视觉对比（品牌色 + 粗体），未选中态需压暗（50% 透明度），降低视觉噪音。
                  </p>
                </div>
              </div>
            </div>

            {/* 10.2 Data Entry */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Search Box */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Search className="w-5 h-5 text-text-brand" /> 搜索框 (Search Input)
                </h3>
                
                {/* Demo */}
                <div className="p-6 bg-bg-canvas rounded-xl  flex items-center justify-center">
                  <div className="w-full max-w-sm h-10 bg-bg-surface-2 rounded-full  flex items-center px-4 focus-within:border-action-primary focus-within:ring-1 focus-within:ring-action-primary transition-all">
                    <Search className="w-4 h-4 text-text-secondary mr-2" />
                    <input type="text" placeholder="搜索游戏、赛事..." className="flex-1 bg-transparent border-none outline-none text-sm text-text-primary placeholder:text-text-secondary" />
                    <XCircle className="w-4 h-4 text-text-disabled hover:text-text-secondary cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">视觉启示 (Affordance)</strong>：搜索框几乎清一色使用<strong className="text-text-brand">胶囊圆角 (Pill)</strong>。这能在潜意识里将其与普通的表单输入框（通常是 8px/12px 圆角）区分开来，暗示这是一个全局探索入口。<br/>
                    <strong className="text-text-primary">即时反馈</strong>：右侧必须提供一键清除 (Clear) 按钮，提升移动端输入效率。
                  </p>
                </div>
              </div>

              {/* Dropdown / Select */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <ChevronDown className="w-5 h-5 text-text-brand" /> 下拉筛选 (Dropdown)
                </h3>
                
                {/* Demo */}
                <div className="p-6 bg-bg-canvas rounded-xl  flex flex-col items-center justify-center h-48 relative">
                  {/* Trigger */}
                  <button className="h-10 px-4 bg-bg-surface-2 hover:bg-bg-surface-3 active:bg-bg-surface-2 active:brightness-90 rounded-lg flex items-center gap-2 text-sm font-medium text-text-primary active:scale-[0.97] transition-all duration-75">
                    全部游戏类型 <ChevronDown className="w-4 h-4 text-text-secondary" />
                  </button>
                  
                  {/* Popover Mock */}
                  <div className="absolute top-20 w-48 bg-bg-surface-2 rounded-xl  shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden z-20">
                    <div className="p-1">
                      <div className="px-3 py-2 text-sm text-text-brand font-bold bg-action-primary-soft rounded-lg cursor-pointer flex justify-between items-center">
                        全部游戏类型 <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="px-3 py-2 text-sm text-text-primary hover:bg-bg-surface-3 rounded-lg cursor-pointer transition-colors">体育赛事</div>
                      <div className="px-3 py-2 text-sm text-text-primary hover:bg-bg-surface-3 rounded-lg cursor-pointer transition-colors">真人娱乐</div>
                    </div>
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">上下文保留 (Context Retention)</strong>：使用浮层而不是页面跳转，能大幅减少用户的认知负荷。<br/>
                    <strong className="text-text-primary">Z轴海拔</strong>：下拉菜单必须带有极强的阴影 (Standard Elevation)，确保它在视觉上完全凌驾于页面其他元素之上。选中项需用品牌色高亮。
                  </p>
                </div>
              </div>
            </div>

            {/* 10.3 Overlays & Modals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Center Modal */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-text-brand" /> 中心弹窗 (Center Modal)
                </h3>
                
                {/* Demo */}
                <div className="relative h-64 bg-bg-canvas rounded-xl  overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-overlay-scrim backdrop-blur-sm z-10"></div>
                  <div className="relative z-20 w-64 bg-bg-surface-2 rounded-2xl  shadow-[0_16px_40px_rgba(0,0,0,0.8)] p-5 flex flex-col gap-4">
                    <div className="text-center space-y-2">
                      <h4 className="text-headings-base text-text-primary">确认退出登录？</h4>
                      <p className="text-xs text-text-secondary">退出后将无法接收最新的赛事通知和中奖信息。</p>
                    </div>
                    <div className="flex gap-3 mt-2">
                      <button className="flex-1 h-10 bg-bg-surface-2 hover:bg-bg-surface-3 active:bg-bg-surface-2 active:brightness-90 text-text-primary font-bold rounded-xl text-button-m active:scale-[0.97] transition-all duration-75">取消</button>
                      <button className="flex-1 h-10 bg-action-error text-white font-bold rounded-xl text-button-m hover:bg-action-error-active active:scale-[0.97] transition-all duration-75 shadow-elevated-1 shadow-action-error/20">确认退出</button>
                    </div>
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">强阻断 (Blocking)</strong>：中心弹窗用于极其重要的二次确认。必须配备 <code className="text-text-brand">bg-overlay-scrim</code> 的全屏遮罩，强制聚焦用户视线。<br/>
                    <strong className="text-text-primary">同心圆法则</strong>：注意弹窗容器是 24px (2xl) 圆角，内部按钮严格使用了 12px (xl) 圆角，保持视觉平行。
                  </p>
                </div>
              </div>

              {/* Bottom Sheet */}
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Layers className="w-5 h-5 text-text-brand" /> 底部抽屉 (Bottom Sheet)
                </h3>
                
                {/* Demo */}
                <div className="relative h-64 bg-bg-canvas rounded-xl  overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-overlay-scrim backdrop-blur-sm z-10"></div>
                  <div className="relative z-20 w-full bg-bg-surface-2 rounded-t-3xl border-t border-border-subtle shadow-[0_-8px_30px_rgba(0,0,0,0.6)] p-6 pt-3 flex flex-col gap-4">
                    {/* Drag Handle */}
                    <div className="w-12 h-1.5 bg-border-subtle rounded-full mx-auto mb-2"></div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-headings-lg text-text-primary">快捷充值</h4>
                      <X className="w-5 h-5 text-text-secondary cursor-pointer" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {['$100', '$500', '$1000'].map(amt => (
                        <button
                          key={amt}
                          onClick={() => setActiveAmount10_3(amt)}
                          className={`h-12 rounded-xl border font-bold flex items-center justify-center text-sm transition-all active:scale-[0.98] ${
                            activeAmount10_3 === amt
                              ? 'bg-action-primary-soft border-action-primary text-text-brand'
                              : 'bg-bg-surface-1 border-border-subtle text-text-primary hover:bg-bg-surface-2'
                          }`}
                        >
                          {amt}
                        </button>
                      ))}
                    </div>
                    <button className="w-full h-12 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-xl text-base mt-2 shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">立即充值</button>
                  </div>
                </div>

                {/* Rationale */}
                <div className="bg-bg-surface-2 p-4 rounded-xl border-l-4 border-action-primary">
                  <h4 className="text-sm font-bold text-text-primary mb-1">设计依据 (Rationale)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">单手操作友好 (One-Handed Use)</strong>：现代 App 替代复杂中心弹窗的首选方案。从底部滑出，完美契合大屏手机的单手操作。<br/>
                    <strong className="text-text-primary">拖拽指示器 (Drag Handle)</strong>：顶部必须有一个 1.5px 高的胶囊条，暗示用户可以向下拖拽关闭，符合物理直觉。
                  </p>
                </div>
              </div>
            </div>

            {/* 10.4 Overlay Sizing Guidelines (NEW) */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-text-brand" /> 弹窗与浮层尺寸规范 (Overlay Sizing Guidelines)
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Center Modal */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-headings-base text-text-primary flex items-center gap-2">
                      <Square className="w-4 h-4 text-text-brand" /> 中心弹窗 (Center Modal)
                    </h4>
                    <div className="relative h-64 bg-bg-canvas rounded-xl  overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-overlay-scrim backdrop-blur-sm z-10"></div>
                      <div className="relative z-20 w-[80%] max-w-[280px] bg-bg-surface-2 rounded-2xl  shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[80%]">
                        <div className="p-4 border-b border-border-subtle shrink-0">
                          <h5 className="font-bold text-text-primary text-sm text-center">固定宽度，动态高度</h5>
                        </div>
                        <div className="p-4 overflow-y-auto text-xs text-text-secondary space-y-2">
                          <p>宽度：移动端通常为 <code className="text-text-brand">w-[calc(100vw-32px)]</code> 或最大 <code className="text-text-brand">320px-400px</code>。避免过宽导致视线移动过长。</p>
                          <p>高度：随内容自适应，但必须设置最大高度（如 <code className="text-text-brand">max-h-[80vh]</code>）。</p>
                          <p>滚动：内容过多时，头部和底部操作区固定，中间内容区滚动 (<code className="text-text-brand">overflow-y-auto</code>)。</p>
                        </div>
                        <div className="p-3 border-t border-border-subtle shrink-0 flex justify-center">
                          <button className="w-full h-8 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white rounded-lg text-xs font-bold shadow-primary-glow active:scale-[0.97] transition-all duration-75">确定</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Toast / Notification */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-headings-base text-text-primary flex items-center gap-2">
                      <Info className="w-4 h-4 text-text-brand" /> 轻提示 (Toast / Notification)
                    </h4>
                    <div className="relative h-64 bg-bg-canvas rounded-xl  overflow-hidden flex flex-col items-center justify-start pt-8 gap-4">
                      {/* Single line toast */}
                      <div className="w-[90%] max-w-[300px] min-h-[48px] bg-bg-surface-3 rounded-xl  shadow-elevated-1 flex items-center px-4">
                        <CheckCircle2 className="w-4 h-4 text-action-success shrink-0 mr-2" />
                        <span className="text-xs text-text-primary font-medium">操作成功（单行文本）</span>
                      </div>
                      {/* Multi line toast */}
                      <div className="w-[90%] max-w-[300px] min-h-[48px] bg-bg-surface-3 rounded-xl  shadow-elevated-1 flex items-start p-4">
                        <AlertTriangle className="w-4 h-4 text-action-warning shrink-0 mr-2 mt-0.5" />
                        <span className="text-xs text-text-primary font-medium leading-relaxed">网络连接不稳定，请检查您的网络设置后重试。（多行文本，高度自适应）</span>
                      </div>
                    </div>
                    <div className="text-xs text-text-secondary space-y-2 mt-2">
                      <p>宽度：通常限制最大宽度（如 <code className="text-text-brand">max-w-sm</code>），避免横跨整个屏幕。</p>
                      <p>高度：<strong className="text-text-primary">必须设置最小高度</strong>（如 <code className="text-text-brand">min-h-[48px]</code> 或 <code className="text-text-brand">56px</code>）。</p>
                      <p>原因：即使只有一行字，太矮的 Toast 会显得单薄廉价，且如果带有“撤销”等操作按钮，过矮的高度会不满足 44px 的最小触控热区标准。多行文本则向下撑开高度。</p>
                    </div>
                  </div>

                  {/* Bottom Sheet */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-headings-base text-text-primary flex items-center gap-2">
                      <Layers className="w-4 h-4 text-text-brand" /> 底部抽屉 (Bottom Sheet)
                    </h4>
                    <div className="relative h-64 bg-bg-canvas rounded-xl  overflow-hidden flex flex-col justify-end">
                      <div className="absolute inset-0 bg-overlay-scrim backdrop-blur-sm z-10"></div>
                      <div className="relative z-20 w-full bg-bg-surface-2 rounded-t-3xl border-t border-border-subtle shadow-[0_-8px_30px_rgba(0,0,0,0.6)] flex flex-col h-[85%]">
                        <div className="w-12 h-1.5 bg-border-subtle rounded-full mx-auto mt-3 mb-2 shrink-0"></div>
                        <div className="px-6 pb-2 border-b border-border-subtle shrink-0">
                          <h5 className="font-bold text-text-primary text-sm">游戏筛选</h5>
                        </div>
                        <div className="p-6 overflow-y-auto text-xs text-text-secondary space-y-4">
                          <div className="h-8 bg-bg-surface-3 rounded-lg"></div>
                          <div className="h-8 bg-bg-surface-3 rounded-lg"></div>
                          <div className="h-8 bg-bg-surface-3 rounded-lg"></div>
                          <div className="h-8 bg-bg-surface-3 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-text-secondary space-y-2 mt-2">
                      <p>宽度：移动端 <code className="text-text-brand">100%</code>，平板/桌面端通常限制最大宽度并居中。</p>
                      <p>高度：随内容自适应，但<strong className="text-text-primary">绝对不能达到 100% 屏幕高度</strong>。</p>
                      <p>最高点：通常最高限制在 <code className="text-text-brand">90vh</code> 或距离顶部留出安全区+24px的间距。必须露出背后的半透明遮罩，给用户“我还在当前页面，向下滑动即可关闭”的明确心理暗示。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10.5 Segmented Control / Tabs (NEW) */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 flex flex-col gap-6">
                <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                  <Layers className="w-5 h-5 text-text-brand" /> 分段控制器 / 标签栏 (Segmented Control)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Bad Example */}
                  <div className="flex flex-col gap-3">
                    <div className="text-sm font-bold text-action-error flex items-center gap-1"><XCircle className="w-4 h-4"/> 反面教材 (Zero-Padding Trap)</div>
                    <div className="p-6 bg-bg-canvas rounded-xl border border-action-error/30 flex items-center justify-center">
                      {/* 模拟截图中的错误做法：0 padding, 圆角割裂 */}
                      <div className="w-full max-w-sm h-12 bg-bg-surface-2 rounded-xl flex">
                        <div className="flex-1 bg-[image:var(--color-button-brand-primary)] rounded-l-xl flex items-center justify-center text-white font-bold text-sm gap-2">
                          <Trophy className="w-4 h-4" /> High Roller
                        </div>
                        <div className="flex-1 flex items-center justify-center text-text-secondary font-medium text-sm gap-2">
                          <Layers className="w-4 h-4" /> Casino
                        </div>
                        <div className="flex-1 flex items-center justify-center text-text-secondary font-medium text-sm gap-2">
                          <Circle className="w-4 h-4" /> Sports
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary">
                      <strong className="text-action-error">问题所在：</strong>滑块贴死边缘导致空间逼仄；左侧滑块被迫变成“左圆右直”的畸形怪状，破坏了组件的独立性。
                    </p>
                  </div>

                  {/* Good Example */}
                  <div className="flex flex-col gap-3">
                    <div className="text-sm font-bold text-action-success flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> 最佳实践 (Track & Slider)</div>
                    <div className="p-6 bg-bg-canvas rounded-xl border border-action-success/30 flex items-center justify-center">
                      {/* 正确做法：4px padding, 同心圆法则 (外12px, 内8px) */}
                      <div className="w-full max-w-sm h-12 bg-bg-surface-2 rounded-xl p-1 flex relative">
                        {[
                          { id: 'High Roller', icon: Trophy },
                          { id: 'Casino', icon: Layers },
                          { id: 'Sports', icon: Circle }
                        ].map(tab => {
                          const isActive = activeTab10_5 === tab.id;
                          const Icon = tab.icon;
                          return (
                            <div
                              key={tab.id}
                              onClick={() => setActiveTab10_5(tab.id)}
                              className={`flex-1 flex items-center justify-center text-sm gap-2 relative z-10 transition-all duration-200 cursor-pointer rounded-lg ${
                                isActive
                                  ? 'bg-[image:var(--color-button-brand-primary)] text-white font-bold shadow-md'
                                  : 'text-text-secondary hover:text-text-primary font-medium'
                              }`}
                            >
                              <Icon className="w-4 h-4" /> {tab.id}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary">
                      <strong className="text-action-success">设计依据：</strong>引入 <code className="text-text-brand">4px (p-1)</code> 的内边距，形成“轨道与滑块”的物理隐喻。严格遵守同心圆法则（外容器 12px - 内边距 4px = 滑块 8px），滑块保持完整的圆角矩形，视觉呼吸感极佳。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 11. Component Application Examples */}
        <section>
          <SectionTitle description="深色模式下的实际组件渲染效果。结合了最新的圆角、间距、弹窗尺寸与分段控制器规范。">
            11. 场景演示 (Component Examples)
          </SectionTitle>

          <div className="space-y-8">
            {/* 11.1 Page & Surface Layout (NEW) */}
            <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl shadow-elevated-1 flex flex-col gap-8">
              <h3 className="text-headings-lg text-text-primary flex items-center gap-2">
                <Layout className="w-5 h-5 text-text-brand" /> 页面与容器规范 (Page & Surface Layout)
              </h3>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Page Canvas Spec */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest">1. Page Canvas</h4>
                    <span className="text-[10px] bg-action-primary-soft text-text-brand px-2 py-0.5 rounded font-bold">BASE LAYER</span>
                  </div>
                  <div className="relative aspect-video bg-bg-canvas rounded-2xl border border-border-subtle overflow-hidden flex flex-col">
                    {/* Annotation Layer */}
                    <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-border-primary rounded-2xl m-4 flex items-start justify-start p-2">
                      <div className="bg-action-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold">spacing/16 (Margin)</div>
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col gap-4">
                      <div className="h-8 w-1/3 bg-bg-surface-1 rounded-lg animate-pulse"></div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-bg-surface-1 rounded-xl"></div>
                        <div className="bg-bg-surface-1 rounded-xl"></div>
                      </div>
                    </div>

                    <div className="p-4 bg-bg-surface-1/50 border-t border-border-subtle">
                      <div className="grid grid-cols-2 gap-4 text-[10px] font-mono">
                        <div className="flex flex-col gap-1">
                          <span className="text-text-disabled">Background</span>
                          <span className="text-text-primary">color/bg/canvas (#141414)</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-text-disabled">Main Margin</span>
                          <span className="text-text-primary">spacing/16 (16px)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">用途：</strong>页面基础背景。所有内容均承载于此画布之上。默认文字颜色为 <code className="text-text-brand">color/text/primary</code>。
                  </p>
                </div>

                {/* Surface Container Spec */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-text-secondary uppercase tracking-widest">2. Surface Container</h4>
                    <span className="text-[10px] bg-action-primary-soft text-text-brand px-2 py-0.5 rounded font-bold">ELEVATION LAYERS</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {/* Level 1 */}
                    <div className="bg-bg-surface-1 p-4 md:p-6 rounded-2xl border border-border-subtle flex items-center justify-between group hover:border-border-primary transition-colors">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-text-primary">Surface / Level 1</div>
                        <div className="text-[10px] text-text-secondary font-mono">bg/surface/1 | radius/16 | p/16-24</div>
                      </div>
                      <div className="w-12 h-12 bg-bg-canvas rounded-xl border border-border-subtle flex items-center justify-center text-xs font-bold text-text-disabled">L1</div>
                    </div>

                    {/* Level 2 */}
                    <div className="bg-bg-surface-2 p-4 rounded-2xl flex items-center justify-between group hover:ring-1 hover:ring-action-primary/30 transition-all">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-text-primary">Surface / Level 2</div>
                        <div className="text-[10px] text-text-secondary font-mono">bg/surface/2 | radius/16 | p/16</div>
                      </div>
                      <div className="w-10 h-10 bg-bg-surface-1 rounded-xl flex items-center justify-center text-xs font-bold text-text-disabled">L2</div>
                    </div>

                    {/* Level 3 */}
                    <div className="bg-bg-surface-3 p-3 rounded-xl flex items-center justify-between group hover:brightness-110 transition-all">
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-text-primary">Surface / Level 3</div>
                        <div className="text-[10px] text-text-secondary font-mono">bg/surface/3 | radius/12 | p/12</div>
                      </div>
                      <div className="w-8 h-8 bg-bg-surface-2 rounded-lg flex items-center justify-center text-[10px] font-bold text-text-disabled">L3</div>
                    </div>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">用途：</strong>卡片、浮层、区块容器。通过背景色的明度提升来模拟物理世界中的“海拔”高度。Level 1 通常带有弱边边框。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Betting Slip / Card Example */}
            <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1 flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b border-border-subtle pb-4">
                <h3 className="text-headings-lg text-text-primary uppercase tracking-wide">Bet Slip</h3>
                <span className="bg-action-primary-soft text-text-brand px-3 py-1 rounded-full text-xs font-bold">LIVE</span>
              </div>
              
              <div className="space-y-4 flex-1">
                {/* Note: Outer is rounded-xl (12px), inner elements are rounded-lg (8px) or smaller */}
                <div className="bg-bg-surface-2 p-4 rounded-xl hover:border-border-primary transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold text-text-primary">Manchester Utd vs Arsenal</span>
                    <span className="text-action-error text-xs font-bold flex items-center gap-1"><XCircle size={12}/> 89'</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-text-secondary text-sm font-medium">Match Winner</span>
                    <div className="bg-bg-surface-3 px-4 py-2 rounded-lg text-text-brand font-extrabold text-lg">
                      2.45
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl text-white font-bold text-button-l tracking-wide shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008]">
                  PLACE BET
                </button>
              </div>
            </div>

            {/* Alerts & Feedback */}
            <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1 space-y-4 flex flex-col">
              <h3 className="text-headings-lg text-text-primary uppercase tracking-wide border-b border-border-subtle pb-4 mb-6">System Feedback</h3>
              
              <div className="space-y-4 flex-1">
                {/* Success Alert */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-feedback-success border border-action-success/20">
                  <CheckCircle2 className="text-action-success mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-bold text-action-success">Bet Placed Successfully</h4>
                    <p className="text-sm text-text-secondary mt-1 font-medium">Your ticket ID is #89237492.</p>
                  </div>
                </div>

                {/* Warning Alert */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-feedback-warning border border-action-warning/20">
                  <AlertTriangle className="text-action-warning mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-bold text-action-warning">Odds Have Changed</h4>
                    <p className="text-sm text-text-secondary mt-1 font-medium">The odds for your selection have decreased to 2.10.</p>
                  </div>
                </div>

                {/* Error Alert */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-feedback-error border border-action-error/20">
                  <XCircle className="text-action-error mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-bold text-action-error">Insufficient Balance</h4>
                    <p className="text-sm text-text-secondary mt-1 font-medium">Please deposit funds to place this bet.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complex Modal Example */}
            <div className="bg-bg-surface-1 p-6 rounded-2xl  shadow-elevated-1 lg:col-span-2">
              <div className="flex justify-between items-center mb-6 border-b border-border-subtle pb-4">
                <h3 className="text-headings-lg text-text-primary uppercase tracking-wide">Complex Modal (Overlay Sizing & Segmented Control)</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Modal Demo */}
                <div className="lg:col-span-3 relative h-[500px] bg-bg-canvas rounded-xl  overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-overlay-scrim backdrop-blur-sm z-10"></div>
                  
                  {/* Modal Container */}
                  <div className="relative z-20 w-[90%] max-w-[400px] bg-bg-surface-2 rounded-2xl  shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[90%]">
                    {/* Header */}
                    <div className="p-5 border-b border-border-subtle shrink-0 flex justify-between items-center">
                      <h4 className="font-bold text-text-primary text-lg">Deposit Funds</h4>
                      <button className="text-text-secondary hover:text-text-primary transition-colors"><XCircle size={20} /></button>
                    </div>
                    
                    {/* Scrollable Content */}
                    <div className="p-5 overflow-y-auto space-y-6">
                      {/* Segmented Control */}
                      <div className="w-full h-12 bg-bg-canvas rounded-xl p-1 flex relative ">
                        {['Crypto', 'Fiat'].map(tab => (
                          <div
                            key={tab}
                            onClick={() => setActiveTab11(tab)}
                            className={`flex-1 flex items-center justify-center text-sm relative z-10 transition-all duration-200 cursor-pointer rounded-lg ${
                              activeTab11 === tab
                                ? 'bg-[image:var(--color-button-brand-primary)] text-white font-bold shadow-md'
                                : 'text-text-secondary hover:text-text-primary font-medium'
                            }`}
                          >
                            {tab}
                          </div>
                        ))}
                      </div>
                      
                      {/* Input Field */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Amount</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-bold">$</span>
                          <input type="text" defaultValue="500.00" className="w-full h-12 bg-bg-canvas  rounded-xl pl-8 pr-4 text-text-primary font-mono font-bold focus:border-action-primary focus:outline-none transition-colors" />
                        </div>
                      </div>

                      {/* Quick Select Buttons */}
                      <div className="grid grid-cols-3 gap-3">
                        {['$100', '$250', '$500'].map(amt => (
                          <button
                            key={amt}
                            onClick={() => setActiveAmount11(amt)}
                            className={`h-10 rounded-lg font-bold text-sm transition-all active:scale-[0.98] border ${
                              activeAmount11 === amt
                                ? 'bg-action-primary-soft border-action-primary text-text-brand'
                                : 'bg-bg-surface-3 hover:bg-bg-surface-1 border-border-subtle text-text-primary'
                            }`}
                          >
                            {amt}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer Actions */}
                    <div className="p-5 border-t border-border-subtle shrink-0 flex gap-3">
                      <button className="flex-1 h-12 bg-transparent hover:bg-white/5 active:bg-white/10 border border-border-strong text-text-primary font-bold rounded-xl text-sm transition-all duration-75">Cancel</button>
                      <button className="flex-[2] h-12 bg-[image:var(--color-button-brand-primary)] hover:from-[#FF8566] hover:to-[#F0552D] active:from-[#E65A33] active:to-[#D13008] text-white font-bold rounded-xl text-sm shadow-primary-glow hover:shadow-primary-glow-hover active:scale-[0.97] transition-all duration-75">Confirm Deposit</button>
                    </div>
                  </div>
                </div>

                {/* Explanations */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-bg-surface-2 p-4 rounded-xl ">
                    <h4 className="text-sm font-bold text-text-brand mb-2 flex items-center gap-2"><Info size={16}/> 中心弹窗 vs 底部抽屉</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      <strong className="text-text-primary">中心弹窗 (Center Modal):</strong> 用于强阻断、需要用户集中注意力完成的独立任务（如：充值、确认删除、复杂表单）。<br/><br/>
                      <strong className="text-text-primary">底部抽屉 (Bottom Sheet):</strong> 用于轻量级交互、上下文相关的选择或操作（如：分享菜单、筛选器、快速回复），在移动端更易于单手操作。
                    </p>
                  </div>

                  <div className="bg-bg-surface-2 p-4 rounded-xl ">
                    <h4 className="text-sm font-bold text-text-brand mb-2 flex items-center gap-2"><XCircle size={16}/> 什么时候需要关闭按钮？</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      1. <strong className="text-text-primary">必须有:</strong> 当弹窗内容较长（可能滚动隐藏底部取消按钮），或者是一个纯信息展示/表单填写弹窗时，右上角必须提供关闭按钮。<br/>
                      2. <strong className="text-text-primary">可省略:</strong> 当弹窗是一个简单的对话框（如：确认/取消），且底部操作区始终可见时，右上角的关闭按钮可以省略，依赖底部的“取消”或点击遮罩层关闭。
                    </p>
                  </div>

                  <div className="bg-bg-surface-2 p-4 rounded-xl ">
                    <h4 className="text-sm font-bold text-text-brand mb-2 flex items-center gap-2"><Layers size={16}/> 分割线规范 (Dividers)</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      深色模式下的分割线容易与背景融为一体。我们定义了两种级别的分割线：<br/>
                      1. <strong className="text-text-primary">弱分割线 (border-subtle):</strong> <code className="bg-bg-canvas px-1 rounded text-text-brand">#FFFFFF26</code>。用于容器边框、列表项分隔、弹窗的 Header/Footer 分隔。<br/>
                      2. <strong className="text-text-primary">强分割线 (border-strong):</strong> <code className="bg-bg-canvas px-1 rounded text-text-brand">#FFFFFF4D</code>。用于需要更高对比度的场景，如幽灵按钮的边框，确保其在任何背景下都清晰可见。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

        {/* 12. Collaboration & Maintenance Guide (NEW) */}
        <section>
          <SectionTitle description="致所有参与项目的协作人员：规范的生命力在于执行。请尊重底层逻辑，避免盲目创新带来的维护灾难。">
            12. 协同与维护指南 (Collaboration & Maintenance)
          </SectionTitle>
          
          <div className="bg-bg-surface-1 p-6 md:p-8 rounded-2xl  shadow-elevated-1 space-y-8">
            <div className="flex items-start gap-4 p-6 bg-bg-feedback-error/10 border border-action-error/30 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-action-error shrink-0 mt-1" />
              <div>
                <h3 className="text-headings-lg text-action-error mb-2">专业忠告：拒绝“弗兰肯斯坦式”的东拼西凑</h3>
                <p className="text-sm text-text-primary leading-relaxed mb-4">
                  在协同办公中，最可怕的不是缺乏设计，而是<strong className="text-action-error">无视现有规范，不断“发明”新设计</strong>。
                  当每个页面、每个弹窗都由不同的人按照自己的喜好随意设定间距、圆角、字号和颜色时，整个产品最终会变成一个毫无一致性的“弗兰肯斯坦（科学怪人）”。这不仅会让用户觉得产品廉价、不专业，更会给后续的开发和维护带来毁灭性的灾难。
                </p>
                <p className="text-sm text-text-primary leading-relaxed">
                  <strong className="text-action-warning">请尊重维护人员的劳动成果！</strong> 维护一套严谨的组件库和设计规范是非常辛苦的。每一个 4px 的间距、每一个圆角的嵌套、每一种颜色的透明度，都是经过深思熟虑的。随意打破这些规则，意味着维护者需要花费数倍的时间去填补这些“技术债务”。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-headings-base text-text-primary mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-text-brand" /> 正确的构建思维：从底层容器到零碎组件
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-bg-surface-2 rounded-xl ">
                  <div className="w-8 h-8 rounded-full bg-action-primary-soft text-text-brand flex items-center justify-center font-bold mb-3">1</div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">确定底层容器 (Containers)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    首先确定页面布局、弹窗尺寸、卡片边界。严格遵守栅格系统和最大/最小宽度限制。不要急于填充内容，先确保骨架的稳固。
                  </p>
                </div>
                <div className="p-5 bg-bg-surface-2 rounded-xl ">
                  <div className="w-8 h-8 rounded-full bg-action-primary-soft text-text-brand flex items-center justify-center font-bold mb-3">2</div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">应用基础组件 (Foundations)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    使用规范中已有的导航栏、标签页、按钮组。如果规范中已经有了“次级按钮”，就不要自己再调一个“浅灰色按钮”。复用是保持一致性的唯一途径。
                  </p>
                </div>
                <div className="p-5 bg-bg-surface-2 rounded-xl ">
                  <div className="w-8 h-8 rounded-full bg-action-primary-soft text-text-brand flex items-center justify-center font-bold mb-3">3</div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">填充零碎元素 (Fragments)</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    最后处理文本、图标、标签。严格使用 Typography 规范中的字号和字重。遵循同心圆法则处理内部元素的圆角和间距。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-surface-2 p-6 rounded-xl border-l-4 border-action-success">
              <h3 className="text-headings-base text-text-primary mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-action-success" /> 专业使用指南
              </h3>
              <ul className="text-sm text-text-secondary space-y-3 list-disc list-inside">
                <li><strong className="text-text-primary">先查阅，后设计：</strong> 在开始任何新页面的设计或开发前，先在本文档中寻找可复用的模式。</li>
                <li><strong className="text-text-primary">克制创新：</strong> 如果你觉得现有的组件无法满足需求，请先与规范维护者沟通，探讨是否可以通过组合现有组件来实现，而不是立刻创建一个全新的样式。</li>
                <li><strong className="text-text-primary">拥抱约束：</strong> 规范的存在就是为了限制自由。在 8px 和 10px 之间犹豫时，请毫不犹豫地选择规范中定义的 8px。</li>
                <li><strong className="text-text-primary">全局视野：</strong> 你正在设计的不是一个孤立的页面，而是整个庞大系统的一部分。每做一次特殊处理，都在增加系统的熵值。</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
