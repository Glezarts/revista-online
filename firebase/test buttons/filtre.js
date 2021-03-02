let senseClasses = true;
let seccionsActives= [];

function toggleClasses(event){
  let btn = event.target.closest('button');
  let btnName = btn.innerText;
  
  // Afegeix les classes una vegada i amaga tots els articles
  if(senseClasses == true){
    afegirClasses();
    document.querySelectorAll(".article").forEach((el) => {
      el.classList.remove('show')
    })
  }
      
    // Botó actiu
    if(btn.classList.contains('active')){
      btn.classList.remove('active');
      
      // borrar la secció de l'arrai
      for(let i = 0; i < seccionsActives.length; i++){
        if(seccionsActives[i] == btnName){
          seccionsActives.splice(i, 1);
        }
      }
    
    // Botó inactiu
  }else{
    btn.classList.add('active');
    
    // afegir la secció de l'arrai
    seccionsActives.push(btnName);
  }
  
  // Mostrar tots els articles si cap botó està actiu
  if(seccionsActives.length === 0){
    document.querySelectorAll(".article").forEach((el) => {
      el.classList.add('show')
    })
  }else{
    document.querySelectorAll(".article").forEach((el) => {
    if(el.classList.contains(seccionsActives)){
      console.log(el);
      el.classList.add('show');
    }else{
    el.classList.remove('show');
    }
  })
  }
}




// Seleccionar els CB

let cb = document.querySelectorAll(".CB");
for (var checkbox of cb) {  
  if (checkbox.checked){  
    sec.push(checkbox.closest("label").innerText);
  }  
}


document.querySelectorAll('.article').forEach((el) => {
  for(classes of el.classList){
    if(sec.includes(classes)){
      
    }
  }
});


// amagar o ensenyar



// VUE component
Vue.component("article-vue",{
  props: ["titol","contingut","subtitol","autor", "img"],
  template:"#templateArticleImg"
});

//GET del database i source
var app = new Vue ({
  el: "#app",
  data:{
    articles: [],
    fetchDone: false
  },
  methods: {
    getArticlesFiltrats: () =>{
      firebase.database().ref('/articles').once('value')
      .then((snapshot) => {
        app.articles  = snapshot.val();
        loadImatge();
      });
    },
    
  }
})

function afegirClasses () {
  for (article in app.articles){
    for (let i = 0; i < app.articles[article].seccions.length ; i++){
      document.querySelector(`#${article}`).classList.add(app.articles[article].seccions[i]);
    }
  }
  senseClasses = false;
}
async function loadImatge() {
  for(article in app.articles){
    if(app.articles[article].imatge){
      var url = await firebase.storage().ref('articles/' + app.articles[article].imatge).getDownloadURL()
      app.articles[article].imatge = url;
    }
  }
  app.fetchDone = true;
}

var firebaseConfig = {
  apiKey: "AIzaSyA5-G20uoAdIfb74mdV-pz4DMuZNLoF1kE",
  authDomain: "eurovisiu.firebaseapp.com",
  databaseURL: "https://eurovisiu-default-rtdb.firebaseio.com",
  projectId: "eurovisiu",
  storageBucket: "eurovisiu.appspot.com",
  messagingSenderId: "477526781890",
  appId: "1:477526781890:web:5a04cbca39bd25acbeb05b"
};
firebase.initializeApp(firebaseConfig);

app.getArticlesFiltrats();


