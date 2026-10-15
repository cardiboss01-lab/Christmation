# Siyamthanda's Christmation Invitation

## Files
- `index.html` — invitation content and password screen
- `styles.css` — responsive pink, gold and white styling
- `script.js` — passcode screen, music button, countdown and WhatsApp RSVP
- `assets/nayvees-prayer.mp3` — supplied background music

## Preview
Open `index.html` in a browser. For a more reliable local preview, use a simple local web server (for example, VS Code Live Server).

## Important privacy note
The current passcode screen is a client-side gate for a static website. The password is present in `script.js`, so it is **not secure access control** and can be bypassed by someone who inspects the website files. If the invitation must truly be private, deploy it behind server-side authentication or a hosting provider's access-control feature. Do not publish this version as a secure/password-protected site.

## Music
The supplied MP3 is referenced as `assets/nayvees-prayer.mp3`. Browsers generally require a visitor to tap the music button before audio can play.
