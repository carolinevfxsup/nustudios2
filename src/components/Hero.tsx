import { ChevronDown } from 'lucide-react';
import logoHero from '@/assets/logo-hero.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 min-h-[70vh] md:min-h-screen">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/header.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo overlay centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-8">
        <img 
          src={logoHero} 
          alt="NU Studios" 
          className="w-[32rem] md:w-[48rem] h-auto"
        />
        <p className="text-2xl md:text-4xl font-display font-medium drop-shadow-lg text-center px-4 text-[#e1f89d]">
          AI Cinematic Content. Automated.
        </p>
        {/* Bouncy scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary drop-shadow-lg" strokeWidth={2.5} />
        </div>
      </div>

    </section>
  );
}
