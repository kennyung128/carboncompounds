// Zero-dependency build: validates local asset references, then copies public/ -> dist/
import { cpSync, rmSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "public", OUT = "dist";
const html = readFileSync(join(SRC, "index.html"), "utf8");

// Check every local /path reference in index.html exists
const refs = [...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map(m => m[1]);
const missing = refs.filter(r => !existsSync(join(SRC, r)));
if (missing.length) {
  console.error("Missing assets:\n  " + missing.join("\n  "));
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(SRC, OUT, { recursive: true });
console.log(`Build OK: ${refs.length} asset references verified, ${SRC}/ copied to ${OUT}/`);
