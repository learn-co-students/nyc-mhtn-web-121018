document.addEventListener('DOMContentLoaded', () => {
	let allPokemon = []
	const pokemonContainer = document.getElementById("pokemon-container")
	const searchBar = document.getElementById("pokemon-search-input")
	// const createForm = document.querySelector("#new-pokemon-form")

	function fetchPokemon(){
		fetch("http://localhost:3000/pokemon", {method: "GET"})
		.then(     function(response) {
			return response.json()
		})
		.then((data) => {
			allPokemon = data

			showAllPokemon(data)
		})
	}


// CREATE A NEW POKEMON
// 1. Grab all the inputs and save it into a variable

// 2. Listen to the "submit" form
	//GRAB THAT FORM
	const newPokeForm = document.getElementById('new-pokemon-form')
	newPokeForm.addEventListener("submit", function(e) {
		const newPokeName = document.getElementById('new-poke-name').value
		const newPokeFront = document.getElementById('new-poke-front-sprite').value
		const newPokeBack = document.getElementById('new-poke-back-sprite').value
		console.log(newPokeName, newPokeFront, newPokeBack)
		// 3. STOP the form from doing that full page refresh nonsense
		e.preventDefault()
		// 4. SEND the data i just grabbed (pppst step 1) send it to the server
		fetch("http://localhost:3000/pokemon", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				name: newPokeName,
				sprites: {
					"front": newPokeFront,
					"back": newPokeBack
				}
			})
		})
		.then( function(response) {
			return response.json()
		})
		.then(function(pokemon){
			// inside the .then MEANS I have RESOLVED the promise
			// RETURNED SOME DATA
			// PESSIMISTIC RENDERING

			// 1. UPDATE THE DATABASE
			// 2. UPDATE THE DOM
			// 3. UPDATE ANY LOCAL VARIABLES
			allPokemon.push(pokemon)
			pokemonContainer.innerHTML += renderSinglePokemon(pokemon)
			// showAllPokemon(allPokemon)
		})
		// OPTIMISIC RENDERING  NO GUARANTEE DB is updated
		// update the DOM
	})





	function showAllPokemon(pokemons){
		pokemonContainer.innerHTML = pokemons.map(renderSinglePokemon).join('')
	}


	pokemonContainer.addEventListener("click", (e) => {
		if (e.target.tagName === "IMG") {
			const foundPokemon = allPokemon.find(function(pokemon) {
				return pokemon.id === parseInt(e.target.dataset.id)
			})

			if (e.target.src === foundPokemon.sprites.front) {
				e.target.src = foundPokemon.sprites.back
			} else {
				e.target.src = foundPokemon.sprites.front
			}
		}
	})

	searchBar.addEventListener("input", (e) => {
		const filteredPokemon = allPokemon.filter((pokemon) => {
			return pokemon.name.includes(e.target.value)
		})
		showAllPokemon(filteredPokemon)
	})

	function renderSinglePokemon(pokemon) {
		return `
			<div data-id="${pokemon.id}"class="pokemon-container">
				<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
					<h1 class="center-text">${pokemon.name}</h1>
					<div style="width:239px;margin:auto">
						<div style="width:96px;margin:auto">
							<img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
						</div>
						<button data-id="${pokemon.id}" data-action="edit">edit</button>
						<button data-id="${pokemon.id}" data-action="delete">delete</button>
					</div>
				</div>
			</div>
		`
	}


	fetchPokemon()
})
