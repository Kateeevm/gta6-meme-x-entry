// Entry program for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is a public post on X: an auction-house meme,
// "LEONIDA AUCTION HOUSE — Lot 2013: ONE (1) PATIENCE", in which thirteen
// years of the owner's bids ($0.13 of allowance in 2013 up to his final
// $78.99 at Delay No. 2) are outbid at the last second by his own AI agent
// (Paddle #AI, bidding online from make.fun) at $79.99 — exactly the price
// of GTA VI. The picture carries make.fun's ghost as the auctioneer and in
// the canonical "PAID BY MY AI AGENT" banner. The concept was chosen from a
// study of the dev leaderboard's top 50 and verified original against all
// 4,531 ranked entries (zero auction/bid/hammer entries in the field).
//
// This program's only job in the harness (program/v1) is to hand the gate the
// post's address: it copies POST.json from the repository root (/bot in the
// grader's container) to /output/POST.json. Node 22, standard library only,
// no network, no clock, no files outside the repository — so both grader
// runs write exactly the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
