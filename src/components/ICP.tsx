import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export function ICP() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-12 bg-card border-2 shadow-[var(--shadow-card)]">
          <div className="text-center">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary border-2 border-black">
              <Users className="h-8 w-8 text-black" strokeWidth={2} />
            </div>

            <h2 className="text-3xl font-display md:text-4xl mb-6">
              <span className="font-bold">{t.icp.title.split(' ')[0]}</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.icp.title.split(' ').slice(1).join(' ')}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.icp.description}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
