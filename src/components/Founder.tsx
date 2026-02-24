import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import founderImage from '@/assets/founder.png';

export function Founder() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <Card className="w-full mx-auto p-8 md:p-12 bg-card border-2">
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="shrink-0 md:w-80">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src={founderImage} 
                  alt="Caroline Pires - Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-display mb-6">
                <span className="font-bold">{t.founder.title.split(' ')[0]}</span>{' '}
                <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.founder.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.founder.description}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
