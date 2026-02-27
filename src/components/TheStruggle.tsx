import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Repeat } from 'lucide-react';

const struggles = [
  {
    icon: DollarSign,
    title: 'Struggling with the Cost of Creative?',
    description: 'Endless billable hours, bloated agency retainers, and unpredictable freelancer costs. You need volume without the overhead.',
  },
  {
    icon: TrendingUp,
    title: 'Hard to build engagement and reach?',
    description: 'Your content pipeline is inconsistent. Posting gaps kill momentum. You need automated content that runs while you sleep.',
  },
  {
    icon: Repeat,
    title: "Looking for growth but can't break the cycle?",
    description: 'You know quality matters but you can\'t scale it. Every time you grow, quality drops. The cycle repeats.',
  },
];

export function TheStruggle() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary mb-3">THE QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Sound familiar?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {struggles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-4xl bg-card border border-border p-8 lg:p-10 space-y-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
