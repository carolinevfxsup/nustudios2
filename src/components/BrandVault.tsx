import { motion } from 'framer-motion';
import { Shield, Brain, TrendingUp } from 'lucide-react';

const codeSnippet = `// brand-vault.config.ts
export const brandVault = {
  rag: {
    sources: [
      "brand-guidelines.pdf",
      "tone-of-voice.md",
      "product-catalog.json",
      "past-campaigns/*"
    ],
    embeddings: "text-embedding-3-large",
    vectorStore: "pinecone",
  },
  outputs: {
    seo: { keywords: true, meta: true },
    social: { captions: true, hashtags: true },
    visual: { styleGuide: true, colorPalette: true },
  },
  learning: "continuous" // gets better every month
};`;

export function BrandVault() {
  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border/20 bg-[#0d1117] p-6 font-mono text-sm overflow-x-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <div className="w-3 h-3 rounded-full bg-secondary/80" />
              </div>
              <pre className="text-[#c9d1d9] whitespace-pre-wrap text-xs md:text-sm leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-display text-background leading-tight">
              <span className="font-bold">The Brand Vault:</span>
              <br />
              <span className="italic text-primary">Your Proprietary Moat</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Using RAG (Retrieval-Augmented Generation), we build a <span className="text-background font-semibold">Brain</span> that ingests your brand guidelines. Every asset, blog, and tag is optimised specifically for your voice and SEO keywords.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The AI gets better at being <span className="text-primary font-bold italic">You</span> every month — making the service un-replaceable.
            </p>

            <div className="grid gap-4 pt-4">
              {[
                { icon: Brain, label: 'Learns your brand DNA continuously' },
                { icon: Shield, label: 'Your data stays private & proprietary' },
                { icon: TrendingUp, label: 'Performance improves every rotation' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-background/80">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
