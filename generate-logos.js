import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoDir = path.join(__dirname, 'src/assets/logo');

// Configurações de variações a gerar
const variants = [
  {
    name: 'logo-header',
    source: 'logo-principal.svg',
    sizes: [
      { width: 300, height: 105, suffix: '' },
      { width: 600, height: 210, suffix: '@2x' }
    ]
  },
  {
    name: 'logo-small',
    source: 'logo-principal.svg',
    sizes: [
      { width: 60, height: 45, suffix: '' },
      { width: 120, height: 90, suffix: '@2x' }
    ]
  },
  {
    name: 'logo-footer',
    source: 'logo-principal.svg',
    sizes: [
      { width: 94, height: 94, suffix: '' },
      { width: 188, height: 188, suffix: '@2x' }
    ]
  },
  {
    name: 'favicon',
    source: 'favicon.svg',
    sizes: [
      { width: 32, height: 32, suffix: '-32x32' },
      { width: 16, height: 16, suffix: '-16x16' }
    ]
  },
  {
    name: 'apple-touch-icon',
    source: 'logo-grande.svg',
    sizes: [
      { width: 180, height: 180, suffix: '-180x180' }
    ]
  },
  {
    name: 'android-chrome',
    source: 'logo-grande.svg',
    sizes: [
      { width: 192, height: 192, suffix: '-192x192' },
      { width: 512, height: 512, suffix: '-512x512' }
    ]
  },
  {
    name: 'og-image',
    source: 'logo-grande.svg',
    sizes: [
      { width: 1200, height: 630, suffix: '-1200x630' }
    ]
  },
  {
    name: 'avatar',
    source: 'logo-grande.svg',
    sizes: [
      { width: 400, height: 400, suffix: '-400x400' }
    ]
  },
  {
    name: 'email-logo',
    source: 'logo-principal.svg',
    sizes: [
      { width: 600, height: 200, suffix: '-600x200' }
    ]
  }
];

async function generateLogos() {
  console.log('🎨 Gerando variações de logo...\n');

  try {
    for (const variant of variants) {
      const sourcePath = path.join(logoDir, variant.source);
      
      if (!fs.existsSync(sourcePath)) {
        console.warn(`⚠️  Arquivo não encontrado: ${variant.source}`);
        continue;
      }

      for (const size of variant.sizes) {
        const outputName = `${variant.name}${size.suffix}.png`;
        const outputPath = path.join(logoDir, outputName);

        try {
          await sharp(sourcePath)
            .resize(size.width, size.height, {
              fit: 'contain',
              background: { r: 255, g: 255, b: 255, alpha: 0 }
            })
            .png({ quality: 95 })
            .toFile(outputPath);

          console.log(`✅ ${outputName} (${size.width}x${size.height})`);
        } catch (err) {
          console.error(`❌ Erro ao gerar ${outputName}: ${err.message}`);
        }
      }
    }

    console.log('\n✨ Geração de logos concluída!');
  } catch (err) {
    console.error('Erro geral:', err);
    process.exit(1);
  }
}

generateLogos();
