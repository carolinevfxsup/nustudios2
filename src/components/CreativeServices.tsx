import { motion } from 'framer-motion';
import { Palette, Sparkles, Bot } from 'lucide-react';

const features = [
  {
    icon: Palette,
    tag: 'IDENTITY FIRST',
    title: 'Brand-led creative direction',
    description: 'Every asset starts with your brand DNA. We build custom AI models trained on your style, tone, and visual language.',
  },
  {
    icon: Sparkles,
    tag: 'AI TOOL KIT',
    title: 'Scale Your Creative',
    description: 'Virtual staging, AI avatars, product photography, video — all produced at volume without compromising on quality.',
  },
  {
    icon: Bot,
    tag: 'AUTOMATION',
    title: 'Automate Engagement',
    description: 'From social scheduling to SEO blogging, our pipelines handle distribution so you can focus on running the business.',
  },
];

export function CreativeServices() {
  return (
    <section id="creative" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Imagine your Brand, with{' '}
            <span className="font-display italic text-primary">Unlimited growth.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-4xl bg-card border border-border p-8 lg:p-10 space-y-5 group hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
            >
              <span className="text-[10px] font-bold tracking-widest text-primary">{feat.tag}</span>
              <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                <feat.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
