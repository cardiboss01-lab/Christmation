// Siyamthanda's Christmation invitation interactions
// NOTE: This is a front-end passcode gate, not secure server-side authentication.
// For real privacy, deploy behind hosting/server authentication.

const INVITATION_PASSWORD = "Siya's_confirmed";

const accessScreen = document.getElementById("accessScreen");
const invitation = document.getElementById("invitation");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicButtonText = document.getElementById("musicButtonText");
const musicNote = document.getElementById("musicNote");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value === INVITATION_PASSWORD) {
    accessScreen.classList.add("is-hidden");
    invitation.classList.remove("is-hidden");
    passwordError.textContent = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    passwordError.textContent = "That passcode doesn't look right. Please try again.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.setAttribute("aria-pressed", "true");
      musicButtonText.textContent = "Pause background music";
      musicNote.textContent = "Now playing: Nayvee's Prayer.";
    } catch (error) {
      musicNote.textContent = "Music couldn't start. Check that the MP3 file is in the assets folder and try again.";
    }
  } else {
    music.pause();
    musicButton.setAttribute("aria-pressed", "false");
    musicButtonText.textContent = "Play background music";
    musicNote.textContent = "Music paused.";
  }
});

music.addEventListener("ended", () => {
  musicButton.setAttribute("aria-pressed", "false");
  musicButtonText.textContent = "Play background music";
});

// Countdown uses the event's local time (South Africa, UTC+2).
function updateCountdown() {
  const eventTime = new Date("2026-11-15T13:00:00+02:00").getTime();
  const now = Date.now();
  const distance = eventTime - now;
  const values = {
    days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((distance / 1000) % 60))
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Include a ready-to-send RSVP message in the WhatsApp link.
const rsvpMessage = encodeURIComponent(
  "Hello! I would like to RSVP for Siyamthanda's Christmation on 15 November 2026. My attendance is: "
);
document.getElementById("rsvpButton").href = `https://wa.me/27639442691?text=${rsvpMessage}`;
