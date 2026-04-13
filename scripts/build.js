import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");
const outDir = path.join(root, "dist");

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.join(srcDir, "index.html"), path.join(outDir, "index.html"));
