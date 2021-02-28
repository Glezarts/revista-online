//index
var buttonIndex = document.querySelector("#buttonIndex");
var pageIndex = document.querySelector(".index");

//paises
var buttonCountry = document.querySelector("#buttonCountry");
var pageCountry = document.querySelector(".pagepaises");

//actualidad
var pageActualitat= document.querySelector(".pageactualitat");
var buttonActualitat = document.querySelector("#buttonActualitat");

//entrevista
var buttonEntrevista = document.querySelector("#buttonEntrevista");
var pageEntrevistas = document.querySelector(".pageentrevistas");

//contacto
var pageContacte = document.querySelector(".pagecontacte");
var buttonContacte  = document.querySelector("#buttonContacte");


window.onload=function() {
   pageIndex.style.display="block";
   pageCountry.style.display="none";
   pageActualitat.style.display="none";
   pageEntrevistas.style.display="none";
   pageContacte.style.display="none";

}

buttonIndex.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display="block";
    pageCountry.style.display="none";
    pageActualitat.style.display="none";
    pageEntrevistas.style.display="none";
    pageContacte.style.display="none";
})

buttonCountry.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display="none";
    pageCountry.style.display="block";
    pageActualitat.style.display="none";
    pageEntrevistas.style.display="none";
    pageContacte.style.display="none";
})

buttonActualitat.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display="none";
    pageCountry.style.display="none";
    pageActualitat.style.display="block";
    pageEntrevistas.style.display="none";
    pageContacte.style.display="none";
})

buttonEntrevista.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display="none";
    pageCountry.style.display="none";
    pageActualitat.style.display="none";
    pageEntrevistas.style.display="block";
    pageContacte.style.display="none";
})

buttonContacte.addEventListener("click", (e)=>{
    e.preventDefault();
    pageIndex.style.display="none";
    pageCountry.style.display="none";
    pageActualitat.style.display="none";
    pageEntrevistas.style.display="none";
    pageContacte.style.display="block";
})
