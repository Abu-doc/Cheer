const messages = [
    "Tus labios son el único veneno que estoy dispuesto a probar una y otra vez. 💋",
    "Ana, you light up my world like no one else! 🌟",
    "Si besarte fuera pecado, viviría en el infierno💗.",
    "If I could, I’d give you all the stars in the sky ✨",
    "Tienes un no sé qué, que me pone no sé cómo.❣",
    "Ana, you are incredibly special, never forget that 💞",
    "You are the definition of beautiful inside and out! 💐",
    "Tócame el alma, pero con tus labios💟.",
    "You're my rarest Porsche 911 in a world full of common cars 🏎️🔥",
    "Desde que llegaste, todo tiene más sentido, más color, más magia.🤗",
];

function showMessage(note) {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    note.innerHTML = randomMessage;
    note.style.transform = "scale(1.2)";
    setTimeout(() => note.style.transform = "scale(1)", 300);

    createHeartEffect(note);
}

function createHeartEffect(note) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    document.body.appendChild(heart);

    let x = note.offsetLeft + note.clientWidth / 2;
    let y = note.offsetTop;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => heart.remove(), 1000);
}

// Background Music Controls
let music = document.getElementById("bgMusic");
let playButton = document.getElementById("playMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
        playButton.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        playButton.textContent = "🎵 Play Music";
    }
}
