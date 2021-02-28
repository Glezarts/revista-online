 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5-G20uoAdIfb74mdV-pz4DMuZNLoF1kE",
  authDomain: "eurovisiu.firebaseapp.com",
  databaseURL: "https://eurovisiu-default-rtdb.firebaseio.com",
  projectId: "eurovisiu",
  storageBucket: "eurovisiu.appspot.com",
  messagingSenderId: "477526781890",
  appId: "1:477526781890:web:5a04cbca39bd25acbeb05b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
var fileButton = document.querySelector("#fileButton");
var send = document.querySelector("#btn");
let ti = document.querySelector("#titol");
let cont = document.querySelector("#contingut");
let aut = document.querySelector("#autor");
let sub = document.querySelector("#subtitol");
let feedback = document.querySelector('#feedback');

// Listen for file selection
send.addEventListener("click", function() {
  
  // Get file
  var file = fileButton.files[0];
  if(file){
    var fileName = new Date().getTime() + file.name
  };
  
  // Prepare object
  let sec= [];
  let cb = document.querySelectorAll(".cb");
  for (var checkbox of cb) {  
    if (checkbox.checked){  
      sec.push(checkbox.closest("label").innerText);
    }  
  }
  if(file)var objecte =  {titol: ti.value, subtitol: sub.value, contingut: cont.innerText, seccions: sec, autor: aut.value, imatge: fileName}
  else var objecte = {titol: ti.value, subtitol: sub.value, contingut: cont.innerText, seccions: sec, autor: aut.value, imatge: null};
  
  // send info to database and storage
  if(file) firebase.storage().ref('articles/' + fileName).put(file);
  firebase.database().ref('articles/').push(objecte);



  // feedback a l'usuari
  feedback.style.display = 'block';
});