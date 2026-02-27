import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroNew() {
  return (
    <section id="growth" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-foreground">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          >
            <span className="font-display italic text-primary text-5xl md:text-6xl lg:text-7xl">AI</span>
            <span className="font-bold text-white"> Like you mean Business.</span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Content flows. Engagement scales. Brand grows.<br className="hidden md:block" />
            Fast. Lean. Unstoppable.
          </motion.p>

          {/* Stats */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-semibold tracking-wider text-white/60"
          >
            10x the content &nbsp;·&nbsp; 30% of the cost &nbsp;·&nbsp; 100% yours.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white/70 bg-white/5 backdrop-blur-sm">
              AI Proof. Secure your build.
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white/70 bg-white/5 backdrop-blur-sm">
              No Coding. Zero technical friction.
            </span>
          </motion.div>

          {/* Strategy columns */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8"
          >
            {[
              { bold: 'Fast Build.', sub: 'Scale at speed' },
              { bold: 'Low Cost.', sub: 'Budget Conscious' },
              { bold: 'Pro Results.', sub: 'High quality' },
            ].map((item) => (
              <div key={item.bold} className="text-center space-y-1">
                <p className="text-sm font-bold text-white">{item.bold}</p>
                <p className="text-xs text-white/50">{item.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-4"
          >
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-10 py-6 text-sm font-semibold tracking-wider"
            >
              START YOUR 90-DAY SPIN-UP
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
