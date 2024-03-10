
addCss('../css/pokemons.css');

var pokemons = 6; //how many pokemons to render
const root = document.querySelector(".root")
root.innerHTML = ""

function getPokemon(func){
    const randomId = Math.floor(Math.random()*1026)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}/`
    $.get(url,func)
}






function renderPokemon(res){
    root.innerHTML += 
    `<div class="pokemon">
    <h3>${res.name}</h3>
    <p>Weight: ${res.weight}</p>
    <img src="${res.sprites["front_default"]}" />
    <a 
    class="csv"
    href="data:text/csv;charset=utf-8,Name,Weight,Icon\n${res.name},${res.weight},${res.sprites["front_default"]}" 
    onload="onDownloadCSV(this)" 
    download="${res.name}.csv">
    Download CSV
    </a>
    </div>`
}





function repeat(func = ()=>{},times) {
    for (let x = 0; x < times; x++) {
        console.log(321)
      eval(func())
    }
  }







  Array.from({length: pokemons}, () => getPokemon(renderPokemon));




