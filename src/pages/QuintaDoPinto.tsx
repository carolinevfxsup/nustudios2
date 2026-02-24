import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Clapperboard, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import heroImage from '../assets/quinta-do-pinto-header.jpg';
import moodboardImage from '@/assets/quinta-moodboard.jpg';
import theIdeaGif from '@/assets/quinta-the-idea.gif';
import beforeImage from '@/assets/quinta-before.png';
import afterImage from '@/assets/quinta-after.png';
import nusLogo from '@/assets/nus-logo-round.png';
import wineBrandsImage from '@/assets/quinta-wine-brands.png';
import palmeiralHeader from '@/assets/palmeiral-header.avif';
import saltLilyGoat from '@/assets/salt-lily/GOAT.png';

const QuintaDoPinto = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const scrollToContact = () => {
    window.location.href = 'https://www.nustudios.co.uk/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - 35% darker overlay */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Quinta do Pinto winery estate at sunrise" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-white drop-shadow-lg">
                {t.quinta.heroTitle}
                <span className="block text-3xl md:text-4xl lg:text-5xl font-normal italic mt-2 bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">
                  {t.quinta.heroSubtitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {t.quinta.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* The Brief */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    {t.quinta.briefTitle.split(' ')[0]} <span className="italic">{t.quinta.briefTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t.quinta.briefText}
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={moodboardImage} 
                    alt="Creative moodboard for Quinta do Pinto wine content" 
                    className="w-full lg:max-w-[85%] lg:ml-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Did */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                  {t.quinta.whatWeDidTitle.split(' ')[0]} <span className="italic">{t.quinta.whatWeDidTitle.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  {t.quinta.whatWeDidSubtitle}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Bot className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-5xl font-display font-bold text-muted-foreground/30">01</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.quinta.card1Title}</h3>
                  <p className="text-muted-foreground">{t.quinta.card1Text}</p>
                </div>
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Clapperboard className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-5xl font-display font-bold text-muted-foreground/30">02</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.quinta.card2Title}</h3>
                  <p className="text-muted-foreground">{t.quinta.card2Text}</p>
                </div>
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Camera className="w-7 h-7 text-foreground" />
                    </div>
                    <span className="text-5xl font-display font-bold text-muted-foreground/30">03</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.quinta.card3Title}</h3>
                  <p className="text-muted-foreground">{t.quinta.card3Text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Idea */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={theIdeaGif} 
                    alt="Wine bottle on cement vat texture showing the creative concept" 
                    className="w-full max-w-md md:max-w-[400px] lg:max-w-[480px] md:mx-0 rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    {t.quinta.theIdeaTitle.split(' ')[0]} <span className="italic">{t.quinta.theIdeaTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t.quinta.theIdeaText1}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t.quinta.theIdeaText2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From Bottle to Launch Content */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.quinta.fromBottleTitle.split(' ').slice(0, 2).join(' ')} <span className="italic">{t.quinta.fromBottleTitle.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
                {t.quinta.fromBottleText}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="space-y-4">
                  <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden border border-border shadow-sm">
                    <img 
                      src={beforeImage} 
                      alt={t.quinta.beforeLabel} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{t.quinta.beforeLabel}</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-xl">
                    <img 
                      src={afterImage} 
                      alt={t.quinta.afterLabel}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{t.quinta.afterLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attention to Detail */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    {t.quinta.attentionTitle.split(' ').slice(0, 1).join(' ')} <span className="italic">{t.quinta.attentionTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                    {t.quinta.attentionText1}
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    {t.quinta.attentionText2}
                  </p>
                  <ul className="space-y-4">
                    {t.quinta.attentionBullets.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <video 
                    autoPlay loop muted playsInline
                    className="w-full md:w-[63%] md:ml-auto rounded-lg shadow-xl"
                  >
                    <source src="/videos/quinta-attention-to-detail.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 md:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="mb-16 text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                  {t.quinta.resultsTitle.split(' ')[0]} <span className="italic">{t.quinta.resultsTitle.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {t.quinta.resultsText1}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {t.quinta.resultsText2}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/videos/quinta-results-01.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/videos/quinta-results-02.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/videos/quinta-results-03.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Works for Wine Brands - with wine image */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    {t.quinta.whyWineTitle.split(' ').slice(0, 2).join(' ')} <span className="italic">{t.quinta.whyWineTitle.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    {t.quinta.whyWineText}
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                      <h3 className="text-xl font-semibold mb-2">{t.quinta.whyWine1Title}</h3>
                      <p className="text-muted-foreground">{t.quinta.whyWine1Text}</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h3 className="text-xl font-semibold mb-2">{t.quinta.whyWine2Title}</h3>
                      <p className="text-muted-foreground">{t.quinta.whyWine2Text}</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h3 className="text-xl font-semibold mb-2">{t.quinta.whyWine3Title}</h3>
                      <p className="text-muted-foreground">{t.quinta.whyWine3Text}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:mt-16">
                  <img 
                    src={wineBrandsImage} 
                    alt="Wine bottles held up against blue sky" 
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Want to Automate Your Socials? - NEW SECTION */}
        <section className="py-20 md:py-32 bg-foreground">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-background">
                  {t.quinta.automateTitle}
                </h2>
                <p className="text-lg md:text-xl text-background/80 leading-relaxed mb-8">
                  {t.quinta.automateText}{' '}
                  <a href="/work/O_Palmeiral_showcase" className="text-primary underline hover:text-primary/80 font-medium">O Palmeiral</a>
                  {' '}{t.quinta.automateAnd}{' '}
                  <a href="/work/salt_lily_showcase" className="text-primary underline hover:text-primary/80 font-medium">Salt Lily Jewellery</a>
                  {' '}{t.quinta.automateHere}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About NU Studios */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-7xl lg:max-w-[1400px] xl:max-w-[1600px]">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                <img 
                  src={nusLogo} 
                  alt="NU Studios logo" 
                  className="w-24 h-24 md:w-auto md:h-auto md:max-h-[180px] rounded-full object-contain mx-auto md:mx-0"
                />
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    {t.quinta.aboutTitle.split(' ')[0]} <span className="italic">{t.quinta.aboutTitle.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t.quinta.aboutText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {t.quinta.ctaTitle.split(' ').slice(0, 2).join(' ')} <span className="italic">{t.quinta.ctaTitle.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                {t.quinta.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={scrollToContact} className="gap-2">
                  {t.quinta.ctaButton}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:hello@nustudios.co.uk">{t.quinta.ctaEmail}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation - fixed to point to existing projects */}
        <ProjectNavigation 
          prevProject={{
            title: 'O Palmeiral',
            slug: '/work/O_Palmeiral_showcase',
            thumbnail: palmeiralHeader
          }}
          nextProject={{
            title: 'Salt Lily Jewellery',
            slug: '/work/salt_lily_showcase',
            thumbnail: saltLilyGoat
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default QuintaDoPinto;
