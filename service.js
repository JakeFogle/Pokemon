// Make an array with 16 Pokemon names
var data = [
			{"Name": "Bulbasaur", "Species": "Seed", "Attack": "49"},
			{"Name": "Ivysaur", "Species": "Seed", "Attack": "62"},
			{"Name": "Venusaur", "Species": "Seed", "Attack": "82"},
			{"Name": "Charmander", "Species": "Fire", "Attack": "52"},
			{"Name": "Charmeleon", "Species": "Fire", "Attack": "64"},
			{"Name": "Charizard", "Species": "Fire", "Attack": "84"},
			{"Name": "Squirtle", "Species": "Water", "Attack": "48"},
			{"Name": "Wartortle", "Species": "Water", "Attack": "63"},
			{"Name": "Blastoise", "Species": "Water", "Attack": "83"},
			{"Name": "Caterpie", "Species": "Bug", "Attack": "30"},
			{"Name": "Metapod", "Species": "Bug", "Attack": "20"},
			{"Name": "Butterfree", "Species": "Bug", "Attack": "45"},
			{"Name": "Weedle", "Species": "Bug", "Attack": "35"},
			{"Name": "Kakuna", "Species": "Bug", "Attack": "25"},
			{"Name": "Beedrill", "Species": "Bug", "Attack": "90"},
			{"Name": "Pidgey", "Species": "Bird", "Attack": "45"},
];

app.service('mainService', function() {
	this.getPokemon = function() {
		return data;
	};

	this.pokemonInfo = data;

});
