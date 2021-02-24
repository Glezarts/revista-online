var buttonCountry = document.querySelector("#buttonCountry");
var pageIndex = document.querySelector(".index")
var pageCountry = document.querySelector(".pagepaises")
var buttonIndex = document.querySelector("#buttonIndex") 


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