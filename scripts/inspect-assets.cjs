const sharp = require('sharp');
const path = require('path');

const files = [
  path.join(__dirname, '../src/assets/pip-mascot.png'),
  path.join(__dirname, '../src/assets/pip-girl-mascot.png'),
  path.join(__dirname, '../src/assets/pip-baby.png'),
  path.join(__dirname, '../src/assets/pip-egg.png')
];

async function inspect() {
  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      console.log(f);
      console.log('  format:', meta.format);
      console.log('  width x height:', meta.width, 'x', meta.height);
      console.log('  hasAlpha:', meta.hasAlpha);
      console.log('  channels:', meta.channels);
      console.log('');
    } catch (e) {
      console.error('Erro lendo', f, e.message);
    }
  }
}

inspect();
