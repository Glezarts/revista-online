var buttonSplashPage = document.querySelector(".swipe-up");
var splashPage = document.querySelector("#splash-page");
var titleSplashPage = document.querySelector(".title-splashpage")
var subtitleSplashPage = document.querySelector(".title-splashpage2")


//index
var pageIndex = document.querySelector(".index");
var buttonIndex = document.querySelector("#buttonIndex");

//paises

var buttonCountry = document.querySelector("#buttonCountry");
var pageCountry = document.querySelector(".pagepaises");
//actualidad
var pageActualitat= document.querySelector(".pageactualitat");
var buttonActualitat = document.querySelector("#buttonActualitat");

// entrevistas
var buttonEntrevista = document.querySelector("#buttonEntrevista");
var pageEntrevistas = document.querySelector(".pageentrevistas");

//contacto
var pageContacte = document.querySelector(".pagecontacte");
var buttonContacte  = document.querySelector("#buttonContacte");


var soundOn, soundOff, audio;

soundOn = document.querySelector("#sound-on");
soundOff = document.querySelector("#sound-off");
audio = document.querySelector(".audio");



soundOff.addEventListener("click", (e)=>{
    e.preventDefault();
    soundOff.style.display="none";
    soundOn.style.display="block";
    audio.muted = false;
    audio.play();

});

soundOn.addEventListener("click", (e)=>{
    e.preventDefault();
    soundOff.style.display="block";
    soundOn.style.display="none";
    audio.muted = true;
    audio.pause();


})

buttonSplashPage.addEventListener("click", (e)=>{
    e.preventDefault();
    if(splashPage.contains(e.target)){
        splashPage.style.height = "0";
        buttonSplashPage.style.display="none";
        titleSplashPage.style.display="none";
        subtitleSplashPage.style.display="none";
        pageCountry.style.display = "none";
        ContActualitat.style.display = "none";
        pageEntrevistas.style.display = "none";
        soundOff.style.display="none";
        pageContacte.style.display = "none";
    
    }
    window.location.href = '/index.html';
})

var started = false;

window.addEventListener("click", (e) => {
    window.location.href = './index.html';

    if (!started && !buttonSplashPage.contains(e.target)) {
        splashPage.style.height = "0";
        ContPages.style.display ="block";
        buttonSplashPage.style.display="none";
        titleSplashPage.style.display="none";
        subtitleSplashPage.style.display="none";
        pageCountry.style.display = "none";
        pageActualitat.style.display = "none";
        pageEntrevistas.style.display = "none";
        soundOff.style.display="none";
        pageContacte.style.display = "none";
        started = true;
    }

})

buttonCountry.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display = "none";
    pageCountry.style.display ="block";
    pageActualitat.style.display = "none";
    pageEntrevistas.style.display = "none";
    pageContacte.style.display ="none";

})
buttonIndex.addEventListener("click", (e)=>{
    e.preventDefault();
    pageCountry.style.display = "none";
    pageActualitat.style.display = "none";
    pageIndex.style.display ="block";
    pageEntrevistas.style.display ="none";
    pageContacte.style.display ="none";


})
buttonActualitat.addEventListener("click", (e)=>{
    e.preventDefault();
    pageCountry.style.display = "none";
    pageIndex.style.display ="none";
    pageActualitat.style.display = "block";
    pageEntrevistas.style.display ="none";
    pageContacte.style.display ="none";

})

buttonEntrevistas.addEventListener("click", (e)=>{
    e.preventDefault();
    pageCountry.style.display = "none";
    pageIndex.style.display ="none";
    pageActualitat.style.display = "none";
    pageContacte.style.display="none";
    pageEntrevistas.style.display ="block";
    pageContacte.style.display ="none";

})

buttonContacte.addEventListener("click", (e)=>{
    e.preventDefault();
    pageCountry.style.display = "none";
    pageIndex.style.display ="none";
    pageActualitat.style.display = "none";
    pageContacte.style.display="none";
    pageEntrevistas.style.display ="none";
    pageContacte.style.display ="block";

})

// AUDIO 

