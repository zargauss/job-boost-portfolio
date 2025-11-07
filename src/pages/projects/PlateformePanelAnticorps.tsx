import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const PlateformePanelAnticorps = () => {
  return (
    <ProjectLayout>
      <ProjectCaseStudy
        title="Plateforme B2B de Création de Panels d'Anticorps pour la Recherche Pharmaceutique"
        tagline="Comment nous avons conçu une plateforme SaaS permettant aux laboratoires de recherche de réduire de 60% les délais de développement de panels d'anticorps personnalisés, tout en garantissant la qualité et la traçabilité."
        context="En partenariat avec une biotech spécialisée en développement d'anticorps thérapeutiques, nous avons identifié un besoin critique dans le processus de recherche pharmaceutique. Les laboratoires développaient des panels d'anticorps (combinaisons d'anticorps pour des tests diagnostiques ou thérapeutiques) via un processus manuel, fragmenté et chronophage, avec des outils Excel et des échanges email multiples entre chercheurs, ingénieurs et fournisseurs."
        problem="Les laboratoires de recherche pharmaceutique passaient en moyenne 8 à 12 semaines pour développer un panel d'anticorps personnalisé, avec un processus complexe impliquant la sélection manuelle d'anticorps, la validation de compatibilité, la gestion des commandes auprès de multiples fournisseurs, et la traçabilité des lots. 40% des projets échouaient en phase de validation à cause d'incompatibilités non détectées, et 25% des délais étaient liés à des erreurs de coordination entre équipes. Les chercheurs manquaient d'outils pour visualiser les interactions entre anticorps et optimiser leurs panels. La traçabilité des lots était un enjeu critique pour la conformité réglementaire, mais gérée manuellement via des fichiers Excel dispersés."
        role="En tant que Product Manager, j'étais responsable de la stratégie produit, de la discovery avec les utilisateurs B2B (chercheurs, ingénieurs R&D, responsables qualité) et de la coordination avec une équipe de 5 développeurs full-stack et 1 designer. J'ai travaillé en étroite collaboration avec les équipes de la biotech partenaire pour comprendre les workflows de recherche et garantir l'alignement avec leurs besoins opérationnels."
        discovery={{
          research: [
            "J'ai mené 25 entretiens avec des chercheurs, ingénieurs R&D et responsables qualité de 8 laboratoires pharmaceutiques pour cartographier leurs processus de développement de panels.",
            "J'ai analysé les workflows existants en observant directement 3 laboratoires partenaires, en identifiant les points de friction et les opportunités d'automatisation.",
            "J'ai interviewé 5 fournisseurs d'anticorps pour comprendre leurs processus et identifier les opportunités d'intégration API.",
            "J'ai étudié 3 solutions concurrentes ou complémentaires (Luminex, Bio-Rad, plateformes de gestion de laboratoire) pour identifier les gaps fonctionnels.",
            "J'ai organisé 2 ateliers de co-conception avec 12 utilisateurs clés pour brainstormer sur les fonctionnalités prioritaires et valider les concepts."
          ],
          artifacts: ["Map des processus de recherche", "Personas chercheurs/ingénieurs", "Analyse concurrentielle", "Prototypes de concepts"]
        }}
        strategy={{
          roadmap: [
            "Pilier 1 : Bibliothèque Intelligente d'Anticorps - Base de données enrichie avec métadonnées (spécificité, réactivité croisée, compatibilité) et algorithmes de recommandation",
            "Pilier 2 : Assistant de Conception de Panels - Outil de drag-and-drop avec validation automatique de compatibilité et optimisation des panels",
            "Pilier 3 : Gestion de Projets & Traçabilité - Workflow de projet avec suivi des étapes, gestion des commandes, traçabilité complète des lots pour la conformité",
            "Pilier 4 : Intégrations & Automatisation - APIs pour intégrer les fournisseurs d'anticorps et automatiser les commandes et le suivi"
          ],
          prioritization: "Nous avons utilisé le framework Value/Complexity pour prioriser les features, en nous concentrant sur celles ayant le plus d'impact sur la réduction des délais et la qualité des panels. L'assistant de conception avec validation automatique a été identifié comme la feature différenciante la plus critique, suivie de la gestion de traçabilité pour la conformité réglementaire."
        }}
        delivery={{
          design: [
            "J'ai collaboré avec le designer pour créer des maquettes web de la plateforme, en privilégiant une interface claire et professionnelle adaptée aux workflows de recherche scientifique.",
            "Nous avons testé les prototypes avec 8 chercheurs et ingénieurs via des sessions de test utilisateur, en itérant 5 fois pour optimiser l'ergonomie des workflows complexes.",
            "J'ai créé les wireflows pour les parcours critiques (création de panel, validation de compatibilité, gestion de commandes) en m'assurant de l'efficacité opérationnelle."
          ],
          execution: [
            "J'ai rédigé les user stories détaillées avec critères d'acceptation techniques, en incluant les spécifications d'intégration avec les fournisseurs.",
            "J'ai géré le backlog sur 5 releases de 2 mois en méthodologie Agile (Scrum), avec des sprints de 2 semaines et des démonstrations aux utilisateurs beta à chaque release.",
            "J'ai coordonné les tests beta avec 5 laboratoires pilotes sur 4 mois, en collectant leurs feedbacks via des entretiens mensuels et des questionnaires de satisfaction.",
            "J'ai géré les intégrations API avec 3 fournisseurs d'anticorps majeurs, en coordonnant les développements techniques et la validation fonctionnelle.",
            "J'ai créé la documentation utilisateur et les formations pour les équipes de recherche, en organisant 3 webinaires de formation."
          ],
          artifacts: ["Maquettes web Figma", "User Stories complètes", "Documentation API intégrations", "Guide utilisateur et formations"]
        }}
        results={{
          user: [
            "Les délais de développement de panels d'anticorps ont été réduits de 8-12 semaines à 3-5 semaines (-60%), grâce à l'automatisation de la sélection et de la validation de compatibilité.",
            "Le taux d'échec en phase de validation a été réduit de 40% à 12%, grâce à la détection automatique des incompatibilités avant la commande.",
            "Le temps de gestion administrative des projets a été réduit de 30%, grâce à l'automatisation des commandes et au suivi centralisé.",
            "La satisfaction des chercheurs est de 8.9/10, avec 94% déclarant que la plateforme améliore significativement leur efficacité opérationnelle."
          ],
          business: [
            "La plateforme a été adoptée par 12 laboratoires pharmaceutiques en 10 mois, générant 2.5M€ de revenus récurrents annuels.",
            "Le taux de rétention client est de 95%, avec 8 laboratoires ayant renouvelé leur abonnement et augmenté leur usage.",
            "La plateforme a permis de signer 2 partenariats stratégiques avec des fournisseurs d'anticorps, créant un écosystème intégré.",
            "Le projet a positionné la biotech comme un acteur innovant dans la digitalisation de la recherche pharmaceutique, générant 5 nouvelles opportunités commerciales."
          ],
          learning: "Ce projet m'a appris que les produits B2B pour la recherche scientifique nécessitent une compréhension approfondie des workflows métier complexes. La crédibilité et la fiabilité sont essentielles : les chercheurs ont besoin d'outils qu'ils peuvent vraiment faire confiance pour leurs projets critiques. L'automatisation intelligente doit être transparente et explicable pour être adoptée. La collaboration étroite avec les utilisateurs finaux tout au long du développement est cruciale pour garantir la pertinence fonctionnelle."
        }}
        tags={["Product Management", "B2B Healthcare", "Research Tools", "SaaS", "API Integration"]}
      />
    </ProjectLayout>
  );
};

export default PlateformePanelAnticorps;

