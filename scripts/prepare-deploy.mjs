// Assembles a ready-to-upload cPanel folder at ./deploy
// Run after `npm run build`:  node scripts/prepare-deploy.mjs
import { cpSync, rmSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

if (!existsSync(".next/standalone")) {
  console.error("No .next/standalone found — run `npm run build` first.");
  process.exit(1);
}

// Locate the folder containing server.js (handles nested standalone output)
function findServerRoot(dir) {
  if (existsSync(join(dir, "server.js"))) return dir;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (entry !== "node_modules" && statSync(p).isDirectory()) {
      const found = findServerRoot(p);
      if (found) return found;
    }
  }
  return null;
}

const serverRoot = findServerRoot(".next/standalone");
if (!serverRoot) {
  console.error("server.js not found inside .next/standalone — build may have failed.");
  process.exit(1);
}

rmSync("deploy", { recursive: true, force: true });
cpSync(serverRoot, "deploy", { recursive: true });
cpSync(".next/static", "deploy/.next/static", { recursive: true });
cpSync("public", "deploy/public", { recursive: true });

console.log(`✓ deploy/ folder ready (from ${serverRoot}) — zip it and upload to cPanel.`);
