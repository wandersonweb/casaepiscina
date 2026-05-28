# Casa e Piscina Design System

## Direcao Visual

Site local de servicos com aparencia limpa, confiavel e editorial. O visual evita neon, efeitos futuristas, gradientes decorativos e excesso de sombras. A prioridade e leitura, autoridade local e conversao para WhatsApp/orcamento.

## Cores

- Ink: `#0e2430` para textos fortes, footer e bases escuras.
- Ocean: `#0f6f84` e `#0b5263` para marca, links, secoes e botoes secundarios.
- Ocean soft: `#e7f6f8` e `#f3fbfc` para fundos alternativos.
- Cream: `#fffdf8` para fundo principal claro.
- Sand: `#f8f4ec` para secoes de prova social ou respiro editorial.
- Line: `#d7e5e8` para bordas discretas.
- Muted: `#526873` para textos de apoio.
- WhatsApp: `#168a42` e `#0f7536` para CTA principal.
- Gold: `#b17822` para estrelas, estatisticas ou pequenos destaques.

## Tipografia

Fonte unica: Inter com fallback system-ui. Titulos usam peso forte e line-height curto. Paragrafos usam `leading-8` para leitura confortavel, especialmente no blog.

## Componentes

- `.section`, `.section-tight`, `.section-surface`, `.section-alt` definem ritmo vertical e fundos.
- `.eyebrow`, `.display-title`, `.page-title`, `.section-title`, `.card-title`, `.lead`, `.body-copy` definem hierarquia.
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ocean`, `.btn-lg` cobrem botoes. CTA principal sempre usa WhatsApp.
- `.card`, `.card-hover`, `.media-rounded`, `.cta-band`, `.cta-panel`, `.link-list` padronizam cards, midia, CTAs e listas.
- `.prose` define posts do blog sem depender de plugin extra.

## Regras

- Nao criar cores soltas em componentes sem antes adicionar token.
- Evitar novas variacoes de botao; usar os modificadores existentes.
- Se uma pagina precisa de destaque, preferir `section-alt`, `section-surface` ou `cta-band`.
- Imagens devem manter `alt`, aspect ratio estavel e lazy loading quando nao forem hero.
- Preservar URLs, headings, conteudo indexavel, canonical e schemas.
