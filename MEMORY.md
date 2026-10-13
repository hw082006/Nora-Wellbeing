# Decisions Log

## 2026-10-13: Retreat page "Not sure?" link and venue gallery
- **Decided:** Replaced all three "Not Sure? Get in Touch" WhatsApp links on `retreats.html` with "Not Sure? Register Your Interest", opening the Brevo signup form in a new tab.
- **Why:** Simplest and most reliable on phones; keeps the existing button styling.
- **Rejected:** Pop-up form overlay (cramped on small phones, extra code); embedding the form inline on the page (Brevo styling clashes with the site).
- **Decided:** Added a horizontal swipe strip of 5 venue photos (`venue1.jpg` to `venue5.jpg`) just after the final booking section, above the footer. All photos share the same height; the portrait bathroom photo is naturally narrower.
- **Rejected:** A cropped grid (cuts off photo edges, takes more vertical space).

## 2026-10-13: Two more venue photos
- **Decided:** Added the bougainvillea villa photo as the first slide and the sunset valley view as the last slide in the venue strip.
- **Why:** User's chosen order (arrive at the villa, see the rooms, end on the view).
- **Detail:** The villa photo is wider than the others, so it is cropped slightly at the sides (4:3) to match the bedroom photos.

## 2026-10-13: Home page "What I Offer" photos
- **Decided:** Somatic Treatments box uses `treatment-room.jpg` (massage table), Retreats box uses `IMG_9309.JPG` (olive grove walk), Digital Consultancy box uses `digital-consultancy.jpg` (laptop session) and no longer says "Coming soon".
- **Replaced:** `womb_hero.jpg` and `yoga.jpg` on the home page (files kept, still used elsewhere or available).
- **Follow-up:** Retreats box now uses `olive-grove-walk.jpg`, a resized copy of `IMG_9309.JPG` (900x1600, about 340KB instead of 1MB) for faster loading on phones. The original is kept in the repo.
