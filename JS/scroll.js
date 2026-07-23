/* ==========================================================
   LENON MARMOARIA
   SCROLL.JS
========================================================== */

/*
==========================================
SCROLL REVEAL
==========================================
*/

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/*
==========================================
ANIMAÇÃO EM CASCATA DOS CARDS
==========================================
*/

const cards = document.querySelectorAll(
    ".about-card, .service-card, .adv-card"
);

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});

/*
==========================================
EFEITO PARALLAX NO HERO
==========================================
*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.12;

    heroImage.style.transform = `translateY(${offset}px)`;

});

/*
==========================================
DESTACAR MENU CONFORME A SEÇÃO
==========================================
*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

function activeMenu() {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 120;

        const sectionId = section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + sectionId) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", activeMenu);

/*
==========================================
BOTÃO VOLTAR AO TOPO
==========================================
*/

const backTop = document.querySelector(".top-button");

function showBackTop() {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.style.opacity = "1";
        backTop.style.pointerEvents = "all";

    } else {

        backTop.style.opacity = "0";
        backTop.style.pointerEvents = "none";

    }

}

window.addEventListener("scroll", showBackTop);
window.addEventListener("load", showBackTop);

/*
==========================================
HEADER COM SOMBRA
==========================================
*/

const siteHeader = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!siteHeader) return;

    if (window.scrollY > 20) {

        siteHeader.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        siteHeader.style.boxShadow = "none";

    }

});

/*
==========================================
CONTADOR DE ESTATÍSTICAS
==========================================
*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = target / 80;

        const update = () => {

            if (current < target) {

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 120) {

        counterStarted = true;

        startCounter();

    }

});

/*
==========================================
HOVER SUAVE NAS IMAGENS
==========================================
*/

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transition = ".45s";

        image.style.transform = "scale(1.02)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*
==========================================
CONSOLE
==========================================
*/

console.log("Scroll.js carregado.");