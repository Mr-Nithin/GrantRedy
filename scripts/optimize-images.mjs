// One-off: convert site images to WebP at sensible sizes (run: node scripts/optimize-images.mjs)
import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const ROOT = 'public/assets/img'
const MAX = { blog: 1200, cases: 1000, team: 480, '': 1400 }
const files = []
const walk = dir => readdirSync(dir).forEach(f => {
  const p = join(dir, f)
  statSync(p).isDirectory() ? walk(p) : files.push(p)
})
walk(ROOT)

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) continue
  const sub = file.split(/[\/]/).at(-2)
  const width = MAX[sub === 'img' ? '' : sub] ?? MAX['']
  const out = file.slice(0, -ext.length) + '.webp'
  const animated = ext === '.gif'
  let img = sharp(file, { animated })
  const meta = await img.metadata()
  if (!animated && meta.width > width) img = img.resize({ width })
  if (basename(file).startsWith('logo')) img = img.resize({ height: 104 })   // 2x the 52px display height
  await img.webp({ quality: animated ? 75 : 78, effort: 6 }).toFile(out)
  // The logo's first frame doubles as a light placeholder until the animation loads
  if (basename(file).startsWith('logo'))
    await sharp(file).resize({ height: 104 }).webp({ quality: 85, effort: 6 }).toFile(file.slice(0, -ext.length) + '-static.webp')
  console.log(`${file}  ${(statSync(file).size / 1024).toFixed(0)}KB -> ${(statSync(out).size / 1024).toFixed(0)}KB`)
}

// Smaller copies of the blog images for card thumbnails (used through srcset)
for (const file of readdirSync(join(ROOT, 'blog'))) {
  if (!file.endsWith('.webp') || file.endsWith('-640.webp')) continue
  const src = join(ROOT, 'blog', file)
  await sharp(src).resize({ width: 640 }).webp({ quality: 74, effort: 6 }).toFile(src.replace(/\.webp$/, '-640.webp'))
}
