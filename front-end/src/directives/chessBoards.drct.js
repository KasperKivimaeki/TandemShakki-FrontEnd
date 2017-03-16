app.directive('bughouseBoard', function () {
    return {
        restrict:'E',
        transclude: true,
        template: '<div class="chessground wood cburnett" ng-controller="bughouseBoardController"></div>',
        replace: true
    };
});
