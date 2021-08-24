const form = document.querySelector("form");
const valeur = document.getElementById("champ");
const check = document.querySelector(".cont");
const api = "https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag;";
const img = document.querySelector("img");
const container = document.querySelector(".container");
fetch(api)
    .then(res => res.json())
    .then(data => {
         dataTab = Object.values(data);
     
        dataTab.forEach(index => {
            const rendu = `
            <li class='card'>
            <a href="pays.html?name=${index.name}">
            <img src="${index.flag}" alt="flag" />
            <div class="data-container">
            <ul>
                <li>${index.name}</li>
                <li>${index.capital}</li>
                <li>${index.population}</li>
            </ul>
             </div>
             </a>
            </li>`; 
        
            container.innerHTML += rendu;
        })
        
        
        
      
 }) 

 function change(){
    filterInput = document.querySelector('input[type="radio"]:checked').value
    console.log(dataTab);
    const li = document.querySelectorAll(".card");
    for(let i = 0; i<dataTab.length; i++){
        if(filterInput === dataTab[i].region){
            console.log(dataTab[i]);
            li[i].style.display = ""
        }else if(filterInput === "Tout"){
            li[i].style.display = ""
        }
        else{
            li[i].style.display = "none"
        }
    }
    
}





