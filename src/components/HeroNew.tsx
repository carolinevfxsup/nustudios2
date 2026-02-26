import { Button } from '@/components/ui/button';

export function HeroNew() {
  return (
    <section className="relative min-h-screen bg-foreground overflow-hidden flex items-center justify-center">
      {/* Full-width background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-background leading-[1.1] tracking-tight">
          <span className="font-bold">10x the Output.</span>
          <br />
          <span className="font-bold">30% of the Cost.</span>
          <br />
          <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            100% On-Brand.
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Merging Elite Branding Strategy with the Infinite Scalability of AI and VFX Automation.
        </p>

        <div className="pt-4">
          <Button
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-7 text-base md:text-lg font-bold bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)]"
          >
            Start Your 90-Day Spin-Up
          </Button>
        </div>
      </div>
    </section>
  );
}
