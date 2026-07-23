/* ==========================================================
   LENON MARMORARIA
   MAIN.JS
========================================================== */

/*
==========================================
CONFIGURAÇÕES
==========================================
ALTERE SOMENTE ESTES DADOS
*/

const CONFIG = {

    whatsapp: "5511972077598",

    instagram: "https://instagram.com/lenonmarmores",

    email: "contato@lenonmarmoaria.com.br",

    telefone: "5511972077598"

};

/*
==========================================
MENU MOBILE
==========================================
*/

const mobileButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

if (mobileButton) {

    mobileButton.addEventListener("click", () => {

        menu.classList.toggle("active");

        mobileButton.classList.toggle("active");

    });

}

/*
==========================================
FECHAR MENU AO CLICAR
==========================================
*/

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        mobileButton.classList.remove("active");

    });

});

/*
==========================================
HEADER AO ROLAR
==========================================
*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

/*
==========================================
SCROLL SUAVE
==========================================
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*
==========================================
WHATSAPP
==========================================
*/

function abrirWhatsApp() {

    const mensagem = encodeURIComponent(
        "Olá! Vim através do site da Lenon Marmoaria e gostaria de solicitar um orçamento."
    );

    window.open(

        `https://wa.me/${CONFIG.whatsapp}?text=${mensagem}`,

        "_blank"

    );

}

document.querySelectorAll(".btn-primary").forEach(botao => {

    botao.addEventListener("click", function (e) {

        if (this.innerText.toLowerCase().includes("whatsapp")) {

            e.preventDefault();

            abrirWhatsApp();

        }

    });

});

const whatsappFloat = document.querySelector(".whatsapp");

if (whatsappFloat) {

    whatsappFloat.addEventListener("click", function (e) {

        e.preventDefault();

        abrirWhatsApp();

    });

}

/*
==========================================
EMAIL
==========================================
*/

document.querySelectorAll(".btn-secondary").forEach(botao => {

    botao.addEventListener("click", function (e) {

        if (this.innerText.toLowerCase().includes("mail")) {

            e.preventDefault();

            window.location.href = `mailto:${CONFIG.email}`;

        }

    });

});

/*
==========================================
LOGO
==========================================
*/

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*
==========================================
BOTÃO VOLTAR AO TOPO
==========================================
*/

const topButton = document.querySelector(".top-button");

if (topButton) {

    topButton.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*
==========================================
INSTAGRAM
==========================================
*/

const instagramLinks = document.querySelectorAll(".instagram");

instagramLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        window.open(CONFIG.instagram, "_blank");

    });

});

/*
==========================================
TELEFONE
==========================================
*/

const phoneLinks = document.querySelectorAll(".telefone");

phoneLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = `tel:+${CONFIG.telefone}`;

    });

});

/*
==========================================
ANO AUTOMÁTICO
==========================================
*/

const ano = document.querySelector("#ano");

if (ano) {

    ano.innerHTML = new Date().getFullYear();

}

/*
==========================================
PRÉ-CARREGAMENTO DAS IMAGENS
==========================================
*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        if (img.complete) return;

        img.loading = "lazy";

    });

});

/*
==========================================
EFEITO NOS CARDS
==========================================
*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*
==========================================
CONSOLE
==========================================
*/

console.log("Lenon Marmoaria - Site carregado com sucesso.");