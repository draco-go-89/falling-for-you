for (let i = 0; i < 90; i++) {
    const span = document.createElement('span');
    span.innerHTML = "𝑓𝑎𝑙𝑙𝑖𝑛𝑔 𝑓ℴ𝑟 𝑦ℴ𝑢";
    span.className = 'falling-text';
    span.style.left = Math.random() * 90 + "vw";
    span.style.animationDuration = (Math.random() * 7 + 2) + "s";
    span.style.opacity = Math.random();
    document.body.appendChild(span);
}