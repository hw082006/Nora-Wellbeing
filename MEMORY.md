# Decisions Log

## 2026-10-13: Retreat page "Not sure?" link and venue gallery
- **Decided:** Replaced all three "Not Sure? Get in Touch" WhatsApp links on `retreats.html` with "Not Sure? Register Your Interest", opening the Brevo signup form in a new tab.
- **Why:** Simplest and most reliable on phones; keeps the existing button styling.
- **Rejected:** Pop-up form overlay (cramped on small phones, extra code); embedding the form inline on the page (Brevo styling clashes with the site).
- **Decided:** Added a horizontal swipe strip of 5 venue photos (`venue1.jpg` to `venue5.jpg`) just after the final booking section, above the footer. All photos share the same height; the portrait bathroom photo is naturally narrower.
- **Rejected:** A cropped grid (cuts off photo edges, takes more vertical space).
