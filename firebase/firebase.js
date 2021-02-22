











function addListener(){
  // addlistener del delete item
  document.querySelectorAll('.deletes').forEach(element => {
    element.addEventListener("click", (event)=> {
      let id = event.target.closest('div').dataset.id;
      eraseItem(database, extension, id);
      event.target.closest('div').remove();
    })        
  });
  // add listener del edit
  document.querySelectorAll('.edit').forEach(element => {
    element.addEventListener("click", (event)=> {
      let id = event.target.closest('div').dataset.id;
      let p = document.querySelector(`div[data-id='${id}'] p`);
      if(p.contentEditable == 'false'){
        p.contentEditable = 'true';
        p.style.backgroundColor = 'grey';
        event.target.innerHTML = 'confirm';
        event.target.style.backgroundColor = 'rgba(179, 255, 0, 0.5)';

      }else{
        p.contentEditable = 'false';
        p.style.backgroundColor = '#363636cc';
        event.target.innerHTML = 'edit item';
        event.target.style.backgroundColor = 'rgba(255, 166, 0, 0.76)'
        let item = p.innerHTML;
        patchItem(database, extension, id, item);
      }  
    })
  })
};


// GET an entry
function get(database, extension, miss){
  fetch(database + extension + '.json', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    console.log('...gotted...');
    var resposta = res;
    miss.innerHTML = "";
    for(id in resposta){
      miss.innerHTML += `<div class='item' data-id='${id}' > <p contenteditable = 'false'>${resposta[id].item} </p> <span class='deletes'>delete item</span> <span class='edit'>edit item</span> </div>`
    }
    addListener();
  })
}
get(database, extension, miss);

// POST an entry
function post(database, extension, item, miss){
  fetch(database + extension + '.json', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"item": item})
  })
  .then(res => res.json())
  .then(res => {
    console.log('...sent...');
    console.log(res);
    get(database, extension, miss); 
  })
}

// DELETE an entry
function eraseItem(database, extension, id){
  fetch(database + extension + '/' + id + '.json', {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => {console.log(res)});
}

// DELETE ALL
function eraseAll(database, extension, miss){
  fetch(database + extension + '.json', {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => {
    console.log('...deleted...');
    console.log(res);
    get(database, extension, miss)
  });
}


// Patch an entry ---afegeix o modifica etiquetes existents
function patchItem(database, extension, id, item){
  fetch(database + extension + '/' + id + '.json', {
    method:"PATCH",
    body: JSON.stringify({"item":item})
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })
}


