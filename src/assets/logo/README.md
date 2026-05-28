# Assets de Logo - Casa e Piscina

## 📁 Estrutura de Arquivos

Todos os arquivos de logo foram gerados em `src/assets/logo/` com as seguintes variações:

### SVG (Vetorial - Mestre)
- `logo-principal.svg` - Logo principal (300×100)
- `logo-grande.svg` - Logo grande (1200×1200)
- `favicon.svg` - Favicon (512×512)

### PNG (Raster - 1x + 2x Retina)

#### Logo Header (Desktop/Mobile)
- `logo-header.png` (300×105) - Header desktop
- `logo-header@2x.png` (600×210) - Header desktop retina 2x
- `logo-small.png` (60×45) - Header mobile
- `logo-small@2x.png` (120×90) - Header mobile retina 2x

#### Logo Footer
- `logo-footer.png` (94×94) - Footer padrão
- `logo-footer@2x.png` (188×188) - Footer retina 2x

#### Favicon/Icons
- `favicon-32x32.png` - Favicon 32×32
- `favicon-16x16.png` - Favicon 16×16

#### Apple Devices
- `apple-touch-icon-180x180.png` - iOS e devices Apple

#### Android/PWA
- `android-chrome-192x192.png` - PWA ícone pequeno
- `android-chrome-512x512.png` - PWA ícone grande

#### Redes Sociais / Open Graph
- `og-image-1200x630.png` - Open Graph (Facebook, LinkedIn, etc)
- `avatar-400x400.png` - Avatar perfil (quadrado)

#### Email/Marketing
- `email-logo-600x200.png` - Logo para assinatura de e-mail

## 🔗 Referências Atualizadas

### Arquivos modificados:
1. **src/components/Navbar.astro** - Atualizado para usar `logo-header` e `logo-small` com `<picture>` para responsividade
2. **src/layouts/BaseLayout.astro** - Adicionados links para favicon, apple-touch-icon e manifest
3. **src/data/site.ts** - Atualizado `defaultImage` para usar `og-image-1200x630.png`
4. **public/manifest.json** - Criado novo manifest.json com ícones PWA e metadados

## 📱 Uso dos Logos

### Header (Navbar)
```html
<picture>
  <source media="(max-width: 768px)" srcset="/assets/logo/logo-small.png 1x, /assets/logo/logo-small@2x.png 2x" />
  <img src="/assets/logo/logo-header.png" srcset="/assets/logo/logo-header@2x.png 2x" alt="Casa e Piscina" />
</picture>
```

### Meta Tags (já inclusos em BaseLayout)
```html
<link rel="manifest" href="/manifest.json" />
<link rel="icon" type="image/png" href="/assets/logo/favicon-32x32.png" sizes="32x32" />
<link rel="apple-touch-icon" href="/assets/logo/apple-touch-icon-180x180.png" />
<meta property="og:image" content="/assets/logo/og-image-1200x630.png" />
```

## 🎨 Dimensões por Uso

| Uso | Dimensões | Arquivo(s) |
|-----|-----------|-----------|
| Header Desktop | 300×105 | logo-header.png / @2x |
| Header Mobile | 60×45 | logo-small.png / @2x |
| Footer | 94×94 | logo-footer.png / @2x |
| Favicon | 32×32, 16×16 | favicon-32x32.png, favicon-16x16.png |
| Apple Touch | 180×180 | apple-touch-icon-180x180.png |
| PWA | 192×192, 512×512 | android-chrome-192x192.png / 512x512.png |
| Open Graph | 1200×630 | og-image-1200x630.png |
| Avatar | 400×400 | avatar-400x400.png |
| E-mail | 600×200 | email-logo-600x200.png |

## 📋 Scripts de Geração

Para regenerar os logos a partir dos SVG, execute:

```bash
node generate-logos.js
```

> **Nota:** Todos os arquivos PNG foram gerados automaticamente com qualidade 95 usando Sharp.
