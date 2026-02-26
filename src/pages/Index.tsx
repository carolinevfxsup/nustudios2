import { Header } from '@/components/Header';
import { HeroNew } from '@/components/HeroNew';
import { AddOnServices } from '@/components/AddOnServices';
import { ComparisonTable } from '@/components/ComparisonTable';
import { CaseStudyGrid } from '@/components/CaseStudyGrid';
import { BrandVault } from '@/components/BrandVault';
import { CTABanner } from '@/components/CTABanner';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroNew />
        <AddOnServices />
        <ComparisonTable />
        <CaseStudyGrid />
        <BrandVault />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
