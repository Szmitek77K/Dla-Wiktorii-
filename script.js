const flower = document.querySelector(".flower");
const message = document.querySelector(".message");
const bgMusic = document.getElementById("bg-music");

const messages = [
  "Jesteś moim śłońcem ☀️",
  "Z Dnia na Dzień kocham cie jeszcze bardziej, Wika 💖",
  "To ty mnie uszczęśliwiasz 🌸",
  "Dziekuje za wszystko co dla mnie robisz 💜",
  "Moje serce bije tylko dla ciebie🌷",
  "Na zawsze twój misia  💕",
  "Twój uśmiech poprawia mi dzień ✨",
  "Z tobą moje życie jest słodkie tak jak ty🍯",
];

let blooming = false;

flower.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }

  blooming = !blooming;
  flower.classList.toggle("bloom");

  if (blooming) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
    });
  } else {
    message.textContent = "";
  }
});

const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "🎵";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "🔇";
  }
});
