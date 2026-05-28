# Padrao para criar paginas locais de cidades

Este projeto usa um modelo centralizado para paginas locais de SEO com o tema:

`Reforma de Piscina de Fibra em NOME DA CIDADE`

Use este guia sempre que precisar criar uma nova pagina de cidade.

## Onde ficam os dados

As paginas locais ficam centralizadas em:

`src/data/cityPages.ts`

Para criar uma nova cidade, adicione uma entrada no array `cities` com:

- nome da cidade com acentuacao correta
- slug sem acento
- perfil da cidade
- links para cidades proximas

Exemplo:

```ts
["Serra do Cipó", "reforma-de-piscina-de-fibra-em-serra-do-cipo", "rural", [["Lagoa Santa", "/reforma-de-piscina-de-fibra-em-lagoa-santa/"], ["Jaboticatubas", "/reforma-de-piscina-de-fibra-em-jaboticatubas/"]]],
```

## Perfis de cidade

Use `profile` para variar o conteudo automaticamente:

- `rural`: sitios, chacaras, pousadas, areas externas, sol forte, piscinas antigas, manutencao preventiva.
- `urban`: residencias, condominios, clubes, vazamentos, pintura desgastada, troca de equipamentos, manutencao corretiva.
- `premium`: acabamento, modernizacao, LED, cascata, aquecimento, revitalizacao estetica, valorizacao da area de lazer.

## Rotas

As paginas sao geradas pela rota dinamica:

`src/pages/[...slug].astro`

Ela renderiza `CityHomeTemplate` para entradas de `cityPages`.

Nao crie um arquivo `.astro` individual para cada cidade, a menos que exista uma necessidade muito especifica.

## Template visual

O design fica em:

`src/components/CityHomeTemplate.astro`

Esse componente controla:

- hero
- H1
- cards de sinais/problemas
- secoes de conserto, restauracao, revitalizacao e manutencao
- atendimento local
- perguntas frequentes
- CTA final
- imagens e alt text
- botao de WhatsApp
- breadcrumb

Mantenha o design, cores, grids, cards, botoes e espacamentos ja aprovados. Para novas cidades, altere apenas dados/textos via `cityPages.ts`.

## SEO obrigatorio

Cada pagina deve ter:

- H1 unico: `Reforma de Piscina de Fibra em NOME DA CIDADE`
- title: `Reforma de Piscina de Fibra em NOME DA CIDADE | Casa e Piscina`
- description unica
- canonical apontando para a propria URL
- nome da cidade correto em headings, alt text, CTAs e conteudo
- sem `CIDADEXX`
- sem nome de outra cidade por engano

## Hub de cidades

O hub esta em:

`src/pages/empresa-asp.astro`

Ele importa `cityPages` e lista automaticamente as cidades com links internos. Ao adicionar uma cidade em `cityPages.ts`, ela entra no hub e no sitemap automaticamente apos o build.

## Checklist apos criar nova cidade

Rode:

```bash
npm run build
```

Depois confirme:

- a URL foi gerada em `dist`
- H1 esta correto
- title e meta description estao corretos
- canonical esta correto
- WhatsApp aparece na pagina
- a cidade aparece em `/empresa-asp/`
- a URL aparece no sitemap
- nao existe `CIDADEXX`
- layout nao tem overflow no mobile

## Observacao sobre Contagem

Contagem possui uma pagina dedicada em:

`src/pages/reforma-de-piscina-de-fibra-em-contagem.astro`

Ela tambem usa `CityHomeTemplate`, mas nao esta no array `cityPages.ts`. O hub adiciona Contagem manualmente.

