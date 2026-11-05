# FRACTURE · board build

A separate version of [Fracture](https://fracture.lampwrecked.art) by Lampwrecked, rebuilt to run on the
built-in computer of an **LG 86TR3DK-B CreateBoard** (86", 3840 × 2160, infrared touch).

The original `lampwrecked/fracture` repo and fracture.lampwrecked.art are not changed by anything here.

Address: `https://lampwrecked.github.io/Fracturecycol/`

## What this version is

- **Nothing written on screen.** No title, no menu, no buttons.
- **One interactive loop of 12 layers** at 174 BPM. No library, no songs, no exports.
- **No screen shake.**
- **Drawn by the board's graphics chip.** The live piece reads and rewrites pixels on the main processor, which the
  board can't keep up with. This version only uses drawing operations the graphics chip does itself. Four glitches
  (colour-split, acid, pixel-sort, static) were rebuilt that way, so their texture differs a little from the live piece.
- **Cracks flow one way out of the touch.** Each fracture picks a heading (toward the middle of the screen when the
  touch is near an edge) and everything fans forward from the touch; nothing grows backwards.
- **Touch first.** A touch draws its first stretch of crack inside the touch event, before any sound is set up.
- Up to 8 fingers can hold at once. Once there are layers, the loop keeps playing and growing with nobody there.
  Before the first touch (and after a clear), a silent ghost crack appears about every 20 s.
- Goes fullscreen on the first touch, keeps the screen awake, and works offline after one visit with internet.

A plugged-in keyboard: **C** clears everything, **M** mutes.

## Hidden tuning panel

Tap the **bottom-left corner 5 times quickly**. A green readout (speed, detail, sound state) and a row of buttons appear:
`RES −/+` picture detail, `LAYERS −/+`, `TRAILS −/+` how long light lingers so fractures build on each other, `FX` glitch amount (2 full, 1 half, 0 lines only), `METER` brightness meter on/off,
`AUDIO` switches how sound reaches the speakers (safe / element / fast) or turns sound OFF entirely, `SOUND TEST` rebuilds the sound and plays a plain beep, `CLEAR`, `HIDE`. Whatever is set here is remembered on that screen.

## Settings (add to the end of the address, join with `&`)

| Add this | What it does | Default |
|---|---|---|
| `?debug=1` | start with the readout and tuning buttons showing | off |
| `?fx=2` | glitch effects: 2 full, 1 half, 0 lines only | 2 |
| `?audio=3` | sound: 1 safe, 0 fast, 2 element, 3 off | 1 |
| `?layers=12` | looping layers kept (1–24) | 12 |
| `?hands=8` | fingers that can hold at once | 8 |
| `?idle=120` | seconds of no touch before it dissolves back to black (0 = never) | 0 |
| `?ghost=20` | seconds between resting ghosts (0 = off) | 20 |
| `?trails=4` | how long light lingers before fading to black (bigger = longer) | 4 |
| `?res=1920` | picture detail; also resets the remembered value | 1920, steps down by itself if too slow |
| `?meter=0` | turn off the brightness meter (try if it stutters about 3 times a second) | on |
| `?fast=1` | experimental low-latency drawing (remove if the picture flickers) | off |
| `?fs=0` | don't go fullscreen on first touch | on |

Example: `https://lampwrecked.github.io/Fracturecycol/?debug=1&layers=8`

The earlier menu/library version of this repo is still in the git history.
