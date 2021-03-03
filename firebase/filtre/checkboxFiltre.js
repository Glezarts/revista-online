const SECTIONS = ['General','Destacado', 'Actualidad'];

var contCB = document.querySelector('#contCB2');

for(let i = 0; i < SECTIONS.length; i++){
  contCB.innerHTML += `<button class="CB" onclick="toggleClasses(event)">${SECTIONS[i]}</label>`
};