/* ==========================================================
   LENON MARMORARIA
   ANIMATIONS.JS
========================================================== */

/*
==========================================
ANIMAÇÃO AO CARREGAR A PÁGINA
==========================================
*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*
==========================================
ELEMENTOS QUE APARECEM
==========================================
*/

const animatedElements = document.querySelectorAll(

    ".hero-text, .hero-image, .about-card, .service-card, .adv-card, .contact-box"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("slide-up");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold:0.15

});

animatedElements.forEach(element => {

    observer.observe(element);

});

/*
==========================================
RIPPLE NOS BOTÕES
==========================================
*/

document.querySelectorAll(".btn-primary, .btn-secondary, .btn-header")
.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius=diameter/2;

        circle.style.width=

        circle.style.height=

        `${diameter}px`;

        circle.style.left=

        `${e.clientX-this.offsetLeft-radius}px`;

        circle.style.top=

        `${e.clientY-this.offsetTop-radius}px`;

        circle.classList.add("ripple");

        const ripple=this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*
==========================================
EFEITO LEVE NO HERO
==========================================
*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(!hero)return;

    const x=(window.innerWidth/2-e.clientX)/60;

    const y=(window.innerHeight/2-e.clientY)/60;

    hero.style.backgroundPosition=

    `${x}px ${y}px`;

});

/*
==========================================
CARDS
==========================================
*/

document.querySelectorAll(

".about-card,.service-card,.adv-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/*
==========================================
EFEITO BOTÃO FLUTUANTE
==========================================
*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

    whatsapp.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.08)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:1800

    });

},2500);

}

/*
==========================================
IMAGENS
==========================================
*/

document.querySelectorAll("img").forEach(image=>{

    image.setAttribute("draggable","false");

});

/*
==========================================
SCROLL SUAVE EXTRA
==========================================
*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const destino=document.querySelector(

this.getAttribute("href")

);

if(!destino)return;

e.preventDefault();

window.scroll({

top:destino.offsetTop-70,

behavior:"smooth"

});

});

});

/*
==========================================
PRELOAD DAS IMAGENS
==========================================
*/

window.addEventListener("load",()=>{

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

});

/*
==========================================
CONSOLE
==========================================
*/

console.log("Animations.js carregado com sucesso.");