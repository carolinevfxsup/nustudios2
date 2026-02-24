import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectNavigation } from '@/components/ProjectNavigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Palette, Package, Clapperboard, ShoppingBag, Bot, PenTool, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import franksProductCycle from '@/assets/franks/franks-product-cycle.jpeg';
import franksSustainability from '@/assets/franks/franks-sustainability.jpeg';
import quintaThumbnail from '@/assets/quinta-after.png';
import saltLilyThumbnail from '@/assets/salt-lily/GOAT.png';
import palmeiralHeader from '@/assets/palmeiral-header.avif';

const processSteps = [
  { icon: Palette, title: 'Concept Development', desc: 'Original artwork and creative direction' },
  { icon: PenTool, title: 'Product Design Support', desc: 'From artwork to garment mockups' },
  { icon: Package, title: 'Production Assets', desc: 'Launch-ready visuals and brand collateral' },
  { icon: ShoppingBag, title: 'Shopify Deployment', desc: 'Full store setup and product pages' },
  { icon: Bot, title: 'Blog & SEO Automation', desc: 'Daily content driving organic traffic' },
  { icon: Rocket, title: 'Social Media Automation', desc: 'Consistent posting across channels' },
];

export default function FranksAustralia() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img src={franksProductCycle} alt="Franks Australia product cycle" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[100px] py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
              From Concept to <span className="italic">Conversion.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md mb-10">
              We built Franks Australia from product idea to fully realised e-commerce engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('full-system')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2 text-lg px-8">
                View the Full System <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'https://www.nustudios.co.uk/#contact'} className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Start Your Build
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE COMPLETE PRODUCT-TO-MARKET CYCLE */}
      <section id="full-system" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              The Creative <span className="italic">Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't deliver isolated assets. We build connected systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="group p-8 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-4xl font-display font-bold text-muted-foreground/20">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE 1 — FROM ARTWORK TO PRODUCT */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Franks Australia didn't just need content. They needed structure, direction, and scalability. We built the entire ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Concept Becomes <span className="italic">Product.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We developed the artwork, supported garment design, and ensured the creative translated flawlessly from illustration to wearable product.
              </p>
            </div>
            <div>
              <img src={franksProductCycle} alt="From artwork to swim shorts" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CASE 2 — PRODUCTION & BRAND EXECUTION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={franksProductCycle} alt="Lifestyle beach photography" className="w-full rounded-lg shadow-xl" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Production Built on <span className="italic">Strategy.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Every asset aligned with defined brand voice and positioning. Nothing was created in isolation.
              </p>
              <ul className="space-y-3">
                {['High-end lifestyle photography', 'Cinematic marketing video', 'Shopify-ready product imagery', 'Launch-ready visual content'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <Check className="h-4 w-4 text-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE 3 — CONTENT & AUTOMATION */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Creative That <span className="italic">Doesn't Stop.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We built publishing infrastructure to ensure consistent storytelling, discoverability, and scalable growth.
              </p>
              <ul className="space-y-3">
                {['Blog system setup', 'SEO content automation', 'Social media automation', 'Content scheduling systems'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center border border-foreground">
                      <Check className="h-4 w-4 text-foreground" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground italic">"Making Waves, Not Waste" — sustainability blog article driving organic traffic</p>
              </div>
            </div>
            <div>
              <img src={franksSustainability} alt="Sustainability blog and automation" className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* THE MACHINE */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
              A Seamless Creative Engine for <span className="italic">E-commerce Brands.</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {['Product Architecture', 'Brand Identity', 'Production Execution', 'Shopify Integration', 'Automated Marketing Systems'].map((item) => (
                <div key={item} className="p-4 border border-background/20 rounded-lg">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              We function as an embedded creative department — without the internal overhead.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Built <span className="italic">For:</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['Jewellery Brands', 'Fashion Labels', 'DTC Product Startups', 'E-commerce Scale-Ups'].map((item) => (
              <div key={item} className="p-6 border border-border rounded-lg text-center">
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            If you're coordinating designers, photographers, developers and marketers separately — there's a more efficient way.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Build the System Once. <span className="italic">Let It Scale.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" onClick={() => window.location.href = 'https://www.nustudios.co.uk/#contact'} className="text-lg px-10 gap-2">
              Start Your End-to-End Build <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:hello@nustudios.co.uk">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{
          title: 'O Palmeiral',
          slug: '/work/O_Palmeiral_showcase',
          thumbnail: palmeiralHeader
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
