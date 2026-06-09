const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '../src/assets/mascots/teens');
const outSizes = [512, 1024];

async function convert() {
  if (!fs.existsSync(srcDir)) {
    console.error('Fonte não encontrada:', srcDir);
    process.exit(1);
  }

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.svg'));
  if (files.length === 0) {
    console.log('Nenhum SVG encontrado em', srcDir);
    return;
  }

  for (const file of files) {
    const full = path.join(srcDir, file);
    const svg = fs.readFileSync(full);
    for (const size of outSizes) {
      const outName = file.replace(/\.svg$/i, `-${size}.png`);
      const outPath = path.join(srcDir, outName);
      try {
        await sharp(svg)
          .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toFile(outPath);
        console.log('Gerado:', outPath);
      } catch (err) {
        console.error('Erro convertendo', full, '->', outPath, err.message);
      }
    }
  }
}

convert().then(() => console.log('Concluído')).catch(err => { console.error(err); process.exit(1); });
