// Mock data for FlowLedger Landing Page

export const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const heroContent = {
  headline: "L'Expertise Comptable Automatisée pour la zone OHADA.",
  subheadline: "Fini la saisie manuelle et les fichiers Excel instables. FlowLedger transforme vos pièces administratives en écritures comptables conformes et génère vos États Financiers automatiquement.",
  primaryCTA: "Demander une démo",
  secondaryCTA: "Voir le fonctionnement"
};

export const comparisonData = {
  oldWay: {
    title: "L'Enfer Excel",
    problems: [
      "Saisie manuelle chronophage",
      "Erreurs de formules fréquentes",
      "Fichiers lourds qui plantent",
      "Aucune traçabilité des modifications",
      "Multi-dossiers impossible"
    ]
  },
  newWay: {
    title: "La Puissance Web",
    benefits: [
      "Saisie par formulaires métiers",
      "Moteur de règles comptables intelligent",
      "Multi-dossiers fluide et sécurisé",
      "Traçabilité complète des opérations",
      "Export FEC en un clic"
    ]
  }
};

export const processSteps = [
  {
    step: 1,
    title: "Input (Dépouillement)",
    description: "Saisie simplifiée des données brutes (Factures, DIPE, Déclarations).",
    icon: "FileInput"
  },
  {
    step: 2,
    title: "Engine (Moteur de Règles)",
    description: "Mappage automatique vers le Plan Comptable et application des règles fiscales.",
    icon: "Cog"
  },
  {
    step: 3,
    title: "Output (Génération)",
    description: "Génération instantanée du FEC, Balance et États Financiers.",
    icon: "FileOutput"
  }
];

export const modules = [
  {
    title: "Module Fiscal",
    description: "Gestion TVA, Acomptes IS, distinction CA taxable/exonéré. Conformité fiscale camerounaise garantie.",
    icon: "Receipt",
    tags: ["TVA 19,25%", "Acomptes IS", "Retenues"]
  },
  {
    title: "Module Social (Paie)",
    description: "Dépouillement DIPE automatique, calcul CNPS/PVID, génération des écritures de paie conformes.",
    icon: "Users",
    tags: ["DIPE", "CNPS", "PVID"]
  },
  {
    title: "Module Commercial",
    description: "Facturation avec gestion native de la Retenue à la Source (RTS) et ventilation analytique.",
    icon: "ShoppingCart",
    tags: ["RTS", "Facturation", "Analytique"]
  },
  {
    title: "Module Trésorerie",
    description: "Lettrage automatique, distinction Caisse vs Banque, rapprochement bancaire intelligent.",
    icon: "Wallet",
    tags: ["Lettrage", "Banque", "Caisse"]
  },
  {
    title: "Plan Comptable OHADA",
    description: "Plan comptable SYSCOHADA révisé intégré avec personnalisation par entreprise.",
    icon: "Calculator",
    tags: ["SYSCOHADA", "Personnalisable"]
  },
  {
    title: "États Financiers",
    description: "Génération automatique du Bilan, Compte de Résultat, et annexes conformes OHADA.",
    icon: "FileText",
    tags: ["Bilan", "Résultat", "Annexes"]
  },
  {
    title: "Tableaux de Bord",
    description: "Visualisation en temps réel des KPIs comptables et fiscaux de vos clients.",
    icon: "PieChart",
    tags: ["KPIs", "Temps réel", "Analytics"]
  },
  {
    title: "Multi-Dossiers",
    description: "Gérez tous vos clients depuis une interface unique avec isolation des données garantie.",
    icon: "Building",
    tags: ["Multi-clients", "Sécurisé"]
  }
];

export const teamMembers = [
  {
    name: "Steve Dylan T.",
    role: "Expert-comptable & Auditeur",
    quote: "La rigueur des normes OHADA.",
    avatar: "SD"
  },
  {
    name: "Thomas A.",
    role: "Ingénieur Data & Développeur",
    quote: "La puissance de l'automatisation.",
    avatar: "TA"
  }
];

export const footerLinks = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Documentation", href: "#docs" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Équipe", href: "#team" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "#privacy" },
      { label: "CGU", href: "#terms" }
    ]
  }
];

export const waitlistForm = {
  title: "Rejoindre la liste d'attente",
  description: "Soyez parmi les premiers à découvrir FlowLedger.",
  fields: [
    { name: "email", type: "email", placeholder: "votre@email.com", required: true },
    { name: "company", type: "text", placeholder: "Nom du cabinet/entreprise", required: false }
  ],
  submitText: "S'inscrire"
};
