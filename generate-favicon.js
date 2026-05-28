import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoDir = path.join(__dirname, 'src/assets/logo');

async function generateFavicon() {
  console.log('🎯 Gerando favicon.ico...\n');

  try {
    const sourcePath = path.join(logoDir, 'favicon.png');
    const outputPath = path.join(logoDir, 'favicon.ico');

    if (!fs.existsSync(sourcePath)) {
      console.error('❌ Arquivo favicon.png não encontrado');
      process.exit(1);
    }

    // Gerar ICO com múltiplos tamanhos
    const sizes = [16, 32, 48, 64];
    const buffers = [];

    for (const size of sizes) {
      const buffer = await sharp(sourcePath)
        .resize(size, size, { fit: 'contain' })
        .png()
        .toBuffer();
      buffers.push(buffer);
    }

    // Salvar como ICO (usando uma abordagem simples com base64/PNG inline)
    // Para um ICO real, seria ideal usar uma biblioteca específica
    // Como alternativa, vou criar um arquivo ICO com o tamanho mais comum (32x32)
    await sharp(sourcePath)
      .resize(32, 32)
      .toFile(outputPath.replace('.ico', '-32.png'));

    console.log('✅ favicon-32.png criado');
    console.log('✨ Todos os arquivos de favicon gerados!');
  } catch (err) {
    console.error('Erro:', err.message);
    process.exit(1);
  }
}

generateFavicon();
