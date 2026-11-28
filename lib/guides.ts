import type { Language } from "@/lib/content";

export type GuideCategory = "government" | "security" | "emergency" | "civilian";

type Text = Record<Language, string>;
type List = Record<Language, string[]>;

export type Guide = {
  slug: string;
  category: GuideCategory;
  image: { src: string; width: number; height: number; position: string; official: boolean };
  name: Text;
  summary: Text;
  role: Text;
  responsibilities: List;
  gameplay: List;
};

const hero = { src: "/images/hero-city.jpg", width: 1170, height: 655, official: false };

export const guides: Guide[] = [
  {
    slug: "government", category: "government",
    image: { src: "/images/president.jpg", width: 1199, height: 1312, position: "50% 0%", official: true },
    name: { en: "Government", fr: "Gouvernement", ht: "Gouvènman", ar: "الحكومة" },
    summary: {
      en: "Shape the future of the city through public service and leadership.",
      fr: "Façonnez l'avenir de la ville grâce au service public et au leadership.",
      ht: "Bay avni vil la fòm atravè sèvis piblik ak lidèchip.",
      ar: "شكّل مستقبل المدينة من خلال الخدمة العامة والقيادة.",
    },
    role: {
      en: "The Government is the civic leadership of OKAP CITY. It is planned as the faction that guides city policy, represents residents and works alongside the other public services.",
      fr: "Le Gouvernement est la direction civique d'OKAP CITY. Il est prévu comme la faction qui oriente la politique de la ville, représente les habitants et collabore avec les autres services publics.",
      ht: "Gouvènman an se lidèchip sivik OKAP CITY. Li planifye kòm faksyon ki gide politik vil la, reprezante rezidan yo epi travay ansanm ak lòt sèvis piblik yo.",
      ar: "الحكومة هي القيادة المدنية لمدينة OKAP. من المخطط أن تكون الفصيل الذي يوجّه سياسة المدينة ويمثل السكان ويعمل مع الخدمات العامة الأخرى.",
    },
    responsibilities: {
      en: ["Provide leadership and direction for the city.", "Represent residents and public institutions.", "Coordinate with police, medics, justice and other services."],
      fr: ["Assurer le leadership et l'orientation de la ville.", "Représenter les habitants et les institutions publiques.", "Coordonner l'action avec la police, les secours, la justice et les autres services."],
      ht: ["Bay lidèchip ak direksyon pou vil la.", "Reprezante rezidan yo ak enstitisyon piblik yo.", "Kowòdone ak lapolis, medik, jistis ak lòt sèvis yo."],
      ar: ["توفير القيادة والتوجيه للمدينة.", "تمثيل السكان والمؤسسات العامة.", "التنسيق مع الشرطة والمسعفين والعدالة والخدمات الأخرى."],
    },
    gameplay: {
      en: ["Leadership and public-office roleplay.", "Announcements and civic storylines.", "Collaboration with other factions."],
      fr: ["Jeu de rôle de direction et de fonctions publiques.", "Annonces et intrigues civiques.", "Collaboration avec les autres factions."],
      ht: ["Wòl lidèchip ak pozisyon piblik.", "Anons ak istwa sivik.", "Kolaborasyon ak lòt faksyon yo."],
      ar: ["أدوار القيادة والمناصب العامة.", "الإعلانات والقصص المدنية.", "التعاون مع الفصائل الأخرى."],
    },
  },
  {
    slug: "police", category: "security",
    image: { src: "/images/police.jpg", width: 1122, height: 1402, position: "50% 0%", official: true },
    name: { en: "Police Department", fr: "Police", ht: "Depatman Lapolis", ar: "الشرطة" },
    summary: {
      en: "Protect the community and uphold the law.",
      fr: "Protégez la communauté et faites respecter la loi.",
      ht: "Pwoteje kominote a epi fè lalwa respekte.",
      ar: "احمِ المجتمع وأنفذ القانون.",
    },
    role: {
      en: "The Police Department is planned as the primary law enforcement faction, keeping OKAP CITY safe and responding to incidents across the city.",
      fr: "La Police est prévue comme la principale faction d'application de la loi, chargée d'assurer la sécurité d'OKAP CITY et d'intervenir dans toute la ville.",
      ht: "Depatman Lapolis la planifye kòm prensipal faksyon ki fè lalwa respekte, pou kenbe OKAP CITY an sekirite epi reponn ak ensidan nan tout vil la.",
      ar: "من المخطط أن تكون الشرطة فصيل إنفاذ القانون الرئيسي، تحافظ على أمن مدينة OKAP وتستجيب للحوادث في أنحاء المدينة.",
    },
    responsibilities: {
      en: ["Patrol the city and respond to calls.", "Enforce the law and protect residents.", "Work with the Department of Justice and emergency services."],
      fr: ["Patrouiller en ville et répondre aux appels.", "Faire respecter la loi et protéger les habitants.", "Travailler avec le Département de la Justice et les services d'urgence."],
      ht: ["Patwouye nan vil la epi reponn ak apèl yo.", "Fè lalwa respekte epi pwoteje rezidan yo.", "Travay ak Depatman Jistis ak sèvis ijans yo."],
      ar: ["الدوريات والاستجابة للبلاغات.", "تطبيق القانون وحماية السكان.", "العمل مع وزارة العدل وخدمات الطوارئ."],
    },
    gameplay: {
      en: ["Patrol and incident-response roleplay.", "Investigations and law enforcement scenarios.", "Joint operations with other factions."],
      fr: ["Jeu de rôle de patrouille et d'intervention.", "Enquêtes et scénarios d'application de la loi.", "Opérations conjointes avec d'autres factions."],
      ht: ["Wòl patwouy ak repons ak ensidan.", "Ankèt ak sènaryo aplikasyon lalwa.", "Operasyon ansanm ak lòt faksyon yo."],
      ar: ["أدوار الدوريات والاستجابة للحوادث.", "التحقيقات وسيناريوهات إنفاذ القانون.", "عمليات مشتركة مع الفصائل الأخرى."],
    },
  },
  {
    slug: "army", category: "security",
    image: { src: "/images/army.jpg", width: 1122, height: 1402, position: "50% 0%", official: true },
    name: { en: "Army", fr: "Armée", ht: "Lame", ar: "الجيش" },
    summary: {
      en: "Serve with discipline and stand ready when the city needs you.",
      fr: "Servez avec discipline et soyez prêt quand la ville a besoin de vous.",
      ht: "Sèvi ak disiplin epi rete pare lè vil la bezwen w.",
      ar: "اخدم بانضباط وكن مستعداً عندما تحتاجك المدينة.",
    },
    role: {
      en: "The Army is planned as the disciplined defense force of OKAP CITY, ready to support the city in serious situations.",
      fr: "L'Armée est prévue comme la force de défense disciplinée d'OKAP CITY, prête à soutenir la ville dans les situations graves.",
      ht: "Lame a planifye kòm fòs defans disiplinen OKAP CITY, pare pou sipòte vil la nan sitiyasyon grav.",
      ar: "من المخطط أن يكون الجيش قوة الدفاع المنضبطة لمدينة OKAP، جاهزاً لدعم المدينة في المواقف الخطيرة.",
    },
    responsibilities: {
      en: ["Maintain discipline and readiness.", "Support the city during major incidents.", "Follow a clear chain of command."],
      fr: ["Maintenir la discipline et la préparation.", "Soutenir la ville lors d'incidents majeurs.", "Respecter une chaîne de commandement claire."],
      ht: ["Kenbe disiplin ak preparasyon.", "Sipòte vil la pandan gwo ensidan.", "Respekte yon chèn kòmandman klè."],
      ar: ["الحفاظ على الانضباط والجاهزية.", "دعم المدينة أثناء الحوادث الكبرى.", "الالتزام بتسلسل قيادة واضح."],
    },
    gameplay: {
      en: ["Ranks, training and structured roleplay.", "Defense and support scenarios.", "Coordination with government and police."],
      fr: ["Grades, entraînement et jeu de rôle structuré.", "Scénarios de défense et de soutien.", "Coordination avec le gouvernement et la police."],
      ht: ["Ran, antrennman ak wòl estriktire.", "Sènaryo defans ak sipò.", "Kowòdinasyon ak gouvènman an ak lapolis."],
      ar: ["الرتب والتدريب وأدوار منظمة.", "سيناريوهات الدفاع والدعم.", "التنسيق مع الحكومة والشرطة."],
    },
  },
  {
    slug: "fbi", category: "security",
    image: { src: "/images/fbi.jpg", width: 1199, height: 1312, position: "50% 0%", official: true },
    name: { en: "FBI", fr: "FBI", ht: "FBI", ar: "مكتب التحقيقات الفيدرالي" },
    summary: {
      en: "Investigate serious crimes and protect the city from the shadows.",
      fr: "Enquêtez sur les crimes graves et protégez la ville dans l'ombre.",
      ht: "Mennen ankèt sou gwo krim epi pwoteje vil la nan lonbraj.",
      ar: "حقّق في الجرائم الخطيرة واحمِ المدينة من الظل.",
    },
    role: {
      en: "The FBI is planned as the investigative faction that handles serious and complex cases beyond everyday patrol work.",
      fr: "Le FBI est prévu comme la faction d'enquête qui traite les affaires graves et complexes, au-delà des patrouilles quotidiennes.",
      ht: "FBI a planifye kòm faksyon ankèt ki okipe ka grav ak konplèks ki depase travay patwouy chak jou.",
      ar: "من المخطط أن يكون المكتب الفصيل التحقيقي الذي يتولى القضايا الخطيرة والمعقدة التي تتجاوز عمل الدوريات اليومي.",
    },
    responsibilities: {
      en: ["Investigate serious crimes.", "Gather and analyze evidence.", "Cooperate with police and the Department of Justice."],
      fr: ["Enquêter sur les crimes graves.", "Recueillir et analyser des preuves.", "Coopérer avec la police et le Département de la Justice."],
      ht: ["Mennen ankèt sou gwo krim.", "Ranmase epi analize prev.", "Kolabore ak lapolis ak Depatman Jistis."],
      ar: ["التحقيق في الجرائم الخطيرة.", "جمع الأدلة وتحليلها.", "التعاون مع الشرطة ووزارة العدل."],
    },
    gameplay: {
      en: ["Investigation and case-building roleplay.", "Undercover and surveillance storylines.", "Joint operations with other factions."],
      fr: ["Jeu de rôle d'enquête et de constitution de dossiers.", "Intrigues d'infiltration et de surveillance.", "Opérations conjointes avec d'autres factions."],
      ht: ["Wòl ankèt ak konstriksyon dosye.", "Istwa enfiltrasyon ak siveyans.", "Operasyon ansanm ak lòt faksyon yo."],
      ar: ["أدوار التحقيق وبناء القضايا.", "قصص التخفي والمراقبة.", "عمليات مشتركة مع الفصائل الأخرى."],
    },
  },
  {
    slug: "medics", category: "emergency",
    image: { src: "/images/medics.jpg", width: 1122, height: 1402, position: "50% 0%", official: true },
    name: { en: "Medics", fr: "Secours médicaux", ht: "Medik", ar: "المسعفون" },
    summary: {
      en: "Answer the call and care for those in need.",
      fr: "Répondez à l'appel et prenez soin de ceux qui en ont besoin.",
      ht: "Reponn apèl la epi pran swen moun ki nan bezwen.",
      ar: "لبِّ النداء واعتنِ بمن يحتاجون إلى المساعدة.",
    },
    role: {
      en: "Medics are planned as the emergency medical service of OKAP CITY, responding to injuries and emergencies.",
      fr: "Les secours médicaux sont prévus comme le service médical d'urgence d'OKAP CITY, intervenant lors de blessures et d'urgences.",
      ht: "Medik yo planifye kòm sèvis medikal ijans OKAP CITY, ki reponn ak blese ak ijans.",
      ar: "من المخطط أن يكون المسعفون خدمة الطوارئ الطبية في مدينة OKAP، يستجيبون للإصابات وحالات الطوارئ.",
    },
    responsibilities: {
      en: ["Respond to medical emergencies.", "Treat and transport patients.", "Support other services at incident scenes."],
      fr: ["Intervenir lors d'urgences médicales.", "Soigner et transporter les patients.", "Soutenir les autres services sur les lieux d'incident."],
      ht: ["Reponn ak ijans medikal.", "Trete epi transpòte pasyan yo.", "Sipòte lòt sèvis yo sou kote ensidan an."],
      ar: ["الاستجابة لحالات الطوارئ الطبية.", "علاج المرضى ونقلهم.", "دعم الخدمات الأخرى في مواقع الحوادث."],
    },
    gameplay: {
      en: ["Emergency response and medical roleplay.", "Hospital and ambulance scenarios.", "Teamwork with police and civilians."],
      fr: ["Jeu de rôle d'intervention d'urgence et médical.", "Scénarios d'hôpital et d'ambulance.", "Travail d'équipe avec la police et les civils."],
      ht: ["Wòl repons ijans ak medikal.", "Sènaryo lopital ak anbilans.", "Travay an ekip ak lapolis ak sivil yo."],
      ar: ["أدوار الاستجابة الطارئة والطب.", "سيناريوهات المستشفى والإسعاف.", "العمل الجماعي مع الشرطة والمدنيين."],
    },
  },
  {
    slug: "department-of-justice", category: "government",
    image: { src: "/images/justice.jpg", width: 1672, height: 941, position: "50% 50%", official: true },
    name: { en: "Department of Justice", fr: "Département de la Justice", ht: "Depatman Jistis", ar: "وزارة العدل" },
    summary: {
      en: "Champion fairness and navigate the legal system.",
      fr: "Défendez l'équité et naviguez dans le système juridique.",
      ht: "Defann jistis epi òganize sistèm legal la.",
      ar: "ادعم العدالة وتعامل مع النظام القانوني.",
    },
    role: {
      en: "The Department of Justice is planned as the legal branch of OKAP CITY, where cases are handled and fairness is upheld.",
      fr: "Le Département de la Justice est prévu comme la branche juridique d'OKAP CITY, où les affaires sont traitées et l'équité défendue.",
      ht: "Depatman Jistis la planifye kòm branch legal OKAP CITY, kote yo trete ka yo epi defann jistis.",
      ar: "من المخطط أن تكون وزارة العدل الجهة القانونية في مدينة OKAP، حيث تُعالج القضايا وتُصان العدالة.",
    },
    responsibilities: {
      en: ["Handle legal cases and proceedings.", "Uphold fairness under the law.", "Work with police, the FBI and government."],
      fr: ["Traiter les affaires et procédures juridiques.", "Garantir l'équité devant la loi.", "Travailler avec la police, le FBI et le gouvernement."],
      ht: ["Okipe ka legal ak pwosedi yo.", "Defann jistis anba lalwa.", "Travay ak lapolis, FBI ak gouvènman an."],
      ar: ["معالجة القضايا والإجراءات القانونية.", "صون العدالة وفق القانون.", "العمل مع الشرطة والمكتب الفيدرالي والحكومة."],
    },
    gameplay: {
      en: ["Courtroom and legal roleplay.", "Case and evidence storylines.", "Collaboration with law enforcement."],
      fr: ["Jeu de rôle judiciaire et juridique.", "Intrigues de dossiers et de preuves.", "Collaboration avec les forces de l'ordre."],
      ht: ["Wòl tribinal ak legal.", "Istwa ka ak prev.", "Kolaborasyon ak fòs lòd yo."],
      ar: ["أدوار قاعة المحكمة والقانون.", "قصص القضايا والأدلة.", "التعاون مع جهات إنفاذ القانون."],
    },
  },
  {
    slug: "civilian-life", category: "civilian",
    image: { ...hero, position: "30% 50%" },
    name: { en: "Civilian Life", fr: "Vie civile", ht: "Lavi sivil", ar: "الحياة المدنية" },
    summary: {
      en: "Find your own path and make the city your home.",
      fr: "Trouvez votre propre voie et faites de la ville votre foyer.",
      ht: "Jwenn pwòp chemen ou epi fè vil la kay ou.",
      ar: "اعثر على طريقك الخاص واجعل المدينة موطنك.",
    },
    role: {
      en: "Civilian Life is the foundation of OKAP CITY: residents building their own stories, relationships and daily routines.",
      fr: "La vie civile est le fondement d'OKAP CITY : des habitants qui construisent leurs propres histoires, relations et routines.",
      ht: "Lavi sivil se fondasyon OKAP CITY: rezidan k ap bati pwòp istwa yo, relasyon yo ak woutin chak jou yo.",
      ar: "الحياة المدنية هي أساس مدينة OKAP: سكان يبنون قصصهم وعلاقاتهم وروتينهم اليومي.",
    },
    responsibilities: {
      en: ["Create a character and a personal story.", "Respect the city's rules and other players.", "Interact with every faction."],
      fr: ["Créer un personnage et une histoire personnelle.", "Respecter les règles de la ville et les autres joueurs.", "Interagir avec toutes les factions."],
      ht: ["Kreye yon pèsonaj ak yon istwa pèsonèl.", "Respekte règ vil la ak lòt jwè yo.", "Antre an kontak ak tout faksyon yo."],
      ar: ["إنشاء شخصية وقصة شخصية.", "احترام قواعد المدينة واللاعبين الآخرين.", "التفاعل مع جميع الفصائل."],
    },
    gameplay: {
      en: ["Everyday life and social roleplay.", "Jobs, housing and relationships.", "Open-ended personal storylines."],
      fr: ["Vie quotidienne et jeu de rôle social.", "Emplois, logement et relations.", "Intrigues personnelles ouvertes."],
      ht: ["Lavi chak jou ak wòl sosyal.", "Travay, lojman ak relasyon.", "Istwa pèsonèl ouvè."],
      ar: ["الحياة اليومية والأدوار الاجتماعية.", "الوظائف والسكن والعلاقات.", "قصص شخصية مفتوحة."],
    },
  },
  {
    slug: "businesses", category: "civilian",
    image: { ...hero, position: "75% 60%" },
    name: { en: "Businesses", fr: "Entreprises", ht: "Biznis", ar: "الأعمال" },
    summary: {
      en: "Build an enterprise and bring your ambitions to life.",
      fr: "Bâtissez une entreprise et donnez vie à vos ambitions.",
      ht: "Bati yon antrepriz epi bay anbisyon ou lavi.",
      ar: "ابنِ مشروعاً وحقق طموحاتك.",
    },
    role: {
      en: "Businesses are planned as the economic engine of OKAP CITY, giving players the chance to run and grow ventures.",
      fr: "Les entreprises sont prévues comme le moteur économique d'OKAP CITY, permettant aux joueurs de gérer et développer leurs projets.",
      ht: "Biznis yo planifye kòm motè ekonomik OKAP CITY, ki bay jwè yo chans pou dirije epi grandi antrepriz yo.",
      ar: "من المخطط أن تكون الأعمال محرك اقتصاد مدينة OKAP، وتمنح اللاعبين فرصة إدارة المشاريع وتنميتها.",
    },
    responsibilities: {
      en: ["Run and promote a venture.", "Serve customers and employees.", "Follow the city's rules and laws."],
      fr: ["Gérer et promouvoir une entreprise.", "Servir clients et employés.", "Respecter les règles et les lois de la ville."],
      ht: ["Dirije epi fè pwomosyon yon antrepriz.", "Sèvi kliyan ak anplwaye yo.", "Respekte règ ak lwa vil la."],
      ar: ["إدارة مشروع والترويج له.", "خدمة العملاء والموظفين.", "الالتزام بقواعد المدينة وقوانينها."],
    },
    gameplay: {
      en: ["Entrepreneurship and management roleplay.", "Customer and staff interactions.", "Economic storylines."],
      fr: ["Jeu de rôle d'entrepreneuriat et de gestion.", "Interactions avec clients et personnel.", "Intrigues économiques."],
      ht: ["Wòl antreprenarya ak jesyon.", "Entèraksyon ak kliyan ak anplwaye.", "Istwa ekonomik."],
      ar: ["أدوار ريادة الأعمال والإدارة.", "التفاعل مع العملاء والموظفين.", "قصص اقتصادية."],
    },
  },
  {
    slug: "transportation-services", category: "civilian",
    image: { ...hero, position: "55% 85%" },
    name: { en: "Transportation Services", fr: "Services de transport", ht: "Sèvis transpò", ar: "خدمات النقل" },
    summary: {
      en: "Keep the city moving and connect its people.",
      fr: "Gardez la ville en mouvement et connectez ses habitants.",
      ht: "Kenbe vil la an mouvman epi konekte moun li yo.",
      ar: "أبقِ المدينة في حركة وصِل بين سكانها.",
    },
    role: {
      en: "Transportation Services are planned to keep residents and goods moving across OKAP CITY.",
      fr: "Les services de transport sont prévus pour faire circuler habitants et marchandises à travers OKAP CITY.",
      ht: "Sèvis transpò yo planifye pou kenbe rezidan ak machandiz yo ap sikile nan tout OKAP CITY.",
      ar: "من المخطط أن تُبقي خدمات النقل السكان والبضائع في حركة عبر مدينة OKAP.",
    },
    responsibilities: {
      en: ["Transport passengers and goods.", "Drive safely and follow traffic laws.", "Support businesses and residents."],
      fr: ["Transporter passagers et marchandises.", "Conduire prudemment et respecter le code de la route.", "Soutenir les entreprises et les habitants."],
      ht: ["Transpòte pasaje ak machandiz.", "Kondi ak prekosyon epi respekte lwa transpò yo.", "Sipòte biznis ak rezidan yo."],
      ar: ["نقل الركاب والبضائع.", "القيادة بأمان واحترام قوانين المرور.", "دعم الأعمال والسكان."],
    },
    gameplay: {
      en: ["Driving and logistics roleplay.", "Passenger and delivery scenarios.", "Interactions with businesses and civilians."],
      fr: ["Jeu de rôle de conduite et de logistique.", "Scénarios de passagers et de livraison.", "Interactions avec entreprises et civils."],
      ht: ["Wòl kondwit ak lojistik.", "Sènaryo pasaje ak livrezon.", "Entèraksyon ak biznis ak sivil yo."],
      ar: ["أدوار القيادة والخدمات اللوجستية.", "سيناريوهات الركاب والتوصيل.", "التفاعل مع الأعمال والمدنيين."],
    },
  },
];

export const categories: GuideCategory[] = ["government", "security", "emergency", "civilian"];

export function getGuide(slug: string) { return guides.find(guide => guide.slug === slug); }
