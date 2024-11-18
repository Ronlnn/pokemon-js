
async function fetchPokemon() {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
		const data = await response.json();
		const pokemonName = data.name;
		const pokemonImage = data.sprites.front_default;
		document.getElementById('pokemon-name').innerHTML = pokemonName;
		document.getElementById('pokemon-image').src = pokemonImage;
	} catch (error) {
		console.log("Ошибка:", error);
	}
}

fetchPokemon();