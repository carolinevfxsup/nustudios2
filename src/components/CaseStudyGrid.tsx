import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import quintaHeader from '@/assets/quinta-do-pinto-header.jpg';
import saltLilyImg from '@/assets/salt-lily/jewelry_prodoct.jpg';
import franksImg from '@/assets/franks/franks-product-cycle.jpeg';

const studies = [
  {
    title: 'Quinta do Pinto',
    category: 'Wine',
    focus: 'Virtual Staging',
    description:
      'Cinematic AI imagery that brought a Portuguese wine launch to life — without a single production shoot.',
    image: quintaHeader,
    link: '/work/quinta-do-pinto',
  },
  {
    title: 'Salt Lily',
    category: 'Jewellery',
    focus: 'Visual Intelligence',
    description:
      '100% consistency across luxury assets. Hyper-consistent macro imagery powered by Style DNA.',
    image: saltLilyImg,
    link: '/work/salt_lily_showcase',
  },
  {
    title: 'Franks Australia',
    category: 'E-comm',
    focus: 'Operational Freedom',
    description:
      'Autonomous content creation and social publishing — an e-commerce brand running on autopilot.',
    image: franksImg,
    link: '/work/franks-australia',
  },
];

export function CaseStudyGrid() {
  return (
    <section id="work" className="py-28 bg-foreground">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-20">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            Proof in Production
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-background mb-4">
            <span className="font-bold">The Engine</span>{' '}
            <span className="italic text-primary">in Action</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.a
              key={i}
              href={study.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-border/20 bg-card/10 cursor-pointer block"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

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
                  <span className="text-xs text-muted-foreground">
                    {study.focus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-background">
                    {study.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
