// Seleccionar els CB
function filtrarArticles(){
  let sec= [];
  let cb = document.querySelectorAll(".CB");
  for (var checkbox of cb) {  
    if (checkbox.checked){  
      sec.push(checkbox.closest("label").innerText);
    }  
  }
  app.getArticlesFiltrats(sec);
}


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
    getArticlesFiltrats: (sec) =>{
      firebase.database().ref('/articles').once('value')
      .then((snapshot) => {
        res  = snapshot.val();

        for (article in res){
          loadFiltre(article, sec);
        }

        loadImatge();
      });
    },
    
  }
})

function loadFiltre (res) {
  for (el in res.seccions){
    if(sec.includes(el)){
      app.articles.push(res);
      return
    }
  }
}

async function loadImatge() {
  for(article in app.articles){
    if(app.articles[article].imatge){
      var url = await firebase.storage().ref('articles/' + app.articles[article].imatge).getDownloadURL()
      app.articles[article].imatge = url;
      console.log(url);
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



