import { motion } from 'framer-motion';
import { Zap, DollarSign, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Zap, value: '10x', label: 'Volume', sub: 'Outpace traditional studios' },
  { icon: DollarSign, value: '30%', label: 'Cost', sub: 'Professional quality, lower spend' },
  { icon: Clock, value: '24/7', label: 'Presence', sub: 'Automated pipelines' },
  { icon: Shield, value: '100%', label: 'Identity', sub: 'Designer-led oversight' },
];

export function CompetitiveAdvantage() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary mb-3">COMPETITIVE ADVANTAGE</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            The Competitive Advantage — Proven impact for brand owners.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-4xl bg-background border border-border p-8 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm font-bold">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
