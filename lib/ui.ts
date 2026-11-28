import type { Language } from "@/lib/content";

type CategoryKey = "all" | "government" | "security" | "emergency" | "civilian";
type PackageKind = "pile" | "stack" | "bag" | "briefcase" | "container";

export type UiCopy = {
  menuTitle: string;
  guides: {
    banner: string; search: string; searchLabel: string; categoryLabel: string; sortLabel: string;
    sortDefault: string; sortAZ: string; sortZA: string; readMore: string; results: string; noResults: string; clear: string;
    categories: Record<CategoryKey, string>;
    role: string; responsibilities: string; gameplay: string; requirements: string; requirementsPending: string;
    plannedNote: string; back: string; others: string; conceptVisual: string; officialArt: string; category: string;
  };
  store: {
    bannerTitle: string; bannerText: string; viewDetails: string; back: string; about: string; aboutText: string; includes: string;
    artPending: string; notice: string; kinds: Record<PackageKind, string>; presentation: string; otherPackages: string;
  };
  footer: {
    social: string; discord: string; discordText: string; mobile: string; mobileText: string; appStore: string; googlePlay: string;
    availableOn: string; legalNote: string; pages: string; copyright: string;
  };
};

export const ui: Record<Language, UiCopy> = {
  en: {
    menuTitle: "Menu",
    guides: {
      banner: "GUIDES", search: "Search factions…", searchLabel: "Search guides", categoryLabel: "Category", sortLabel: "Sort by",
      sortDefault: "Featured", sortAZ: "Name A–Z", sortZA: "Name Z–A", readMore: "Read More", results: "factions shown", noResults: "No factions match your search.", clear: "Clear filters",
      categories: { all: "All", government: "Government & Justice", security: "Law & Security", emergency: "Emergency", civilian: "Civilian & Economy" },
      role: "Role", responsibilities: "Responsibilities", gameplay: "Planned gameplay", requirements: "Requirements",
      requirementsPending: "No official requirements have been confirmed yet. Confirmed information will be shared in the official Discord communities.",
      plannedNote: "OKAP CITY RP is in development. Gameplay described here is planned, may change, and is not yet available.",
      back: "BACK TO GUIDES", others: "MORE FACTIONS", conceptVisual: "Concept visual — not official gameplay", officialArt: "Promotional artwork", category: "Category",
    },
    store: {
      bannerTitle: "OKAP COINS", bannerText: "The official in-game virtual currency of OKAP CITY RP. Preview the packages below — the store is not open yet.",
      viewDetails: "View details", back: "BACK TO STORE", about: "About this package", aboutText: "OKAP Coins are the planned in-game virtual currency of OKAP CITY RP. What they can be used for will be announced officially.",
      includes: "Package contents", artPending: "Product render coming soon", notice: "Purchasing is not available. The store is in development and no payments are accepted.",
      kinds: { pile: "Small coin pile", stack: "Large coin stacks", bag: "Bag of coins", briefcase: "Briefcase of coins", container: "Container of gold coins" },
      presentation: "Presentation", otherPackages: "OTHER PACKAGES",
    },
    footer: {
      social: "Follow OKAP CITY RP", discord: "Official Discord communities", discordText: "Join your regional community.",
      mobile: "Mobile game", mobileText: "An OKAP CITY RP mobile game is planned. Store availability has not been announced.", appStore: "App Store", googlePlay: "Google Play",
      availableOn: "Available on", legalNote: "Official Privacy Policy and Terms of Service content will be published when approved.", pages: "Pages", copyright: "© 2026 OKAP CITY RP. All rights reserved.",
    },
  },
  fr: {
    menuTitle: "Menu",
    guides: {
      banner: "GUIDES", search: "Rechercher une faction…", searchLabel: "Rechercher dans les guides", categoryLabel: "Catégorie", sortLabel: "Trier par",
      sortDefault: "En vedette", sortAZ: "Nom A–Z", sortZA: "Nom Z–A", readMore: "Lire la suite", results: "factions affichées", noResults: "Aucune faction ne correspond à votre recherche.", clear: "Réinitialiser les filtres",
      categories: { all: "Toutes", government: "Gouvernement et justice", security: "Loi et sécurité", emergency: "Urgences", civilian: "Civil et économie" },
      role: "Rôle", responsibilities: "Responsabilités", gameplay: "Gameplay prévu", requirements: "Conditions",
      requirementsPending: "Aucune condition officielle n'a encore été confirmée. Les informations confirmées seront partagées dans les communautés Discord officielles.",
      plannedNote: "OKAP CITY RP est en développement. Le gameplay décrit ici est prévu, peut changer et n'est pas encore disponible.",
      back: "RETOUR AUX GUIDES", others: "AUTRES FACTIONS", conceptVisual: "Visuel conceptuel — pas du gameplay officiel", officialArt: "Illustration promotionnelle", category: "Catégorie",
    },
    store: {
      bannerTitle: "OKAP COINS", bannerText: "La monnaie virtuelle officielle de OKAP CITY RP. Découvrez les packs ci-dessous — la boutique n'est pas encore ouverte.",
      viewDetails: "Voir les détails", back: "RETOUR À LA BOUTIQUE", about: "À propos de ce pack", aboutText: "Les OKAP Coins sont la monnaie virtuelle prévue de OKAP CITY RP. Leurs usages seront annoncés officiellement.",
      includes: "Contenu du pack", artPending: "Rendu du produit bientôt disponible", notice: "L'achat n'est pas disponible. La boutique est en développement et aucun paiement n'est accepté.",
      kinds: { pile: "Petit tas de pièces", stack: "Grandes piles de pièces", bag: "Sac de pièces", briefcase: "Mallette de pièces", container: "Conteneur de pièces d'or" },
      presentation: "Présentation", otherPackages: "AUTRES PACKS",
    },
    footer: {
      social: "Suivez OKAP CITY RP", discord: "Communautés Discord officielles", discordText: "Rejoignez votre communauté régionale.",
      mobile: "Jeu mobile", mobileText: "Un jeu mobile OKAP CITY RP est prévu. La disponibilité sur les boutiques n'a pas été annoncée.", appStore: "App Store", googlePlay: "Google Play",
      availableOn: "Disponible sur", legalNote: "Les contenus officiels de la politique de confidentialité et des conditions d'utilisation seront publiés une fois approuvés.", pages: "Pages", copyright: "© 2026 OKAP CITY RP. Tous droits réservés.",
    },
  },
  ht: {
    menuTitle: "Meni",
    guides: {
      banner: "GID", search: "Chèche yon faksyon…", searchLabel: "Chèche nan gid yo", categoryLabel: "Kategori", sortLabel: "Klase pa",
      sortDefault: "Make pou yo", sortAZ: "Non A–Z", sortZA: "Non Z–A", readMore: "Li plis", results: "faksyon ki parèt", noResults: "Pa gen faksyon ki koresponn ak rechèch ou.", clear: "Efase filt yo",
      categories: { all: "Tout", government: "Gouvènman ak jistis", security: "Lalwa ak sekirite", emergency: "Ijans", civilian: "Sivil ak ekonomi" },
      role: "Wòl", responsibilities: "Responsablite", gameplay: "Jwèt ki planifye", requirements: "Kondisyon",
      requirementsPending: "Pa gen okenn kondisyon ofisyèl ki konfime ankò. Enfòmasyon konfime yo ap pataje nan kominote Discord ofisyèl yo.",
      plannedNote: "OKAP CITY RP ap devlope. Jwèt ki dekri isit la planifye, li ka chanje, epi li pa disponib ankò.",
      back: "TOUNEN NAN GID YO", others: "LÒT FAKSYON", conceptVisual: "Vizyèl konsèp — se pa jwèt ofisyèl", officialArt: "Atwork pwomosyonèl", category: "Kategori",
    },
    store: {
      bannerTitle: "OKAP COINS", bannerText: "Lajan vityèl ofisyèl OKAP CITY RP la. Gade pake yo anba a — boutik la poko louvri.",
      viewDetails: "Wè detay yo", back: "TOUNEN NAN BOUTIK LA", about: "Sou pake sa a", aboutText: "OKAP Coins se lajan vityèl ki planifye nan OKAP CITY RP. Yo pral anonse ofisyèlman sa yo ka sèvi pou.",
      includes: "Sa pake a genyen", artPending: "Imaj pwodwi a ap vini byento", notice: "Achte pa disponib. Boutik la ap devlope epi pa gen peman yo aksepte.",
      kinds: { pile: "Ti pil pyès", stack: "Gwo pil pyès", bag: "Sak pyès", briefcase: "Valiz pyès", container: "Kontènè pyès lò" },
      presentation: "Prezantasyon", otherPackages: "LÒT PAKE",
    },
    footer: {
      social: "Swiv OKAP CITY RP", discord: "Kominote Discord ofisyèl yo", discordText: "Antre nan kominote rejyon ou an.",
      mobile: "Jwèt mobil", mobileText: "Yon jwèt mobil OKAP CITY RP planifye. Pa gen anons ankò sou disponibilite nan magazen yo.", appStore: "App Store", googlePlay: "Google Play",
      availableOn: "Disponib sou", legalNote: "Kontni ofisyèl Politik Konfidansyalite ak Kondisyon Sèvis yo ap pibliye lè yo apwouve.", pages: "Paj", copyright: "© 2026 OKAP CITY RP. Tout dwa rezève.",
    },
  },
  ar: {
    menuTitle: "القائمة",
    guides: {
      banner: "الأدلة", search: "ابحث عن فصيل…", searchLabel: "البحث في الأدلة", categoryLabel: "الفئة", sortLabel: "ترتيب حسب",
      sortDefault: "المميزة", sortAZ: "الاسم أ–ي", sortZA: "الاسم ي–أ", readMore: "اقرأ المزيد", results: "فصائل معروضة", noResults: "لا توجد فصائل تطابق بحثك.", clear: "مسح الفلاتر",
      categories: { all: "الكل", government: "الحكومة والعدالة", security: "القانون والأمن", emergency: "الطوارئ", civilian: "المدنيون والاقتصاد" },
      role: "الدور", responsibilities: "المسؤوليات", gameplay: "اللعب المخطط له", requirements: "المتطلبات",
      requirementsPending: "لم يتم تأكيد أي متطلبات رسمية بعد. ستُشارك المعلومات المؤكدة في مجتمعات ديسكورد الرسمية.",
      plannedNote: "لعبة OKAP CITY RP قيد التطوير. اللعب الموصوف هنا مخطط له وقد يتغير وغير متاح بعد.",
      back: "العودة إلى الأدلة", others: "فصائل أخرى", conceptVisual: "صورة تصورية — ليست من اللعب الرسمي", officialArt: "عمل فني ترويجي", category: "الفئة",
    },
    store: {
      bannerTitle: "OKAP COINS", bannerText: "العملة الافتراضية الرسمية داخل لعبة OKAP CITY RP. استعرض الباقات أدناه — المتجر لم يُفتح بعد.",
      viewDetails: "عرض التفاصيل", back: "العودة إلى المتجر", about: "حول هذه الباقة", aboutText: "عملات OKAP هي العملة الافتراضية المخطط لها داخل اللعبة. سيتم الإعلان رسمياً عن استخداماتها.",
      includes: "محتويات الباقة", artPending: "صورة المنتج قريباً", notice: "الشراء غير متاح. المتجر قيد التطوير ولا تُقبل أي مدفوعات.",
      kinds: { pile: "كومة عملات صغيرة", stack: "أكوام عملات كبيرة", bag: "كيس عملات", briefcase: "حقيبة عملات", container: "حاوية عملات ذهبية" },
      presentation: "العرض", otherPackages: "باقات أخرى",
    },
    footer: {
      social: "تابع OKAP CITY RP", discord: "مجتمعات ديسكورد الرسمية", discordText: "انضم إلى مجتمع منطقتك.",
      mobile: "لعبة الجوال", mobileText: "لعبة جوال لـ OKAP CITY RP قيد التخطيط. لم يُعلن بعد عن توفرها في المتاجر.", appStore: "App Store", googlePlay: "Google Play",
      availableOn: "متاح على", legalNote: "سيُنشر المحتوى الرسمي لسياسة الخصوصية وشروط الخدمة عند اعتماده.", pages: "الصفحات", copyright: "© 2026 OKAP CITY RP. جميع الحقوق محفوظة.",
    },
  },
};

export const homeCoins: Record<Language, { kicker: string; welcome: string; text: string }> = {
  en: { kicker: "Welcome", welcome: "WELCOME TO OKAP CITY RP", text: "Welcome to a world of endless possibilities! We are delighted to have you join our growing community. Your adventure begins here, and we cannot wait to share this incredible journey with you." },
  fr: { kicker: "Bienvenue", welcome: "BIENVENUE À OKAP CITY RP", text: "Bienvenue dans un monde de possibilités infinies ! Nous sommes ravis de vous voir rejoindre notre communauté grandissante. Votre aventure commence ici, et nous avons hâte de partager ce voyage incroyable avec vous." },
  ht: { kicker: "Byenveni", welcome: "BYENVENI NAN OKAP CITY RP", text: "Byenveni nan yon mond ki gen posibilite san limit! Nou kontan wè w rejwenn kominote nou an k ap grandi. Avantirè w la kòmanse isit la, epi nou pa ka tann pou nou pataje vwayaj ekstraòdinè sa a avè w." },
  ar: { kicker: "أهلاً بك", welcome: "مرحباً بك في OKAP CITY RP", text: "مرحباً بك في عالم من الاحتمالات اللامحدودة! يسعدنا انضمامك إلى مجتمعنا المتنامي. مغامرتك تبدأ من هنا، ولا يمكننا الانتظار لنشاركك هذه الرحلة الرائعة." },
};

export const customStore: Record<Language, { label: string; title: string; text: string; input: string; total: string; hint: string; invalid: string; rate: string }> = {
  en: { label: "CUSTOM PACKAGE", title: "Custom OKAP Coins", text: "Choose the exact amount of OKAP Coins you want.", input: "Number of OKAP Coins", total: "Total price", hint: "Whole numbers from {min} to {max}.", invalid: "Enter a whole number from {min} to {max}.", rate: "Provisional rate: ${rate} per coin" },
  fr: { label: "PACK PERSONNALISÉ", title: "OKAP Coins personnalisés", text: "Choisissez le nombre exact d'OKAP Coins que vous souhaitez.", input: "Nombre d'OKAP Coins", total: "Prix total", hint: "Nombres entiers de {min} à {max}.", invalid: "Saisissez un nombre entier de {min} à {max}.", rate: "Tarif provisoire : {rate} $ par pièce" },
  ht: { label: "PAKE PèSONÈL", title: "OKAP Coins pèsonèl", text: "Chwazi kantite egzak OKAP Coins ou vle a.", input: "Kantite OKAP Coins", total: "Pri total", hint: "Nimewo antye ant {min} ak {max}.", invalid: "Antre yon nimewo antye ant {min} ak {max}.", rate: "To pwovizwa: ${rate} pou chak pyès" },
  ar: { label: "باقة مخصصة", title: "عملات OKAP مخصصة", text: "اختر العدد الدقيق من عملات OKAP الذي تريده.", input: "عدد عملات OKAP", total: "السعر الإجمالي", hint: "أعداد صحيحة من {min} إلى {max}.", invalid: "أدخل عدداً صحيحاً من {min} إلى {max}.", rate: "السعر المبدئي: ${rate} لكل عملة" },
};
