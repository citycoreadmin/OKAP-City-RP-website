import type { Language } from "./content";

/*
 * OKAP CITY RP — Development Roadmap configuration.
 *
 * This is the single place to update the Roadmap page.
 *
 * For each phase:
 *   status    null | "planned" | "inDevelopment" | "testing" | "completed"
 *             null shows "Status to be announced".
 *   progress  null | whole number 0–100. Only set it from verified information
 *             and only together with a status. null hides the percentage.
 *   image     null | path inside /public, e.g. "/images/roadmap-city.jpg".
 *             null shows the built-in 3D visual.
 *
 * Latest updates: add entries to `roadmapUpdates` (newest first).
 * `date` is displayed exactly as written, e.g. "2026-12-01".
 */

export type RoadmapStatus = "planned" | "inDevelopment" | "testing" | "completed";
export type Localized<T = string> = Record<Language, T>;

export interface RoadmapPhase {
  id: string;
  status: RoadmapStatus | null;
  progress: number | null;
  image: string | null;
  title: Localized;
  description: Localized;
  items: Localized<string[]>;
}

export interface RoadmapUpdate {
  date: string;
  title: Localized;
  text: Localized;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "city-development",
    status: null,
    progress: null,
    image: null,
    title: { en: "City Development", fr: "Développement de la ville", ht: "Devlopman vil la", ar: "تطوير المدينة" },
    description: {
      en: "Building the foundation of OKAP CITY: the map, roads, buildings and neighborhoods.",
      fr: "Construire les fondations d'OKAP CITY : la carte, les routes, les bâtiments et les quartiers.",
      ht: "Bati baz OKAP CITY: kat la, wout yo, bilding yo ak katye yo.",
      ar: "بناء أساس OKAP CITY: الخريطة والطرق والمباني والأحياء.",
    },
    items: {
      en: ["Map", "Roads", "Buildings", "Neighborhoods"],
      fr: ["Carte", "Routes", "Bâtiments", "Quartiers"],
      ht: ["Kat", "Wout", "Bilding", "Katye"],
      ar: ["الخريطة", "الطرق", "المباني", "الأحياء"],
    },
  },
  {
    id: "vehicles-transportation",
    status: null,
    progress: null,
    image: null,
    title: { en: "Vehicles & Transportation", fr: "Véhicules et transports", ht: "Veyikil ak transpò", ar: "المركبات والنقل" },
    description: {
      en: "Bringing the city to life with vehicles for every role and the driving systems behind them.",
      fr: "Donner vie à la ville avec des véhicules pour chaque rôle et les systèmes de conduite associés.",
      ht: "Bay vil la lavi ak veyikil pou chak wòl ak sistèm kondwi yo.",
      ar: "إحياء المدينة بمركبات لكل دور وأنظمة القيادة الخاصة بها.",
    },
    items: {
      en: ["Civilian vehicles", "Emergency vehicles", "Helicopters", "Driving systems"],
      fr: ["Véhicules civils", "Véhicules d'urgence", "Hélicoptères", "Systèmes de conduite"],
      ht: ["Veyikil sivil", "Veyikil ijans", "Elikoptè", "Sistèm kondwi"],
      ar: ["مركبات مدنية", "مركبات الطوارئ", "مروحيات", "أنظمة القيادة"],
    },
  },
  {
    id: "factions-jobs",
    status: null,
    progress: null,
    image: null,
    title: { en: "Factions & Civilian Jobs", fr: "Factions et métiers civils", ht: "Faksyon ak travay sivil", ar: "الفصائل والوظائف المدنية" },
    description: {
      en: "Creating the roles that shape the city, from public service to civilian careers.",
      fr: "Créer les rôles qui façonnent la ville, du service public aux carrières civiles.",
      ht: "Kreye wòl ki bay vil la fòm, depi sèvis piblik jiska karyè sivil.",
      ar: "إنشاء الأدوار التي تشكّل المدينة، من الخدمة العامة إلى المهن المدنية.",
    },
    items: {
      en: ["Government", "Police", "Army", "FBI", "Medics", "Justice", "Civilian jobs"],
      fr: ["Gouvernement", "Police", "Armée", "FBI", "Secouristes", "Justice", "Métiers civils"],
      ht: ["Gouvènman", "Lapolis", "Lame", "FBI", "Medik", "Jistis", "Travay sivil"],
      ar: ["الحكومة", "الشرطة", "الجيش", "مكتب التحقيقات الفيدرالي", "المسعفون", "العدالة", "الوظائف المدنية"],
    },
  },
  {
    id: "economy-player-systems",
    status: null,
    progress: null,
    image: null,
    title: { en: "Economy & Player Systems", fr: "Économie et systèmes joueur", ht: "Ekonomi ak sistèm jwè", ar: "الاقتصاد وأنظمة اللاعب" },
    description: {
      en: "Building the systems players use every day to earn, own and express themselves.",
      fr: "Construire les systèmes que les joueurs utilisent chaque jour pour gagner, posséder et s'exprimer.",
      ht: "Bati sistèm jwè yo itilize chak jou pou touche, posede epi eksprime tèt yo.",
      ar: "بناء الأنظمة التي يستخدمها اللاعبون يومياً للكسب والتملّك والتعبير عن أنفسهم.",
    },
    items: {
      en: ["OKAP Coins", "Inventory", "Businesses", "Character customization"],
      fr: ["OKAP Coins", "Inventaire", "Entreprises", "Personnalisation du personnage"],
      ht: ["OKAP Coins", "Envantè", "Biznis", "Personalizasyon pèsonaj"],
      ar: ["عملات OKAP", "المخزون", "الأعمال التجارية", "تخصيص الشخصية"],
    },
  },
  {
    id: "alpha-beta-testing",
    status: null,
    progress: null,
    image: null,
    title: { en: "Alpha & Beta Testing", fr: "Tests Alpha et Bêta", ht: "Tès Alpha ak Beta", ar: "اختبارات ألفا وبيتا" },
    description: {
      en: "Testing the city with the community, fixing bugs and optimizing performance.",
      fr: "Tester la ville avec la communauté, corriger les bugs et optimiser les performances.",
      ht: "Teste vil la ak kominote a, korije bòg yo epi amelyore pèfòmans.",
      ar: "اختبار المدينة مع المجتمع وإصلاح الأخطاء وتحسين الأداء.",
    },
    items: {
      en: ["Testing", "Bug fixes", "Performance optimization"],
      fr: ["Tests", "Corrections de bugs", "Optimisation des performances"],
      ht: ["Tès", "Koreksyon bòg", "Optimizasyon pèfòmans"],
      ar: ["الاختبار", "إصلاح الأخطاء", "تحسين الأداء"],
    },
  },
  {
    id: "official-launch",
    status: null,
    progress: null,
    image: null,
    title: { en: "Official Game Launch", fr: "Lancement officiel du jeu", ht: "Lansman ofisyèl jwèt la", ar: "الإطلاق الرسمي للعبة" },
    description: {
      en: "The official launch of OKAP CITY RP.",
      fr: "Le lancement officiel de OKAP CITY RP.",
      ht: "Lansman ofisyèl OKAP CITY RP.",
      ar: "الإطلاق الرسمي للعبة OKAP CITY RP.",
    },
    items: { en: [], fr: [], ht: [], ar: [] },
  },
];

export const roadmapUpdates: RoadmapUpdate[] = [];
