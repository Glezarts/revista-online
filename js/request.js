
window.onload = function WindowLoad(event) {
    const serverURL = `http://localhost:3000`;
    fetch(`${serverURL}/eurovision-noticias`)
    .then(response => response.json())
    .then(data => {
        if(data){
            console.log(data);
            const infoContainer = document.querySelector("#info-container");
            data.forEach(text =>{
                const value = `<pre id=${text.id}>${text.info}</pre>`;
                infoContainer.insertAdjacentHTML("beforeend", value);
            })
        }
    })
    .catch(error =>{
        console.error(error);
    })
}

