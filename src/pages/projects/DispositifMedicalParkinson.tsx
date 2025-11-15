import { useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const DispositifMedicalParkinson = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectLayout>
      <ProjectCaseStudy
        title="Dispositif Médical Innovant pour la Maladie de Parkinson"
        tagline="5 ans à transformer une idée scientifique en solution concrète pour 200 patients atteints de troubles de la marche"
        context="J'ai rejoint une startup de 3 personnes développant un dispositif médical innovant pour les patients atteints de la maladie de Parkinson. Notre première version, 100% hardware, utilisait le principe du métronome auditif - une technique validée en rééducation - pour aider les patients à retrouver une marche plus fluide. Le marché était significatif : 150 000 patients en France souffrant de troubles de la marche liés à Parkinson, avec 25 000 nouveaux cas par an. Malgré quelques acteurs présents, nous étions les seuls avec un produit commercialisé, nos concurrents ayant privilégié la validation clinique avant la mise sur le marché."
        problem={`Côté utilisateurs : Les patients Parkinsoniens devaient se contenter d'un dispositif basique sans retour sur leur progression. Les professionnels de santé manquaient de données objectives en vie réelle pour adapter les traitements. Côté business : Absence de remboursement faute d'études cliniques (vente directe uniquement), concurrence mieux positionnée scientifiquement, transition réglementaire complexe avec le nouveau règlement européen (UE) 2017/745, et ressources limitées sans investisseur pour financer le développement.`}
        role="Durant 5 ans, j'ai occupé un rôle hybride couvrant l'ensemble de la chaîne de valeur produit : R&D et Coordination (gestion de projet, coordination des partenaires externes hardware/software/IA, veille scientifique), Stratégie Clinique (rédaction de protocoles, recherche de financements, relations avec 5 KOL neurologues et MPR), Qualité/Réglementaire (mise en place du système qualité ISO 13485, conformité au règlement DM européen), et Marketing/Impact (automatisation CRM, étude d'impact patient, communications scientifiques)."
        discovery={{
          research: [
            "J'ai orchestré le déploiement de la v1 auprès de 200 patients, en récoltant systématiquement les retours via notre CRM. Parallèlement, j'ai initié des collaborations avec 5 Key Opinion Leaders (neurologues et médecins MPR) pour comprendre les besoins cliniques profonds.",
            "Action clé : Organisation d'expérimentations terrain avec les médecins MPR, générant les premières données d'usage en vie réelle - une première dans notre domaine.",
            "Insight majeur : Les professionnels avaient besoin de données objectives pour personnaliser les traitements, pas seulement d'un outil de rééducation."
          ],
          artifacts: ["Déploiement v1 auprès de 200 patients", "Retours CRM systématisés", "Expérimentations terrain avec médecins MPR"]
        }}
        strategy={{
          roadmap: [
            "Face aux limites de la v1, j'ai défini une vision ambitieuse pour la v2.0 : Analyse en temps réel de la marche avec adaptation automatique du rythme, interface patient pour visualiser les statistiques et progressions, IA avec réseaux de neurones pour exploiter les données en recherche.",
            "Innovation technique : Conception d'un capteur unique à la taille (accéléromètre + gyroscope) - un défi technique majeur alors que les concurrents utilisaient deux capteurs aux pieds, mais un choix dicté par l'usage terrain et la praticité pour des patients âgés.",
            "Stratégie de financement : Rédaction et obtention du financement i-LAB pour soutenir le développement, compensant partiellement l'absence d'investisseurs."
          ],
          prioritization: "La priorisation était guidée par les contraintes de ressources et les besoins terrain. Le choix du capteur unique à la taille, bien que techniquement plus complexe, était dicté par l'observation des usages réels et la praticité pour des patients âgés."
        }}
        delivery={{
          design: [
            "Prototype fonctionnel : Développement réussi d'un prototype v2.0 avec analyse temps réel, testé avec des patients sélectionnés qui ont validé l'approche.",
            "Protocole clinique ambitieux : Rédaction d'un protocole multicentrique pour 200 patients sur 24 mois - prêt à lancer mais bloqué faute de financement."
          ],
          execution: [
            "Mise en conformité réglementaire : Implémentation progressive du système qualité ISO 13485 (audits internes réalisés), préparation à la transition vers le nouveau règlement européen 2017/745.",
            "Coordination complexe : Gestion des partenaires externes (hardware, software) sans développeurs internes, en traduisant les besoins médicaux en spécifications techniques."
          ],
          artifacts: ["Prototype v2.0 fonctionnel", "Protocole clinique multicentrique", "Documentation ISO 13485 progressive", "Spécifications techniques traduites"]
        }}
        results={{
          user: [
            "200 patients équipés avec la v1, retrouvant une autonomie de marche.",
            "Prototype v2.0 validé par les premiers testeurs avec retours positifs.",
            "Simplification d'usage : Capteur unique vs. double capteur concurrent.",
            "Données objectives générées pour les professionnels de santé lors des expérimentations."
          ],
          business: [
            "Position de pionnier : Seul dispositif commercialisé sur le marché français.",
            "Financement i-LAB obtenu validant le potentiel d'innovation.",
            "5 KOL engagés créant une légitimité scientifique.",
            "Base solide pour une future levée de fonds (protocole clinique prêt, système qualité en cours).",
            "Blocages identifiés : Base de recharge non finalisée faute de 100k€ supplémentaires, étude clinique non lancée (coût prohibitif), certification ISO 13485 non obtenue (processus interrompu)."
          ],
          learning: `Cette expérience fondatrice m'a enseigné trois leçons essentielles pour ma carrière en Product Management : La vision produit ne suffit pas sans les ressources : Avoir identifié le bon problème (données objectives pour personnaliser les soins) et conçu la bonne solution (IA + capteurs) n'a pas suffi. J'ai appris l'importance cruciale de sécuriser les financements et de phaser le développement. L'importance de l'approche terrain : Notre choix d'un capteur unique à la taille, dicté par l'observation des usages réels plutôt que par la facilité technique, illustre la valeur d'une approche user-centric même en deep tech. La polyvalence comme atout : Naviguer entre réglementation, clinique, technique et business m'a donné une vision 360° indispensable au Product Management. J'ai développé une capacité unique à traduire des besoins complexes entre différentes parties prenantes. Fierté personnelle : Avoir maintenu le développement pendant 5 ans avec des ressources minimales, coordonné des partenaires externes sans équipe interne, et posé les bases d'un dispositif innovant qui aurait pu transformer la vie de milliers de patients. Cette expérience, bien qu'inachevée commercialement, a forgé ma capacité à gérer l'ambiguïté, prioriser sous contrainte extrême, et maintenir une vision produit cohérente dans l'adversité - des compétences directement transférables et précieuses dans mon rôle actuel de Product Manager.`
        }}
        tags={["R&D", "ISO 13485", "Clinical Research", "Dispositifs Médicaux", "MDR", "Deep Tech"]}
      />
    </ProjectLayout>
  );
};

export default DispositifMedicalParkinson;

