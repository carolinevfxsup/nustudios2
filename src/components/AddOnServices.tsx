import { motion } from 'framer-motion';
import { User, Camera, Zap } from 'lucide-react';

const cards = [
  {
    icon: User,
    title: 'AI Brand Avatars',
    description: 'Bespoke virtual models trained on your brand identity. Eliminate recurring talent fees and logistics.',
  },
  {
    icon: Camera,
    title: 'Virtual Product Staging',
    description: 'Turn one mobile photo into 50+ high-end lifestyle assets. Studio quality at AI speed.',
  },
  {
    icon: Zap,
    title: 'Campaign Velocity',
    description: 'High-frequency video and image generation for 24/7 E-comm demand.',
  },
];

export function AddOnServices() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            <span className="font-bold">Beyond</span>{' '}
            <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Generic AI
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl p-8 border border-border/50 bg-card/30 backdrop-blur-xl hover:bg-card/60 transition-all duration-500 hover:shadow-[var(--shadow-elevated)]"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--card) / 0.4), hsl(var(--card) / 0.1))',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
