let bold = document.querySelector("#bold");
let italic = document.querySelector("#italic");
let page_content = document.querySelector("#contingut").innerText;

function toBold() {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0).cloneRange();
  var markerTextChar = range.extractContents();

  var selectedIndex = page_content.indexOf(markerTextChar.textContent);
  console.log("selected from ", selectedIndex, "length: ", markerTextChar.textContent.length)
  var markerEl, markerId = "sel_" + new Date().getTime() + "_" + Math.random().toString().substr(2);
  markerEl = document.createElement("b");
  markerEl.id = markerId;

  markerEl.appendChild(markerTextChar);

  range.insertNode(markerEl);
}

function toItalic() {
  var sel = window.getSelection();
  var range = sel.getRangeAt(0).cloneRange();
  var markerTextChar = range.extractContents();

  var selectedIndex = page_content.indexOf(markerTextChar.textContent);
  console.log("selected from ", selectedIndex, "length: ", markerTextChar.textContent.length)
  var markerEl, markerId = "sel_" + new Date().getTime() + "_" + Math.random().toString().substr(2);
  markerEl = document.createElement("i");
  markerEl.id = markerId;

  markerEl.appendChild(markerTextChar);

  range.insertNode(markerEl);
}




// function toItalic() {
//   var sel = window.getSelection();
//   var range = sel.getRangeAt(0).cloneRange();
//   var markerTextChar = range.extractContents();

//   var selectedIndex = page_content.indexOf(markerTextChar.textContent);
//   console.log("selected from ", selectedIndex, "length: ", markerTextChar.textContent.length)
//   var markerEl, markerId = "sel_" + new Date().getTime() + "_" + Math.random().toString().substr(2);
//   markerEl = document.createElement("i");
//   markerEl.id = markerId;

//   markerEl.appendChild(markerTextChar);

//   range.insertNode(markerEl);

//   markerEl.style.backgroundColor = ' rgba(246,195,66,0.3)';
//   markerEl.style.cursor = 'pointer';
// }
