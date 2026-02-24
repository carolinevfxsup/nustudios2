import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, FolderOpen, Eye, Camera, Utensils, Wine, Users, Palette, Hash, ListChecks, Clock, Heart, Handshake, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import heroImage from '../assets/palmeiral-header.avif';
import contentImage from '@/assets/palmeiral-content.png';
import danielImage from '@/assets/palmeiral-daniel.webp';
import automationControlImage from '@/assets/palmeiral-automation-control.jpeg';
import postingLogicImage from '@/assets/palmeiral-posting-logic.png';
import humanCheckpointImage from '@/assets/palmeiral-human-checkpoint.png';
import informedImage from '@/assets/palmeiral-informed.png';
import growthImage from '@/assets/palmeiral-growth.png';
import nusLogo from '@/assets/nus-logo-round.png';
import quintaThumbnail from '@/assets/quinta-after.png';
import saltLilyThumbnail from '@/assets/salt-lily/GOAT.png';

export default function OPalmeiralShowcase() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="O Palmeiral restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight text-white drop-shadow-lg">
              {t.palmeiral.heroTitle} <span className="italic">{t.palmeiral.heroTitleItalic}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
              {t.palmeiral.heroText1}
            </p>
            <p className="text-lg text-white/80 mb-10 drop-shadow-md">
              {t.palmeiral.heroText2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('system-flow')} className="text-lg px-8">
                {t.palmeiral.viewSystem}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')} className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                {t.palmeiral.seeAutomation}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Behind the Problem */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.contentTitle} <span className="italic">{t.palmeiral.contentTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.palmeiral.contentText}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {t.palmeiral.contentHas1}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {t.palmeiral.contentHas2}
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.palmeiral.contentMissing}
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  {t.palmeiral.contentMissing1}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  {t.palmeiral.contentMissing2}
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  {t.palmeiral.contentMissing3}
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.palmeiral.contentConclusion}
              </p>
            </div>
            <div className="relative">
              <img src={contentImage} alt="Google Drive folder with restaurant photos" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Original Ask */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={danielImage} alt="Daniel, owner of O Palmeiral" className="w-full md:w-[110%] rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.requestTitle} <span className="italic">{t.palmeiral.requestTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.palmeiral.requestText}
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
                <p className="text-xl md:text-2xl font-medium italic">
                  {t.palmeiral.requestQuote}
                </p>
              </blockquote>
              <p className="text-lg text-muted-foreground">
                {t.palmeiral.requestConclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Without Giving Up Control */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.automationTitle} <span className="italic">{t.palmeiral.automationTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.palmeiral.automationText}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.palmeiral.automationResult}
              </p>
              <ul className="space-y-3">
                {[t.palmeiral.automationResult1, t.palmeiral.automationResult2, t.palmeiral.automationResult3].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                {t.palmeiral.automationConclusion}
              </p>
            </div>
            <div className="relative">
              <img src={automationControlImage} alt="Automation control system" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section id="system-flow" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl" id="how-it-works">
              {t.palmeiral.systemTitle} <span className="italic">{t.palmeiral.systemTitleItalic}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8 w-full">
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <FolderOpen className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step1Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.palmeiral.step1Items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <Eye className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step2Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.palmeiral.step2Items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <Camera className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step3Title}</h3>
                <p className="text-muted-foreground mb-3">{t.palmeiral.step3Text}</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: <Utensils className="h-4 w-4 text-foreground" />, label: t.palmeiral.step3Categories[0] },
                    { icon: <Wine className="h-4 w-4 text-foreground" />, label: t.palmeiral.step3Categories[1] },
                    { icon: <Users className="h-4 w-4 text-foreground" />, label: t.palmeiral.step3Categories[2] },
                    { icon: <Palette className="h-4 w-4 text-foreground" />, label: t.palmeiral.step3Categories[3] },
                  ].map((cat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">{cat.icon} {cat.label}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <Hash className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step4Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.palmeiral.step4Items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <ListChecks className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step5Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.palmeiral.step5Items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-xl border">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-foreground">
                  <Clock className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.palmeiral.step6Title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.palmeiral.step6Items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Intelligence & Rotation */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.postingTitle} <span className="italic">{t.palmeiral.postingTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.postingText}
              </p>
              <ul className="space-y-3 mb-8">
                {[t.palmeiral.postingItem1, t.palmeiral.postingItem2, t.palmeiral.postingItem3].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.palmeiral.postingConclusion}
              </p>
            </div>
            <div className="relative">
              <img src={postingLogicImage} alt="Instagram feed showing balanced content rotation" className="w-full md:w-[105%] rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Approval & Queue System */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={humanCheckpointImage} alt="Spreadsheet-based review and approval system" className="w-full rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.checkpointTitle} <span className="italic">{t.palmeiral.checkpointTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.checkpointBefore}
              </p>
              <ul className="space-y-3 mb-8">
                {t.palmeiral.checkpointItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.checkpointAfter}
              </p>
              <ul className="space-y-3 mb-8">
                {[t.palmeiral.checkpointApproved1, t.palmeiral.checkpointApproved2].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium">
                {t.palmeiral.checkpointKey}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications & Visibility */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.informedTitle} <span className="italic">{t.palmeiral.informedTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.informedText}
              </p>
              <ul className="space-y-3 mb-8">
                {[t.palmeiral.informedItem1, t.palmeiral.informedItem2, t.palmeiral.informedItem3].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <ArrowRight className="h-4 w-4 text-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.palmeiral.informedConclusion}
              </p>
            </div>
            <div className="relative">
              <img src={informedImage} alt="Email notification showing successful post" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Publishing & Optimisation */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={growthImage} alt="Content system driving organic growth" className="w-full rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.growthTitle} <span className="italic">{t.palmeiral.growthTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.growthText}
              </p>
              <ul className="space-y-3 mb-8">
                {t.palmeiral.growthItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.palmeiral.growthRouting}
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                {t.palmeiral.growthRoutes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.palmeiral.growthConclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              {t.palmeiral.outcomeTitle} <span className="italic">{t.palmeiral.outcomeTitleItalic}</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {t.palmeiral.outcomeItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-foreground">
                    <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              {t.palmeiral.outcomeConclusion}
            </p>
          </div>
        </div>
      </section>

      {/* NU Studios POV */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.palmeiral.approachTitle} <span className="italic">{t.palmeiral.approachTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.palmeiral.approachText}
              </p>
              <ul className="space-y-3 mb-8">
                {t.palmeiral.approachItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{['❤️', '🤝', ''][i]}</span>
                    {i === 2 ? <User className="h-6 w-6 text-foreground" /> : null}
                    {i < 2 ? item : null}
                    {i === 2 ? <span>{item}</span> : null}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.palmeiral.approachConclusion}
              </p>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <img src={nusLogo} alt="NU Studios logo" className="w-32 h-32 md:w-auto md:h-auto md:max-h-[200px] rounded-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t.palmeiral.ctaTitle} <span className="italic">{t.palmeiral.ctaTitleItalic}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {t.palmeiral.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = 'https://www.nustudios.co.uk/#contact'} className="text-lg px-10 gap-2">
              {t.palmeiral.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:hello@nustudios.co.uk">
                {t.palmeiral.ctaEmail}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{
          title: 'Quinta do Pinto',
          slug: '/work/quinta-do-pinto',
          thumbnail: quintaThumbnail
        }}
        nextProject={{
          title: 'Salt Lily Jewellery',
          slug: '/work/salt_lily_showcase',
          thumbnail: saltLilyThumbnail
        }}
      />

      <Footer />
    </div>
  );
}
