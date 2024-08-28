const showStats = (data) =>{
    let pokeAbiltiies = [];

    for(const ability of data.abilities)  {
        pokeAbiltiies.push(ability.ability.name);
    }
    pokeAbiltiies = pokeAbiltiies.join().replace(",", " | ");

    document.getElementById("pokeImage").src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`;
    document.getElementById("pokemonId").textContent = "No. " + `${data.id}`;
    document.getElementById("pokemonName").textContent = data.name.toUpperCase();
    document.getElementById("type-value").textContent = data.types[0].type.name;
    document.getElementById("w-value").textContent = data.weight / 10 + " kg";
    document.getElementById("h-value").textContent = data.height / 10 + " cm";
    document.getElementById("ab-value").textContent = pokeAbiltiies;
    document.getElementById("hp-value").textContent = data.stats[0].base_stat;
    document.getElementById("atk-value").textContent = data.stats[1].base_stat;
    document.getElementById("def-value").textContent = data.stats[2].base_stat;
    document.getElementById("Satk-value").textContent = data.stats[3].base_stat;
    document.getElementById("Sdef-value").textContent = data.stats[4].base_stat;
    document.getElementById("sp-value").textContent = data.stats[5].base_stat;
}

document.addEventListener("DOMContentLoaded", () => {
    const pokemonData = JSON.parse(localStorage.getItem('pokemonData'));
    
    if (pokemonData) {
        showStats(pokemonData);
    } else {
        console.error("No Pokémon data found.");;
    }
});

