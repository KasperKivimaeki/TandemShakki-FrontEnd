app.directive('chessBoards', function () {
	var size = Number(element.text) ; 
	return {
		restrict:'E',
		transclude: true,
		template: "<div> </div>"
		controller: "bughouseController as bughouseController"
	}
});
