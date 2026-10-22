
const teclasPiano = document.querySelectorAll(".piano-teclas .tecla");
const controleVolume = document.querySelector(".controle-volume input");
const teclasSelecao = document.querySelector(".teclas-checkbox input");

let todasAsTeclas = [];
let audio = new Audio("./tunes/a.wav");

function tocarNotas(tecla, elemento) {
    audio.src = `./tunes/${tecla}.wav`;

    console.log(`Tecla pressionada: ${tecla}`);

    audio.play();

    if (elemento) {
        elemento.classList.add("pressionada");

        setTimeout(function() {
            elemento.classList.remove("pressionada");
        }, 150);
    }
}

teclasPiano.forEach(function(tecla) {
    todasAsTeclas.push(tecla.dataset.key);

    tecla.addEventListener("click", function() {
        tocarNotas(tecla.dataset.key, tecla);
    });
});

function controlarVolume(evento) {
    audio.volume = evento.target.value;
}

function mostrarOcultarTeclas() {
    teclasPiano.forEach(function(tecla) {
        tecla.classList.toggle("ocultar");
    });
}

function tocarTeclas(evento) {
    if (todasAsTeclas.includes(evento.key)) {
        tocarNotas(evento.key);
    }
}

controleVolume.addEventListener("input", controlarVolume);
teclasSelecao.addEventListener("click", mostrarOcultarTeclas);
document.addEventListener("keydown", tocarTeclas);
