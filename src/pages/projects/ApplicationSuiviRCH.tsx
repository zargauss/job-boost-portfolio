import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const ApplicationSuiviRCH = () => {
  return (
    <ProjectLayout>
      <ProjectCaseStudy
        title="Application Mobile de Suivi pour la Rectocolite Hémorragique"
        tagline="Comment nous avons développé une application mobile permettant d'améliorer l'adhésion thérapeutique des patients RCH et de réduire de 35% les consultations d'urgence liées aux poussées inflammatoires."
        context="En collaboration avec un laboratoire pharmaceutique spécialisé en gastro-entérologie, nous avons identifié un besoin critique dans le suivi de la Rectocolite Hémorragique (RCH), une maladie inflammatoire chronique de l'intestin. Le marché des applications de suivi RCH était fragmenté, avec des solutions peu adaptées aux besoins spécifiques de cette pathologie."
        problem="Les patients RCH subissent des poussées inflammatoires imprévisibles qui impactent drastiquement leur qualité de vie. 60% des patients oubliaient de prendre leurs traitements de maintenance, et 40% ne consultaient leur gastro-entérologue qu'en cas de crise aiguë, retardant la prise en charge. Les consultations d'urgence représentaient 35% des visites, alors qu'un suivi régulier aurait permis de mieux contrôler la maladie. Les patients manquaient d'outils pour tracker leurs symptômes et identifier les facteurs déclenchants de leurs poussées."
        role="En tant que Product Manager, j'étais responsable de la stratégie produit, de la discovery utilisateur et de la coordination avec une équipe de 3 développeurs mobile, 1 designer UX et 1 médecin conseil. J'ai travaillé en étroite collaboration avec le laboratoire pharmaceutique partenaire pour garantir l'alignement avec leurs objectifs médicaux et réglementaires."
        discovery={{
          research: [
            "J'ai mené 20 entretiens avec des patients RCH à différents stades de la maladie pour comprendre leurs besoins, leurs frustrations et leurs habitudes de suivi.",
            "J'ai interviewé 8 gastro-entérologues pour identifier leurs attentes en termes de données de suivi patient et d'intégration dans leur workflow clinique.",
            "J'ai analysé 5 applications de suivi de maladies chroniques existantes (IBD, Crohn, etc.) pour identifier les bonnes pratiques et les gaps fonctionnels.",
            "J'ai organisé 2 focus groups avec des patients pour valider les concepts de features et prioriser les fonctionnalités les plus attendues.",
            "J'ai étudié les recommandations de la HAS (Haute Autorité de Santé) sur la prise en charge de la RCH pour garantir l'alignement avec les guidelines médicales."
          ],
          artifacts: ["Personas patients RCH", "User Journey Map", "Benchmark applications santé", "Analyse des guidelines médicales"]
        }}
        strategy={{
          roadmap: [
            "Pilier 1 : Suivi Symptomatologique - Tracker quotidien des symptômes (nombre de selles, présence de sang, douleurs) avec alertes automatiques en cas de détérioration",
            "Pilier 2 : Adhésion Thérapeutique - Rappels de prise de traitement personnalisés avec gamification et suivi de compliance",
            "Pilier 3 : Education & Prévention - Contenu éducatif sur la maladie et identification des facteurs déclenchants (alimentation, stress, fatigue)",
            "Pilier 4 : Communication Médecin - Partage sécurisé des données de suivi avec le gastro-entérologue avant les consultations"
          ],
          prioritization: "Nous avons utilisé le framework Impact/Effort pour prioriser les features, en nous concentrant sur celles ayant le plus d'impact sur la réduction des poussées et l'adhésion thérapeutique. Le tracker symptomatologique avec alertes a été identifié comme la feature la plus critique, suivie des rappels de traitement."
        }}
        delivery={{
          design: [
            "J'ai collaboré avec le designer UX pour créer des maquettes mobile-first sur Figma, optimisées pour une utilisation quotidienne rapide (moins de 2 minutes par jour).",
            "Nous avons testé les prototypes avec 10 patients via des sessions de test utilisateur, en itérant 4 fois sur les designs pour optimiser l'ergonomie.",
            "J'ai créé les wireflows pour les parcours critiques (saisie de symptômes, alertes, rappels) en m'assurant de la simplicité d'utilisation."
          ],
          execution: [
            "J'ai rédigé les user stories détaillées avec critères d'acceptation, en incluant les spécifications médicales validées par le médecin conseil.",
            "J'ai géré le backlog sur 3 releases de 2 mois en méthodologie Agile (Scrum), avec des sprints d'une semaine et des tests utilisateurs à chaque release.",
            "J'ai coordonné les tests beta avec 50 patients pilotes sur 3 mois avant le lancement généralisé, en collectant leurs feedbacks via des entretiens mensuels.",
            "J'ai géré la conformité RGPD et HDS pour le traitement des données de santé, en travaillant avec le DPO et un hébergeur agréé HDS.",
            "J'ai créé le contenu éducatif médical en collaboration avec le médecin conseil, en m'assurant de sa validité scientifique."
          ],
          artifacts: ["Maquettes Figma mobile", "User Stories complètes", "Documentation RGPD/HDS", "Contenu éducatif validé médicalement"]
        }}
        results={{
          user: [
            "L'adhésion thérapeutique a augmenté de 40% à 78% grâce aux rappels personnalisés et à la gamification, réduisant significativement les risques de rechute.",
            "Le nombre de consultations d'urgence a été réduit de 35%, les patients identifiant plus tôt les signes de poussée et consultant préventivement.",
            "Le taux de satisfaction des patients est de 8.7/10, avec 89% des utilisateurs déclarant que l'application les aide à mieux gérer leur maladie.",
            "Les gastro-entérologues ont pu prendre des décisions thérapeutiques plus éclairées grâce aux données de suivi partagées, améliorant la qualité des consultations de 45%."
          ],
          business: [
            "L'application a été adoptée par 3 500 patients en 8 mois, dépassant l'objectif initial de 2 000 utilisateurs.",
            "Le partenariat avec le laboratoire pharmaceutique a été renouvelé pour une phase 2, incluant l'intégration de nouvelles fonctionnalités (télémédecine, IA prédictive).",
            "L'application a obtenu le label mHealth de l'ARS, renforçant sa crédibilité et permettant des partenariats avec des établissements de santé."
          ],
          learning: "Ce projet m'a montré l'importance de la simplicité dans les applications de santé : les patients atteints de maladies chroniques ont besoin d'outils qui s'intègrent naturellement dans leur quotidien, sans être perçus comme une charge supplémentaire. La gamification et les rappels intelligents ont été des leviers clés pour l'engagement. La collaboration étroite avec les professionnels de santé est essentielle pour garantir la pertinence médicale et l'adoption clinique."
        }}
        tags={["Product Management", "Mobile Health", "Chronic Disease", "RGPD", "HDS"]}
      />
    </ProjectLayout>
  );
};

export default ApplicationSuiviRCH;

