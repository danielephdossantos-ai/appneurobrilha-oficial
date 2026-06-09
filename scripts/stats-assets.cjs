const sharp = require('sharp');
const path = require('path');

const files = [
  path.join(__dirname, '../src/assets/pip-mascot.png'),
  path.join(__dirname, '../src/assets/pip-girl-mascot.png')
];

async function meanColor(file) {
  const { channels } = await sharp(file).stats();
  const r = Math.round(channels[0].mean);
  const g = Math.round(channels[1].mean);
  const b = Math.round(channels[2].mean);
  return { r, g, b };
}

(async () => {
  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      const m = await meanColor(f);
      console.log(f);
      console.log('  size:', meta.width, 'x', meta.height);
      console.log('  mean RGB:', m);
      console.log('');
    } catch (e) {
      console.error('Erro', e.message);
    }
  }
})();
