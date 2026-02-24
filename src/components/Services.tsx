import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import aiContentFrame from '@/assets/ai-content-frame.png';
import automationImage from '@/assets/automation-03.png';
import vfxFrame from '@/assets/vfx-frame-01.png';

export function Services() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const openVideo = (url: string) => {
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <section id="services-detail" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        {/* AI Content Creation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">AI</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.services.aiContent.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t.services.aiContent.description}
            </p>
            <Button 
              onClick={() => openVideo('https://player.vimeo.com/video/1140751488')}
              className="gap-2 bg-[#e1f89d] border-2 border-black hover:opacity-90 transition-opacity text-black font-semibold"
            >
              <Play className="h-4 w-4" /> PLAY
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div 
              className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openVideo('https://player.vimeo.com/video/1140751488')}
            >
              <img src={aiContentFrame} alt="AI Content Creation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-black flex items-center justify-center">
                  <Play className="h-8 w-8 text-black ml-1" fill="#e1f89d" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Automations */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-1">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={automationImage} alt="AI Automations" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">AI</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.services.aiAutomation.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.services.aiAutomation.description}
            </p>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              {t.services.aiAutomation.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <Button 
              onClick={() => window.location.href = '/automations'}
              className="bg-primary text-black border-2 border-black hover:bg-white hover:text-black gap-2"
            >
              {t.services.aiAutomation.cta} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* VFX Solutions */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-display mb-6">
              <span className="font-bold">VFX</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.services.vfx.title}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t.services.vfx.description}
            </p>
            <ul className="text-lg text-muted-foreground space-y-3 mb-6">
              {t.services.vfx.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <Button 
              onClick={() => openVideo('https://player.vimeo.com/video/1139981506')}
              className="gap-2 bg-[#e1f89d] border-2 border-black hover:opacity-90 transition-opacity text-black font-semibold"
            >
              <Play className="h-4 w-4" /> PLAY
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div 
              className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openVideo('https://player.vimeo.com/video/1139981506')}
            >
              <img src={vfxFrame} alt="VFX Solutions" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-black flex items-center justify-center">
                  <Play className="h-8 w-8 text-black ml-1" fill="#e1f89d" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!videoUrl} onOpenChange={closeVideo}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {videoUrl && (
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
