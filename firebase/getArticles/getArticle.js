
Vue.component("article-vue",{
  props: ["titol","contingut","subtitol","autor", "img"],
  template: "#templateArticle"
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
    var url = await firebase.storage().ref('articles/' + app.articles[article].imatge).getDownloadURL()
      app.articles[article].imatge = url;
      console.log(app.articles[article].imatge);
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
