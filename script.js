
const imagens = ["/imagens/1.jpeg", "/imagens/2.jpeg", "/imagens/3.jpeg", "/imagens/4.jpeg", "/imagens/5.jpeg", "/imagens/6.jpeg", "/imagens/7.jpeg", "/imagens/8.jpeg"];
let index = 0;
const carrossel = document.getElementById("carrossel");

setInterval(() => {
    index = (index + 1) % imagens.length;
    carrossel.src = imagens[index];
}, 3000);

// ⏱️ Temporizador
const inicio = new Date("2025-03-01T00:00:00");

function atualizarTempo() {
    const agora = new Date();
    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();
    let horas = agora.getHours() - inicio.getHours();
    let minutos = agora.getMinutes() - inicio.getMinutes();
    let segundos = agora.getSeconds() - inicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("timer").textContent =
        `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

// ❤️ Animação de corações
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.innerText = "❤️";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);


const player = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");

player.pause();

playPauseBtn.addEventListener("click", () => {
    if (player.paused) {
        player.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        player.pause();
        playPauseBtn.textContent = "▶️";
    }
});
