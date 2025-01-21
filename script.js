// Get all buttons and audio elements
const buttons = document.querySelectorAll('.btn');
const audios = document.querySelectorAll('audio');

// Stop all audio before playing a new one
function stopAllAudio() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Play the corresponding audio
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundId = button.textContent.trim().toLowerCase(); // Match button text with audio ID
    const audio = document.getElementById(soundId);

    if (audio) {
      stopAllAudio();
      audio.play();
    }
  });
});

