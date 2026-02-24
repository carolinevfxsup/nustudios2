import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface ProjectLink {
  title: string;
  slug: string;
  thumbnail: string;
}

interface ProjectNavigationProps {
  prevProject?: ProjectLink;
  nextProject?: ProjectLink;
}

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61586776385041',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/nustudios.agency/',
      label: 'Instagram'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@NUStudiosAIVFX',
      label: 'YouTube'
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="https://www.tiktok.com/@nustudios_ai_vfx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-between items-start">
          {/* Previous Project */}
          {prevProject ? (
            <Link 
              to={prevProject.slug}
              className="group flex items-start gap-4"
            >
              <ArrowLeft className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="flex flex-col items-start gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={prevProject.thumbnail} 
                    alt={prevProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Prev. Project</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{prevProject.title}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Center - Back to Work */}
          <Link 
            to="/#work"
            className="hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">All Work</span>
            <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 14l-4-4 4-4" />
              <path d="M15 14l4-4-4-4" />
            </svg>
          </Link>

          {/* Next Project */}
          {nextProject ? (
            <Link 
              to={nextProject.slug}
              className="group flex items-start gap-4 text-right"
            >
              <div className="flex flex-col items-end gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={nextProject.thumbnail} 
                    alt={nextProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Next Project</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{nextProject.title}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};
