# News image — Monday 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/junyisolri-eng/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/junyisolri-eng/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Entry for the make.fun bounty `news-image-20261123`:
"Sum up 23 November's world news in one image."

See the bounty: https://make.fun/bounty/news-image-20261123

## What it is

A one-page newspaper poster, 1024×1024 PNG, built to be read at a glance:

- **Masthead:** THE WORLD IN ONE DAY — MONDAY 23 NOVEMBER 2026, with a
  cracked-earth / ocean globe.
- **Six stories, across regions and fields**, each with its own pictogram,
  place tag, headline and three-line summary:
  1. **COP31 COLLAPSES** (Climate, Antalya) — UN talks end with no deal;
     the EU rejects a text with no fossil fuels. Longest COP ever; first
     collapse since 2009.
  2. **US–IRAN ON EDGE** (Middle East) — Trump: Iran wants a deal, not an
     "acceptable" one. Iran vows to counter a US blockade. Bahrain: an
     attack hits a civilian site; 2 hurt.
  3. **STRIKES HIT UKRAINE** (War) — Russian strikes kill at least 15 in
     the Kyiv region; a child is killed in Kryvyi Rih. Ukraine hits
     Russian oil sites.
  4. **GAZA TRUCK HIT** (Gaza / West Bank) — Israeli forces hit a truck in
     Gaza; 3 killed. PM-elect Eisenkot calls settler arson in the West
     Bank "Jewish terrorism".
  5. **DEMOCRATS' BIG WIN** (USA) — Democrats win at least 258 House
     seats, their largest majority since 1992, after flipping a North
     Carolina seat.
  6. **CHAPO ISIDRO CAUGHT** (Mexico) — Mexico captures FBI most-wanted
     cartel boss Fausto Isidro Meza Flores. 11 killed in violence after
     the arrest.
- **Footer:** a "THE DAY IN BRIEF" recap line and the sources
  (Reuters, BBC, Dawn, Just Security, SCMP).

News was checked against live reporting of 23 November 2026 (news search,
23 Nov 2026). Nothing is invented: no casualty figure, seat count or
quote beyond what was reported that day.

## How the image was made

- `assets/` holds the AI-generated hero illustration (flat globe + six
  pictograms, no text in it). The pictograms are cropped from it.
- `build.py` (Python + Pillow, build-time only — it is not part of the
  graded program) draws the poster with crisp vector text: masthead,
  six cards, recap band and footer. It is deterministic: same input,
  same `entry.png` bytes.
- `main.ts` is the graded program (Node 22, standard library only): it
  copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output`
  in the grader). Both grader runs therefore write identical bytes,
  with no network.

## Run it locally

```sh
python3 build.py            # rebuild entry.png from assets/
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is 1024×1024 and under 1 MiB, as the bounty requires.

## Files

- `main.ts` — the entry program
- `entry.png` — the image it writes
- `build.py` — the poster builder (build-time only)
- `assets/` — the hero illustration the pictograms are cropped from
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
