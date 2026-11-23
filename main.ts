// News-image entry for make.fun bounty news-image-20261123 (Node 22, stdlib only).
// The image is the entry.png beside this file: a 1024x1024 newspaper poster
// summing up Monday 23 November 2026 in six stories (COP31, US-Iran, Ukraine,
// Gaza/West Bank, US House, Mexico). The program copies it to /output/entry.png,
// so both grader runs write the same bytes. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
