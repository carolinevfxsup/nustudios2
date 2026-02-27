import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Layers, Maximize, Zap } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Tooling Your Identity',
    description: 'We audit your brand, catalogue your assets, and build your custom AI Brand Vault — the foundation everything else runs on.',
    icon: Fingerprint,
    visual: 'Identity & Brand Vault Setup',
  },
  {
    num: '02',
    title: 'Build Your System',
    description: 'We configure your creative pipelines, automation workflows, and distribution channels into one cohesive engine.',
    icon: Layers,
    visual: 'System Architecture',
  },
  {
    num: '03',
    title: 'Scale Your Creative',
    description: 'AI-powered content production at volume — images, video, blogs — all on-brand and ready to publish.',
    icon: Maximize,
    visual: 'Creative at Scale',
  },
  {
    num: '04',
    title: 'Automate Your Engagement',
    description: 'Set it and let it run. Automated posting, SEO blogging, and audience nurturing — 24/7 without lifting a finger.',
    icon: Zap,
    visual: 'Autonomous Engagement',
  },
];

export function TheJourney() {
  const [active, setActive] = useState(0);

  return (
    <section id="journey" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary mb-3">THE JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Plan. Build. <span className="font-display italic text-primary">Dominate.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Steps */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-3xl transition-all duration-300 group ${
                  active === i
                    ? 'bg-background shadow-[var(--shadow-card)]'
                    : 'hover:bg-background/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-xs font-bold mt-1 ${active === i ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-base font-bold mb-1 ${active === i ? 'text-foreground' : 'text-foreground/70'}`}>
                      {step.title}
                    </h3>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                  <step.icon className={`h-5 w-5 mt-0.5 ${active === i ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Visual area */}
          <div className="aspect-video rounded-4xl bg-background border border-border overflow-hidden flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="text-center p-8"
              >
                {(() => {
                  const Icon = steps[active].icon;
                  return <Icon className="h-12 w-12 text-primary mx-auto mb-4" />;
                })()}
                <p className="text-lg font-bold">{steps[active].title}</p>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">{steps[active].visual}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
