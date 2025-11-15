import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectCaseStudyProps {
  title: string;
  tagline: string;
  image?: string;
  context: string;
  problem: string;
  role: string;
  discovery: {
    research: string[];
    artifacts?: string[];
  };
  strategy: {
    roadmap: string[];
    prioritization: string;
  };
  delivery: {
    design: string[];
    execution: string[];
    artifacts?: string[];
  };
  results: {
    user: string[];
    business: string[];
    learning: string;
  };
  tags: string[];
}

const ProjectCaseStudy = ({
  title,
  tagline,
  image,
  context,
  problem,
  role,
  discovery,
  strategy,
  delivery,
  results,
  tags
}: ProjectCaseStudyProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{tagline}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Image du projet */}
      {image && (
        <div className="w-full h-80 md:h-96 bg-secondary/30 overflow-hidden rounded-lg border border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Contexte & Problème */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Le contexte & le problème</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Le contexte</h3>
              <p className="text-muted-foreground leading-relaxed">{context}</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-2">Le problème utilisateur/business</h3>
              <p className="text-muted-foreground leading-relaxed">{problem}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mon Rôle */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Mon rôle & mes responsabilités</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">{role}</p>
          </CardContent>
        </Card>
      </section>

      {/* La Démarche */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">La démarche & Les actions</h2>
        
        {/* Phase de Discovery */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Phase de discovery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {discovery.research.map((item, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                • {item}
              </p>
            ))}
            {discovery.artifacts && discovery.artifacts.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Artefacts : {discovery.artifacts.join(", ")}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Phase de Stratégie */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Phase de stratégie & priorisation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {strategy.roadmap.map((item, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                • {item}
              </p>
            ))}
            <Separator className="my-4" />
            <p className="text-muted-foreground leading-relaxed">{strategy.prioritization}</p>
          </CardContent>
        </Card>

        {/* Phase de Conception & Livraison */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Phase de conception & livraison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {delivery.design.map((item, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                • {item}
              </p>
            ))}
            <Separator className="my-4" />
            {delivery.execution.map((item, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed">
                • {item}
              </p>
            ))}
            {delivery.artifacts && delivery.artifacts.length > 0 && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Artefacts : {delivery.artifacts.join(", ")}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Les Résultats */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Les résultats & L'impact</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Résultats pour l'utilisateur</h3>
              <ul className="space-y-2">
                {results.user.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-3">Résultats pour le business</h3>
              <ul className="space-y-2">
                {results.business.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-3">Mon apprentissage</h3>
              <p className="text-muted-foreground leading-relaxed italic">{results.learning}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;

