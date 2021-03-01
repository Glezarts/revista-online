let deletes = document.querySelectorAll(".delete") ;
let edits = document.querySelectorAll(".edit");



  // // addlistener del delete item
  // document.querySelectorAll(".delete").forEach(element => {
  //   element.addEventListener("click", (event)=> {
  //     let id = event.target.closest('div').dataset.id;
  //     console.log(id);
  //     // eraseItem(database, extension, id);
  //     // event.target.closest('div').remove();
  //   })        
  // });
  // // add listener del edit
  // document.querySelectorAll('.edit').forEach(element => {
  //   element.addEventListener("click", (event)=> {
  //     let id = event.target.closest('div').dataset.id;
  //     let p = document.querySelector(`div[data-id='${id}'] p`);
  //     if(p.contentEditable == 'false'){
  //       p.contentEditable = 'true';
  //       p.style.backgroundColor = 'grey';
  //       event.target.innerHTML = 'confirm';
  //       event.target.style.backgroundColor = 'rgba(179, 255, 0, 0.5)';

  //     }else{
  //       p.contentEditable = 'false';
  //       p.style.backgroundColor = '#363636cc';
  //       event.target.innerHTML = 'edit item';
  //       event.target.style.backgroundColor = 'rgba(255, 166, 0, 0.76)'
  //       let item = p.innerHTML;
  //       patchItem(database, extension, id, item);
  //     }  
  //   })
  // })




// edits.addEventListener('click', (e) =>{
//   e.target.closest('.titol').isEditable = true;
//   e.target.closest('.subtitol').value;
//   e.target.closest('.autor').value;
//   e.target.closest('.contingut').value;


//   firebase.database().ref('articles/' + articleId).update(obj)
// })
