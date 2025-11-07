import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-16 pb-4 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo Profile */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-primary overflow-hidden">
                <img 
                  src="/photo-david.jpeg" 
                  alt="David Hoffnung" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
                  David Hoffnung
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Product Manager - Santé Numérique
                </p>
                <p className="text-lg text-muted-foreground font-medium">
                  Docteur en Pharmacie
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Expert en Product Management spécialisé dans la santé digitale, je combine une expertise pharmaceutique 
                et une maîtrise du cycle de vie produit pour créer des solutions innovantes qui transforment les parcours de soin.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-2 text-sm md:text-base">
                <a 
                  href="mailto:david.hoffnung@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4" />
                  <span>david.hoffnung@gmail.com</span>
                </a>
                <a 
                  href="tel:+33628521778" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start"
                >
                  <Phone className="h-4 w-4" />
                  <span>+33 6 28 52 17 78</span>
                </a>
                <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>Juvignac (34990)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
