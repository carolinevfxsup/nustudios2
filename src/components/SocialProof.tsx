import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import theIdeaGif from '@/assets/quinta-the-idea.gif';
import palmeiralMain from '@/assets/palmeiral-main.png';

export function SocialProof() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const showcases = [
    {
      title: 'Quinta do Pinto',
      href: '/work/quinta-do-pinto',
      media: { type: 'image' as const, src: theIdeaGif },
    },
    {
      title: 'O Palmeiral',
      href: '/work/O_Palmeiral_showcase',
      media: { type: 'image' as const, src: palmeiralMain },
    },
    {
      title: 'Salt Lily Jewellery',
      href: '/work/salt_lily_showcase',
      media: { type: 'video' as const, src: '/videos/sped_up_video.mp4' },
    },
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 border-y-2 border-border">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display md:text-4xl mb-4">
            <span className="font-bold">{t.socialProof.title.split(' ')[0]}</span>{' '}
            <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.socialProof.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcases.map((showcase) => (
            <div key={showcase.title} className="flex flex-col items-center">
              <a href={showcase.href} className="block w-full group">
                <div className="aspect-[4/5] rounded-lg overflow-hidden border-2 border-border mb-4">
                  {showcase.media.type === 'video' ? (
                    <video
                      src={showcase.media.src}
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={showcase.media.src}
                      alt={showcase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </a>
              <h3 className="text-lg font-display font-semibold mb-3">{showcase.title}</h3>
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a href={showcase.href}>
                  {t.socialProof.viewShowcase} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
