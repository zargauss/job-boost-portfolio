import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "plateforme-telesurveillance",
      title: "Plateforme de télésurveillance & coordination des soins",
      description: "Solution digitale complète pour le suivi des patients en pathologie chronique avec alertes en temps réel",
      tags: ["Professionnel","Product Management", "Healthcare", "MDR"],
      link: "/projets/plateforme-telesurveillance"
    },
    {
      id: "dispositif-medical-parkinson",
      title: "Dispositif médical - Parkinson",
      description: "Développement d'un dispositif médical innovant de classe I pour l'amélioration de la qualité de vie des patients",
      tags: ["Professionnel","R&D", "ISO 13485", "Clinical Research"],
      link: "/projets/dispositif-medical-parkinson"
    },
    {
      id: "application-suivi-rch",
      title: "Application de suivi RCH",
      description: "Plateforme mobile dédiée au suivi personnalisé des patients atteints de Rectocolite Hémorragique, permettant une meilleure adhésion thérapeutique et un monitoring proactif des poussées inflammatoires",
      tags: ["Personnel","Product Management", "Mobile Health", "Chronic Disease"],
      link: "/projets/application-suivi-rch"
    },
    {
      id: "plateforme-panel-anticorps",
      title: "Plateforme de création de panel d'anticorps",
      description: "Solution B2B innovante pour la recherche pharmaceutique permettant aux laboratoires de concevoir et valider des panels d'anticorps personnalisés avec une réduction significative des délais de développement",
      tags: ["Personnel","Product Management", "B2B Healthcare", "Research Tools"],
      link: "/projets/plateforme-panel-anticorps"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-xl px-6 py-2 border-primary text-primary">Projets</Badge>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez quelques-uns des projets sur lesquels j'ai travaillé dans le domaine de la santé numérique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border bg-background hover:border-primary transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <Link to={project.link}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Voir plus
                        </Link>
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
