function openLetter() {
    let envelope = document.querySelector(".envelope");
    let letter = document.querySelector(".letter");
    let clickText = document.querySelector(".click-text");

    // Hide the envelope smoothly
    envelope.style.opacity = "0";
    setTimeout(() => {
        envelope.style.display = "none";
        letter.style.display = "block";
        setTimeout(() => {
            letter.style.opacity = "1";
        }, 100);
    }, 500);

    // Hide the "Click to open" text smoothly
    clickText.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        clickText.style.display = "none"; // Remove from layout after fade
    }, 500); // Wait 0.5s before removing

    dropHearts();
}

function dropHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

