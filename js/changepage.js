var buttonSplashPage = document.querySelector(".swipe-up");
var splashPage = document.querySelector("#splash-page");
var buttonCountry = document.querySelector("#buttonCountry");
var pageIndex = document.querySelector(".index");
var pageCountry = document.querySelector(".pagepaises");
var buttonIndex = document.querySelector("#buttonIndex");
var ContPages= document.querySelector(".contenido-paginas");
var titleSplashPage = document.querySelector(".title-splashpage")

buttonCountry.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display = "none";
    pageCountry.style.display ="block";
 
})
buttonIndex.addEventListener("click", (e)=>{
    e.preventDefault();
    pageCountry.style.display = "none";
    pageIndex.style.display ="block";
 
})

buttonSplashPage.addEventListener("click", (e)=>{
    e.preventDefault();
    if(splashPage.contains(e.target)){
    splashPage.style.height = "0";
    ContPages.style.display ="block";
    buttonSplashPage.style.display="none";
    titleSplashPage.style.display="none";
    pageCountry.style.display = "none";

    }
})

var started = false;

window.addEventListener("click", (e) => {
    if (!started && !buttonSplashPage.contains(e.target)) {
        splashPage.style.height = "0";
        ContPages.style.display ="block";
        buttonSplashPage.style.display="none";
        titleSplashPage.style.display="none";
        pageCountry.style.display = "none";
        soundOff.style.display="none";

        started = true;
    }
})


// AUDIO 

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
