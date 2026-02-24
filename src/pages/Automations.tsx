import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Video, Users, ShoppingCart, Briefcase } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { HowItWorks } from '@/components/HowItWorks';
import aiAutomationNetwork from '@/assets/ai-automation-network.jpg';
import headerMobileAutomations from '@/assets/header-mobile-automations.jpg';

export function Automations() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: 'Content Creation & Social Media',
      icon: Video,
      description: 'Automate your content workflow and maximize your social reach.',
      automations: [
        'AI Video Editing: Turn raw footage into polished clips automatically.',
        'Content Repurposing: Transform long-form content into multiple formats (shorts, reels, stories).',
        'Social Media Scheduling: Auto-post across all platforms at optimal times.',
        'Caption Generation: AI-powered captions that match your brand voice.',
        'Hashtag Research: Automatically find and apply trending hashtags.',
        'Performance Analytics: Track engagement and optimize content strategy.',
      ],
    },
    {
      title: 'Lead Generation',
      icon: Users,
      description: 'Scale your outreach and convert more leads with intelligent automation.',
      automations: [
        'Email Outreach Campaigns: Personalized sequences that nurture leads automatically.',
        'Lead Scoring: AI ranks prospects based on engagement and conversion likelihood.',
        'CRM Integration: Sync leads across all your tools seamlessly.',
        'Chatbot Qualification: Pre-qualify leads 24/7 before human handoff.',
        'Follow-up Automation: Never miss a follow-up with smart reminders.',
        'A/B Testing: Automatically test and optimize messaging.',
      ],
    },
    {
      title: 'E-commerce',
      icon: ShoppingCart,
      description: 'Drive sales and reduce cart abandonment with automated workflows.',
      automations: [
        'Cart Abandonment Recovery: Automated emails and SMS to recover lost sales.',
        'Product Recommendations: AI-powered suggestions based on browsing behavior.',
        'Inventory Management: Auto-alerts and restocking workflows.',
        'Order Tracking Notifications: Keep customers informed automatically.',
        'Review Collection: Automated requests post-purchase.',
        'Dynamic Pricing: AI adjusts prices based on demand and competition.',
      ],
    },
    {
      title: 'Professional Services',
      icon: Briefcase,
      description: 'Streamline operations and focus on delivering exceptional service.',
      automations: [
        'Appointment Scheduling: Automated booking and calendar management.',
        'Client Onboarding: Welcome sequences and document collection.',
        'Invoice Generation: Automatic invoicing based on project milestones.',
        'Proposal Creation: Generate professional proposals from templates.',
        'Project Status Updates: Auto-notify clients of progress.',
        'Contract Management: Digital signing and renewal reminders.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Header Image */}
        <section className="w-full bg-background">
          {/* Mobile header */}
          <img 
            src={headerMobileAutomations} 
            alt="AI Automation Network connecting various platforms and services" 
            className="w-full h-auto object-cover md:hidden"
          />
          {/* Desktop header */}
          <img 
            src={aiAutomationNetwork} 
            alt="AI Automation Network connecting various platforms and services" 
            className="w-full h-auto object-cover hidden md:block"
          />
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background via-background to-muted/20">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display mb-6">
                <span className="font-bold">Transform</span>{' '}
                <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">Your Business.</span>{' '}
                <span className="font-bold">Automate</span>{' '}
                <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">Your Edge.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Unlock unparalleled efficiency and accelerate your business growth by leveraging 
                intelligent AI automations that handle the heavy lifting, so you can focus on what truly matters.
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-xs sm:text-sm md:text-base">
                Schedule Your Free Automation Strategy Session
              </Button>
            </div>
          </div>
        </section>

        {/* Automation Catalog */}
        <section id="services-detail" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display mb-4">
                <span className="font-bold">Automation</span>{' '}
                <span className="italic">Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive automation catalog across key business functions.
              </p>
            </div>

            <div className="grid gap-12">
              {categories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <Card key={idx} className="p-8 md:p-12 border-2 hover:border-primary transition-all duration-300">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-2xl bg-[#e1f89d] border-2 border-black shrink-0">
                        <Icon className="h-10 w-10 text-black" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display mb-3">
                          <span className="font-bold">{category.title.split(' ')[0]}</span>{' '}
                          <span className="italic">{category.title.split(' ').slice(1).join(' ')}</span>
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 ml-0 md:ml-24">
                      {category.automations.map((automation, i) => {
                        const [title, ...rest] = automation.split(':');
                        const description = rest.join(':');
                        return (
                          <li key={i} className="text-muted-foreground">
                            <span className="font-bold text-foreground">{title}</span>
                            {description && `: ${description}`}
                          </li>
                        );
                      })}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Value Proposition */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 border-y-2 border-border">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display mb-6">
                <span className="font-bold">Stop</span>{' '}
                <span className="italic">Working Harder.</span>{' '}
                <span className="font-bold">Start</span>{' '}
                <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">Working Smarter.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The modern business landscape demands speed and precision. Manual, repetitive tasks 
                drain your team's energy and introduce errors. We integrate custom AI workflows directly 
                into your operations, creating a smarter, faster, and more scalable business foundation. 
                We don't just build systems; we engineer sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Closing CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
          <div className="container mx-auto px-4 md:px-8 xl:px-[100px] text-center">
            <h2 className="text-3xl md:text-5xl font-display mb-6">
              <span className="font-bold">Let's</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">Design</span>{' '}
              <span className="font-bold">Your Custom</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">AI Workflow.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't sell templates; we build solutions tailored to your unique business needs. 
              Get started with a strategy session to map out the automations that will generate 
              the highest ROI for your business.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Book a Discovery Call
            </Button>
          </div>
        </section>
        
        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
