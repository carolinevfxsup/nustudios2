import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Clock, Sparkles, DollarSign } from 'lucide-react';

export function ValueProps() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const props = [
    {
      icon: Clock,
      title: t.valueProps.faster.title,
      description: t.valueProps.faster.description,
    },
    {
      icon: Sparkles,
      title: t.valueProps.polish.title,
      description: t.valueProps.polish.description,
    },
    {
      icon: DollarSign,
      title: t.valueProps.budget.title,
      description: t.valueProps.budget.description,
    },
  ];

  const titleWords = t.valueProps.title.split(' ');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-display md:text-4xl mb-3">
            <span className="font-bold">{titleWords.slice(0, 2).join(' ')}</span>{' '}
            <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{titleWords.slice(2).join(' ')}</span>
          </h2>
          <p className="text-lg font-display italic text-muted-foreground">
            {t.valueProps.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, i) => (
            <Card
              key={i}
              className="p-8 bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 border-2 flex flex-col items-center text-center"
            >
              <div className="mb-6 inline-flex p-6 rounded-2xl bg-primary border-2 border-black">
                <prop.icon className="h-12 w-12 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {prop.title}
              </h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
