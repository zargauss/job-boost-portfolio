import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const PlateformeTelesurveillance = () => {
  return (
    <ProjectLayout image="/plateforme-telesurveillance.png">
      <ProjectCaseStudy
        title="Plateforme de télésurveillance pour pathologies chroniques"
        tagline="Comment j'ai orchestré la transition de 5000+ patients vers une nouvelle génération d'outils de coordination des soins"
        context="J'ai rejoint une scale-up HealthTech spécialisée dans la télésurveillance et la coordination des parcours de soins. L'entreprise opérait deux plateformes en parallèle : une version historique servant 5000+ patients et 400+ professionnels de santé, et une nouvelle plateforme lancée depuis un an avec environ 500-1000 patients actifs. La société se trouvait à un carrefour stratégique : maintenir son socle de clients historiques (Instituts de Santé spécialisés en oncologie) tout en se développant sur de nouveaux marchés prometteurs (Centres de Réadaptation Thérapeutique en gériatrie, télésurveillance en santé mentale)."
        problem={`Côté utilisateurs : Les professionnels de santé utilisant la plateforme historique étaient attachés à leurs habitudes de travail et craignaient de perdre des fonctionnalités essentielles dans la migration. Ils exprimaient une forte résistance : "Nous payons pour un produit avec X fonctionnalités, nous voulons retrouver exactement les mêmes." Côté business : L'entreprise devait gérer une équation complexe : Réduire les coûts de maintenance de deux plateformes parallèles, migrer les clients historiques sans perte de revenus, développer de nouveaux marchés (CRT, parcours coordonnés) pour assurer la croissance, et faire face aux équipes commerciales, ancrées dans l'ancien produit, qui peinaient à vendre la nouvelle solution.`}
        role="En tant que Product Manager avec un background de Docteur en Pharmacie, j'ai piloté le développement produit pendant 12 mois avec pour mission de : Orchestrer la migration en analysant les véritables besoins métiers derrière les fonctionnalités existantes et accompagner la transition des clients historiques, piloter le développement en gérant 4 releases trimestrielles, conduisant les interviews utilisateurs et rédigeant les spécifications fonctionnelles, développer de nouveaux parcours en concevant les modules de télésurveillance pour l'oncologie et la santé mentale, et créer les processus en établissant un workflow de paramétrage pour l'équipe Delivery."
        discovery={{
          research: [
            "J'ai mené 20 entretiens approfondis avec les coordinatrices de parcours sur 4 mois pour comprendre leur quotidien. Mon approche : aller au-delà de la demande surface 'je veux garder cette fonctionnalité' pour identifier le besoin métier réel.",
            "J'ai cartographié sur Notion l'ensemble des fonctionnalités utilisées, en créant des bases de données interconnectées permettant de tracer chaque fonctionnalité jusqu'à son usage réel, identifier les vrais besoins métiers sous-jacents, et distinguer l'essentiel du 'nice to have'.",
            "Découverte majeure : Les utilisateurs ne voulaient pas forcément des fonctionnalités identiques, mais la capacité de réaliser leurs tâches efficacement - une nuance qui a transformé notre approche."
          ],
          artifacts: ["Cartographie des fonctionnalités sur Notion", "Bases de données interconnectées", "Analyse des besoins métiers réels"]
        }}
        strategy={{
          roadmap: [
            "Décision stratégique n°1 : Prioriser les CRT (orientation future de l'entreprise) tout en sécurisant la migration des IS (revenus actuels).",
            "Décision stratégique n°2 : Traiter les projets de télésurveillance (oncologie/santé mentale) comme des POCs générateurs de données, sans les mettre en priorité de développement.",
            "Quick win identifié : La recherche de patient par numéro de téléphone - demandée par un seul client mais finalement adoptée par tous, ce qui a créé un momentum positif pour la migration.",
            "J'ai structuré la roadmap en équilibrant les besoins immédiats de migration, les fonctionnalités pour conquérir les CRT, et les contraintes réglementaires (classification dispositif médical)."
          ],
          prioritization: "Face aux demandes multiples et parfois contradictoires, j'ai établi une stratégie claire en équilibrant les besoins immédiats de migration, les fonctionnalités pour conquérir les CRT, et les contraintes réglementaires. Les quick wins comme la recherche par téléphone ont créé un momentum positif pour la migration."
        }}
        delivery={{
          design: [
            "J'ai conçu une architecture produit modulaire et paramétrable, permettant de servir différentes pathologies sans développements spécifiques.",
            "Validation continue : 3 à 5 entretiens utilisateurs avant chaque release + validation systématique des maquettes avec 1-2 utilisateurs clés et parties prenantes."
          ],
          execution: [
            "Fonctionnalités développées : Système de gestion d'activités et d'ateliers pour l'organisation des parcours patients, moteur de tâches intelligent avec génération automatique de tâches selon les rendez-vous, gestion documentaire pour le dépôt et l'organisation de documents dans le dossier patient, formulaires dynamiques entièrement personnalisables selon la pathologie, et gestion granulaire des droits avec visibilité adaptée selon l'équipe de soins.",
            "J'ai géré le backlog sur 4 releases trimestrielles en méthodologie Agile, avec des sprints de 2 semaines et des reviews utilisateurs à chaque release.",
            "Process créé : Un workflow de paramétrage standardisé pour l'équipe Delivery, permettant de configurer la plateforme pour chaque nouvel établissement."
          ],
          artifacts: ["Architecture produit modulaire", "Workflow de paramétrage standardisé", "Maquettes validées utilisateurs"]
        }}
        results={{
          user: [
            "Ergonomie améliorée : Interface plus claire et structurée, réduisant la charge cognitive des coordinatrices.",
            "Efficacité accrue : La recherche par téléphone et l'automatisation des tâches ont simplifié le quotidien.",
            "Flexibilité gagnée : Les formulaires personnalisables permettent d'adapter l'outil à chaque parcours sans développement.",
            "Retour terrain : Les professionnels de santé ont particulièrement apprécié le système de tâches automatiques et les formulaires personnalisables (retours positifs lors des sessions de feedback)."
          ],
          business: [
            "3 clients migrés avec succès, validant la stratégie de transition.",
            "30% de réduction du temps de déploiement grâce au workflow de paramétrage.",
            "Coûts de maintenance : Amorce de la réduction via la consolidation progressive sur une seule plateforme.",
            "Position marché : Ouverture confirmée vers le marché des CRT avec une solution adaptée.",
            "Déblocage commercial : Les quick wins comme la recherche par téléphone ont commencé à convaincre les équipes commerciales de la valeur de la nouvelle plateforme."
          ],
          learning: `Cette expérience m'a enseigné trois leçons fondamentales : L'importance de creuser au-delà de la demande : "Je veux cette fonctionnalité" cache souvent "J'ai besoin d'accomplir cette tâche". Cette distinction fait la différence entre une migration forcée et une transition réussie. La valeur d'un background métier en Product Management : Ma formation de Docteur en Pharmacie m'a permis d'établir instantanément la crédibilité avec les professionnels de santé et de comprendre les enjeux médicaux sous-jacents. L'art du compromis stratégique : Naviguer entre clients historiques, nouveaux marchés et contraintes techniques m'a appris à prioriser sans perdre de vue la vision long terme, tout en livrant des quick wins pour maintenir la dynamique. Ce projet m'a confirmé que la réussite d'une migration produit repose moins sur la technologie que sur la compréhension profonde des utilisateurs et la gestion habile du changement humain.`
        }}
        tags={["Product Management", "Healthcare", "Migration Produit", "Agile", "User Research"]}
      />
    </ProjectLayout>
  );
};

export default PlateformeTelesurveillance;

