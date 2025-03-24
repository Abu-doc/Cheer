const tracks = ["aespa1.mp3", "aespa2.mp3", "aespa3.mp3", "aespa4.mp3", "aespa5.mp3"];
let currentTrackIndex = 0;
let aespaAudio = new Audio(tracks[currentTrackIndex]);

let playPauseBtn = document.getElementById("playPause");
let nextTrackBtn = document.getElementById("nextTrack");
let prevTrackBtn = document.getElementById("prevTrack");
let currentTrackText = document.getElementById("currentTrack");

function updateTrack() {
    aespaAudio.src = tracks[currentTrackIndex];
    aespaAudio.play()
        .then(() => {
            playPauseBtn.textContent = "⏸ Pause";
            currentTrackText.textContent = `Now Playing: Track ${currentTrackIndex + 1}`;
        })
        .catch(error => console.error("Playback error:", error));
}

playPauseBtn.addEventListener("click", function() {
    if (aespaAudio.paused) {
        aespaAudio.play()
            .then(() => playPauseBtn.textContent = "⏸ Pause")
            .catch(error => console.error("Playback error:", error));
    } else {
        aespaAudio.pause();
        playPauseBtn.textContent = "▶ Play";
    }
});

aespaAudio.addEventListener("ended", function() {
    playPauseBtn.textContent = "▶ Play";
});

nextTrackBtn.addEventListener("click", function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
});

prevTrackBtn.addEventListener("click", function() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrack();
});
