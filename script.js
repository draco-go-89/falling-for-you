for (let i = 0; i < 90; i++) {
    const span = document.createElement('span');
    span.innerHTML = "hate that i made you love me";
    span.className = 'falling-text';
    span.style.left = Math.random() * 90 + "vw";
    span.style.animationDuration = (Math.random() * 7 + 2) + "s";
    span.style.opacity = Math.random();
    document.body.appendChild(span);
}

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    music.play();
}, { once: true });