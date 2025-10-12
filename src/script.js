const audio = new Audio('lofi.mp3');
audio.loop = true;
audio.volume = 0.05;

document.addEventListener("click", () => {
    audio.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
    });
});
