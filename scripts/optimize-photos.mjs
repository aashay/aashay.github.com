import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const jobs = [
  {
    in: '/Users/aashay/Desktop/AR504092.jpg',
    out: 'public/photos/01-hero.jpg',
    label: 'hero',
    extract: { left: 60, top: 750, width: 1305, height: 870 },
  },
  { in: '/Users/aashay/Desktop/AR504089.jpg', out: 'public/photos/02-thesis.jpg', label: 'thesis' },
  { in: '/Users/aashay/Desktop/AR504122.jpg', out: 'public/photos/03-contact.jpg', label: 'contact' },
];

for (const job of jobs) {
  const meta = await sharp(job.in).metadata();
  let pipeline = sharp(job.in).rotate();
  if (job.extract) pipeline = pipeline.extract(job.extract);
  await pipeline
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(job.out);
  const after = await stat(job.out);
  const before = await stat(job.in);
  const outMeta = await sharp(job.out).metadata();
  console.log(
    `${job.label.padEnd(8)} ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}  ` +
    `${(before.size/1024).toFixed(0)}KB -> ${(after.size/1024).toFixed(0)}KB`
  );
}
