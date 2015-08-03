app.controller('mainCtrl', function($scope, mainService) {
	$scope.pokemonInfo = mainService.getPokemon();
})