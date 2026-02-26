import { motion } from 'framer-motion';
import { Clapperboard, Database, Workflow } from 'lucide-react';

const pillars = [
  {
    icon: Clapperboard,
    phase: 'Phase A',
    title: 'The Creative Engine',
    description:
      'Art-Directed High-Impact Production. From cinematic video to virtual staging and bespoke AI Brand Avatars — elite quality without the talent logistics.',
  },
  {
    icon: Database,
    phase: 'Phase B',
    title: 'The Brand Vault',
    description:
      'Your Proprietary Style DNA. Every asset is powered by custom RAG models that ingest your brand guidelines. The more we create, the better the AI gets at being You.',
  },
  {
    icon: Workflow,
    phase: 'Phase C',
    title: 'Automation & Distribution',
    description:
      'Operational Freedom. An AI-led pipeline that reduces labor by automatically pushing content to your social feeds and storefronts.',
  },
];

export function AddOnServices() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            The Ecosystem
          </p>
          <h2 className="text-3xl md:text-5xl font-display">
            <span className="font-bold">One Engine.</span>{' '}
            <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Three Phases.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl p-8 border border-border/50 bg-card/30 backdrop-blur-xl hover:bg-card/60 transition-all duration-500 hover:shadow-[var(--shadow-elevated)]"
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--card) / 0.4), hsl(var(--card) / 0.1))',
                backdropFilter: 'blur(20px)',
              }}
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
                {pillar.phase}
              </p>
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <pillar.icon
                  className="h-7 w-7 text-primary"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
