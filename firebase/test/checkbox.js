const SECTIONS = ['General','Destacado', 'Actualidad', 'Entrevista', 'Alemanya', 'Armènia', 'Austràlia', 'Àustria', 'Azerbaijan', 'Bielorússia', 'Bèlgica', 'Bòsnia i Hercegovina', 'Bulgària', 'Croàcia', 'Dinamarca', 'Estònia','Eslovàquia', 'Eslovènia', 'Espanya', 'Finlàndia', 'França', 'Geòrgia', 'Grècia', 'Hongria', 'Islàndia', 'Irlanda', 'Israel', 'Itàlia', 'Letònia', 'Lithuania', 'Malta', 'Moldàvia', 'Montenegro', 'Països Baixos', 'Macedònia del Nord', 'Noruega', 'Polònia', 'Portugal', 'Regne Unit', 'República Txeca', 'Romania', 'Russia', 'San Marino', 'Sèrbia', 'Suècia', 'Suïssa', 'Ucraïna', 'Turquia', 'Xipre'];

var contCB = document.querySelector('#contCB');

for(let i = 0; i < SECTIONS.length; i++){
  contCB.innerHTML += `<label class="labelCB"><input type="checkbox" class="CB"/>${SECTIONS[i]}</label>`
};