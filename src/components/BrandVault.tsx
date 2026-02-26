import { motion } from 'framer-motion';
import { Cpu, Lock, TrendingUp } from 'lucide-react';

const stack = [
  { icon: Cpu, label: 'Stable Diffusion XL + Brand LoRA v4' },
  { icon: Lock, label: 'Agentic Distribution Agents' },
  { icon: TrendingUp, label: 'Continuous RAG Optimization' },
];

export function BrandVault() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
            The Machine Under the Hood
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {stack.map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Every month you stay with us, the AI gets better at being{' '}
            <span className="text-primary font-bold italic">you</span>. This is
            your Brand Vault — a proprietary asset that traditional agencies
            cannot replicate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
