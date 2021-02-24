
const URL = "https://eurovisiu-default-rtdb.firebaseio.com/articles";

let ti = document.querySelector("#titol").value;
let cont = document.querySelector("#contingut").value;
let cb = document.querySelectorAll(".cb");

// Function para obtener los valores introducidos por el usuario
function getValues(){
  let sec= [];
  for (var checkbox of cb) {  
    if (checkbox.checked){  
      sec.push(checkbox.closest("label").innerText);
    }  
  }
  return {titol: ti, contingut: cont, seccions: sec, img: file.name};
}

// Function para hacer POST del contenido a la db
// function postArticle(){
//   let article = getValues(); 

//   fetch(URL + '.json', {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(article)
//   })
//   .then(res => res.json())
//   .then(res => {
//     console.log('...sent...');
//     console.log(res);
//   })
// }




