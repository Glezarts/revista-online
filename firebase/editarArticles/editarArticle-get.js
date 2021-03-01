// GET ARTICLE

Vue.component("article-vue",{
  props: ["titol","contingut","subtitol","autor", "img"],
  template:"#templateArticleImg",
  methods: {
    deleteArticle: (event) => {
    articleId = event.target.closest('div').id;
    firebase.database().ref('articles/' + articleId).remove(); 
    event.target.closest('div').remove();
    },
    editArticle: (event) =>{
      let e = event.target.closest('div')
      let articleId = e.id;
      let contEd = e.querySelectorAll(".contEd");
      let button = e.querySelector(".edit");

      contEd.forEach(el => {
        el.contentEditable = true;
      });

      if(button.innerHTML == 'Edit'){
        contEd.forEach(el => {
          el.contentEditable = true;
        });
        button.innerHTML = 'Confirm';
        button.style.backgroundColor = "rgba(224, 174, 11, 0.884)";
      }else{
        contEd.forEach(el => {
          el.contentEditable = false;
        });
        button.innerHTML = 'Edit';
        button.style.backgroundColor = "green";
        let ti = e.querySelector(".titol").innerHTML;
        let sub = e.querySelector(".subtitol").innerHTML;
        let cont = e.querySelector(".contingut").innerHTML;
        let aut = e.querySelector(".autor").innerHTML;
        let obj = {titol: ti, subtitol: sub, contingut: cont, autor: aut}
        console.log(obj);
          
        firebase.database().ref('articles/' + articleId).update(obj);
      }
    }
  }
});

var app = new Vue ({
  el: "#app",
  data:{
    articles: [],
    fetchDone: false
  },
  methods: {
    getArticles: () =>{
      firebase.database().ref('/articles').once('value')
      .then((snapshot) => {
        app.articles  = snapshot.val();
        
        load()
        
      });
    }
  }
})

async function load() {
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

app.getArticles();
