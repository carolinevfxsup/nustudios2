import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl">
            <span className="font-bold">{t.faq.title.split(' ')[0]}</span>{' '}
            <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.faq.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.questions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border-2 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
