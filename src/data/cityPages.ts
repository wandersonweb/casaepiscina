export type CityProfile = "rural" | "urban" | "premium";

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityPage {
  city: string;
  slug: string;
  profile: CityProfile;
  title: string;
  description: string;
  heroText: string;
  introParagraph: string;
  repairIntro: string;
  restorationIntro: string;
  localText: string;
  finalCta: string;
  cardOffset: number;
  faqs: CityFaq[];
  nearbyLinks?: Array<{ city: string; href: string }>;
}

const cityProfiles: Record<CityProfile, { intro: string; repair: string; restoration: string; hero: string }> = {
  rural: {
    hero: "Restauração, conserto, pintura e manutenção para piscinas de fibra em casas, sítios, chácaras e áreas externas.",
    intro: "Em áreas externas, sítios e chácaras, a piscina de fibra costuma sofrer mais com sol forte, tempo de uso e períodos longos sem manutenção.",
    repair: "O conserto é indicado quando a piscina apresenta trincas, furos, vazamentos ou desgaste causado por uso intenso, exposição ao sol e movimentação natural do terreno.",
    restoration: "A restauração é uma boa escolha para piscinas antigas ou ressecadas, principalmente quando há manchas, perda de brilho, bolhas ou pintura muito desgastada.",
  },
  urban: {
    hero: "Conserto rápido, restauração, pintura, manutenção e troca de equipamentos para piscinas de fibra em residências, condomínios e clubes.",
    intro: "Em regiões urbanas, muitas piscinas de fibra ficam em casas, condomínios, clubes e áreas de lazer que precisam de manutenção correta para evitar vazamentos e perda de acabamento.",
    repair: "O conserto é indicado quando aparecem trincas, vazamentos, bolhas, pintura descascando ou falhas em bombas, filtros e acessórios da piscina.",
    restoration: "A restauração recupera piscinas com pintura desgastada, manchas e problemas na fibra, melhorando o visual e a segurança para o uso diário.",
  },
  premium: {
    hero: "Reforma, revitalização estética, iluminação, aquecimento, cascata e acabamento para piscinas de fibra em áreas de lazer valorizadas.",
    intro: "Em imóveis residenciais, condomínios e áreas de lazer de maior padrão, a piscina de fibra precisa unir beleza, acabamento bem feito e funcionamento confiável.",
    repair: "O conserto profissional corrige trincas, vazamentos e imperfeições sem comprometer o acabamento da piscina e a harmonia da área externa.",
    restoration: "A restauração é ideal para renovar brilho, pintura e acabamento, além de abrir espaço para modernizações como LED, cascata e aquecimento.",
  },
};

const descriptionTemplates = [
  (city: string) => `Reforma de piscina de fibra em ${city} com conserto de trincas, vazamentos, pintura, restauração e manutenção. Solicite seu orçamento com a Casa e Piscina.`,
  (city: string) => `Conserto e reforma de piscina de fibra em ${city}. Fazemos restauração, revitalização, pintura, reparo de vazamentos e manutenção completa.`,
  (city: string) => `Precisa reformar sua piscina de fibra em ${city}? Atendemos com conserto, restauração, pintura, instalação de equipamentos e manutenção especializada.`,
  (city: string) => `Casa e Piscina atende ${city} com reforma de piscina de fibra, conserto de trincas, pintura, revitalização, filtragem e manutenção preventiva.`,
];

const finalCtas = [
  (city: string) => `Solicite agora seu orçamento para reforma de piscina de fibra em ${city}.`,
  (city: string) => `Sua piscina em ${city} está com trincas, vazamentos ou pintura desgastada? Fale com a Casa e Piscina.`,
  (city: string) => `Peça uma avaliação para conserto, restauração ou manutenção de piscina em ${city}.`,
  (city: string) => `Transforme sua piscina antiga em uma área de lazer renovada. Atendemos em ${city} e região.`,
  (city: string) => `Entre em contato e veja a melhor solução para recuperar sua piscina de fibra em ${city}.`,
];

const faqOptions = [
  (city: string): CityFaq => ({
    question: `Quanto custa reforma de piscina de fibra em ${city}?`,
    answer: `O valor depende do tamanho da piscina, estado da fibra, necessidade de pintura, reparos, vazamentos e equipamentos. O ideal é solicitar uma avaliação em ${city} para receber uma orientação correta.`,
  }),
  (city: string): CityFaq => ({
    question: `Vocês fazem conserto de vazamento em piscina de fibra em ${city}?`,
    answer: `Sim. Avaliamos a origem do vazamento e realizamos o reparo com fibra de vidro, resina, impermeabilização e acabamento adequado para piscinas de fibra.`,
  }),
  (city: string): CityFaq => ({
    question: "A restauração resolve piscina de fibra desbotada?",
    answer: `Na maioria dos casos, sim. A restauração pode incluir lixamento, correção de imperfeições, pintura e acabamento para recuperar o visual da piscina em ${city}.`,
  }),
  (city: string): CityFaq => ({
    question: `Vocês atendem sítios e chácaras em ${city}?`,
    answer: `Sim. Atendemos casas, sítios, chácaras, condomínios, clubes e áreas de lazer em ${city} e bairros ou regiões próximas.`,
  }),
  (city: string): CityFaq => ({
    question: "É possível pintar piscina de fibra antiga?",
    answer: `É possível quando a estrutura permite o serviço. Antes da pintura, avaliamos trincas, bolhas, manchas e aderência do acabamento para garantir melhor durabilidade.`,
  }),
  (city: string): CityFaq => ({
    question: "Quando vale a pena restaurar uma piscina de fibra?",
    answer: `A restauração vale a pena quando a piscina apresenta aparência envelhecida, pintura opaca, manchas, pequenas trincas ou desgaste que ainda pode ser recuperado sem troca completa.`,
  }),
  (city: string): CityFaq => ({
    question: "Vocês instalam iluminação LED em piscina?",
    answer: `Sim. Podemos orientar e instalar iluminação LED em reformas e modernizações, melhorando o visual noturno e a valorização da área de lazer.`,
  }),
  (city: string): CityFaq => ({
    question: "Também fazem manutenção de bomba e filtro?",
    answer: `Sim. Além da reforma da fibra, fazemos avaliação de filtragem, bombas, registros, tubulações e acessórios para melhorar o funcionamento da piscina.`,
  }),
  (city: string): CityFaq => ({
    question: "A reforma corrige trincas e bolhas na fibra?",
    answer: `Sim. Trincas, bolhas e pontos frágeis podem ser tratados com lixamento, reforço com fibra de vidro, resina, nivelamento e acabamento técnico.`,
  }),
  (city: string): CityFaq => ({
    question: `Vocês fazem orçamento em ${city}?`,
    answer: `Sim. Você pode entrar em contato pelo WhatsApp, informar o problema da piscina e solicitar uma avaliação para reforma, conserto ou manutenção em ${city}.`,
  }),
];

const cities = [
  ["Lagoa Santa", "reforma-de-piscina-de-fibra-em-lagoa-santa", "premium", [["Vespasiano", "/reforma-de-piscina-de-fibra-em-vespasiano/"], ["Confins", "/reforma-de-piscina-de-fibra-em-confins/"]]],
  ["Vespasiano", "reforma-de-piscina-de-fibra-em-vespasiano", "urban", [["Lagoa Santa", "/reforma-de-piscina-de-fibra-em-lagoa-santa/"], ["São José da Lapa", "/reforma-de-piscina-de-fibra-em-sao-jose-da-lapa/"]]],
  ["Sarzedo", "reforma-de-piscina-de-fibra-em-sarzedo", "urban", [["Ibirité", "/reforma-de-piscina-de-fibra-em-ibirite/"], ["Brumadinho", "/reforma-de-piscina-de-fibra-em-brumadinho/"]]],
  ["Taquaraçu de Minas", "reforma-de-piscina-de-fibra-em-taquaracu-de-minas", "rural", [["Jaboticatubas", "/reforma-de-piscina-de-fibra-em-jaboticatubas/"], ["Nova União", "/reforma-de-piscina-de-fibra-em-nova-uniao/"]]],
  ["São José da Lapa", "reforma-de-piscina-de-fibra-em-sao-jose-da-lapa", "urban", [["Vespasiano", "/reforma-de-piscina-de-fibra-em-vespasiano/"], ["Pedro Leopoldo", "/reforma-de-piscina-de-fibra-em-pedro-leopoldo/"]]],
  ["São Joaquim de Bicas", "reforma-de-piscina-de-fibra-em-sao-joaquim-de-bicas", "urban", [["Betim", "/reforma-de-piscina-de-fibra-em-betim/"], ["Brumadinho", "/reforma-de-piscina-de-fibra-em-brumadinho/"]]],
  ["Sabará", "reforma-de-piscina-de-fibra-em-sabara", "urban", [["Santa Luzia", "/reforma-de-piscina-de-fibra-em-santa-luzia/"], ["Nova Lima", "/reforma-de-piscina-de-fibra-em-nova-lima/"]]],
  ["Santa Luzia", "reforma-de-piscina-de-fibra-em-santa-luzia", "urban", [["Sabará", "/reforma-de-piscina-de-fibra-em-sabara/"], ["Ribeirão das Neves", "/reforma-de-piscina-de-fibra-em-ribeirao-das-neves/"]]],
  ["Serra do Cipó", "reforma-de-piscina-de-fibra-em-serra-do-cipo", "rural", [["Lagoa Santa", "/reforma-de-piscina-de-fibra-em-lagoa-santa/"], ["Jaboticatubas", "/reforma-de-piscina-de-fibra-em-jaboticatubas/"]]],
  ["Rio Acima", "reforma-de-piscina-de-fibra-em-rio-acima", "rural", [["Nova Lima", "/reforma-de-piscina-de-fibra-em-nova-lima/"], ["Raposos", "/reforma-de-piscina-de-fibra-em-raposos/"]]],
  ["Rio Manso", "reforma-de-piscina-de-fibra-em-rio-manso", "rural", [["Brumadinho", "/reforma-de-piscina-de-fibra-em-brumadinho/"], ["Itatiaiuçu", "#"]]],
  ["Ribeirão das Neves", "reforma-de-piscina-de-fibra-em-ribeirao-das-neves", "urban", [["Santa Luzia", "/reforma-de-piscina-de-fibra-em-santa-luzia/"], ["Pedro Leopoldo", "/reforma-de-piscina-de-fibra-em-pedro-leopoldo/"]]],
  ["Pedro Leopoldo", "reforma-de-piscina-de-fibra-em-pedro-leopoldo", "premium", [["Confins", "/reforma-de-piscina-de-fibra-em-confins/"], ["Matozinhos", "/reforma-de-piscina-de-fibra-em-matozinhos/"]]],
  ["Raposos", "reforma-de-piscina-de-fibra-em-raposos", "rural", [["Nova Lima", "/reforma-de-piscina-de-fibra-em-nova-lima/"], ["Rio Acima", "/reforma-de-piscina-de-fibra-em-rio-acima/"]]],
  ["Nova Lima", "reforma-de-piscina-de-fibra-em-nova-lima", "premium", [["Raposos", "/reforma-de-piscina-de-fibra-em-raposos/"], ["Rio Acima", "/reforma-de-piscina-de-fibra-em-rio-acima/"]]],
  ["Nova União", "reforma-de-piscina-de-fibra-em-nova-uniao", "rural", [["Taquaraçu de Minas", "/reforma-de-piscina-de-fibra-em-taquaracu-de-minas/"], ["Caeté", "/reforma-de-piscina-de-fibra-em-caete/"]]],
  ["Mateus Leme", "reforma-de-piscina-de-fibra-em-mateus-leme", "urban", [["Juatuba", "/reforma-de-piscina-de-fibra-em-juatuba/"], ["Florestal", "/reforma-de-piscina-de-fibra-em-florestal/"]]],
  ["Matozinhos", "reforma-de-piscina-de-fibra-em-matozinhos", "urban", [["Pedro Leopoldo", "/reforma-de-piscina-de-fibra-em-pedro-leopoldo/"], ["Capim Branco", "/reforma-de-piscina-de-fibra-em-capim-branco/"]]],
  ["Mário Campos", "reforma-de-piscina-de-fibra-em-mario-campos", "urban", [["Betim", "/reforma-de-piscina-de-fibra-em-betim/"], ["Sarzedo", "/reforma-de-piscina-de-fibra-em-sarzedo/"]]],
  ["Juatuba", "reforma-de-piscina-de-fibra-em-juatuba", "urban", [["Mateus Leme", "/reforma-de-piscina-de-fibra-em-mateus-leme/"], ["Florestal", "/reforma-de-piscina-de-fibra-em-florestal/"]]],
  ["Ibirité", "reforma-de-piscina-de-fibra-em-ibirite", "urban", [["Sarzedo", "/reforma-de-piscina-de-fibra-em-sarzedo/"], ["Betim", "/reforma-de-piscina-de-fibra-em-betim/"]]],
  ["Itabirito", "reforma-de-piscina-de-fibra-em-itabirito", "rural", [["Nova Lima", "/reforma-de-piscina-de-fibra-em-nova-lima/"], ["Ouro Preto", "/reforma-de-piscina-de-fibra-em-ouro-preto/"]]],
  ["Jaboticatubas", "reforma-de-piscina-de-fibra-em-jaboticatubas", "rural", [["Lagoa Santa", "/reforma-de-piscina-de-fibra-em-lagoa-santa/"], ["Taquaraçu de Minas", "/reforma-de-piscina-de-fibra-em-taquaracu-de-minas/"]]],
  ["Esmeraldas", "reforma-de-piscina-de-fibra-em-esmeraldas", "rural", [["Ribeirão das Neves", "/reforma-de-piscina-de-fibra-em-ribeirao-das-neves/"], ["Betim", "/reforma-de-piscina-de-fibra-em-betim/"]]],
  ["Florestal", "reforma-de-piscina-de-fibra-em-florestal", "rural", [["Juatuba", "/reforma-de-piscina-de-fibra-em-juatuba/"], ["Mateus Leme", "/reforma-de-piscina-de-fibra-em-mateus-leme/"]]],
  ["Mariana", "reforma-de-piscina-de-fibra-em-mariana", "rural", [["Ouro Preto", "/reforma-de-piscina-de-fibra-em-ouro-preto/"], ["Congonhas", "/reforma-de-piscina-de-fibra-em-congonhas/"]]],
  ["Confins", "reforma-de-piscina-de-fibra-em-confins", "premium", [["Lagoa Santa", "/reforma-de-piscina-de-fibra-em-lagoa-santa/"], ["Pedro Leopoldo", "/reforma-de-piscina-de-fibra-em-pedro-leopoldo/"]]],
  ["Ouro Preto", "reforma-de-piscina-de-fibra-em-ouro-preto", "rural", [["Itabirito", "/reforma-de-piscina-de-fibra-em-itabirito/"], ["Mariana", "/reforma-de-piscina-de-fibra-em-mariana/"]]],
  ["Congonhas", "reforma-de-piscina-de-fibra-em-congonhas", "urban", [["Ouro Preto", "/reforma-de-piscina-de-fibra-em-ouro-preto/"], ["Mariana", "/reforma-de-piscina-de-fibra-em-mariana/"]]],
  ["Caeté", "reforma-de-piscina-de-fibra-em-caete", "rural", [["Sabará", "/reforma-de-piscina-de-fibra-em-sabara/"], ["Nova União", "/reforma-de-piscina-de-fibra-em-nova-uniao/"]]],
  ["Capim Branco", "reforma-de-piscina-de-fibra-em-capim-branco", "rural", [["Matozinhos", "/reforma-de-piscina-de-fibra-em-matozinhos/"], ["Pedro Leopoldo", "/reforma-de-piscina-de-fibra-em-pedro-leopoldo/"]]],
  ["Baldim", "reforma-de-piscina-de-fibra-em-baldim", "rural", [["Jaboticatubas", "/reforma-de-piscina-de-fibra-em-jaboticatubas/"], ["Capim Branco", "/reforma-de-piscina-de-fibra-em-capim-branco/"]]],
  ["Brumadinho", "reforma-de-piscina-de-fibra-em-brumadinho", "rural", [["Sarzedo", "/reforma-de-piscina-de-fibra-em-sarzedo/"], ["Nova Lima", "/reforma-de-piscina-de-fibra-em-nova-lima/"]]],
  ["Betim", "reforma-de-piscina-de-fibra-em-betim", "urban", [["Ibirité", "/reforma-de-piscina-de-fibra-em-ibirite/"], ["São Joaquim de Bicas", "/reforma-de-piscina-de-fibra-em-sao-joaquim-de-bicas/"]]],
  ["Sete Lagoas", "reforma-de-piscina-de-fibra-em-sete-lagoas", "urban", [["Matozinhos", "/reforma-de-piscina-de-fibra-em-matozinhos/"], ["Capim Branco", "/reforma-de-piscina-de-fibra-em-capim-branco/"]]],
] as const;

export const cityPages: CityPage[] = cities.map(([city, slug, profile, nearbyLinks], index) => {
  const profileCopy = cityProfiles[profile];
  const faqStart = index % faqOptions.length;
  const pickFaq = (offset: number) => faqOptions[(faqStart + offset) % faqOptions.length](city);

  return {
    city,
    slug,
    profile,
    title: `Reforma de Piscina de Fibra em ${city} | Casa e Piscina`,
    description: descriptionTemplates[index % descriptionTemplates.length](city),
    heroText: profileCopy.hero,
    introParagraph: `${profileCopy.intro} A Casa e Piscina atende ${city} com avaliação técnica para reforma, conserto de piscina de fibra em ${city}, restauração, pintura, revitalização e manutenção especializada.`,
    repairIntro: `${profileCopy.repair} Nossa equipe realiza conserto de piscina em ${city} com materiais adequados, acabamento cuidadoso e orientação clara sobre o que precisa ser corrigido.`,
    restorationIntro: `${profileCopy.restoration} O processo de restauração de piscina em ${city} ajuda a recuperar a proteção da fibra, valorizar a área de lazer e evitar problemas maiores.`,
    localText: `Atendemos em ${city} e bairros próximos, oferecendo avaliação para piscinas de fibra com trincas, vazamentos, pintura desgastada, manchas ou necessidade de revitalização. O serviço é indicado para residências, condomínios, sítios, chácaras, clubes e áreas de lazer que precisam de reparo técnico e acabamento durável.`,
    finalCta: finalCtas[index % finalCtas.length](city),
    cardOffset: index % 4,
    faqs: [
      pickFaq(0),
      pickFaq(2),
      pickFaq(4),
      pickFaq(6),
    ],
    nearbyLinks: nearbyLinks.filter((link) => link[1] !== "#").map(([nearbyCity, href]) => ({ city: nearbyCity, href })),
  };
});

export const cityPageSlugs = new Set(cityPages.map((page) => page.slug));

export function getCityPage(slug: string) {
  return cityPages.find((page) => page.slug === slug);
}
