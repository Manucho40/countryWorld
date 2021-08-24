const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const names = urlParams.get('name');
const img = document.getElementById("imgPays");
const nom = document.getElementById("nom");
const capitale = document.getElementById("capitale");
const continent = document.getElementById("continent");
const population = document.getElementById("population");
const api = "https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag;";

function lisibilite_nombre(nbr)
{
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+'.'+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		return retour;
}
fetch(api)
    .then(res => res.json())
    .then(data => {
        const dataTab = Object.values(data)
        dataTab.map(index => {
            if(names === index.name){
                img.setAttribute("src", index.flag);
                nom.innerHTML = index.name;
                capitale.innerHTML = index.capital;
                continent.innerHTML = index.region;
                population.innerHTML = lisibilite_nombre(index.population)

            }
        })
    })



  