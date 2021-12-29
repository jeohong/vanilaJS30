const keys = document.querySelectorAll(".key");
keys.forEach(keys => keys.addEventListener("transitionend", removePlaying));
window.addEventListener("keydown", playAudio);

function removePlaying(event) {
    if (event.propertyName !== "transform") { return ; }

    event.srcElement.classList.remove("playing")
}

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) { return ;}

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}