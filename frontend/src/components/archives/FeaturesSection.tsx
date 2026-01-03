import { Receipt, Users, ShoppingCart, Wallet, Calculator, FileText, PieChart, Building } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Receipt,
      title: "Module Fiscal",
      description: "Gestion TVA, Acomptes IS, distinction CA taxable/exonéré. Conformité fiscale camerounaise garantie.",
      tags: ["TVA 19,25%", "Acomptes IS", "Retenues"],
    },
    {
      icon: Users,
      title: "Module Social (Paie)",
      description: "Dépouillement DIPE automatique, calcul CNPS/PVID, génération des écritures de paie conformes.",
      tags: ["DIPE", "CNPS", "PVID"],
    },
    {
      icon: ShoppingCart,
      title: "Module Commercial",
      description: "Facturation avec gestion native de la Retenue à la Source (RTS) et ventilation analytique.",
      tags: ["RTS", "Facturation", "Analytique"],
    },
    {
      icon: Wallet,
      title: "Module Trésorerie",
      description: "Lettrage automatique, distinction Caisse vs Banque, rapprochement bancaire intelligent.",
      tags: ["Lettrage", "Banque", "Caisse"],
    },
    {
      icon: Calculator,
      title: "Plan Comptable OHADA",
      description: "Plan comptable SYSCOHADA révisé intégré avec personnalisation par entreprise.",
      tags: ["SYSCOHADA", "Personnalisable"],
    },
    {
      icon: FileText,
      title: "États Financiers",
      description: "Génération automatique du Bilan, Compte de Résultat, et annexes conformes OHADA.",
      tags: ["Bilan", "Résultat", "Annexes"],
    },
    {
      icon: PieChart,
      title: "Tableaux de Bord",
      description: "Visualisation en temps réel des KPIs comptables et fiscaux de vos clients.",
      tags: ["KPIs", "Temps réel", "Analytics"],
    },
    {
      icon: Building,
      title: "Multi-Dossiers",
      description: "Gérez tous vos clients depuis une interface unique avec isolation des données garantie.",
      tags: ["Multi-clients", "Sécurisé"],
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo/5 via-transparent to-emerald/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-emerald font-medium tracking-wider uppercase mb-4 block">
            Fonctionnalités
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tous les <span className="gradient-text">Modules</span> pour votre Cabinet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une suite complète d'outils conçus pour les spécificités de la comptabilité OHADA
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo/20 to-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-card-hover p-6 rounded-xl h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo/30 to-indigo/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-indigo-glow" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
