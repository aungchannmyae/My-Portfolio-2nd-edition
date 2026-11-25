// Builds sanity-seed.ndjson from src/data/*.js so the current site content
// can be imported into Sanity once:
//
//   node scripts/make-sanity-seed.mjs
//   npx sanity dataset import sanity-seed.ndjson production --replace
//
// Images and the CV in /public are uploaded by the import. Document IDs are
// fixed, so running it again overwrites these documents instead of duplicating.

import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { default: profile } = await import(pathToFileURL(path.join(root, "src/data/profile.js")));
const { default: projects } = await import(pathToFileURL(path.join(root, "src/data/projects.js")));

// "/Tiny.png" -> image@file:///…/public/Tiny.png
const asset = (kind, publicPath) =>
  `${kind}@${pathToFileURL(path.join(root, "public", publicPath)).href}`;

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const key = (text, i) => `${slug(text).slice(0, 20)}-${i}`;

const docs = [
  {
    _id: "profile",
    _type: "profile",
    name: profile.name,
    role: profile.role,
    headline: profile.headline,
    tagline: profile.tagline,
    intro: profile.intro,
    photo: { _type: "image", _sanityAsset: asset("image", profile.photo.src) },
    cv: { _type: "file", _sanityAsset: asset("file", profile.cv.url) },
    location: profile.location,
    email: profile.email,
    githubUsername: profile.github.username,
    githubUrl: profile.github.url,
    skills: profile.skills,
    techIcons: profile.techIcons.map(({ name, light = false }, i) => ({
      _key: key(name, i),
      _type: "techIcon",
      name,
      light,
    })),
    education: profile.education.map((item, i) => ({
      _key: key(item.school, i),
      _type: "educationItem",
      ...item,
    })),
    learningNote: profile.learningNote.join("\n"),
  },
  ...projects.map((p, i) => ({
    _id: `project-${slug(p.title)}`,
    _type: "project",
    title: p.title,
    order: (i + 1) * 10,
    image: { _type: "image", _sanityAsset: asset("image", p.image.src) },
    imagePosition: p.imagePosition ?? "top",
    imageFullWidth: p.imageFullWidth ?? false,
    status: p.status,
    device: p.device,
    description: p.description,
    tech: p.tech,
    ...(p.liveUrl && { liveUrl: p.liveUrl }),
    ...(p.githubUrl && { githubUrl: p.githubUrl }),
    ...(p.credit && { credit: p.credit }),
  })),
];

const out = path.join(root, "sanity-seed.ndjson");
writeFileSync(out, docs.map((d) => JSON.stringify(d)).join("\n") + "\n");
console.log(`Wrote ${docs.length} documents to ${path.relative(root, out)}`);
