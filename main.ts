// The Vacuum's Alibi: One Line, 200 Characters
// A robot vacuum explains in one line why it missed a spot.
// Writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt and verifies it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Per protocol 7, I avoid the corner behind the door: something in there has been watching me since March, and it has seniority.";

const MAX_CHARS = 200;

function isSingleSentence(line: string): boolean {
  // Must end with exactly one terminal period and contain no sentence break.
  if (!line.endsWith(".")) return false;
  if (line.endsWith("..")) return false;
  const body = line.slice(0, -1);
  return !/[.!?]/.test(body);
}

if (LINE.length > MAX_CHARS) {
  throw new Error(`Line is ${LINE.length} characters, over the ${MAX_CHARS} limit.`);
}

if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("Line must not contain leading/trailing whitespace or a newline.");
}

if (!isSingleSentence(LINE)) {
  throw new Error("Line must be a single sentence.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Verify the file holds exactly the line plus a trailing newline.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  throw new Error(`Verification failed: ${outPath} does not hold exactly the line.`);
}

console.log(
  `Wrote ${LINE.length}-character line (limit ${MAX_CHARS}, single sentence) to ${outPath}`,
);
