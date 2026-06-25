const containerMenu = document.getElementById("container-menu");
window.addEventListener('load', function () {

    const tituloPaginaInicio = "Inicio"
    const tituloPagina = document.title;

    if (tituloPagina === "Inicio") {

        const conteudoMenu = '<div class="logo" ><a href="/" class="link-logo"><span class="caixa-icone"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-4 h-4 text-[#030a14] -rotate-45" data-fg-d3bl7="0.8:1.44306:/src/app/App.tsx:59:13:1560:55:e:Plane::::::EEKI" data-fgid-d3bl7=":r6:"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg></span><p>APEX<span>AIR</span></p></a></div><nav class="nav-bar"><label for="menu-toggle" class="icone-hamburguer"> &#9776;</label><input type="checkbox" id="menu-toggle" name="menu-toggle"><ul class="menu"><li><a href="/" id="inicio">Inicio</a></li><li><a href="./paginas/sobre.html" id="sobre">Sobre</a></li><li><a href="./paginas/viagens.html" id="viagens">Viagens</a></li><li><a href="./paginas/eventos.html" id="eventos">Eventos</a></li><li><a href="./paginas/ingressos.html" id="ingressos">Ingressos</a></li><a href="./paginas/ingressos.html" id="botao-reservar">reservar</a></ul></nav>'

        containerMenu.insertAdjacentHTML('afterbegin', conteudoMenu);
    }

    else {
        const conteudoMenu = '<div class="logo" ><a href="/" class="link-logo"><span class="caixa-icone"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane w-4 h-4 text-[#030a14] -rotate-45" data-fg-d3bl7="0.8:1.44306:/src/app/App.tsx:59:13:1560:55:e:Plane::::::EEKI" data-fgid-d3bl7=":r6:"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg></span><p>APEX<span>AIR</span></p></a></div><nav class="nav-bar"><label for="menu-toggle" class="icone-hamburguer"> &#9776;</label><input type="checkbox" id="menu-toggle" name="menu-toggle"><ul class="menu"><li><a href="/" id="inicio">Inicio</a></li><li><a href="sobre.html"id="sobre">Sobre</a></li><li><a href="viagens.html" id="viagens">Viagens</a></li><li><a href="eventos.html" id="eventos">Eventos</a></li><li><a href="ingressos.html" id="ingressos">Ingressos</a></li><a href="ingressos.html" id="botao-reservar">reservar</a></ul></nav>'

        containerMenu.insertAdjacentHTML('afterbegin', conteudoMenu);
    }

    colorMenuItem();
});



const paginaInicio = "Inicio";
const paginaSobre = "Sobre";
const paginaViagens = "Viagens";
const paginaIngressos = "Ingressos";

function colorMenuItem() {
    const tituloPagina = document.title;

    if (tituloPagina != "") {
        if (tituloPagina === "Inicio") {
            const inicio = document.getElementById("inicio");
            inicio.classList.add("item-menu");
        }

        else if (tituloPagina === "Sobre") {
            const sobre = document.getElementById("sobre");
            sobre.classList.add("item-menu");
        }
        else if (tituloPagina === "Viagens") {
            const viagens = document.getElementById("viagens");
            viagens.classList.add("item-menu");
        }
        else if (tituloPagina === "Eventos") {
            const Eventos = document.getElementById("eventos");
            eventos.classList.add("item-menu");
        }
        else if (tituloPagina === "Ingressos") {
            const ingressos = document.getElementById("ingressos");
            ingressos.classList.add("item-menu");
        }


    }
}
/* 
window.addEventListener("scroll", mudarMenu());
const cabecalho = document.getElementById("container-")[0];
function mudarMenu() {
    if (window.scrollY <= 150) {
        cabecalho.classList.add("menu-rolado");
    }
    if (window.scrollY >= 150) {
        cabecalho.classList.remove("menu-rolado");
    }
}
 */
const cabecalho = document.getElementById("container-menu");

window.addEventListener("scroll", mudarMenu());

function mudarMenu() {
    if (window.scrollY < 150) {
        cabecalho.classList.add("cabecalho");
        cabecalho.classList.add("menu-rolado");

        cabecalho.style.transition = ".555s ease-in-out";

        const conteudoInicio = document.getElementsByClassName("conteudo-inicio")[0];

        conteudoInicio.style.padding="65px"
    } else {
        cabecalho.classList.remove("menu-rolado");
    }
}
window.addEventListener("scroll", mudarMenu);
