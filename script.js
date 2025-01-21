//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const sounds = {};

buttons.forEach(button => {
    const soundName = button.getAttribute('data-sound');
    sounds[soundName] = new Audio(`sounds/${soundName}.mp3`);

    button.addEventListener('click', () => {
        stopAllSounds();
        sounds[soundName].play();
    });
});

stopButton.addEventListener('click', stopAllSounds);

function stopAllSounds() {
    Object.values(sounds).forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}
