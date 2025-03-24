document.addEventListener("DOMContentLoaded", function() {
    // 🎨 Switch Car Color
    let colorBtn = document.getElementById("change-color");
    if (colorBtn) {
        colorBtn.addEventListener("click", function() {
            let carImages = document.querySelectorAll(".car-image");
            let colors = ["porsche1.jpg", "porsche4.jpg", "porsche5.jpg", "porsche3.jpg", "porsche2.jpg", "porsche6.jpg", "porsche7.jpg"];
            
            carImages.forEach((img) => {
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                img.src = randomColor;
            });
        });
    }

    // 🚗 Rev Engine Sound
    let playSoundBtn = document.getElementById("play-sound");
    if (playSoundBtn) {
        playSoundBtn.addEventListener("click", function() {
            let engineSound = document.getElementById("car-audio");
            if (engineSound) {
                engineSound.currentTime = 0;
                engineSound.play().catch(error => console.log("Audio play failed:", error));
            }
        });
    }

    // 🎵 Phonk Music Player with Multiple Tracks
    const tracks = ["phonk1.mp3", "phonk2.mp3", "phonk3.mp3", "phonk4.mp3", "phonk5.mp3"];
    let currentTrackIndex = 0;
    let phonkAudio = new Audio(tracks[currentTrackIndex]);
    let playPauseBtn = document.getElementById("playPause");
    let nextTrackBtn = document.getElementById("nextTrack");
    let prevTrackBtn = document.getElementById("prevTrack");
    let currentTrackText = document.getElementById("currentTrack");

    function updateTrack() {
        phonkAudio.src = tracks[currentTrackIndex];
        phonkAudio.play()
            .then(() => {
                playPauseBtn.textContent = "⏸ Pause";
                currentTrackText.textContent = `Now Playing: Track ${currentTrackIndex + 1}`;
            })
            .catch(error => console.error("Playback error:", error));
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", function() {
            if (phonkAudio.paused) {
                phonkAudio.play()
                    .then(() => playPauseBtn.textContent = "⏸ Pause")
                    .catch(error => console.error("Playback error:", error));
            } else {
                phonkAudio.pause();
                playPauseBtn.textContent = "▶ Play";
            }
        });

        phonkAudio.addEventListener("ended", function() {
            playPauseBtn.textContent = "▶ Play";
        });
    }

    if (nextTrackBtn) {
        nextTrackBtn.addEventListener("click", function() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            updateTrack();
        });
    }

    if (prevTrackBtn) {
        prevTrackBtn.addEventListener("click", function() {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            updateTrack();
        });
    }

    // 🚫 Inside Joke: No Latin Music Allowed
    let latinModeBtn = document.getElementById("latinMode");
    if (latinModeBtn) {
        latinModeBtn.addEventListener("click", function () {
            // Create a modal popup
            let modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "50%";
            modal.style.left = "50%";
            modal.style.transform = "translate(-50%, -50%)";
            modal.style.background = "black";
            modal.style.padding = "20px";
            modal.style.borderRadius = "10px";
            modal.style.textAlign = "center";
            modal.style.zIndex = "1000";

            // Add GIF inside the modal
            let gif = document.createElement("img");
            gif.src = "sponge.gif"; // 🔥 Make sure this GIF is in your project folder
            gif.style.width = "250px";
            gif.style.borderRadius = "8px";

            // Add text above GIF
            let message = document.createElement("p");
            message.textContent = "NO LATIN MUSIC ALLOWED! 🚫😂";
            message.style.color = "white";
            message.style.fontSize = "18px";
            message.style.fontWeight = "bold";

            // Add close button
            let closeBtn = document.createElement("button");
            closeBtn.textContent = "Close";
            closeBtn.style.marginTop = "10px";
            closeBtn.style.padding = "8px 12px";
            closeBtn.style.border = "none";
            closeBtn.style.background = "#ff007f";
            closeBtn.style.color = "white";
            closeBtn.style.borderRadius = "5px";
            closeBtn.style.cursor = "pointer";

            // Close button event
            closeBtn.addEventListener("click", function () {
                modal.remove();
            });

            // Append everything
            modal.appendChild(message);
            modal.appendChild(gif);
            modal.appendChild(closeBtn);
            document.body.appendChild(modal);
        });
    }
});
