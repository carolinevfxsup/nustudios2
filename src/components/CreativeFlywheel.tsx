import { useState } from 'react';
import { motion } from 'framer-motion';

const segments = [
  {
    label: 'Attract',
    description: 'High-impact AI visuals to draw initial attention.',
    tooltip: 'Human-in-the-loop: Every visual is reviewed by our creative directors before publishing.',
    color: 'hsl(var(--primary))',
    startAngle: 0,
  },
  {
    label: 'Engage',
    description: 'Automated social threads and SEO blogs that keep the conversation going 24/7.',
    tooltip: 'Human-in-the-loop: Content strategy and tone-of-voice are locked in by your team.',
    color: 'hsl(var(--secondary))',
    startAngle: 120,
  },
  {
    label: 'Delight',
    description: 'Feeding results back into the Brand Vault to improve the next rotation.',
    tooltip: 'Human-in-the-loop: Performance data is reviewed monthly to refine the AI model.',
    color: 'hsl(var(--accent))',
    startAngle: 240,
  },
];

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const startRad = (Math.PI / 180) * (startDeg - 90);
  const endRad = (Math.PI / 180) * (endDeg - 90);
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

function labelPosition(cx: number, cy: number, r: number, midDeg: number) {
  const rad = (Math.PI / 180) * (midDeg - 90);
  return { x: cx + r * 0.55 * Math.cos(rad), y: cy + r * 0.55 * Math.sin(rad) };
}

export function CreativeFlywheel() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cx = 200, cy = 200, r = 170;

  return (
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-background mb-4">
            <span className="font-bold">The Creative</span>{' '}
            <span className="italic text-primary">Flywheel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A self-reinforcing system that gets smarter and faster with every rotation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          {/* SVG Flywheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <svg viewBox="0 0 400 400" className="w-72 h-72 md:w-96 md:h-96">
              {segments.map((seg, i) => {
                const startA = seg.startAngle;
                const endA = startA + 115;
                const mid = startA + 57.5;
                const pos = labelPosition(cx, cy, r, mid);
                return (
                  <g
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    <path
                      d={describeArc(cx, cy, r, startA + 2, endA)}
                      fill={hovered === i ? seg.color : `${seg.color}`}
                      opacity={hovered === i ? 1 : 0.7}
                      className="transition-opacity duration-300"
                    />
                    <motion.text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="hsl(var(--foreground))"
                      fontSize="16"
                      fontWeight="bold"
                      className="pointer-events-none font-display"
                      style={{ transform: `rotate(0deg)`, transformOrigin: `${pos.x}px ${pos.y}px` }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                      {seg.label}
                    </motion.text>
                  </g>
                );
              })}
              {/* Center circle */}
              <circle cx={cx} cy={cy} r="50" fill="hsl(var(--foreground))" />
              <motion.text
                x={cx} y={cy}
                textAnchor="middle" dominantBaseline="middle"
                fill="hsl(var(--primary))"
                fontSize="11"
                fontWeight="bold"
                className="font-mono"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                BRAND VAULT
              </motion.text>
            </svg>
          </motion.div>

          {/* Info panel */}
          <div className="max-w-md space-y-6">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  hovered === i
                    ? 'border-primary bg-primary/10'
                    : 'border-border/30 bg-card/5'
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <h3 className="font-display font-bold text-background text-lg mb-1">
                  {seg.label}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{seg.description}</p>
                {hovered === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-primary text-xs font-mono border-t border-primary/20 pt-2 mt-2"
                  >
                    🔒 {seg.tooltip}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
