app.controller('GameController', ['$scope', function($scope) {

  $scope.title = 'Game';

  $scope.player1 = {name:"Pelaaja yksi", time:"5:00", player: true};
  $scope.player2 = {name:"Pelaaja kaksi", time:"5:00", player: false};
  $scope.player3 = {name:"Pelaaja kolme", time:"5:00", player: false};
  $scope.player4 = {name:"Pelaaja neljä", time:"5:00", player: false};

  createBoard("ground7", "white", false);
  createBoard("ground8", "black", true);

  function chessToDests(chess) {
    var dests = {};
    chess.SQUARES.forEach(function(s) {
      var ms = chess.moves({square: s, verbose: true});
      if (ms.length) dests[s] = ms.map(function(m) { return m.to; });
    });
    return dests;
  }

  function chessToColor(chess) {
    return (chess.turn() == "w") ? "white" : "black";
  }

  function createBoard(id, spin, move) {
    var board;
    var chess = new Chess();
    var onMove = function(orig, dest) {
      chess.move({from: orig, to: dest});
      ground.set({
        turnColor: chessToColor(chess),
        movable: {
          color: chessToColor(chess),
          dests: chessToDests(chess)
        }
      });
      console.log(ground.getFen());
    };
    ground = Chessground(document.getElementById(id), {
      viewOnly: move,
      turnColor: "white",
      orientation: spin,
      animation: {
        duration: 500
      },
      movable: {
        free: true,
        color: chessToColor(chess),
        premove: true,
        dests: chessToDests(chess),
        coordinates: false,
        events: {
          after: onMove
        }
      },
      drawable: {
        enabled: true
      }
    });
    window.cg7 = ground;
  }
  
}]);
