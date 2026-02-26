import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import quintaHeader from '@/assets/quinta-do-pinto-header.jpg';
import saltLilyImg from '@/assets/salt-lily/jewelry_prodoct.jpg';
import franksImg from '@/assets/franks/franks-product-cycle.jpeg';

const studies = [
  {
    title: 'Quinta do Pinto',
    category: 'Wine',
    focus: 'Virtual Staging',
    description: 'Cinematic AI imagery that brought a Portuguese wine launch to life — without a single production shoot.',
    image: quintaHeader,
    link: '/work/quinta-do-pinto',
  },
  {
    title: 'Salt Lily',
    category: 'Jewellery',
    focus: 'Style DNA',
    description: 'Hyper-consistent macro imagery and automated social pipeline for a waterproof jewellery brand.',
    image: saltLilyImg,
    link: '/work/salt_lily_showcase',
  },
  {
    title: 'Franks Australia',
    category: 'E-comm',
    focus: 'Operational Freedom',
    description: 'Autonomous content creation and social publishing — an e-commerce brand running on autopilot.',
    image: franksImg,
    link: '/work/franks-australia',
  },
];

export function CaseStudyGrid() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            <span className="font-bold">Proof,</span>{' '}
            <span className="italic bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Not Promises
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-background/80 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {study.category}
                  </span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-xs text-muted-foreground">{study.focus}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {study.title}
                </h3>
                <a
                  href={study.link}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  View Live Work
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
