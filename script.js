

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});



const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }

});

/* Close menu when link clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        document.body.style.overflow = "";

    });

});



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



const heroContent =
    document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const opacity =
        1 - (scrollPosition / 700);

    heroContent.style.opacity =
        Math.max(opacity, 0);

});



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


window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log(`
=========================================
AEGIS LEGAL CHAMBERS & PARTNERS
Corporate Law Website
Premium Single Page Architecture
=========================================
`);



function openAuth() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeAuth() {
    document.getElementById("loginModal").style.display = "none";
}



function showSignup() {

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("forgotBox").style.display = "none";
    document.getElementById("signupBox").style.display = "block";
}

function showLogin() {

    document.getElementById("loginBox").style.display = "block";
    document.getElementById("forgotBox").style.display = "none";
    document.getElementById("signupBox").style.display = "none";
}

function showForgot() {

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("forgotBox").style.display = "block";
}



function loginUser() {

    const role = document.getElementById("loginRole").value;
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {

        alert("Please enter Email and Password");
        return;
    }

    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    if (role === "Client") {



        window.location.href = "client-dashboard.html";

    } else if (role === "admin") {

    

        window.location.href = "admin-dashboard.html";
    }
}



function signupUser() {

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("ConfirmPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    const role =
        document.getElementById("signupRole").value;

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {

        alert("Passwords do not match");
        return;
    }

    const userData = {
        name,
        email,
        password,
        role
    };

    localStorage.setItem(
        "registeredUser",
        JSON.stringify(userData)
    );

    alert("Registration Successful");

    showLogin();
}



function forgotPassword() {

    const email =
        document.getElementById("forgotEmail").value.trim();

    if (email === "") {

        alert("Please enter your email");
        return;
    }

    alert(
        "Password reset link sent to: " + email
    );

    showLogin();
}



function logoutUser() {

    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");

   

    window.location.href = "index.html";
}



function protectClientPage() {

    const role =
        localStorage.getItem("userRole");

    if (role !== "Client") {

        alert("Access Denied");

        window.location.href = "index.html";
    }
}



function protectAdminPage() {

    const role =
        localStorage.getItem("userRole");

    if (role !== "admin") {

        alert("Access Denied");

        window.location.href = "index.html";
    }
}



window.onclick = function (event) {

    const modal =
        document.getElementById("loginModal");

    if (event.target === modal) {

        closeAuth();
    }
};




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

function showSection(sectionId){

    document.querySelectorAll(".section").forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";

    document.querySelectorAll(".sidebar a").forEach(link=>{
        link.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    if(window.innerWidth <= 768){
        document.querySelector(".sidebar").classList.remove("active");
    }
}

function goDashboard(){

    document.querySelectorAll(".section").forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("dashboard").style.display = "block";

    if(window.innerWidth <= 768){
        document.querySelector(".sidebar").classList.remove("active");
    }
}

function toggleMenu(){
    document.querySelector(".sidebar").classList.toggle("active");
}

function logoutUser(){
    window.location.href = "index.html";
}

window.onload = function(){

    document.querySelectorAll(".section").forEach(section=>{
        section.style.display = "none";
    });

    document.getElementById("dashboard").style.display = "block";
};



// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        },1000);

    },2500);

});


document.getElementById("legalForm").addEventListener("submit", function(e){

    const phone = document.getElementById("phone").value;

    if(phone.length !== 10){
        alert("Please enter a valid 10 digit mobile number");
        e.preventDefault();
    }

});



function toggleMenu() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        document.body.classList.add("menu-open");
    } else {
        document.body.classList.remove("menu-open");
    }
}


function toggleMenu() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");

    // IF OPEN → stop scroll
    if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } 
    // IF CLOSE → enable scroll
    else {
        document.body.style.overflow = "auto";
    }
}