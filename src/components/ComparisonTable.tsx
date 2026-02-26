import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const rows = [
  {
    capability: 'Production Speed',
    traditional: '2–4 Weeks',
    pureAI: 'Instant',
    hybrid: 'Instant On-Brand',
  },
  {
    capability: 'Quality',
    traditional: 'High / Expensive',
    pureAI: 'Generic / Unstable',
    hybrid: 'Hollywood Grade',
  },
  {
    capability: 'Distribution',
    traditional: 'Manual',
    pureAI: 'None',
    hybrid: 'Fully Automated',
  },
  {
    capability: 'Brand Consistency',
    traditional: 'Depends on talent',
    pureAI: 'Random',
    hybrid: 'Brand Vault locked',
  },
  {
    capability: 'Scales with Demand',
    traditional: 'Linear cost',
    pureAI: 'Yes but generic',
    hybrid: 'Yes, on-brand',
  },
];

function CellIcon({ type }: { type: 'good' | 'mid' | 'bad' }) {
  if (type === 'good') return <Check className="h-4 w-4 text-primary inline mr-1" />;
  if (type === 'mid') return <Minus className="h-4 w-4 text-muted-foreground inline mr-1" />;
  return <X className="h-4 w-4 text-destructive inline mr-1" />;
}

export function ComparisonTable() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            <span className="font-bold">Why Our</span>{' '}
            <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Hybrid Model Wins
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
                  Capability
                </th>
                <th className="text-center p-4 text-sm font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
                  Traditional Agency
                </th>
                <th className="text-center p-4 text-sm font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
                  Pure AI Tools
                </th>
                <th className="text-center p-4 text-sm font-mono uppercase tracking-wider text-primary border-b-2 border-primary bg-primary/5 rounded-t-xl font-bold">
                  Our Hybrid Model ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                  <td className="p-4 font-medium text-foreground text-sm">
                    {row.capability}
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <CellIcon type="mid" />
                    {row.traditional}
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    <CellIcon type="bad" />
                    {row.pureAI}
                  </td>
                  <td className="p-4 text-center text-sm font-semibold text-foreground bg-primary/5">
                    <CellIcon type="good" />
                    {row.hybrid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
