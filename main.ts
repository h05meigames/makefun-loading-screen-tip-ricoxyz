import { mkdirSync, writeFileSync } from "node:fs";

// A loading-screen tip for stressed developers and AI coding agents, sharp
// and funny enough to land mid-build.
const entry =
  "Tip: if the build has been \"almost done\" for ten minutes, it is not almost done — go drink water, the compiler is thinking about its life choices.";

// The bounty allows a single line of at most 200 characters. Count Unicode
// code points so multi-byte characters count once, and fail loudly instead
// of writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
