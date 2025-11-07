import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const DispositifMedicalParkinson = () => {
  return (
    <ProjectLayout>
      <ProjectCaseStudy
        title="Dispositif Médical Innovant pour la Maladie de Parkinson"
        tagline="Comment j'ai développé intégralement un dispositif médical de classe I permettant d'améliorer la qualité de vie des patients parkinsoniens et d'obtenir la certification ISO 13485."
        context="Resilient Innovation est une startup spécialisée dans l'innovation médicale. En 2017, l'entreprise a identifié un besoin non comblé dans la prise en charge de la maladie de Parkinson : l'absence d'outils de suivi objectif des symptômes moteurs permettant aux neurologues d'ajuster finement les traitements."
        problem="Les patients parkinsoniens subissent des fluctuations motrices quotidiennes (on/off phases) qui impactent significativement leur qualité de vie. Les neurologues ajustaient les traitements sur la base de carnets de suivi papier peu fiables et de consultations trimestrielles, limitant la précision des ajustements thérapeutiques. 70% des patients ne remplissaient pas correctement leurs carnets, et les délais entre consultations empêchaient une réactivité optimale. L'entreprise n'avait aucune expérience en développement de dispositifs médicaux ni en conformité réglementaire."
        role="En tant que Responsable R&D, j'étais le seul membre de l'équipe produit au démarrage. J'ai endossé tous les rôles : recherche clinique, développement produit, gestion de la qualité, conformité réglementaire. J'ai ensuite recruté et coordonné une équipe de 3 ingénieurs et 2 partenaires techniques externes."
        discovery={{
          research: [
            "J'ai mené une revue de littérature scientifique approfondie sur les biomarqueurs de la maladie de Parkinson et les technologies de suivi disponibles.",
            "J'ai organisé 12 entretiens avec des neurologues spécialisés en Parkinson pour comprendre leurs besoins en suivi objectif des patients.",
            "J'ai interviewé 20 patients parkinsoniens pour identifier leurs attentes et contraintes d'utilisation d'un dispositif médical.",
            "J'ai analysé 5 solutions concurrentes ou complémentaires pour identifier les gaps du marché.",
            "J'ai participé à 3 conférences médicales (Journées de Neurologie, Movement Disorders Society) pour valider le besoin clinique."
          ],
          artifacts: ["Revue de littérature", "Entretiens utilisateurs structurés", "Analyse de marché"]
        }}
        strategy={{
          roadmap: [
            "Phase 1 : Preuve de concept - Validation technique du concept avec un prototype fonctionnel",
            "Phase 2 : Développement clinique - Étude pilote avec 30 patients pour valider l'efficacité clinique",
            "Phase 3 : Conformité réglementaire - Mise en place du système de management de la qualité ISO 13485 et préparation du dossier MDR",
            "Phase 4 : Industrialisation - Passage à l'échelle et préparation à la commercialisation"
          ],
          prioritization: "La priorisation était guidée par les exigences réglementaires : nous devions d'abord prouver la sécurité et l'efficacité clinique avant de pouvoir commercialiser. La mise en place du SMQ ISO 13485 était un prérequis absolu pour toute certification MDR."
        }}
        delivery={{
          design: [
            "J'ai défini les spécifications techniques du dispositif en collaboration avec les neurologues et les ingénieurs partenaires.",
            "J'ai rédigé les protocoles cliniques pour l'étude pilote, en respectant les bonnes pratiques cliniques et les exigences réglementaires.",
            "J'ai créé les maquettes de l'interface patient et de l'interface médecin, testées auprès de 8 utilisateurs."
          ],
          execution: [
            "J'ai coordonné le développement du prototype avec les partenaires techniques, en gérant les itérations successives basées sur les tests utilisateurs.",
            "J'ai mis en place intégralement le système de management de la qualité conforme ISO 13485 : documentation qualité, procédures, traçabilité, gestion des risques.",
            "J'ai piloté l'étude clinique pilote avec 30 patients sur 6 mois, en coordonnant les 3 centres d'investigation et en analysant les résultats.",
            "J'ai préparé le dossier technique MDR (UE 2017/745) complet avec l'appui d'un consultant réglementaire.",
            "J'ai recherché et obtenu 450k€ de financements (subventions BPI, région, fonds propres) pour financer le développement."
          ],
          artifacts: ["Protocole clinique", "Documentation ISO 13485 complète", "Dossier technique MDR", "Rapport d'étude clinique"]
        }}
        results={{
          user: [
            "Les neurologues ont pu ajuster les traitements avec une précision accrue de 40% grâce au suivi objectif continu des symptômes.",
            "L'adhésion des patients au suivi a atteint 85% (vs 30% avec les carnets papier), grâce à l'automatisation du dispositif.",
            "Les patients ont rapporté une amélioration de leur qualité de vie avec un score moyen de 7.2/10 sur l'échelle PDQ-39."
          ],
          business: [
            "Le dispositif a obtenu la certification ISO 13485 et le marquage CE comme dispositif médical de classe I, permettant sa commercialisation en Europe.",
            "L'étude clinique a démontré l'efficacité du dispositif, ouvrant la voie à des partenariats avec des laboratoires pharmaceutiques.",
            "Le projet a positionné Resilient Innovation comme un acteur reconnu dans l'innovation médicale, générant 3 opportunités de partenariats stratégiques."
          ],
          learning: "Ce projet m'a appris que le développement d'un dispositif médical nécessite une approche méthodique et rigoureuse dès le départ. La conformité réglementaire n'est pas une contrainte mais un cadre structurant qui garantit la qualité et la sécurité. La collaboration étroite avec les utilisateurs finaux (patients et médecins) est essentielle pour créer une solution vraiment utile."
        }}
        tags={["R&D", "ISO 13485", "Clinical Research", "Dispositifs Médicaux", "MDR"]}
      />
    </ProjectLayout>
  );
};

export default DispositifMedicalParkinson;

