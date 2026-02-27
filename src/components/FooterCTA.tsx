import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export function FooterCTA() {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Let us make your vision{' '}
              <span className="font-display italic text-primary">a reality.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=351939517942', '_blank')}
                className="rounded-full px-8 py-6 text-sm font-semibold"
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const showcase = document.getElementById('showcase');
                  showcase?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full px-8 py-6 text-sm font-semibold"
              >
                View Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold tracking-widest">NUSTUDIOS</p>
              <p className="text-[10px] font-semibold tracking-widest text-muted-foreground mt-1">CREATIVE SCALE PARTNERS</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:hello@nustudios.co.uk" className="hover:text-foreground transition-colors flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> hello@nustudios.co.uk
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Lisbon · London
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NU Studios. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
