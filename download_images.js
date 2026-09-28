const fs = require('fs');
const path = require('path');
const https = require('https');

const imagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'facial_gold.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'hair_keratin.jpg',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'hair_balayage.jpg',
    url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'nails_art.jpg',
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'skin_korean.jpg',
    url: 'https://images.unsplash.com/photo-1512290900672-1f02e6a09a56?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'spa_wellness.jpg',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'stylist_pooja.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'stylist_sneha.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'stylist_neha.jpg',
    url: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    function makeRequest(currentUrl) {
      https.get(currentUrl, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          return makeRequest(response.headers.location);
        }
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed with status code: ${response.statusCode}`));
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }

    makeRequest(url);
  });
}

async function run() {
  for (const item of imagesToDownload) {
    const dest = path.join(imagesDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      await downloadFile(item.url, dest);
      console.log(`✓ Saved ${item.name}`);
    } catch (e) {
      console.error(`✗ Error downloading ${item.name}:`, e.message);
    }
  }
  console.log('All local image downloads completed!');
}

run();
