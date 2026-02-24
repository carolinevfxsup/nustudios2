import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

export function CTABanner() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToContact = () => {
    window.location.href = 'https://www.nustudios.co.uk/#contact';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="w-full mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-8">
            <span className="font-bold">{t.ctaBanner.title.split(' ')[0]}</span>{' '}
            <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.ctaBanner.title.split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="hover:bg-white hover:text-black border-2 border-black transition-colors"
            >
              {t.ctaBanner.primaryCta}
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-primary text-black border-2 border-black hover:bg-white hover:text-black transition-colors"
            >
              <a href="mailto:hello@nustudios.co.uk">
                {t.ctaBanner.secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
