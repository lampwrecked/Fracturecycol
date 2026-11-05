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
- **Touch first.** A touch draws its first stretch of crack inside the touch event, before any sound is set up.
- Up to 8 fingers can hold at once. After 75 s with no touch the layers leave a few at a time until the screen is
  black; while resting, a silent ghost crack appears about every 20 s.
- Goes fullscreen on the first touch, keeps the screen awake, and works offline after one visit with internet.

A plugged-in keyboard: **C** clears everything, **M** mutes.

## Settings (add to the end of the address, join with `&`)

| Add this | What it does | Default |
|---|---|---|
| `?debug=1` | small speed readout in the top-left corner | off |
| `?layers=12` | looping layers kept (1–24) | 12 |
| `?hands=8` | fingers that can hold at once | 8 |
| `?idle=75` | seconds of no touch before it dissolves | 75 |
| `?ghost=20` | seconds between resting ghosts (0 = off) | 20 |
| `?fade=1` | how fast light fades (2 = twice as fast) | 1 |
| `?res=1920` | picture detail; also resets the remembered value | 1920, steps down by itself if too slow |
| `?meter=0` | turn off the brightness meter (try if it stutters about 3 times a second) | on |
| `?fast=1` | experimental low-latency drawing (remove if the picture flickers) | off |
| `?fs=0` | don't go fullscreen on first touch | on |

Example: `https://lampwrecked.github.io/Fracturecycol/?debug=1&layers=8`

The earlier menu/library version of this repo is still in the git history.
