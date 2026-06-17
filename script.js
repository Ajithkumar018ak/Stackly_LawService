/* ==========================================
AEGIS LEGAL CHAMBERS & PARTNERS
MAIN JAVASCRIPT
========================================== */

/* ==========================================
STICKY NAVBAR
========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

/* ==========================================
MOBILE MENU
========================================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when link clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================================
INTERSECTION OBSERVER
SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((el) => {
    revealObserver.observe(el);
});

/* ==========================================
SMOOTH PARALLAX HERO
60FPS OPTIMIZED
========================================== */

const hero = document.querySelector(".hero");

let latestScrollY = 0;
let ticking = false;

function updateParallax() {

    const offset = latestScrollY * 0.35;

    hero.style.transform =
        `translate3d(0, ${offset}px, 0)`;

    ticking = false;
}

window.addEventListener("scroll", () => {

    latestScrollY = window.scrollY;

    if (!ticking) {

        window.requestAnimationFrame(updateParallax);

        ticking = true;
    }

});

/* ==========================================
COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);

            let current = 0;

            const increment = target / 100;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target === 35) {
                        counter.innerText = "35+";
                    }

                    else if (target === 99) {
                        counter.innerText = "99.2%";
                    }

                    else if (target === 1200) {
                        counter.innerText = "1,200+";
                    }

                    else if (target === 750) {
                        counter.innerText = "$750M+";
                    }

                    else {
                        counter.innerText = target;
                    }

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* ==========================================
SCROLL PROGRESS BAR
OPTIONAL AUTO CREATE
========================================== */

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-progress");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* ==========================================
BACK TO TOP BUTTON
AUTO CREATE
========================================== */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
FADE HERO CONTENT
========================================== */

const heroContent =
    document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const opacity =
        1 - (scrollPosition / 700);

    heroContent.style.opacity =
        Math.max(opacity, 0);

});

/* ==========================================
ACTIVE NAVIGATION HIGHLIGHT
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});

/* ==========================================
PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
CONSOLE BRANDING
========================================== */

console.log(`
=========================================
AEGIS LEGAL CHAMBERS & PARTNERS
Corporate Law Website
Premium Single Page Architecture
=========================================
`);


/* ==========================
LOGIN MODAL
========================== */

function openAuth(){
    document.getElementById("loginModal").style.display="flex";
}

function closeAuth(){
    document.getElementById("loginModal").style.display="none";
}

function showSignup(){

    document.getElementById("loginBox").style.display="none";
    document.getElementById("forgotBox").style.display="none";
    document.getElementById("signupBox").style.display="block";
}

function showLogin(){

    document.getElementById("loginBox").style.display="block";
    document.getElementById("forgotBox").style.display="none";
    document.getElementById("signupBox").style.display="none";
}

function showForgot(){

    document.getElementById("loginBox").style.display="none";
    document.getElementById("signupBox").style.display="none";
    document.getElementById("forgotBox").style.display="block";
}

function loginUser(){
    alert("Login functionality connected successfully.");
}

function signupUser(){
    alert("Registration submitted successfully.");
}

function forgotPassword(){
    alert("Password reset link sent.");
}

window.onclick = function(event){

    const modal =
    document.getElementById("loginModal");

    if(event.target === modal){
        closeAuth();
    }
}


// Mouse Parallax

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    document.querySelectorAll(
    ".metric-card,.practice-card,.case-card"
    ).forEach(card=>{

        card.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;

    });

});

document.addEventListener("mouseleave",()=>{

    document.querySelectorAll(
    ".metric-card,.practice-card,.case-card"
    ).forEach(card=>{

        card.style.transform =
        "rotateY(0deg) rotateX(0deg)";

    });

});

const cards = document.querySelectorAll('.service-item');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.15
});

cards.forEach(card=>{
    observer.observe(card);
});