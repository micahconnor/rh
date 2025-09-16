// This file exports all the data for the application.
// Keeping data separate from logic makes the code easier to manage.

// NOUVEAU LEXIQUE ENRICHI
export const lexiconData = {
  PVE: "Proposition de Valeur Employeur. C'est l'ensemble des avantages uniques qu'un employeur offre à ses salariés en échange de leur travail. Elle répond à la question : 'Pourquoi est-il intéressant de travailler pour nous ?'",
  QVCT: "Qualité de Vie et des Conditions de Travail. Démarche visant à améliorer simultanément le bien-être des salariés et la performance de l'entreprise.",
  FCO: "Formation Continue Obligatoire. Stage de remise à niveau obligatoire tous les 5 ans pour les conducteurs professionnels afin de maintenir leurs compétences.",
  Turnover:
    "Taux de rotation du personnel. Indicateur mesurant le rythme de renouvellement des effectifs (départs et arrivées) sur une période donnée.",
  Onboarding:
    "Processus d'intégration. Vise à accueillir et accompagner un nouveau salarié pour faciliter sa prise de poste et son adhésion à la culture d'entreprise.",
  "Soft skills":
    "Compétences comportementales. Qualités humaines et relationnelles (communication, empathie, gestion du stress) par opposition aux compétences techniques (hard skills).",
  "Méthode STAR":
    "Situation, Tâche, Action, Résultat. Technique d'entretien pour évaluer les compétences en se basant sur des exemples concrets d'expériences passées du candidat.",
  PCRH: "Prestation de Conseil en Ressources Humaines. Dispositif financé par l'État et les OPCO pour permettre aux TPE/PME de bénéficier d'un accompagnement RH par un consultant externe.",
  OPCO: "Opérateur de Compétences. Organisme agréé par l'État chargé d'accompagner la formation professionnelle et de financer l'apprentissage.",
  "OPCO Mobilités":
    "L'Opérateur de Compétences spécialisé pour les métiers de la mobilité, incluant le transport de voyageurs.",
  DREETS:
    "Direction Régionale de l'Économie, de l'Emploi, du Travail et des Solidarités. Service de l'État en région qui pilote les politiques publiques, notamment en matière de travail et d'emploi.",
  GEIQ: "Groupement d'Employeurs pour l'Insertion et la Qualification. Structure qui embauche des personnes en difficulté d'insertion pour les mettre à disposition d'entreprises adhérentes, tout en organisant leur parcours de formation.",
  ATS: "Applicant Tracking System. Logiciel de suivi des candidatures qui permet aux recruteurs de gérer et d'automatiser le processus de recrutement.",
  Qualiopi:
    "Certification nationale qui atteste de la qualité du processus mis en œuvre par les prestataires d'actions de formation. Elle est indispensable pour bénéficier de fonds publics ou mutualisés.",
  RGPD: "Règlement Général sur la Protection des Données. Texte réglementaire européen qui encadre le traitement des données personnelles sur le territoire de l'Union européenne.",
  BMO: "Besoin en Main-d'Œuvre. Enquête annuelle menée par France Travail (ex-Pôle Emploi) auprès des entreprises pour connaître leurs intentions de recrutement par métier et par bassin d'emploi.",
  TRV: "Transport Routier de Voyageurs. Secteur d'activité qui regroupe les entreprises de transport de personnes par la route (autocars, autobus).",
  FIMO: "Formation Initiale Minimale Obligatoire. Formation obligatoire pour tout nouveau conducteur du transport routier de voyageurs, nécessaire pour obtenir la carte de qualification de conducteur.",
  CQP: "Certificat de Qualification Professionnelle. Certification créée et reconnue par une branche professionnelle pour attester de compétences spécifiques à un métier.",
  "WhatsApp Business":
    "Version professionnelle et gratuite de l'application WhatsApp, elle peut être installé en parallèle de l'application WhatsApp classique afin d'avoir deux comptes WhatsApp liés à deux numéros différents sur un seul téléphone.",
};

// PARTENAIRES COMMERCIAUX (à compléter)
// Remplir avec 56 partenaires: { name, logoUrl, website }
// - logoUrl: URL https d'un logo officiel (avec CORS si possible)
// - website: site du partenaire (optionnel)
// Astuce: en attendant, un fallback de logo est géré côté UI.
export const partnersData = [
  // Sélectionnés pour leur intérêt direct pour des équipes RH (recrutement, formation, conformité, planning, engagement)
  {
    name: "AFTRAL",
    website: "https://www.aftral.com",
    logoUrl: "https://logo.clearbit.com/aftral.com",
    keywords: ["formation", "sécurité", "CACES", "transport"],
  },
  {
    name: "DEKRA",
    website: "https://www.dekra.com",
    logoUrl: "https://logo.clearbit.com/dekra.com",
    keywords: ["sécurité", "certification", "conformité", "audit"],
  },
  {
    name: "Perinfo",
    website: "https://www.perinfo.eu",
    logoUrl: "https://logo.clearbit.com/perinfo.fr",
    keywords: ["planning", "exploitation", "service", "temps de travail"],
  },
  {
    name: "QuickMS",
    website: "https://www.quickms.fr",
    logoUrl:
      "https://quickms.fr/wp-content/uploads/2021/09/Logo-QUICKMS-474x94-1.png",
    keywords: ["RH", "KPI", "people analytics", "pilotage social"],
  },
  {
    name: "Data Comply One",
    website: "https://www.datacomplyone.eu/",
    logoUrl:
      "https://www.datacomplyone.eu/wp-content/uploads/2025/07/data-comply-one-1.png",
    keywords: ["RGPD", "données", "conformité", "privacy"],
  },
  {
    name: "Hubup",
    website: "https://www.hubup.fr",
    logoUrl:
      "https://hubup.fr/wp-content/uploads/2023/07/logo_hubup_square_blue.png",
    keywords: ["planning", "communication", "conducteurs", "messagerie"],
  },
  {
    name: "Samsara",
    website: "https://www.samsara.com",
    logoUrl:
      "https://images.expertmarket.co.uk/sites/2/2018/12/samsara-vehicle-tracking-logo.png",
    keywords: ["sécurité", "caméras", "coaching", "conformité"],
  },
  {
    name: "Webfleet",
    website: "https://www.webfleet.com",
    logoUrl: "https://logo.clearbit.com/webfleet.com",
    keywords: ["télématique", "sécurité", "carte carburant", "coaching"],
  },
];

export const guideData = {
  dashboard: {
    title: "Le secteur du transport en chiffres : Vos défis et vos forces",
    shortTitle: "Tableau de Bord",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.5A2.25 2.25 0 006 20.25z"></path></svg>`,
    intro:
      "Le point de départ est un constat chiffré. Les défis auxquels votre entreprise est confrontée sont partagés par l'ensemble du secteur. Mais notre enquête révèle aussi des forces uniques sur lesquelles capitaliser. Comprendre ces deux facettes est la première étape pour agir efficacement.",
    stats: [
      {
        id: "recruitmentReasonChart",
        label: "Pourquoi le recrutement est-il difficile ?",
        detail: "Source : Réunir — Grande Enquête — Pratiques et Outils RH",
        type: "chart",
      },
      {
        id: "loyaltyActionsChart",
        label: "Vos leviers de fidélisation les plus utilisés",
        detail: "Source : Réunir — Grande Enquête — Pratiques et Outils RH",
        type: "chart",
      },
      {
        id: "cultureChart",
        label: "Comment est perçue votre culture d'entreprise ?",
        detail: "Source : Réunir — Grande Enquête — Pratiques et Outils RH",
        type: "chart",
      },
      {
        id: "turnover",
        label: "Turnover Annuel du Secteur",
        value: "19%",
        detail:
          'Près d\'1 salarié sur 5 a quitté son entreprise en 2023.<br> (Source: <a href="https://optl.fr/wp-content/uploads/Rapport-OPTL-2024.pdf" target="_blank" class="underline" style="color: var(--c-accent); font-size: inherit;">Rapport OPTL 2024</a>, p. 52)',
        type: "stat",
      },
    ],
    charts: {
      recruitmentReason: {
        type: "pie", // Changed to pie for better aesthetics
        plugins: [ChartDataLabels],
        data: {
          labels: [
            "Précarité / Temps partiel",
            "Manque de candidats",
            "Rythme de vie",
            "Rémunération",
          ],
          datasets: [
            {
              label: "Principales raisons des difficultés",
              data: [45, 30, 15, 10],
              backgroundColor: ["#A76F6F", "#51576A", "#0D142D", "#CCD3E2"],
              borderColor: "#FFFFFF",
              borderWidth: 2,
              hoverOffset: 8,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: { family: "Outfit", size: 12 },
                color: "#51576A",
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += context.raw + "%";
                  }
                  return label;
                },
              },
            },
            datalabels: {
              formatter: (value) => {
                return value + "%";
              },
              color: "white",
              font: { weight: "bold", family: "Outfit" },
            },
          },
        },
      },
      loyaltyActions: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [
            "Avantages Sociaux",
            "Convivialité / Événements",
            "Équilibre Vie Pro/Perso",
            "Proximité / Culture",
            "Formation",
          ],
          datasets: [
            {
              label: "% des adhérents citant cette action",
              data: [85, 80, 70, 60, 50],
              backgroundColor: [
                "#51576A",
                "#A76F6F",
                "#CCD3E2",
                "#0D142D",
                "#8a92a5",
              ],
              borderRadius: 4,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          plugins: {
            legend: { display: false },
            datalabels: {
              formatter: (value) => value + "%",
              color: "white",
              anchor: "end",
              align: "start",
              offset: -30,
              font: { weight: "bold", family: "Outfit", size: 12 },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                callback: function (value) {
                  return value + "%";
                },
                font: { family: "Outfit", size: 12 },
              },
            },
            y: {
              grid: { display: false },
              ticks: { font: { family: "Outfit", size: 12 } },
            },
          },
        },
      },
      culture: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: ["Familiale", "Humaine", "De Proximité"],
          datasets: [
            {
              label: "% des adhérents utilisant ce terme",
              data: [85, 70, 65],
              backgroundColor: ["#0D142D", "#51576A", "#A76F6F"],
              borderRadius: 4,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          indexAxis: "y",
          plugins: {
            legend: { display: false },
            datalabels: {
              formatter: (value) => value + "%",
              color: "white",
              anchor: "end",
              align: "start",
              offset: -30,
              font: { weight: "bold", family: "Outfit", size: 12 },
            },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                callback: function (value) {
                  return value + "%";
                },
                font: { family: "Outfit", size: 12 },
              },
            },
            y: {
              grid: { display: false },
              ticks: { font: { family: "Outfit", size: 12 } },
            },
          },
        },
      },
      // Projections d'Avenir (2030)
      projectionsConducteursChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Jeunes débutants",
              data: [-95000],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [285000],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Créations nettes d'emplois",
              data: [10500],
              backgroundColor: "#10B981",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: { top: 2, bottom: 2, left: 8, right: 8 },
            },
          },
        },
      },
      projectionsAgentsChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Jeunes débutants",
              data: [-21500],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [32100],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Créations nettes d'emplois",
              data: [14500],
              backgroundColor: "#10B981",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: { top: 2, bottom: 2, left: 8, right: 8 },
            },
          },
        },
      },
      projectionsMecaniciensChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Destructions nettes d'emplois",
              data: [25000],
              backgroundColor: "#E53935",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Jeunes débutants",
              data: [-50700],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [45500],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: { top: 2, bottom: 2, left: 8, right: 8 },
            },
          },
        },
      },
    },
  },
  intro_contexte: {
    title: "Introduction & Contexte du Secteur",
    shortTitle: "Contexte",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-gray-200 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">La Marque Employeur, Véritable Levier de Performance ?</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <h4 class="font-bold text-lg mb-2" style="color: var(--c-accent);">Objectifs de cette section</h4>
            <ul class="list-disc pl-5 space-y-1 text-sm" style="color: var(--c-secondary);">
                <li>Poser les <strong>bases stratégiques</strong> de la marque employeur.</li>
                <li>Dresser un <strong>portrait chiffré</strong> des défis et des forces du secteur.</li>
                <li>Comprendre le <strong>coût réel du turnover</strong> pour votre PME.</li>
            </ul>
        </div>
        Cette section pose les bases stratégiques du guide. Elle explique pourquoi la marque employeur est un levier de performance essentiel pour votre PME et dresse un portrait chiffré des défis et des forces du secteur TRV en France.<br><br>`,
    charts: {
      projectionsConducteursChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Jeunes débutants",
              data: [-95000],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [285000],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Créations nettes d'emplois",
              data: [10500],
              backgroundColor: "#10B981",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: {
                top: 2,
                bottom: 2,
                left: 8,
                right: 8,
              },
            },
          },
        },
      },
      projectionsAgentsChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Jeunes débutants",
              data: [-21500],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [32100],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Créations nettes d'emplois",
              data: [14500],
              backgroundColor: "#10B981",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: {
                top: 2,
                bottom: 2,
                left: 8,
                right: 8,
              },
            },
          },
        },
      },
      projectionsMecaniciensChart: {
        type: "bar",
        plugins: [ChartDataLabels],
        data: {
          labels: [""],
          datasets: [
            {
              label: "Destructions nettes d'emplois",
              data: [25000],
              backgroundColor: "#E53935",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Jeunes débutants",
              data: [-50700],
              backgroundColor: "#F9A825",
              borderWidth: 0,
              stack: "stack",
            },
            {
              label: "Départs en fin de carrière",
              data: [45500],
              backgroundColor: "#2C3A6B",
              borderWidth: 0,
              stack: "stack",
            },
          ],
        },
        options: {
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                callback: (value) => `${value / 1000}k`,
                font: { family: "Outfit", size: 12 },
              },
            },
            y: { stacked: true, display: false },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: { boxWidth: 15, font: { size: 11, family: "Outfit" } },
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.raw !== null) {
                    label += new Intl.NumberFormat("fr-FR").format(context.raw);
                  }
                  return label;
                },
              },
            },
            datalabels: {
              anchor: "center",
              align: "center",
              color: "white",
              font: { weight: "bold", family: "Outfit", size: 12 },
              formatter: (value) =>
                new Intl.NumberFormat("fr-FR").format(Math.abs(value)),
              backgroundColor: (context) => context.dataset.backgroundColor,
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 25,
              padding: {
                top: 2,
                bottom: 2,
                left: 8,
                right: 8,
              },
            },
          },
        },
      },
    },
    practices: [
      {
        title:
          "Introduction : Au-delà du Guide, un Levier Stratégique pour votre PME",
        content: `Ce guide n'est pas un manuel de ressources humaines de plus. Il se veut une feuille de route stratégique, conçue spécifiquement pour les équipes RH et les dirigeants des PME du Groupe associatif Réunir. Dans un secteur d'activité où le capital humain n'est pas seulement un atout mais le cœur même des opérations, investir dans vos collaborateurs est le chemin le plus direct vers la résilience, la satisfaction client et une croissance pérenne. Les pages qui suivent ont pour ambition de transformer les défis RH que vous rencontrez au quotidien en opportunités de différenciation et de performance.`,
      },
      {
        title: "La Marque Employeur dans le TRV : Une Définition Stratégique",
        content: `Face à la pénurie de talents et à l'image parfois dégradée du métier, la marque employeur devient un levier incontournable. Il ne s'agit pas de marketing, mais de l'identité réelle de votre entreprise en tant qu'employeur. Pour le TRV, elle doit valoriser des piliers spécifiques qui parlent aux candidats et fidélisent les équipes :
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Fierté du Métier</h4><p class="text-sm">Mettre en avant l'utilité publique, le service rendu et l'impact social positif du transport de voyageurs.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Qualité des Relations Humaines</h4><p class="text-sm">Valoriser la proximité managériale, la solidarité entre collègues et l'esprit d'équipe propre aux PME.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
                        <div><h4 class="font-bold text-md">Le Développement Professionnel</h4><p class="text-sm">Afficher clairement les opportunités de formation continue et les parcours d'évolution interne.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Reconnaissance</h4><p class="text-sm">Démontrer comment l'entreprise valorise le travail bien fait, récompense les efforts et améliore les conditions de travail.</p></div>
                    </div>
                     <div class="idea-card p-4 rounded-lg flex items-center space-x-4 col-span-1 md:col-span-2">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                        <div><h4 class="font-bold text-md">L'Engagement pour la Sécurité et le Bien-être</h4><p class="text-sm">Communiquer sur les investissements concrets pour améliorer la sécurité, le confort des véhicules et l'équilibre des plannings.</p></div>
                    </div>
                </div>`,
      },
      {
        title:
          "Introduction : Au-delà du Guide, un Levier Stratégique pour votre PME",
        content: `Ce guide n'est pas un manuel de ressources humaines de plus. Il se veut une feuille de route stratégique, conçue spécifiquement pour les équipes RH et les dirigeants des PME du Groupe associatif Réunir. Dans un secteur d'activité où le capital humain n'est pas seulement un atout mais le cœur même des opérations, investir dans vos collaborateurs est le chemin le plus direct vers la résilience, la satisfaction client et une croissance pérenne. Les pages qui suivent ont pour ambition de transformer les défis RH que vous rencontrez au quotidien en opportunités de différenciation et de performance.`,
      },
      {
        title: "La Marque Employeur dans le TRV : Une Définition Stratégique",
        content: `Face à la pénurie de talents et à l'image parfois dégradée du métier, la marque employeur devient un levier incontournable. Il ne s'agit pas de marketing, mais de l'identité réelle de votre entreprise en tant qu'employeur. Pour le TRV, elle doit valoriser des piliers spécifiques qui parlent aux candidats et fidélisent les équipes :
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Fierté du Métier</h4><p class="text-sm">Mettre en avant l'utilité publique, le service rendu et l'impact social positif du transport de voyageurs.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Qualité des Relations Humaines</h4><p class="text-sm">Valoriser la proximité managériale, la solidarité entre collègues et l'esprit d'équipe propre aux PME.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
                        <div><h4 class="font-bold text-md">Le Développement Professionnel</h4><p class="text-sm">Afficher clairement les opportunités de formation continue et les parcours d'évolution interne.</p></div>
                    </div>
                    <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div>
                        <div><h4 class="font-bold text-md">La Reconnaissance</h4><p class="text-sm">Démontrer comment l'entreprise valorise le travail bien fait, récompense les efforts et améliore les conditions de travail.</p></div>
                    </div>
                     <div class="idea-card p-4 rounded-lg flex items-center space-x-4 col-span-1 md:col-span-2">
                        <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                        <div><h4 class="font-bold text-md">L'Engagement pour la Sécurité et le Bien-être</h4><p class="text-sm">Communiquer sur les investissements concrets pour améliorer la sécurité, le confort des véhicules et l'équilibre des plannings.</p></div>
                    </div>
                </div>`,
      },
      {
        title:
          "Le Paysage du Transport Routier de Voyageurs : Chiffres et Défis",
        content: `Le secteur du TRV est un pilier de la mobilité en France, mais il évolue dans un contexte de tensions et de mutations profondes. Les données les plus récentes dessinent un tableau contrasté. D'un côté, le secteur est dynamique et essentiel, mais de l'autre, il fait face à des défis structurels majeurs qui impactent directement le recrutement.
                      <br><br>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div class="idea-card p-4 rounded-lg flex flex-col">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21v-3.75m16.5 3.75v-3.75m-16.5 0L12 3m0 0l8.25 14.25M12 3v10.875M3.75 14.25h16.5" />
                          </svg>
                      </div>
                      <h4 class="font-bold text-md mb-2 text-center" style="color: var(--c-primary);">Un Secteur de PME</h4>
                      <p class="text-sm flex-grow text-center">En France <strong>78% des 2&nbsp;692 entreprises</strong> du Transport Routier de Voyageurs comptent moins de 50 salariés, et emploient près de <strong>34% de l'effectif global</strong>.</p>
                      <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://optl.fr/wp-content/uploads/Rapport-OPTL-2024.pdf" target="_blank" class="underline">Rapport OPTL 2024</a></p>
                  </div>
                          <div class="idea-card p-4 rounded-lg flex flex-col">
                               <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                  <svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                              </div>
                              <h4 class="font-bold text-md mb-2 text-center" style="color: var(--c-primary);">Démographie Vieillissante</h4>
                              <p class="text-sm flex-grow text-center">Le « papy-boom » est une réalité : <strong>36% des conducteurs</strong> avaient plus de 55 ans fin 2022. Ce vieillissement pose un défi critique pour le renouvellement des compétences et la transmission des savoirs.</p>
                              <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://optl.fr/wp-content/uploads/Rapport-OPTL-2024.pdf" target="_blank" class="underline">Rapport OPTL 2024, p.54</a></p>
                          </div>
                          <div class="idea-card p-4 rounded-lg flex flex-col">
                               <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                  <svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                  </svg>
                              </div>
                              <h4 class="font-bold text-md mb-2 text-center" style="color: var(--c-primary);">Le Temps Partiel</h4>
                              <p class="text-sm flex-grow text-center">C'est une cause profonde des difficultés de recrutement. Seuls <strong>60% des salariés</strong> occupent un poste à temps complet, souvent en raison de la nature des services scolaires qui structurent l'activité.</p>
                              <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://fntv.fr/actualite/rapport-2024-de-lobservatoire-de-la-branche-o" target="_blank" class="underline">FNTV / Rapport OPTL 2024</a></p>
                          </div>
                          <div class="idea-card p-4 rounded-lg flex flex-col">
                               <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                  <svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                  </svg>
                              </div>
                              <h4 class="font-bold text-md mb-2 text-center" style="color: var(--c-primary);">Marché du Travail en Tension</h4>
                              <p class="text-sm flex-grow text-center">Malgré un besoin constant, le secteur fait face à un nombre important d'emplois non pourvus, estimé à près de <strong>8 000 postes de conducteurs</strong> fin 2023, ce qui freine la croissance des entreprises.</p>
                              <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://www.francetravail.fr/files/live/sites/PE/files/Enquetes%20BMO/BMO%202024/Synth%C3%A8se%20de%20presse%20-%20BMO%202024.pdf" target="_blank" class="underline">Enquête BMO 2024 France Travail</a></p>
                          </div>
                      </div>`,
      },
      {
        title:
          "Le Casse-tête du Recrutement : Analyse des Difficultés Spécifiques",
        content: `Les difficultés de recrutement ne sont pas une fatalité abstraite, mais une réalité quotidienne pour les PME du réseau. L'enquête menée en interne confirme et précise les défis identifiés au niveau national. Les verbatims des dirigeants sont sans appel :
                      <div class="grid grid-cols-1 md:grid-cols-1 gap-4 my-6">
                          <div class="p-4 rounded-lg bg-gray-100 border-l-4 border-accent-light" style="border-left-color: var(--c-accent-light);">
                              <div class="flex">
                                  <div class="flex-shrink-0">
                                      <svg class="w-8 h-8" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                                  </div>
                                  <div class="ml-4">
                                      <p class="text-md italic" style="color: var(--c-secondary);">« Nous rencontrons des difficultés pour recruter des conducteurs CPS et Temps complet ainsi que des mécaniciens. »</p>
                                  </div>
                              </div>
                          </div>
                          <div class="p-4 rounded-lg bg-gray-100 border-l-4" style="border-left-color: var(--c-accent-light);">
                              <div class="flex">
                                  <div class="flex-shrink-0">
                                       <svg class="w-8 h-8" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                                  </div>
                                  <div class="ml-4">
                                      <p class="text-md italic" style="color: var(--c-secondary);">« [Difficile de recruter des] Conducteurs CPS (précarité temps partiel) notamment en zone très rurale. »</p>
                                  </div>
                              </div>
                          </div>
                           <div class="p-4 rounded-lg bg-gray-100 border-l-4" style="border-left-color: var(--c-accent-light);">
                              <div class="flex">
                                  <div class="flex-shrink-0">
                                       <svg class="w-8 h-8" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                                  </div>
                                  <div class="ml-4">
                                      <p class="text-md italic" style="color: var(--c-secondary);">« Conducteur h/f de transport scolaire, problème de lieu géographique de résidence. »</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      L'analyse de ces retours révèle plusieurs causes profondes :
                      <ol class="list-decimal pl-5 space-y-2 mt-4">
                          <li><strong>La nature des contrats proposés :</strong> La « précarité du temps partiel » est le défi numéro un.</li>
                          <li><strong>L'image et la connaissance du métier :</strong> Le métier de conducteur souffre d'un déficit d'image et d'information.</li>
                          <li><strong>Les exigences en compétences et expérience :</strong> Pour les postes plus qualifiés comme le grand tourisme, le manque de candidats expérimentés est un frein.</li>
                          <li><strong>Le facteur géographique :</strong> La localisation des candidats par rapport aux dépôts est un obstacle logistique important.</li>
                      </ol>`,
      },
      {
        title: "Projections d'Avenir : Les Métiers du TRV en 2030",
        content: `
                <p class="mb-6">Anticiper les besoins en recrutement est un enjeu stratégique majeur. Les projections du Ministère du Travail (Dares) et de France Travail dessinent un avenir contrasté pour les métiers clés du secteur d'ici 2030, marqué par un fort besoin de renouvellement générationnel.</p>
                
                <div class="idea-card p-4 md:p-6 rounded-lg mb-4">
                    <h4 class="font-bold text-lg mb-4" style="color: var(--c-primary);">1. Conducteurs de Véhicules</h4>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div class="relative pt-12">
                            <div class="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none">
                                <div class="bg-red-600 text-white font-bold py-0.5 px-3 rounded-lg text-center text-xs">
                                    <span>Déséquilibre</span>
                                    <span class="block text-lg font-semibold">+200 500</span>
                                </div>
                            </div>
                            <div class="chart-container" style="height: 100px;"><canvas id="projectionsConducteursChart"></canvas></div>
                        </div>
                        <div>
                            <p class="text-sm mb-2">Les <strong>95 000 jeunes débutants</strong> attendus ne suffiront pas à compenser les <strong>285 000 départs en fin de carrière</strong>, créant un besoin massif de recrutement.</p>
                            <p class="text-sm">En 2023, sur 76 570 projets de recrutement, <strong>72,4%</strong> étaient jugés difficiles à pourvoir.</p>
                            <p class="text-xs italic text-gray-500 mt-3">Sources : <a href="https://dares.travail-emploi.gouv.fr/publication/les-metiers-en-2030" target="_blank" class="underline">Dares</a>, <a href="https://statistiques.francetravail.fr/bmo" target="_blank" class="underline">France Travail (BMO 2023)</a></p>
                        </div>
                    </div>
                </div>

                <div class="idea-card p-4 md:p-6 rounded-lg mb-4">
                    <h4 class="font-bold text-lg mb-4" style="color: var(--c-primary);">2. Agents d'Exploitation des Transports</h4>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div class="relative pt-12">
                            <div class="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none">
                                <div class="bg-red-600 text-white font-bold py-0.5 px-3 rounded-lg text-center text-xs">
                                    <span>Déséquilibre</span>
                                    <span class="block text-lg font-semibold">+25 100</span>
                                </div>
                            </div>
                            <div class="chart-container" style="height: 100px;"><canvas id="projectionsAgentsChart"></canvas></div>
                        </div>
                        <div>
                            <p class="text-sm mb-2">Comme pour les conducteurs, les <strong>21 500 jeunes débutants</strong> ne combleront pas les <strong>32 100 départs en retraite</strong>, malgré 14 500 créations nettes de postes.</p>
                             <p class="text-sm">En 2023, <strong>53,7%</strong> des 3 670 projets de recrutement pour ce métier étaient jugés difficiles.</p>
                            <p class="text-xs italic text-gray-500 mt-3">Sources : <a href="https://dares.travail-emploi.gouv.fr/publication/les-metiers-en-2030" target="_blank" class="underline">Dares</a>, <a href="https://statistiques.francetravail.fr/bmo" target="_blank" class="underline">France Travail (BMO 2023)</a></p>
                        </div>
                    </div>
                </div>

                <div class="idea-card p-4 md:p-6 rounded-lg">
                    <h4 class="font-bold text-lg mb-4" style="color: var(--c-primary);">3. Ouvriers Qualifiés de la Réparation Automobile</h4>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        <div class="relative pt-12">
                             <div class="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none">
                                <div class="bg-green-600 text-white font-bold py-0.5 px-3 rounded-lg text-center text-xs">
                                    <span>Surplus</span>
                                    <span class="block text-lg font-semibold">-20 200</span>
                                </div>
                            </div>
                            <div class="chart-container" style="height: 100px;"><canvas id="projectionsMecaniciensChart"></canvas></div>
                        </div>
                        <div>
                            <p class="text-sm mb-2">Ce métier présente un profil inverse. Avec <strong>50 700 jeunes débutants</strong> pour seulement 30 500 postes à pourvoir, les difficultés de recrutement actuelles pourraient se réduire d'ici 2030.</p>
                            <p class="text-sm">Néanmoins, en 2023, la tension restait maximale avec <strong>76,5%</strong> des 16 580 projets de recrutement jugés difficiles.</p>
                            <p class="text-xs italic text-gray-500 mt-3">Sources : <a href="https://dares.travail-emploi.gouv.fr/publication/les-metiers-en-2030" target="_blank" class="underline">Dares</a>, <a href="https://statistiques.francetravail.fr/bmo" target="_blank" class="underline">France Travail (BMO 2023)</a></p>
                        </div>
                    </div>
                </div>
            `,
      },
    ],
  },
  attractivite: {
    title: "Attirer les Talents : Devenir un Employeur de Premier Choix",
    shortTitle: "I. Attirer",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre I : Attirer les Talents</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <p class="font-semibold" style="color: var(--c-primary);">Le Chiffre Clé</p>
            <p class="text-2xl font-bold my-1" style="color: var(--c-accent);">+50%</p>
            <p class="text-sm italic" style="color: var(--c-secondary);">de candidatures très qualifiées grâce à une marque employeur forte. C'est le premier levier pour attirer les bons profils.</p>
            <p class="text-xs italic text-gray-500 mt-2 text-right">Source: <a href="https://www.mondedesgrandesecoles.fr/tout-ce-quil-faut-savoir-sur-la-marque-employeur-en-2023-a-vos-marques-prets-recrutez/" target="_blank" class="underline">Monde des Grandes Ecoles</a></p>
        </div>
        Face à un marché en tension, il ne s'agit plus de publier des offres, mais de transformer votre PME en un employeur de premier choix. Cette section explore les piliers d'une stratégie d'attraction moderne : marque employeur, sourcing ciblé et expérience candidat.<br><br>`,
    practices: [
      {
        title:
          "1.1 ⸺ Construire votre Marque Employeur Authentique : Formaliser votre Culture",
        content: `La marque employeur est la réputation de votre entreprise en tant qu'employeur. Pour la majorité des adhérents du Groupe associatif Réunir, cette réputation repose sur une culture «&nbsp;familiale&nbsp;» et de «&nbsp;proximité&nbsp;». C'est un atout puissant, mais souvent implicite. L'objectif est de le rendre visible et compréhensible de tous, en définissant une Proposition de Valeur Employeur (PVE) claire. La PVE répond à la question fondamentale : «&nbsp;Pourquoi un talent devrait-il choisir de travailler chez vous plutôt que chez le concurrent, et surtout, pourquoi devrait-il y rester?&nbsp;» 
              <br><br> 
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Méthodologie pour définir votre Promesse Employeur :</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl" style="color: var(--c-accent);">1</div>
                          <h5 class="font-bold text-md ml-4" style="color: var(--c-primary);">Organisez un atelier 'Valeurs'</h5>
                      </div>
                      <p class="text-sm mt-2 ml-16">Animez un atelier d'une heure avec des collaborateurs clés pour identifier les 3 à 5 valeurs qui portent votre entreprise.</p>
                  </div>
                  
                   <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl" style="color: var(--c-accent);">2</div>
                          <h5 class="font-bold text-md ml-4" style="color: var(--c-primary);">Auditez vos pratiques</h5>
                      </div>
                      <p class="text-sm mt-2 ml-16">Analysez objectivement vos forces et faiblesses pour vérifier si vos pratiques sont alignées avec les valeurs identifiées.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl" style="color: var(--c-accent);">3</div>
                          <h5 class="font-bold text-md ml-4" style="color: var(--c-primary);">Formalisez votre PVE</h5>
                      </div>
                      <p class="text-sm mt-2 ml-16">Structurez votre promesse autour de piliers clairs (Carrière, Culture, Équilibre de vie...) pour la rendre authentique et attractive.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl" style="color: var(--c-accent);">4</div>
                          <h5 class="font-bold text-md ml-4" style="color: var(--c-primary);">Incarnez et diffusez</h5>
                      </div>
                      <p class="text-sm mt-2 ml-16">Votre promesse doit infuser toutes vos communications : site web, réseaux sociaux, offres d'emploi et témoignages de collaborateurs.</p>
                  </div>
              </div>`,
        tools: [
          {
            name: 'Animer un Atelier "Nos Valeurs"',
            id: "outil_atelier_valeurs",
          },
          {
            name: "Audit de vos Pratiques RH (Matrice SWOT)",
            id: "outil_swot",
          },
          {
            name: "Définir votre PVE",
            id: "outil_pve_builder",
          },
        ],
      },
      {
        title:
          "1.2 ⸺ Le Storytelling : Raconter Votre Histoire pour Marquer les Esprits",
        content: `Le storytelling est l'art de raconter des histoires pour créer une connexion émotionnelle. Dans le contexte de la marque employeur, il s'agit de dépasser la simple liste d'avantages pour donner vie à votre culture d'entreprise. Racontez des parcours individuels inspirants pour illustrer vos valeurs en action.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Reconversion Réussie</h4>
                      <p class="text-sm">Mettez en avant un collaborateur qui a changé de carrière pour vous rejoindre et qui s'épanouit aujourd'hui dans l'entreprise.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">L'Évolution Interne</h4>
                      <p class="text-sm">Montrez comment un conducteur scolaire est devenu conducteur de tourisme, puis agent d'exploitation. Mettez en lumière les passerelles possibles.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">L'Apprentissage Valorisé</h4>
                      <p class="text-sm">Valorisez le parcours d'un jeune apprenti qui a grandi avec l'entreprise et qui est aujourd'hui un pilier de l'équipe.</p>
                  </div>

              </div>
              <br>Ces récits authentiques sont vos meilleurs arguments. Diffusez-les en vidéo sur votre site et vos réseaux sociaux.`,
        tools: [
          {
            name: "Atelier Storytelling",
            id: "outil_storytelling_atelier",
          },
        ],
      },
      {
        title:
          "1.3 ⸺ Le Sourcing Malin : Des Stratégies Ciblées pour Chaque Besoin",
        content: `Une fois la promesse employeur clarifiée, il faut la diffuser auprès des bonnes cibles. Une approche «&nbsp;taille unique&nbsp;» du sourcing est inefficace. Il est essentiel d'adapter les canaux et les messages au type de poste.
              <br><br>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Stratégie 1 : Le Sourcing de Proximité (pour les temps partiels)</h5>
                              <p class="text-sm mt-1"><strong>Objectif :</strong> Toucher des candidats en recherche d'un complément de revenus (retraités, parents au foyer, pluriactifs, agriculteurs...).<br>
                              <strong>Actions :</strong> Flyers chez les commerçants locaux, affichage en mairie, contact avec les clubs de seniors, posts sur les groupes Facebook de villages, liens étroits avec les partenaires de l'emploi locaux.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                               <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Stratégie 2 : Le Sourcing de Valorisation (pour les temps pleins)</h5>
                              <p class="text-sm mt-1"><strong>Objectif :</strong> Attirer des professionnels en quête d'une carrière stable.<br>
                              <strong>Actions :</strong> Annonces visuelles et attractives, témoignages vidéo sur les réseaux sociaux, participation active aux salons de l'emploi et journées portes ouvertes.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.375 3.375 0 0114 18.442V18.442a3.375 3.375 0 01-4 0l-.548-.547z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Canaux & Approches Innovantes</h5>
                              <p class="text-sm mt-1"><strong>Jobboards Spécialisés :</strong> Pensez à Rouligo.com ou Autocar-Emploi.fr pour toucher une audience qualifiée.<br>
                              <strong>Le CV Inversé :</strong> Inversez la logique ! Au lieu que le candidat postule, c'est l'entreprise qui se présente et détaille sa promesse employeur pour inviter à une simple prise de contact.</p>
                          </div>
                      </div>
                  </div>
              </div>`,
        tools: [
          {
            name: "Générateur — Offres Personnalisées",
            type: "link",
            url: "https://codepen.io/reunir/live/Kwdjjjj/ad8b5b90b4e748fb327429df73d3676c",
          },
          {
            name: "Créer un CV Inversé Percutant",
            id: "outil_cv_inverse",
          },
          {
            name: "Générateur — Flyers de Recrutement",
            type: "link",
            url: "https://codepen.io/reunir/live/myeZNao",
          },
        ],
      },
      {
        title:
          "1.4 ⸺ Le Programme de Cooptation : Transformer vos Salariés en Ambassadeurs",
        content: `La cooptation, ou recrutement par recommandation, est l'un des leviers les plus puissants et les plus rentables, et pourtant il est largement sous-utilisé. Le principe est simple : un salarié vous recommande une personne de son réseau. Si cette personne est embauchée, le salarié reçoit une gratification ou prime.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Avantages d'un Programme de Cooptation :</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Des Candidats Mieux Qualifiés</h4>
                      <p class="text-sm">Vos salariés connaissent le métier et la culture. Ils ne recommanderont que des profils qu'ils estiment vraiment compatibles.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 16v-1m0 1v.01M12 16c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Un Recrutement Moins Coûteux</h4>
                      <p class="text-sm">Même avec une prime, la cooptation reste moins cher et s'avère plus rapide qu'une campagne de recutement.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Une Meilleure Rétention</h4>
                      <p class="text-sm">Les salariés cooptés sont souvent mieux informés sur la réalité du poste et s'intègrent plus vite, ce qui augmente leur fidélité.</p>
                  </div>

              </div>`,
        tools: [
          {
            name: 'Outil : Programme de Cooptation "Clé en Main"',
            id: "outil_cooptation",
          },
        ],
      },
      {
        title: "1.5 ⸺ L'Expérience Candidat : Chaque Interaction Compte",
        content: `L'expérience que vit un candidat avec votre entreprise, qu'il soit recruté ou non, a un impact direct sur votre marque employeur. Une expérience négative peut amener un candidat à déconseiller activement votre entreprise à son réseau, tandis qu'une expérience positive, même en cas de refus, laissera une impression de respect et de professionnalisme.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Bonnes Pratiques pour une Expérience Positive :</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Réactivité</h4>
                      <p class="text-sm">Accusez réception de chaque candidature dans les 48h. L'absence de réponse est la première source de frustration pour un candidat.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Transparence</h4>
                      <p class="text-sm">Soyez honnête sur les réalités du poste, ses avantages comme ses contraintes. Un candidat bien informé est un futur salarié engagé.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Le Refus Constructif</h4>
                      <p class="text-sm">C'est le moment de vérité. Fournir un retour personnalisé, surtout après un entretien, laisse une impression durable de respect.</p>
                  </div>

              </div>`,
        tools: [
          {
            name: "Outil : Modèles de Mails de Refus",
            id: "outil_mails_refus",
          },
          {
            name: "Modèles de Mails de Refus.docx",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=12t1fYRwUNjL3aUNr0vmLvq07Ok0zeUjs",
          },
        ],
      },
      {
        title: "1.6 ⸺ Communiquer pour Attirer",
        content: `La communication est la dernière étape pour rendre visible tous vos efforts. Elle doit être authentique, ciblée et régulière pour porter ses fruits.
              <br><br>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Votre Site Carrière : Votre Vitrine Principale</h5>
                              <p class="text-sm mt-1">C'est le pilier de votre communication. Il doit être simple, visuellement attractif et optimisé pour le mobile. Mettez-y en avant votre PVE, vos témoignages et des offres d'emploi claires. C'est l'image que vous renvoyez en premier.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                               <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Les Réseaux Sociaux : Créez de l'Interaction</h5>
                              <p class="text-sm mt-1">Ne vous contentez pas de poster des annonces. Partagez la vie de l'entreprise : un anniversaire, l'arrivée d'un nouveau véhicule, un événement d'équipe. Utilisez la vidéo pour des témoignages courts et percutants.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Les Relations Écoles et Partenaires Locaux</h5>
                              <p class="text-sm mt-1">Soyez proactifs. Intervenez dans les lycées professionnels, les CFA, et nouez des liens forts avec France Travail et les missions locales. Votre futur talent s'y trouve peut-être déjà.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                               <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Collaboration RSE : Donnez du sens à votre Marque Employeur</h5>
                              <p class="text-sm mt-1">Vos engagements sociétaux et environnementaux sont un puissant levier d'attraction. Contactez le pôle partenariats et développement durable de Réunir pour valoriser vos actions. Le <a href="https://reunir.org/nos-services/label-reunir-rse" target="_blank" class="underline" style="color: var(--c-accent); font-weight: bold;">Label Réunir RSE</a> est une preuve concrète de cet engagement, un atout majeur pour votre communication RH qui renforce l'attractivité et la fierté d'appartenance.</p>
                          </div>
                      </div>
                  </div>

              </div>`,
      },
      {
        title: "1.7 ⸺ Votre Audit Marque Employeur Financé : Le Levier PCRH",
        content: `La structuration de votre marque employeur est un levier de performance majeur, mais les PME manquent souvent de temps ou de ressources internes pour la piloter. Pour répondre à ce besoin, l'État et votre OPCO ont mis en place un dispositif puissant : la Prestation de Conseil en Ressources Humaines (PCRH).
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Le PCRH, qu'est-ce que c'est ?</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Un Financement Externe</h5>
                      </div>
                      <p class="text-sm mt-2">L'objectif est de permettre aux PME de bénéficier d'un accompagnement par un consultant externe sur une thématique RH. La prestation est co-financée par les DREETS et votre OPCO Mobilités, la rendant le plus souvent <strong>sans frais pour l'entreprise</strong>.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Un Accompagnement sur Mesure</h5>
                      </div>
                      <p class="text-sm mt-2">L'audit peut couvrir de nombreuses thématiques liées à l'attractivité : diagnostic de votre marque employeur, structuration de votre processus de recrutement, mise en place d'un parcours d'intégration, etc.</p>
                  </div>
              </div>
              <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://travail-emploi.gouv.fr/la-prestation-de-conseil-en-ressources-humaines-pour-les-tpe-pme" target="_blank" class="underline">Ministère du Travail</a></p>
              <br>
               <div class="idea-card p-4 rounded-lg flex flex-col border-2" style="border-color: #F59E0B;">
                  <div class="flex items-center mb-2">
                       <svg class="w-8 h-8 mr-3" style="color: #F59E0B;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                      <h5 class="font-bold text-md" style="color: #B45309;">L'Offre Exlusive Réunir : Votre Audit Marque Employeur 100% TRV</h5>
                  </div>
                  <p class="text-sm flex-grow">Parce que notre secteur a des problématiques uniques, le <strong>Pôle Développement RH et Marque Employeur de Réunir</strong> a mis en place des audits marque employeur qui peuvent être pris en charge par votre OPCO dans le cadre du dispositif PCRH. Notre accompagnement est le seul à être <strong>100% spécialisé</strong> sur les enjeux d'attractivité du Transport Routier de Voyageurs.</p>
                  <p class="text-sm mt-2 font-semibold">Nous nous occupons de tout : analyse de vos besoins, montage du dossier, prise de contact avec les référents OPCO régionaux... Laissez-nous vous guider !</p>
              </div>`,
        tools: [
          {
            name: "Être accompagné sur le dispositif PCRH",
            type: "link",
            url: "mailto:rh@reunir.org?subject=Demande d'information sur le dispositif PCRH",
          },
        ],
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Attirer",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Vidéos de Parcours</h4>
                                    <p class="text-sm">Filmez vos plus beaux trajets pour créer des vidéos promotionnelles authentiques et valoriser le quotidien du métier.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 01-9-9h18a9 9 0 01-9 9zm0-18a9 9 0 00-9 9h18a9 9 0 00-9-9z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Nouveaux Canaux</h4>
                                    <p class="text-sm">Explorez des plateformes comme Leboncoin, TikTok ou Workeez pour toucher un public plus large et diversifié.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Messages sur Girouettes</h4>
                                    <p class="text-sm">Utilisez les girouettes de vos véhicules comme des panneaux publicitaires mobiles pour vos offres d'emploi.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8v.01M12 12h.01M8 16h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Ciblage Spécifique</h4>
                                    <p class="text-sm">Démarchez activement des publics ciblés comme les militaires en reconversion ou les jeunes retraités via des actions de terrain.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Organiser un Événement</h4>
                                    <p class="text-sm">Organisez des journées portes ouvertes, des job datings à l'extérieur (mairies, parkings, etc.), et participez à des forums pour créer un contact direct avec les candidats.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Page Carrière Optimisée</h4>
                                    <p class="text-sm">Enrichissez la page recrutement de votre site avec des vidéos métiers, des témoignages et un formulaire de candidature simple.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Communication Immersive</h4>
                                    <p class="text-sm">Créez des vidéos 360° pour faire découvrir le métier et l'entreprise de manière innovante avant même de postuler.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75a17.933 17.933 0 01-7.499-1.632z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Influenceurs Locaux</h4>
                                    <p class="text-sm">Collaborez avec des personnalités locales pour promouvoir vos métiers auprès d'un public plus jeune et connecté.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Programme "Vis ma vie"</h4>
                                    <p class="text-sm">Offrez aux candidats la possibilité de passer une journée avec un collaborateur pour une immersion totale dans le métier.</p>
                                </div>
                            </div>`,
      },
    ],
  },
  recrutement: {
    title: "De la Séduction à la Sélection, le Moment de Vérité",
    shortTitle: "II. Recruter",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre II : Recruter Efficacement</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <p class="font-semibold" style="color: var(--c-primary);">Le Chiffre Clé</p>
            <p class="text-2xl font-bold my-1" style="color: var(--c-accent);">31 554 €</p>
            <p class="text-sm italic" style="color: var(--c-secondary);">C'est le coût estimé d'un recrutement raté pour un conducteur. Une stratégie de sélection robuste n'est plus une option, c'est un investissement vital.</p>
            <p class="text-xs italic text-gray-500 mt-2 text-right">Source: Modélisation interne (voir section Contexte)</p>
        </div>
        Après avoir attiré des candidats, la phase de sélection est le moment de vérité. Il est crucial de vérifier l'adéquation entre leurs compétences et votre culture d'entreprise de manière objective pour sécuriser votre investissement humain et financier.<br><br>`,
    practices: [
      {
        title: "2.1 ⸺ L'Entretien Structuré : La Clé d'une Évaluation Fiable",
        content: `Dans de nombreuses PME, l'entretien de recrutement pour un cadre ou un conducteur expérimenté prend souvent la forme d'une conversation informelle. Si cette approche favorise la convivialité, elle est aussi très vulnérable aux biais de recrutement (effet de "feeling", première impression...) et ne permet pas de comparer objectivement les candidats entre eux.
              <br><br>
              La solution réside dans l'adoption de l'<strong>entretien structuré</strong>. Le principe est simple : tous les candidats se voient poser les mêmes questions, sur la base d'une grille d'évaluation prédéfinie. Cela garantit un processus plus juste, plus fiable et plus efficace.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Compétences Clés à Évaluer pour un Conducteur :</h4>
              <div class="space-y-3">
                  <div class="idea-card p-3 rounded-lg flex items-center"><div class="flex-shrink-0 bg-red-100 p-2 rounded-full"><svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div><strong class="ml-3">Sécurité & Rigueur&nbsp;:</strong><span class="ml-2 text-sm">Application stricte des règles, vérifications systématiques.</span></div>
                  <div class="idea-card p-3 rounded-lg flex items-center"><div class="flex-shrink-0 bg-red-100 p-2 rounded-full"><svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4l3 3z"></path></svg></div><strong class="ml-3">Relation Client&nbsp;:</strong><span class="ml-2 text-sm">Accueil, information des passagers, gestion des tensions avec calme.</span></div>
                  <div class="idea-card p-3 rounded-lg flex items-center"><div class="flex-shrink-0 bg-red-100 p-2 rounded-full"><svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg></div><strong class="ml-3">Autonomie & Fiabilité&nbsp;:</strong><span class="ml-2 text-sm">Prise d'initiative face aux imprévus, respect des horaires.</span></div>
                  <div class="idea-card p-3 rounded-lg flex items-center"><div class="flex-shrink-0 bg-red-100 p-2 rounded-full"><svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><strong class="ml-3">Gestion du Stress&nbsp;:</strong><span class="ml-2 text-sm">Capacité à rester calme face au trafic, aux pannes ou aux passagers difficiles.</span></div>
              </div>`,
        tools: [
          {
            name: "Outil : Grille d'Entretien Structuré",
            id: "outil_grille_entretien",
          },
          {
            name: "Grille d'Entretien (Excel)",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=1OtaW6wnfENLI_nd7V06iliQ_DFImx4zj",
          },
        ],
      },
      {
        title:
          "2.2 ⸺ Évaluer les Compétences Comportementales : La Méthode STAR",
        content: `<p>Pour évaluer les compétences comportementales (soft skills) de manière factuelle et dépasser l'intuition, la méthode STAR est un outil d'entretien structuré incontournable. Elle se fonde sur le principe que le comportement passé d'un candidat est le meilleur prédicteur de son comportement futur.</p><p>L'objectif est d'amener le candidat à décrire une expérience professionnelle réelle et non une situation hypothétique, afin de collecter des preuves tangibles de ses compétences.</p>
              <h4 class="font-bold text-lg mt-6 mb-4" style="color: var(--c-primary);">Le Principe : STAR</h4>
              <p>L'acronyme guide le candidat à travers quatre étapes clés :</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  
                  <div class="stat-card p-4 rounded-lg relative overflow-hidden">
                      <div class="absolute right-8 bottom-0 opacity-60" style="z-index: 0; transform: translate(10%, 15%); color: #E8D7D7;">
                           <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                      <div class="absolute right-2 bottom-0 font-bold" style="font-size: 5.5rem; z-index: 1; color: #A76F6F; opacity: 0.15;">S</div>
                      <div class="relative" style="z-index: 2;">
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Situation</h5>
                          <p class="text-sm mt-1">Le candidat expose le contexte d'une situation professionnelle passée et son enjeu.</p>
                      </div>
                  </div>

                  <div class="stat-card p-4 rounded-lg relative overflow-hidden">
                      <div class="absolute right-8 bottom-0 opacity-60" style="z-index: 0; transform: translate(10%, 15%); color: #E8D7D7;">
                           <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                      <div class="absolute right-2 bottom-0 font-bold" style="font-size: 5.5rem; z-index: 1; color: #A76F6F; opacity: 0.15;">T</div>
                       <div class="relative" style="z-index: 2;">
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Tâche</h5>
                          <p class="text-sm mt-1">Il précise quelle était sa mission personnelle et l'objectif à atteindre dans ce cadre.</p>
                      </div>
                  </div>

                  <div class="stat-card p-4 rounded-lg relative overflow-hidden">
                      <div class="absolute right-8 bottom-0 opacity-60" style="z-index: 0; transform: translate(10%, 15%); color: #E8D7D7;">
                           <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                      <div class="absolute right-2 bottom-0 font-bold" style="font-size: 5.5rem; z-index: 1; color: #A76F6F; opacity: 0.15;">A</div>
                       <div class="relative" style="z-index: 2;">
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Action</h5>
                          <p class="text-sm mt-1">Le cœur de la méthode. Le candidat décrit précisément les actions qu'il a <strong>personnellement</strong> menées. L'usage du "je" est ici crucial.</p>
                      </div>
                  </div>

                  <div class="stat-card p-4 rounded-lg relative overflow-hidden">
                      <div class="absolute right-8 bottom-0 opacity-60" style="z-index: 0; transform: translate(10%, 15%); color: #E8D7D7;">
                           <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      </div>
                      <div class="absolute right-2 bottom-0 font-bold" style="font-size: 5.5rem; z-index: 1; color: #A76F6F; opacity: 0.15;">R</div>
                       <div class="relative" style="z-index: 2;">
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Résultat</h5>
                          <p class="text-sm mt-1">Il expose l'issue de ses actions avec, si possible, des résultats concrets et mesurables, et partage les enseignements qu'il en a tirés.</p>
                      </div>
                  </div>
              </div>
              <h4 class="font-bold text-lg mt-6 mb-2" style="color: var(--c-primary);">En pratique pour le recruteur :</h4>
              <ul class='list-disc pl-5 space-y-2'>
                  <li><strong>Préparer :</strong> Identifier les compétences clés pour le poste et préparer une question STAR pour chacune.</li>
                  <li><strong>Guider :</strong> Aider le candidat à structurer sa réponse en le relançant sur chaque étape (« Pouvez-vous décrire le contexte ? », « Quel était votre rôle exact ? », « Qu'avez-vous fait concrètement ? », « Quel a été l'impact ? »).</li>
                  <li><strong>Approfondir :</strong> Ne pas se contenter de réponses vagues. Solliciter des faits, des chiffres et des exemples précis pour étayer le discours.</li>
              </ul>
              <p class="mt-4">En systématisant l'approche STAR, vous rendez vos entretiens plus objectifs et structurés. Cela vous permet de comparer les candidats sur une base factuelle et équitable, enrichissant ainsi considérablement la pertinence de vos évaluations.</p>`,
        tools: [
          { name: "Tableau de Questions STAR", id: "outil_questions_star" },
        ],
      },
      {
        title:
          "2.3 ⸺ La Décision Finale : Croiser les Données et Sécuriser le Choix",
        content: `La décision d'embauche ne doit jamais reposer sur un seul élément, ni sur une simple intuition. Le choix final doit être une synthèse raisonnée de toutes les informations factuelles collectées durant le processus : notes de l'entretien structuré, réponses STAR, résultats du test pratique et, si nécessaire, la prise de références.
              <br><br><strong>La Prise de Références : Un Outil à Manier avec Précaution</strong><br>
              La prise de références peut être un excellent moyen de valider les compétences et le savoir-être d'un candidat. Cependant, elle est strictement encadrée par la loi française pour protéger la vie privée du candidat.
              <br>
              <ul class='list-disc pl-5 mt-2 space-y-2'>
                  <li><strong>Consentement Obligatoire :</strong> Vous devez impérativement informer le candidat de votre démarche et obtenir son <strong>autorisation explicite</strong> avant de contacter un ancien employeur. Le plus simple est de lui demander de vous fournir lui-même les coordonnées des personnes à contacter.</li>
                  <li><strong>Pertinence des Questions :</strong> Les questions posées doivent avoir un lien <strong>direct et unique</strong> avec le poste à pourvoir et les compétences professionnelles du candidat. Toute question d'ordre privé (situation familiale, état de santé, opinions politiques ou religieuses, etc.) est formellement interdite.</li>
              </ul>
              <br>Ce processus structuré fournit au dirigeant un socle factuel et solide sur lequel il peut appuyer sa décision finale avec une bien plus grande confiance, tout en respectant le cadre légal.`,
        tools: [
          {
            name: "Trame de Prise de Références (Conforme RGPD)",
            id: "outil_prise_references",
          },
        ],
      },
      {
        title: "2.4 ⸺ Les Erreurs à Éviter : Garantir un Processus Équitable",
        content: `<p>Lors des entretiens d'embauche et de la prise des références, certaines questions peuvent sembler anodines mais sont en réalité inappropriées, voire illégales. Il est essentiel pour les recruteurs de les reconnaître afin de garantir un processus de recrutement équitable et respectueux.</p>
              <p class="mt-2">Selon l’article L.1132-1 du Code du travail, le recrutement doit se baser uniquement sur des critères objectifs, liés aux qualifications et à l’expérience, et non sur des éléments personnels qui pourraient être perçus comme discriminants. Voici une liste d'exemples de questions à proscrire, regroupées par thématique.</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  
                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">Origine</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Vous avez un accent, vous êtes originaire d’où ?</li>
                          <li>Vous êtes né(e) en France ?</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">Situation de famille & Grossesse</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Êtes-vous marié(e) ?</li>
                          <li>Avez-vous des enfants ou prévoyez-vous d'en avoir ?</li>
                          <li>Êtes-vous enceinte actuellement ?</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">Apparence physique & Âge</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Pensez-vous correspondre à notre politique d'image ?</li>
                          <li>Quel âge avez-vous exactement ?</li>
                          <li>Vous êtes proche de la retraite, cela ne pose pas de souci ?</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">État de santé & Handicap</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Avez-vous des antécédents médicaux importants ?</li>
                          <li>Combien de jours d'arrêt maladie avez-vous pris ?</li>
                          <li>Votre handicap vous permettra-t-il de remplir vos missions ?</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">Convictions personnelles</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Pour qui avez-vous voté ?</li>
                          <li>Faites-vous partie d'un syndicat ?</li>
                          <li>Pratiquez-vous une religion ?</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <h5 class="font-bold text-md" style="color: var(--c-primary);">Vie privée & Mœurs</h5>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>Pourquoi avez-vous choisi de vivre dans ce quartier ?</li>
                           <li>Vous consommez de l'alcool en dehors du travail ?</li>
                          <li>Quel est votre style de vie en général ?</li>
                      </ul>
                  </div>

              </div>
              <p class="text-xs italic text-gray-500 mt-4 text-right">Source : <a href="https://www.cci.fr/ressources/ressources-humaines/recrutement/les-questions-eviter-lors-de-lembauche" target="_blank" rel="noopener noreferrer" class="underline">CCI.fr - Les questions à éviter lors de l'embauche</a></p>`,
      },
      {
        title: "2.5 ⸺ L'Alternance : Former et Intégrer vos Futurs Talents",
        content: `Face aux tensions de recrutement, l'alternance est bien plus qu'une solution de court terme : c'est un investissement stratégique pour préparer l'avenir de votre PME. En formant un jeune ou un adulte en reconversion à vos métiers et à votre culture, vous préparez une embauche durable et parfaitement adaptée à vos besoins.
    <br><br>
    <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Pourquoi l'Alternance est une Solution Gagnante pour votre PME :</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div class="idea-card p-4 rounded-lg">
            <div class="flex items-center">
                <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <h5 class="font-bold text-md" style="color: var(--c-primary);">Former à votre culture d'entreprise</h5>
            </div>
            <p class="text-sm mt-2">L'alternant apprend le métier avec vos méthodes, sur vos véhicules et s'imprègne de vos valeurs. C'est la meilleure garantie d'une intégration réussie sur le long terme.</p>
        </div>

        <div class="idea-card p-4 rounded-lg">
            <div class="flex items-center">
                <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <h5 class="font-bold text-md" style="color: var(--c-primary);">Bénéficier d'aides financières conséquentes</h5>
            </div>
            <p class="text-sm mt-2">Entre l'aide exceptionnelle de l'État (jusqu'à 6&nbsp;000&nbsp;€ pour 2025), les exonérations de cotisations et la prise en charge des frais de formation par votre OPCO Mobilités, le coût pour l'entreprise est très maîtrisé.</p>
        </div>

        <div class="idea-card p-4 rounded-lg">
            <div class="flex items-center">
                <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.375 3.375 0 0114 18.442V18.442a3.375 3.375 0 01-4 0l-.548-.547z"></path></svg>
                <h5 class="font-bold text-md" style="color: var(--c-primary);">Intégrer un regard neuf</h5>
            </div>
            <p class="text-sm mt-2">Accueillir un alternant, c'est aussi faire entrer de nouvelles idées et de nouvelles compétences, notamment sur le digital, qui peuvent bénéficier à toute l'équipe.</p>
        </div>

        <div class="idea-card p-4 rounded-lg">
            <div class="flex items-center">
                <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <h5 class="font-bold text-md" style="color: var(--c-primary);">Un recrutement sécurisé</h5>
            </div>
            <p class="text-sm mt-2">La période d'alternance (1 à 2 ans) est la meilleure des périodes d'essai. Vous avez le temps de valider les compétences techniques et le savoir-être du candidat avant une embauche en CDI.</p>
        </div>
    </div>

                              <a href="https://codepen.io/reunir/live/RNWMbXJ/11f1057711c74c03e40666f813854d9a" target="_blank" rel="noopener noreferrer" class="block mt-6 col-span-1 md:col-span-2 no-underline">
                                <div class="idea-card p-6 rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 border-t-4 h-full" style="border-color: var(--c-accent);">
                                   <div class="flex-shrink-0">
                                        <svg class="w-12 h-12" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
                                   </div>
                                   <div class="flex-grow text-center md:text-left max-w-2xl">
                                        <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Trouvez vos futurs alternants grâce à la Candidathèque Réunir</h4>
                                        <p class="text-sm mb-3">Réunir, en partenarait avec Isteli, Cergy Université et Univeristé Lyon II, met à votre disposition les CV de tous les nouveaux étudiants des formations TRV via notre candidathèque. Un besoin particulier ? N'hésitez pas à nous contacter directement via l'adresse mail rh@reunir.org pour un accompagnement sur mesure.</p>
                                        <div class="flex justify-center md:justify-start items-center gap-4">
                                            <img src="https://herport.net/wp-content/uploads/2019/12/pic-isteli-logo.png" alt="Logo Isteli" class="h-10">
                                            <img src="https://www.i-eisti.org/app/uploads/2021/04/Logo_CY_Cergy_Paris_Universite.png" alt="Logo CY Cergy Paris Université" class="h-10">
                                            <img src="https://www.univ-lyon2.fr/medias/photo/logo-ull2_1743001772056-png" alt="Logo Université Lumière Lyon 2" class="h-20">
                                        </div>
                                   </div>
                                </div>
                              </a>`,
        tools: [
          {
            name: "Outil : Fiche Repère sur l'Alternance",
            id: "outil_alternance_fiche_repere",
          },
        ],
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Recruter",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Recrutement Sans CV</h4>
                                    <p class="text-sm">Concentrez-vous sur les compétences réelles via des entretiens et des mises en situation pour découvrir des talents au-delà du papier.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V5.25A2.25 2.25 0 0017.25 3H6.75A2.25 2.25 0 004.5 5.25v13.5" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Partenariats Locaux</h4>
                                    <p class="text-sm">Collaborez avec France Travail, le GEIQ, les centres de formation et les Maisons de l’Emploi pour diversifier vos sources de candidats.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Interventions Terrain</h4>
                                    <p class="text-sm">Allez à la rencontre des futurs talents en intervenant directement dans les centres de formation pour présenter votre entreprise et ses métiers.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Candidature Simplifiée</h4>
                                    <p class="text-sm">Facilitez la vie des candidats avec des formulaires courts, des candidatures par SMS/WhatsApp ou CV vidéo, et une réponse garantie en 48h.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 14l4 2 4-2-4-2z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Formation Pré-embauche</h4>
                                    <p class="text-sm">Attirez des profils en reconversion en proposant des formations qualifiantes prises en charge avant même l'embauche.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Ateliers Découverte</h4>
                                    <p class="text-sm">Organisez des ateliers pratiques en partenariat avec les acteurs de l'emploi pour faire découvrir le métier et lever les freins.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Impliquer des Ambassadeurs</h4>
                                    <p class="text-sm">Faites participer vos salariés-ambassadeurs aux entretiens pour une présentation authentique et crédible de l'entreprise.</p>
                                </div>                         
                                    <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
        <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0L14.25 18l-2.962 2.962a3.75 3.75 0 01-5.962 0L5.32 18.72m12.72.002a9.094 9.094 0 01-3.742-.479 3 3 0 014.682-2.72M9.28 18.72a9.094 9.094 0 01-3.742-.479 3 3 0 014.682-2.72-3 3 0 01-4.682 2.72zm.002-12.72a9.094 9.094 0 013.742.479 3 3 0 01-4.682 2.72-3 3 0 014.682-2.72zm7.5 2.962a3.75 3.75 0 00-5.962 0L14.25 6l2.962-2.962a3.75 3.75 0 005.962 0L21.68 6l-2.962 2.962z" /></svg></div>
        <h4 class="font-bold text-md mb-1 mt-3">Réseau d'Acteurs Locaux</h4>
        <p class="text-sm">Forgez des liens solides avec les acteurs de l'emploi de votre territoire : Missions Locales, agences France Travail, Cap Emploi... Ils peuvent devenir vos meilleurs alliés pour sourcer des candidats et vous informer sur les aides à l'embauche.</p>
    </div>
    
      <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
        <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 12L8 14l4 2 4-2-4-2z" /></svg></div>
        <h4 class="font-bold text-md mb-1 mt-3">Formations Pré-embauche</h4>
        <p class="text-sm flex-grow">Attirez des profils en reconversion en finançant leur formation avant l'embauche via des dispositifs comme la POEC ou l'AFPR. C'est un excellent moyen de sécuriser un recrutement.</p>
        <div class="mt-3">
             <a href="https://codepen.io/reunir/live/myemxXx/fb89cc2e4e61655511e32e947ace2670" target="_blank" rel="noopener noreferrer" class="tool-button">Guide Financement OPCO</a>
        </div>
    </div>
                            </div>`,
      },
    ],
  },
  onboarding: {
    shortTitle: "Intégrer",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>`,
    title: "Intégrer pour Fidéliser : Les 90 Premiers Jours qui Changent Tout",
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre III : Intégrer & Fidéliser</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <p class="font-semibold" style="color: var(--c-primary);">Le Chiffre Clé</p>
            <p class="text-2xl font-bold my-1" style="color: var(--c-accent);">+82%</p>
            <p class="text-sm italic" style="color: var(--c-secondary);">C'est l'amélioration de la rétention des nouvelles recrues grâce à un processus d'onboarding structuré. Les 90 premiers jours sont décisifs.</p>
            <p class="text-xs italic text-gray-500 mt-2 text-right">Source: Glassdoor</p>
        </div>
        Attirer un talent est une victoire, mais le conserver est le véritable enjeu. Une intégration réussie est l'investissement le plus rentable pour réduire le turnover et garantir l'engagement à long terme.<br><br>`,
    practices: [
      {
        title:
          "3.1 ⸺ Onboarding : Votre Meilleur Investissement pour la Rétention",
        content: `L'onboarding est bien plus qu'une simple formalité administrative. C'est un processus stratégique qui vise à accueillir, former et socialiser un nouveau salarié pour qu'il devienne rapidement performant, engagé et intégré à la culture de l'entreprise. Dans un secteur avec un taux de rotation de 19 %, négliger cette phase est une erreur coûteuse.
              <br><br><strong>Les chiffres sont formels et concordants :</strong>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div class="stat-card p-4 rounded-lg text-center flex flex-col justify-center">
                      <p class="text-5xl font-bold my-2" style="color: var(--c-primary);">+82%</p>
                      <h3 class="font-semibold text-md mt-2" style="color: var(--c-primary);">de Rétention</h3>
                      <p class="text-sm mt-1" style="color: var(--c-secondary);">C'est l'amélioration de la rétention des nouvelles recrues grâce à un processus d'onboarding structuré.</p>
                      <p class="text-xs italic text-gray-500 mt-2">Source: <a href="https://www.glassdoor.com/employers/blog/the-true-cost-of-a-bad-hire/" target="_blank" class="underline">Glassdoor</a></p>
                  </div>
                  <div class="stat-card p-4 rounded-lg text-center flex flex-col justify-center">
                      <p class="text-5xl font-bold my-2" style="color: var(--c-primary);">18x</p>
                      <h3 class="font-semibold text-md mt-2" style="color: var(--c-primary);">plus d'Engagement</h3>
                      <p class="text-sm mt-1" style="color: var(--c-secondary);">Les salariés ayant vécu une expérience d'intégration exceptionnelle sont 18 fois plus engagés dans leur entreprise.</p>
                       <p class="text-xs italic text-gray-500 mt-2">Source: <a href="https://flair.hr/en/blog/employee-onboarding-statistics/" target="_blank" class="underline">Flair.hr</a></p>
                  </div>
                  <div class="stat-card p-4 rounded-lg text-center flex flex-col justify-center">
                      <p class="text-5xl font-bold my-2" style="color: var(--c-primary);">38%</p>
                      <h3 class="font-semibold text-md mt-2" style="color: var(--c-primary);">des Départs</h3>
                      <p class="text-sm mt-1" style="color: var(--c-secondary);">C'est la part des départs qui ont lieu au cours de la première année, une période où l'onboarding est décisif.</p>
                       <p class="text-xs italic text-gray-500 mt-2">Source: <a href="https://www.yomly.com/employee-onboarding-statistics/" target="_blank" class="underline">Yomly</a></p>
                  </div>
              </div>
              <p>L'enquête des adhérents révèle qu'une prise de conscience de cet enjeu, avec des initiatives comme la crétaion de livrets d'accueil ou de la mise en place de systèmes de tutorat. Cependant, ces actions sont souvent décrites comme étant 'en cours de construction' ou 'pas toujours respectées par manque de temps'. Cette perception de l'onboarding comme une tâche secondaire, plutôt que comme un investissement stratégique, est précisément ce qui doit changer.</p>`,
      },
      {
        title: "3.2 ⸺ Le Parcours d'Intégration Idéal : La Checklist",
        content: `Pour être efficace, un parcours d'intégration doit être planifié, cohérent et couvrir les aspects techniques, sociaux et culturels du poste. Il ne s'agit pas de surcharger le nouvel arrivant, mais de réaliser une intégration aec des étapes clés, à adapter en fonction des métiers. Voici un exemple de frise chronologique d'étapes clés pour un conducteur. Après la prise de connaissance de ces étapes, vous pouvez cliquer sur l'outil «&nbsp;Checklist Interactive&nbsp;» en bas.
              <br><br>
              <div class="relative border-l-2 border-dashed ml-4 mt-6" style="border-color: var(--c-accent-light);">
                  
                  <div class="mb-8 ml-8">
                      <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">1</div>
                      <h4 class="font-bold text-lg" style="color: var(--c-primary);">Phase 1 : Le Pré-boarding (Avant le Jour J)</h4>
                      <p class="text-sm mt-1">L'intégration commence avant même le premier jour. Envoyez les documents administratifs en amont et un message de bienvenue pour rassurer et créer un premier lien.</p>
                  </div>

                  <div class="mb-8 ml-8">
                      <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">2</div>
                      <h4 class="font-bold text-lg" style="color: var(--c-primary);">Phase 2 : Le Jour 1 - L'Accueil</h4>
                      <p class="text-sm mt-1">Cette journée est dédiée à l'accueil, la visite des locaux, la présentation de l'équipe, un déjeuner convivial, la remise du kit de bienvenue, et l'accompagnement d'un tuteur / binôme le cas échéant.</p>
                  </div>

                  <div class="mb-8 ml-8">
                      <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">3</div>
                      <h4 class="font-bold text-lg" style="color: var(--c-primary);">Phase 3 : La Semaine 1 - L'Immersion</h4>
                      <p class="text-sm mt-1">L'objectif est de rendre le conducteur autonome sur les fondamentaux : tournées en double avec son tuteur, prise en main du véhicule, explication des procédures clés.</p>
                  </div>

                  <div class="mb-8 ml-8">
                      <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">4</div>
                      <h4 class="font-bold text-lg" style="color: var(--c-primary);">Phase 4 : Le Premier Mois - Le Feedback</h4>
                      <p class="text-sm mt-1">Le collaborateur prend ses marques. C'est le moment d'organiser un premier bilan formel pour échanger sur ses réussites, ses difficultés et répondre à ses questions.</p>
                  </div>

                   <div class="ml-8">
                      <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">5</div>
                      <h4 class="font-bold text-lg" style="color: var(--c-primary);">Phase 5 : La Confirmation</h4>
                      <p class="text-sm mt-1">C'est un moment charnière pour valider la fin de la période d'essai et échanger via la grille d'évaluation.</p>
                  </div>
              </div>`,
        tools: [
          {
            name: "Checklist Interactive",
            type: "link",
            url: "https://codepen.io/reunir/live/yyYbKKB/aec142f6da7483e82b25f9916503c77e",
          },
          {
            name: "Outil : Checklist d'Intégration PDF",
            id: "outil_checklist_pdf",
          },
          {
            name: "Grille Évaluation Intégration PDF",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=1wvt5Ug3uPiOOT-U74QliPRaga5LhUDXS",
          },
        ],
      },
      {
        title: "3.3 ⸺ Le Rôle Clé du Manager et du Tuteur dans l'Intégration",
        content: `Le succès de l'onboarding ne repose pas uniquement sur une checklist, mais sur l'implication humaine de deux acteurs clés : le manager direct et le tuteur (ou parrain/marraine).
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  
                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-primary);">
                      <div class="flex items-center">
                          <svg class="w-8 h-8 mr-3" style="color: var(--c-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">Le Manager : Premier Pilote</h4>
                      </div>
                      <p class="text-sm mt-2 mb-3">Premier artisan de la fidélisation, il donne le cap et crée un climat de confiance.</p>
                      <ul class="list-disc pl-5 text-sm space-y-1">
                          <li><strong>Donner une vision claire :</strong> Fixer les objectifs des premières semaines.</li>
                          <li><strong>Créer du lien :</strong> Organiser les présentations et le déjeuner d'équipe.</li>
                          <li><strong>Instaurer le dialogue :</strong> Planifier et mener les points de suivi réguliers.</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-accent);">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">Le Tuteur : Guide de Terrain</h4>
                      </div>
                      <p class="text-sm mt-2 mb-3">Référent de confiance du nouvel arrivant, il est le relais indispensable au quotidien.</p>
                       <ul class="list-disc pl-5 text-sm space-y-1">
                          <li><strong>Transmettre le savoir-faire :</strong> Former sur le véhicule, les tournées, les astuces du métier.</li>
                          <li><strong>Partager la culture :</strong> Expliquer les règles implicites, les habitudes, le "comment on travaille ici".</li>
                          <li><strong>Être le point de contact :</strong> Répondre aux questions que l'on n'ose pas poser au manager.</li>
                      </ul>
                  </div>
              </div>
              <br>
              <p class="text-sm p-3 bg-gray-50 rounded-lg border"><strong>Le conseil pro :</strong> Officialisez et valorisez le rôle de tuteur ! Une reconnaissance officielle et/ou une petite prime peut grandement motiver les volontaires.</p>`,
      },
      {
        title:
          "3.4 ⸺ Le Rapport d'Étonnement : Votre Outil d'Amélioration Continue",
        content: `Le rapport d'étonnement est un outil de management simple, gratuit et extraordinairement puissant. Il consiste à demander à un nouvel arrivant de consigner par écrit ses impressions "à chaud" sur l'entreprise après quelques semaines. Son regard neuf est une mine d'or pour identifier des pistes d'amélioration que vous ne voyez plus.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Un Bénéfice Double :</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  
                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-primary);">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">Pour l'Entreprise</h4>
                      </div>
                      <p class="text-sm mt-2">C'est un <strong>diagnostic gratuit et non biaisé</strong> sur vos processus (accueil, formation), votre communication interne, votre culture et vos éventuels irritants du quotidien. C'est un levier d'amélioration continue à très faible coût.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-accent);">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">Pour le Nouveau Collaborateur</h4>
                      </div>
                      <p class="text-sm mt-2">C'est une preuve de confiance forte. En lui demandant son avis, vous le <strong>valorisez</strong>, vous lui montrez que sa voix compte dès le premier jour, et vous <strong>renforcez son engagement</strong> et son sentiment d'appartenance.</p>
                  </div>
              </div>
              <br>
              <p class="text-sm p-3 bg-gray-50 rounded-lg border"><strong>Le moment clé : la restitution.</strong> L'étape la plus importante est la restitution du rapport lors d'un échange dédié avec le manager. L'objectif est d'écouter sans juger, de remercier pour la contribution et, surtout, de donner suite aux suggestions pertinentes.</p>`,
        tools: [
          {
            name: "Formulaire de Rapport Interactif",
            type: "link",
            url: "https://codepen.io/reunir/live/QwjvmgY/64b846a8f1bb015fdcfc43f2d91c530b",
          },
        ],
      },
      {
        title: "3.5 ⸺ Instaurer une Culture du Feedback dès le Premier Jour",
        content: `Le mot "feedback" vient de l'anglais et signifie littéralement "nourrir en retour". À l'origine, il est utilisé pour décrire un signal (un <i>feed</i>) qui revient à sa source pour réguler un système. C'est exactement son rôle en entreprise : créer un environnement où les échanges constructifs (positifs comme axes d'amélioration) sont naturels et constants pour réguler et améliorer la performance collective. L'intégration est le moment idéal pour poser ces bases.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Pourquoi est-ce si important ?</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Accélérer la performance</h5>
                      </div>
                      <p class="text-sm mt-2">Un nouveau collaborateur qui reçoit des retours réguliers sur son travail monte en compétences beaucoup plus vite et atteint ses objectifs plus rapidement.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Renforcer l'engagement</h5>
                      </div>
                      <p class="text-sm mt-2">Un salarié qui se sent écouté et qui peut s'exprimer librement se sentira plus en confiance, plus valorisé et donc plus engagé dans la durée.</p>
                  </div>
              </div>
              <br>
              <p class="text-sm p-3 bg-gray-50 rounded-lg border">
                  <strong>Comment initier cette culture dès l'intégration ?</strong><br>
                  <ul class="list-disc pl-5 mt-2 text-sm">
                      <li><strong>Planifiez des points d'étape formels :</strong> Organisez des points courts mais dédiés, par exemple, à la fin de la semaine 1, du mois 1 (avant la fin de la période d'essai) et du mois 3 pour échanger sur les réussites et les difficultés.</li>
                      <li><strong>Encouragez le feedback informel :</strong> En tant que manager, donnez des retours positifs ("Bravo pour la gestion de...") et constructifs ("La prochaine fois, essaie de...") de manière simple et immédiate.</li>
                      <li><strong>Utilisez le rapport d'étonnement :</strong> C'est le premier acte de feedback que vous demandez à votre nouvelle recrue. Valorisez sa contribution en montrant que ses idées sont prises en compte.</li>
                  </ul>
              </p>`,
        tools: [
          {
            name: "Clés Pour un Feedback Efficient",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=1Yf0iazMuGxidTZCHfs0hEYwr-Xg3qvpk",
          },
        ],
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Intégrer",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Immersion et Stages</h4>
                                    <p class="text-sm">Accueillir des stagiaires pour faire découvrir les coulisses de vos métiers et susciter des vocations futures.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Culture d'Ambassadeurs</h4>
                                    <p class="text-sm">Encourager les collaborateurs à valoriser leur entreprise à travers un rôle d'ambassadeur.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                     <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5H18a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25-2.25H6.75a2.25 2.25 0 01-2.25-2.25v-9a2.25 2.25 0 012.25-2.25z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Onboarding Transparent</h4>
                                    <p class="text-sm">Mettre en place un parcours d'intégration clairement défini et visible pour une prise de poste efficiente et rassurante.</p>
                                </div>
                               
                            </div>`,
      },
    ],
  },
  developpement: {
    shortTitle: "Former",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
    title: "Développer les Compétences et Offrir des Perspectives",
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre IV : Former & Développer</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="w-10 h-10" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                </div>
                <div class="ml-4">
                     <p class="text-xl italic" style="color: var(--c-secondary);">«&nbsp;La meilleure stratégie de rétention est de donner tellement de raisons de grandir à vos collaborateurs qu'ils n'ont aucune envie de partir.&nbsp;»</p>
                </div>
            </div>
        </div>
        Dans un secteur en pleine mutation, la formation n'est pas une dépense, mais un investissement stratégique. Offrir des perspectives claires est la réponse la plus efficace aux problèmes de fidélisation et de recrutement.<br><br>`,
    practices: [
      {
        title:
          "4.1 ⸺ Du Réactif au Proactif : Piloter les Compétences avec le PDC et le PDI",
        content: `L'enquête menée au sein du Groupe Associatif Réunir montre que la formation est souvent gérée de manière réactive. Pour aligner durablement les compétences de vos équipes avec les objectifs de l'entreprise, il est nécessaire d'articuler deux outils complémentaires : le Plan de Développement des Compétences (PDC) et le Plan de Développement Individuel (PDI).
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div class="idea-card p-4 rounded-lg border-l-4" style="border-color: var(--c-primary);">
                      <div class="flex items-center">
                          <svg class="w-8 h-8" style="color: var(--c-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                          <h4 class="font-bold text-lg ml-3" style="color: var(--c-primary);">Le PDC : La Vision Stratégique</h4>
                      </div>
                      <p class="text-sm mt-2">Le <strong>Plan de Développement des Compétences</strong> est la feuille de route de l'entreprise. Il formalise la politique de formation pour l'année à venir. Son objectif est de répondre aux besoins <strong>collectifs et stratégiques</strong> : formations réglementaires (FCO), adaptation à de nouvelles technologies (véhicules électriques), ou encore développement de compétences clés pour l'ensemble d'une équipe (gestion des conflits, par exemple).</p>
                  </div>
                   <div class="idea-card p-4 rounded-lg border-l-4" style="border-color: var(--c-accent);">
                      <div class="flex items-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                          <h4 class="font-bold text-lg ml-3" style="color: var(--c-primary);">Le PDI : Le Parcours Individuel</h4>
                      </div>
                      <p class="text-sm mt-2">Le <strong>Plan de Développement Individuel</strong> est co-construit avec le salarié, souvent lors de l'entretien professionnel. Il se concentre sur ses <strong>aspirations et besoins personnels</strong> de développement. C'est un outil de management puissant pour accompagner une montée en compétences, préparer une évolution de carrière ou simplement renforcer l'employabilité et la motivation.</p>
                  </div>
              </div>
              <p class="mt-4">En résumé, le PDC assure à l'entreprise qu'elle investit dans les compétences dont elle a besoin pour son avenir, tandis que le PDI assure à chaque collaborateur d'être acteur de son propre parcours professionnel.</p>`,
        tools: [
          { name: "Construire votre PDC", id: "outil_pdc" },
          {
            name: "Trame d'Entretien Professionnel",
            id: "outil_entretien_pro",
          },
          {
            name: "Formulaire d'Entretien Pro",
            type: "link",
            url: "https://codepen.io/reunir/live/pvjwOjo/cb16bdbaf112d085c7a3fdc3df4cde5b",
          },
          {
            name: "Formulaire PDI",
            type: "link",
            url: "https://codepen.io/reunir/live/gbaWeRe/625a4c3eab5cb637d42405ef32c6da24",
          },
        ],
      },
      {
        title: "4.2 ⸺ Financer la Formation : Les Dispositifs à Connaître",
        content: `Le financement est souvent perçu comme un frein à la formation. Pourtant, de nombreuses solutions existent, spécifiquement conçues pour les PME et souvent gérées par votre interlocuteur clé : l'OPCO Mobilités. Connaître ces dispositifs vous permettra de construire un plan de développement ambitieux et financé.
              <br><br>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                          </div>
                          <div class="ml-4 flex-grow">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Le Plan de Développement des Compétences</h5>
                              <p class="text-sm mt-1">C'est le dispositif principal pour financer la formation de vos <strong>salariés déjà en poste</strong>. Pour les entreprises de moins de 50 salariés, l'OPCO Mobilités peut prendre en charge une grande partie des coûts pédagogiques et parfois même des salaires.</p>
                               <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://www.opcomobilites.fr/entreprise/sinformer-sur-les-dispositifs/le-plan-de-developpement-des-competences" target="_blank" class="underline">OPCO Mobilités</a></p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                               <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                          </div>
                          <div class="ml-4 flex-grow">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">L'Alternance (Apprentissage & Professionnalisation)</h5>
                              <p class="text-sm mt-1">Idéale pour intégrer et former de <strong>nouveaux collaborateurs</strong>. L'OPCO finance les frais de formation et l'État propose des aides significatives à l'embauche, rendant le coût très avantageux pour l'entreprise.</p>
                               <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://www.opcomobilites.fr/entreprise/sinformer-sur-les-dispositifs/le-contrat-dapprentissage" target="_blank" class="underline">OPCO Mobilités</a></p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                          </div>
                          <div class="ml-4 flex-grow">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">La Pro-A (Reconversion par l'Alternance)</h5>
                              <p class="text-sm mt-1">Ce dispositif vise à faire évoluer vos <strong>salariés déjà en poste</strong> (dont la qualification est inférieure à Bac+3) pour obtenir une promotion ou se reconvertir sur un métier en mutation au sein de l'entreprise.</p>
                               <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://www.opcomobilites.fr/salarie/sinformer-sur-les-dispositifs/la-pro-a-la-reconversion-ou-la-promotion-par-lalternance" target="_blank" class="underline">OPCO Mobilités</a></p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                               <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          </div>
                          <div class="ml-4 flex-grow">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">La POEC (Préparation Opérationnelle à l'Emploi)</h5>
                              <p class="text-sm mt-1">Un outil très puissant pour recruter sur des métiers en tension. Il s'agit d'une formation (jusqu'à 400h) destinée aux <strong>demandeurs d'emploi</strong>, financée par l'OPCO et France Travail. À l'issue, vous pouvez recruter des candidats déjà formés et immédiatement opérationnels.</p>
                               <p class="text-xs italic text-gray-500 mt-2 text-right">Source : <a href="https://www.opcomobilites.fr/demandeur-demploi/sinformer-sur-les-dispositifs-de-retour-a-lemploi/poe-les-preparations-operationnelles-a-lemploi" target="_blank" class="underline">OPCO Mobilités</a></p>
                          </div>
                      </div>
                  </div>
              </div>
              <br>
              <p class="text-sm p-3 bg-gray-50 rounded-lg border"><strong>Le conseil pro :</strong> Ne restez pas seul ! Votre conseiller <strong>OPCO Mobilités</strong> est votre meilleur allié. Sa mission est de vous aider à naviguer entre ces dispositifs pour trouver la solution la plus adaptée et la plus avantageuse pour votre entreprise.</p>`,
        tools: [
          {
            name: "Outil : Guide Financement OPCO",
            type: "link",
            url: "https://codepen.io/reunir/live/myemxXx/fb89cc2e4e61655511e32e947ace2670",
          },
          {
            name: "Contacter mon conseiller OPCO Mobilités",
            type: "link",
            url: "https://www.opcomobilites.fr/contact",
          },
        ],
      },
      {
        title:
          "4.3 ⸺ Développer vos Talents : Les Outils Exclusifs du Groupe Associatif Réunir",
        content: `Au-delà des formations réglementaires, le réseau Réunir met à votre disposition des outils exclusifs pour faire monter en compétences vos équipes sur des sujets clés. Ces programmes, conçus par et pour des professionnels du TRV, sont des leviers puissants de performance et de fidélisation.
              <br><br>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: #0D142D;">
                      <div class="flex items-center mb-3">
                           <img src="https://i.postimg.cc/SKTKvbg3/logo-acad-mie-bleu-1.png" alt="Logo Réunir Académie" class="h-10" />
                      </div>
                      <p class="text-sm">La <strong>Réunir Académie</strong> est notre offre de formation complète, conçue pour répondre aux besoins spécifiques de vos équipes. Animée par nos campus régionaux (<strong>RFO</strong> - Normandie, Bretagne et Pays de la Loire / <strong>G'traf</strong> - Nouvelle Aquitaine, Centre-Val de Loire et Occitanie), elle couvre un large spectre de compétences, allant bien au-delà des exemples ci-dessous.</p>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li><strong>Exemples pour les Conducteurs :</strong> Gestion des conflits, Prise en charge des PMR, Sécurité des transports scolaires...</li>
                          <li><strong>Exemples pour les Tuteurs :</strong> Devenir tuteur en entreprise, Perfectionner ses techniques d'évaluation et de communication...</li>
                           <li><strong>Exemples pour le Management :</strong> Parcours complets pour les exploitants, chefs d'atelier et responsables de site, basés sur l'équilibre entre exigence et bienveillance.</li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-accent);">
                       <div class="flex items-center mb-3">
                           <img src="https://i.postimg.cc/zfXB7GFT/Logo-Cassiopee-NB-trait-3.png" alt="Logo Cassiopée" class="h-10" />
                      </div>
                      <p class="text-sm"><strong>Cassiopée</strong> est notre car simulateur mobile qui se déplace dans toute la France, au sein même de votre entreprise. C'est un outil de formation immersif et sans risque qui permet de confronter vos conducteurs à plus de 50 scénarios réalistes (pluie, neige, ville, autoroute...).</p>
                       <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li><strong>Modules principaux :</strong> Éco-conduite, Prévention du risque routier, Manœuvres, et Évacuation d'urgence.</li>
                          <li><strong>Un atout pour le recrutement :</strong> Cassiopée est également un outil formidable pour attirer des candidats lors de job datings ou de salons de l'emploi.</li>
                      </ul>
                      <div class="p-3 mt-3 rounded-lg bg-red-50">
                        <p class="text-sm font-semibold text-center" style="color: var(--c-primary);">Toutes les formations Cassiopée sont certifiées <strong style="color: var(--c-accent);">Qualiopi</strong> et donc éligibles à un financement OPCO !</p>
                      </div>
                  </div>

              </div>`,
        tools: [
          {
            name: "Télécharger le Catalogue Académie",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=1an-vSbyO2MohPCzpCPq5uKM6K-RlCvnf",
          },
          {
            name: "Télécharger la Plaquette Cassiopée",
            type: "link",
            url: "https://drive.google.com/uc?export=download&id=1e9agA_tXeVyzFCdXNFSh0ZxHPSidMZFz",
          },
        ],
      },
      {
        title:
          "4.4 ⸺ Évolution de Carrière : Créer des Passerelles et des Parcours Visibles",
        content: `Face aux difficultés de recrutement, la mobilité interne est la solution la plus évidente, la plus rentable et la plus fidélisante. Proposer des perspectives claires est le meilleur argument pour retenir vos talents.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les 3 Bénéfices Clés de la Mobilité Interne :</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Fidélisation Renforcée</h4>
                      <p class="text-sm">Un salarié qui peut se projeter dans l'avenir de l'entreprise est un salarié qui reste.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 16v-1m0 1v.01M12 16c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Coûts Réduits</h4>
                      <p class="text-sm">Une promotion interne coûte bien moins cher et est moins risquée qu'un recrutement externe.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Culture Préservée</h4>
                      <p class="text-sm">Promouvoir un collaborateur qui connaît déjà l'entreprise, c'est capitaliser sur votre culture.</p>
                  </div>

              </div>
              <br>Pour cela, il est crucial de rendre les parcours de carrière concrets et visibles en communiquant systématiquement les postes en interne et en célébrant les réussites de mobilité. <br><br>
              Le parcours d'évolution peut être rendu visible via votre site ou intégré à votre parcours d'intégration, par exemple, dans un livret remis à l'ensemble des collaborateurs.`,
        tools: [
          {
            name: "Visualiser un Exemple de Parcours d'Évolution",
            id: "outil_parcours_evolution",
          },
        ],
      },
      {
        title: "4.5 ⸺ Ancrer la Formation comme une Politique d'Entreprise",
        content: `La formation ne doit pas être une série d'actions isolées, mais une véritable politique d'entreprise, visible et comprise de tous. Il s'agit de développer une culture de l'apprentissage continu pour valoriser les collaborateurs, renforcer leur engagement et préparer l'avenir de votre PME.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.5 4.5 0 017.5 14.5h8.25a4.5 4.5 0 01.436-6.317A4.5 4.5 0 017.5 8.5H6.75a4.5 4.5 0 01-1.314 5.183z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Communiquez votre Politique</h4>
                      <p class="text-sm">Présentez votre engagement pour la formation dans le livret d'accueil, sur votre site carrière et lors des entretiens. Montrez que c'est une priorité.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Valorisez les Compétences</h4>
                      <p class="text-sm">Célébrez l'obtention de certifications ou de diplômes. Liez les nouvelles compétences acquises à de nouvelles responsabilités ou à une évolution de carrière visible.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Impliquez les Managers</h4>
                      <p class="text-sm">Formez vos managers à identifier les besoins de leurs équipes et à encourager la formation comme un levier de performance et de motivation au quotidien.</p>
                  </div>

              </div>`,
      },
      {
        title: "4.6 ⸺ Se Former en Ligne : Développer de Nouvelles Compétences",
        content: `En complément des formations métiers, les plateformes en ligne offrent une flexibilité et une richesse de contenu incroyables pour développer les compétences transversales de vos équipes (management, commercial, administratif...). C'est un excellent moyen de rester à la pointe, souvent à moindre coût.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg">
                      <a href="https://learndigital.withgoogle.com/ateliersnumeriques/" target="_blank" class="flex items-center mb-3">
                           <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt="Logo Google" class="h-8" />
                      </a>
                      <p class="text-sm mt-2">Google propose une multitude de formations <strong>entièrement gratuites</strong>, dont certaines sont certifiantes. C'est idéal pour faire monter en compétences vos équipes sur les fondamentaux du digital, un enjeu clé pour la modernisation de votre PME.</p>
                      <ul class="list-disc pl-5 mt-2 text-sm">
                        <li><strong>Exemples de cours :</strong> "Principes fondamentaux du marketing numérique", "Faire la promotion d'une entreprise en ligne".</li>
                        <li><a href="https://learndigital.withgoogle.com/ateliersnumeriques/" target="_blank" class="font-semibold underline" style="color:var(--c-accent);">Explorer les formations Google →</a></li>
                      </ul>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <a href="https://www.coursera.org/" target="_blank" class="flex items-center mb-3">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/2560px-Coursera_logo_%282020%29.svg.png" alt="Logo Coursera" class="h-5" />
                      </a>
                      <p class="text-sm mt-2">Coursera collabore avec les plus grandes universités du monde pour offrir des cours de haute qualité. L'abonnement <strong>Coursera Plus</strong> (<strong>50€/mois</strong> ou <strong>338€/an</strong>) donne un accès illimité à la majorité du catalogue, un investissement très rentable.</p>
                       <ul class="list-disc pl-5 mt-2 text-sm">
                        <li><strong>Exemples pour les managers :</strong> "Gestion de projet" (Google), "Le manager leader" (HEC Paris), "Fondamentaux de la finance pour les managers" (IESE Business School).</li>
                        <li><a href="https://www.coursera.org/" target="_blank" class="font-semibold underline" style="color:var(--c-accent);">Explorer les formations Coursera →</a></li>
                      </ul>
                  </div>
              </div>`,
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Former",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                    <h4 class="font-bold text-md mb-1 mt-3">Les "Flash Formations"</h4>
                    <p class="text-sm">Organiser des sessions de formation très courtes (15-20 min) avant le début du service sur un point très précis : un rappel de sécurité, une nouvelle fonctionnalité du véhicule, une astuce de gestion de conflit...</p>
                </div>
                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg></div>
                    <h4 class="font-bold text-md mb-1 mt-3">Le Tutorat Croisé</h4>
                    <p class="text-sm">Faire intervenir un mécanicien expérimenté pour animer une session sur les "pannes évitables" auprès des conducteurs, ou organisez des échanges de pratiques entre conducteurs de différentes lignes.</p>
                </div>
                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg></div>
                    <h4 class="font-bold text-md mb-1 mt-3">Le Challenge Éco-conduite</h4>
                    <p class="text-sm">Lancer un défi mensuel ou trimestriel sur l'éco-conduite, avec un petit lot à la clé pour le conducteur ou l'équipe qui aura le plus réduit sa consommation. La gamification (l'utilisation des mécanismes du jeu dans d'autres domaines) rend l'apprentissage plus ludique !</p>
                </div>
            </div>`,
      },
    ],
  },
  epanouissement_fidelisation: {
    shortTitle: "Engager",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>`,
    title:
      "Engager & Fidéliser : Animer la Performance et le Bien-être au Quotidien",
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre V : Engager & Fidéliser</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="w-10 h-10" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                </div>
                <div class="ml-4">
                     <p class="text-xl italic" style="color: var(--c-secondary);">« La fidélisation n'est pas une politique de rétention, c'est une culture de l'attention. S'intéresser sincèrement à ses équipes est le premier levier de l'engagement. »</p>
                </div>
            </div>
        </div>
        La fidélisation se construit jour après jour, à travers la qualité du management, la culture d'entreprise et l'attention portée au bien-être. Cette partie explore comment transformer les intentions en pratiques tangibles pour renforcer l'engagement.<br><br>`,
    practices: [
      {
        title:
          "5.1 ⸺ Les Piliers de l'Engagement en 2025 : Équilibre, Sens, Reconnaissance",
        content: `Les attentes des salariés ont profondément évolué. Pour attirer et retenir les talents en 2025, trois piliers sont devenus incontournables. Ils forment le socle d'une culture d'entreprise positive et performante.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

                  <div class="idea-card p-4 rounded-lg text-center flex flex-col items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                          <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div class="mt-4 flex-grow">
                          <h4 class="font-bold text-lg mb-2" style="color: var(--c-primary);">Pilier 1 : Équilibre & Flexibilité</h4>
                          <p class="text-sm">C'est le critère numéro un. Pour des conducteurs aux horaires parfois fragmentés, la prévisibilité des plannings et la souplesse face aux impératifs personnels sont un avantage concurrentiel majeur.</p>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center flex flex-col items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                          <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
                      </div>
                      <div class="mt-4 flex-grow">
                          <h4 class="font-bold text-lg mb-2" style="color: var(--c-primary);">Pilier 2 : Sens & Culture</h4>
                          <p class="text-sm">Les salariés veulent contribuer à une mission qui a du sens. Une culture d'entreprise saine, où les valeurs de proximité sont vécues au quotidien, est un facteur d'engagement primordial.</p>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center flex flex-col items-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                          <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                      </div>
                      <div class="mt-4 flex-grow">
                           <h4 class="font-bold text-lg mb-2" style="color: var(--c-primary);">Pilier 3 : Reconnaissance</h4>
                           <p class="text-sm">L'engagement naît du sentiment d'être vu et valorisé. La reconnaissance va bien au-delà de la rémunération ; elle touche à la considération pour le travail bien fait, les efforts fournis et la contribution de chacun.</p>
                      </div>
                  </div>
              </div>`,
      },
      {
        title:
          "5.2 ⸺ Écouter pour Progresser : L'Écoute Active et Constructive",
        content: `L'évaluation ne doit pas être un jugement, mais un dialogue. C'est un levier essentiel pour aligner les attentes, reconnaître les contributions et identifier les besoins de développement. Pour être efficace, elle doit être régulière, co-construite et basée sur une écoute sincère.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Instaurez des Rituels</h4>
                      <p class="text-sm">Pour évaluer de manière individuelle l'engagement des collaborateurs, un simple "café-feedback" de 15 minutes chaque mois peut avoir un impact considérable.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Écoutez les Attentes</h4>
                      <p class="text-sm">Utilisez des enquêtes de satisfaction anonymes ou des ateliers pour recueillir le feedback collectif des collaborateurs sur leur adhésion aux valeurs et à la culture de l'entreprise.</p>
                  </div>

              </div>`,
      },
      {
        title: "5.3 ⸺ La Reconnaissance : Le Carburant de la Motivation",
        content: `Beaucoup de dirigeants de PME associent la reconnaissance à des coûts importants. Si la reconnaissance financière est un élément de base, elle est loin d'être suffisante pour nourrir l'engagement au quotidien. Les formes de reconnaissance les plus impactantes sont souvent celles qui ne coûtent rien, mais qui demandent de l'attention, de la sincérité et de la régularité.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les 4 Niveaux d'une Reconnaissance Efficace :</h4>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-1.9 3.8a2 2 0 00.23 2.16l3.95 4.5M7 14h-1a2 2 0 01-2-2V7a2 2 0 012-2h2"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">1. Le "Merci" Spécifique, Sincère et Immédiat</h5>
                              <p class="text-sm mt-1">C'est la base. Un « Merci Jean d'avoir géré le changement de planning de dernière minute hier, tu as vraiment dépanné l'équipe » est bien plus puissant qu'un simple « bon travail ». Il montre que vous avez vu l'effort spécifique.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">2. La Célébration des Réussites</h5>
                              <p class="text-sm mt-1">Ne laissez pas les succès passer inaperçus. Affichez les compliments clients, célébrez en équipe l'obtention d'un nouveau contrat, ou organisez un moment convivial pour souligner la fin d'une période intense. Cela renforce la fierté collective.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">3. La Reconnaissance par la Confiance</h5>
                              <p class="text-sm mt-1">Montrez à un collaborateur que vous valorisez ses compétences en lui déléguant un dossier important, en le nommant tuteur pour un nouvel arrivant, ou en l'impliquant dans une décision pour l'atelier. C'est un signe de reconnaissance fort.</p>
                          </div>
                      </div>
                  </div>

                   <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">4. L'Investissement dans le Confort et les Outils</h5>
                              <p class="text-sm mt-1">Pour un conducteur ou un mécanicien, la qualité de ses outils de travail est un signe majeur de considération. Investir dans du bon outillage, maintenir des véhicules propres et bien entretenus, ou améliorer la salle de pause sont des actes de reconnaissance concrets.</p>
                          </div>
                      </div>
                  </div>
              </div>`,
        tools: [
          {
            name: "Outil : La Boîte à Idées de la Reconnaissance",
            id: "outil_reconnaissance",
          },
        ],
      },
      {
        title: "5.4 ⸺ Au-delà du Salaire : Les Avantages qui Comptent Vraiment",
        content: `Si un salaire juste est la base, les avantages sociaux sont un levier puissant pour attirer, fidéliser et prendre soin de vos équipes. Ils ont un impact direct sur le pouvoir d'achat et le bien-être de vos collaborateurs.
              <br><br>
              <div class="flex flex-col gap-4 mt-6">

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="idea-card p-4 rounded-lg flex flex-col h-full">
                          <div class="flex items-center mb-2">
                              <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Le Socle Indispensable : Protection</h5>
                          </div>
                          <p class="text-sm flex-grow">Une <strong>mutuelle et une prévoyance de qualité</strong>, qui protègent vos collaborateurs et leurs familles, est un signe de considération majeur.</p>
                      </div>
                      <div class="idea-card p-4 rounded-lg flex flex-col h-full">
                          <div class="flex items-center mb-2">
                              <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.781-4.121M12 12a4 4 0 110-8 4 4 0 010 8z"></path></svg>
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">Les "Plus" qui Améliorent le Quotidien</h5>
                          </div>
                          <p class="text-sm flex-grow">Les <strong>chèques-vacances</strong>, les <strong>titres-restaurant</strong> ou encore le <strong>Compte Épargne Temps (CET)</strong> sont des avantages concrets qui offrent de la souplesse et un gain de pouvoir d'achat direct, très valorisés par les équipes.</p>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg flex flex-col">
                      <div class="flex items-center mb-2">
                          <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 16v-1m0 1v.01M12 16c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Le Partage de la Valeur</h5>
                      </div>
                      <div class="text-sm flex-grow">
                        <p class="mb-3">Associez vos collaborateurs à la réussite de l'entreprise et renforcez leur engagement grâce aux dispositifs de participation, d'intéressement ou à la Prime de Partage de la Valeur (PPV).</p>
                        <div class="p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                            <strong>À noter :</strong> À partir du 1er décembre 2025, les entreprises de 11 à 49 salariés profitables pendant 3 années consécutives auront l'obligation de mettre en place au moins un de ces dispositifs de partage de la valeur.
                        </div>
                      </div>
                      <div class="mt-3 text-xs text-right">
                        <span class="font-semibold">Sources :</span>
                        <a href="https://www.service-public.fr/professionnels-entreprises/actualites/A17074" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">service-public.fr</a>, 
                        <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048482705" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent">legifrance.gouv.fr</a>
                      </div>
                  </div>
                  
                  <div class="idea-card p-4 rounded-lg flex flex-col border-2" style="border-color: #F59E0B;">
                      <div class="flex items-center mb-2">
                           <svg class="w-8 h-8 mr-3" style="color: #F59E0B;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                          <h5 class="font-bold text-md" style="color: #B45309;">Votre Avantage Exclusif : Réunir Avantages !</h5>
                      </div>
                      <p class="text-sm flex-grow">Pour booster le pouvoir d'achat de vos collaborateurs, la plateforme <strong>Réunir Avantages</strong> offre un accès à plus de <strong>300 000 offres exclusives</strong> sur les loisirs, la culture et le quotidien, avec des réductions allant jusqu'à 85%.</p>
                  </div>

              </div>`,
        tools: [
          {
            name: "Réunir Avantages - Kit de Déploiement",
            type: "link",
            url: "https://drive.google.com/drive/folders/14mWn_4zGyXM-w9YiMEcyoCKLUsRZqeZp?usp=drive_link",
          },
        ],
      },
      {
        title:
          "5.5 ⸺ L'Enquête de Fidélisation : L'Outil pour Prévenir les Départs",
        content: `Plutôt que d'attendre l'entretien de départ pour comprendre pourquoi un salarié quitte l'entreprise, il est plus stratégique de comprendre pourquoi les bons collaborateurs <strong>restent</strong>. L'enquête de fidélisation est un outil de management préventif, puissant et simple à mettre en œuvre.
              <br><br>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  
                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-primary);">
                      <div class="flex items-center">
                          <svg class="w-8 h-8 mr-3" style="color: var(--c-primary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">L'Objectif</h4>
                      </div>
                      <p class="text-sm mt-2">Identifier de manière proactive les points de friction (organisation, management, conditions de travail...) avant qu'ils ne se transforment en motifs de démission, et capitaliser sur vos points forts.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg border-t-4" style="border-color: var(--c-accent);">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                          <h4 class="font-bold text-lg" style="color: var(--c-primary);">Pourquoi une Enquête Anonyme ?</h4>
                      </div>
                      <p class="text-sm mt-2">Contrairement à un entretien en face à face, une enquête anonyme <strong>libère la parole</strong>. Elle permet de recueillir des retours plus honnêtes et de faire remonter des informations que les salariés n'oseraient peut-être pas exprimer directement.</p>
                  </div>
              </div>
              <br>
              <p class="text-sm p-3 bg-gray-50 rounded-lg border"><strong>Comment la mettre en place ?</strong> Distribuez l'enquête une à deux fois par an. L'important est de communiquer sur les résultats et, surtout, de montrer que des actions concrètes sont mises en place suite aux retours. C'est la clé pour que le processus soit pris au sérieux.</p>`,
        tools: [
          {
            name: "Formulaire d'Enquête Interactif",
            type: "link",
            url: "https://codepen.io/reunir/live/zxvwWRq/e82ac9a4914b35248b60bac910381364",
          },
        ],
      },
      {
        title:
          "5.6 ⸺ Communication et Dialogue : Animer la Vie de l'Entreprise",
        content: `Pour que la culture "familiale" soit vivante, elle doit être nourrie par une communication régulière et des rituels de dialogue structurés, en s'assurant d'inclure tous les collaborateurs, qu'ils soient sur la route, à l'atelier ou au bureau.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Adoptez une Stratégie Multi-Canaux :</h4>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                  <div class="idea-card p-4 rounded-lg flex flex-col text-center items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                      <h5 class="font-bold text-md mt-3" style="color: var(--c-primary);">Instantané</h5>
                      <p class="text-sm mt-2 flex-grow">Créez des <strong>canaux ou groupes WhatsApp</strong> pour les infos importantes et/ou urgentes. Pour les salariés qui utilisent leur téléphone personnel, l'application gratuite <strong>WhatsApp Business</strong> permet de dissocier numéro pro et perso sur un seul appareil.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg flex flex-col text-center items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div>
                      <h5 class="font-bold text-md mt-3" style="color: var(--c-primary);">Culture</h5>
                      <p class="text-sm mt-2 flex-grow">Privilégiez une <strong>newsletter interne</strong>, un <strong>affichage en salle de pause</strong> pour partager les succès, les anniversaires et les informations de fond qui soudent les équipes.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg flex flex-col text-center items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                      <h5 class="font-bold text-md mt-3" style="color: var(--c-primary);">Rencontres</h5>
                      <p class="text-sm mt-2 flex-grow">Rien ne remplace le contact humain. Instaurez un <strong>"Point d'Équipe"</strong> régulier et organisez des <strong>événements conviviaux</strong> pour renforcer les liens.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg flex flex-col text-center items-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>
                      <h5 class="font-bold text-md mt-3" style="color: var(--c-primary);">Écoute</h5>
                      <p class="text-sm mt-2 flex-grow">Montrez que l'avis de chacun compte avec une <strong>"boîte à idées"</strong> physique ou numérique et des <strong>sondages internes</strong> réguliers pour prendre le pouls des équipes.</p>
                  </div>
              </div>`,
        tools: [
          { name: "Outil : Modèle de Sondage", id: "outil_sondage" },
          { name: "Outil : Modèle de Newsletter", id: "outil_newsletter" },
        ],
      },
      {
        title: "5.7 ⸺ Développer le Sentiment d'Appartenance",
        content: `Le sentiment d'appartenance est le lien affectif qui unit un salarié à son entreprise. Il se nourrit d'actions concrètes qui renforcent la fierté et le sentiment de faire partie d'un collectif.
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                                <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>
                                <div><h4 class="font-bold text-md">Sollicitez vos Ambassadeurs</h4><p class="text-sm">Impliquez vos collaborateurs les plus engagés dans la vie de l'entreprise : accueil des nouveaux, témoignages, etc.</p></div>
                            </div>
                            <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                                <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
                                <div><h4 class="font-bold text-md">Encouragez la Co-construction</h4><p class="text-sm">Impliquez les équipes dans des projets d'amélioration (ex: aménagement de la salle de pause, choix d'un nouvel équipement).</p></div>
                            </div>
                            <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                                <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6-14a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zM6 8a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4z"></path></svg></div>
                                <div><h4 class="font-bold text-md">Créez des Rituels de Convivialité</h4><p class="text-sm">Organisez des événements internes réguliers (petits-déjeuners, barbecues, repas de fin d'année) pour renforcer les liens.</p></div>
                            </div>
                            <div class="idea-card p-4 rounded-lg flex items-center space-x-4">
                                <div class="flex-shrink-0"><svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></div>
                                <div><h4 class="font-bold text-md">Utilisez des Équipements Identitaires</h4><p class="text-sm">Proposez des goodies et équipements aux couleurs de l'entreprise (via La Boutique by Réunir) pour renforcer la visibilité et la fierté.</p></div>
                            </div>
                        </div>`,
      },
      {
        title: "5.8 ⸺ Créer un Programme d'Ambassadeurs",
        content: `Vos collaborateurs les plus engagés et passionnés sont vos meilleurs porte-paroles. Un programme d'ambassadeurs est une démarche structurée qui vise à reconnaître, valoriser et outiller ces salariés pour qu'ils contribuent activement à la promotion de votre marque employeur.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Comment Lancer votre Programme :</h4>
              <div class="space-y-4">

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">1. Identifier vos Ambassadeurs Potentiels</h5>
                              <p class="text-sm mt-1">Repérez les collaborateurs qui sont naturellement positifs, qui parlent avec fierté de leur métier, qui sont de bons communicants et qui incarnent les valeurs de votre entreprise. Le volontariat est la clé.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">2. Définir leurs Missions</h5>
                              <p class="text-sm mt-1">Le rôle d'ambassadeur peut prendre plusieurs formes : participer à des salons de l'emploi, témoigner dans des vidéos métiers, prendre part à la dernière phase d'un entretien pour donner une vision "terrain", ou encore parrainer les nouveaux arrivants.</p>
                          </div>
                      </div>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-start">
                          <div class="flex-shrink-0 bg-red-100 p-3 rounded-full">
                              <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                          </div>
                          <div class="ml-4">
                              <h5 class="font-bold text-md" style="color: var(--c-primary);">3. Valoriser leur Engagement</h5>
                              <p class="text-sm mt-1">Être ambassadeur n'est pas un dû. Cet engagement doit être reconnu. Cela peut passer par une prime symbolique, une mise en avant dans la communication interne, un accès prioritaire à certaines formations ou simplement un déjeuner trimestriel avec la direction pour échanger.</p>
                          </div>
                      </div>
                  </div>
              </div>`,
        tools: [
          {
            name: "Outil : Fiche de Mission Ambassadeur",
            id: "outil_ambassadeur_fiche",
          },
        ],
      },
      {
        title: "5.9 ⸺ Mettre en Place une Démarche QVCT",
        content: `La Qualité de Vie et des Conditions de Travail (QVCT) n'est pas un concept abstrait, mais une démarche concrète qui vise à améliorer le travail au quotidien pour renforcer à la fois le bien-être des salariés et la performance de l'entreprise. Pour une PME du TRV, c'est un levier majeur de fidélisation.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Piliers d'une Démarche QVCT Réussie :</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">L'Équilibre des Temps</h5>
                      </div>
                      <p class="text-sm mt-2">C'est un enjeu central pour le personnel roulant. Une bonne démarche QVCT s'attaque à la prévisibilité des plannings, à la gestion des temps de coupure et cherche des solutions pour améliorer l'équilibre entre vie professionnelle et vie personnelle.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 9.3l.165.165a2.5 2.5 0 01-3.536 3.536L6.5 11.5M16.3 9.3l-.165.165a2.5 2.5 0 003.536 3.536L17.5 11.5"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">L'Environnement de Travail</h5>
                      </div>
                      <p class="text-sm mt-2">Cela concerne aussi bien le confort et la propreté des véhicules que l'ergonomie des postes à l'atelier ou la qualité des espaces de pause. Un environnement de travail sain et sécurisé est une marque de respect fondamentale.</p>
                  </div>

                   <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Les Relations au Travail</h5>
                      </div>
                      <p class="text-sm mt-2">La qualité du management de proximité, la prévention des conflits, la promotion de l'entraide et la clarté de la communication interne sont au cœur de la QVCT. C'est le pilier de la "culture familiale" que vous valorisez.</p>
                  </div>

                   <div class="idea-card p-4 rounded-lg">
                      <div class="flex items-center">
                           <svg class="w-8 h-8 mr-3" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                          <h5 class="font-bold text-md" style="color: var(--c-primary);">Le Sens et le Développement</h5>
                      </div>
                      <p class="text-sm mt-2">Permettre aux salariés de se former, de voir des perspectives d'évolution claires et de comprendre leur contribution à la mission de l'entreprise (lien social, mobilité durable...) est un puissant moteur de bien-être et d'engagement.</p>
                  </div>
              </div>`,
      },

      {
        title: "5.10 ⸺ La Gamification : Booster l'Engagement par le Jeu",
        content: `La gamification consiste à utiliser des mécanismes de jeu (points, défis, badges, classements...) dans un contexte professionnel pour rendre des tâches plus engageantes et motiver les équipes. C'est un levier formidable pour ancrer les bonnes pratiques de manière ludique.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Bénéfices d'une Approche Ludique :</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Motivation Accrue</h4>
                      <p class="text-sm">Un défi ou un challenge transforme une tâche quotidienne en un objectif stimulant.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                           <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                       </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Ancrage des Compétences</h4>
                      <p class="text-sm">On retient mieux en s'amusant. Un quiz sécurité a plus d'impact qu'une simple note de service.</p>
                  </div>

                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                       </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Cohésion d'Équipe</h4>
                      <p class="text-sm">Un challenge collectif ou un "escape game" sur les règles de sécurité sont d'excellents outils de team-building.</p>
                  </div>

              </div>`,
        tools: [
          {
            name: "Outil : La Boîte à Idées de la Gamification",
            id: "outil_gamification_ideas",
          },
        ],
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Engager et Fidéliser",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Management de Proximité</h4>
                                    <p class="text-sm">Être à l'écoute, respecter l'équilibre de vie et faire preuve de souplesse pour renforcer l'engagement de vos équipes.</p>
                                </div>
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Valoriser l'Image</h4>
                                    <p class="text-sm">Des exigences claires sur la qualité de service et la tenue vestimentaire renforcent le professionnalisme et la fierté d'appartenance.</p>
                                </div>
                               
                                <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                                    <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg></div>
                                    <h4 class="font-bold text-md mb-1 mt-3">Comité d'Écoute</h4>
                                    <p class="text-sm">Mettre en place un comité d'échange régulier avec les salariés pour améliorer continuellement l'environnement de travail.</p>
                                </div>
                            </div>`,
      },
    ],
  },
  depart: {
    shortTitle: "Finaliser",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path></svg>`,
    title: "Gérer le Départ : Transformer une Fin en Opportunité Stratégique",
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre VI : Gérer le Départ</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="w-10 h-10" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                </div>
                <div class="ml-4">
                     <p class="text-xl italic" style="color: var(--c-secondary);">« La dernière impression est celle qui reste. Un départ bien géré transforme un ancien salarié en un futur ambassadeur. »</p>
                </div>
            </div>
        </div>
        Un départ, qu'il soit subi ou choisi, est un moment clé. Loin d'être une simple formalité, un 'offboarding' bien mené protège votre marque employeur, sécurise vos savoir-faire et peut même devenir une source d'opportunités.<br><br>`,
    practices: [
      {
        title: "6.1 ⸺ Les Trois Piliers d'un Offboarding Réussi",
        content: `Un départ maîtrisé repose sur trois piliers fondamentaux. Négliger l'un d'eux, c'est risquer de perdre des compétences clés, de créer un sentiment d'injustice ou de manquer une opportunité d'amélioration cruciale.
              <br><br>
              <div class="mt-6 flex flex-col md:flex-row justify-between text-center gap-4">

                  <div class="flex-1 p-4">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                          <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>
                      </div>
                      <h4 class="font-bold text-lg mt-3" style="color: var(--c-primary);">Pilier 1 : La Passation</h4>
                      <p class="text-sm mt-1">Sécuriser le savoir-faire de l'entreprise en organisant un transfert de connaissances efficace, qu'il s'agisse des procédures écrites ou des astuces "terrain".</p>
                  </div>

                  <div class="hidden md:block border-l-2 border-dashed" style="border-color: var(--c-light);"></div>

                  <div class="flex-1 p-4">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                          <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75a17.933 17.933 0 01-7.499-1.632z"></path></svg>
                      </div>
                      <h4 class="font-bold text-lg mt-3" style="color: var(--c-primary);">Pilier 2 : La Clôture</h4>
                      <p class="text-sm mt-1">Garantir une séparation administrative propre et une clôture humaine respectueuse, en terminant la relation sur une note positive et professionnelle.</p>
                  </div>
                  
                  <div class="hidden md:block border-l-2 border-dashed" style="border-color: var(--c-light);"></div>
                  
                  <div class="flex-1 p-4">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                           <svg class="w-10 h-10" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"></path></svg>
                      </div>
                       <h4 class="font-bold text-lg mt-3" style="color: var(--c-primary);">Pilier 3 : L'Écoute</h4>
                       <p class="text-sm mt-1">Transformer le départ en opportunité d'amélioration en menant un entretien de départ constructif pour recueillir un feedback honnête et précieux.</p>
                  </div>
              </div>`,
        tools: [
          {
            name: "Outil : Modèle de Plan de Passation",
            id: "outil_plan_passation",
          },
          {
            name: "Outil : Checklist de Départ Interactive",
            type: "link",
            url: "https://codepen.io/reunir/live/NPGgrME/b200720aa30241c6bd288ab1516c70b1",
          },
          {
            name: "Outil : Trame d'Entretien de Départ",
            id: "outil_entretien_depart",
          },
        ],
      },
      {
        title:
          "6.2 ⸺ Maintenir le Lien : Créer et Animer un Réseau d'Anciens (Alumni)",
        content: `Transformer un collaborateur partant en ambassadeur est une stratégie de long terme. Loin d'être une perte nette, un départ bien géré peut devenir une source d'opportunités. Pour une PME, la création d'un réseau d'anciens est une démarche simple, peu coûteuse, et à fort retour sur investissement.
              <br><br>
              <h4 class="font-bold text-lg mt-4 mb-4" style="color: var(--c-primary);">Les Bénéfices Concrets pour votre PME :</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">Le "Salarié Boomerang"</h4>
                      <p class="text-sm">Faire revenir un ancien talent qui connaît déjà votre culture est le recrutement le plus sûr et le plus rapide qui soit.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                           <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                       </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Cooptation Étendue</h4>
                      <p class="text-sm">Vos anciens collaborateurs sont d'excellents prescripteurs qui peuvent vous recommander des talents de leur nouveau réseau.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                           <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                       </div>
                      <h4 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Protection de votre Image</h4>
                      <p class="text-sm">Un salarié qui quitte l'entreprise en bons termes est votre meilleur ambassadeur. Il parlera positivement de son expérience.</p>
                  </div>
              </div>`,
        tools: [
          {
            name: "Outil : Kit de Lancement du Réseau d'Anciens",
            id: "outil_alumni_kit",
          },
        ],
      },
      {
        title: "💡 Les Bonnes Idées de Nos Adhérents pour Gérer un Départ",
        content: `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                        <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg></div>
                            <h4 class="font-bold text-md mb-1 mt-3">Annoncer le départ avec tact</h4>
                            <p class="text-sm">Communiquer la nouvelle à l'équipe de manière factuelle et respectueuse, en précisant les modalités de la transition pour rassurer tout le monde.</p>
                        </div>
                        <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM12 1.5c-4.965 0-9 4.035-9 9s4.035 9 9 9 9-4.035 9-9-4.035-9-9-9zM12 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" /></svg></div>
                            <h4 class="font-bold text-md mb-1 mt-3">Organiser un "Pot de Transmission"</h4>
                            <p class="text-sm">Pour les départs à la retraite, organiser un moment convivial où le partant peut partager quelques anecdotes et "secrets" de son métier aux plus jeunes.</p>
                        </div>
                        <div class="idea-card p-4 rounded-lg flex flex-col items-center text-center">
                            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-9.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 6h-9.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 18h-9.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 21v-3.375" /><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 6.375V3" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 3.375V21" /></svg></div>
                            <h4 class="font-bold text-md mb-1 mt-3">Formaliser la passation</h4>
                            <p class="text-sm">Utiliser une simple fiche de passation pour lister les tâches, contacts et informations importantes. Cela facilite la vie du remplaçant et de toute l'équipe.</p>
                        </div>
                    </div>`,
      },
    ],
  },
  piloter: {
    shortTitle: "Tech + IA",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 01-9-9h18a9 9 0 01-9 9zm0-18a9 9 0 00-9 9h18a9 9 0 00-9-9z"></path></svg>`,
    title: "Piloter avec les Outils : La Technologie au Service de l'Humain",
    intro: `
        <div class="flex items-center mb-6">
            <div class="flex-shrink-0 bg-red-100 p-3 rounded-full"><svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 01-9-9h18a9 9 0 01-9 9zm0-18a9 9 0 00-9 9h18a9 9 0 00-9-9z"></path></svg></div>
            <h3 class="text-xl font-bold ml-4" style="color: var(--c-primary);">Chapitre VII : Technologie + Intelligence Artificielle, vos Alliés RH</h3>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 border-t-4 mb-6" style="border-color: var(--c-accent);">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="w-10 h-10" style="color: var(--c-accent);" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
                </div>
                <div class="ml-4">
                     <p class="text-xl italic" style="color: var(--c-secondary);">« L'IA ne remplace pas l'humain, elle l'augmente. Bien utilisée, elle libère du temps pour ce qui compte vraiment : la relation. »</p>
                </div>
            </div>
        </div>
        La technologie, loin d'être un facteur de déshumanisation, peut devenir le meilleur allié des PME pour automatiser les tâches à faible valeur ajoutée et se concentrer sur l'essentiel. Voici une sélection d'outils, organisés par besoin.<br><br>`,
    practices: [
      {
        title: "Analyser le Marché & la Concurrence",
        content: `
                      <div class="flex items-center space-x-2 border-b pb-3 mb-3">
                          <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://brandlogo.org/wp-content/uploads/2024/09/Perplexity-AI-App-Icon-2023.png.webp" alt="Logo Perplexity" class="h-6 w-6 object-contain rounded-sm"></a>
                          <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://static.vecteezy.com/system/resources/previews/056/850/690/non_2x/gemini-ai-app-icon-with-transparent-background-free-png.png" alt="Logo Gemini" class="h-6 w-6 object-contain rounded-sm"></a>
                          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png" alt="Logo LinkedIn" class="h-6 w-6 object-contain rounded-sm"></a>
                      </div>
                      Utilisez l'IA pour obtenir des informations précieuses sur les tendances de recrutement, les salaires et les compétences en demande dans votre secteur et votre région.
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Perplexity AI & Gemini</h5>
                              <p class="text-sm">Ces moteurs de recherche dopés à l'IA vous permettent de poser des questions complexes et d'obtenir des réponses synthétiques et sourcées. <br><strong>Exemple de prompt :</strong> <em>"Quelles sont les attentes des conducteurs de car en 2025 en termes d'avantages sociaux en France ?"</em></p>
                          </div>
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">LinkedIn Talent Insights</h5>
                              <p class="text-sm">Cet outil (payant) vous donne accès à des données en temps réel sur le marché des talents : d'où viennent les candidats, quelles entreprises recrutent les mêmes profils que vous...</p>
                          </div>
                      </div>`,
      },
      {
        title: "Attirer : Rédiger des Offres et Créer des Visuels",
        content: `
                      <div class="flex items-center space-x-2 border-b pb-3 mb-3">
                          <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://i.postimg.cc/0QxZghJw/Chat-GPT-Icon-PNG.png" alt="Logo ChatGPT" class="h-6 w-6 object-contain rounded-sm"></a>
                          <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://images.squarespace-cdn.com/content/v1/6372ab786c0882214db6e07c/6126b949-2e83-47f9-b5de-06306b267fc7/Copilot+for+Word+Colorful.png" alt="Logo Copilot" class="h-6 w-6 object-contain rounded-sm"></a>
                          <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://static-cse.canva.com/blob/1148850/image2.png" alt="Logo Canva" class="h-6 w-6 object-contain rounded-sm"></a>
                          <a href="https://www.adobe.com/express/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Adobe_Express_logo_RGB_1024px.png" alt="Logo Adobe Express" class="h-6 w-6 object-contain rounded-sm"></a>
                      </div>
                      L'IA et les outils de design peuvent vous faire gagner un temps précieux pour créer des communications percutantes.
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">IA Génératives (ChatGPT, Gemini, Copilot)</h5>
                              <p class="text-sm">Utilisez-les pour générer une première version de vos offres d'emploi, de vos posts pour les réseaux sociaux ou de vos newsletters internes. Fournissez-leur un maximum de contexte pour un résultat de qualité.</p>
                          </div>
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Outils de Design (Canva, Adobe Express)</h5>
                              <p class="text-sm">Ces plateformes (avec des versions gratuites très complètes) vous permettent de créer très facilement des visuels professionnels pour vos offres d'emploi, vos flyers ou vos posts sur les réseaux sociaux.</p>
                          </div>
                      </div>`,
      },
      {
        title: "Sélectionner & Gérer les Candidatures",
        content: `
                      <div class="flex items-center space-x-2 border-b pb-3 mb-3">
                         <a href="https://join.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://cdn-1.webcatalog.io/catalog/join-com/join-com-icon-filled-256.png" alt="Logo Join.com" class="h-6 w-6 object-contain rounded-sm"></a>
                         <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://i.postimg.cc/0QxZghJw/Chat-GPT-Icon-PNG.png" alt="Logo ChatGPT" class="h-6 w-6 object-contain rounded-sm"></a>
                         <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://static.vecteezy.com/system/resources/previews/056/850/690/non_2x/gemini-ai-app-icon-with-transparent-background-free-png.png" alt="Logo Gemini" class="h-6 w-6 object-contain rounded-sm"></a>
                      </div>
                      Optimisez votre processus de recrutement pour être plus rapide et plus efficace.
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">ATS Simplifiés (ex: join.com)</h5>
                              <p class="text-sm">Un "Applicant Tracking System" vous permet de centraliser toutes vos candidatures, de communiquer facilement avec les candidats et de suivre l'avancement de chaque recrutement.</p>
                          </div>
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">IA pour la Synthèse</h5>
                              <p class="text-sm">Utilisez les IA génératives pour synthétiser de longs CV ou pour transcrire et résumer vos notes d'entretien, vous aidant ainsi à comparer les candidats plus objectivement.</p>
                          </div>
                      </div>`,
      },
      {
        title: "Gérer les Plannings et le Turnover",
        content: `
                      <div class="flex items-center space-x-2 border-b pb-3 mb-3">
                          <a href="https://clockify.me/" target="_blank" rel="noopener noreferrer" class="p-1 bg-white rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow"><img src="https://lvit.de/wp-content/uploads/2024/04/Clockify.png" alt="Logo Clockify" class="h-6 w-6 object-contain rounded-sm"></a>
                      </div>
                      Des outils spécialisés peuvent vous aider à optimiser la gestion du temps et à anticiper les départs.
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Gestion des Temps (Clockify, Weentime)</h5>
                              <p class="text-sm">Des outils comme Clockify (gratuit) ou Weentime (payant, plus avancé) simplifient le suivi des heures et la gestion des plannings, un enjeu clé dans le TRV.</p>
                          </div>
                          <div class="idea-card p-4 rounded-lg">
                              <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Prédiction du Turnover (T.O.P. Turnover)</h5>
                              <p class="text-sm">Des outils plus avancés (payants) utilisent l'IA pour analyser vos données RH et prédire les risques de départ, vous permettant de mettre en place des actions de fidélisation ciblées.</p>
                          </div>
                      </div>`,
      },
      {
        title: "Explorez nos Outils Interactifs Prêts à l'Emploi",
        content: `Pour vous faire gagner encore plus de temps, nous avons développé des outils interactifs externes qui synthétisent et mettent en pratique les concepts de ce guide.
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div class="idea-card p-4 rounded-lg flex flex-col">
                      <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">La Boîte à Outils Tech</h5>
                      <p class="text-sm flex-grow">Un site web complet qui recense, par besoin, les meilleurs outils numériques (IA ou non) pour optimiser toutes vos tâches RH au quotidien, avec des mini-guides pratiques pour chacun.</p>
                      <div class="mt-4">
                          <a href="https://codepen.io/reunir/live/myemxxx/fe8fa4c10e79f8f21d276dfdbc324b04" target="_blank" rel="noopener noreferrer" class="tool-button">Accéder à la Boîte à Outils</a>
                      </div>
                  </div>
                  <div class="idea-card p-4 rounded-lg flex flex-col">
                      <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Le Générateur de Prompts IA</h5>
                      <p class="text-sm flex-grow">Un outil simple et puissant qui vous aide à créer la requête (le "prompt") parfaite à fournir à une IA pour obtenir exactement le résultat que vous souhaitez, sans effort.</p>
                      <div class="mt-4">
                         <a href="https://codepen.io/reunir/live/WbQjzzm/fef36892cd80125aa770b5e0a0133806" target="_blank" rel="noopener noreferrer" class="tool-button">Accéder au Générateur</a>
                      </div>
                  </div>
              </div>`,
      },
    ],
  },
  ressources: {
    isToolbox: true, // Un indicateur pour notre logique d'affichage
    title: "Ressources et Outils du Guide",
    intro: `
        <p class="text-lg">Retrouvez ici l'ensemble des outils pratiques du guide, regroupés au même endroit pour un accès rapide, ainsi qu'un lexique pour vous aider à maîtriser les termes clés des ressources humaines.</p>
    `,
  },
};

export const modalData = {
  outil_annonce: {
    title: "Outil : Générateur d'Annonce de Recrutement",
    content: `
        <div class="prose max-w-none">
            <p class="text-sm">Remplissez les champs ci-dessous pour personnaliser votre offre d'emploi. L'aperçu se mettra à jour en temps réel. Une fois terminée, vous pourrez la télécharger au format PDF ou Word.</p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                <div class="space-y-4">
                    <div>
                        <label for="annonceLogo" class="block text-sm font-bold mb-1">URL du logo de votre entreprise</label>
                        <input type="text" id="annonceLogo" placeholder="https://..." class="w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="annonceTitre" class="block text-sm font-bold mb-1">Intitulé du poste</label>
                        <input type="text" id="annonceTitre" value="Conducteur/trice de car scolaire (H/F)" class="w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="annonceContrat" class="block text-sm font-bold mb-1">Type de contrat et lieu</label>
                        <input type="text" id="annonceContrat" value="CDI Temps Partiel - [Votre Ville]" class="w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="annonceEntreprise" class="block text-sm font-bold mb-1">Présentation de l'entreprise</label>
                        <textarea id="annonceEntreprise" rows="4" class="w-full p-2 border rounded-md">Entreprise familiale depuis [Année], les Transports [Votre Nom] sont fiers de connecter les habitants de notre région en toute sécurité et convivialité.</textarea>
                    </div>
                    <div>
                        <label for="annonceMissions" class="block text-sm font-bold mb-1">Missions principales (un point par ligne)</label>
                        <textarea id="annonceMissions" rows="4" class="w-full p-2 border rounded-md">Assurer les services scolaires sur la commune de [Nom de la commune].
Accueillir les enfants et garantir leur sécurité.
Veiller à la propreté et au bon état de votre véhicule.</textarea>
                    </div>
                    <div>
                        <label for="annonceAvantages" class="block text-sm font-bold mb-1">Avantages proposés (un point par ligne)</label>
                        <textarea id="annonceAvantages" rows="4" class="w-full p-2 border rounded-md">Un contrat stable : CDI à temps partiel (env. 20h/semaine).
Des horaires fixes en période scolaire.
Mutuelle performante et 13ème mois.</textarea>
                    </div>
                    <div>
                        <label for="annonceProfil" class="block text-sm font-bold mb-1">Profil recherché (un point par ligne)</label>
                        <textarea id="annonceProfil" rows="4" class="w-full p-2 border rounded-md">Vous êtes titulaire du Permis D, FIMO/FCO Voyageurs et carte conducteur.
Nous cherchons un sens des responsabilités, de la ponctualité et un excellent relationnel.</textarea>
                    </div>
                </div>

                <div id="annonce-preview-container" class="bg-gray-50 p-6 rounded-lg border">
                    <div id="annonce-content-to-export">
                        <div class="text-center pb-4">
                            <img id="previewLogo" src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de l'entreprise" class="mx-auto h-12 mb-4 object-contain" crossorigin="anonymous" />
                            <h3 id="previewTitre" class="text-xl font-bold" style="color: var(--c-primary);">Conducteur/trice de car scolaire (H/F)</h3>
                            <p id="previewContrat" class="text-md" style="color: var(--c-secondary);">CDI Temps Partiel - [Votre Ville]</p>
                        </div>
                        <div class="mt-6">
                            <h4 class="font-bold" style="color: var(--c-primary);">Qui sommes-nous ?</h4>
                            <p id="previewEntreprise" class="text-sm">Entreprise familiale depuis [Année], les Transports [Votre Nom] sont fiers de connecter les habitants de notre région en toute sécurité et convivialité.</p>
                        </div>
                        <div class="mt-4">
                            <h4 class="font-bold" style="color: var(--c-primary);">Votre future mission :</h4>
                            <ul id="previewMissions" class="list-disc pl-5 mt-2 text-sm space-y-1"><li>Assurer les services scolaires sur la commune de [Nom de la commune].</li><li>Accueillir les enfants et garantir leur sécurité.</li><li>Veiller à la propreté et au bon état de votre véhicule.</li></ul>
                        </div>
                        <div class="mt-4">
                            <h4 class="font-bold" style="color: var(--c-primary);">Ce que nous vous proposons :</h4>
                            <ul id="previewAvantages" class="list-disc pl-5 mt-2 text-sm space-y-1"><li>Un contrat stable : CDI à temps partiel (env. 20h/semaine).</li><li>Des horaires fixes en période scolaire.</li><li>Mutuelle performante et 13ème mois.</li></ul>
                        </div>
                        <div class="mt-4">
                            <h4 class="font-bold" style="color: var(--c-primary);">Votre profil :</h4>
                            <ul id="previewProfil" class="list-disc pl-5 mt-2 text-sm space-y-1"><li>Vous êtes titulaire du Permis D, FIMO/FCO Voyageurs et carte conducteur.</li><li>Nous cherchons un sens des responsabilités, de la ponctualité et un excellent relationnel.</li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
  },
  outil_enquete_fidelisation: {
    title: "Outil : Trame d'Enquête de Fidélisation Anonyme",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Votre Avis Compte !</h3>
                    <p class="text-sm mt-2">Ce questionnaire est <strong>100% anonyme</strong>. Vos réponses sincères sont essentielles pour nous aider à améliorer notre environnement de travail. Merci pour votre contribution !</p>
                </div>
                
                <div class="mt-6 space-y-4">
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">1. Votre Motivation au Quotidien</h4>
                        <p class="text-xs italic text-gray-500">Qu'est-ce qui vous donne envie de venir travailler chez nous chaque matin ?</p>
                        <div class="w-full h-20 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">2. Ce qui Pourrait être Mieux</h4>
                        <p class="text-xs italic text-gray-500">Si vous aviez une baguette magique, quelle est LA chose que vous changeriez dans votre travail ou dans l'entreprise ?</p>
                        <div class="w-full h-20 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">3. Votre Développement Professionnel</h4>
                        <p class="text-xs italic text-gray-500">Vous sentez-vous soutenu(e) dans votre montée en compétences ? Avez-vous une vision claire de votre avenir possible dans l'entreprise ?</p>
                        <div class="w-full h-20 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">4. La Reconnaissance de votre Travail</h4>
                        <p class="text-xs italic text-gray-500">Vous sentez-vous suffisamment reconnu(e) pour le travail que vous accomplissez ?</p>
                        <div class="w-full h-20 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">5. La Recommandation</h4>
                        <p class="text-xs italic text-gray-500">Recommanderiez-vous notre entreprise comme un bon endroit où travailler à un(e) ami(e) ou un membre de votre famille ? Pourquoi ?</p>
                        <div class="w-full h-20 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                </div>
            </div>`,
  },

  outil_checklist_pdf: {
    title: "Outil : Checklist d'Intégration (PDF)",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Checklist d'Intégration - Conducteur/trice</h3>
                    <p class="text-sm mt-2"><strong>Nouveau Collaborateur :</strong> _________________________ <br><strong>Date d'arrivée :</strong> __________ &nbsp;&nbsp; | &nbsp;&nbsp; <strong>Tuteur/Manager :</strong> _________________________</p>
                </div>
                
                <div class="mt-6">
                    <h4 class="font-bold" style="color: var(--c-primary);">✅ Phase 1 : Avant l'arrivée (J-7 à J-1)</h4>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li><strong>Administratif :</strong> Contrat de travail envoyé et DPAE effectuée.</li>
                        <li><strong>Matériel :</strong> Véhicule assigné et vérifié, uniforme et badge préparés.</li>
                        <li><strong>Communication :</strong> Email de bienvenue envoyé, équipe informée de l'arrivée.</li>
                        <li><strong>Organisation :</strong> Tuteur désigné, planning de la première semaine établi.</li>
                    </ul>
                </div>

                <div class="mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">✅ Phase 2 : Le Jour J</h4>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li>Accueil personnalisé et café de bienvenue.</li>
                        <li>Visite des locaux (salle de pause, atelier, bureaux...).</li>
                        <li>Présentation à l'équipe et au tuteur.</li>
                        <li>Remise du kit de bienvenue (livret, planning, contacts utiles).</li>
                        <li>Déjeuner organisé avec l'équipe ou le tuteur.</li>
                        <li>Signature des derniers documents administratifs.</li>
                    </ul>
                </div>

                <div class="mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">✅ Phase 3 : La Première Semaine</h4>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li>Tournées effectuées en double avec le tuteur.</li>
                        <li>Prise en main du véhicule et de ses spécificités.</li>
                        <li>Point sur les procédures clés (sécurité, gestion des pannes...).</li>
                        <li>Point de 30 min avec le manager en fin de semaine pour un premier retour.</li>
                    </ul>
                </div>

                <div class="mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">✅ Phase 4 & 5 : Premier Mois & Fin de Période d'Essai</h4>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li>Point de suivi formel à la fin du premier mois.</li>
                        <li>Présentation et explication du rapport d'étonnement.</li>
                        <li>Entretien de fin de période d'essai planifié.</li>
                        <li>Premiers objectifs de développement fixés.</li>
                    </ul>
                </div>
            </div>`,
  },
  outil_grille_entretien: {
    title: "Outil : Grille d'Entretien Structuré et Inclusif",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Grille d'Évaluation - Poste de Conducteur/trice</h3>
                    <p class="text-sm mt-2"><strong>Candidat :</strong> _________________________ <br><strong>Date :</strong> __________ &nbsp;&nbsp; | &nbsp;&nbsp; <strong>Évaluateur :</strong> _________________________</p>
                </div>
                
                <div class="mt-6">
                    <p class="text-xs italic"><strong>Instructions :</strong> Évaluez chaque critère de 1 (Insuffisant) à 5 (Excellent). Appuyez-vous sur des exemples concrets et la méthode STAR pour justifier votre évaluation.</p>
                </div>

                <div class="overflow-x-auto mt-4">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="border p-2 w-1/4">Critère</th>
                                <th class="border p-2 w-1/2">Questions Suggérées</th>
                                <th class="border p-2 text-center">Éval. (1-5)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border p-2"><strong>Motivation & Adéquation</strong></td>
                                <td class="border p-2 text-sm">Pourquoi avez-vous postulé chez nous ?<br>Qu'est-ce qui vous attire dans ce métier ?<br>Ce type d'horaires est-il compatible avec votre vie personnelle ?</td>
                                <td class="border p-2 text-center text-2xl font-bold"></td>
                            </tr>
                            <tr>
                                <td class="border p-2" colspan="3"><strong>Commentaires & Exemples :</strong><div class="w-full h-16 border bg-white mt-1"></div></td>
                            </tr>

                             <tr>
                                <td class="border p-2"><strong>Rigueur & Sécurité</strong></td>
                                <td class="border p-2 text-sm">Racontez-moi une situation où vous avez dû appliquer une consigne de sécurité à la lettre.<br>Comment vous assurez-vous que votre véhicule est en parfait état avant de partir ?</td>
                                <td class="border p-2 text-center text-2xl font-bold"></td>
                            </tr>
                            <tr>
                                <td class="border p-2" colspan="3"><strong>Commentaires & Exemples :</strong><div class="w-full h-16 border bg-white mt-1"></div></td>
                            </tr>

                            <tr>
                                <td class="border p-2"><strong>Gestion des Imprévus & Stress</strong></td>
                                <td class="border p-2 text-sm">Décrivez une situation stressante (panne, retard, accident) et comment vous l'avez gérée.<br>Comment réagissez-vous face à un passager mécontent ou agressif ?</td>
                                <td class="border p-2 text-center text-2xl font-bold"></td>
                            </tr>
                             <tr>
                                <td class="border p-2" colspan="3"><strong>Commentaires & Exemples :</strong><div class="w-full h-16 border bg-white mt-1"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-6 p-4 rounded-lg bg-white border">
                     <h4 class="font-bold" style="color: var(--c-primary);">Synthèse & Décision</h4>
                     <p class="font-semibold text-sm mt-2">Points Forts :</p>
                     <div class="w-full h-12 border bg-gray-50"></div>
                     <p class="font-semibold text-sm mt-2">Points de Vigilance :</p>
                     <div class="w-full h-12 border bg-gray-50"></div>
                     <p class="font-semibold text-sm mt-2">Décision : <span class="font-normal">□ Poursuivre &nbsp;&nbsp; □ Ne pas poursuivre</span></p>
                </div>
            </div>`,
  },
  outil_alternance_fiche_repere: {
    title: "Outil : Fiche Repère sur l'Alternance",
    content: `<div class="prose max-w-none">
                <p>Cette fiche synthétise les informations essentielles pour vous aider à choisir le bon contrat et à comprendre les avantages de l'alternance pour votre PME.</p>

                <h4 class="font-bold mt-6 mb-4" style="color: var(--c-primary);">Quel contrat choisir ?</h4>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border p-2">Critère</th>
                                <th class="border p-2">Contrat d'Apprentissage</th>
                                <th class="border p-2">Contrat de Professionnalisation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border p-2"><strong>Objectif</strong></td>
                                <td class="border p-2">Formation initiale - Obtenir un diplôme d'État (CAP, Bac Pro, BTS...).</td>
                                <td class="border p-2">Formation continue - Obtenir une qualification professionnelle reconnue (CQP, Titre Pro).</td>
                            </tr>
                            <tr>
                                <td class="border p-2"><strong>Public visé</strong></td>
                                <td class="border p-2">Jeunes de 16 à 29 ans révolus.</td>
                                <td class="border p-2">Jeunes de 16 à 25 ans, demandeurs d'emploi de 26 ans et plus.</td>
                            </tr>
                             <tr>
                                <td class="border p-2"><strong>Rémunération</strong></td>
                                <td class="border p-2">Varie selon l'âge et l'année de formation (% du SMIC).</td>
                                <td class="border p-2">Varie selon l'âge et le niveau de qualification (% du SMIC, ne peut être inférieur à 55%).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 class="font-bold mt-6 mb-4" style="color: var(--c-primary);">Les Aides Financières Clés pour 2025</h4>
                 <ul class="list-disc pl-5 mt-2 text-sm space-y-2">
                    <li><strong>Aide Exceptionnelle :</strong> Une aide de <strong>6 000 €</strong> pour la première année de contrat, que ce soit en apprentissage ou en professionnalisation, pour les alternants de tout âge.</li>
                    <li><strong>Exonérations de cotisations :</strong> Réduction générale des cotisations patronales.</li>
                    <li><strong>Prise en charge par l'OPCO Mobilités :</strong> Votre OPCO finance la quasi-totalité des frais de formation de l'alternant.</li>
                </ul>

                <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 mt-6">
                    <h4 class="font-bold">Le Réflexe à Avoir</h4>
                    <p class="text-sm">Votre interlocuteur unique pour monter un dossier d'alternance est votre conseiller <strong>OPCO Mobilités</strong>. Il vous guidera sur le choix du contrat, le centre de formation et les démarches de financement. N'hésitez jamais à le contacter !</p>
                </div>
            </div>`,
  },
  outil_questions_star: {
    title: "Outil : Questions STAR par Compétence et par Métier",
    content: `<div class="prose max-w-none">
                <p>Voici un tableau conçu pour vous aider à préparer vos entretiens. Pour chaque compétence clé, vous trouverez des questions d'ouverture et des questions de suivi pour approfondir chaque partie de la méthode STAR, avec des exemples spécifiques pour les <strong>conducteurs</strong> et les <strong>mécaniciens</strong>.</p>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border p-2">Compétence Clé</th>
                                <th class="border p-2">Question STAR d'Ouverture</th>
                                <th class="border p-2">Exemples de Suivi (S, T, A, R)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border p-2"><strong>Gestion du Stress & Imprévus</strong></td>
                                <td class="border p-2">Racontez-moi une situation où vous avez dû faire face à un imprévu majeur qui aurait pu compromettre votre mission (ex: panne, accident, gros retard, conflit...).</td>
                                <td class="border p-2">
                                    <strong>S/T :</strong> Quel était l'enjeu ? Quelle était la pression ?<br>
                                    <strong>A :</strong> Quelle a été votre première réaction ? Quelles étapes avez-vous suivies pour gérer la situation ? Avez-vous dû communiquer avec votre exploitation ou les clients ?<br>
                                    <strong>R :</strong> Quelle a été l'issue ? Comment avez-vous assuré la continuité du service et la sécurité ?
                                </td>
                            </tr>
                            <tr>
                                <td class="border p-2"><strong>Rigueur & Respect des Procédures</strong></td>
                                <td class="border p-2">Décrivez une situation où vous avez remarqué qu'une procédure de sécurité ou de qualité n'était pas respectée par vous-même ou un collègue.</td>
                                <td class="border p-2">
                                    <strong>S/T :</strong> De quelle procédure s'agissait-il ? Quel était le risque ?<br>
                                    <strong>A :</strong> Qu'avez-vous fait concrètement pour corriger la situation ? Avez-vous dû en parler à votre hiérarchie ?<br>
                                    <strong>R :</strong> Quel a été le résultat ? La procédure a-t-elle été mieux respectée par la suite ?
                                </td>
                            </tr>
                             <tr>
                                <td class="border p-2"><strong>Relation Client & Gestion des Tensions</strong><br><em class="text-sm">(Spécifique Conducteur)</em></td>
                                <td class="border p-2">Parlez-moi d'une fois où vous avez dû gérer un passager particulièrement mécontent, agressif ou qui ne respectait pas les règles.</td>
                                <td class="border p-2">
                                    <strong>S/T :</strong> Quel était le contexte ? Quel était le comportement du passager ?<br>
                                    <strong>A :</strong> Quelle posture avez-vous adoptée ? Quelles paroles précises avez-vous utilisées pour calmer la situation tout en faisant respecter le règlement ?<br>
                                    <strong>R :</strong> Comment la situation s'est-elle terminée ? Quel a été l'impact sur les autres passagers ?
                                </td>
                            </tr>
                             <tr>
                                <td class="border p-2"><strong>Diagnostic & Résolution de Problèmes</strong><br><em class="text-sm">(Spécifique Mécanicien)</em></td>
                                <td class="border p-2">Décrivez une panne complexe ou inhabituelle que vous avez dû diagnostiquer sur un véhicule.</td>
                                <td class="border p-2">
                                    <strong>S/T :</strong> Quels étaient les symptômes ? Pourquoi était-ce un problème difficile ?<br>
                                    <strong>A :</strong> Quelle a été votre méthodologie de recherche ? Quels tests avez-vous effectués ? Avez-vous dû consulter de la documentation technique ou demander de l'aide ?<br>
                                    <strong>R :</strong> Quelle était la cause finale de la panne ? La réparation a-t-elle été durable ?
                                </td>
                            </tr>
                            <tr>
                                <td class="border p-2"><strong>Travail d'Équipe & Communication</strong></td>
                                <td class="border p-2">Donnez-moi un exemple d'une situation où une bonne coordination avec l'exploitation, vos collègues conducteurs ou les autres mécaniciens a été essentielle pour résoudre un problème.</td>
                                <td class="border p-2">
                                    <strong>S/T :</strong> Quel était le problème à résoudre en équipe ?<br>
                                    <strong>A :</strong> Quelle a été votre contribution personnelle ? Comment avez-vous partagé les informations importantes avec les autres ?<br>
                                    <strong>R :</strong> Le problème a-t-il été résolu plus efficacement grâce à cette collaboration ?
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`,
  },
  outil_mails_refus: {
    title: "Outil : Modèles de Mails de Refus Professionnels",
    content: `<div class="prose max-w-none">
                <p>Utilisez ces modèles comme base pour construire des réponses respectueuses et professionnelles aux candidats non retenus. Personnalisez-les pour qu'ils reflètent votre culture d'entreprise.</p>
                
                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold" style="color: var(--c-primary);">Modèle 1 : Refus après réception du CV</h4>
                    <p class="text-sm italic"><strong>Contexte :</strong> Pour les candidats qui ne passent pas la première étape de sélection.</p>
                    <div class="mt-4 p-4 bg-white rounded-md border text-sm">
                        <p><strong>Objet :</strong> Suite à votre candidature pour le poste de [Poste]</p>
                        <hr class="my-2">
                        <p>Bonjour [Prénom Nom],</p><br>
                        <p>Nous vous remercions sincèrement de l'intérêt que vous portez à notre entreprise [Nom de l'entreprise] et pour le temps que vous avez consacré à nous transmettre votre candidature.</p>
                        <p>Nous avons étudié votre profil avec la plus grande attention. Bien que vos compétences soient intéressantes, nous avons fait le choix de poursuivre le processus de recrutement avec des candidats dont l'expérience correspondait davantage aux exigences spécifiques de ce poste.</p>
                        <p>Nous nous permettons de conserver votre CV et ne manquerons pas de revenir vers vous si une autre opportunité susceptible de vous intéresser se présentait.</p><br>
                        <p>Nous vous souhaitons pleine réussite dans vos recherches.</p><br>
                        <p>Cordialement,</p>
                        <p><strong>L'équipe [Nom de l'entreprise]</strong></p>
                    </div>
                </div>

                <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">Modèle 2 : Refus après un entretien</h4>
                    <p class="text-sm italic"><strong>Contexte :</strong> Pour les candidats que vous avez rencontrés. Un retour, même succinct, est ici indispensable.</p>
                    <div class="mt-4 p-4 bg-white rounded-md border text-sm">
                        <p><strong>Objet :</strong> Notre échange pour le poste de [Poste]</p>
                        <hr class="my-2">
                        <p>Bonjour [Prénom Nom],</p><br>
                        <p>Je tenais à vous remercier personnellement pour le temps que vous nous avez accordé lors de notre entretien du [Date]. Nous avons sincèrement apprécié la qualité de notre échange et votre motivation.</p>
                        <p>Après mûre réflexion, nous avons décidé de finaliser notre recrutement avec un autre candidat dont le profil était en parfaite adéquation avec l'ensemble de nos attentes pour ce rôle.</p>
                        <p>Sachez que nous avons néanmoins été particulièrement sensibles à [mentionner un point fort réel et sincère du candidat, ex: "votre excellent relationnel", "votre rigueur technique", "votre connaissance du secteur..."].</p><br>
                        <p>Nous vous remercions encore une fois pour votre intérêt et vous souhaitons un franc succès dans la poursuite de votre carrière.</p><br>
                        <p>Bien cordialement,</p>
                        <p><strong>[Votre Prénom Nom]</strong><br>
                        <em>[Votre Poste]</em></p>
                    </div>
                </div>
            </div>`,
  },
  outil_checklist_accueil: {
    title: "Outil : Checklist Complète pour l'Accueil d'un Nouveau Salarié",
    content: `<div class="prose max-w-none"><h3>Phase 1 : Avant l'arrivée (J-7 à J-1)</h3><ul class="list-disc pl-5"><li><strong>Administratif :</strong> Préparer le contrat de travail et la DPAE.</li><li><strong>Matériel :</strong> Assigner et vérifier le véhicule; préparer l'uniforme, badge, clés.</li><li><strong>Communication :</strong> Envoyer un email de bienvenue; informer l'équipe de l'arrivée.</li><li><strong>Organisation :</strong> Désigner le parrain/marraine; établir le planning de la première semaine; préparer le kit de bienvenue.</li></ul><h3 class="mt-4">Le JOUR J</h3><ul class="list-disc pl-5"><li><strong>Accueil :</strong> Accueil personnalisé par le manager ou le parrain. Offrir un café.</li><li><strong>Intégration :</strong> Remettre le kit; faire la visite des locaux; présenter l'équipe; déjeuner organisé.</li><li><strong>Formalités :</strong> Signer les documents; présenter le livret d'accueil et le planning.</li></ul><h3 class="mt-4">Première SEMAINE</h3><ul class="list-disc pl-5"><li>Suivre le planning d'intégration (tournées en double, etc.).</li><li>Organiser un point de 30 min avec le manager en fin de semaine.</li><li>S'assurer que le parrain/la marraine a bien joué son rôle.</li></ul><h3 class="mt-4">Premier MOIS</h3><ul class="list-disc pl-5"><li>Point de suivi formel avec le manager.</li><li>Présenter et expliquer le rapport d'étonnement.</li></ul><h3 class="mt-4">Fin de PÉRIODE D'ESSAI</h3><ul class="list-disc pl-5"><li>Planifier l'entretien de fin de période d'essai.</li><li>Échanger sur le rapport d'étonnement.</li><li>Fixer les premiers objectifs.</li></ul></div>`,
  },
  outil_rapport_etonnement: {
    title: "Outil : Modèle de Rapport d'Étonnement",
    content: `<div class="prose max-w-none"><h3>Introduction à l'attention du nouveau collaborateur :</h3><p>Bienvenue ! Votre regard neuf sur notre organisation est précieux. Ce rapport est un espace d'expression libre pour nous aider à nous améliorer. N'hésitez pas à noter vos observations au fil de l'eau. Ce document servira de base à un échange avec votre manager à la fin de votre premier mois.</p><ol class="list-decimal pl-5 space-y-2"><li><strong>Le recrutement et votre arrivée :</strong> Les promesses faites en entretien correspondent-elles à la réalité ? Vous êtes-vous senti bien accueilli ?</li><li><strong>Votre poste et votre environnement :</strong> Vos missions sont-elles claires ? Les outils vous semblent-ils efficaces ?</li><li><strong>La vie dans l'entreprise :</strong> Comment décririez-vous l'ambiance ? L'information circule-t-elle bien ?</li><li><strong>Vos suggestions :</strong> Quelle est LA bonne idée que vous avez vue ailleurs et que nous pourrions adopter ? Si vous aviez une baguette magique, que changeriez-vous ?</li></ol></div>`,
  },
  outil_rapport_etonnement_pdf: {
    title: "Outil : Trame du Rapport d'Étonnement",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Rapport d'Étonnement</h3>
                </div>
                
                <div class="mt-6 text-sm">
                    <p><strong>Le rapport d'étonnement, c'est quoi ?</strong><br>
                    C'est un document qui recueille votre ressenti et votre analyse sur ce que vous avez remarqué depuis votre arrivée. [cite_start]Votre regard neuf est un outil précieux pour nous aider à nous améliorer. [cite: 2809, 2810, 2811]</p>
                    <div class="p-3 mt-4 rounded-lg bg-white border">
                        <h4 class="font-semibold" style="color: var(--c-primary);">Quelques recommandations :</h4>
                        <ul class="list-disc pl-5 mt-2 text-xs space-y-1">
                            [cite_start]<li>Soyez transparent et constructif. [cite: 2814]</li>
                            [cite_start]<li>Restez factuel, ne visez personne nominativement. [cite: 2815]</li>
                            [cite_start]<li>Proposez des solutions, faites preuve de créativité ! [cite: 2816, 2817]</li>
                            [cite_start]<li>Acceptez que votre ressenti est subjectif, c'est ce qui fait sa valeur. [cite: 2818]</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><strong>Entreprise :</strong> _________________________</div>
                    <div><strong>Nom et Prénom :</strong> _________________________</div>
                    <div><strong>Intitulé du poste :</strong> _________________________</div>
                    <div><strong>Date de prise de poste :</strong> ____________</div>
                </div>

                <div class="mt-6 space-y-4">
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Sur la phase d'accueil</h4>
                        <p class="text-xs italic text-gray-500">Qu'avez-vous pensé de vos premiers jours ?</p>
                        <div class="w-full h-24 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Sur la culture et les valeurs de l'entreprise</h4>
                        <p class="text-xs italic text-gray-500">Correspondent-elles à ce que vous attendiez ?</p>
                        <div class="w-full h-24 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Sur votre travail</h4>
                        <p class="text-xs italic text-gray-500">Vos missions sont-elles claires ? Qu'est-ce qui vous a surpris ?</p>
                        <div class="w-full h-24 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Sur la qualité des relations (collègues, managers)</h4>
                        <p class="text-xs italic text-gray-500">Comment décririez-vous l'ambiance et les relations au sein de l'équipe ?</p>
                        <div class="w-full h-24 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">La baguette magique...</h4>
                        [cite_start]<p class="text-xs italic text-gray-500">Si vous aviez une baguette magique, quelle est "la" chose que vous changeriez ? [cite: 2856]</p>
                        <div class="w-full h-24 border bg-white mt-1 p-2 rounded-md"></div>
                    </div>
                </div>

                 <div class="mt-6 pt-4 border-t flex justify-between items-center text-sm">
                    <p><strong>Date :</strong> ____________</p>
                    <p><strong>Signature du collaborateur :</strong></p>
                </div>
            </div>`,
  },
  outil_pdc: {
    title:
      "Comment construire votre Plan de Développement des Compétences (PDC)",
    content: `<div class="prose max-w-none">
                <p>Le PDC n'a pas besoin d'être un document complexe. Il s'agit d'une feuille de route simple qui formalise votre stratégie de formation pour l'année. Voici un exemple de trame pour vous guider.</p>

                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold" style="color: var(--c-primary);">Plan de Développement des Compétences - Année [202X]</h4>
                </div>

                <h5 class="font-bold mt-6">Axe Stratégique 1 : Maintenir la Conformité et la Sécurité</h5>
                <p class="text-sm">Assurer que tous les collaborateurs sont à jour de leurs obligations réglementaires et des meilleures pratiques de sécurité.</p>
                <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li><strong>Action :</strong> Recyclage FCO pour [X] conducteurs.</li>
                    <li><strong>Action :</strong> Formation "Sauveteur Secouriste du Travail" (SST) pour [Y] salariés volontaires.</li>
                </ul>
                <hr class="my-4">

                <h5 class="font-bold mt-4">Axe Stratégique 2 : Améliorer la Qualité de Service et la Relation Client</h5>
                <p class="text-sm">Développer les compétences comportementales pour renforcer la satisfaction des passagers et l'image de l'entreprise.</p>
                <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li><strong>Action :</strong> Formation "Gestion des conflits et de l'agressivité" pour l'ensemble du personnel roulant.</li>
                    <li><strong>Action :</strong> Module de sensibilisation à l'accueil des personnes à mobilité réduite.</li>
                </ul>
                <hr class="my-4">

                <h5 class="font-bold mt-4">Axe Stratégique 3 : Anticiper les Évolutions du Secteur</h5>
                <p class="text-sm">Préparer l'entreprise et les équipes aux mutations technologiques et environnementales.</p>
                <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li><strong>Action :</strong> Formation à l'éco-conduite pour réduire l'empreinte carbone et les coûts de carburant.</li>
                    <li><strong>Action :</strong> Habilitation électrique pour [Z] mécaniciens en prévision de l'arrivée de véhicules électriques.</li>
                </ul>

                <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 mt-6">
                    <h4 class="font-bold">N'oubliez pas !</h4>
                    <p class="text-sm">Une fois ce plan ébauché, contactez votre conseiller <strong>OPCO Mobilités</strong>. Il vous aidera à trouver les financements pour chacune de ces actions.</p>
                </div>
            </div>`,
  },
  outil_entretien_pro: {
    title: "Comment Réaliser Votre Entretien Professionnel Obligatoire",
    content: `<div class="prose max-w-none">
                <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800">
                    <h4 class="font-bold">Rappel Légal</h4>
                    <p class="text-sm">Cet entretien est <strong>obligatoire tous les 2 ans</strong>. Il est consacré aux perspectives d'évolution professionnelle du salarié, notamment en termes de qualifications et d'emploi. <strong>Attention : il ne doit pas porter sur l'évaluation du travail du salarié</strong>, qui est abordée lors de l'entretien annuel (qui n'est pas obligatoire).</p>
                </div>

                <h4 class="font-bold mt-6" style="color: var(--c-primary);">Trame d'Entretien</h4>
                <p><strong>Collaborateur :</strong> _________________________ <br><strong>Manager :</strong> _________________________ <br><strong>Date :</strong> __________ </p>
                <hr class="my-4">

                <h5 class="font-bold mt-4">1. Bilan du Parcours Passé (depuis le dernier entretien)</h5>
                <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li>Quelles ont été vos missions principales ces deux dernières années ?</li>
                    <li>Parmi celles-ci, lesquelles vous ont le plus intéressé(e) ? Le moins ?</li>
                    <li>Avez-vous suivi des formations ? Si oui, qu'en avez-vous retiré ?</li>
                    <li>Avez-vous acquis de nouvelles compétences ? (techniques, relationnelles...)</li>
                </ul>
                <hr class="my-4">

                <h5 class="font-bold mt-4">2. Projet Professionnel et Perspectives d'Évolution</h5>
                 <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li>Comment vous projetez-vous dans l'entreprise à moyen terme (2-3 ans) ?</li>
                    <li>Y a-t-il un autre poste, d'autres missions qui pourraient vous intéresser à l'avenir ?</li>
                    <li>Quelles compétences aimeriez-vous développer pour atteindre cet objectif ?</li>
                </ul>
                <hr class="my-4">

                <h5 class="font-bold mt-4">3. Information sur les Dispositifs (Partie obligatoire)</h5>
                <p class="text-sm">Le manager doit informer le salarié sur les dispositifs suivants :</p>
                <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                    <li><strong>La Validation des Acquis de l'Expérience (VAE) :</strong> La possibilité de faire reconnaître son expérience par un diplôme.</li>
                    <li><strong>Le Compte Personnel de Formation (CPF) :</strong> "Lui avez-vous expliqué comment activer et consulter son compte sur <a href='https://www.moncompteformation.gouv.fr' target='_blank'>moncompteformation.gouv.fr</a> ?"</li>
                    <li><strong>Le Conseil en Évolution Professionnelle (CEP) :</strong> Un service d'accompagnement gratuit pour faire le point sur sa situation professionnelle.</li>
                </ul>
                 <hr class="my-4">

                <h5 class="font-bold mt-4">4. Synthèse et Actions à Mettre en Place</h5>
                <p class="text-sm"><em>(Cette partie servira de base pour construire ou mettre à jour le Plan de Développement Individuel - PDI)</em></p>
                <p class="text-sm"><strong>Actions de formation envisagées :</strong> __________________________________________________</p>
                <p class="text-sm"><strong>Autres actions (tutorat, etc.) :</strong> __________________________________________________</p>
                
                <p class="text-xs italic text-gray-500 mt-6">Une copie de ce compte-rendu doit être remise au salarié.</p>
            </div>`,
  },
  outil_pdi: {
    title: "Outil : Modèle de Plan de Développement Individuel (PDI)",
    content: `<div class="prose max-w-none"><h3>Plan de Développement Individuel</h3><p><strong>Collaborateur :</strong> __________ <strong>Manager :</strong> __________ <strong>Date de l'entretien :</strong> __________</p><h4 class="mt-4">Bilan de la période écoulée (succès, points d'amélioration) :</h4><div class="w-full h-24 border border-gray-300 rounded-md p-2 bg-gray-50"></div><h4 class="mt-4">Objectifs de développement pour l'année à venir (2 à 3 maximum)</h4><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="bg-gray-100"><th class="border p-2">Objectif de Compétence (Quoi?)</th><th class="border p-2">Actions à Mettre en Œuvre (Comment?)</th><th class="border p-2">Moyens Nécessaires (Ressources)</th><th class="border p-2">Indicateurs de Réussite (Mesure)</th><th class="border p-2">Échéance</th></tr></thead><tbody><tr><td class="border p-2"><strong>Exemple :</strong> Améliorer la gestion des situations conflictuelles avec les usagers.</td><td class="border p-2">- Suivre la formation «&nbsp;Gestion de l'agressivité et des conflits&nbsp;».<br>- Débriefing systématique avec le manager après un incident.</td><td class="border p-2">- Inscription à la formation (budget : X €).<br>- Temps dédié pour les débriefings.</td><td class="border p-2">- Diminution du nombre de réclamations liées à des altercations.<br>- Sentiment de plus grande maîtrise exprimé par le collaborateur.</td><td class="border p-2">Fin du 1er semestre</td></tr><tr><td class="border p-2"><strong>Objectif 1 :</strong></td><td class="border p-2"></td><td class="border p-2"></td><td class="border p-2"></td><td class="border p-2"></td></tr><tr><td class="border p-2"><strong>Objectif 2 :</strong></td><td class="border p-2"></td><td class="border p-2"></td><td class="border p-2"></td><td class="border p-2"></td></tr></tbody></table></div><h4 class="mt-4">Aspirations de carrière à moyen/long terme (discussion ouverte) :</h4><div class="w-full h-24 border border-gray-300 rounded-md p-2 bg-gray-50"></div><h4 class="mt-4">Commentaires du collaborateur :</h4><div class="w-full h-16 border border-gray-300 rounded-md p-2 bg-gray-50"></div><h4 class="mt-4">Commentaires du manager :</h4><div class="w-full h-16 border border-gray-300 rounded-md p-2 bg-gray-50"></div><p class="mt-6"><strong>Signatures :</strong></p></div>`,
  },
  outil_opco: {
    title: "Outil : Guide 'Pas à Pas' pour une demande de financement OPCO",
    content: `<div class="prose max-w-none"><p>La formation de vos salariés peut être financée en grande partie, voire en totalité. Ne passez pas à côté !</p><ol class="list-decimal pl-5 space-y-2"><li><strong>Identifiez votre OPCO :</strong> Pour le secteur du Transport Routier de Voyageurs, votre interlocuteur unique est l'<strong>OPCO Mobilités</strong>.</li><li><strong>Choisissez une formation et un organisme certifié :</strong> La formation doit impérativement être dispensée par un organisme de formation certifié <strong>Qualiopi</strong>. C'est un gage de qualité et une condition obligatoire pour obtenir les financements.</li><li><strong>Montez le dossier AVANT la formation :</strong> Rapprochez-vous de votre conseiller OPCO Mobilités. Il est là pour vous aider ! Il vous guidera pour obtenir un devis conforme et remplir la demande de prise en charge financière. Cette démarche doit toujours être faite avant le début de la formation.</li></ol><p class="mt-4 p-3 rounded-lg" style="background-color: var(--c-light); color: var(--c-primary);"><strong>Le conseil pro :</strong> Les entreprises de moins de 50 salariés sont prioritaires et bénéficient des conditions de financement les plus avantageuses. N'hésitez jamais à contacter votre OPCO, c'est un service gratuit et leur mission est de vous accompagner.</p></div>`,
  },
  outil_reconnaissance: {
    title: "Outil : La Boîte à Idées de la Reconnaissance",
    content: `<div class="prose max-w-none">
                <p>Voici une sélection d'idées concrètes, classées par type d'impact, pour nourrir votre culture de la reconnaissance au quotidien. Choisissez-en quelques-unes et lancez-vous !</p>

                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold" style="color: var(--c-primary);">Niveau 1 : Reconnaissance Informelle (Au quotidien, Coût = 0€)</h4>
                    <p class="text-sm"><strong>Objectif :</strong> Créer une habitude de feedback positif.</p>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-2">
                        <li><strong>Le "Merci" circonstancié :</strong> "Merci Sophie d'avoir été si pro avec le client difficile de la ligne 5 ce matin, j'ai eu un excellent retour."</li>
                        <li><strong>Le "Coup de Chapeau" en réunion :</strong> "Je voulais commencer ce point d'équipe en félicitant l'équipe de l'atelier pour avoir géré la panne du car X en un temps record."</li>
                        <li><strong>Le partage d'un compliment :</strong> Transférer directement par SMS ou afficher en salle de pause l'e-mail d'un client satisfait en mentionnant le conducteur concerné.</li>
                    </ul>
                </div>

                <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">Niveau 2 : Reconnaissance Structurée (Rituels, Faible coût)</h4>
                    <p class="text-sm"><strong>Objectif :</strong> Créer des rendez-vous de reconnaissance visibles par tous.</p>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-2">
                        <li><strong>Le tableau "Les Bravos de la Semaine" :</strong> Un simple tableau blanc en salle de pause où chacun peut écrire un mot de remerciement pour un collègue.</li>
                        <li><strong>Le café/croissants du vendredi :</strong> Pour célébrer collectivement une semaine intense ou une réussite particulière.</li>
                        <li><strong>Célébrer les anniversaires (personnels et d'ancienneté) :</strong> C'est un geste simple qui montre que l'on pense à la personne au-delà du simple salarié.</li>
                    </ul>
                </div>

                 <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">Niveau 3 : Reconnaissance par la Confiance & l'Investissement</h4>
                     <p class="text-sm"><strong>Objectif :</strong> Montrer sa satisfaction par des actes concrets qui valorisent la compétence.</p>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-2">
                        <li><strong>Confier une mission spéciale :</strong> "Marc, tu es notre référence sur les boîtes automatiques. Pourrais-tu former le nouvel apprenti sur ce point ?"</li>
                        <li><strong>Prioriser l'attribution d'un véhicule neuf :</strong> L'attribuer à un conducteur particulièrement soigneux et fiable.</li>
                        <li><strong>Investir dans du matériel de qualité :</strong> Acheter la nouvelle clé à choc demandée par un mécanicien montre que vous écoutez ses besoins et respectez son expertise.</li>
                    </ul>
                </div>

                <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 mt-6">
                    <h4 class="font-bold">Le Conseil du Pro</h4>
                    <p class="text-sm">La reconnaissance la plus efficace est celle qui est <strong>authentique</strong>. Choisissez les actions qui vous ressemblent et qui correspondent à votre culture d'entreprise. Mieux vaut un "merci" sincère qu'une prime perçue comme un dû.</p>
                </div>
            </div>`,
  },
  outil_sondage: {
    title: "Outil : Modèle de Sondage de Satisfaction '3 Questions Clés'",
    content: `<div class="prose max-w-none">
                <div class="p-4 rounded-lg bg-gray-50 border-t-4" style="border-color: var(--c-accent);">
                    <h3 class="font-bold text-center" style="color: var(--c-primary);">La météo de notre entreprise : votre avis compte !</h3>
                    <p class="text-sm text-center">Ce court sondage anonyme (2 minutes) a pour but de prendre le pouls de nos équipes. Vos réponses honnêtes sont précieuses pour nous améliorer. Merci pour votre participation !</p>
                </div>
                
                <div class="mt-6 space-y-6">
                    <div>
                        <label class="font-semibold">1. Sur une échelle de 1 (Très mauvaise) à 10 (Excellente), comment évaluez-vous votre semaine de travail ?</label>
                        <p class="text-xs italic text-gray-500">Cette question mesure le moral général.</p>
                        <div class="flex justify-between items-center mt-2 text-sm">
                            <span>🙁 1</span>
                            <span>😐 5</span>
                            <span>🙂 10</span>
                        </div>
                        <input type="range" min="1" max="10" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1">
                    </div>

                    <div>
                        <label class="font-semibold">2. Qu'est-ce qui a été le plus positif pour vous cette semaine/ce mois ?</label>
                        <p class="text-xs italic text-gray-500">Cette question identifie vos points forts à préserver.</p>
                        <textarea class="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-50" rows="3" placeholder="Un succès, une bonne interaction, une mission intéressante..."></textarea>
                    </div>

                    <div>
                        <label class="font-semibold">3. Si vous aviez une baguette magique, quelle est LA chose que vous changeriez pour améliorer notre quotidien au travail ?</label>
                        <p class="text-xs italic text-gray-500">Cette question révèle les points de friction et les pistes d'amélioration prioritaires.</p>
                        <textarea class="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-50" rows="3" placeholder="Une idée, une suggestion, un problème à résoudre..."></textarea>
                    </div>
                </div>
            </div>`,
  },
  outil_alumni_kit: {
    title: "Outil : Kit de Lancement pour votre Réseau d'Anciens",
    content: `<div class="prose max-w-none">
                <p>Lancer un réseau d'anciens n'a pas besoin d'être compliqué. Voici une boîte à outils "clé en main" pour vous aider à démarrer cette démarche simplement et efficacement.</p>

                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold" style="color: var(--c-primary);">1. Le Message d'Invitation (à proposer lors de l'entretien de départ)</h4>
                    <p class="text-sm italic"><strong>Objectif :</strong> Proposer de garder le contact de manière professionnelle et bienveillante.</p>
                    <div class="mt-4 p-4 bg-white rounded-md border text-sm">
                        <p>« Pour commencer, nous tenions à te remercier pour ta contribution durant ces années. Nous te souhaitons le meilleur pour ton nouveau projet.</p>
                        <p class="mt-2">Si tu es d'accord, nous aimerions beaucoup te proposer de rejoindre notre réseau d'anciens collaborateurs. L'idée est simple : garder un lien, te partager nos grandes nouvelles 1 à 2 fois par an et, bien sûr, nos offres d'emploi en avant-première. Il n'y a aucune obligation.</p>
                        <p class="mt-2">Qu'en penses-tu ? »</p>
                    </div>
                </div>

                <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">2. Le Support : Simple et Efficace</h4>
                    <p class="text-sm italic">Pas besoin d'un outil complexe. Choisissez l'option qui vous convient le mieux :</p>
                     <ul class="list-disc pl-5 mt-2 text-sm">
                        <li><strong>Un groupe privé sur LinkedIn :</strong> Idéal pour le partage d'offres d'emploi et les interactions.</li>
                        <li><strong>Une simple liste de diffusion par e-mail :</strong> Parfait pour envoyer une newsletter annuelle.</li>
                    </ul>
                </div>

                 <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold" style="color: var(--c-primary);">3. Modèle de Newsletter Annuelle</h4>
                    <p class="text-sm italic"><strong>Objectif :</strong> Animer le réseau sans surcharger (1 à 2 communications par an suffisent).</p>
                    <div class="mt-4 p-4 bg-white rounded-md border text-sm">
                        <p><strong>Objet :</strong> Quelques nouvelles de [Nom de l'entreprise] !</p>
                        <hr class="my-2">
                        <p>Bonjour à tous les anciens de [Nom de l'entreprise],</p><br>
                        <p>Nous espérons que vous allez bien ! Comme chaque année, nous tenions à vous partager quelques-unes de nos dernières actualités :</p>
                         <ul class="list-disc pl-5 my-2">
                            <li><strong>La grande nouvelle de l'année :</strong> [Ex: Nous avons renouvelé notre parc avec 5 nouveaux cars électriques !]</li>
                             <li><strong>Un clin d'œil :</strong> [Ex: Un grand bravo à l'équipe qui a assuré le transport de..."]</li>
                        </ul>
                        <p>Notre entreprise continue de grandir, et nous sommes toujours à la recherche de talents qui partagent nos valeurs. Si vous connaissez la perle rare (ou si l'envie vous prend de revenir !), n'hésitez pas à consulter nos offres :</p>
                        <p class="text-center my-3"><a href="[Lien vers votre page carrière]" class="tool-button">Voir nos offres d'emploi</a></p>
                        <p>Au plaisir de vous recroiser sur la route !</p><br>
                        <p>Bien cordialement,</p>
                        <p><strong>L'équipe [Nom de l'entreprise]</strong></p>
                    </div>
                </div>
            </div>`,
  },
  outil_entretien_depart: {
    title: "Outil : Trame de l'Entretien de Départ",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Guide d'Entretien de Départ</h3>
                </div>
                
                 <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 mt-6">
                    <h4 class="font-bold">Introduction du Manager</h4>
                    <p class="text-sm italic mt-1">« Merci d'avoir accepté cet échange. L'objectif n'est pas de te faire changer d'avis, mais de comprendre ton expérience chez nous afin de nous améliorer. Cet entretien est confidentiel. »</p>
                </div>

                <div class="mt-6 space-y-4">
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">1. Les Raisons du Départ</h4>
                        <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li>Pour commencer, qu'est-ce qui a principalement motivé ta décision de rechercher une autre opportunité ?</li>
                            <li>Qu'as-tu trouvé dans ton nouveau poste que tu n'avais pas ou plus ici ?</li>
                        </ul>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">2. Votre Expérience au Sein de l'Entreprise</h4>
                         <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li>Qu'as-tu le plus apprécié durant ton parcours chez nous ? (missions, ambiance, projets...)</li>
                            <li>À l'inverse, quels ont été les aspects les plus difficiles ou frustrants ?</li>
                        </ul>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">3. Le Rôle et le Management</h4>
                        <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li>Ton poste correspondait-il à ce qui t'avait été présenté lors de ton embauche ?</li>
                            <li>Comment décrirais-tu ta relation de travail avec ton manager direct ?</li>
                        </ul>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">4. Suggestions d'Amélioration & Conclusion</h4>
                        <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li>Quel conseil principal donnerais-tu à la direction pour améliorer l'entreprise ?</li>
                            <li>Pour finir, recommanderais-tu notre entreprise comme employeur à un ami ? Pourquoi ?</li>
                        </ul>
                    </div>
                </div>
            </div>`,
  },
  outil_selection_rh: {
    title: "Outil : Sélection d'Outils RH Numériques pour PME",
    content: `<div class="prose max-w-none"><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="bg-gray-100"><th class="border p-2">Catégorie</th><th class="border p-2">Outils Recommandés</th><th class="border p-2">Avantages Clés</th></tr></thead><tbody><tr><td class="border p-2"><strong>Suivi des Candidatures (ATS)</strong></td><td class="border p-2"><strong>Gratuit/Freemium :</strong> Zoho Recruit, Breezy HR<br><strong>Abordable :</strong> Flatchr, Taleez</td><td class="border p-2">Centralise les CV, automatise les réponses, améliore l'image professionnelle.</td></tr><tr><td class="border p-2"><strong>Sondages Internes</strong></td><td class="border p-2">Google Forms, Eval&Go, Typeform</td><td class="border p-2">Recueille facilement et anonymement l'avis des salariés.</td></tr><tr><td class="border p-2"><strong>Formation en Ligne</strong></td><td class="border p-2">OpenClassrooms, FUN MOOC<br><strong>Création interne :</strong> Teachizy</td><td class="border p-2">Accès à des formations à faible coût, possibilité de créer ses propres modules.</td></tr></tbody></table></div></div>`,
  },
  outil_ambassadeur_fiche: {
    title: "Outil : Fiche de Mission Ambassadeur",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Fiche de Mission : Ambassadeur / Ambassadrice</h3>
                    <p class="text-sm mt-2">Ce document officialise votre rôle volontaire en tant qu'ambassadeur de [Nom de l'entreprise].</p>
                </div>
                
                <div class="mt-6 space-y-4">
                    <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Ambassadeur/Ambassadrice :</h4>
                        <p class="text-sm"><strong>Nom :</strong> _________________________ <br><strong>Poste :</strong> _________________________</p>
                    </div>
                     <div>
                        <h4 class="font-bold" style="color: var(--c-primary);">Notre Vision du Programme</h4>
                        <p class="text-sm">Nous sommes convaincus que nos collaborateurs sont les mieux placés pour parler de nos métiers et de notre culture. Ce programme vise à reconnaître et valoriser ceux qui, comme vous, souhaitent s'investir dans la promotion de notre entreprise et la transmission de nos valeurs.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div class="bg-white p-4 rounded-lg border">
                             <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Vos Missions Possibles</h5>
                             <p class="text-xs italic mb-2">En fonction de vos envies et disponibilités</p>
                             <ul class="list-disc pl-5 text-sm space-y-1">
                                <li>Participer à des forums de l'emploi.</li>
                                <li>Témoigner dans nos communications.</li>
                                <li>Intervenir lors d'un entretien de recrutement.</li>
                                <li>Parrainer un nouvel arrivant.</li>
                            </ul>
                        </div>
                         <div class="bg-white p-4 rounded-lg border">
                             <h5 class="font-bold text-md mb-2" style="color: var(--c-primary);">Votre Valorisation</h5>
                              <p class="text-xs italic mb-2">En reconnaissance de votre engagement</p>
                             <ul class="list-disc pl-5 text-sm space-y-1">
                                <li>Accès prioritaire aux formations.</li>
                                <li>Prime annuelle symbolique de [X] €.</li>
                                <li>Déjeuner trimestriel avec la direction.</li>
                                <li>Titre officiel dans votre signature de mail.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mt-6 text-center p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800">
                        <p class="text-sm font-semibold">Votre engagement volontaire est une marque de confiance qui nous est précieuse. Merci de porter haut les couleurs de notre entreprise !</p>
                    </div>

                </div>
            </div>`,
  },
  outil_prompt_book: {
    title: "Outil : Le 'Prompt Book' IA pour Managers",
  },
  outil_feedback_desc: {
    title: "Outil : La Méthode DESC pour un Feedback Constructif",
    content: `<div class="prose max-w-none">
                <p>Donner un feedback, surtout lorsqu'il s'agit d'un point d'amélioration, est un exercice délicat. La méthode <strong>DESC</strong> est un outil simple en 4 étapes pour structurer votre message de manière factuelle, respectueuse et orientée vers la solution.</p>
                
                <div class="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 mt-6">
                    <p class="text-sm"><strong>L'objectif :</strong> Critiquer le comportement ou le résultat, <strong>jamais la personne</strong>.</p>
                </div>

                <div class="mt-6 space-y-4">
                    
                    <div class="idea-card p-4 rounded-lg">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl" style="color: var(--c-accent);">D</div>
                            <h5 class="font-bold text-lg ml-4" style="color: var(--c-primary);">Décrire les faits</h5>
                        </div>
                        <p class="text-sm mt-2 ml-16">Commencez par décrire la situation de manière <strong>factuelle, neutre et précise</strong>. Contentez-vous de ce que vous avez vu ou entendu, sans jugement ni interprétation.<br>
                        <em>Exemple : "Hier matin, j'ai constaté que la vérification de sécurité du véhicule n'avait pas été signée sur la fiche de suivi."</em></p>
                    </div>

                    <div class="idea-card p-4 rounded-lg">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl" style="color: var(--c-accent);">E</div>
                            <h5 class="font-bold text-lg ml-4" style="color: var(--c-primary);">Exprimer ses émotions</h5>
                        </div>
                        <p class="text-sm mt-2 ml-16">Expliquez l'impact que la situation a eu sur vous ou sur l'entreprise, en utilisant le "Je". Cela permet de parler des conséquences sans accuser.<br>
                        <em>Exemple : "Je suis inquiet car cela peut avoir un impact sur la sécurité et engager notre responsabilité."</em></p>
                    </div>

                    <div class="idea-card p-4 rounded-lg">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl" style="color: var(--c-accent);">S</div>
                            <h5 class="font-bold text-lg ml-4" style="color: var(--c-primary);">Suggérer des solutions</h5>
                        </div>
                        <p class="text-sm mt-2 ml-16">Proposez une solution ou une piste d'amélioration claire et constructive. Impliquez votre interlocuteur dans la recherche de solution.<br>
                        <em>Exemple : "Je te propose de revoir ensemble la procédure ce matin. Qu'est-ce qui pourrait t'aider à ne plus oublier cette étape ?"</em></p>
                    </div>

                    <div class="idea-card p-4 rounded-lg">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 bg-red-100 text-accent font-bold rounded-full w-12 h-12 flex items-center justify-center text-2xl" style="color: var(--c-accent);">C</div>
                            <h5 class="font-bold text-lg ml-4" style="color: var(--c-primary);">Conclure positivement</h5>
                        </div>
                        <p class="text-sm mt-2 ml-16">Terminez l'échange en réaffirmant votre confiance et en rappelant les conséquences positives du changement de comportement.<br>
                        <em>Exemple : "Je sais que tu es très professionnel et je compte sur toi. Le respect de cette procédure est essentiel pour la sécurité de tous et la sérénité de l'équipe."</em></p>
                    </div>

                </div>
            </div>`,
  },
  outil_gamification_ideas: {
    title: "Outil : La Boîte à Idées de la Gamification",
    content: `<div class="prose max-w-none">
                <p>Voici des exemples concrets et prêts à l'emploi de challenges gamifiés, spécialement pensés pour les métiers du transport de voyageurs. N'hésitez pas à vous en inspirer pour créer vos propres jeux !</p>

                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold text-center" style="color: var(--c-primary);">Challenge : L'Éco-Pilote du Trimestre</h4>
                    <div class="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div class="flex-shrink-0 text-center">
                            <div class="bg-white p-3 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-2" style="border-color: var(--c-accent);">
                                <svg class="w-12 h-12" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m8.364-8.364l-.707.707M4.343 4.343l-.707.707m16.364-.707l-.707-.707M4.343 19.657l-.707-.707m12.728 0l.707-.707M6.714 16.03a9 9 0 1010.572 0M12 18a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm"><strong>Principe :</strong> Chaque trimestre, le conducteur qui a obtenu la meilleure note d'éco-conduite (via l'informatique embarquée) est désigné(e) "Éco-Pilote du Trimestre".</p>
                            <ul class="list-disc pl-5 mt-2 text-sm">
                                <li><strong>Objectif :</strong> Réduire la consommation de carburant et valoriser une conduite souple.</li>
                                <li><strong>Récompense :</strong> Un badge "Éco-Pilote", un bon d'achat, une mise en avant dans la newsletter...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold text-center" style="color: var(--c-primary);">Challenge : Le Quiz des Champions de la Sécurité</h4>
                     <div class="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div class="flex-shrink-0 text-center">
                            <div class="bg-white p-3 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-2" style="border-color: var(--c-accent);">
                                <svg class="w-12 h-12" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm"><strong>Principe :</strong> Une fois par mois, un quiz de 5 questions sur les règles de sécurité est envoyé à tous les conducteurs. Un tirage au sort est effectué parmi les bonnes réponses.</p>
                            <ul class="list-disc pl-5 mt-2 text-sm">
                                <li><strong>Objectif :</strong> Ancrer les réflexes de sécurité de manière ludique et régulière.</li>
                                <li><strong>Récompense :</strong> Un panier garni, une carte cadeau...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold text-center" style="color: var(--c-primary);">Challenge : Zéro Accrochage</h4>
                     <div class="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div class="flex-shrink-0 text-center">
                            <div class="bg-white p-3 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-2" style="border-color: var(--c-accent);">
                                <svg class="w-12 h-12" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M4 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm"><strong>Principe :</strong> Tous les conducteurs n'ayant eu aucun sinistre responsable sur une période de 6 mois entrent dans un tirage au sort pour gagner une récompense significative.</p>
                            <ul class="list-disc pl-5 mt-2 text-sm">
                                <li><strong>Objectif :</strong> Responsabiliser à la prévention des petits incidents du quotidien.</li>
                                <li><strong>Récompense :</strong> À définir en entreprise.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <div class="p-4 rounded-lg bg-gray-50 border mt-4">
                    <h4 class="font-bold text-center" style="color: var(--c-primary);">Challenge : Le Pro de la Passe (Atelier)</h4>
                     <div class="flex flex-col md:flex-row items-center gap-6 mt-4">
                        <div class="flex-shrink-0 text-center">
                            <div class="bg-white p-3 rounded-full w-24 h-24 mx-auto flex items-center justify-center border-2" style="border-color: var(--c-accent);">
                                <svg class="w-12 h-12" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.5 4.5 0 017.5 14.5h8.25a4.5 4.5 0 01.436-6.317A4.5 4.5 0 017.5 8.5H6.75a4.5 4.5 0 01-1.314 5.183z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <p class="text-sm"><strong>Principe :</strong> Chaque mois, le mécanicien qui a le mieux rempli les fiches d'intervention et le mieux rangé son poste de travail est élu "Pro de la Passe" par le chef d'atelier.</p>
                            <ul class="list-disc pl-5 mt-2 text-sm">
                                <li><strong>Objectif :</strong> Améliorer la qualité de la communication et la propreté au sein de l'atelier.</li>
                                <li><strong>Récompense :</strong> Un bon pour un repas, la possibilité de choisir sa prochaine formation en priorité...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`,
  },
  outil_cooptation: {
    title: "Outil : Le Nouveau Programme Ambassadeur",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-2xl font-bold" style="color: var(--c-primary);">Devenez notre meilleur Ambassadeur !</h3>
                    <p class="text-md" style="color: var(--c-secondary);">Cooptez des talents, cumulez des points, choisissez votre récompense.</p>
                </div>
                
                <div class="mt-6 text-center">
                    <p>Qui mieux que vous connaît les exigences de nos métiers et les valeurs de notre entreprise ? Aidez-nous à recruter nos futurs collègues et soyez récompensé pour votre engagement !</p>
                </div>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border">
                        <h4 class="font-bold text-lg" style="color: var(--c-primary);">Comment ça marche ?</h4>
                        <p class="text-sm mt-2">C'est simple : la personne que vous recommandez doit <strong>mentionner votre nom</strong> lors de sa candidature. Vous pouvez aussi transmettre son CV directement à [Nom du contact RH/Dirigeant].</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border">
                         <h4 class="font-bold text-lg" style="color: var(--c-primary);">Le Système de Points</h4>
                         <p class="text-sm mt-2">Chaque cooptation validée vous rapporte des points que vous pouvez cumuler toute l'année :</p>
                         <ul class="list-disc pl-5 mt-2 text-sm">
                            <li><strong>+1 point</strong> par candidat qui passe un entretien.</li>
                            <li><strong>+3 points</strong> par candidat embauché qui valide sa période d'essai.</li>
                         </ul>
                    </div>
                </div>

                <div class="mt-6 text-center bg-red-50 p-4 rounded-lg border-2 border-dashed" style="border-color: var(--c-accent);">
                     <h4 class="font-bold text-xl mb-4" style="color: var(--c-primary);">🎁 Le Catalogue des Récompenses 🎁</h4>
                     <div class="text-left space-y-3">
                        <p><strong>Dès 4 points :</strong> Un bon d'achat de 100€ OU 2 places de cinéma.</p>
                        <p><strong>Dès 8 points :</strong> Une journée de congé supplémentaire OU un casque audio sans fil.</p>
                        <p><strong>Dès 12 points :</strong> Un week-end pour deux personnes (valeur 400€) OU une prime exceptionnelle de 300€.</p>
                     </div>
                </div>

                 <p class="text-xs italic text-gray-500 mt-6 text-center">Ce programme est un geste de confiance et de remerciement pour votre engagement à nos côtés. N'hésitez pas à en parler autour de vous !</p>
            </div>`,
  },
  outil_atelier_valeurs: {
    title: "Outil Prêt à l'Emploi : Animer votre Atelier 'Valeurs'",
    content: `<div class="prose max-w-none">
                <p class="text-md">Cet atelier collaboratif d'une heure est conçu pour faire émerger de manière simple et authentique les <strong>3 à 5 valeurs fondamentales</strong> qui définissent votre culture d'entreprise. C'est la première brique essentielle pour construire une marque employeur solide.</p>
                
                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold mb-4" style="color: var(--c-primary);">Avant de commencer</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div class="flex items-center">
                                <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <h5 class="font-semibold ml-2">Participants</h5>
                            </div>
                            <p class="text-sm mt-1">Un groupe représentatif de 5 à 8 collaborateurs (conducteurs, mécaniciens, administratifs, anciens, nouveaux...). La diversité des profils est la clé de la réussite.</p>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                <h5 class="font-semibold ml-2">Matériel</h5>
                            </div>
                            <p class="text-sm mt-1">Un tableau blanc ou un paperboard, des post-its de différentes couleurs, des feutres, et des gommettes pour le vote.</p>
                        </div>
                    </div>
                </div>

                <h4 class="font-bold mt-6 mb-4" style="color: var(--c-primary);">Le Déroulé Pas à Pas (1 heure)</h4>
                <ol class="list-decimal pl-5 space-y-4">
                    <li>
                        <strong>Introduction & Brainstorming Individuel (10 min)</strong><br>
                        <span class="text-sm">Expliquez l'objectif : "Aujourd'hui, on ne cherche pas des valeurs marketing, mais les mots qui décrivent le mieux 'comment on travaille ensemble ici'". Ensuite, chaque participant écrit silencieusement sur des post-its les mots qui lui viennent à l'esprit (un mot ou une idée par post-it).</span>
                    </li>
                    <li>
                        <strong>Mise en Commun et Regroupement (20 min)</strong><br>
                        <span class="text-sm">Chacun son tour, un participant vient coller un post-it au tableau en l'expliquant brièvement. En tant qu'animateur, votre rôle est de regrouper au fur et à mesure les post-its similaires par thèmes (ex: "entraide", "solidarité", "coup de main" sont regroupés sous un thème que vous pourriez appeler 'ESPRIT D'ÉQUIPE').</span>
                    </li>
                    <li>
                        <strong>Vote et Sélection (15 min)</strong><br>
                        <span class="text-sm">Une fois tous les thèmes identifiés, donnez 3 gommettes à chaque participant. Chacun doit les répartir sur les 3 thèmes qui lui semblent les plus importants et représentatifs de l'entreprise. Ils peuvent mettre leurs 3 gommettes sur un seul thème s'ils le souhaitent.</span>
                    </li>
                    <li>
                        <strong>Définition et Finalisation (15 min)</strong><br>
                        <span class="text-sm">Les 3 à 5 thèmes ayant reçu le plus de votes deviennent vos valeurs. Pour chaque valeur, animez une discussion rapide pour la définir en une phrase concrète. Exemple : pour 'PROXIMITÉ', la définition pourrait être : "Chez nous, la porte du bureau est toujours ouverte et on se dit les choses simplement."</span>
                    </li>
                </ol>

                <h4 class="font-bold mt-6 mb-4" style="color: var(--c-primary);">Et après ?</h4>
                <p>Ces valeurs ne doivent pas rester sur le papier ! Utilisez-les pour enrichir vos offres d'emploi, votre page carrière, votre livret d'accueil et comme grille de lecture lors de vos entretiens pour évaluer l'adéquation culturelle des candidats.</p>

                 <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800 mt-6">
                    <h4 class="font-bold">Conseils de Pro pour l'Animateur</h4>
                    <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li><strong>Votre rôle est de faciliter, pas d'influencer.</strong> Ne donnez pas votre avis et assurez-vous que tout le monde s'exprime.</li>
                        <li><strong>Mettez vos collaborateurs à l'aise.</strong> Un café et une ambiance conviviale sont essentiels.</li>
                        <li><strong>Prenez une photo du tableau à la fin !</strong> C'est le meilleur compte-rendu que vous puissiez avoir.</li>
                    </ul>
                </div>

            </div>`,
  },

  outil_swot: {
    title: "Outil : Audit de vos Pratiques RH (Matrice SWOT)",
    content: `<div class="prose max-w-none">
                <p>La matrice SWOT (Forces, Faiblesses, Opportunités, Menaces) est un outil simple et puissant pour réaliser un diagnostic de votre situation actuelle. Prenez le temps de remplir chaque case pour obtenir une vision claire de vos priorités.</p>
                
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <!-- FORCES -->
                    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 class="font-bold text-lg text-green-800">✅ Forces (Strengths)</h4>
                        <p class="text-xs italic text-green-700">Vos atouts internes actuels, ce que vous faites bien.</p>
                        <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li><strong>Exemple :</strong> Culture d'entreprise familiale et de proximité.</li>
                            <li><strong>Exemple :</strong> Faible turnover sur les postes clés.</li>
                            <li><strong>Exemple :</strong> Bonne réputation locale.</li>
                            <li><strong>Exemple :</strong> Salariés très engagés et polyvalents.</li>
                        </ul>
                    </div>

                    <!-- FAIBLESSES -->
                    <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h4 class="font-bold text-lg text-red-800">⚠️ Faiblesses (Weaknesses)</h4>
                        <p class="text-xs italic text-red-700">Vos points faibles internes, ce qui peut être amélioré.</p>
                         <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li><strong>Exemple :</strong> Processus d'intégration non formalisé.</li>
                            <li><strong>Exemple :</strong> Peu ou pas de communication sur les réseaux sociaux.</li>
                            <li><strong>Exemple :</strong> Parcours d'évolution de carrière peu clairs.</li>
                            <li><strong>Exemple :</strong> Dépendance forte à quelques salariés expérimentés.</li>
                        </ul>
                    </div>

                    <!-- OPPORTUNITÉS -->
                    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 class="font-bold text-lg text-blue-800">🚀 Opportunités (Opportunities)</h4>
                        <p class="text-xs italic text-blue-700">Les facteurs externes positifs que vous pourriez exploiter.</p>
                         <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li><strong>Exemple :</strong> Nouveaux dispositifs de financement de la formation (OPCO).</li>
                            <li><strong>Exemple :</strong> Partenariat possible avec le lycée professionnel local.</li>
                            <li><strong>Exemple :</strong> Demande croissante pour le transport durable.</li>
                            <li><strong>Exemple :</strong> Arrivée de nouveaux habitants dans la région.</li>
                        </ul>
                    </div>

                    <!-- MENACES -->
                    <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                        <h4 class="font-bold text-lg text-yellow-800">⚡ Menaces (Threats)</h4>
                        <p class="text-xs italic text-yellow-700">Les facteurs externes qui pourraient nuire à votre entreprise.</p>
                        <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                            <li><strong>Exemple :</strong> Pénurie de conducteurs qualifiés sur le marché.</li>
                            <li><strong>Exemple :</strong> Installation d'un concurrent majeur à proximité.</li>
                            <li><strong>Exemple :</strong> Augmentation du coût du carburant.</li>
                            <li><strong>Exemple :</strong> Évolution de la réglementation sociale.</li>
                        </ul>
                    </div>

                </div>
            </div>`,
  },
  outil_prise_references: {
    title: "Outil : Trame de Prise de Références (Conforme RGPD)",
    content: `<div class="prose max-w-none">
                <div class="p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-800">
                    <h4 class="font-bold">Rappel Légal Important</h4>
                    <p class="text-sm">Avant de lancer cet appel, vous devez avoir obtenu l'accord explicite du candidat. Les questions doivent uniquement porter sur ses compétences professionnelles en lien direct avec le poste proposé.</p>
                </div>

                <h4 class="mt-6 mb-2" style="color: var(--c-primary);">Script d'Appel</h4>
                <hr>

                <h5 class="font-bold mt-4">1. Introduction et Vérification</h5>
                <p><em>« Bonjour, je suis [Votre Nom] de l'entreprise [Votre Entreprise]. Je vous contacte concernant [Nom du Candidat], qui a postulé chez nous pour un poste de conducteur et nous a transmis vos coordonnées pour une référence professionnelle. Est-ce que vous avez quelques minutes à m'accorder ? »</em></p>
                
                <h5 class="font-bold mt-4">2. Questions sur le Contexte Professionnel</h5>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Pouvez-vous me confirmer les dates durant lesquelles [Nom du Candidat] a travaillé au sein de votre entreprise et quel était son intitulé de poste exact ?</li>
                    <li>Quelles étaient ses missions et responsabilités principales au quotidien ?</li>
                </ul>

                <h5 class="font-bold mt-4">3. Questions sur les Compétences et le Comportement</h5>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Comment évalueriez-vous sa ponctualité et sa fiabilité ?</li>
                    <li>Concernant la sécurité, le considériez-vous comme quelqu'un de rigoureux et respectueux des procédures ?</li>
                    <li>Comment décririez-vous sa relation avec les clients/passagers et avec ses collègues ?</li>
                    <li>Face à un imprévu (panne, retard, client difficile), comment réagissait-il/elle en général ?</li>
                </ul>

                <h5 class="font-bold mt-4">4. Conclusion</h5>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Pour quelle raison [Nom du Candidat] a-t-il/elle quitté votre entreprise ? <em>(Note : la personne contactée a le droit de ne pas répondre à cette question).</em></li>
                    <li>Pour conclure, sur la base de votre collaboration, quels seraient selon vous ses points forts principaux pour un poste de conducteur ?</li>
                </ul>

                <p class="mt-6"><em>« Je vous remercie beaucoup pour le temps que vous m'avez accordé et pour votre transparence. »</em></p>
            </div>`,
  },

  outil_storytelling_atelier: {
    title: "Outil : Atelier Storytelling pour Créer un Récit Authentique",
    content: `<div id="storytelling-content-to-export" class="prose max-w-none">
                <p>Un bon récit vaut mieux qu'une longue liste d'avantages. Cet atelier est conçu pour vous aider à transformer un parcours collaborateur en une histoire authentique et inspirante, capable de marquer les esprits de vos futurs candidats.</p>
                
                <h3 class="font-bold text-xl mt-8" style="color: var(--c-primary);">Étape 1 : Choisissez votre héros et son histoire</h3>
                <p>Commencez par identifier une histoire qui incarne les valeurs de votre entreprise. Voici trois archétypes puissants :</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div class="idea-card p-4 rounded-lg text-center">
                      <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2">La Reconversion</h4>
                      <p class="text-sm">Le parcours d'une personne venue d'un autre secteur, qui a trouvé sa voie et s'épanouit chez vous.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2">L'Évolution Interne</h4>
                      <p class="text-sm">L'histoire d'un collaborateur qui a gravi les échelons grâce à la formation et à la confiance que vous lui avez accordée.</p>
                  </div>
                  <div class="idea-card p-4 rounded-lg text-center">
                       <div class="flex-shrink-0 bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <svg class="w-8 h-8" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                      </div>
                      <h4 class="font-bold text-md mb-2">L'Apprentissage</h4>
                      <p class="text-sm">Le parcours d'un jeune alternant qui a grandi avec l'entreprise et qui en est aujourd'hui un pilier.</p>
                  </div>
                </div>

                <h3 class="font-bold text-xl mt-8" style="color: var(--c-primary);">Étape 2 : Structurez votre récit en 4 actes</h3>
                <p>Pour qu'une histoire soit captivante, elle doit suivre une structure simple. Voici un canevas universel :</p>
                <div class="mt-6 space-y-4">
                    <div class="idea-card p-4 rounded-lg"><strong>1. La Situation Initiale (L'accroche) :</strong> Qui était votre héros avant ? Quel était son défi ?<br><em class="text-sm">Ex: "Il y a 3 ans, Marc était conducteur scolaire. Passionné de mécanique, il sentait qu'il pouvait apporter plus."</em></div>
                    <div class="idea-card p-4 rounded-lg"><strong>2. L'Opportunité (Le tournant) :</strong> Quelle opportunité s'est présentée ? Quelle a été la décision ?<br><em class="text-sm">Ex: "Quand un poste s'est libéré à l'atelier, nous lui avons proposé de se former en interne pour évoluer."</em></div>
                    <div class="idea-card p-4 rounded-lg"><strong>3. Le Parcours (Le développement) :</strong> Comment l'avez-vous accompagné (formation, tutorat) ? Quels défis a-t-il surmontés ?<br><em class="text-sm">Ex: "Accompagné par notre chef d'atelier, il a suivi une formation qualifiante et a mis toute son énergie pour apprendre ce nouveau métier."</em></div>
                    <div class="idea-card p-4 rounded-lg"><strong>4. La Transformation (Le résultat) :</strong> Qui est-il aujourd'hui ? Quel est le bénéfice pour lui et pour l'entreprise ?<br><em class="text-sm">Ex: "Aujourd'hui, Marc est un mécanicien confirmé, et sa double connaissance du terrain et de la technique est un atout immense pour toute l'équipe."</em></div>
                </div>

                <h3 class="font-bold text-xl mt-8" style="color: var(--c-primary);">Étape 3 : Mettez votre histoire en scène</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div class="bg-gray-50 p-4 rounded-lg border">
                      <h4 class="font-bold mb-2">Format Vidéo : Storyboard en 5 plans</h4>
                      <p class="text-sm">Une vidéo courte (1 min 30) est idéale. Pas besoin de gros moyens, un smartphone récent suffit.</p>
                      <ul class="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li><strong>Plan 1 :</strong> Interview du collaborateur (face caméra).</li>
                          <li><strong>Plan 2 :</strong> Le collaborateur en action (au volant, à l'atelier...).</li>
                          <li><strong>Plan 3 :</strong> Interaction avec un collègue ou un tuteur.</li>
                          <li><strong>Plan 4 :</strong> Gros plan sur un détail de son travail (ses mains, un outil...).</li>
                          <li><strong>Plan 5 :</strong> Plan final souriant, regardant vers l'avenir.</li>
                      </ul>
                  </div>
                   <div class="bg-gray-50 p-4 rounded-lg border">
                      <h4 class="font-bold mb-2">Format Écrit : Modèle de Récit</h4>
                      <p class="text-sm">Parfait pour votre site carrière ou un post LinkedIn. Remplissez les trous !</p>
                      <div class="p-3 mt-2 bg-white rounded-md border text-sm italic">
                        <p><strong>[Prénom] a rejoint [Nom Entreprise] il y a [X] ans comme [Poste initial].</strong> Rapidement, nous avons décelé chez lui/elle [Qualité 1] et [Qualité 2]. C'est pourquoi, lorsque l'opportunité de [Opportunité] s'est présentée, nous lui avons proposé de l'accompagner.</p>
                        <p class="mt-2">Aujourd'hui, après avoir [Action de formation], il/elle occupe le poste de [Nouveau poste] et [Bénéfice pour l'entreprise].</p>
                        <p class="mt-2 font-semibold not-italic">Son parcours est la preuve que chez nous, les talents ont toute la place pour grandir.</p>
                      </div>
                  </div>
                </div>
            </div>`,
  },

  outil_pve_builder: {
    title: "Définir votre Proposition de Valeur Employeur (PVE)",
    content: `<div class="prose max-w-none">
                <p>La Proposition de Valeur Employeur (PVE) est le cœur de votre marque employeur. C'est l'ensemble unique des avantages et des expériences que vous offrez à vos collaborateurs en échange de leurs compétences et de leur engagement.</p>
                
                <div class="p-4 my-6 rounded-lg bg-gray-50 border-l-4" style="border-color: var(--c-accent);">
                    <p class="font-semibold text-lg" style="color: var(--c-primary);">En bref, votre PVE répond à une question essentielle :</p>
                    <p class="italic text-md" style="color: var(--c-secondary);">« Pourquoi un talent devrait-il rejoindre notre entreprise plutôt qu'une autre, et surtout, pourquoi devrait-il y rester ? »</p>
                </div>

                <h3 class="font-bold text-xl mt-8" style="color: var(--c-primary);">Les 5 Piliers d'une PVE Complète</h3>
                <p>Une PVE solide s'articule autour de cinq thématiques clés. Identifiez vos points forts dans chaque catégorie pour construire une promesse authentique.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <!-- Pilier 1 -->
                                        <div class="idea-card p-4 rounded-lg">
                                            <div class="flex items-center gap-4">
                                                <div class="icon-circle bg-red-100">
                          <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 16v-1m0 1v.01M12 16c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </div>
                                                <div><h4 class="font-bold text-md">Rémunération & Avantages</h4><p class="text-sm">Salaires, primes, 13ème mois, mutuelle, titres-restaurant, chèques-vacances...</p></div>
                                            </div>
                                        </div>
                    <!-- Pilier 2 -->
                                        <div class="idea-card p-4 rounded-lg">
                                            <div class="flex items-center gap-4">
                                                <div class="icon-circle bg-red-100">
                          <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                </div>
                                                <div><h4 class="font-bold text-md">Carrière & Développement</h4><p class="text-sm">Opportunités de formation, perspectives d'évolution, mobilité interne, tutorat...</p></div>
                                            </div>
                                        </div>
                    <!-- Pilier 3 -->
                                        <div class="idea-card p-4 rounded-lg">
                                            <div class="flex items-center gap-4">
                                                <div class="icon-circle bg-red-100">
                          <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                </div>
                                                <div><h4 class="font-bold text-md">Culture & Environnement</h4><p class="text-sm">Ambiance de travail, valeurs, management de proximité, communication, convivialité...</p></div>
                                            </div>
                                        </div>
                     <!-- Pilier 4 -->
                                        <div class="idea-card p-4 rounded-lg">
                                            <div class="flex items-center gap-4">
                                                <div class="icon-circle bg-red-100">
                          <svg class="w-6 h-6" style="color: var(--c-accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </div>
                                                <div><h4 class="font-bold text-md">Équilibre & Bien-être</h4><p class="text-sm">Qualité des plannings, flexibilité, confort des véhicules, qualité des locaux, sécurité...</p></div>
                                            </div>
                                        </div>
                </div>

                <h3 class="font-bold text-xl mt-8" style="color: var(--c-primary);">Comment Définir votre PVE en 3 Étapes</h3>
                <div class="relative border-l-2 border-dashed ml-4 mt-6 space-y-8" style="border-color: var(--c-accent-light);">
                    <!-- Étape 1 -->
                    <div class="ml-8">
                        <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">1</div>
                        <h4 class="font-bold text-lg">Diagnostiquer</h4>
                        <p class="text-sm mt-1">Identifiez vos forces réelles. Ne cherchez pas à deviner ! Organisez un atelier avec vos collaborateurs, menez des entretiens, analysez les raisons de départ mais aussi (et surtout) pourquoi vos meilleurs talents restent.</p>
                    </div>
                     <!-- Étape 2 -->
                    <div class="ml-8">
                        <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">2</div>
                        <h4 class="font-bold text-lg">Formaliser</h4>
                        <p class="text-sm mt-1">Rédigez une promesse claire et concise (3 à 5 phrases). Elle doit être authentique, différenciante et répondre aux attentes de vos candidats cibles. Mettez en avant ce qui vous rend unique.</p>
                    </div>
                     <!-- Étape 3 -->
                    <div class="ml-8">
                        <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold" style="background-color: var(--c-accent);">3</div>
                        <h4 class="font-bold text-lg">Diffuser</h4>
                        <p class="text-sm mt-1">Votre PVE doit vivre partout ! Infusez-la dans vos offres d'emploi, sur votre site carrière, dans vos messages sur les réseaux sociaux et dans le discours de vos managers lors des entretiens.</p>
                    </div>
                </div>

                <div class="p-4 mt-8 rounded-lg bg-gray-50 border">
                    <h4 class="font-bold text-lg mb-2" style="color: var(--c-primary);">Exemple Concret de PVE</h4>
                    <p class="text-sm italic">"Rejoindre les Transports Martin, c'est intégrer une PME familiale où la solidarité n'est pas qu'un mot. Nous offrons des plannings stables et des véhicules récents pour garantir votre confort et votre sécurité. Chez nous, votre montée en compétences est une priorité, avec des formations régulières et de vraies perspectives d'évolution vers le tourisme ou l'exploitation."</p>
             </div>
            </div>`,
  },

  outil_parcours_evolution: {
    title: "Outil : Visualiser un Parcours d'Évolution de Carrière",
    content: `<div class="prose max-w-none">
                <p>Pour lutter contre l'idée d'un "métier sans avenir", il est essentiel de rendre les perspectives de carrière tangibles. Voici un exemple visuel du parcours d'évolution possible pour un conducteur, un outil puissant à partager lors de vos entretiens professionnels ou de recrutement.</p>

                <div class="p-4 rounded-lg bg-gray-50 border mt-6">
                    <h4 class="font-bold text-center text-lg" style="color: var(--c-primary);">Exemple de Parcours pour un Conducteur / une Conductrice</h4>
                    
                    <div class="text-center mt-4">
                        <div class="inline-block p-3 bg-white border-2 rounded-lg shadow-sm">
                            <p class="font-semibold">POSTE DE DÉPART</p>
                            <p class="text-sm">Conducteur/trice scolaire</p>
                        </div>
                        <div class="text-center text-gray-400">▼</div>
                    </div>

                    <div class="text-center text-gray-400 font-semibold">ÉVOLUTIONS POSSIBLES APRÈS 2-3 ANS</div>
                    <div class="grid grid-cols-3 gap-2 mt-2 text-center">
                        <div class="border-t-2 pt-2" style="border-color: var(--c-accent);">
                             <div class="inline-block p-3 bg-white border-2 rounded-lg shadow-sm">
                                <p class="font-semibold">VERS L'EXPERTISE</p>
                                <p class="text-sm">Conducteur de Tourisme</p>
                            </div>
                        </div>
                        <div class="border-t-2 pt-2" style="border-color: var(--c-primary);">
                             <div class="inline-block p-3 bg-white border-2 rounded-lg shadow-sm">
                                <p class="font-semibold">VERS LA TRANSMISSION</p>
                                <p class="text-sm">Conducteur-Tuteur</p>
                            </div>
                        </div>
                        <div class="border-t-2 pt-2" style="border-color: var(--c-secondary);">
                            <div class="inline-block p-3 bg-white border-2 rounded-lg shadow-sm">
                                <p class="font-semibold">VERS L'EXPLOITATION</p>
                                <p class="text-sm">Agent de Planning</p>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-2 mt-2 text-center">
                        <div class="text-gray-400">▼</div>
                        <div class="text-gray-400">▼</div>
                        <div class="text-gray-400">▼</div>
                     </div>
                     <div class="grid grid-cols-3 gap-2 mt-2 text-center">
                        <div>
                            <div class="inline-block p-2 bg-white border rounded-lg shadow-sm">
                                <p class="text-xs font-semibold">Conducteur Grand Tourisme</p>
                            </div>
                        </div>
                         <div>
                            <div class="inline-block p-2 bg-white border rounded-lg shadow-sm">
                                <p class="text-xs font-semibold">Formateur Interne</p>
                            </div>
                        </div>
                         <div>
                            <div class="inline-block p-2 bg-white border rounded-lg shadow-sm">
                                <p class="text-xs font-semibold">Responsable d'Exploitation</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>`,
  },
  outil_cv_inverse: {
    title: "Outil : Créer un CV Inversé percutant",
    content: `<div class="prose max-w-none">
                <p>Le CV Inversé change les règles du jeu : au lieu d'attendre les candidatures, c'est l'entreprise qui se présente pour séduire les talents. C'est un outil puissant pour vous démarquer et toucher des profils qui ne sont pas en recherche active.</p>
                
                <div class="sub-nav-container mt-8 mb-0">
                    <button class="sub-nav-button active" data-target="pane-cv-example">🖼️ L'Exemple en Action</button>
                    <button class="sub-nav-button" data-target="pane-cv-guide">📝 Le Guide Pas à Pas</button>
                </div>

                <div id="pane-cv-example" class="sub-content-pane !pt-0">
                    <div id="cv-inverse-example-export" class="p-6 bg-white border rounded-b-lg">
                        <div class="text-center pb-4 border-b">
                            <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                            <h3 class="text-xl font-bold" style="color: var(--c-primary);">Nous recrutons un(e) Conducteur/trice Scolaire (H/F)</h3>
                            <p class="text-md" style="color: var(--c-secondary);">Et si c'était vous ?</p>
                        </div>
                        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div class="md:col-span-2 space-y-4">
                                <div>
                                    <h4 class="font-bold text-md mb-1" style="color: var(--c-primary);">NOTRE PROFIL</h4>
                                    <p>PME familiale depuis 30 ans, nous sommes fiers de notre rôle essentiel dans la vie locale. Notre culture est basée sur la proximité, l'entraide et la confiance.</p>
                                </div>
                                <div>
                                    <h4 class="font-bold text-md mb-1" style="color: var(--c-primary);">VOS FUTURES MISSIONS</h4>
                                    <p>Plus qu'un simple transport, vous serez le garant de la sécurité et du bien-être des enfants de notre commune. Un rôle clé qui a du sens.</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-bold text-md mb-1" style="color: var(--c-primary);">CONTACT</h4>
                                    <p><strong>Prêt(e) à nous rencontrer ?</strong><br>Pas besoin de CV !<br>Appelez directement [Nom] au [Numéro] ou flashez ce code :</p>
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=tel:[0156026262]" alt="QR Code pour appeler" class="mt-2" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 bg-gray-50 p-4 rounded-lg">
                             <h4 class="font-bold text-md mb-2 text-center" style="color: var(--c-primary);">NOS COMPÉTENCES (Ce que nous vous offrons)</h4>
                             <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> Un CDI à temps partiel (20h/semaine)</li>
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> Des horaires fixes uniquement en période scolaire</li>
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> Un 13ème mois et une mutuelle de qualité</li>
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> Des véhicules récents et bien entretenus</li>
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> Une ambiance de travail solidaire et respectueuse</li>
                                <li class="flex items-start"><span class="mr-2 text-accent" style="color: var(--c-accent);">✔</span> La fierté d'un métier utile à la communauté</li>
                             </ul>
                        </div>
                    </div>
                </div>

                <div id="pane-cv-guide" class="sub-content-pane !pt-0 hidden">
                    <div id="cv-inverse-guide-export" class="p-6 bg-white border rounded-b-lg">
                        <h3 class="text-xl font-bold text-center mb-4" style="color: var(--c-primary);">Guide Rapide : Créer votre CV Inversé</h3>
                        <div class="space-y-4">
                            <div class="idea-card p-4"><strong>Étape 1 : Définissez votre Cible.</strong> À qui parlez-vous ? Un retraité cherchant un complément ? Un parent au foyer ? Adaptez votre message à leurs attentes (ex: "horaires compatibles", "complément de revenus stable").</div>
                            <div class="idea-card p-4"><strong>Étape 2 : Mettez en avant vos 3 atouts clés.</strong> Ne listez pas tout. Choisissez les 3 avantages les plus forts de votre PVE (ex: Stabilité du CDI, Ambiance familiale, Horaires fixes). C'est votre "accroche".</div>
                            <div class="idea-card p-4"><strong>Étape 3 : Simplifiez le contact au maximum.</strong> L'objectif est de lever tous les freins. Oubliez le CV et la lettre de motivation. Proposez un simple appel téléphonique, un passage au dépôt, ou un QR code qui compose le numéro.</div>
                            <div class="idea-card p-4"><strong>Étape 4 : Soignez le visuel.</strong> Utilisez un format A5 ou A6 facile à distribuer. Intégrez votre logo, une photo de vos véhicules ou de votre équipe. L'objectif : avoir l'air professionnel et accessible.</div>
                        </div>
                    </div>
                </div>
            </div>`,
  },
  outil_newsletter: {
    title: "Outil : Modèle de Newsletter Interne Simple",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg">
                <div class="text-center border-b pb-4">
                    <h3 class="text-2xl font-bold" style="color: var(--c-primary);">La Lettre de [Nom de l'entreprise]</h3>
                    <p class="text-sm" style="color: var(--c-secondary);">[Mois Année]</p>
                </div>

                <div class="mt-6">
                    <h4 class="font-bold text-lg" style="color: var(--c-primary);">Le Mot du Dirigeant</h4>
                    <p class="text-sm italic border-l-4 pl-3" style="border-color: var(--c-accent-light);">« Un grand merci à tous pour votre mobilisation durant le pic d'activité de la rentrée scolaire. Grâce à votre professionnalisme, tout s'est déroulé parfaitement. Ce mois-ci, nous accueillons... »</p>
                </div>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg border">
                        <h4 class="font-bold text-lg" style="color: var(--c-primary);">Le Bravo du Mois ! 👏</h4>
                        <p class="text-sm mt-2">« Un grand bravo à <strong>Sylvie</strong> pour son initiative ! Elle a reçu une lettre de remerciement d'une famille pour avoir aidé leur enfant qui avait oublié son sac dans le car. C'est cet esprit de service qui fait notre fierté ! »</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border">
                         <h4 class="font-bold text-lg" style="color: var(--c-primary);">L'Info Sécurité 🛡️</h4>
                         <p class="text-sm mt-2">« Avec l'arrivée de l'automne, la visibilité baisse. N'oubliez pas de vérifier l'ensemble de vos feux avant chaque départ. La sécurité est l'affaire de tous ! »</p>
                    </div>
                </div>

                <div class="mt-6 text-center bg-white p-4 rounded-lg border">
                     <h4 class="font-bold text-lg" style="color: var(--c-primary);">L'Agenda & les Anniversaires 🎂</h4>
                     <p class="text-sm mt-2"><strong>À venir :</strong> Notre repas de fin d'année aura lieu le [Date]. Plus d'infos à suivre !<br>
                     <strong>Joyeux anniversaire ce mois-ci à :</strong> [Prénom Nom], [Prénom Nom] et [Prénom Nom] !</p>
                </div>
            </div>`,
  },
  outil_entretien_fidelisation: {
    title: "Outil : Guide pour l'Entretien de Fidélisation (Stay Interview)",
    content: `<div class="prose max-w-none">
                                <h3>Objectif : Comprendre ce qui motive vos collaborateurs à rester et identifier de manière proactive les points de friction avant qu'ils ne mènent à un départ.</h3>
                                <p><strong>Quand et comment?</strong> Menez ces entretiens 1 à 2 fois par an, en dehors des périodes d'évaluation. C'est un échange formel mais bienveillant. Partagez les questions en amont.</p>
                                <hr class="my-4">
                                <h4>Questions Clés Universelles</h4>
                                <ol class="list-decimal pl-5 space-y-2">
                                    <li>Qu'est-ce qui vous plaît le plus dans votre travail au quotidien ? Qu'est-ce qui vous donne de l'énergie le matin ?</li>
                                    <li>Quand avez-vous pensé pour la dernière fois à quitter l'entreprise ? Qu'est-ce qui a provoqué cette pensée ?</li>
                                    <li>Qu'est-ce qui vous a finalement fait rester ?</li>
                                    <li>Si vous aviez une baguette magique, quelle est LA chose que vous changeriez dans votre poste ou dans l'entreprise ?</li>
                                    <li>Comment décririez-vous la collaboration avec le reste de l'équipe ?</li>
                                    <li>Vous sentez-vous reconnu(e) pour votre travail ? Comment pourrions-nous mieux reconnaître votre contribution ?</li>
                                    <li>De quoi avez-vous besoin de ma part pour mieux réussir dans vos missions ?</li>
                                </ol>
                                <h4 class="mt-4">Questions Spécifiques par Métier</h4>
                                <ul class="list-disc pl-5 space-y-2">
                                    <li><strong>Pour un conducteur :</strong> «&nbsp;Qu'est-ce qui rend une journée de conduite agréable pour vous?&nbsp;», «&nbsp;Si vous pouviez améliorer une chose sur vos tournées ou dans votre véhicule, que serait-ce?&nbsp;»</li>
                                    <li><strong>Pour un mécanicien :</strong> «&nbsp;Disposez-vous des outils et des formations nécessaires pour travailler efficacement et en sécurité?&nbsp;», «&nbsp;Quel type de nouvelle technologie aimeriez-vous explorer?&nbsp;»</li>
                                    <li><strong>Pour un administratif :</strong> «&nbsp;Quelles sont les tâches qui vous donnent le plus d'énergie?&nbsp;», «&nbsp;Comment pourrions-nous améliorer la collaboration avec les autres services?&nbsp;»</li>
                                </ul>
                            </div>`,
  },
  outil_plan_passation: {
    title: "Outil : Modèle de Plan de Passation des Connaissances",
    content: `<div class="prose max-w-none bg-gray-50 p-6 rounded-lg border">
                <div class="text-center pb-4 border-b">
                    <img src="https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png" alt="Logo de votre entreprise" class="mx-auto h-12 mb-4" />
                    <h3 class="text-xl font-bold" style="color: var(--c-primary);">Plan de Passation</h3>
                    <p class="text-sm mt-2"><strong>Collaborateur partant :</strong> _________________ <br><strong>Remplaçant / Référent :</strong> _________________</p>
                </div>
                
                <div class="mt-6">
                    <p class="text-sm italic">Ce document a pour but de sécuriser le transfert des compétences et des informations clés avant le départ. Il doit être rempli conjointement par le collaborateur partant et son manager.</p>
                </div>

                <div class="overflow-x-auto mt-4">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="border p-2 w-1/3">Type de Connaissance</th>
                                <th class="border p-2 w-2/3">Éléments à Transférer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border p-2"><strong>1. Tâches & Missions Quotidiennes</strong></td>
                                <td class="border p-2"><div class="w-full h-16 border bg-white"></div></td>
                            </tr>
                             <tr>
                                <td class="border p-2"><strong>2. Outils & Logiciels</strong></td>
                                <td class="border p-2"><div class="w-full h-12 border bg-white"></div></td>
                            </tr>
                            <tr>
                                <td class="border p-2"><strong>3. Contacts Clés (internes/externes)</strong></td>
                                <td class="border p-2"><div class="w-full h-12 border bg-white"></div></td>
                            </tr>
                             <tr>
                                <td class="border p-2"><strong>4. "Les Secrets du Métier"</strong><br><em class="text-xs"> (procédures non écrites, astuces...)</em></td>
                                <td class="border p-2"><div class="w-full h-20 border bg-white"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`,
  },
  outil_checklist_depart: {
    title: "Outil : Checklist Administrative de Départ (Offboarding)",
    content: `<div class="prose max-w-none"><h3>Checklist de Départ - [Nom du Collaborateur]</h3><ul class="list-disc pl-5 space-y-2"><li><strong>Phase 1 : Préparation</strong><ul class="list-disc pl-5"><li>[ ] Annoncer le départ à l'équipe</li><li>[ ] Définir le plan de passation des connaissances</li><li>[ ] Planifier l'entretien de départ</li></ul></li><li class="mt-4"><strong>Phase 2 : Dernier Jour</strong><ul class="list-disc pl-5"><li>[ ] Mener l'entretien de départ</li><li>[ ] Organiser un pot de départ / geste de remerciement</li><li>[ ] Restitution du matériel par le salarié (ordinateur, téléphone, badge, véhicule, uniforme...)</li><li>[ ] Signature du solde de tout compte</li></ul></li><li class="mt-4"><strong>Phase 3 : Après le Départ</strong><ul class="list-disc pl-5"><li>[ ] Remise des documents de fin de contrat (certificat de travail, attestation France Travail)</li><li>[ ] Clôture des accès informatiques (emails, logiciels)</li><li>[ ] Informer l'organisme de mutuelle de la fin du contrat pour la portabilité</li><li>[ ] Proposer au salarié de rejoindre le réseau des anciens (Alumni)</li></ul></li></ul></div>`,
  },
};

export const companyLogos = [
  {
    name: "Barriere",
    url: "https://i.postimg.cc/DfL7V2HT/Capture-d-cran-2025-09-15-170700.png",
  },
  { name: "Berthelet", url: "https://i.postimg.cc/zB5b89rs/Berthelet.png" },
  {
    name: "Borini Chablais",
    url: "https://i.postimg.cc/GhSyG7FD/Borini-Chablais.png",
  },
  {
    name: "Borini Mont Blanc",
    url: "https://i.postimg.cc/63073Y6y/Borini-Mont-Blanc.png",
  },
  {
    name: "Chabannes",
    url: "https://www.autocars-chabannes.fr/wp-content/uploads/2020/05/cropped-AutocarsChabannes_logo_HD-2.jpg",
  },
  { name: "Chazot", url: "https://i.postimg.cc/MG1fkzh0/Chazot.png" },
  {
    name: "Color Group Experience",
    url: "https://i.postimg.cc/Vkx0HJHL/Color-Group-Experience.png",
  },
  { name: "Combrailles", url: "https://i.postimg.cc/kg6tcQsp/Combrailles.png" },
  { name: "Coudert", url: "https://i.postimg.cc/DfxJ3jYN/Coudert.png" },
  {
    name: "Courriers Rhodaniens",
    url: "https://i.postimg.cc/8PsFpR2z/Courriers-Rhodaniens.png",
  },
  {
    name: "Flouret Tourisme",
    url: "https://i.postimg.cc/3NxkDmW9/Flouret-Tourisme.png",
  },
  { name: "Fontanon", url: "https://i.postimg.cc/QxPFHBDk/Fontanon.png" },
  {
    name: "Gavot Tourisme",
    url: "https://i.postimg.cc/g0brHfnx/Gavot-Tourisme.png",
  },
  { name: "Jacquet", url: "https://i.postimg.cc/9MWMvZPV/Jacquet.png" },
  {
    name: "Lyon City Tour",
    url: "https://i.postimg.cc/nz0zZrTm/Lyon-City-Tour.png",
  },
  { name: "Meunier", url: "https://i.postimg.cc/Wzz44VfH/Meunier.png" },
  { name: "Migratour", url: "https://i.postimg.cc/jdGjRG6M/Migratour.png" },
  { name: "Perraud", url: "https://i.postimg.cc/0Q2ktxxy/Perraud.png" },
  { name: "SAT", url: "https://i.postimg.cc/L4QXbqJK/SAT.png" },
  { name: "Schmitt", url: "https://i.postimg.cc/KY7jqJMJ/Schmitt.png" },
  {
    name: "SEYT Auvergne",
    url: "https://i.postimg.cc/3xmxNnnY/SEYT-Auvergne.png",
  },
  { name: "Trans Alpes", url: "https://i.postimg.cc/g0KcqjC7/Trans-Alpes.png" },
  { name: "Trans Cove", url: "https://i.postimg.cc/x1zcH0Tr/Trans-Cove.png" },
  {
    name: "Vallee d Azergues",
    url: "https://i.postimg.cc/1zS5qwj6/Valle-e-d-Azergues.png",
  },
  { name: "Adria Cars", url: "https://i.postimg.cc/4xkXDpZM/Adria-Cars.png" },
  { name: "Bardy", url: "https://i.postimg.cc/d0Jw1vhj/Bardy.png" },
  {
    name: "Bluestation",
    url: "https://i.postimg.cc/j5hvNnCT/bluestationlogo.png",
  },
  {
    name: "Cars Moreau 77",
    url: "https://i.postimg.cc/Nj6QBLj0/Cars-Moreau-77.png",
  },
  { name: "Collard", url: "https://i.postimg.cc/NMzcpHpd/Collard.png" },
  {
    name: "Compagnie Sevigne",
    url: "https://i.postimg.cc/KYcjWtDb/Compagnie-S-vign.png",
  },
  {
    name: "Coutarel Voyages",
    url: "https://i.postimg.cc/3RRhXBCy/Coutarel-Voyages.png",
  },
  { name: "Darbier", url: "https://i.postimg.cc/DfSJFdky/Darbier.png" },
  { name: "Delafoy", url: "https://i.postimg.cc/pLHpDw9p/Delafoy.jpg" },
  {
    name: "Dominique",
    url: "https://i.postimg.cc/0QCVPKnq/Logo-Dominique-tourisme-cmjn-e1539877986415.png",
  },
  {
    name: "Gilbert James",
    url: "https://i.postimg.cc/wxntByg5/Gilbert-James.png",
  },
  { name: "Gonin", url: "https://i.postimg.cc/c6qNNNqY/Gonin.png" },
  { name: "LCP", url: "https://i.postimg.cc/Pr8tVSGY/LCP.png" },
  { name: "LGD Paris", url: "https://i.postimg.cc/FzSHSpNy/LGD-Paris.png" },
  {
    name: "Moventis",
    url: "https://i.postimg.cc/cHTBVy1x/Logo-Moventis-2048x382.png",
  },
  { name: "Nogent", url: "https://i.postimg.cc/bNbZSyw7/Nogent.jpg" },
  { name: "Schidler", url: "https://i.postimg.cc/cLB6TFYT/Schidler.webp" },
  { name: "Viabus", url: "https://i.postimg.cc/bvL8SMbc/Viabus.png" },
  { name: "Viaest", url: "https://i.postimg.cc/vBkmDkF8/Viaest.png" },
  {
    name: "Vincent Bobet",
    url: "https://i.postimg.cc/pd0rMysF/Vincent-Bobet.jpg",
  },
  {
    name: "Voyages Rouzeau",
    url: "https://i.postimg.cc/JnGnrmFd/Voyages-Rouzeau.png",
  },
  { name: "Abers", url: "https://i.postimg.cc/76nkrRHQ/Abers.png" },
  { name: "ADL", url: "https://i.postimg.cc/SNzMLLDt/ADL.png" },
  { name: "Aiglons", url: "https://i.postimg.cc/XYkmJ5Sp/Aiglons.jpg" },
  {
    name: "Alliance Tours",
    url: "https://i.postimg.cc/JnGb9f5R/Alliance-Tours.png",
  },
  {
    name: "Aquitaine Cars",
    url: "https://i.postimg.cc/DyWqj3y6/Aquitaine-Cars.png",
  },
  { name: "Archambault", url: "https://i.postimg.cc/hPHVNZXB/Archambault.png" },
  { name: "Arcoutel", url: "https://i.postimg.cc/sg75zPWZ/Arcoutel.png" },
  { name: "Arlaud", url: "https://i.postimg.cc/CMr2n0Qs/Arlaud.png" },
  { name: "ASO", url: "https://reunir.org/img/2023/07/autocar-sud-ouest.png" },
  { name: "ASTG", url: "https://i.postimg.cc/s2JSQVwj/ASTG.png" },
  { name: "Auran", url: "https://i.postimg.cc/0Q2S7LBp/Auran.jpg" },
  {
    name: "Auray Voyages",
    url: "https://i.postimg.cc/Dwp0t8jb/Auray-Voyages.png",
  },
  {
    name: "Autocars du Lot",
    url: "https://i.postimg.cc/Vkq0pfyq/Autocars-du-Lot.png",
  },
  {
    name: "Autocars du Sud Ouest",
    url: "https://reunir.org/img/2023/07/autocar-sud-ouest.png",
  },
  {
    name: "Autocars Vallee d Azur",
    url: "https://i.postimg.cc/SRHzFjNr/Autocars-Valle-e-d-Azur.jpg",
  },
  {
    name: "Autocars vallees nicoises",
    url: "https://i.postimg.cc/CxTfcZ2M/Autocars-valle-es-nic-oises.jpg",
  },
  {
    name: "Azur Pullman",
    url: "https://i.postimg.cc/xd9NSwYW/Azur-Pullman.png",
  },
  {
    name: "Barousse Transports",
    url: "https://i.postimg.cc/vm9y3Bpy/Barousse-Transports.png",
  },
  { name: "Bellier", url: "https://i.postimg.cc/nzgvZ33B/Bellier.png" },
  { name: "Bihan", url: "https://i.postimg.cc/D0G1z1ND/Bihan.png" },
  { name: "Boceno", url: "https://i.postimg.cc/0NZM5Vyr/Boc-no.png" },
  {
    name: "Bonnaffoux Bremond",
    url: "https://www.filmcotedazur.com/wp-content/uploads/2023/08/Bonnafoux-bremond-logo-768x274.png",
  },
  {
    name: "Bordeaux City Tours",
    url: "https://i.postimg.cc/q78f2F3M/Bordeaux-City-Tours.png",
  },
  {
    name: "Boubet",
    url: "https://le-de.cdn-website.com/c6905d7e245940a58ea63fe1fa976560/dms3rep/multi/opt/5dcd91557900004bdaed4115_os-dba5b5ff-640w.jpg",
  },
  { name: "Bouisse", url: "https://i.postimg.cc/Y9svYjgH/Bouisse.jpg" },
  { name: "BPV", url: "https://i.postimg.cc/J0CGPvT6/BPV.png" },
  {
    name: "Bus en ligne",
    url: "https://i.postimg.cc/d0gjzMSh/Capture-d-cran-2025-09-15-172511.png",
  },
  { name: "Cars Bleus", url: "https://i.postimg.cc/fTXvWhnL/Cars-Bleus.jpg" },
  {
    name: "Catteau Voyages",
    url: "https://i.postimg.cc/vZtL9Lmw/Catteau-Voyages.jpg",
  },
  { name: "Cav", url: "https://i.postimg.cc/zvTRN8bY/Cav.jpg" },
  { name: "Cottin", url: "https://i.postimg.cc/SKXRqk31/Cottin.jpg" },
  { name: "Crespel", url: "https://i.postimg.cc/9FGG5tZw/Crespel.png" },
  {
    name: "Darriot",
    url: "https://i.postimg.cc/wBF7mDDg/Capture-d-cran-2025-09-15-172954.png",
  },
  {
    name: "De Maillard Voyages",
    url: "https://i.postimg.cc/YCm8jsRR/logo-DE-MAILLARD.png",
  },
  { name: "Delbos", url: "https://i.postimg.cc/6TsTbSYb/Delbos.png" },
  { name: "Douaisiens", url: "https://i.postimg.cc/9Xwd1jfp/Douaisiens.png" },
  { name: "Dumont", url: "https://i.postimg.cc/sDFpN0QR/Dumont.png" },
  { name: "Durand", url: "https://i.postimg.cc/xdWC1BSf/Durand.png" },
  { name: "Elorn", url: "https://i.postimg.cc/zX5wKFgR/logo-elorn.png" },
  {
    name: "Farouault",
    url: "https://www.cars-farouault.com/wp-content/themes/theme_farouault/images/logo@2x.png",
  },
  { name: "Faure", url: "https://i.postimg.cc/C54LJ1n5/Faure.png" },
  { name: "Fiageo", url: "https://i.postimg.cc/mgB7bzyX/Fiageo.png" },
  {
    name: "Gougeul",
    url: "https://www.destination-metier.fr/sites/default/files/2023-08/gougeul_fr_depuis1961.jpg",
  },
  { name: "Grosbois", url: "https://i.postimg.cc/RZdKqSPM/Grosbois.png" },
  { name: "Guennec", url: "https://i.postimg.cc/BZFFHch7/Guennec.png" },
  { name: "Guilloux", url: "https://i.postimg.cc/kXn5GxLb/Guilloux.png" },
  { name: "Hascot", url: "https://i.postimg.cc/qqv9VMZz/Hasco-t.png" },
  { name: "Hiruak Bat", url: "https://i.postimg.cc/fTBR9Vhg/Hiruak-Bat.png" },
  {
    name: "Hommet",
    url: "https://www.hommetvoyages.com/wp-content/uploads/2020/01/HOMMET.png",
  },
  {
    name: "Ideabus",
    url: "https://i.postimg.cc/bJ4h4v1K/logo-ideabus-bus-et-cars.png",
  },
  { name: "Inglard", url: "https://i.postimg.cc/5yPW6FFB/Inglard.png" },
  {
    name: "Jezequel Mobilite",
    url: "https://i.postimg.cc/2Stj0gyQ/J-z-quel-Mobilit.png",
  },
  {
    name: "Jezequel Tourisme",
    url: "https://i.postimg.cc/R0nSyGJj/J-z-quel-Tourisme.png",
  },
  { name: "Junqua", url: "https://i.postimg.cc/bJTKB2g7/Junqua.png" },
  { name: "Kerjan", url: "https://i.postimg.cc/Xq1tVSTx/Kerjan.png" },
  { name: "LCB", url: "https://i.postimg.cc/fyMM3NqN/LCB.png" },
  { name: "LDT", url: "https://i.postimg.cc/gkSG01vC/LDT.png" },
  {
    name: "Le Basque Bondissant",
    url: "https://www.basque-bondissant.com/images/header/logo.jpg",
  },
  {
    name: "Le Bris",
    url: "https://le-de.cdn-website.com/3e4ee6370bea48f7a60f22983bbc401c/dms3rep/multi/opt/Le-Bris-voyages-pantone-640w.jpg",
  },
  {
    name: "Le Coeur",
    url: "https://www.lecoeur-busetcars.fr/wp-content/uploads/sites/7/2020/07/le-coeur-logo.jpg",
  },
  {
    name: "Le Meur",
    url: "https://i.postimg.cc/vZn6K1fd/logo-le-meur-bus-cars.png",
  },
  {
    name: "Le Roux",
    url: "https://i.postimg.cc/RV7WQrBM/logo-le-roux-bus-et-cars.png",
  },
  { name: "Le Vacon", url: "https://i.postimg.cc/9FprYxyb/Le-Vacon.png" },
  { name: "Lefort", url: "https://i.postimg.cc/s22Shk85/Lefort.png" },
  {
    name: "Gascogne Tourisme",
    url: "https://i.postimg.cc/bNJj4LK3/Logo-GASCOGNE-TOURISME-removebg-preview.png",
  },
  {
    name: "Moreau 36",
    url: "https://i.postimg.cc/xdrDJQq4/LOGO-MOREAU-36-removebg-preview.png",
  },
  {
    name: "Raynal",
    url: "https://raynal-voyages.fr/wp-content/uploads/2024/01/cropped-logoraynaltransp-2.png",
  },
  {
    name: "L'Été",
    url: "https://i.postimg.cc/Qxh8DH23/logo-lete-bus-et-cars.png",
  },
  {
    name: "Made Tourisme",
    url: "https://i.postimg.cc/nLfgV1P8/Made-Tourisme.png",
  },
  {
    name: "Mariot Voyages",
    url: "https://i.postimg.cc/8P3x9Gdz/Mariot-Voyages-Quali-removebg-preview.png",
  },
  { name: "Mauger", url: "https://i.postimg.cc/4x9jT0wb/MAUGER-CMJN.jpg" },
  { name: "MCF", url: "https://i.postimg.cc/zBJQKGN0/MCF.png" },
  { name: "Merlier", url: "https://i.postimg.cc/QNvbrdzw/Merlier.jpg" },
  { name: "Metereau", url: "https://i.postimg.cc/ydvbPCYB/METEREAU.png" },
  { name: "Michel", url: "https://i.postimg.cc/Qd8WLLjv/Michel.png" },
  {
    name: "Mignaton",
    url: "https://i.postimg.cc/prFJG0Tk/logo-mignaton-transports-585x182.png",
  },
  { name: "Miral", url: "https://i.postimg.cc/NFFPCC5X/Miral.png" },
  { name: "Negoti", url: "https://i.postimg.cc/RVQnbCxc/N-goti.png" },
  { name: "Negoti EPTR", url: "https://i.postimg.cc/tCLmD5y1/N-goti-EPTR.png" },
  {
    name: "Nicolas Voyages",
    url: "https://i.postimg.cc/15gjpTxh/Nicolas-Voyages.png",
  },
  { name: "Nombalais", url: "https://i.postimg.cc/Njd2BNMF/Nombalais.png" },
  {
    name: "Normandie Tourisme",
    url: "https://i.postimg.cc/pTGsjQqL/Normandie-Tourisme.png",
  },
  { name: "Notcar", url: "https://i.postimg.cc/4xV209NW/Notcar.png" },
  {
    name: "Notcar Espace du Voyage",
    url: "https://i.postimg.cc/LsSQF8J2/Notcar-Espace-du-Voyage.png",
  },
  { name: "Noyon Cars", url: "https://i.postimg.cc/PqM3XnDZ/Noyon-Cars.png" },
  { name: "Ocelorn", url: "https://i.postimg.cc/52fDjzgx/logo-oc-lorn.png" },
  {
    name: "Parent Delattre",
    url: "https://i.postimg.cc/zfMLRVT1/Parent-Delattre.png",
  },
  {
    name: "Peirani",
    url: "https://i.postimg.cc/g2DqTLz9/peirani-logo-1518422103.png",
  },
  {
    name: "Perigord Voyages",
    url: "https://i.postimg.cc/3r18WKx8/d36cc64a5eea5791558f016f2da4773b.png",
  },
  { name: "Piel", url: "https://i.postimg.cc/ZnYhbL0Y/Piel.jpg" },
  { name: "Pineau", url: "https://i.postimg.cc/sfLnDcMn/Pineau.png" },
  { name: "Pinet", url: "https://i.postimg.cc/CKdB1jBN/Pinet.png" },
  {
    name: "Place Cambrai",
    url: "https://i.postimg.cc/FsqxNsnw/Place-Cambrai.png",
  },
  {
    name: "Place Cambresis",
    url: "https://i.postimg.cc/pdQQfQXt/Place-Cambresis.png",
  },
  {
    name: "Place Caudresis Catesis",
    url: "https://i.postimg.cc/Xqqw6TKV/Place-Caudresis-Catesis.png",
  },
  {
    name: "Place Groupe",
    url: "https://i.postimg.cc/hjSLpJfQ/Place-Groupe.png",
  },
  {
    name: "Place Lolli Douaisis",
    url: "https://i.postimg.cc/fR9fLnGy/Place-Lolli-Douaisis.png",
  },
  {
    name: "Place Pays d Artois",
    url: "https://i.postimg.cc/CKpHnr0N/Place-Pays-d-Artois.png",
  },
  {
    name: "Place Pays Solesmois",
    url: "https://i.postimg.cc/Px2mctw3/Place-Pays-Solesmois.png",
  },
  {
    name: "Place Autocars",
    url: "https://i.postimg.cc/8kXRmzDs/Place-Autocars.png",
  },
  {
    name: "Place Voyages",
    url: "https://i.postimg.cc/NFnRspbR/Place-Voyages.png",
  },
  {
    name: "Plattey Voyages",
    url: "https://i.postimg.cc/Vv24Gfyy/Plattey-Voyages.png",
  },
  { name: "Ponsot", url: "https://i.postimg.cc/bN2mGtbq/Ponsot.png" },
  {
    name: "Provence Panorama",
    url: "https://i.postimg.cc/HkDBbk4X/Provence-Panorama.png",
  },
  {
    name: "Pullman d Aquitaine",
    url: "https://i.postimg.cc/yxhW5jtV/Pullman-d-Aquitaine.png",
  },
  {
    name: "Pullmans de Tarn et Garonne",
    url: "https://i.postimg.cc/DfL7V2HT/Capture-d-cran-2025-09-15-170700.png",
  },
  {
    name: "RGO Mobilites",
    url: "https://i.postimg.cc/qvsQwHjY/RGO-Mobilit-s.png",
  },
  { name: "Ricouard", url: "https://i.postimg.cc/h42k8Tfx/Ricouard.png" },
  {
    name: "Robert Voyages",
    url: "https://i.postimg.cc/zDHQh6Ym/Robert-Voyages.png",
  },
  { name: "Robin", url: "https://i.postimg.cc/RVDzmKm9/Robin.png" },
  {
    name: "Rolland Kreisker",
    url: "https://i.postimg.cc/FR5r4cj1/Rolland-Kreisker.png",
  },
  { name: "Rouillard", url: "https://i.postimg.cc/7ZZbsgVk/Rouillard.png" },
  { name: "Saffores", url: "https://i.postimg.cc/5NjZsyCr/Saffores.png" },
  {
    name: "Salan Limousines",
    url: "https://i.postimg.cc/9Fj7pRKm/Sala-n-Limousines.png",
  },
  { name: "Sarrazin", url: "https://i.postimg.cc/3J7kpM0W/Sarrazin.png" },
  { name: "SCAL", url: "https://i.postimg.cc/XvnLD1Pv/SCAL.png" },
  { name: "Soulard", url: "https://i.postimg.cc/XN9ZpNJT/Soulard.png" },
  { name: "Thorin", url: "https://i.postimg.cc/N0bDh7hk/Thorin.png" },
  { name: "TLV", url: "https://i.postimg.cc/C11NwBST/TLV.png" },
  {
    name: "Touraine Excursions",
    url: "https://i.postimg.cc/sxG4ZkMT/Touraine-Excursions.jpg",
  },
  {
    name: "Trans Comtat",
    url: "https://i.postimg.cc/Vs23H1WL/Trans-Comtat.png",
  },
  {
    name: "Transports T",
    url: "https://i.postimg.cc/7P5FVb7W/Transports-T.png",
  },
  { name: "Villessot", url: "https://i.postimg.cc/zXW4sMxw/Villessot.png" },
  { name: "Voisin", url: "https://i.postimg.cc/wvymWh9v/Voisin.png" },
  {
    name: "Voyages Arnaud",
    url: "https://i.postimg.cc/4dmSBFK9/Voyages-Arnaud.png",
  },
  {
    name: "Voyages Castelnau",
    url: "https://i.postimg.cc/zB6PMSWP/Voyages-Castelnau.png",
  },
  {
    name: "Voyages du Bas Quercy",
    url: "https://i.postimg.cc/hG4w7GcM/Voyages-du-Bas-Quercy.png",
  },
  {
    name: "Voyages Merer",
    url: "https://i.postimg.cc/rphHGLpT/Voyages-Merer.gif",
  },
  {
    name: "Voyages Moleux",
    url: "https://i.postimg.cc/fRN1DKPG/Voyages-Moleux.png",
  },
  {
    name: "Vriet Autocars",
    url: "https://i.postimg.cc/x8mFSJ3j/Vriet-Autocars.png",
  },
];

let selectedLogoUrl = null;
export const getSelectedLogo = () => selectedLogoUrl;
export const setSelectedLogo = (url) => {
  selectedLogoUrl = url;
};
