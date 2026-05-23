// script.js

const startBtn = document.getElementById("startBtn");

const declaration = document.getElementById("declaration");

const sections = document.querySelectorAll(
    ".counter, .cards, .letter-section, .quotes, .surprise, .gallery"
);

const music = document.getElementById("music");

const seconds = document.getElementById("seconds");

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");

const hugBtn = document.getElementById("hugBtn");

const hugMessage = document.getElementById("hugMessage");

let counter = 0;

/* INICIAR SITE */

startBtn.addEventListener("click", () => {

    declaration.classList.remove("hidden");

    sections.forEach(section => {
        section.classList.remove("hidden");
    });

    music.play();

    createHearts();

    startCounter();

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});

/* CONTADOR */

function startCounter() {

    setInterval(() => {

        counter++;

        seconds.innerHTML = counter;

    }, 1000);

}

/* CARTA */

openLetter.addEventListener("click", () => {

    letter.classList.toggle("hidden");

});

/* ABRAÇO */

hugBtn.addEventListener("click", () => {

    const messages = [

        "🤗 Abraço apertado enviado com sucesso 💜",
        "💜 Você acabou de receber mil beijinhos",
        "🧸 Carinho infinito desbloqueado",
        "✨ Você é o meu lugar favorito",
        "💋 Beijinho especial entregue"

    ];

    const random =
        messages[Math.floor(Math.random() * messages.length)];

    hugMessage.innerHTML = random;

    createHearts();

});

/* CORAÇÕES */

function createHearts() {

    for(let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💜";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-20px";

        heart.style.fontSize =
            Math.random() * 25 + 20 + "px";

        heart.style.animation =
            `fall ${Math.random() * 3 + 4}s linear forwards`;

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "1";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}

/* CORAÇÃO NO CURSOR */

document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "16px";

    heart.style.opacity = "0.7";

    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 500);

});