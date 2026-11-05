# FRACTURE · WALL

A separate copy of [Fracture](https://fracture.lampwrecked.art) by Lampwrecked, set up for an
**LG 86TR3DK-B CreateBoard** (86", 3840 × 2160, landscape, 40-point infrared touch, built-in Android).

The original `lampwrecked/fracture` repo and fracture.lampwrecked.art are not changed by anything here.
(This copy deliberately has no `CNAME` file, so it can never take over the live site's address.)

## What is different from the live version

- **No menu for the public.** The ☰ button is hidden. Staff: press and hold the **bottom-left corner for 3 seconds**
  (or press **H** on a plugged-in keyboard). It closes itself after 90 seconds. The LAMPWRECKED link button is
  removed so nobody can leave the piece.
- **Everything you touch is at the bottom.** The ☰ button, the menu row, the library's tabs and close button all sit
  along the bottom edge, because the top of an 86" wall screen is out of reach.
- **The library is saved on this screen.** SAVE keeps recipes and songs in the screen's own browser (numbered `#W001`,
  `#W002`…). They work with no internet and are never sent to the public library. Whenever the screen does have
  internet it copies the public library down, so those play offline too. ✕ on a card removes it from this screen only.
- **Many hands.** Up to 8 fingers can hold fractures at once (the board senses up to 40).
- **12 looping layers** instead of 24, to go easier on the screen's built-in computer.
- **Dissolves when people walk away.** After 75 seconds with no touch, layers leave a few at a time until the wall is
  black and quiet, then the title comes back.
- **Resting ghosts.** While nobody is touching, a silent crack grows and fades every ~20 seconds so the screen is never dead.
- **Sharper picture.** Draws at 1920 wide (the live site uses 1200 on touch screens). If the board's built-in computer
  can't keep up it steps down by itself (1600 → 1200 → 900) and remembers.
- **Stays up.** Goes fullscreen on the first touch, keeps the screen awake, blocks pinch-zoom / scrolling / long-press
  menus, and lets go of any touch stuck for more than 20 seconds (a bag or sleeve against the frame).
- Title, menu and screen-shake are sized for the big screen.

Sound, instruments, 174 BPM loop, glitches, songs, and exports are the same as the live piece.

## Settings (add to the end of the address)

| Add this | What it does | Default |
|---|---|---|
| `?idle=120` | seconds of no touch before it dissolves | 75 |
| `?ghost=0` | seconds between resting ghosts (0 = off) | 20 |
| `?res=1920` | picture detail; also resets the remembered value | 1920 |
| `?hands=20` | fingers that can hold at once | 8 |
| `?layers=24` | looping layers kept (1–24) | 12 |
| `?fs=0` | don't go fullscreen on first touch | on |
| `?menu=1` | leave the ☰ button showing for everyone | hidden |
| `?sync=0` | never copy the public library down | on |
| `?kiosk=0` | ☰ always showing, no dissolve, no ghosts | kiosk on |

Join several with `&`, e.g. `…/Fracturecycol/?idle=120&ghost=30`.

## Putting it on the board

1. Turn on GitHub Pages for this repo (Settings → Pages → Deploy from a branch → `main` → Save).
2. On the board, open the browser and go to `https://lampwrecked.github.io/Fracturecycol/`.
3. Touch once. It goes fullscreen and the sound unlocks.
4. In the board's own settings, turn off the floating side toolbar / annotation menu if it shows over the piece.

## Running with bad or no internet

The piece makes all its sound and picture on the spot, so it does not need internet to run, and the library is
stored on the screen itself. Clearing the browser's site data on the board erases the saved library.

- **Board's own browser:** open the address once while it has internet (a phone hotspot is enough). After that the
  same address opens with no internet. In the browser menu choose *Add to Home screen* / *Install app* to get an icon
  that launches it fullscreen.
- **A laptop plugged into the board (HDMI + the USB touch cable):** save `index.html` on the laptop and double-click it.
  Nothing is ever fetched. (Opened this way it cannot copy the public library down; saves on the laptop still work.)

## Speed and sharpness

The board's built-in Android computer is a low-power chip. On it the piece lowers its own picture detail until it
runs smoothly, which looks soft on a 4K panel. For full sharpness and fast touch, run the piece from a laptop
plugged into the board (HDMI + USB touch cable) and add `?res=2560` (or `?res=3840` on a strong laptop).
Hold the bottom-left corner 3 s to open the menu: the line at the top shows `FPS` and `RES` so you can see how it is doing.
