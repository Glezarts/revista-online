import {nanoid} from "../node_modules/nanoid/nanoid.js";


const uploadBtn = document.querySelector("#uploadBtn");
const serverURL = `http://localhost:3000`;
uploadBtn.addEventListener("click", ()=>{
    const articleInput = document.querySelector("#article-input");
    if(articleInput.value){
        //let's generate uuid of 5 characters
        const id = nanoid(5);
        const data = {
            id: id,
            info: articleInput.value,
        }
        const httpHeaders = {
            "Content-Type": "application/json"
        }
        fetch(`${serverURL}/eurovision-noticias`,{
            method: "POST",
            headers: httpHeaders,
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data =>{
            alert("Uploaded successfully!!! Go to the index.html and check the content!");
        })
        .catch(error =>{
            console.error(error);
        });
    }
});


/*



*/