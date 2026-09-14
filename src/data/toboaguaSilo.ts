export type SiloPage = {
  slug: string;
  section: "reforma-de-toboagua" | "servicos";
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  focus: string[];
  details: { heading: string; text: string }[];
  audience: string;
  relatedSlugs: string[];
};

export const toboaguaSiloPages: SiloPage[] = [
  {
    slug: "kamikaze", section: "reforma-de-toboagua", eyebrow: "Tipo de equipamento",
    title: "Reforma de Toboágua Kamikaze", seoTitle: "Reforma de Toboágua Kamikaze | Casa e Piscina",
    description: "Reforma de toboágua Kamikaze com recuperação da pista, correção de junções, peças danificadas e acabamento. Atendimento em Minas Gerais.",
    intro: "O kamikaze exige atenção especial à continuidade das calhas e à condição da superfície. Avaliamos o desgaste e indicamos os reparos necessários para recuperar o equipamento.",
    focus: ["Calhas e áreas de transição", "Trincas, fissuras e desgaste da fibra", "Junções, vedações e acabamento uniforme"],
    details: [{ heading: "Avaliação de calhas de alta velocidade", text: "Em atrações de queda livre, a vistoria observa a continuidade das calhas, as emendas e o desgaste da fibra. A análise identifica pontos que precisam de conserto ou manutenção de Kamikaze." }, { heading: "Recuperação com foco no uso contínuo", text: "O reparo de Kamikaze pode envolver recuperação da fibra, ajuste de áreas desgastadas e revitalização do acabamento, conforme as condições encontradas no equipamento." }],
    audience: "Parques aquáticos, clubes, hotéis, resorts e áreas de lazer.",
    relatedSlugs: ["reparo-fibra-de-vidro-toboagua", "manutencao-de-toboagua", "pintura-de-toboagua"],
  },
  {
    slug: "infantil", section: "reforma-de-toboagua", eyebrow: "Tipo de equipamento",
    title: "Reforma de Toboágua Infantil e Tobogã Infantil", seoTitle: "Reforma de Toboágua Infantil e Tobogã | Casa e Piscina",
    description: "Reforma de toboágua infantil e tobogã em fibra de vidro, com recuperação de superfícies, bordas, peças e acabamento. Atendimento em Minas Gerais.",
    intro: "A conservação de brinquedos aquáticos infantis pede uma avaliação cuidadosa de superfícies, cantos, conexões e acabamento. Nossa equipe analisa o equipamento e orienta a reforma necessária.",
    focus: ["Superfícies suaves e bem acabadas", "Reparo de trincas e áreas desgastadas", "Inspeção de fixações e pontos de conexão"],
    details: [{ heading: "Atenção ao acabamento", text: "Áreas ásperas, rachadas ou com perda de acabamento merecem atenção. O reparo de escorregador aquático busca recuperar uma superfície uniforme para a atração." }, { heading: "Manutenção de playground aquático", text: "Inspeções periódicas em brinquedos aquáticos infantis ajudam gestores a identificar sinais de desgaste e programar a manutenção antes que o reparo se amplie." }],
    audience: "Condomínios, clubes, escolas, hotéis e áreas de lazer infantil.",
    relatedSlugs: ["manutencao-de-toboagua", "reparo-fibra-de-vidro-toboagua", "condominios-e-clubes"],
  },
  {
    slug: "tubo-fechado", section: "reforma-de-toboagua", eyebrow: "Tipo de equipamento",
    title: "Reforma de Toboágua Fechado e Tubular", seoTitle: "Reforma de Toboágua Fechado e Tubular | Casa e Piscina",
    description: "Reforma de toboágua fechado e tubular em fibra de vidro, com recuperação de módulos, junções, vazamentos e acabamento interno e externo.",
    intro: "Toboáguas fechados precisam de inspeção detalhada nas calhas internas, nas uniões entre módulos e na condição da fibra. Avaliamos os pontos que exigem reparo e revitalização.",
    focus: ["Inspeção de módulos e junções", "Vedação entre calhas", "Recuperação de fibra e acabamento interno"],
    details: [{ heading: "Junções, emendas e vedações", text: "As conexões entre módulos do toboágua tubular devem ser avaliadas para identificar sinais de desgaste, vazamento nas emendas ou necessidade de reparo de juntas." }, { heading: "Manutenção interna do toboágua fechado", text: "A condição interna do túnel influencia a conservação do equipamento. A avaliação indica os cuidados, reparos de tubo de fibra de vidro e revisões mais adequados." }],
    audience: "Parques aquáticos, clubes, hotéis, resorts e empreendimentos de lazer.",
    relatedSlugs: ["reparo-fibra-de-vidro-toboagua", "manutencao-de-toboagua", "pintura-de-toboagua"],
  },
  {
    slug: "pintura-de-toboagua", section: "servicos", eyebrow: "Serviço técnico",
    title: "Pintura de toboágua e tobogã", seoTitle: "Pintura de Toboágua e Tobogã | Casa e Piscina",
    description: "Pintura e revitalização de toboágua e tobogã em fibra de vidro, com preparação, Gel Coat ou pintura PU conforme o equipamento. Atendimento em Minas Gerais.",
    intro: "A pintura de toboágua recupera o visual de atrações com cor, brilho ou acabamento desgastados. A indicação do sistema depende da condição da fibra e do diagnóstico da superfície.",
    focus: ["Pintura interna e externa de toboágua", "Revitalização e recuperação de acabamento", "Preparação da superfície de fibra de vidro"],
    details: [{ heading: "Pintura, gel coat e sistemas de acabamento", text: "Gel coat, pintura PU e outros sistemas de acabamento têm aplicações e preparações próprias. A escolha precisa considerar o estado da superfície, o uso da atração e a especificação do material; não existe uma única solução superior para todos os casos." }, { heading: "Recuperação antes da pintura", text: "Desbotamento, opacidade, riscos ou superfície desgastada podem indicar necessidade de revitalização. Quando há trincas ou falhas na fibra, o reparo do material deve ser avaliado antes da pintura ou do polimento." }],
    audience: "Gestores de clubes, condomínios, parques, hotéis e áreas de lazer.",
    relatedSlugs: ["reparo-fibra-de-vidro-toboagua", "manutencao-de-toboagua"],
  },
  {
    slug: "reparo-fibra-de-vidro-toboagua", section: "servicos", eyebrow: "Serviço técnico",
    title: "Reparo Estrutural de Fibra de Vidro em Toboágua", seoTitle: "Reparo de Fibra de Vidro em Toboágua | Casa e Piscina",
    description: "Reparo estrutural de fibra de vidro em toboáguas e tobogãs, com tratamento de trincas, rachaduras, delaminações, furos e módulos danificados.",
    intro: "Trincas, fissuras e rachaduras na fibra precisam de uma avaliação antes que o desgaste avance. Realizamos a recuperação conforme as condições encontradas em cada atração.",
    focus: ["Trincas, fissuras e rachaduras", "Áreas com delaminação ou desgaste", "Reforço e acabamento de pontos recuperados"],
    details: [{ heading: "Identificação do dano", text: "A primeira etapa é observar o tipo, a localização e a extensão de trincas, fissuras, rachaduras e danos nas emendas para definir a técnica de reparo apropriada." }, { heading: "Recuperação da fibra e das peças", text: "A laminação de fibra, o reforço estrutural e o reparo de calha são definidos conforme a peça e o dano encontrado. O objetivo é recuperar a área afetada e preparar seu acabamento." }],
    audience: "Proprietários e gestores de atrações aquáticas em toda a região metropolitana.",
    relatedSlugs: ["pintura-de-toboagua", "manutencao-de-toboagua"],
  },
  {
    slug: "manutencao-de-toboagua", section: "servicos", eyebrow: "Serviço técnico",
    title: "Manutenção de Toboágua e Tobogã", seoTitle: "Manutenção de Toboágua e Tobogã | Casa e Piscina",
    description: "Manutenção de toboágua e tobogã com inspeção de fibra, juntas, acabamento, vazamentos, fixações e sinais de desgaste. Atendimento em Minas Gerais.",
    intro: "A manutenção de toboágua acompanha o estado da atração e ajuda a identificar desgaste antes que ele se transforme em um reparo maior. É indicada para toboáguas de fibra, tobogãs e brinquedos aquáticos de uso recorrente.",
    focus: ["Inspeção de fibra, calhas e acabamento", "Manutenção de juntas, emendas e pontos com vazamentos", "Revisão de estrutura, fixações e brinquedos aquáticos"],
    details: [{ heading: "Inspeção e revisão de toboágua", text: "A revisão de toboágua pode observar superfícies, juntas, conexões, escadas, suportes e demais componentes visíveis. Essa inspeção ajuda a registrar necessidades de manutenção e reparo." }, { heading: "Manutenção preventiva planejada", text: "Com os pontos mapeados, o gestor consegue programar a manutenção de tobogã, priorizar vazamentos ou desgaste da fibra e organizar intervenções em períodos adequados." }],
    audience: "Condomínios, clubes, hotéis, resorts e parques aquáticos.",
    relatedSlugs: ["pintura-de-toboagua", "reparo-fibra-de-vidro-toboagua"],
  },
  {
    slug: "parques-aquaticos-resorts", section: "servicos", eyebrow: "Atendimento para empresas",
    title: "Reforma de toboáguas para parques aquáticos e resorts", seoTitle: "Reforma de Toboáguas para Parques e Resorts | Casa e Piscina",
    description: "Reforma e recuperação de toboáguas para parques aquáticos, hotéis e resorts, com planejamento de execução, logística e atendimento em Minas Gerais.",
    intro: "Parques e resorts precisam manter atrações disponíveis, seguras e bem apresentadas. Planejamos o atendimento conforme o tipo de equipamento, as prioridades do local e o cronograma de operação.",
    focus: ["Avaliação de atrações de diferentes portes", "Planejamento de serviços em períodos de menor movimento", "Reparo, acabamento e manutenção preventiva"],
    details: [{ heading: "Atendimento orientado à operação", text: "Em parques aquáticos e resorts, o escopo é alinhado à rotina da operação, ao conjunto de atrações e às necessidades de manutenção do empreendimento." }, { heading: "Planejamento de conservação", text: "A manutenção periódica ajuda a organizar intervenções em toboáguas e outras atrações aquáticas em períodos de menor movimento." }],
    audience: "Parques aquáticos, hotéis, resorts, clubes recreativos e empreendimentos turísticos.",
    relatedSlugs: ["manutencao-de-toboagua", "reparo-fibra-de-vidro-toboagua", "pintura-de-toboagua"],
  },
  {
    slug: "condominios-e-clubes", section: "servicos", eyebrow: "Atendimento para gestores",
    title: "Reforma de Toboágua para Condomínios e Clubes", seoTitle: "Reforma de Toboágua para Clubes e Condomínios | Casa e Piscina",
    description: "Reforma de toboáguas e tobogãs para clubes e condomínios, com avaliação de desgaste, fibra, acabamento e necessidades da área de lazer.",
    intro: "Atrações aquáticas valorizam áreas de lazer, mas exigem conservação. Ajudamos síndicos e gestores a avaliar o estado do tobogã e organizar os serviços necessários.",
    focus: ["Avaliação técnica do desgaste", "Reparo em fibra e acabamento", "Manutenção programada para áreas de lazer"],
    details: [{ heading: "Apoio a síndicos e gestores", text: "Para condomínios e clubes, a necessidade de conservação é traduzida em um escopo claro, útil para a tomada de decisão e o planejamento do serviço." }, { heading: "Cuidados com o uso coletivo", text: "Em áreas de lazer compartilhadas, inspeções e manutenção preventiva de tobogãs e brinquedos aquáticos ajudam a organizar os cuidados do local." }],
    audience: "Condomínios residenciais, clubes, associações, hotéis e espaços de lazer.",
    relatedSlugs: ["manutencao-de-toboagua", "reparo-fibra-de-vidro-toboagua", "infantil"],
  },
];

export const pillarUrl = "/reforma-de-toboagua/";

export type RelatedLink = { href: string; title: string };

const articleRelatedLinks: RelatedLink[] = [
  { href: "/quando-reformar-toboagua/", title: "Quando Reformar um Toboágua" },
  { href: "/trincas-toboagua-fibra/", title: "Trincas em Toboágua de Fibra de Vidro" },
];

const externalRelatedLink: RelatedLink = {
  href: "/reforma-de-piscina-de-fibra-em-belo-horizonte/",
  title: "Reforma de Piscina de Fibra em Belo Horizonte",
};

export function allToboaguaRelatedLinks(excludeHref?: string): RelatedLink[] {
  return [
    { href: pillarUrl, title: "Reforma de Toboágua e Tobogã" },
    ...toboaguaSiloPages.map((page) => ({ href: pageUrl(page), title: page.title })),
    ...articleRelatedLinks,
    externalRelatedLink,
  ].filter((link) => link.href !== excludeHref);
}

export function pageUrl(page: SiloPage) {
  return `/${page.section}/${page.slug}/`;
}
