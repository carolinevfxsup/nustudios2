import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Languages, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <footer className="bg-card border-t-2 border-border py-12">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">NU Studios</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@nustudios.co.uk" className="hover:text-foreground transition-colors">
                  hello@nustudios.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Lisbon, PT</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>London, UK</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('work')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.work}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.links.faq}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Language</h4>
            <div className="flex gap-3">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="w-16"
              >
                EN
              </Button>
              <Button
                variant={language === 'pt' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('pt')}
                className="w-16"
              >
                PT
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NU Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
