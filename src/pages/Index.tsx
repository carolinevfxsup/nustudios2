import { Header } from '@/components/Header';
import { HeroNew } from '@/components/HeroNew';
import { TheStruggle } from '@/components/TheStruggle';
import { TheJourney } from '@/components/TheJourney';
import { CreativeServices } from '@/components/CreativeServices';
import { Showcase } from '@/components/Showcase';
import { CompetitiveAdvantage } from '@/components/CompetitiveAdvantage';
import { FooterCTA } from '@/components/FooterCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroNew />
        <TheStruggle />
        <TheJourney />
        <CreativeServices />
        <Showcase />
        <CompetitiveAdvantage />
      </main>
      <FooterCTA />
    </div>
  );
};

export default Index;
