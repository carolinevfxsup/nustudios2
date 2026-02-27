import { motion } from 'framer-motion';

const showcaseItems = [
  {
    title: 'Wine & Spirits',
    subtitle: 'Quinta do Pinto',
    href: '/work/quinta-do-pinto',
    image: '/lovable-uploads/73d4e0cd-f0b4-4e53-9e7a-b9d51bf380b7.jpg',
  },
  {
    title: 'Jewellery',
    subtitle: 'Salt Lily',
    href: '/work/salt_lily_showcase',
    image: '/lovable-uploads/4ce67d87-2d7b-4bac-9ac6-cf49388b956b.jpg',
  },
  {
    title: 'Fine Dining',
    subtitle: 'O Palmeiral',
    href: '/work/O_Palmeiral_showcase',
    image: '/lovable-uploads/49b80539-fe19-479e-9dae-e0eb82e19511.jpg',
  },
  {
    title: 'E-commerce',
    subtitle: 'Franks Australia',
    href: '/work/franks-australia',
    image: '/lovable-uploads/a1e92cc3-97b4-444d-81f5-2e203c63bbf3.png',
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display italic text-primary">Showcase</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {showcaseItems.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-4xl overflow-hidden aspect-[4/3] block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-xs font-semibold tracking-widest text-white/70 mb-1">{item.subtitle}</p>
                <h3 className="text-xl lg:text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
