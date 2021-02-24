const URL = "https://eurovisiu-default-rtdb.firebaseio.com/articles";

function get(){
  fetch(URL + '.json', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    app.articles = res; 
    var resposta = res;
    miss.innerHTML = "";
    for(id in resposta){
      miss.innerHTML += `<div class='item' data-id='${id}' > <p contenteditable = 'false'>${resposta[id].item} </p> <span class='deletes'>delete item</span> <span class='edit'>edit item</span> </div>`
    }
    addListener();
  })
}
get(database, extension, miss);