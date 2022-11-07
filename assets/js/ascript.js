// =============================================================
// ===================       VARIABLES       ===================
// =============================================================

// ========
//  Header
// ========

const header = document.querySelector("header")

const main = document.querySelector("main")

// ========
// Sidebars
// ========

const sidebarRight = document.getElementById("sidebarRight")
const sidebarLeft = document.getElementById("sidebarLeft")
const sidebarBtn = document.getElementById("sidebarBtn");
let isSidebarOpen = false

// Ecoute du bouton "appararition" pour déclenchement des sidebars
sidebarBtn.addEventListener("mouseover", swapText);
sidebarBtn.addEventListener("click", openSidebar);

// ========
// Articles
// ========

const articleLeftTop = document.getElementById("articleLeftTop")
const articleLeftBottom = document.getElementById("articleLeftBottom")
const articleRightTop = document.getElementById("articleRightTop")
const articleRightBottom = document.getElementById("articleRightBottom")
const articlesBtn = document.getElementById("articlesBtn")

// Ecoute d'un clic sur les articles
articleLeftTop.addEventListener("click", firstClickLeftTop)
articleLeftBottom.addEventListener("click", firstClickLeftBottom)
articleRightTop.addEventListener("click", firstClickRightTop)
articleRightBottom.addEventListener("click", firstClickRightBottom)


// Ecoute de deux clics sur les articles


// =============================================================
// ===================       FUNCTIONS       ===================
// =============================================================

// ========
// Sidebars
// ========

// ---------------------------------------------------------------------
// fn - Swap entre l'animation d'ouverture, ou de fermeture des sidebars
function openSidebar() {

    if (isSidebarOpen === true) {
        animationCloseSidebar()
        isSidebarOpen = false 
        // articlesOut()
    } 
    else {
        setTimeout(() => {(sidebarBtn.innerHTML = ". . .")}, "500");
        animationOpenSidebar()
        isSidebarOpen = true
        articlesIn()
        headerIn()
        mainOff()
        headerDivsIn()
    }

}

// -------------------------------------------------------------------
// fn - Ajoute les classes permettant de faire apparaitre les sidebars
function animationOpenSidebar() {

    // Ajout de "animationfromOutIn"
    sidebarLeft.classList.toggle("animationfromOutIn")
    sidebarRight.classList.toggle("animationfromOutIn")

    // Retrait de "hide"
    sidebarLeft.classList.toggle("hide")
    sidebarRight.classList.toggle("hide")
}

// --------------------------------------------------------------------
// fn - Ajoute les classes permettant de faire disparaitre les sidebars
function animationCloseSidebar() {

    // Remplacement de "animationfromOutIn" par "animationfromInOut"
    sidebarLeft.classList.toggle("animationfromOutIn")
    sidebarRight.classList.toggle("animationfromOutIn")
    sidebarLeft.classList.toggle("animationfromInOut")
    sidebarRight.classList.toggle("animationfromInOut")

    // Puis ajout de "hide" et retrait de "animationfromInOut" avec un délai de 350ms
    setTimeout(() => {
        sidebarLeft.classList.toggle("hide")
        sidebarRight.classList.toggle("hide")
        sidebarLeft.classList.toggle("animationfromInOut")
        sidebarRight.classList.toggle("animationfromInOut")
    }, "350")
}

// ========
// Articles
// ========

function articlesIn() {
    
    setTimeout(() => {
        articleLeftTop.classList.toggle("articlesLeftTop"),
        articleLeftTop.classList.toggle("containerMain__sidebar__content")
    }, "1000")
    
    setTimeout(() => {
        articleLeftBottom.classList.toggle("articlesLeftBottom"),
        articleLeftBottom.classList.toggle("containerMain__sidebar__content")
    }, "1500")
    
    setTimeout(() => {
        articleRightTop.classList.toggle("articlesRightTop"),
        articleRightTop.classList.toggle("containerMain__sidebar__content")
    }, "1000")
      
    setTimeout(() => {
        articleRightBottom.classList.toggle("articlesRightBottom"),
        articleRightBottom.classList.toggle("containerMain__sidebar__content") 
    }, "1500")
}


function firstClickLeftTop() {
    articleLeftTop.classList.add("articleLeftTop")
    articleLeftTop.addEventListener("click", secondClickLeftTop)
}
function secondClickLeftTop() {
    articleLeftTop.classList.remove("articleLeftTop")
    articleLeftTop.classList.add("articleLeftTopScale")
    articleLeftTop.addEventListener("click", thirdClickLeftTop)
}
function thirdClickLeftTop() {
    // articleLeftTop.classList.remove("articleLeftTopScale")
    articleLeftTop.classList.toggle("articleLeftTopReverse")
    setTimeout(() => {
        articleLeftTop.classList.remove("articleLeftTopReverse")
    }, "1000")
}


function firstClickLeftBottom() {
    articleLeftBottom.classList.toggle("articleLeftBottom")
    articleLeftBottom.addEventListener("click", secondClickLeftBottom)
}
function secondClickLeftBottom() {
    articleLeftBottom.classList.toggle("articleLeftBottomReverse")
}


function firstClickRightTop() {
    articleRightTop.classList.toggle("articleRightTop")
    articleRightTop.addEventListener("click", secondClickRightTop)
}
function secondClickRightTop() {
    articleRightTop.classList.toggle("articleRightTopReverse")
}


function firstClickRightBottom() {
    articleRightBottom.classList.toggle("articleRightTop")
    articleRightBottom.addEventListener("click", secondClickRightBottom)
}
function secondClickRightBottom() {
    articleRightBottom.classList.toggle("articleRightTopReverse")
}


function headerIn() {
    setTimeout(() => {
        header.classList.toggle("hide")
    }, "2700")
}
function mainOff() {
    setTimeout(() => {
        main.classList.toggle("mainReduced")
    }, "2700")
}

const leftHeader = document.getElementById("leftHeader")
const centerHeader = document.querySelector(".centerHeader")
const rightHeader = document.getElementById("rightHeader")

function headerDivsIn() {
    setTimeout(() => {
        leftHeader.classList.toggle("sideDivsIn")
        leftHeader.classList.toggle("hide")
    }, "4000")
    setTimeout(() => {
        rightHeader.classList.toggle("sideDivsIn")
        rightHeader.classList.toggle("hide")
    }, "4000")
    
    setTimeout(() => {
        centerHeader.classList.toggle("sideDivsIn")
        centerHeader.classList.toggle("hide")
    }, "3500")
}

function swapText() {
    sidebarBtn.innerHTML = "Don't do This"
}

console