import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "By accepting these Terms, the user grants the Company a perpetual, non-exclusive license to borrow the user's dreams for internal testing, returning them by dawn, slightly used.";

function main() {
  validate(ENTRY);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
}

main();

function validate(line) {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) throw new Error("entry must not be only whitespace");
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}
