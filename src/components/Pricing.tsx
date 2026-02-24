import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export function Pricing() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      features: t.pricing.starter.features,
      bestFor: t.pricing.starter.bestFor,
      highlighted: false,
    },
    {
      name: t.pricing.scale.name,
      price: t.pricing.scale.price,
      features: t.pricing.scale.features,
      bestFor: t.pricing.scale.bestFor,
      highlighted: true,
      badge: t.pricing.scale.badge,
    },
    {
      name: t.pricing.bespokeAI.name,
      price: t.pricing.bespokeAI.price,
      features: t.pricing.bespokeAI.features,
      bestFor: t.pricing.bespokeAI.bestFor,
      highlighted: false,
    },
    {
      name: t.pricing.bespokeVFX.name,
      price: t.pricing.bespokeVFX.price,
      features: t.pricing.bespokeVFX.features,
      bestFor: t.pricing.bespokeVFX.bestFor,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl mb-4">
            <span className="font-bold">Pricing</span>{' '}
            <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={`p-8 flex flex-col relative transition-all duration-300 group ${
                pkg.highlighted
                  ? 'bg-primary border-black border-4 shadow-[var(--shadow-elevated)]'
                  : 'bg-card border-2'
              } hover:border-black hover:border-4 hover:bg-primary`}
            >
              {pkg.badge && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] text-white border-2 border-black">
                  {pkg.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-foreground">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {pkg.bestFor && (
                <div className="mb-6">
                  <div className="border-t border-border mb-4" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Best for:</p>
                    <p className="text-sm text-muted-foreground italic">{pkg.bestFor}</p>
                  </div>
                </div>
              )}

              <Button
                onClick={scrollToContact}
                className={`w-full transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-white text-black border-2 border-black hover:bg-gradient-to-r hover:from-[#ff9a56] hover:via-[#ff6b9d] hover:to-[#c96dd8] hover:text-white hover:border-black'
                    : 'bg-primary text-black border-2 border-black hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black'
                }`}
              >
                {t.pricing.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
