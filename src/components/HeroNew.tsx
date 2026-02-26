import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const phrases = ['10x Output', '30% Cost', '100% On-Brand'];

export function HeroNew() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-foreground overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left: Dark kinetic typography */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0">
          <div className="space-y-8">
            {/* Cycling phrases */}
            <div className="h-16 md:h-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="text-primary font-mono text-2xl md:text-4xl font-bold tracking-tight"
                >
                  {phrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-background leading-[1.1]">
              <span className="font-bold">Elite Branding.</span>
              <br />
              <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Infinite Scale.
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
              AI-powered creative systems that produce Hollywood-grade content at startup speed.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-8 py-6 text-base font-bold bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              >
                Build Your Flywheel
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const el = document.getElementById('work');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-base border-background/30 text-background hover:bg-background/10 hover:text-background"
              >
                Watch Showreel
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Video showcase */}
        <div className="relative min-h-[50vh] lg:min-h-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/header.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-foreground/60 lg:to-foreground/40" />
        </div>
      </div>
    </section>
  );
}
