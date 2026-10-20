// Downloads partner logos and photos from the old WordPress site into /public.
// Run once (from a machine that can reach matenergy.com.pk) before the domain moves:
//   npm run fetch-media
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = "https://matenergy.com.pk/wp-content/uploads/";
const files = {
  "partners/jinko.png": "2025/04/Jinko-1.png",
  "partners/longi.svg": "2025/04/longi.svg",
  "partners/trinasolar.png": "2025/04/Trina_Solar_logo.svg.png",
  "partners/huawei.png": "2025/04/Huawei-Logo.png",
  "partners/sungrow.png": "2025/04/Sungrow.png",
  "partners/growatt.png": "2025/04/Growatt-e1745925296196.png",
  "partners/goodwe.png": "2025/04/Goodwe.png",
  "partners/solis.png": "2025/04/solis.png",
  "partners/inverex.png": "2025/04/Inverex.png",
  "partners/byd.png": "2025/04/BYD.png",
  "partners/pylontech.png": "2025/04/pylontech.png",
  "partners/sunwoda.png": "2025/04/Sunwoda-e1745925332643.png",
  "partners/narada.png": "2025/04/Narada.png",
  "images/site/about.jpg": "2025/04/aboutImg1.jpg",
  "images/site/contact.jpg": "2025/04/contactImg1.jpg",
  "images/site/home-energy-audit.jpg": "2024/08/homeEnergyAuditsImg4.jpg",
  "images/site/after-sales.png": "2024/08/salesServices.png",
  "images/site/on-grid.png": "2025/04/ON-GridSolarSystemImg.png",
  "images/site/off-grid.jpg": "2025/04/OFF-GridSolarSystemImg.jpg",
  "images/site/hybrid.jpg": "2025/04/HybridSolarSystemImg.jpg",
};

let failed = 0;
for (const [dest, src] of Object.entries(files)) {
  const out = path.join("public", dest);
  try {
    const res = await fetch(base + src);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${dest}`);
  } catch (err) {
    failed++;
    console.error(`✗ ${dest} (${base + src}): ${err.message}`);
  }
}
process.exitCode = failed ? 1 : 0;
