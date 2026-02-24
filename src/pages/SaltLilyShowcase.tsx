import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Upload, FolderOpen, Hash, UserCheck, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';

// Assets
import goatBefore from '@/assets/salt-lily/GOAT.png';
import heroAfter from '@/assets/salt-lily/Gemini_Generated_Image_gx9357gx9357gx93_1.jpeg';
import femmeHer from '@/assets/salt-lily/FEMME_HER.png';
import jewelryProduct from '@/assets/salt-lily/jewelry_prodoct.jpg';
import necklaceAndHoops from '@/assets/salt-lily/necklace_and_hoops.png';
import sourceStill from '@/assets/salt-lily/baae6b23-4f9e-49d9-8b07-9c5b8efbd951.jpg';
import femmeProductAfter from '@/assets/salt-lily/Salt_lily_FEMME_product.png';
import femmeProductBefore from '@/assets/salt-lily/Salt_lily_FEMME_product_earring.png';
import slider2Before from '@/assets/salt-lily/94eb8954-6637-43f2-9553-042705895ff8.jpg';
import slider2After from '@/assets/salt-lily/ChunkyFinal.jpg';
import slider3Before from '@/assets/salt-lily/5a56838a-7813-48c8-ae76-5898844dc13a.jpg';
import heartNW from '@/assets/salt-lily/heart_NW.jpeg';
import smilingNoWatermark from '@/assets/salt-lily/smiling_no_watermark.jpeg';
import productsMobile from '@/assets/salt-lily/products_mobile.jpg';
import slider4Before from '@/assets/salt-lily/21be479c-78f9-4710-8412-0dbeee5747a7_1.jpg';
import socialsImg from '@/assets/salt-lily/socials.webp';
import saltLilyLast from '@/assets/salt-lily/salt-lily-last.png';
import quintaHeader from '@/assets/quinta-do-pinto-header.jpg';
import palmeiralHeader from '@/assets/palmeiral-header.avif';
import nusLogo from '@/assets/nus-logo-round.png';

export default function SaltLilyShowcase() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1) HERO — with necklace and hoops background */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={necklaceAndHoops}
            alt="Salt Lily hoops and earrings"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
              {t.saltLily.heroTitle} <span className="italic">{t.saltLily.heroTitleItalic}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md mb-2">
              {t.saltLily.heroText1}
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed drop-shadow-md mb-10">
              {t.saltLily.heroText2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="gap-2 text-lg px-8">
                {t.saltLily.viewWork}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'https://www.nustudios.co.uk/#contact'}
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                {t.saltLily.bookCall}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) THE BRAND WE BUILT THIS FOR */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.saltLily.brandTitle} <span className="italic">{t.saltLily.brandTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.saltLily.brandText1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.saltLily.brandText2}
              </p>
            </div>
            <div>
              <img alt="GOAT earring close-up" className="w-full rounded-lg" src="/lovable-uploads/4ce67d87-2d7b-4bac-9ac6-cf49388b956b.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Jewellery Is Hard */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.saltLily.whyHardTitle} <span className="italic">{t.saltLily.whyHardTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.saltLily.whyHardText1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.saltLily.whyHardText2}
              </p>
            </div>
            <div>
              <img src={femmeHer} alt="FEMME jewellery editorial" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 3) FEED-READY IMAGERY */}
      <section id="showcase" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            {t.saltLily.feedTitle} <span className="italic">{t.saltLily.feedTitleItalic}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            {t.saltLily.feedText}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img alt={t.saltLily.feedBasic} className="w-full h-full object-cover hidden md:block" src="/lovable-uploads/73d4e0cd-f0b4-4e53-9e7a-b9d51bf380b7.jpg" />
                <img alt={t.saltLily.feedBasic} className="w-full h-full object-cover md:hidden" src={productsMobile} />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">{t.saltLily.feedBasic}</p>
            </div>
            <div className="space-y-3 hidden md:block">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img alt={t.saltLily.feedEarring} className="w-full h-full object-cover" src="/lovable-uploads/49b80539-fe19-479e-9dae-e0eb82e19511.jpg" />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">{t.saltLily.feedEarring}</p>
            </div>
            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img alt={t.saltLily.feedSocial} className="w-full h-full object-cover" src="/lovable-uploads/a1e92cc3-97b4-444d-81f5-2e203c63bbf3.png" />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">{t.saltLily.feedSocial}</p>
            </div>
            <div className="space-y-3 hidden md:block">
              <div className="aspect-square overflow-hidden rounded-lg">
                <video src="/videos/sped_up_video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">{t.saltLily.feedVideo}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM STILL TO VIDEO */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            {t.saltLily.stillToVideoTitle} <span className="italic">{t.saltLily.stillToVideoTitleItalic}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            {t.saltLily.stillToVideoText}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img src={sourceStill} alt={t.saltLily.sourceStill} className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center">{t.saltLily.sourceStill}</p>
            </div>
            <div className="space-y-4">
              <video src="/videos/salt-lily-zoom.mp4" autoPlay muted loop playsInline className="w-full rounded-lg" />
              <p className="text-sm text-muted-foreground text-center">{t.saltLily.resultVideo}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) PRODUCT IMAGERY */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 max-w-3xl">
            {t.saltLily.productTitle} <span className="italic">{t.saltLily.productTitleItalic}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            {t.saltLily.productText}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg">
              <BeforeAfterSlider beforeImage={femmeProductBefore} afterImage={femmeProductAfter} beforeLabel="Product Shot" afterLabel="Launch-Ready" className="w-full h-full [&_img]:object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <BeforeAfterSlider beforeImage={slider2Before} afterImage={slider2After} beforeLabel="Before" afterLabel="After" className="w-full h-full [&_img]:object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <BeforeAfterSlider beforeImage={slider3Before} afterImage={heartNW} beforeLabel="Before" afterLabel="After" className="w-full h-full [&_img]:object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <BeforeAfterSlider beforeImage={slider4Before} afterImage={smilingNoWatermark} beforeLabel="Before" afterLabel="After" className="w-full h-full [&_img]:object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5) THE AI BRAIN — fixed mobile overflow */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="min-w-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                {t.saltLily.aiBrainTitle} <span className="italic">{t.saltLily.aiBrainTitleItalic}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.saltLily.aiBrainText}
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/work/O_Palmeiral_showcase">
                  {t.saltLily.aiBrainLink}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="min-w-0">
              <img src={socialsImg} alt="AI social media automation network" className="w-full max-w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 6) HOW THE AI WORKS FOR SOCIALS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            {t.saltLily.howSocialsTitle} <span className="italic">{t.saltLily.howSocialsTitleItalic}</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Upload className="h-6 w-6" />, step: '01' },
              { icon: <FolderOpen className="h-6 w-6" />, step: '02' },
              { icon: <Hash className="h-6 w-6" />, step: '03' },
              { icon: <UserCheck className="h-6 w-6" />, step: '04' },
              { icon: <Send className="h-6 w-6" />, step: '05' },
              { icon: <Mail className="h-6 w-6" />, step: '06' },
            ].map((item, index) => (
              <div key={item.step} className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">{item.icon}</div>
                  <span className="text-2xl font-display font-bold text-muted-foreground/40">{item.step}</span>
                </div>
                <p className="text-foreground font-medium">{t.saltLily.socialSteps[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG AUTOMATION */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            {t.saltLily.blogTitle} <span className="italic">{t.saltLily.blogTitleItalic}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {t.saltLily.blogSteps.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.saltLily.blogText1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.saltLily.blogText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM SYSTEM TO PUBLISHED CONTENT — replaced Instagram embed with image */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <img src={nusLogo} alt="NU Studios logo" className="w-16 h-16 rounded-full object-contain" />
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  {t.saltLily.systemTitle} <span className="italic">{t.saltLily.systemTitleItalic}</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.saltLily.systemText1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.saltLily.systemText2}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={saltLilyLast}
                alt="Salt Lily jewellery on model"
                className="w-full max-w-[540px] rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 max-w-3xl">
            {t.saltLily.outcomesTitle} <span className="italic">{t.saltLily.outcomesTitleItalic}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {t.saltLily.outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t.saltLily.ctaTitle} <span className="italic">{t.saltLily.ctaTitleItalic}</span>
          </h2>
          <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
            {t.saltLily.ctaText}
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = 'https://www.nustudios.co.uk/#contact'}
            className="text-lg px-10 bg-primary text-primary-foreground hover:bg-primary/90">
            {t.saltLily.bookCall}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{
          title: 'Quinta do Pinto',
          slug: '/work/quinta-do-pinto',
          thumbnail: quintaHeader
        }}
        nextProject={{
          title: 'O Palmeiral',
          slug: '/work/O_Palmeiral_showcase',
          thumbnail: palmeiralHeader
        }}
      />

      <Footer />
    </div>
  );
}
