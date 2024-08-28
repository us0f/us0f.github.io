const pokemonNames = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran","nidorina","nidoqueen","nidoran","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetch'd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr. mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew"];

const isInputValid = (input) =>{
    const formattedInput = input.trim().toLowerCase()
    if(pokemonNames.includes(formattedInput) && formattedInput){
        console.log(formattedInput);
        return formattedInput;
      } else{
        return false;
      }
}

const getData = async (pokemonName) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: "GET",
    })  
    const responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.id);

    localStorage.setItem('pokemonData', JSON.stringify(responseJSON));

    window.location.replace("./stats.html")
}

const initApp = () =>{
    const form = document.getElementById("pokeForm");
    const button = document.getElementById("find");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
    })

    button.addEventListener("click", (event) => {
        let pokeName = document.getElementById("name").value;
        pokeName = isInputValid(pokeName);
        if (pokeName){
            getData(pokeName);
        }else{
            alert("Error : Enter a valid name.");
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    initApp();
});
